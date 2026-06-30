<script setup lang="ts">
import { blogPosts, getBlogHeadings, getBlogPost } from '~/data/blog'

const config = useRuntimeConfig()
const route = useRoute()
const slug = computed(() => String(route.params.slug || ''))
const post = computed(() => getBlogPost(slug.value))

if (!post.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Blog post not found'
  })
}

const currentPost = computed(() => post.value!)
const headings = computed(() => getBlogHeadings(currentPost.value))
const relatedPosts = computed(() => blogPosts.filter((item) => item.slug !== currentPost.value.slug).slice(0, 3))
const canonicalUrl = computed(() => `${config.public.siteUrl.replace(/\/$/, '')}/blog/${currentPost.value.slug}`)
const encodedShareUrl = computed(() => encodeURIComponent(canonicalUrl.value))
const encodedShareTitle = computed(() => encodeURIComponent(currentPost.value.title))
const shareLinks = computed(() => [
  {
    label: 'Share on Facebook',
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodedShareUrl.value}`,
    class: 'bg-[#1877f2] hover:bg-[#0f62d7]',
    icon: 'facebook'
  },
  {
    label: 'Share on Twitter',
    href: `https://twitter.com/intent/tweet?url=${encodedShareUrl.value}&text=${encodedShareTitle.value}`,
    class: 'bg-[#1da1f2] hover:bg-[#0d8bd9]',
    icon: 'twitter'
  },
  {
    label: 'Share on LinkedIn',
    href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedShareUrl.value}`,
    class: 'bg-[#0a66c2] hover:bg-[#084f96]',
    icon: 'linkedin'
  },
  {
    label: 'Share on Reddit',
    href: `https://www.reddit.com/submit?url=${encodedShareUrl.value}&title=${encodedShareTitle.value}`,
    class: 'bg-[#ff4500] hover:bg-[#d83a00]',
    icon: 'reddit'
  }
])

useSeoMeta({
  title: () => `${currentPost.value.title} | Health US`,
  description: () => currentPost.value.excerpt
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: canonicalUrl.value
    }
  ]
})

useReveal()
</script>

<template>
  <div class="bg-white text-[#242424]">
    <section class="bg-[#1f2933] py-12 text-center text-white lg:py-16">
      <div class="mx-auto max-w-[1222px] px-4 sm:px-6 lg:px-8">
        <NuxtLink
          :to="`/blog?category=${currentPost.categorySlug}`"
          class="inline-flex min-h-8 items-center rounded bg-brand-600 px-4 text-[12px] font-semibold uppercase text-white"
        >
          {{ currentPost.category }}
        </NuxtLink>

        <h1 class="mx-auto mt-5 max-w-4xl text-[34px] font-semibold leading-tight sm:text-[44px]">
          {{ currentPost.title }}
        </h1>

        <div class="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[13px] text-white/78">
          <span>Posted by</span>
          <span>Updated {{ currentPost.updatedAt }}</span>
          <time :datetime="currentPost.publishedAt">On {{ currentPost.publishedAt }}</time>
          <span>0</span>
        </div>
      </div>
    </section>

    <main class="mx-auto grid max-w-[1222px] gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[300px_1fr] lg:px-8 lg:py-12">
      <aside class="reveal lg:sticky lg:top-[118px] lg:self-start">
        <nav id="blog-table" class="border border-[#e8edf2] bg-white shadow-[0_1px_8px_rgba(0,0,0,0.08)]" aria-label="Table of Contents">
          <div class="border-b border-[#e8edf2] px-5 py-4">
            <h2 class="text-[18px] font-semibold text-[#222]">
              Table of Contents
            </h2>
          </div>
          <ol class="space-y-1 px-5 py-4 text-[14px] leading-6">
            <li v-for="heading in headings" :key="heading.id" :class="heading.level === 3 ? 'pl-4' : ''">
              <a :href="`#${heading.id}`" class="block rounded px-2 py-1 text-[#555] transition hover:bg-brand-50 hover:text-brand-600">
                {{ heading.text }}
              </a>
            </li>
          </ol>
        </nav>
      </aside>

      <article class="reveal min-w-0">
        <!-- eslint-disable-next-line vue/no-v-html -- CMS rich text must be sanitized before it reaches this page. -->
        <div class="blog-content" v-html="currentPost.contentHtml" />

        <div class="mt-10 flex items-center gap-3 border-t border-[#e8edf2] pt-6">
          <span class="text-[13px] font-semibold uppercase text-[#777]">Share</span>
          <a
            v-for="item in shareLinks"
            :key="item.label"
            :href="item.href"
            :aria-label="item.label"
            :class="item.class"
            class="flex size-9 items-center justify-center rounded-full text-white transition focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg v-if="item.icon === 'facebook'" class="size-4" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
            </svg>
            <svg v-else-if="item.icon === 'twitter'" class="size-4" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
            </svg>
            <svg v-else-if="item.icon === 'linkedin'" class="size-4" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
            <svg v-else class="size-4" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
              <path d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z" />
            </svg>
          </a>
        </div>

        <!-- <section class="mt-12 bg-brand-50 px-6 py-9 text-center">
          <img
            src="https://norcopeptide.com/wp-content/uploads/2026/03/articleIcon.png"
            alt=""
            class="mx-auto size-16 object-contain"
            loading="lazy"
          >
          <h2 class="mt-4 text-[28px] font-semibold text-[#222]">
            Get a Free Quote Today
          </h2>
          <p class="mx-auto mt-3 max-w-xl text-[15px] leading-7 text-[#555]">
            Looking for custom peptides or bulk orders? Our team is ready to help - request a free quotation now!
          </p>
          <NuxtLink
            to="/contact"
            class="mt-6 inline-flex min-h-12 items-center justify-center rounded border border-brand-600 px-7 text-[13px] font-semibold uppercase text-brand-600 transition hover:bg-brand-600 hover:text-white"
          >
            Quote Now
          </NuxtLink>
        </section> -->

        <section class="mt-12">
          <h2 class="text-center text-[28px] font-semibold lowercase text-[#222]">
            view related content
          </h2>
          <div class="mt-7 grid gap-5 md:grid-cols-3">
            <NuxtLink
              v-for="item in relatedPosts"
              :key="item.id"
              :to="`/blog/${item.slug}`"
              class="border border-[#e8edf2] bg-white p-5 transition hover:border-brand-600 hover:shadow-md"
            >
              <time :datetime="item.publishedAt" class="text-[12px] font-semibold uppercase text-brand-600">
                {{ item.month }} {{ item.day }}
              </time>
              <h3 class="mt-3 text-[16px] font-semibold leading-6 text-[#222]">
                {{ item.title }}
              </h3>
            </NuxtLink>
          </div>
        </section>
      </article>
    </main>
  </div>
</template>

<style scoped>
.blog-content {
  color: #555;
  font-size: 16px;
  line-height: 1.8;
}

.blog-content :deep(p) {
  margin: 0 0 22px;
}

.blog-content :deep(h2) {
  scroll-margin-top: 130px;
  margin: 34px 0 16px;
  color: #222;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.25;
}

.blog-content :deep(h3) {
  scroll-margin-top: 130px;
  margin: 28px 0 14px;
  color: #222;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.3;
}

.blog-content :deep(ul),
.blog-content :deep(ol) {
  margin: 0 0 24px 22px;
  padding: 0;
}

.blog-content :deep(ul) {
  list-style: disc;
}

.blog-content :deep(ol) {
  list-style: decimal;
}

.blog-content :deep(li) {
  margin: 8px 0;
}

.blog-content :deep(table) {
  width: 100%;
  min-width: 760px;
  border-collapse: collapse;
  font-size: 14px;
}

.blog-content :deep(.table-wrap) {
  margin: 28px 0;
  overflow-x: auto;
}

.blog-content :deep(th),
.blog-content :deep(td) {
  border: 1px solid #e1e6eb;
  padding: 12px 14px;
  text-align: left;
}

.blog-content :deep(th) {
  background: #f8fafc;
  color: #222;
  font-weight: 600;
}

.blog-content :deep(hr) {
  margin: 34px 0;
  border: 0;
  border-top: 1px solid #e8edf2;
}
</style>
