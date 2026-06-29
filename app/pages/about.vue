<script setup lang="ts">
useSeoMeta({
  title: 'About Us | Health US',
  description: 'Learn about Health US product documentation and quality information workflows.'
})

useReveal()
</script>

<template>
  <SectionShell eyebrow="About" title="Built for clear product documentation" description="Health US organizes product information, certificates, reports, support, and updates for research procurement workflows.">
    <div class="grid gap-5 md:grid-cols-3">
      <article class="rounded border border-line p-5">
        <h2 class="font-bold text-ink-900">Traceability</h2>
        <p class="mt-3 text-sm leading-6 text-ink-700">Product pages connect names, lots, certificates, and test report information.</p>
      </article>
      <article class="rounded border border-line p-5">
        <h2 class="font-bold text-ink-900">Support</h2>
        <p class="mt-3 text-sm leading-6 text-ink-700">Contact and feedback forms route questions before purchase or documentation review.</p>
      </article>
      <article class="rounded border border-line p-5">
        <h2 class="font-bold text-ink-900">Compliance</h2>
        <p class="mt-3 text-sm leading-6 text-ink-700">Content avoids unsupported health claims and separates product facts from marketing.</p>
      </article>
    </div>
  </SectionShell>
</template>
