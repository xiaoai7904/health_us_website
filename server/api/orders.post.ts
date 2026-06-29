export default defineEventHandler(async (event) => {
  const body = await readBody<{ email?: string; productSlug?: string; packageId?: string }>(event)

  if (!body.email || !body.productSlug) {
    throw createError({ statusCode: 422, statusMessage: 'Email and product are required' })
  }

  return { ok: true, message: 'Order request received' }
})
