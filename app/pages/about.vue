<script setup lang="ts">
import productCardImage from '~/assets/image/2.webp'
import aboutWorkImageOne from '~/assets/image/about-11.png'
import aboutWorkImageTwo from '~/assets/image/about-22.png'
import aboutWorkImageThree from '~/assets/image/about-33.png'
import userImageOne from '~/assets/image/user1.webp'
import userImageTwo from '~/assets/image/user2.webp'
import userImageThree from '~/assets/image/user3.webp'
import userImageFour from '~/assets/image/user4.webp'
import userImageFive from '~/assets/image/user5.webp'
import userImageSix from '~/assets/image/user6.webp'
import userImageSeven from '~/assets/image/user7.webp'
import userImageEight from '~/assets/image/user8.webp'

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

interface SocialLink {
  label: string
  href: string
  class: string
  icon: 'facebook' | 'twitter' | 'linkedin' | 'reddit'
}

const config = useRuntimeConfig()
const siteUrl = config.public.siteUrl.replace(/\/$/, '')

useSeoMeta({
  title: 'About us | Health US',
  description: 'Trusted peptide manufacturer information, product categories, quality control, global presence, and support.'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: `${siteUrl}/about`
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
    image: aboutWorkImageOne
  },
  {
    title: 'Bulk & Catalog Peptide Supply',
    text: 'We offer a wide range of standard peptides with fast lead times and competitive pricing, suitable for bulk procurement and repeat orders.',
    image: aboutWorkImageTwo
  },
  {
    title: 'End-to-End Quality Control',
    text: 'From raw materials to final product, every stage is strictly tested using HPLC and MS. Each batch comes with a complete Certificate of Analysis.',
    image: aboutWorkImageThree
  }
]

const productCards: ProductCard[] = [
  {
    title: 'MOTS-C',
    slug: 'mots-c',
    image: productCardImage
  },
  {
    title: 'MT-2',
    slug: 'mt-2',
    image: productCardImage
  },
  {
    title: 'Cagrilin',
    slug: 'cagrilin',
    image: productCardImage
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
    name: 'Anika Rao',
    image: userImageOne
  },
  {
    name: 'Emily Chen',
    image: userImageTwo
  },
  {
    name: 'Claire Lin',
    image: userImageThree
  },
  {
    name: 'Daniel Kim',
    image: userImageFour
  },
  {
    name: 'Marco Reyes',
    image: userImageFive
  },
  {
    name: 'Sophie Martin',
    image: userImageSix
  },
  {
    name: 'Michael Reed',
    image: userImageSeven
  },
  {
    name: 'Thomas Bennett',
    image: userImageEight
  }
]

const socialLinks: SocialLink[] = [
  {
    label: 'Facebook social link',
    href: '#',
    class: 'bg-[#1877f2] hover:bg-[#0f62d7]',
    icon: 'facebook'
  },
  {
    label: 'Twitter social link',
    href: '#',
    class: 'bg-[#1da1f2] hover:bg-[#0d8bd9]',
    icon: 'twitter'
  },
  // {
  //   label: 'LinkedIn social link',
  //   href: '#',
  //   class: 'bg-[#0a66c2] hover:bg-[#084f96]',
  //   icon: 'linkedin'
  // },
  // {
  //   label: 'Reddit social link',
  //   href: '#',
  //   class: 'bg-[#ff4500] hover:bg-[#d83a00]',
  //   icon: 'reddit'
  // }
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
              <a
                v-for="item in socialLinks"
                :key="item.label"
                :href="item.href"
                :aria-label="item.label"
                :class="item.class"
                class="flex size-8 items-center justify-center rounded-full text-white transition focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
              >
                <svg v-if="item.icon === 'facebook'" class="size-3.5" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
                </svg>
                <svg v-else-if="item.icon === 'twitter'" class="size-3.5" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
                </svg>
                <!-- <svg v-else-if="item.icon === 'linkedin'" class="size-3.5" viewBox="0 0 448 512" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                </svg>
                <svg v-else class="size-3.5" viewBox="0 0 512 512" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                  <path d="M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z" />
                </svg> -->
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
