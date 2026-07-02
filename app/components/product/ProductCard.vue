<script setup lang="ts">
import type { Product } from '~/types/content'

defineProps<{
  product: Product
}>()
</script>

<template>
  <NuxtLink
    :to="`/products/${product.slug}`"
    class="group flex h-full flex-col rounded-[8px] border border-line bg-white p-4 transition hover:-translate-y-0.5 hover:border-ink-900 hover:shadow-xl"
  >
    <div class="aspect-square overflow-hidden rounded-[8px] bg-brand-50">
      <img
        :src="product.images[0]?.src"
        :alt="product.images[0]?.alt || product.name"
        class="size-full object-cover transition duration-300 group-hover:scale-[1.03]"
        loading="lazy"
      >
    </div>
    <div class="mt-4 flex flex-1 flex-col">
      <p class="text-[11px] font-black uppercase tracking-[0.18em] text-brand-700">{{ product.category }}</p>
      <h3 class="mt-2 min-h-14 text-lg font-black uppercase leading-tight text-ink-900">{{ product.name }}</h3>
      <p class="mt-2 line-clamp-2 text-sm leading-6 text-ink-700">{{ product.summary }}</p>
      <div class="mt-auto flex items-center justify-between gap-4 pt-4">
        <span class="text-base font-black text-ink-900">{{ product.price }}</span>
        <span class="rounded-full bg-ink-900 px-4 py-2 text-xs font-black uppercase tracking-wide text-white">View</span>
      </div>
    </div>
  </NuxtLink>
</template>
