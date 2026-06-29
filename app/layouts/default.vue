<script setup lang="ts">
import SiteFooter from '~/components/layout/SiteFooter.vue'
import SiteHeader from '~/components/layout/SiteHeader.vue'
</script>

<template>
  <div class="min-h-screen bg-white text-ink-900">
    <SiteHeader />
    <main class="pt-[118px]">
      <slot />
    </main>
    <SiteFooter />
  </div>
</template>
