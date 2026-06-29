import { products } from '../../utils/mock-data'

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')

  for (const product of products) {
    const report = product.reports.find((item) => item.id === id)
    if (report) {
      return { item: { ...report, productName: product.name, productSlug: product.slug } }
    }
  }

  throw createError({ statusCode: 404, statusMessage: 'Report not found' })
})
