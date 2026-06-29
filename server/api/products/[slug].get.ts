import { products } from '../../utils/mock-data'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')
  const product = products.find((item) => item.slug === slug)

  if (!product) {
    throw createError({ statusCode: 404, statusMessage: 'Product not found' })
  }

  return {
    item: product,
    related: products.filter((item) => product.relatedSlugs.includes(item.slug))
  }
})
