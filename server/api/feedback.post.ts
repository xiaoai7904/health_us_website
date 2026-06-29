export default defineEventHandler(async (event) => {
  const body = await readBody<{ email?: string; type?: string; title?: string; description?: string }>(event)

  if (!body.email || !body.type || !body.title || !body.description) {
    throw createError({ statusCode: 422, statusMessage: 'Required feedback fields are missing' })
  }

  return { ok: true, message: 'Feedback received' }
})
