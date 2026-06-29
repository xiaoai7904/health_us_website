export default defineEventHandler(async (event) => {
  const body = await readBody<{ email?: string; name?: string; message?: string }>(event)

  if (!body.email || !body.message) {
    throw createError({ statusCode: 422, statusMessage: 'Email and message are required' })
  }

  return { ok: true, message: 'Contact request received' }
})
