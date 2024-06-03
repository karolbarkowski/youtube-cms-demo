import { XMLParser } from 'fast-xml-parser'
import { FDDistribution, JednostkaMiary, Kategoria, Magazyn, Producent, Produkt } from './types'
import { Manufacturer, Product, ProductCategory, Uom, Warehouse } from '../../../payload-types'
import {
  categoryCreate,
  categoryUpdate,
  categoryFetchByErpId,
} from '../../../../app/_api/productCategories'
import { uomFetchByErpId, uomCreate, uomUpdate } from '../../../../app/_api/unitsOfMeasure'
import {
  warehouseFetchByErpId,
  warehouseUpdate,
  warehouseCreate,
} from '../../../../app/_api/warehouses'
import { Upsert } from '../../../utilities/graphqlUtils'
import {
  manufacturerCreate,
  manufacturerFetchByErpId,
  manufacturerUpdate,
} from '../../../../app/_api/manufacturers'
import { productCreate, productFetchByErpId, productUpdate } from '../../../../app/_api/products'

const parserOptions = {
  ignoreAttributes: false,
  attributeNamePrefix: '_',
}

const ERP_PREFIX = 'FDD_'

export default async (xmlFileContent: string) => {
  const parser = new XMLParser(parserOptions)
  let data = parser.parse(xmlFileContent) as FDDistribution

  // await processUOMs(data.dane.jednostki_miary.jm)
  // await processWarehouses(data.dane.magazyny.m)
  // await processManufacturers(data.dane.producenci.pr)
  // await processCategories(data.dane.kategorie.k)
  await processProducts(data.dane.produkty.p)
}

async function processUOMs(data: JednostkaMiary[]) {
  data.forEach(async (u, i) => {
    const erpId = `${ERP_PREFIX}${u._id}`
    const uom = {
      erpId: erpId,
      name: u._skrot,
    } as Uom

    await Upsert(uomFetchByErpId, uomUpdate, uomCreate, erpId, uom)
  })
}

async function processWarehouses(data: Magazyn[] | Magazyn) {
  if (Array.isArray(data)) {
    data.forEach(async (w, i) => {
      await parseWarehouse(w)
    })
  } else {
    await parseWarehouse(data)
  }
}

async function parseWarehouse(m: Magazyn) {
  const erpId = `${ERP_PREFIX}${m._id}`
  const warehouse = {
    erpId: erpId,
    name: m._nazwa,
    description: m.m_opis,
  } as Warehouse

  await Upsert(warehouseFetchByErpId, warehouseUpdate, warehouseCreate, erpId, warehouse)
}

async function processManufacturers(data: Producent[] | Producent) {
  if (Array.isArray(data)) {
    data.forEach(async (m, i) => {
      await parseManufacturer(m)
    })
  } else {
    await parseManufacturer(data)
  }
}

async function parseManufacturer(m: Producent) {
  const erpId = `${ERP_PREFIX}${m._id}`
  const manufacturer = {
    erpId: erpId,
    name: m._nazwa,
    description: m.pr_description,
    keywords: m.pr_keywords,
    title: m.pr_title,
  } as Manufacturer

  await Upsert(
    manufacturerFetchByErpId,
    manufacturerUpdate,
    manufacturerCreate,
    erpId,
    manufacturer,
  )
}

async function processCategories(data: Kategoria[]) {
  data.forEach(async (c, i) => {
    const erpId = `${ERP_PREFIX}${c._id}`
    const category = {
      erpId: erpId,
      name: c.k_title,
      description: c.k_description,
      keywords: c.k_description,
    } as ProductCategory

    await Upsert(categoryFetchByErpId, categoryUpdate, categoryCreate, erpId, category)
  })
}

async function processProducts(data: Produkt[]) {
  data.forEach(async (p, i) => {
    const erpId = `${ERP_PREFIX}${p._id}`
    const product = {
      erpId: erpId,
      title: p.html_title,
      code: p.kod_producenta.toString(),
      description: p.opis,
      ean: p.kod_ean.toString(),
      name: p.nazwa,
      price: parseFloat(p._cena),
      pricePrevious: parseFloat(p._cena_poprzednia),
      quantity: parseFloat(p._ilosc),
      quantityMin: parseFloat(p._ilosc_min),
      quantityStep: parseFloat(p._ilosc_przyrost),
      vat: parseFloat(p._stawka_vat),

      meta: {
        description: p.html_description,
        image: p.zdjecia.z[0]._url,
        title: p.html_title,
      },
    } as Product

    await Upsert(productFetchByErpId, productUpdate, productCreate, erpId, product)
  })
}
