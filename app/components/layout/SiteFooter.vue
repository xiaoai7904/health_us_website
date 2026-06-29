<template>
  <footer class="border-t border-line bg-ink-900 text-white">
    <div class="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
      <div>
        <p class="text-lg font-black uppercase tracking-wide">Health US</p>
        <p class="mt-3 max-w-xl text-sm leading-6 text-white/70">
          Public product, certificate, report, and support information for qualified research procurement workflows.
        </p>
        <p class="mt-4 text-xs leading-5 text-white/55">
          Products and content are for research information workflows only unless approved business copy states otherwise.
        </p>
      </div>
      <div>
        <p class="text-sm font-semibold">Company</p>
        <ul class="mt-3 space-y-2 text-sm text-white/70">
          <li><NuxtLink to="/about" class="hover:text-white">About us</NuxtLink></li>
          <li><NuxtLink to="/contact" class="hover:text-white">Contact</NuxtLink></li>
          <li><NuxtLink to="/feedback" class="hover:text-white">Feedback</NuxtLink></li>
        </ul>
      </div>
      <div>
        <p class="text-sm font-semibold">Resources</p>
        <ul class="mt-3 space-y-2 text-sm text-white/70">
          <li><NuxtLink to="/reports" class="hover:text-white">Test reports</NuxtLink></li>
          <li><NuxtLink to="/certificates" class="hover:text-white">Certificates</NuxtLink></li>
          <li><NuxtLink to="/faq" class="hover:text-white">FAQ</NuxtLink></li>
        </ul>
      </div>
    </div>
  </footer>
</template>
