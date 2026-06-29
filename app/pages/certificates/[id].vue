<script setup lang="ts">
const route = useRoute()
const { data } = await useFetch<{
  item: {
    id: string
    lot: string
    title: string
    issuedAt: string
    source: string
    productName: string
    productSlug: string
  }
}>(`/api/certificates/${route.params.id}`)

if (!data.value?.item) {
  throw createError({ statusCode: 404, statusMessage: 'Certificate not found' })
}

const certificate = computed(() => data.value!.item)

useSeoMeta({
  title: () => `${certificate.value.title} | Health US`,
  description: () => `${certificate.value.productName} certificate for lot ${certificate.value.lot}.`
})

useReveal()
</script>

<template>
  <SectionShell eyebrow="Certificate detail" :title="certificate.title" :description="`${certificate.productName} | Lot ${certificate.lot}`">
    <div class="rounded border border-line bg-white p-6">
      <dl class="grid gap-4 sm:grid-cols-2">
        <div>
          <dt class="text-sm font-bold text-ink-900">Product</dt>
          <dd class="mt-1 text-sm text-ink-700">{{ certificate.productName }}</dd>
        </div>
        <div>
          <dt class="text-sm font-bold text-ink-900">Lot</dt>
          <dd class="mt-1 text-sm text-ink-700">{{ certificate.lot }}</dd>
        </div>
        <div>
          <dt class="text-sm font-bold text-ink-900">Issued date</dt>
          <dd class="mt-1 text-sm text-ink-700">{{ certificate.issuedAt }}</dd>
        </div>
        <div>
          <dt class="text-sm font-bold text-ink-900">Source</dt>
          <dd class="mt-1 text-sm text-ink-700">{{ certificate.source }}</dd>
        </div>
      </dl>
      <NuxtLink :to="`/products/${certificate.productSlug}`" class="mt-6 inline-flex rounded bg-brand-600 px-5 py-3 text-sm font-bold text-white">
        View product
      </NuxtLink>
    </div>
  </SectionShell>
</template>
