<script setup lang="ts">
interface InfoCard {
  title: string
  text: string
  image: string
}

interface ProductCard {
  title: string
  slug: string
  image: string
}

interface QualityTab {
  id: string
  label: string
  text: string
}

interface TeamMember {
  name: string
  image: string
}

useSeoMeta({
  title: 'About us | Health US',
  description: 'Trusted peptide manufacturer information, product categories, quality control, global presence, and support.'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://norcopeptide.com/about-us/'
    }
  ]
})

useReveal()

const contactForm = reactive({
  name: '',
  email: '',
  whatsapp: '',
  country: '',
  message: ''
})

const submitStatus = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')
const activeQualityTab = ref('purity')

const workCards: InfoCard[] = [
  {
    title: 'Custom Peptide Synthesis',
    text: 'We manufacture peptides tailored to your exact specifications - including sequence, purity, and quantity - for research, pharmaceutical, and biotech applications.',
    image: 'https://norcopeptide.com/wp-content/uploads/2026/03/customization.png'
  },
  {
    title: 'Bulk & Catalog Peptide Supply',
    text: 'We offer a wide range of standard peptides with fast lead times and competitive pricing, suitable for bulk procurement and repeat orders.',
    image: 'https://norcopeptide.com/wp-content/uploads/2026/03/catalog-download.png'
  },
  {
    title: 'End-to-End Quality Control',
    text: 'From raw materials to final product, every stage is strictly tested using HPLC and MS. Each batch comes with a complete Certificate of Analysis.',
    image: 'https://norcopeptide.com/wp-content/uploads/2026/03/control.png'
  }
]

const productCards: ProductCard[] = [
  {
    title: 'MOTS-C',
    slug: 'mots-c',
    image: 'https://norcopeptide.com/wp-content/uploads/2026/04/mots-c-800x800-1-300x300.png'
  },
  {
    title: 'MT-2',
    slug: 'mt-2',
    image: 'https://norcopeptide.com/wp-content/uploads/2026/04/mt-2-800x800-1-300x300.png'
  },
  {
    title: 'Cagrilin',
    slug: 'cagrilin',
    image: 'https://norcopeptide.com/wp-content/uploads/2026/04/cagrilin-800x800-1-300x300.png'
  }
]

const defaultQualityTab: QualityTab = {
  id: 'purity',
  label: 'Purity Assurance',
  text: 'All products are analyzed by HPLC and MS, with COA provided.'
}

const qualityTabs: QualityTab[] = [
  defaultQualityTab,
  {
    id: 'compliance',
    label: 'Compliance',
    text: 'GMP-compliant and ISO-certified facility.'
  },
  {
    id: 'traceability',
    label: 'Traceability',
    text: 'Full documentation and batch tracking for every order.'
  },
  {
    id: 'reliability',
    label: 'Reliability',
    text: 'Strict in-house QC ensures consistency and reproducibility.'
  }
]

const teamMembers: TeamMember[] = [
  {
    name: 'Eric Watson',
    image: 'https://norcopeptide.com/wp-content/uploads/2026/03/file-400x401-1-150x150.webp'
  },
  {
    name: 'Dralene',
    image: 'https://norcopeptide.com/wp-content/uploads/2026/03/Stella-400x400-1-150x150.webp'
  },
  {
    name: 'Eric Watson',
    image: 'https://norcopeptide.com/wp-content/uploads/2026/03/file-400x401-1-150x150.webp'
  },
  {
    name: 'Eric Watson',
    image: 'https://norcopeptide.com/wp-content/uploads/2026/03/file-400x401-1-150x150.webp'
  },
  {
    name: 'Eric Watson',
    image: 'https://norcopeptide.com/wp-content/uploads/2026/03/file-400x401-1-150x150.webp'
  },
  {
    name: 'Eric Watson',
    image: 'https://norcopeptide.com/wp-content/uploads/2026/03/file-400x401-1-150x150.webp'
  },
  {
    name: 'Eric Watson',
    image: 'https://norcopeptide.com/wp-content/uploads/2026/03/file-400x401-1-150x150.webp'
  },
  {
    name: 'Eric Watson',
    image: 'https://norcopeptide.com/wp-content/uploads/2026/03/file-400x401-1-150x150.webp'
  }
]

const selectedQualityTab = computed(() => qualityTabs.find((tab) => tab.id === activeQualityTab.value) ?? defaultQualityTab)

const submitContact = async () => {
  submitStatus.value = 'submitting'

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: contactForm
    })

    submitStatus.value = 'success'
  } catch {
    submitStatus.value = 'error'
  }
}
</script>

<template>
  <div class="bg-white text-ink-900">
    <section class="border-b border-[#e8eef4] bg-[#f8fafc] py-9 text-center">
      <div class="mx-auto max-w-[1222px] px-4 sm:px-6 lg:px-8">
        <h1 class="text-[34px] font-semibold leading-tight">
          About us
        </h1>
        <nav aria-label="Breadcrumb" class="mt-2 flex items-center justify-center gap-2 text-[13px] text-ink-700">
          <NuxtLink to="/" class="transition hover:text-[#23527c]">
            Home
          </NuxtLink>
          <span class="h-1 w-1 rounded-full bg-[#c8d0d8]" aria-hidden="true" />
          <span class="text-ink-700">About us</span>
        </nav>
      </div>
    </section>

    <main>
      <section class="mx-auto grid max-w-[1222px] gap-0 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-14">
        <div class="reveal flex min-h-[360px] flex-col justify-center bg-[#f7f7f7] px-7 py-12 sm:px-10 lg:min-h-[460px] lg:px-12">
          <h2 class="max-w-[520px] text-[34px] font-semibold leading-[1.18] text-title-900 sm:text-[42px]">
            Trusted Peptide Manufacturer with 7+ Years of Experience
          </h2>
          <div class="my-6 h-px w-20 bg-[#dedede]" />
          <p class="text-[17px] leading-7 text-[#666]">
            Delivering high-purity, custom and bulk peptides to clients worldwide.
          </p>
        </div>
        <div
          class="reveal min-h-[280px] bg-brand-600 bg-[url('https://norcopeptide.com/wp-content/uploads/2026/03/our-commitment-to-quality-1200x800-1.webp')] bg-cover bg-center sm:min-h-[420px] lg:min-h-[460px]"
          aria-hidden="true"
        />
      </section>

      <section class="bg-brand-50 py-12 lg:py-16">
        <div class="mx-auto max-w-[1222px] px-4 sm:px-6 lg:px-8">
          <h2 class="reveal text-center text-[32px] font-semibold leading-tight text-title-900 sm:text-[40px]">
            What we do
          </h2>
          <div class="mt-10 grid gap-8 md:grid-cols-3">
            <article v-for="card in workCards" :key="card.title" class="reveal bg-transparent text-left">
              <img :src="card.image" :alt="card.title" class="h-16 w-16 object-contain" loading="lazy">
              <h3 class="mt-6 text-[21px] font-semibold leading-7 text-title-900">
                {{ card.title }}
              </h3>
              <p class="mt-3 text-[15px] leading-7 text-ink-700">
                {{ card.text }}
              </p>
            </article>
          </div>
        </div>
      </section>

      <section class="mx-auto max-w-[1222px] px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div class="reveal text-center">
          <span class="inline-block bg-gradient-to-t from-brand-100 from-45% to-transparent px-1 text-[15px] font-semibold uppercase tracking-normal text-ink-900">
            product line
          </span>
          <h2 class="mt-3 text-[32px] font-semibold leading-tight text-title-900 sm:text-[40px]">
            Products Categories
          </h2>
        </div>

        <div class="mt-10 grid gap-7 md:grid-cols-3">
          <NuxtLink
            v-for="product in productCards"
            :key="product.slug"
            :to="`/products/${product.slug}`"
            class="group reveal block overflow-hidden rounded-[2px] bg-white shadow-[0_1px_8px_rgba(0,0,0,0.12)]"
          >
            <div class="relative aspect-square overflow-hidden bg-[#f8f8f8]">
              <img
                :src="product.image"
                :alt="product.title"
                class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                loading="lazy"
              >
              <div class="absolute inset-0 flex items-center justify-center bg-black/0 opacity-0 transition duration-300 group-hover:bg-black/25 group-hover:opacity-100">
                <span class="rounded-[2px] bg-brand-600 px-5 py-3 text-[12px] font-semibold uppercase text-white">
                  View More
                </span>
              </div>
            </div>
            <div class="px-5 py-5 text-center">
              <h3 class="text-[18px] font-semibold text-title-900">
                {{ product.title }}
              </h3>
            </div>
          </NuxtLink>
        </div>

        <div class="mt-8 text-center">
          <NuxtLink
            to="/products"
            class="inline-flex min-h-11 items-center justify-center rounded-[2px] bg-brand-600 px-7 text-[13px] font-semibold uppercase text-white transition hover:bg-brand-700"
          >
            Read More
          </NuxtLink>
        </div>
      </section>

      <section class="mx-auto grid max-w-[1222px] gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
        <div class="reveal">
          <img
            src="https://norcopeptide.com/wp-content/uploads/2026/03/our-commitment-to-quality-1200x800-1.webp"
            alt="Our Commitment to Quality"
            class="h-full min-h-[320px] w-full object-cover"
            loading="lazy"
          >
        </div>

        <div class="reveal flex flex-col justify-center">
          <span class="w-fit bg-gradient-to-t from-brand-100 from-45% to-transparent px-1 text-[15px] font-semibold text-ink-900">
            Grow your business
          </span>
          <h2 class="mt-3 text-[32px] font-semibold leading-tight text-title-900 sm:text-[40px]">
            Our Commitment to Quality
          </h2>
          <p class="mt-5 text-[16px] leading-7 text-[#666]">
            We understand the importance of precision and reliability in peptide research - that is why we leave no room for compromise.
          </p>

          <div class="mt-8">
            <div class="flex flex-wrap gap-2 border-b border-[#e8edf2]" role="tablist" aria-label="Quality tabs">
              <button
                v-for="tab in qualityTabs"
                :id="`quality-tab-${tab.id}`"
                :key="tab.id"
                type="button"
                role="tab"
                class="border-b-2 px-4 py-3 text-[14px] font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
                :class="activeQualityTab === tab.id ? 'border-brand-600 text-title-900' : 'border-transparent text-ink-700 hover:text-title-900'"
                :aria-selected="activeQualityTab === tab.id"
                :aria-controls="`quality-panel-${tab.id}`"
                @click="activeQualityTab = tab.id"
              >
                {{ tab.label }}
              </button>
            </div>
            <div
              :id="`quality-panel-${selectedQualityTab.id}`"
              class="min-h-[92px] border border-t-0 border-[#e8edf2] px-5 py-6 text-[15px] leading-7 text-ink-700"
              role="tabpanel"
              :aria-labelledby="`quality-tab-${selectedQualityTab.id}`"
            >
              {{ selectedQualityTab.text }}
            </div>
          </div>
        </div>
      </section>

      <section class="mx-auto grid max-w-[1222px] gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
        <div class="reveal flex flex-col justify-center">
          <span class="w-fit bg-gradient-to-t from-brand-100 from-45% to-transparent px-1 text-[15px] font-semibold text-ink-900">
            Global Presence
          </span>
          <h2 class="mt-3 text-[32px] font-semibold leading-tight text-title-900 sm:text-[40px]">
            Global Presence
          </h2>
          <p class="mt-5 text-[16px] leading-8 text-[#666]">
            We proudly serve clients in over <strong class="font-semibold text-title-900">35 countries</strong>, from research labs to pharmaceutical companies and biotech startups.
            <br>
            Our team supports global shipping, multilingual communication, and tailored logistic solutions to fit your needs.
          </p>
        </div>
        <div class="reveal">
          <img
            src="https://norcopeptide.com/wp-content/uploads/2026/03/global-presence.webp"
            alt="Global Presence"
            class="mx-auto w-full max-w-[520px] object-contain"
            loading="lazy"
          >
        </div>
      </section>

      <section class="mx-auto max-w-[1222px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <h2 class="reveal text-center text-[32px] font-semibold leading-tight text-title-900 sm:text-[40px]">
          Our sales experts
        </h2>
        <div class="mt-10 grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3 lg:grid-cols-4">
          <article v-for="(member, index) in teamMembers" :key="`${member.name}-${index}`" class="reveal text-center">
            <img
              :src="member.image"
              :alt="member.name"
              class="mx-auto h-[150px] w-[150px] rounded-full object-cover"
              loading="lazy"
            >
            <h3 class="mt-4 text-[16px] font-semibold text-title-900">
              {{ member.name }}
            </h3>
            <div class="mt-3 flex justify-center gap-2" aria-label="Social links">
              <a href="#" class="flex h-8 w-8 items-center justify-center rounded-full border border-[#e1e5e9] text-[12px] font-semibold text-ink-700 transition hover:border-brand-600 hover:text-brand-600" aria-label="Facebook social link">
                f
              </a>
              <a href="#" class="flex h-8 w-8 items-center justify-center rounded-full border border-[#e1e5e9] text-[12px] font-semibold text-ink-700 transition hover:border-brand-600 hover:text-brand-600" aria-label="X social link">
                x
              </a>
            </div>
          </article>
        </div>
      </section>

      <section class="mx-auto grid max-w-[1222px] gap-0 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:px-8 lg:py-16">
        <div class="reveal bg-[#f5f5f5] px-6 py-10 sm:px-10 lg:px-12">
          <h2 class="text-[32px] font-semibold leading-tight text-title-900 sm:text-[40px]">
            Quote Now
          </h2>
          <p class="mt-4 text-[16px] leading-7 text-[#666]">
            Leave your contact information and we will reply you within one working day
          </p>

          <form class="mt-8 grid gap-4" @submit.prevent="submitContact">
            <label class="sr-only" for="about-name">Name</label>
            <input
              id="about-name"
              v-model="contactForm.name"
              type="text"
              name="name"
              autocomplete="name"
              placeholder="Name"
              class="min-h-12 rounded-[2px] border border-[#d8dee5] bg-white px-4 text-[14px] outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
            >

            <label class="sr-only" for="about-email">Enter your email</label>
            <input
              id="about-email"
              v-model="contactForm.email"
              required
              type="email"
              name="email"
              autocomplete="email"
              placeholder="Enter your email .. *"
              class="min-h-12 rounded-[2px] border border-[#d8dee5] bg-white px-4 text-[14px] outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
            >

            <div class="grid gap-4 sm:grid-cols-2">
              <label class="sr-only" for="about-whatsapp">Whatsapp</label>
              <input
                id="about-whatsapp"
                v-model="contactForm.whatsapp"
                required
                type="tel"
                name="whatsapp"
                autocomplete="tel"
                placeholder="Whatsapp *"
                class="min-h-12 rounded-[2px] border border-[#d8dee5] bg-white px-4 text-[14px] outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
              >

              <label class="sr-only" for="about-country">Country</label>
              <input
                id="about-country"
                v-model="contactForm.country"
                type="text"
                name="country"
                autocomplete="country-name"
                placeholder="Country"
                class="min-h-12 rounded-[2px] border border-[#d8dee5] bg-white px-4 text-[14px] outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
              >
            </div>

            <label class="sr-only" for="about-message">Message</label>
            <textarea
              id="about-message"
              v-model="contactForm.message"
              name="message"
              placeholder="Message"
              rows="6"
              class="min-h-[150px] rounded-[2px] border border-[#d8dee5] bg-white px-4 py-3 text-[14px] outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
            />

            <button
              type="submit"
              class="min-h-12 w-fit rounded-[2px] bg-brand-600 px-7 text-[13px] font-semibold uppercase text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
              :disabled="submitStatus === 'submitting'"
            >
              {{ submitStatus === 'submitting' ? 'Sending...' : 'SEND MESSAGE ->' }}
            </button>

            <p v-if="submitStatus === 'success'" class="text-sm font-semibold text-brand-700">
              Message submitted.
            </p>
            <p v-if="submitStatus === 'error'" class="text-sm font-semibold text-red-700">
              Please check required fields and try again.
            </p>
          </form>
        </div>

        <div
          class="reveal min-h-[320px] bg-brand-50 bg-[url('https://norcopeptide.com/wp-content/uploads/2026/03/global-presence.webp')] bg-contain bg-center bg-no-repeat lg:min-h-full"
          aria-hidden="true"
        />
      </section>
    </main>
  </div>
</template>
