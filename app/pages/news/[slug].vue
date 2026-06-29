<script setup lang="ts">
import type { NewsArticle } from '~/types/content'

const route = useRoute()
const { data } = await useFetch<{ item: NewsArticle; related: NewsArticle[] }>(`/api/news/${route.params.slug}`)

if (!data.value?.item) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}

const article = computed(() => data.value!.item)

useSeoMeta({
  title: () => `${article.value.title} | Health US`,
  description: () => article.value.excerpt,
  ogTitle: () => article.value.title,
  ogDescription: () => article.value.excerpt
})

useReveal()
</script>

<template>
  <article class="reveal mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
    <NuxtLink to="/news" class="text-sm font-semibold text-brand-700">Back to news</NuxtLink>
    <p class="mt-8 text-sm font-semibold text-brand-700">{{ article.category }} | {{ article.publishedAt }}</p>
    <h1 class="mt-3 text-4xl font-bold tracking-normal text-ink-900">{{ article.title }}</h1>
    <p class="mt-5 text-lg leading-8 text-ink-700">{{ article.excerpt }}</p>
    <div class="mt-8 border-t border-line pt-8 text-base leading-8 text-ink-700">
      {{ article.body }}
    </div>
  </article>
</template>
