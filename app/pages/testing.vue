<script setup lang="ts">
useSeoMeta({
  title: 'Testing Instructions | Health US',
  description: 'Review product testing process, sample requirements, and report interpretation notes.'
})

useReveal()
</script>

<template>
  <SectionShell eyebrow="Testing" title="Product testing instructions" description="A structured explanation for sample handling, report review, and lot verification.">
    <ol class="grid gap-4 md:grid-cols-3">
      <li class="rounded border border-line p-5">
        <strong class="text-ink-900">1. Confirm lot</strong>
        <p class="mt-2 text-sm leading-6 text-ink-700">Match the lot or batch identifier against product packaging and website records.</p>
      </li>
      <li class="rounded border border-line p-5">
        <strong class="text-ink-900">2. Review method</strong>
        <p class="mt-2 text-sm leading-6 text-ink-700">Check the method summary, issue date, and result statement on the report.</p>
      </li>
      <li class="rounded border border-line p-5">
        <strong class="text-ink-900">3. Request support</strong>
        <p class="mt-2 text-sm leading-6 text-ink-700">Contact support when report identifiers or certificate details need clarification.</p>
      </li>
    </ol>
  </SectionShell>
</template>
