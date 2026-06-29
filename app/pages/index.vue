<script setup lang="ts">
interface HomeProduct {
  name: string
  href: string
  image: string
  alt: string
  price: string
  action: string
  status?: string
}

interface ProductSection {
  title: string
  products: HomeProduct[]
}

useSeoMeta({
  title: 'Your Trusted Source for High-Quality Lab Tested Peptides',
  description: 'Discover premium, lab-tested peptides from your trusted source. Our products meet rigorous quality standards, ensuring purity, efficacy, and reliability.'
})

const featuredProducts: HomeProduct[] = [
  {
    name: 'Blend: Ipamorelin CJC-1295 (No DAC) 20MG',
    href: '/products/tb-500-reference-standard',
    image: 'https://verifiedpeptides.com/wp-content/uploads/2024/02/Ipamorelin-MOD-GRF-Blend-20mg-300x300.jpg',
    alt: 'An information sheet for our Ipamorelin CJC-1295 No DAC peptide blend.',
    price: '$61.00 - $107.00',
    action: 'Select options'
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
    name: 'Blend: GHK-Cu BPC-157 TB-500 Peptide (GLOW)',
    href: '/products/ghk-cu-reference-standard',
    image: 'https://verifiedpeptides.com/wp-content/uploads/2025/06/GLOW-Blend-info-no-card-300x300.jpg',
    alt: 'A peptide information sheet for the Verified Peptides blend GLOW peptide.',
    price: '$124.99',
    action: 'Add to cart'
  },
  {
    name: 'NAD+ Peptide (1000MG)',
    href: '/products/tb-500-reference-standard',
    image: 'https://verifiedpeptides.com/wp-content/uploads/2024/07/NAD.-1000mgjpg-300x300.jpg',
    alt: 'A peptide information sheet for the Verified Peptides NAD peptide.',
    price: '$71.00 - $119.00',
    action: 'Select options'
  },
  {
    name: 'Glutathione Peptide (1500MG)',
    href: '/products/bpc-157-reference-standard',
    image: 'https://verifiedpeptides.com/wp-content/uploads/2025/05/glutathione-nobottle-300x300.jpg',
    alt: 'A peptide information sheet for the Verified Peptides Glutathione for sale.',
    price: '$79.99',
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
    name: 'Tesamoreln Peptide (20MG)',
    href: '/products/tb-500-reference-standard',
    image: 'https://verifiedpeptides.com/wp-content/uploads/2024/07/Tesa-20mg-300x300.jpg',
    alt: 'An information sheet for our 20MG Tesamoreln peptide.',
    price: '$119.00',
    action: 'Add to cart'
  },
  {
    name: 'SNAP-8 Peptide (10MG)',
    href: '/products/bpc-157-reference-standard',
    image: 'https://verifiedpeptides.com/wp-content/uploads/2025/04/Snap-8-10mg-1-300x300.jpg',
    alt: 'An information sheet for our 10MG SNAP-8 peptide.',
    price: '$33.00',
    action: 'Add to cart'
  }
]

const catalogSections: ProductSection[] = [
  {
    title: 'TYPE I PEPTIDES',
    products: [
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
        name: 'TB-500 Peptide (TB4) 10MG',
        href: '/products/tb-500-reference-standard',
        image: 'https://verifiedpeptides.com/wp-content/uploads/2025/04/TB-500-TB4-10mg-2-300x300.jpg',
        alt: 'A peptide information sheet for the Verified Peptides TB 500 peptides.',
        price: '$62.00',
        action: 'Add to cart'
      },
      {
        name: 'PT-141 Peptide (10MG)',
        href: '/products/bpc-157-reference-standard',
        image: 'https://verifiedpeptides.com/wp-content/uploads/2025/04/PT141-10mg-3-300x300.jpg',
        alt: 'A peptide information sheet for the Verified Peptides PT 141 for sale.',
        price: '$34.99',
        action: 'Add to cart'
      },
      {
        name: 'Blend: KPV GHK-Cu BPC-157 TB-500 (KLOW)',
        href: '/products/ghk-cu-reference-standard',
        image: 'https://verifiedpeptides.com/wp-content/uploads/2025/10/KLOW-Blend-info-no-card-300x300.jpg',
        alt: 'An information sheet for our KLOW peptide.',
        price: '$135.00',
        action: 'Add to cart'
      },
      {
        name: 'DSIP Peptide (10MG)',
        href: '/products/tb-500-reference-standard',
        image: 'https://verifiedpeptides.com/wp-content/uploads/2025/04/DSIP-5mg-1-300x300.jpg',
        alt: 'An information sheet for our DSIP peptide.',
        price: '$28.00',
        action: 'Add to cart'
      },
      {
        name: 'Selank Peptide (10MG)',
        href: '/products/bpc-157-reference-standard',
        image: 'https://verifiedpeptides.com/wp-content/uploads/2025/04/Selank-10mg-1-300x300.jpg',
        alt: 'An information sheet for our Selank peptide.',
        price: '$35.00',
        action: 'Add to cart'
      }
    ]
  },
  {
    title: 'TYPE II PEPTIDES',
    products: [
      {
        name: 'Tesamoreln Peptide (20MG)',
        href: '/products/tb-500-reference-standard',
        image: 'https://verifiedpeptides.com/wp-content/uploads/2024/07/Tesa-20mg-300x300.jpg',
        alt: 'An information sheet for our 20MG Tesamoreln peptide.',
        price: '$119.00',
        action: 'Add to cart'
      },
      {
        name: 'Ipamorelin Peptide (10MG)',
        href: '/products/bpc-157-reference-standard',
        image: 'https://verifiedpeptides.com/wp-content/uploads/2025/04/Ipamorelin-10mg-1-300x300.jpg',
        alt: 'An information sheet for our 10MG Ipamorelin peptide.',
        price: '$53.00',
        action: 'Add to cart'
      },
      {
        name: 'CJC-1295 DAC Peptide (5MG)',
        href: '/products/tb-500-reference-standard',
        image: 'https://verifiedpeptides.com/wp-content/uploads/2025/04/CJC-1295-DAC-1-300x300.jpg',
        alt: 'An information sheet for our 5MG CJC-1295 DAC peptide.',
        price: '$41.99',
        action: 'Add to cart'
      },
      {
        name: 'CJC-1295 No DAC Peptide (10MG)',
        href: '/products/bpc-157-reference-standard',
        image: 'https://verifiedpeptides.com/wp-content/uploads/2021/02/CJC1295-No-DAC-10MG-300x300.jpg',
        alt: 'An information sheet for our 10MG CJC-1295 No DAC peptide.',
        price: '$40.00 - $68.00',
        action: 'Select options'
      }
    ]
  },
  {
    title: 'TYPE III PEPTIDES',
    products: [
      {
        name: 'MOTS-C Peptide (20MG)',
        href: '/products/tb-500-reference-standard',
        image: 'https://verifiedpeptides.com/wp-content/uploads/2025/04/Mots-C-1-300x300.jpg',
        alt: 'An information sheet for our MOTS-C peptide.',
        price: '$77.00',
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
        alt: 'A peptide information sheet for the Verified Peptides NAD peptide.',
        price: '$71.00 - $119.00',
        action: 'Select options'
      },
      {
        name: 'L-Carnitine 400MG/ML',
        href: '/products/ghk-cu-reference-standard',
        image: 'https://verifiedpeptides.com/wp-content/uploads/2025/04/l-Carnitine-400mgml-1-300x300.jpg',
        alt: 'A product information sheet for L-Carnitine.',
        price: '$39.99',
        action: 'Add to cart'
      }
    ]
  },
  {
    title: 'Peptide Blends',
    products: [
      {
        name: 'Blend: Ipamorelin CJC-1295 (No DAC) 20MG',
        href: '/products/tb-500-reference-standard',
        image: 'https://verifiedpeptides.com/wp-content/uploads/2024/02/Ipamorelin-MOD-GRF-Blend-20mg-300x300.jpg',
        alt: 'An information sheet for our Ipamorelin CJC-1295 No DAC peptide blend.',
        price: '$61.00 - $107.00',
        action: 'Select options'
      },
      {
        name: 'Blend: GHK-Cu BPC-157 TB-500 Peptide (GLOW)',
        href: '/products/ghk-cu-reference-standard',
        image: 'https://verifiedpeptides.com/wp-content/uploads/2025/06/GLOW-Blend-info-no-card-300x300.jpg',
        alt: 'A peptide information sheet for the Verified Peptides blend GLOW peptide.',
        price: '$124.99',
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
        name: 'Blend: KPV GHK-Cu BPC-157 TB-500 (KLOW)',
        href: '/products/ghk-cu-reference-standard',
        image: 'https://verifiedpeptides.com/wp-content/uploads/2025/10/KLOW-Blend-info-no-card-300x300.jpg',
        alt: 'An information sheet for our KLOW peptide.',
        price: '$135.00',
        action: 'Add to cart'
      }
    ]
  }
]

const testingPoints = ['purity', 'weight', 'sterility', 'ENDOTOXINS(LPS)']

useReveal()
</script>

<template>
  <div class="bg-white">
    <section class="relative isolate min-h-[600px] overflow-hidden bg-[#eef5fb]">
      <img
        src="https://verifiedpeptides.com/wp-content/uploads/2021/02/meshbackgroundfina11-280x280.jpg"
        alt=""
        class="absolute inset-0 size-full object-cover object-[70%_82%] opacity-40"
      >
      <video class="absolute inset-0 size-full object-cover opacity-35" preload="metadata" playsinline autoplay muted loop>
        <source src="https://verifiedpeptides.com/wp-content/uploads/2021/01/bgvid.mp4" type="video/mp4">
      </video>
      <div class="absolute inset-0 bg-white/65" />

      <div class="relative mx-auto grid min-h-[600px] max-w-[1200px] items-center gap-8 px-4 py-8 sm:px-6 md:grid-cols-2 lg:px-8">
        <div class="reveal text-left text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.55)]">
          <div class="rounded bg-black/10 px-3 py-4 sm:px-4 sm:py-6 lg:max-w-[92%]">
            <p class="text-[20px] font-medium uppercase leading-tight tracking-normal md:text-[25px]">
              TRUSTED SINCE 2020
            </p>
            <h1 class="mt-3 text-[38px] font-medium uppercase leading-[0.95] tracking-normal sm:text-[56px] lg:text-[72px]">
              VERIFIED PURE PEPTIDES
            </h1>
            <p class="mt-4 text-[22px] font-medium uppercase leading-tight md:text-[30px]">
              trusted by experts,<br>
              proven by labs
            </p>
            <p class="mt-5 text-[18px] font-medium uppercase leading-tight md:text-[23px]">
              FOR RESEARCH USE ONLY
            </p>
          </div>
        </div>

        <div class="reveal flex justify-center md:justify-end">
          <img
            src="https://verifiedpeptides.com/wp-content/uploads/2026/06/500-certificates-of-analysis.png"
            alt="We have over 500 published certificates of analysis publicly available for viewing."
            class="w-full max-w-[560px] object-contain md:max-w-full"
          >
        </div>
      </div>
    </section>

    <section class="bg-white py-8 md:py-10">
      <div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div class="mb-5 flex items-center gap-4">
          <span class="h-px flex-1 bg-line" aria-hidden="true" />
          <h2 class="text-center text-[24px] font-medium text-ink-900 md:text-[28px]">Peptides</h2>
          <span class="h-px flex-1 bg-line" aria-hidden="true" />
        </div>

        <div class="-mx-4 flex snap-x gap-5 overflow-x-auto px-4 pb-5 md:grid md:grid-cols-3 md:overflow-visible md:pb-0 lg:grid-cols-4">
          <article
            v-for="product in featuredProducts"
            :key="product.name"
            class="reveal min-w-[220px] snap-start md:min-w-0"
          >
            <div class="vp-product-card bg-white text-center transition duration-200">
              <NuxtLink :to="product.href" class="vp-product-image block overflow-hidden bg-white">
                <img :src="product.image" :alt="product.alt" class="aspect-square w-full object-cover" loading="lazy">
              </NuxtLink>
              <div class="px-3 pb-4 pt-3">
                <p class="mb-1 text-[11px] font-medium uppercase tracking-wide text-ink-700 opacity-80">Peptides</p>
                <h3 class="min-h-[48px] text-[15px] font-medium leading-6 text-ink-900">
                  <NuxtLink :to="product.href" class="hover:text-brand-600">{{ product.name }}</NuxtLink>
                </h3>
                <p class="mt-2 text-[15px] font-semibold text-ink-900">{{ product.price }}</p>
                <NuxtLink
                  :to="product.href"
                  class="mt-3 inline-flex min-h-8 items-center justify-center rounded border border-brand-600 px-3 py-1.5 text-[11px] font-semibold uppercase text-brand-600 transition hover:bg-brand-600 hover:text-white"
                >
                  {{ product.action }}
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section
      class="relative isolate overflow-hidden bg-[#0a2036] py-12 text-white md:py-16"
      style="background-image: url('https://verifiedpeptides.com/wp-content/uploads/2024/02/bluemoleculefiled-scaled.jpg'); background-size: cover; background-position: center;"
    >
      <div class="absolute inset-0 bg-black/40" />
      <div class="relative mx-auto grid max-w-[1200px] items-center gap-8 px-4 sm:px-6 md:grid-cols-[1fr_2fr] lg:px-8">
        <div class="reveal order-2 md:order-1">
          <img
            src="https://verifiedpeptides.com/wp-content/uploads/2024/06/molecule-small-zoom.png"
            alt="molecule"
            class="mx-auto w-full max-w-[340px] object-contain md:hidden"
          >
          <img
            src="https://verifiedpeptides.com/wp-content/uploads/2024/06/molecule-small-rotated1.png"
            alt="molecule"
            class="mx-auto hidden w-full max-w-[360px] object-contain md:block"
          >
        </div>

        <div class="reveal order-1 md:order-2">
          <div class="mb-3 flex items-center gap-4">
            <span class="h-px flex-1 bg-white/55" aria-hidden="true" />
            <h2 class="max-w-[700px] text-center text-[24px] font-medium leading-tight md:text-left md:text-[31px]">
              A Trusted Leader in High-Purity Peptides for Research
            </h2>
            <span class="hidden h-px flex-1 bg-white/55 md:block" aria-hidden="true" />
          </div>

          <div class="bg-black/45 px-4 py-5 leading-8 text-white/95 md:px-5">
            <p>
              Verified Peptides started in 2020 as <strong>the first</strong> to offer lab-tested peptides, with our initial test dating back to 2019.
              With over 500+ published lab reports since then, you can be sure we don&apos;t cut corners on testing every single batch of peptides.
              Every batch is analytically verified with HPLC to be up to the highest standards in purity, active weight content, and identity.
              Test results are publicly available for your viewing on the
              <NuxtLink to="/reports" class="text-[#00ccff] hover:underline">Lab Tests</NuxtLink>
              page, and each report can be verified authentic with the testing lab.
            </p>
          </div>

          <div class="mt-7 grid items-center gap-5 sm:grid-cols-[auto_1fr]">
            <p class="text-center text-[22px] font-semibold uppercase leading-none md:text-left">tested for:</p>
            <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">
              <div v-for="point in testingPoints" :key="point" class="text-center">
                <img
                  src="https://verifiedpeptides.com/wp-content/uploads/2023/06/002-correct.png"
                  alt=""
                  class="mx-auto mb-2 size-10"
                  loading="lazy"
                >
                <p class="text-[13px] font-semibold uppercase leading-tight">{{ point }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-white py-8 md:py-10">
      <div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div class="mb-6 flex items-center gap-4">
          <span class="h-px flex-1 bg-line" aria-hidden="true" />
          <h2 class="text-center text-[30px] font-medium uppercase text-ink-900 md:text-[36px]">PEPTIDE CATALOG</h2>
          <span class="h-px flex-1 bg-line" aria-hidden="true" />
        </div>

        <div v-for="section in catalogSections" :key="section.title" class="mb-10 last:mb-0">
          <div class="mb-5 flex items-center gap-4">
            <span class="h-px flex-1 bg-line" aria-hidden="true" />
            <h3 class="text-[24px] font-medium text-ink-900">{{ section.title }}</h3>
            <span class="h-px flex-1 bg-line" aria-hidden="true" />
          </div>

          <div class="grid grid-cols-2 gap-x-5 gap-y-7 md:grid-cols-3 lg:grid-cols-4">
            <article v-for="product in section.products" :key="`${section.title}-${product.name}`" class="reveal">
              <div class="vp-product-card bg-white text-center transition duration-200">
                <NuxtLink :to="product.href" class="vp-product-image block overflow-hidden bg-white">
                  <img :src="product.image" :alt="product.alt" class="aspect-square w-full object-cover" loading="lazy">
                </NuxtLink>
                <div class="px-3 pb-4 pt-3">
                  <p class="mb-1 text-[11px] font-medium uppercase tracking-wide text-ink-700 opacity-80">Peptides</p>
                  <h4 class="min-h-[48px] text-[15px] font-medium leading-6 text-ink-900">
                    <NuxtLink :to="product.href" class="hover:text-brand-600">{{ product.name }}</NuxtLink>
                  </h4>
                  <p class="mt-2 text-[15px] font-semibold text-ink-900">{{ product.price }}</p>
                  <NuxtLink
                    :to="product.href"
                    class="mt-3 inline-flex min-h-8 items-center justify-center rounded border border-brand-600 px-3 py-1.5 text-[11px] font-semibold uppercase text-brand-600 transition hover:bg-brand-600 hover:text-white"
                  >
                    {{ product.action }}
                  </NuxtLink>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-[#f5f9fd] py-12">
      <div class="mx-auto grid max-w-[1200px] gap-6 px-4 sm:px-6 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
        <div class="reveal">
          <h2 class="text-[28px] font-medium text-ink-900">Stay updated on lab reports and product releases</h2>
          <p class="mt-3 max-w-2xl leading-7 text-ink-700">
            Submit your email to receive new product, certificate, and test report notices.
          </p>
        </div>
        <form class="reveal flex w-full max-w-xl flex-col gap-3 sm:flex-row" @submit.prevent>
          <label for="home-email" class="sr-only">Email address</label>
          <input
            id="home-email"
            type="email"
            placeholder="Email address"
            class="min-h-12 flex-1 rounded border border-line bg-white px-4 text-sm text-ink-900 outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
          >
          <button
            type="submit"
            class="min-h-12 rounded bg-brand-600 px-6 text-sm font-semibold uppercase text-white transition hover:bg-brand-700"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  </div>
</template>
