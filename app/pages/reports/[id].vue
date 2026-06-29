<script setup lang="ts">
const route = useRoute()
const { data } = await useFetch<{
  item: {
    id: string
    lot: string
    title: string
    issuedAt: string
    result: string
    productName: string
    productSlug: string
  }
}>(`/api/reports/${route.params.id}`)

if (!data.value?.item) {
  throw createError({ statusCode: 404, statusMessage: 'Report not found' })
}

const report = computed(() => data.value!.item)

useSeoMeta({
  title: () => `${report.value.title} | Health US`,
  description: () => `${report.value.productName} report for lot ${report.value.lot}.`
})

useReveal()
</script>

<template>
  <SectionShell eyebrow="Report detail" :title="report.title" :description="`${report.productName} | Lot ${report.lot}`">
    <div class="rounded border border-line bg-white p-6">
      <dl class="grid gap-4 sm:grid-cols-2">
        <div>
          <dt class="text-sm font-bold text-ink-900">Product</dt>
          <dd class="mt-1 text-sm text-ink-700">{{ report.productName }}</dd>
        </div>
        <div>
          <dt class="text-sm font-bold text-ink-900">Lot</dt>
          <dd class="mt-1 text-sm text-ink-700">{{ report.lot }}</dd>
        </div>
        <div>
          <dt class="text-sm font-bold text-ink-900">Issued date</dt>
          <dd class="mt-1 text-sm text-ink-700">{{ report.issuedAt }}</dd>
        </div>
        <div>
          <dt class="text-sm font-bold text-ink-900">Result</dt>
          <dd class="mt-1 text-sm font-semibold text-brand-700">{{ report.result }}</dd>
        </div>
      </dl>
      <NuxtLink :to="`/products/${report.productSlug}`" class="mt-6 inline-flex rounded bg-brand-600 px-5 py-3 text-sm font-bold text-white">
        View product
      </NuxtLink>
    </div>
  </SectionShell>
</template>
