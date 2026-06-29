import { news } from '../../utils/mock-data'

export default defineEventHandler((event) => {
  const slug = getRouterParam(event, 'slug')
  const article = news.find((item) => item.slug === slug)

  if (!article) {
    throw createError({ statusCode: 404, statusMessage: 'Article not found' })
  }

  return {
    item: article,
    related: news.filter((item) => item.slug !== slug).slice(0, 3)
  }
})
