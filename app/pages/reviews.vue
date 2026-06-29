<script setup lang="ts">
import type { Product } from '~/types/content'

useSeoMeta({
  title: 'User Reviews | Health US',
  description: 'Read user feedback about product documentation and support workflows.'
})

const { data } = await useFetch<{ items: Product[] }>('/api/products')
const reviews = computed(() => data.value?.items.flatMap((product) => product.reviews.map((review) => ({ ...review, product: product.name }))) || [])

useReveal()
</script>

<template>
  <SectionShell eyebrow="Reviews" title="User reviews">
    <div class="grid gap-4 md:grid-cols-2">
      <article v-for="review in reviews" :key="review.id" class="rounded border border-line bg-white p-5">
        <p class="text-sm font-semibold text-brand-700">{{ review.product }}</p>
        <h2 class="mt-2 font-bold text-ink-900">{{ review.author }}</h2>
        <p class="mt-1 text-sm text-brand-700">Rating: {{ review.rating }}/5</p>
        <p class="mt-3 text-sm leading-6 text-ink-700">{{ review.body }}</p>
      </article>
    </div>
  </SectionShell>
</template>
