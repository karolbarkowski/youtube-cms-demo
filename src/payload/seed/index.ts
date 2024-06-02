import type { Payload } from 'payload'

// Next.js revalidation errors are normal when seeding the database without a server running
// i.e. running `yarn seed` locally instead of using the admin UI within an active app
// The app is not running to revalidate the pages and so the API routes are not available
// These error messages can be ignored: `Error hitting revalidate route for...`
export const seed = async (payload: Payload): Promise<void> => {
  payload.logger.info('Seeding database...')

  // payload.logger.info(`— Seeding dictionaries...`)
  // await Promise.all([
  //   ...doctionaryUnits.map(async u => {
  //     payload.delete({
  //       collection: u.name as 'pages',
  //       where: {},
  //     })
  //   }),
  // ])

  // await Promise.all([
  //   ...doctionaryUnits.map(async u =>
  //     payload.create({
  //       collection: 'units',
  //       data: {
  //         id: u.code,
  //         code: u.code,
  //         name: u.name,
  //       },
  //     }),
  //   ), // eslint-disable-line function-paren-newline
  // ])

  payload.logger.info('Seeded database successfully!')
}
