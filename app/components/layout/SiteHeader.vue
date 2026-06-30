<script setup lang="ts">
const isMobileOpen = ref(false)
const isSearchOpen = ref(false)

const navItems = [
  { label: 'HOME', to: '/' },
  { label: 'product', to: '/products' },
  { label: 'blog', to: '/blog' },
  { label: 'faq', to: '/faq' },
  { label: 'about us', to: '/about' },
  { label: 'contace us', to: '/contact' }
]

const closeMobile = () => {
  isMobileOpen.value = false
}

const toggleMobile = () => {
  isSearchOpen.value = false
  isMobileOpen.value = !isMobileOpen.value
}

watch(isMobileOpen, (open) => {
  if (!import.meta.client) {
    return
  }

  document.body.style.overflow = open ? 'hidden' : ''
})

onBeforeUnmount(() => {
  if (import.meta.client) {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <header id="header" class="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
    <!-- <div id="top-bar" class="h-[30px] bg-brand-600 text-white">
      <div class="mx-auto flex h-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <p class="text-[18px] font-medium leading-none">For research use only.</p>
      </div>
    </div> -->

    <div id="masthead" class="relative bg-white">
      <div class="mx-auto flex h-[88px] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <NuxtLink
          to="/"
          class="flex h-full w-[180px] shrink-0 items-center sm:w-[260px] xl:w-[405px]"
          title="Verified Peptides - Verified Pure Peptides"
          aria-label="Verified Peptides home"
          @click="closeMobile"
        >
          <img
            src="https://verifiedpeptides.com/wp-content/uploads/2023/11/vplogowithvialfront-1.jpg"
            alt="Verified Peptides"
            class="max-h-[88px] w-full object-contain object-left"
          >
        </NuxtLink>

        <nav class="ml-auto hidden h-full items-center xl:flex" aria-label="Primary navigation">
          <button
            class="flex h-full items-center px-3 text-ink-900 transition hover:text-brand-600"
            type="button"
            aria-label="Search"
            :aria-expanded="isSearchOpen"
            aria-controls="header-search"
            @click="isSearchOpen = !isSearchOpen"
          >
            <svg class="size-4" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m21 21-4.35-4.35m2.35-5.15a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>

          <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to" class="header-link" active-class="text-brand-600">
            {{ item.label }}
          </NuxtLink>

          <NuxtLink to="/order" class="ml-2 flex h-full items-center justify-center px-2 text-ink-900 transition hover:text-brand-600" aria-label="Account">
            <svg class="size-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="8" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              <path d="M6 21c0-3.866 2.686-7 6-7s6 3.134 6 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </NuxtLink>
        </nav>

        <div class="ml-auto flex items-center gap-1 sm:gap-3 xl:hidden">
          <button class="flex size-10 items-center justify-center text-ink-900" type="button" aria-label="Search" @click="isSearchOpen = !isSearchOpen">
            <svg class="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m21 21-4.35-4.35m2.35-5.15a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>
          <NuxtLink to="/order" class="flex size-10 items-center justify-center text-ink-900 transition hover:text-brand-600" aria-label="Account">
            <svg class="size-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="8" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              <path d="M6 21c0-3.866 2.686-7 6-7s6 3.134 6 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </NuxtLink>
          <button
            class="flex size-10 items-center justify-center text-ink-900"
            type="button"
            :aria-expanded="isMobileOpen"
            aria-controls="mobile-menu-drawer"
            aria-label="Menu"
            @click="toggleMobile"
          >
            <span class="h-0.5 w-6 bg-current shadow-[0_7px_0_currentColor,0_-7px_0_currentColor]" />
          </button>
        </div>
      </div>

      <div v-if="isSearchOpen" id="header-search" class="absolute inset-x-0 top-full border-t border-line bg-white p-4 shadow-lg">
        <form class="mx-auto flex max-w-3xl border border-line" action="/products" role="search">
          <label for="header-search-input" class="sr-only">Search for:</label>
          <input id="header-search-input" type="search" name="q" class="h-12 min-w-0 flex-1 px-4 outline-none" placeholder="Search...">
          <button class="bg-brand-600 px-5 text-sm font-semibold text-white" type="submit">Search</button>
        </form>
      </div>

      <Transition name="mobile-menu-fade">
        <div
          v-if="isMobileOpen"
          class="fixed inset-0 z-[70] bg-black/45 xl:hidden"
          aria-hidden="true"
          @click="closeMobile"
        />
      </Transition>

      <Transition name="mobile-menu-slide">
        <aside
          v-if="isMobileOpen"
          id="mobile-menu-drawer"
          class="fixed bottom-0 right-0 top-0 z-[80] flex w-[min(88vw,390px)] flex-col bg-white shadow-2xl xl:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          tabindex="0"
          @click.stop
          @keydown.esc="closeMobile"
        >
          <div class="flex min-h-[74px] items-center justify-between border-b border-line px-5">
            <NuxtLink to="/" class="flex max-w-[230px] items-center" aria-label="Verified Peptides home" @click="closeMobile">
              <img
                src="https://verifiedpeptides.com/wp-content/uploads/2023/11/vplogowithvialfront-1.jpg"
                alt="Verified Peptides"
                class="max-h-[58px] w-full object-contain object-left"
              >
            </NuxtLink>
            <button
              class="flex size-10 items-center justify-center rounded-full border border-line text-ink-900 transition hover:bg-brand-50 hover:text-brand-600 focus:outline-none focus:ring-2 focus:ring-brand-600"
              type="button"
              aria-label="Close menu"
              @click="closeMobile"
            >
              <svg class="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m18 6-12 12M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              </svg>
            </button>
          </div>

          <div class="flex-1 overflow-y-auto px-5 py-5">
            <nav class="grid gap-1" aria-label="Mobile primary navigation">
              <NuxtLink v-for="item in navItems" :key="item.to" :to="item.to" class="mobile-link" @click="closeMobile">
                {{ item.label }}
              </NuxtLink>
              <NuxtLink to="/order" class="mobile-link" @click="closeMobile">account</NuxtLink>
            </nav>
          </div>
        </aside>
      </Transition>
    </div>
  </header>
</template>

<style scoped>
.header-link {
  display: inline-flex;
  align-items: center;
  padding: 0 10px;
  font-size: 14px;
  font-weight: 600;
  color: #000;
  text-transform: uppercase;
  transition: color 0.2s ease;
}

.header-link:hover {
  color: #1e73be;
}

.mobile-link {
  border-radius: 4px;
  padding: 12px 10px;
  font-size: 14px;
  font-weight: 600;
  color: #1f2937;
}

.mobile-link:hover {
  background: #eef7ff;
  color: #1e73be;
}

.mobile-menu-fade-enter-active,
.mobile-menu-fade-leave-active {
  transition: opacity 180ms ease;
}

.mobile-menu-fade-enter-from,
.mobile-menu-fade-leave-to {
  opacity: 0;
}

.mobile-menu-slide-enter-active,
.mobile-menu-slide-leave-active {
  transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1);
}

.mobile-menu-slide-enter-from,
.mobile-menu-slide-leave-to {
  transform: translateX(100%);
}

@media (prefers-reduced-motion: reduce) {
  .mobile-menu-fade-enter-active,
  .mobile-menu-fade-leave-active,
  .mobile-menu-slide-enter-active,
  .mobile-menu-slide-leave-active {
    transition: none;
  }
}
</style>
