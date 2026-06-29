<script setup lang="ts">
import type { NewsArticle } from '~/types/content'

useSeoMeta({
  title: 'News | Health US',
  description: 'Read product, certificate, testing, and company updates.'
})

const { data } = await useFetch<{ items: NewsArticle[] }>('/api/news')

useReveal()
</script>

<template>
  <SectionShell eyebrow="News" title="Product related information" description="Updates about product documentation, testing reports, and certificate traceability.">
    <div class="grid gap-5 md:grid-cols-2">
      <NuxtLink v-for="article in data?.items" :key="article.id" :to="`/news/${article.slug}`" class="rounded border border-line bg-white p-6 transition hover:border-brand-600 hover:shadow-md">
        <p class="text-sm font-semibold text-brand-700">{{ article.category }} | {{ article.publishedAt }}</p>
        <h2 class="mt-3 text-2xl font-bold text-ink-900">{{ article.title }}</h2>
        <p class="mt-3 text-sm leading-6 text-ink-700">{{ article.excerpt }}</p>
      </NuxtLink>
    </div>
  </SectionShell>
</template>
