import { products } from '../../utils/mock-data'

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')

  for (const product of products) {
    const certificate = product.certificates.find((item) => item.id === id)
    if (certificate) {
      return { item: { ...certificate, productName: product.name, productSlug: product.slug } }
    }
  }

  throw createError({ statusCode: 404, statusMessage: 'Certificate not found' })
})
