'use client'
import React, { useRef } from 'react'
import { AdminViewComponent } from 'payload/config'
import { Button } from 'payload/components'
import ProcessFdDistribution from './FDDistribution/process'
import './imports.scss'

const ImportsAdminView: AdminViewComponent = () => {
  const inputFileRef = useRef(null)

  let onFileUpload = async e => {
    const reader = new FileReader()

    reader.onload = async () => {
      await ProcessFdDistribution(reader.result.toString())
    }
    reader.readAsText(e.target.files[0])
  }

  return (
    <div className="imports">
      <Button onClick={async () => inputFileRef.current.click()}>Upload XML</Button>
      <input type="file" ref={inputFileRef} onChange={onFileUpload}></input>
    </div>
  )
}

export default ImportsAdminView
