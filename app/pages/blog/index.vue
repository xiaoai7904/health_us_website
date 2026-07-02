<script setup lang="ts">
import { blogPosts } from '~/data/blog'

useSeoMeta({
  title: 'Blog | Health US',
  description: 'Read peptide supplier, quality, documentation, and company updates.'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://norcopeptide.com/blog/'
    }
  ]
})

useReveal()
</script>

<template>
  <div class="bg-white">
    <section class="border-b border-[#e8eef4] bg-[#f8fafc] py-9 text-center">
      <div class="mx-auto max-w-[1222px] px-4 sm:px-6 lg:px-8">
        <h1 class="text-[34px] font-semibold leading-tight text-title-900">
          Blog
        </h1>
        <nav aria-label="Breadcrumb" class="mt-2 flex items-center justify-center gap-2 text-[13px] text-ink-700">
          <NuxtLink to="/" class="transition hover:text-brand-600">
            Home
          </NuxtLink>
          <span class="h-1 w-1 rounded-full bg-[#c8d0d8]" aria-hidden="true" />
          <span class="text-ink-700">Blog</span>
        </nav>
      </div>
    </section>

    <main class="mx-auto max-w-[1222px] px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div id="blog-box" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="post in blogPosts"
          :key="post.id"
          class="reveal group relative bg-white shadow-[0_1px_8px_rgba(0,0,0,0.12)] transition duration-200 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.14)]"
        >
          <NuxtLink :to="`/blog/${post.slug}`" class="block overflow-hidden" :aria-label="post.title">
            <div class="relative aspect-[700/467] overflow-hidden bg-[#f6f7f8]">
              <img
                :src="post.image"
                :alt="post.imageAlt"
                class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              >
              <span class="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" aria-hidden="true" />
            </div>
          </NuxtLink>

          <time
            :datetime="post.publishedAt"
            class="absolute left-5 top-5 flex h-[70px] w-[62px] flex-col items-center justify-center bg-white text-center text-ink-900 shadow-[0_1px_8px_rgba(0,0,0,0.16)]"
          >
            <span class="text-[26px] font-semibold leading-none">{{ post.day }}</span>
            <span class="mt-1 text-[12px] font-semibold uppercase text-ink-700">{{ post.month }}</span>
          </time>

          <div class="px-6 pb-7 pt-6">
            <header>
              <h2 class="text-[20px] font-semibold leading-7 text-title-900">
                <NuxtLink :to="`/blog/${post.slug}`" class="transition hover:text-brand-600">
                  {{ post.title }}
                </NuxtLink>
              </h2>
            </header>

            <p class="mt-3 text-[14px] leading-6 text-[#666]">
              {{ post.excerpt }}
            </p>

            <NuxtLink
              :to="`/blog/${post.slug}`"
              class="mt-5 inline-flex min-h-10 items-center rounded-[2px] border border-brand-600 px-5 text-[12px] font-semibold uppercase text-brand-600 transition hover:bg-brand-600 hover:text-white"
            >
              Read More
            </NuxtLink>
          </div>
        </article>
      </div>

      <div class="h-16" />
    </main>
  </div>
</template>
