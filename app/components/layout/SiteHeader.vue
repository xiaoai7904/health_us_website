<script setup lang="ts">
const isMobileOpen = ref(false)
const isSearchOpen = ref(false)

const peptideTabs = [
  {
    label: 'All Peptides',
    columns: [['Browse all peptides']]
  },
  {
    label: 'Popular',
    columns: [
      ['Blend: BPC-57 TB-500', 'Blend: Ipamorelin CJC129 No DAC', 'Blend: KPV GHK-Cu BPC-157 TB-500 (KLOW)', 'BPC-57', 'GHK-Cu'],
      ['NAD', 'Glutathione', 'MOTS-C', 'Epitalon']
    ]
  },
  {
    label: 'New',
    columns: [
      ['N-Acetyl Selank 30MG', 'N-Acetyl Semx 30MG', 'P21 10MG'],
      ['Blend: KPV GHK-CU BPC157 TB500', '5-Amino 1MQ 50MG']
    ]
  },
  {
    label: 'Type I',
    columns: [
      ['ARA-290 12MG', 'Blend: BPC157 TB-500 20MG', 'BPC157 10MG', 'DSIP 10MG', 'Epitalon 10MG', 'GHK-Cu Copper Peptide 100MG', 'KPV 10MG', 'Glutathione (1500MG)'],
      ['LL-37 (5MG)', 'Oxytocin 10MG', 'PT-141 10MG', 'SNAP-8 10MG', 'TB-500 Peptide (TB4) 10MG', 'Frag(17-23) TB-500 10MG', 'Thymosin Alpha-1 10MG']
    ]
  },
  {
    label: 'Type II',
    columns: [
      ['Blend: Ipamorelin CJC1295 No DAC', 'CJC-1295 DAC 5MG', 'CJC-1295 No DAC 10MG', 'GHR-2 10MG', 'GHR-6 10MG'],
      ['IGF-1 LR3 1MG', 'Ipamorelin 10MG', 'Kisspeptin', 'Melanota I 10MG', 'Melanota II 10MG', 'Tesamoreln 20MG']
    ]
  },
  {
    label: 'Type III',
    columns: [['5-Amino 1MQ (50MG)', 'AOD-9604 Peptide (10MG)', 'L-Carnitine', 'MOTS-C (20MG)', 'NAD+ Peptide (1000MG)', 'SS-31 30MG']]
  },
  {
    label: 'Type IIII',
    columns: [['N-Acetyl Selank 30MG', 'N-Acetyl Semx 30MG', 'P21 10MG']]
  },
  {
    label: 'Type V',
    columns: [
      ['T15', 'T30', 'R11', 'R20', 'S10'],
      ['Cagri', 'Mazdu', 'Survo']
    ]
  },
  {
    label: 'Blends',
    columns: [['Blend: BPC157 TB-500', 'Blend: Ipamorelin CJC-1295 No DAC', 'Blend: GHK-Cu BPC157 TB500', 'Blend: KPV GHK-CU BPC157 TB500', 'Blend: TB500 BPC157 KPV']]
  },
  {
    label: 'Short Peptides',
    columns: [
      ['Popular', 'Epitalon', 'Pinealon', 'Thymalin', 'Cardiogen', 'Cartalax'],
      ['Chonluten', 'Cortagen', 'Ovagen', 'Prostamax', 'Testagen', 'Vesugen', 'Vilon']
    ]
  },
  {
    label: 'Peptide Packs',
    columns: [['Ipamorelin + Tesamoreln', 'CJC1295 DAC + Ipamorelin', 'Epitalon + Thymalin', 'NAD + Glutathione', 'MOTS-C + SS-31']]
  },
  {
    label: 'Peptide Powders',
    columns: [['Acetyl Hexapeptide-8', 'Acetyl Octapeptide-3', 'GHK-Cu Powder 1000MG', 'Pal-GHK', 'Pal Pentapeptide-4', 'Pal Tetrapeptide-7', 'Pal Tripeptide-38']]
  }
]

const supportItems = [
  { label: 'Contact', to: '/contact' },
  { label: 'Track Your Order', to: '/order' },
  { label: 'Our Company', to: '/about' },
  { label: 'Reconstitution Calculator', to: '/testing' },
  { label: 'Terms Of Use', to: '/faq' }
]

const closeMobile = () => {
  isMobileOpen.value = false
}
</script>

<template>
  <header id="header" class="fixed inset-x-0 top-0 z-50 bg-white shadow-sm">
    <div id="top-bar" class="h-[30px] bg-brand-600 text-white">
      <div class="mx-auto flex h-full max-w-7xl items-center justify-center px-4 sm:px-6 lg:px-8">
        <p class="text-[18px] font-medium leading-none">For research use only.</p>
      </div>
    </div>

    <div id="masthead" class="relative bg-white">
      <div class="mx-auto flex h-[88px] max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <NuxtLink
          to="/"
          class="flex h-full w-[260px] shrink-0 items-center sm:w-[405px]"
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

          <NuxtLink to="/" class="header-link" active-class="text-brand-600">Home</NuxtLink>

          <div class="group relative h-full">
            <button class="header-link h-full" type="button" aria-haspopup="true">
              Peptides
              <svg class="ml-1 size-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z" clip-rule="evenodd" />
              </svg>
            </button>

            <div class="invisible absolute right-0 top-full w-[800px] translate-y-2 border border-line bg-white p-5 text-sm text-ink-900 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <div class="grid grid-cols-[190px_1fr] gap-5">
                <div class="border-r border-line pr-4">
                  <NuxtLink
                    v-for="tab in peptideTabs"
                    :key="tab.label"
                    to="/products"
                    class="block border-b border-line/70 px-2 py-2 font-medium text-ink-900 transition hover:text-brand-600"
                  >
                    {{ tab.label }}
                  </NuxtLink>
                </div>
                <div class="grid grid-cols-2 gap-x-8 gap-y-5">
                  <div v-for="tab in peptideTabs.slice(1, 5)" :key="tab.label">
                    <p class="mb-2 font-semibold text-brand-600">{{ tab.label }}</p>
                    <div class="grid grid-cols-2 gap-x-5">
                      <ul v-for="(column, index) in tab.columns" :key="index" class="space-y-2 leading-5">
                        <li v-for="item in column.slice(0, 6)" :key="item">
                          <NuxtLink to="/products" class="hover:text-brand-600">{{ item }}</NuxtLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <NuxtLink to="/reports" class="header-link">Lab Tests</NuxtLink>
          <NuxtLink to="/faq" class="header-link">FAQ</NuxtLink>

          <div class="group relative h-full">
            <button class="header-link h-full" type="button" aria-haspopup="true">
              Support
              <svg class="ml-1 size-3" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z" clip-rule="evenodd" />
              </svg>
            </button>
            <div class="invisible absolute right-0 top-full w-56 translate-y-2 border border-line bg-white py-2 text-sm uppercase text-ink-900 opacity-0 shadow-xl transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              <NuxtLink v-for="item in supportItems" :key="item.label" :to="item.to" class="block px-4 py-2 hover:text-brand-600">
                {{ item.label }}
              </NuxtLink>
            </div>
          </div>

          <NuxtLink to="/order" class="ml-2 flex h-full items-center px-2 text-ink-900 transition hover:text-brand-600" aria-label="Cart">
            <svg class="size-[30px]" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6h15l-1.5 8.5H8L6 3H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <circle cx="9" cy="20" r="1.5" fill="currentColor" />
              <circle cx="18" cy="20" r="1.5" fill="currentColor" />
            </svg>
          </NuxtLink>

          <NuxtLink to="/order" class="ml-2 flex size-[52px] items-center justify-center rounded-lg bg-brand-600 text-white transition hover:opacity-80" aria-label="Account">
            <svg class="size-8" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="8" r="3" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
              <path d="M6 21c0-3.866 2.686-7 6-7s6 3.134 6 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </NuxtLink>
        </nav>

        <div class="ml-auto flex items-center gap-3 xl:hidden">
          <button class="flex size-10 items-center justify-center text-ink-900" type="button" aria-label="Search" @click="isSearchOpen = !isSearchOpen">
            <svg class="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m21 21-4.35-4.35m2.35-5.15a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>
          <NuxtLink to="/order" class="flex size-10 items-center justify-center text-ink-900" aria-label="Cart">
            <svg class="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6h15l-1.5 8.5H8L6 3H3" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              <circle cx="9" cy="20" r="1.5" fill="currentColor" />
              <circle cx="18" cy="20" r="1.5" fill="currentColor" />
            </svg>
          </NuxtLink>
          <button
            class="flex size-10 items-center justify-center text-ink-900"
            type="button"
            :aria-expanded="isMobileOpen"
            aria-controls="main-menu"
            aria-label="Menu"
            @click="isMobileOpen = !isMobileOpen"
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

      <div v-if="isMobileOpen" id="main-menu" class="border-t border-line bg-white xl:hidden">
        <nav class="mx-auto grid max-w-7xl gap-1 px-4 py-3" aria-label="Mobile navigation">
          <NuxtLink to="/" class="mobile-link" @click="closeMobile">Home</NuxtLink>
          <NuxtLink to="/products" class="mobile-link" @click="closeMobile">Peptides</NuxtLink>
          <NuxtLink to="/reports" class="mobile-link" @click="closeMobile">Lab Tests</NuxtLink>
          <NuxtLink to="/faq" class="mobile-link" @click="closeMobile">FAQ</NuxtLink>
          <NuxtLink to="/contact" class="mobile-link" @click="closeMobile">Support</NuxtLink>
        </nav>
      </div>
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
</style>
