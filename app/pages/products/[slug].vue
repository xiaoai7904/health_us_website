<script setup lang="ts">
import type { Product } from '~/types/content'
import productImageOne from '~/assets/image/1.webp'
import productImageTwo from '~/assets/image/2.webp'

interface GalleryImage {
  src: string
  thumb: string
  alt: string
}

interface DiscountRow {
  discount: string
  quantity: string
  price: string
}

interface SpecRow {
  label: string
  value: string
  emphasis?: boolean
}

const { data } = await useFetch<{ items: Product[] }>('/api/products')

const productName = '5-Amino 1MQ Peptide (50MG)'
const activeImage = ref(productImageOne)
const galleryDirection = ref<'next' | 'previous'>('next')
const activeTab = ref<'lab' | 'specifications'>('lab')
const quantity = ref(1)
const modalOpen = ref(false)
const zoomOpen = ref(false)
const zoomDialog = ref<HTMLElement | null>(null)

const galleryImages: GalleryImage[] = [
  {
    src: productImageOne,
    thumb: productImageOne,
    alt: 'A peptide information sheet for the Verified Peptides 50mg 5-Amino 1MQ peptide.'
  },
  {
    src: productImageTwo,
    thumb: productImageTwo,
    alt: 'The peptide packaging for the 99% pure lyophilized 5-Amino 1MQ peptide.'
  },
  {
    src: productImageOne,
    thumb: productImageOne,
    alt: '5-Amino 1MQ Peptide Purity Certificate of Analysis Lab Test Report November 2025'
  }
]

const testedFor = ['purity', 'weight', 'endotoxins(lps)']

const discounts: DiscountRow[] = [
  { discount: '0%', quantity: '1 - 4', price: '$89.00' },
  { discount: '10% Off', quantity: '5 - 9', price: '$80.10' },
  { discount: '15% Off', quantity: '10 - 24', price: '$75.65' },
  { discount: '25% Off', quantity: '20 +', price: '$66.75' }
]

const vialSpecs: SpecRow[] = [
  { label: 'Not reconstituted', value: '', emphasis: true },
  { label: 'Bottle type:', value: 'Vial - sealed flip top' },
  { label: 'Form:', value: 'Powder (lyophilized)' },
  { label: 'Vial size:', value: '3ML' }
]

const testResults: SpecRow[] = [
  { label: '5-Amino 1MQ Peptide Test results', value: '', emphasis: true },
  { label: 'Date Tested:', value: 'May 28, 2026' },
  { label: 'Purity:', value: '~99%' },
  { label: 'Weight:', value: '62.15mg' },
  { label: 'Endotoxins (LPS):', value: 'Pass' },
  { label: 'Batch #:', value: '5AQ05260450D' }
]

const specifications: SpecRow[] = [
  { label: 'FORM', value: 'Powder(lyophilized)', emphasis: true },
  { label: 'CAS NUMBER', value: '42464-96-0' },
  { label: 'OTHER NAMES', value: '5amino1mq, 5amino, 1-mq' },
  { label: 'WEIGHT', value: '50mg' },
  { label: 'SEQUENCE', value: 'C10H11N2' },
  { label: 'Molecular Weight', value: '159.21 g/mol' },
  { label: 'Terms', value: 'Subject to our Terms and Conditions. This material is sold for laboratory research use only. Not for human consumption, animal, or medical use.' }
]

const certificates = [
  {
    title: '5-Amino 1MQ Peptide Purity Certificate of Analysis Lab Test Report May 2026',
    image: 'https://verifiedpeptides.com/wp-content/uploads/2026/06/5-Amino-1MQ-Peptide-Purity-Certificate-of-Analysis-Lab-Test-Report-May-2026-542x800.jpg',
    href: 'https://verifiedpeptides.com/wp-content/uploads/2026/06/5-Amino-1MQ-Peptide-Purity-Certificate-of-Analysis-Lab-Test-Report-May-2026.jpg',
    alt: 'A Purity lab test report and certificate of analysis conducted in May 2026 for 5-Amino 1MQ Peptide'
  },
  {
    title: '5-Amino 1MQ Peptide Endotoxin Certificate of Analysis Lab Test Report May 2026',
    image: 'https://verifiedpeptides.com/wp-content/uploads/2026/06/5-Amino-1MQ-Peptide-Endotoxin-Certificate-of-Analysis-Lab-Test-Report-May-2026-542x800.jpg',
    href: 'https://verifiedpeptides.com/wp-content/uploads/2026/06/5-Amino-1MQ-Peptide-Endotoxin-Certificate-of-Analysis-Lab-Test-Report-May-2026.jpg',
    alt: 'A Endotoxin lab test report and certificate of analysis conducted in May 2026 for 5-Amino 1MQ Peptide'
  }
]

const relatedProducts = computed(() => data.value?.items.slice(0, 4) ?? [])
const activeImageIndex = computed(() => {
  const index = galleryImages.findIndex(image => image.src === activeImage.value)
  return index >= 0 ? index : 0
})
const activeGalleryImage = computed(() => galleryImages[activeImageIndex.value] ?? galleryImages[0])

const decreaseQuantity = () => {
  quantity.value = Math.max(1, quantity.value - 1)
}

const increaseQuantity = () => {
  quantity.value += 1
}

const showPreviousImage = () => {
  galleryDirection.value = 'previous'
  const previousIndex = (activeImageIndex.value - 1 + galleryImages.length) % galleryImages.length
  activeImage.value = galleryImages[previousIndex]!.src
}

const showNextImage = () => {
  galleryDirection.value = 'next'
  const nextIndex = (activeImageIndex.value + 1) % galleryImages.length
  activeImage.value = galleryImages[nextIndex]!.src
}

const selectGalleryImage = (image: GalleryImage) => {
  const targetIndex = galleryImages.findIndex(item => item.src === image.src)
  galleryDirection.value = targetIndex >= activeImageIndex.value ? 'next' : 'previous'
  activeImage.value = image.src
}

const openZoom = async () => {
  zoomOpen.value = true
  await nextTick()
  zoomDialog.value?.focus()
}

const closeZoom = () => {
  zoomOpen.value = false
}

useSeoMeta({
  title: 'Buy 5-Amino 1MQ Peptide (50MG) Lab Tested 99% Purity - Verified Peptides',
  description: 'Buy third party tested 5-Amino 1MQ Peptide (50MG) - verified 99% purity with published lab report. Over 250+ published lab reports. Every batch tested. Same day shipping.',
  ogTitle: '5-Amino 1MQ Peptide (50MG)',
  ogDescription: 'Buy third party tested 5-Amino 1MQ Peptide (50MG) - verified 99% purity with published lab report.',
  ogImage: productImageOne
})

useHead({
  link: [{ rel: 'canonical', href: 'https://verifiedpeptides.com/product/5-amino-1mq/' }]
})

useReveal()
</script>

<template>
  <div class="bg-white">
    <section id="section_1502933449" class="py-8 md:py-10">
      <div class="mx-auto grid max-w-[1200px] gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div class="product-page-33 reveal">
          <div class="product-images relative mb-3 has-hover overflow-hidden rounded-[10px] bg-white">
            <div class="relative aspect-square w-full overflow-hidden">
              <Transition :name="`gallery-slide-${galleryDirection}`">
                <img
                  :key="activeImage"
                  :src="activeImage"
                  :alt="activeGalleryImage?.alt || productName"
                  class="absolute inset-0 size-full object-cover"
                >
              </Transition>
            </div>
            <button
              class="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/90 text-ink-900 opacity-90 shadow-sm transition hover:bg-brand-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-600 md:left-4"
              type="button"
              aria-label="Previous product image"
              @click="showPreviousImage"
            >
              <svg class="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m15 18-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button
              class="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-white/90 text-ink-900 opacity-90 shadow-sm transition hover:bg-brand-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-600 md:right-4"
              type="button"
              aria-label="Next product image"
              @click="showNextImage"
            >
              <svg class="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m9 18 6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
            <button
              class="absolute bottom-4 left-4 hidden size-10 items-center justify-center rounded-full border border-white/80 bg-white/90 text-ink-900 shadow-sm transition hover:bg-brand-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-600 md:flex"
              type="button"
              aria-label="Zoom product image"
              @click="openZoom"
            >
              <svg class="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M8 3H3v5M16 3h5v5M8 21H3v-5M21 16v5h-5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>

          <div class="product-thumbnails grid grid-cols-4 gap-3">
            <button
              v-for="image in galleryImages"
              :key="image.thumb"
              class="rounded border p-1 transition"
              :class="activeImage === image.src ? 'border-brand-600' : 'border-line'"
              type="button"
              @click="selectGalleryImage(image)"
            >
              <img :src="image.thumb" :alt="image.alt" class="aspect-square w-full rounded object-cover" loading="lazy">
            </button>
          </div>
        </div>

        <div class="reveal">
          <div class="relative rounded-[10px] border border-[#ddd] px-[5%] pb-5 pt-5">
            <nav class="woocommerce-breadcrumb breadcrumbs mb-3 text-[12px] font-semibold uppercase text-ink-700" aria-label="Breadcrumb">
              <NuxtLink to="/products" class="hover:text-brand-600">Peptides</NuxtLink>
            </nav>

            <h1 class="product-title product_title entry-title text-[32px] font-medium leading-tight text-title-900 md:text-[40px]">
              {{ productName }}
            </h1>

            <p class="mt-4 leading-7 text-ink-800">
              This batch of 5-Amino 1MQ has been third party lab tested and verified for quality.
            </p>

            <div class="mt-6">
              <p class="mb-4 font-medium uppercase text-ink-900">TESTED FOR:</p>
              <div class="grid grid-cols-2 gap-x-4 gap-y-3">
                <div v-for="item in testedFor" :key="item" class="flex min-w-0 items-center gap-2">
                  <img
                    src="https://verifiedpeptides.com/wp-content/uploads/2024/09/gradientcheckmarktick.png"
                    alt="check mark"
                    class="size-7 shrink-0 sm:size-8"
                    loading="lazy"
                  >
                  <span class="min-w-0 text-[13px] font-medium uppercase leading-tight text-ink-900 sm:text-[15px]">{{ item }}</span>
                </div>
              </div>
              <a
                href="#tab-labtestresults1"
                class="mt-5 inline-flex min-h-8 items-center rounded-[10px] border border-brand-600 px-4 text-[12px] font-semibold uppercase text-brand-600 transition hover:bg-brand-600 hover:text-white"
                @click="activeTab = 'lab'"
              >
                VIEW LAB REPORTS
              </a>
            </div>

            <div class="mt-8">
              <p class="product-page-price text-[32px] font-medium text-ink-900">$89.00</p>
            </div>

            <div class="add-to-cart-container mt-5">
              <table class="wdr_bulk_table_msg sar-table w-full border-collapse overflow-hidden rounded border border-line text-left text-[15px]">
                <thead>
                  <tr class="bg-[#f8fbfe]">
                    <th class="border-b border-line px-4 py-3 font-semibold text-brand-600">Discount</th>
                    <th class="border-b border-line px-4 py-3 font-semibold text-ink-900">Quantity</th>
                    <th class="border-b border-line px-4 py-3 font-semibold text-ink-900">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="row in discounts" :key="row.quantity" class="border-b border-line last:border-b-0">
                    <td class="px-4 py-3 font-semibold text-brand-600">{{ row.discount }}</td>
                    <td class="px-4 py-3 font-semibold text-ink-900">{{ row.quantity }}</td>
                    <td class="px-4 py-3 text-ink-900">{{ row.price }}</td>
                  </tr>
                </tbody>
              </table>

              <form class="cart mt-5 flex flex-wrap gap-4" @submit.prevent="modalOpen = true">
                <div class="ux-quantity quantity buttons_added inline-flex h-12 overflow-hidden border border-line">
                  <button class="w-11 border-r border-line bg-white text-xl text-ink-900" type="button" aria-label="Reduce quantity" @click="decreaseQuantity">
                    -
                  </button>
                  <label for="quantity" class="sr-only">5-Amino 1MQ Peptide (50MG) quantity</label>
                  <input
                    id="quantity"
                    v-model.number="quantity"
                    class="w-16 text-center text-[15px] outline-none"
                    type="number"
                    min="1"
                    max="315"
                    step="1"
                    inputmode="numeric"
                  >
                  <button class="w-11 border-l border-line bg-white text-xl text-ink-900" type="button" aria-label="Increase quantity" @click="increaseQuantity">
                    +
                  </button>
                </div>

                <button class="single_add_to_cart_button button alt min-h-12 flex-1 rounded bg-brand-600 px-6 text-sm font-semibold uppercase text-white transition hover:bg-brand-700" type="submit">
                  Select options
                </button>
              </form>
            </div>

            <p class="mt-4 text-[15px] leading-5 text-ink-800">
              This product comes as <strong>lyophilized powder</strong> and is not reconstituted. All products and materials sold on this site are for Research Use Only and not for human use; subject to our
              <NuxtLink to="/faq" class="text-brand-600 hover:underline">Terms and Conditions</NuxtLink>.
            </p>

            <div class="mt-5 rounded bg-[#f9f9f9] px-4 py-3 shadow-sm">
              <div class="flex items-center gap-3">
                <img
                  src="https://verifiedpeptides.com/wp-content/uploads/2024/09/snow.png"
                  alt="Get ice pack shipping in a Styrofoam box when ordering our peptides online."
                  class="size-9"
                  loading="lazy"
                >
                <p class="text-[15px] leading-tight text-ink-800">
                  <span class="font-semibold text-brand-600">INSULATED SHIPPING<br></span>
                  Styrofoam box shipping available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="section_859682829" class="pb-8">
      <div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div class="tabbed-content reveal">
          <div class="border-b border-line">
            <div class="flex gap-6 overflow-x-auto">
              <button
                id="tab-labtestresults1"
                class="whitespace-nowrap border-b-2 py-3 text-[18px] font-semibold uppercase"
                :class="activeTab === 'lab' ? 'border-brand-600 text-brand-600' : 'border-transparent text-ink-700'"
                type="button"
                @click="activeTab = 'lab'"
              >
                LAB TESTS
              </button>
              <button
                class="whitespace-nowrap border-b-2 py-3 text-[18px] font-semibold"
                :class="activeTab === 'specifications' ? 'border-brand-600 text-brand-600' : 'border-transparent text-ink-700'"
                type="button"
                @click="activeTab = 'specifications'"
              >
                Specifications
              </button>
            </div>
          </div>

          <div v-if="activeTab === 'lab'" class="grid gap-8 py-8 lg:grid-cols-[5fr_7fr]">
            <div class="space-y-8">
              <table class="w-full overflow-hidden rounded-xl border border-[#e6edf5] bg-white text-left">
                <tbody>
                  <tr v-for="row in vialSpecs" :key="row.label" class="border-b border-[#eef3f8] last:border-b-0">
                    <td v-if="row.emphasis" colspan="2" class="px-4 py-3 text-center text-[20px] font-semibold text-ink-900">{{ row.label }}</td>
                    <template v-else>
                      <td class="w-[42%] bg-[#f8fbfe] px-4 py-3 font-semibold text-[#5f6b7a]">{{ row.label }}</td>
                      <td class="px-4 py-3 text-[15px] font-medium text-ink-900">{{ row.value }}</td>
                    </template>
                  </tr>
                </tbody>
              </table>

              <table class="w-full overflow-hidden rounded-xl border border-[#e6edf5] bg-white text-left">
                <tbody>
                  <tr v-for="row in testResults" :key="row.label" class="border-b border-[#eef3f8] last:border-b-0">
                    <td v-if="row.emphasis" colspan="2" class="px-4 py-3 text-center text-[20px] font-semibold text-ink-900">{{ row.label }}</td>
                    <template v-else>
                      <td class="w-[42%] bg-[#f8fbfe] px-4 py-3 font-semibold text-[#5f6b7a]">{{ row.label }}</td>
                      <td class="px-4 py-3 text-[15px] font-medium" :class="row.value === 'Pass' ? 'text-green-700' : 'text-ink-900'">{{ row.value }}</td>
                    </template>
                  </tr>
                </tbody>
              </table>
            </div>

            <div class="text-center">
              <img
                src="https://verifiedpeptides.com/wp-content/uploads/2025/07/janoshik-logo-verified.jpg"
                alt="Our peptides are tested by Janoshik Analytical testing lab - the gold standard in peptide testing."
                class="mx-auto w-[80%] max-w-[360px] md:w-[36%]"
                loading="lazy"
              >
              <p class="mt-5 text-[24px] font-medium text-ink-900">Certificates of Analysis</p>

              <div class="mt-4 grid gap-6 sm:grid-cols-2">
                <a v-for="certificate in certificates" :key="certificate.title" :href="certificate.href" target="_blank" rel="noopener" class="group block">
                  <div class="mx-auto w-[58%] overflow-hidden shadow-lg transition group-hover:-translate-y-1">
                    <img :src="certificate.image" :alt="certificate.alt" class="w-full object-cover" loading="lazy">
                  </div>
                  <p class="mt-3 text-[14px] leading-6 text-ink-800 group-hover:text-brand-600">{{ certificate.title }}</p>
                </a>
              </div>
            </div>
          </div>

          <div v-else class="product-short-description py-8">
            <h2 class="text-[28px] font-medium text-title-900">5-Amino 1MQ Peptide Information</h2>
            <table class="mt-5 w-full border-collapse text-left">
              <tbody>
                <tr v-for="row in specifications" :key="row.label" class="border-b border-line">
                  <th class="w-[30%] px-3 py-4 align-top text-[15px] font-semibold uppercase text-ink-900">{{ row.label }}</th>
                  <td class="px-3 py-4 text-[15px] leading-7 text-ink-800" :class="row.emphasis ? 'font-semibold' : ''">{{ row.value }}</td>
                </tr>
              </tbody>
            </table>

            <h2 class="mt-8 text-[26px] font-semibold text-title-900">Why isn&apos;t there more information on our 5-Amino 1MQ peptide?</h2>
            <p class="mt-3 max-w-4xl leading-8 text-ink-800">
              Due to the legal landscape of peptides and research products, providing information that may imply anything beyond laboratory research use is a legal liability. We&apos;re an expert biotechnology company that provides high quality peptides and products for purchase to advance scientific research in this field.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- <section id="section_398907586" class="py-8">
      <div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <h2 class="text-[32px] font-medium text-title-900">Why Choose Verified Peptides?</h2>
          <h3 class="mt-2 text-[22px] font-medium text-ink-800">The industry&apos;s most trusted source for research peptides</h3>
        </div>

        <div class="mt-8 grid gap-6 md:grid-cols-2">
          <div class="verified-peptides-feature-card rounded border border-line bg-white p-7 shadow-sm">
            <h3 class="text-[22px] font-semibold leading-tight text-brand-600">The #1 Leader In Peptide Testing<br>500+ Certificates of Analysis</h3>
            <p class="mt-3 leading-7 text-ink-900">What does this mean for you? You can be sure we don&apos;t cut corners on testing every single batch. <NuxtLink to="/reports" class="text-brand-600">Visit our Lab Reports page.</NuxtLink></p>
            <h3 class="mt-6 text-[22px] font-semibold leading-tight text-brand-600">A Long Standing Trusted Company<br>6+ Years of Peptides</h3>
            <p class="mt-3 leading-7 text-ink-900">We pioneered third party lab testing and have stood the test of time. Our first lab report dates back to <strong>2019</strong> proving our track record.</p>
            <h3 class="mt-6 text-[22px] font-semibold leading-tight text-brand-600">The Best $/mg Prices At The Highest Quality</h3>
            <p class="mt-3 leading-7 text-ink-900">You won&apos;t find this degree of testing and quality at this price.</p>
          </div>

          <div class="verified-peptides-feature-card rounded border border-line bg-white p-7 shadow-sm">
            <h3 class="text-[22px] font-semibold leading-tight text-brand-600">Peptides Tested For More Than Just Purity</h3>
            <p class="mt-3 leading-7 text-ink-900">We conduct an array of tests via HPLC and other methods for our peptides: purity, weight, endotoxins(LPS), sterility (bacteria &amp; mold/yeast), and TFA content.</p>
            <h3 class="mt-6 text-[22px] font-semibold leading-tight text-brand-600">Transparency. Trusted. Reliable.</h3>
            <ul class="mt-4 space-y-2 text-ink-900">
              <li v-for="item in ['Batch number on every vial', 'Published Certificates of Analysis', 'Expert customer service', 'Satisfaction and quality guarantee', 'Cold pack styrofoam shipping']" :key="item" class="flex gap-2">
                <span class="text-brand-600">✓</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section> -->

    <section id="section_1571148676" class="py-8">
      <div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div class="mb-5 flex items-center gap-4">
          <span class="h-px flex-1 bg-brand-600" aria-hidden="true" />
          <h2 class="text-[24px] font-medium text-title-900">Explore Other High-Purity Peptides</h2>
          <span class="h-px flex-1 bg-brand-600" aria-hidden="true" />
        </div>

        <div class="grid grid-cols-2 gap-x-5 gap-y-7 md:grid-cols-3 lg:grid-cols-4">
          <article v-for="(related, index) in relatedProducts" :key="related.id" class="reveal">
            <div class="vp-product-card rounded-[8px] bg-white text-center transition duration-200">
              <NuxtLink :to="`/products/${related.slug}`" class="vp-product-image block overflow-hidden rounded-t-[8px] bg-white">
                <img
                  :src="index % 2 === 0 ? productImageOne : productImageTwo"
                  :alt="related.images[0]?.alt || related.name"
                  class="aspect-square w-full object-cover"
                  loading="lazy"
                >
              </NuxtLink>
              <div class="px-3 pb-4 pt-3">
                <p class="mb-1 text-[11px] font-medium uppercase tracking-wide text-ink-700 opacity-80">
                  {{ related.category }}
                </p>
                <h4 class="min-h-[48px] text-[15px] font-medium leading-6 text-ink-900">
                  <NuxtLink :to="`/products/${related.slug}`" class="hover:text-brand-600">
                    {{ related.name }}
                  </NuxtLink>
                </h4>
                <p class="mt-2 text-[15px] font-semibold text-ink-900">{{ related.price }}</p>
                <NuxtLink
                  :to="`/products/${related.slug}`"
                  class="mt-3 inline-flex min-h-8 items-center justify-center rounded border border-brand-600 px-3 py-1.5 text-[11px] font-semibold uppercase text-brand-600 transition hover:bg-brand-600 hover:text-white"
                >
                  Select options
                </NuxtLink>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <Teleport to="body">
      <Transition name="zoom-fade">
        <div
          v-if="zoomOpen"
          ref="zoomDialog"
          class="fixed inset-0 z-[90] flex items-center justify-center bg-black/85 p-4 outline-none"
          role="dialog"
          aria-modal="true"
          :aria-label="`${productName} image preview`"
          tabindex="0"
          @click.self="closeZoom"
          @keydown.esc="closeZoom"
        >
          <button
            class="absolute right-4 top-4 z-10 flex size-11 items-center justify-center rounded-full border border-white/30 bg-white/95 text-ink-900 shadow-lg transition hover:bg-brand-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
            type="button"
            aria-label="Close image preview"
            @click="closeZoom"
          >
            <svg class="size-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m18 6-12 12M6 6l12 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" />
            </svg>
          </button>

          <button
            class="absolute left-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/95 text-ink-900 shadow-lg transition hover:bg-brand-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white md:left-8"
            type="button"
            aria-label="Previous product image"
            @click="showPreviousImage"
          >
            <svg class="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m15 18-6-6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>

          <div class="relative flex max-h-[88vh] max-w-[92vw] items-center justify-center">
            <Transition :name="`gallery-slide-${galleryDirection}`">
              <img
                :key="`zoom-${activeImage}`"
                :src="activeImage"
                :alt="activeGalleryImage?.alt || productName"
                class="max-h-[88vh] max-w-[92vw] object-contain shadow-2xl"
              >
            </Transition>
          </div>

          <button
            class="absolute right-3 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-white/95 text-ink-900 shadow-lg transition hover:bg-brand-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white md:right-8"
            type="button"
            aria-label="Next product image"
            @click="showNextImage"
          >
            <svg class="size-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m9 18 6-6-6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
      </Transition>
    </Teleport>

    <CustomerServiceModal :open="modalOpen" :product-name="productName" @close="modalOpen = false" />
  </div>
</template>

<style scoped>
.gallery-slide-next-enter-active,
.gallery-slide-next-leave-active,
.gallery-slide-previous-enter-active,
.gallery-slide-previous-leave-active {
  transition: transform 360ms cubic-bezier(0.22, 1, 0.36, 1), opacity 360ms cubic-bezier(0.22, 1, 0.36, 1);
}

.gallery-slide-next-enter-from {
  opacity: 0.35;
  transform: translateX(100%);
}

.gallery-slide-next-leave-to {
  opacity: 0.35;
  transform: translateX(-100%);
}

.gallery-slide-previous-enter-from {
  opacity: 0.35;
  transform: translateX(-100%);
}

.gallery-slide-previous-leave-to {
  opacity: 0.35;
  transform: translateX(100%);
}

.zoom-fade-enter-active,
.zoom-fade-leave-active {
  transition: opacity 180ms ease;
}

.zoom-fade-enter-from,
.zoom-fade-leave-to {
  opacity: 0;
}

@media (prefers-reduced-motion: reduce) {
  .gallery-slide-next-enter-active,
  .gallery-slide-next-leave-active,
  .gallery-slide-previous-enter-active,
  .gallery-slide-previous-leave-active,
  .zoom-fade-enter-active,
  .zoom-fade-leave-active {
    transition: none;
  }
}
</style>
