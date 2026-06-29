<script setup lang="ts">
interface CategoryProduct {
  name: string
  href: string
  image: string
  alt: string
  price: string
  action: string
}

useSeoMeta({
  title: 'Shop our Peptides Catalog - Verified Peptides',
  description: 'Shop Our Full Collection of Peptides'
})

const sidebarGroups = [
  {
    title: 'Type I',
    items: ['BPC-157 Peptide (10MG)', 'DSIP Peptide (10MG)', 'GHK-Cu Copper Peptide (100MG)', 'TB-500 Peptide (TB4) 10MG']
  },
  {
    title: 'Type II',
    items: ['CJC-1295 DAC Peptide (5MG)', 'CJC-1295 No DAC Peptide (10MG)', 'Ipamorelin Peptide (10MG)', 'Tesamoreln Peptide (20MG)']
  },
  {
    title: 'Type III',
    items: ['AOD-9604 Peptide (5MG)', 'MOTS-C Peptide (20MG)', 'NAD+ Peptide (1000MG)', 'L-Carnitine 400MG/ML']
  },
  {
    title: 'Blends',
    items: ['Blend: BPC-157 TB-500 Peptide (20MG)', 'Blend: Ipamorelin CJC-1295 (No DAC) 20MG', 'Blend: GHK-Cu BPC-157 TB-500 Peptide (GLOW)', 'Blend: KPV GHK-Cu BPC-157 TB-500 (KLOW)']
  },
  {
    title: 'Short Peptides',
    items: ['Epitalon Peptide (10MG)', 'Thymalin Peptide (10MG)', 'Pinealon Peptide (20MG)', 'Vilon Peptide (20MG)']
  },
  {
    title: 'Peptide Powders',
    items: ['Acetyl Hexapeptide-8 (Argireline) 200MG', 'Powder: GHK-Cu 1000MG', 'Pal-GHK (Matrixyl 3000) 200MG', 'SYN-AKE 200MG']
  },
  {
    title: 'Peptide Packs',
    items: ['Pack: Ipamorelin + Tesamoreln', 'Pack: CJC-1295 DAC + Ipamorelin', 'Pack: NAD+ Glutathione', 'Pack: Epitalon + Thymalin']
  }
]

const products: CategoryProduct[] = [
  {
    name: 'BPC-157 Peptide (10MG)',
    href: '/products/bpc-157-reference-standard',
    image: 'https://verifiedpeptides.com/wp-content/uploads/2025/04/BPC157-10mg-5-300x300.jpg',
    alt: 'An information sheet for our 10MG BPC-157 peptide.',
    price: '$53.00',
    action: 'Add to cart'
  },
  {
    name: 'Blend: BPC-157 TB-500 Peptide (20MG)',
    href: '/products/bpc-157-reference-standard',
    image: 'https://verifiedpeptides.com/wp-content/uploads/2025/04/BPC-157-TB-500-TB4-BLEND-300x300.jpg',
    alt: 'An information sheet for our BPC-157 TB-500 peptide blend.',
    price: '$107.00',
    action: 'Add to cart'
  },
  {
    name: 'GHK-Cu Copper Peptide (100MG)',
    href: '/products/ghk-cu-reference-standard',
    image: 'https://verifiedpeptides.com/wp-content/uploads/2025/04/GHK-Cu-100mg-5-300x300.jpg',
    alt: 'An information sheet for our 100MG GHK-Cu peptide.',
    price: '$49.99',
    action: 'Add to cart'
  },
  {
    name: 'Blend: Ipamorelin CJC-1295 (No DAC) 20MG',
    href: '/products/tb-500-reference-standard',
    image: 'https://verifiedpeptides.com/wp-content/uploads/2024/02/Ipamorelin-MOD-GRF-Blend-20mg-300x300.jpg',
    alt: 'An information sheet for our Ipamorelin CJC-1295 No DAC peptide blend.',
    price: '$61.00 - $107.00',
    action: 'Select options'
  },
  {
    name: 'MOTS-C Peptide (20MG)',
    href: '/products/tb-500-reference-standard',
    image: 'https://verifiedpeptides.com/wp-content/uploads/2025/04/Mots-C-1-300x300.jpg',
    alt: 'An information sheet for our MOTS-C peptide.',
    price: '$77.00',
    action: 'Add to cart'
  },
  {
    name: 'TB-500 Peptide (TB4) 10MG',
    href: '/products/tb-500-reference-standard',
    image: 'https://verifiedpeptides.com/wp-content/uploads/2025/04/TB-500-TB4-10mg-2-300x300.jpg',
    alt: 'An information sheet for our TB-500 peptide.',
    price: '$62.00',
    action: 'Add to cart'
  },
  {
    name: 'Tesamoreln Peptide (20MG)',
    href: '/products/bpc-157-reference-standard',
    image: 'https://verifiedpeptides.com/wp-content/uploads/2024/07/Tesa-20mg-300x300.jpg',
    alt: 'An information sheet for our Tesamorelin peptide.',
    price: '$119.00',
    action: 'Add to cart'
  },
  {
    name: 'PT-141 Peptide (10MG)',
    href: '/products/ghk-cu-reference-standard',
    image: 'https://verifiedpeptides.com/wp-content/uploads/2025/04/PT141-10mg-3-300x300.jpg',
    alt: 'A peptide information sheet for PT-141.',
    price: '$34.99',
    action: 'Add to cart'
  },
  {
    name: 'Epitalon Peptide (10MG)',
    href: '/products/bpc-157-reference-standard',
    image: 'https://verifiedpeptides.com/wp-content/uploads/2025/04/Epitalon-10mg-1-300x300.jpg',
    alt: 'A peptide information sheet for Epitalon.',
    price: '$33.00',
    action: 'Add to cart'
  },
  {
    name: 'NAD+ Peptide (1000MG)',
    href: '/products/tb-500-reference-standard',
    image: 'https://verifiedpeptides.com/wp-content/uploads/2024/07/NAD.-1000mgjpg-300x300.jpg',
    alt: 'A peptide information sheet for NAD peptide.',
    price: '$99.00 - $129.00',
    action: 'Select options'
  },
  {
    name: 'Ipamorelin Peptide (10MG)',
    href: '/products/tb-500-reference-standard',
    image: 'https://verifiedpeptides.com/wp-content/uploads/2025/04/Ipamorelin-10mg-1-300x300.jpg',
    alt: 'A peptide information sheet for Ipamorelin.',
    price: '$53.00',
    action: 'Add to cart'
  },
  {
    name: 'Blend: KPV GHK-Cu BPC-157 TB-500 (KLOW)',
    href: '/products/ghk-cu-reference-standard',
    image: 'https://verifiedpeptides.com/wp-content/uploads/2025/10/KLOW-Blend-info-no-card-300x300.jpg',
    alt: 'A peptide information sheet for KLOW blend.',
    price: '$135.00',
    action: 'Add to cart'
  }
]

useReveal()
</script>

<template>
  <div class="bg-white">
    <div class="mx-auto max-w-7xl px-4 py-7 sm:px-6 lg:px-8">
      <nav class="mb-6 text-[13px] font-medium text-ink-700" aria-label="Breadcrumb">
        <NuxtLink to="/" class="hover:text-brand-600">Home</NuxtLink>
        <span class="px-2 text-line">/</span>
        <span>Peptides</span>
      </nav>

      <div class="grid gap-8 lg:grid-cols-[25%_1fr]">
        <aside class="hidden lg:block">
          <div class="border border-line bg-white">
            <div class="border-b border-line bg-[#f7f7f7] px-4 py-3 text-sm font-semibold uppercase text-ink-900">
              Browse
            </div>
            <div class="divide-y divide-line">
              <details v-for="group in sidebarGroups" :key="group.title" open class="group">
                <summary class="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-semibold text-ink-900 hover:text-brand-600">
                  {{ group.title }}
                  <span class="text-lg leading-none text-ink-700 group-open:rotate-180">⌄</span>
                </summary>
                <ul class="space-y-2 px-4 pb-4 text-[13px] leading-5 text-ink-700">
                  <li v-for="item in group.items" :key="item">
                    <NuxtLink to="/products" class="hover:text-brand-600">{{ item }}</NuxtLink>
                  </li>
                </ul>
              </details>
            </div>
          </div>
        </aside>

        <section class="shop-container">
          <div class="term-description mb-6">
            <h1 class="text-[32px] font-medium leading-tight text-ink-900 md:text-[40px]">
              Shop Our Full Collection of Peptides
            </h1>
          </div>

          <div class="grid grid-cols-2 gap-x-5 gap-y-7 md:grid-cols-3">
            <article
              v-for="product in products"
              :key="product.name"
              class="vp-product-card col-inner bg-white transition duration-200"
            >
              <div class="product-small box">
                <NuxtLink :to="product.href" class="vp-product-image image-zoom block overflow-hidden bg-white">
                  <img
                    :src="product.image"
                    :alt="product.alt"
                    class="aspect-square w-full object-cover"
                    loading="lazy"
                  >
                </NuxtLink>

                <div class="box-text box-text-products grid-style-2 px-3 pb-4 pt-3 text-center">
                  <p class="category product-cat no-text-overflow mb-1 text-[11px] font-medium uppercase tracking-wide text-ink-700 opacity-80">
                    Peptides
                  </p>
                  <h3 class="name product-title min-h-[48px] text-[15px] font-medium leading-6 text-ink-900">
                    <NuxtLink :to="product.href" class="hover:text-brand-600">{{ product.name }}</NuxtLink>
                  </h3>
                  <div class="price-wrapper mt-2">
                    <span class="price text-[15px] font-semibold text-ink-900">{{ product.price }}</span>
                  </div>
                  <div class="add-to-cart-button mt-3">
                    <NuxtLink
                      :to="product.href"
                      class="button is-outline inline-flex min-h-8 items-center justify-center rounded border border-brand-600 px-3 py-1.5 text-[11px] font-semibold uppercase text-brand-600 transition hover:bg-brand-600 hover:text-white"
                    >
                      {{ product.action }}
                    </NuxtLink>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <nav class="mt-10 flex items-center justify-center gap-2 text-sm" aria-label="Product pagination">
            <span class="flex size-9 items-center justify-center rounded-full bg-brand-600 font-semibold text-white">1</span>
            <NuxtLink to="/products" class="flex size-9 items-center justify-center rounded-full border border-line font-semibold text-ink-700 hover:border-brand-600 hover:text-brand-600">2</NuxtLink>
            <NuxtLink to="/products" class="flex h-9 items-center justify-center rounded-full border border-line px-4 font-semibold text-ink-700 hover:border-brand-600 hover:text-brand-600">Next</NuxtLink>
          </nav>
        </section>
      </div>
    </div>
  </div>
</template>
