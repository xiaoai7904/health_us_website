<script setup lang="ts">
useSeoMeta({
  title: 'Contact Us | Health US',
  description: 'Contact Health US for product documentation, support, and order questions.'
})

const form = reactive({ name: '', email: '', message: '' })
const status = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')

const submit = async () => {
  status.value = 'submitting'
  try {
    await $fetch('/api/contact', { method: 'POST', body: form })
    status.value = 'success'
  } catch {
    status.value = 'error'
  }
}

useReveal()
</script>

<template>
  <SectionShell eyebrow="Contact" title="Contact us" description="Submit your email and message for product, report, or order support.">
    <div class="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
      <aside class="rounded border border-line bg-brand-50 p-6">
        <h2 class="text-xl font-bold text-ink-900">Support channels</h2>
        <div class="mt-4 space-y-3 text-sm leading-6 text-ink-700">
          <p><strong>Email:</strong> support@example.com</p>
          <p><strong>Business hours:</strong> Monday-Friday, 9:00-18:00</p>
          <p><strong>Response:</strong> Product and report questions are routed to customer support.</p>
        </div>
      </aside>
      <form class="grid gap-4 rounded border border-line bg-white p-6" @submit.prevent="submit">
        <label class="grid gap-2 text-sm font-semibold text-ink-900">
          Name
          <input v-model="form.name" class="rounded border border-line px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-brand-100" type="text" autocomplete="name">
        </label>
        <label class="grid gap-2 text-sm font-semibold text-ink-900">
          Email
          <input v-model="form.email" required class="rounded border border-line px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-brand-100" type="email" autocomplete="email">
        </label>
        <label class="grid gap-2 text-sm font-semibold text-ink-900">
          Message
          <textarea v-model="form.message" required class="min-h-36 rounded border border-line px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-brand-100" />
        </label>
        <button class="rounded bg-brand-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-700 disabled:opacity-60" :disabled="status === 'submitting'" type="submit">
          {{ status === 'submitting' ? 'Submitting...' : 'Submit message' }}
        </button>
        <p v-if="status === 'success'" class="text-sm font-semibold text-brand-700">Message submitted.</p>
        <p v-if="status === 'error'" class="text-sm font-semibold text-red-700">Please check required fields and try again.</p>
      </form>
    </div>
  </SectionShell>
</template>
