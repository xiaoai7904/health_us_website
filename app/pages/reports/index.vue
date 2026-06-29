<script setup lang="ts">
import type { Product } from '~/types/content'

useSeoMeta({
  title: 'Test Reports | Health US',
  description: 'Browse available product testing report summaries.'
})

const { data } = await useFetch<{ items: Product[] }>('/api/products')
const reports = computed(() => data.value?.items.flatMap((product) => product.reports.map((report) => ({ ...report, product: product.name }))) || [])

useReveal()
</script>

<template>
  <SectionShell eyebrow="Reports" title="Product test reports">
    <div class="overflow-x-auto rounded border border-line">
      <table class="w-full min-w-[720px] border-collapse bg-white text-left text-sm">
        <thead class="bg-brand-50 text-ink-900">
          <tr>
            <th class="p-4">Product</th>
            <th class="p-4">Report</th>
            <th class="p-4">Lot</th>
            <th class="p-4">Date</th>
            <th class="p-4">Result</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="report in reports" :key="report.id" class="border-t border-line">
            <td class="p-4">{{ report.product }}</td>
            <td class="p-4">
              <NuxtLink :to="`/reports/${report.id}`" class="font-semibold text-brand-700 hover:underline">{{ report.title }}</NuxtLink>
            </td>
            <td class="p-4">{{ report.lot }}</td>
            <td class="p-4">{{ report.issuedAt }}</td>
            <td class="p-4 font-semibold text-brand-700">{{ report.result }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </SectionShell>
</template>
