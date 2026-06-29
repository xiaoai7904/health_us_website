<script setup lang="ts">
defineProps<{
  eyebrow?: string
  title: string
  description?: string
}>()
</script>

<template>
  <section class="reveal mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mb-8 max-w-3xl">
      <p v-if="eyebrow" class="text-xs font-black uppercase tracking-[0.22em] text-brand-700">{{ eyebrow }}</p>
      <h2 class="mt-2 text-3xl font-black uppercase tracking-normal text-ink-900 md:text-5xl">{{ title }}</h2>
      <p v-if="description" class="mt-3 text-base leading-7 text-ink-700">{{ description }}</p>
    </div>
    <slot />
  </section>
</template>
