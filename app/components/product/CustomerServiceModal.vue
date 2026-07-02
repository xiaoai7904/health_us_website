<script setup lang="ts">
defineProps<{
  open: boolean
  productName?: string
}>()

const emit = defineEmits<{
  close: []
}>()

const close = () => emit('close')

onMounted(() => {
  const handleKeydown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') close()
  }

  window.addEventListener('keydown', handleKeydown)
  onBeforeUnmount(() => window.removeEventListener('keydown', handleKeydown))
})
</script>

<template>
  <Teleport to="body">
    <Transition name="page">
      <div v-if="open" class="fixed inset-0 z-[70] flex items-center justify-center px-4 py-6" role="dialog" aria-modal="true">
        <button class="absolute inset-0 bg-ink-900/55" type="button" aria-label="Close customer service dialog" @click="close" />
        <div class="relative w-full max-w-lg rounded bg-white p-6 shadow-2xl">
          <div class="flex items-start justify-between gap-4">
            <div>
              <p class="text-sm font-semibold uppercase tracking-wide text-brand-700">Customer service</p>
              <h2 class="mt-2 text-2xl font-bold text-title-900">Request purchase support</h2>
            </div>
            <button class="rounded border border-line px-3 py-1 text-sm font-semibold" type="button" @click="close">Close</button>
          </div>
          <p class="mt-4 text-sm leading-6 text-ink-700">
            Share your product, package, and report requirements with customer service before submitting an order request.
          </p>
          <div class="mt-5 rounded border border-line bg-brand-50 p-4 text-sm text-ink-700">
            <p v-if="productName"><strong>Product:</strong> {{ productName }}</p>
            <p><strong>Email:</strong> support@example.com</p>
            <p><strong>Hours:</strong> Monday-Friday, 9:00-18:00</p>
          </div>
          <NuxtLink
            to="/contact"
            class="mt-5 inline-flex w-full items-center justify-center rounded bg-brand-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-700"
            @click="close"
          >
            Open contact form
          </NuxtLink>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
