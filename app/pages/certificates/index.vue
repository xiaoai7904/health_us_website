<script setup lang="ts">
import type { Product } from '~/types/content'

useSeoMeta({
  title: 'Certificates | Health US',
  description: 'Browse available product certificate summaries.'
})

const { data } = await useFetch<{ items: Product[] }>('/api/products')
const certificates = computed(() => data.value?.items.flatMap((product) => product.certificates.map((certificate) => ({ ...certificate, product: product.name }))) || [])

useReveal()
</script>

<template>
  <SectionShell eyebrow="Certificates" title="Product certificates">
    <div class="grid gap-4">
      <article v-for="certificate in certificates" :key="certificate.id" class="rounded border border-line bg-white p-5">
        <NuxtLink :to="`/certificates/${certificate.id}`" class="text-lg font-bold text-brand-700 hover:underline">{{ certificate.title }}</NuxtLink>
        <p class="mt-2 text-sm text-ink-700">Product: {{ certificate.product }}</p>
        <p class="mt-2 text-sm text-ink-700">Lot: {{ certificate.lot }} | Date: {{ certificate.issuedAt }} | Source: {{ certificate.source }}</p>
      </article>
    </div>
  </SectionShell>
</template>
