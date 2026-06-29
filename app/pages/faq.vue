<script setup lang="ts">
import type { Faq } from '~/types/content'

useSeoMeta({
  title: 'FAQ | Health US',
  description: 'Common questions about products, reports, certificates, and support.'
})

const { data } = await useFetch<{ items: Faq[] }>('/api/faqs')

useReveal()
</script>

<template>
  <SectionShell eyebrow="FAQ" title="Common questions">
    <div class="grid gap-4">
      <details v-for="faq in data?.items" :key="faq.id" class="rounded border border-line bg-white p-5">
        <summary class="cursor-pointer text-lg font-bold text-ink-900">{{ faq.question }}</summary>
        <p class="mt-3 text-sm leading-6 text-ink-700">{{ faq.answer }}</p>
      </details>
    </div>
  </SectionShell>
</template>
