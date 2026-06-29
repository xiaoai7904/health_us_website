<script setup lang="ts">
useSeoMeta({
  title: 'Feedback | Health US',
  description: 'Submit product, report, website, or order feedback.'
})

const form = reactive({ email: '', type: 'Product question', title: '', description: '' })
const status = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')

const submit = async () => {
  status.value = 'submitting'
  try {
    await $fetch('/api/feedback', { method: 'POST', body: form })
    status.value = 'success'
  } catch {
    status.value = 'error'
  }
}

useReveal()
</script>

<template>
  <SectionShell eyebrow="Feedback" title="Submit a question or issue" description="Tell us about product questions, report access issues, or website feedback.">
    <form class="grid max-w-3xl gap-4 rounded border border-line bg-white p-6" @submit.prevent="submit">
      <label class="grid gap-2 text-sm font-semibold text-ink-900">
        Email
        <input v-model="form.email" required class="rounded border border-line px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-brand-100" type="email">
      </label>
      <label class="grid gap-2 text-sm font-semibold text-ink-900">
        Issue type
        <select v-model="form.type" class="rounded border border-line px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-brand-100">
          <option>Product question</option>
          <option>Report access</option>
          <option>Certificate information</option>
          <option>Website issue</option>
        </select>
      </label>
      <label class="grid gap-2 text-sm font-semibold text-ink-900">
        Title
        <input v-model="form.title" required class="rounded border border-line px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-brand-100" type="text">
      </label>
      <label class="grid gap-2 text-sm font-semibold text-ink-900">
        Description
        <textarea v-model="form.description" required class="min-h-36 rounded border border-line px-4 py-3 font-normal outline-none focus:ring-2 focus:ring-brand-100" />
      </label>
      <button class="rounded bg-brand-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-700 disabled:opacity-60" :disabled="status === 'submitting'" type="submit">
        {{ status === 'submitting' ? 'Submitting...' : 'Submit feedback' }}
      </button>
      <p v-if="status === 'success'" class="text-sm font-semibold text-brand-700">Feedback submitted.</p>
      <p v-if="status === 'error'" class="text-sm font-semibold text-red-700">Please complete all required fields.</p>
    </form>
  </SectionShell>
</template>
