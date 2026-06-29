<script setup lang="ts">
interface ContactMethod {
  label: string
  value: string
  href: string
}

useSeoMeta({
  title: 'Contact US | Health US',
  description: 'Contact the support team for peptide product questions, order support, and documentation requests.'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://norcopeptide.com/contact-us/'
    }
  ]
})

useReveal()

const form = reactive({
  name: '',
  email: '',
  whatsapp: '',
  country: '',
  message: ''
})

const status = ref<'idle' | 'submitting' | 'success' | 'error'>('idle')

const contactMethods: ContactMethod[] = [
  {
    label: 'email',
    value: 'linwenwen072@gmail.com',
    href: 'mailto:linwenwen072@gmail.com'
  },
  {
    label: 'Whatsapp',
    value: '+85259205033',
    href: 'https://wa.me/85259205033'
  }
]

const submit = async () => {
  status.value = 'submitting'

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: form
    })

    status.value = 'success'
  } catch {
    status.value = 'error'
  }
}
</script>

<template>
  <div class="bg-white text-[#242424]">
    <section class="border-b border-[#e8eef4] bg-[#f8fafc] py-9 text-center">
      <div class="mx-auto max-w-[1222px] px-4 sm:px-6 lg:px-8">
        <h1 class="text-[34px] font-semibold leading-tight">
          Contact US
        </h1>
        <nav aria-label="Breadcrumb" class="mt-2 flex items-center justify-center gap-2 text-[13px] text-[#777]">
          <NuxtLink to="/" class="transition hover:text-brand-600">
            Home
          </NuxtLink>
          <span class="h-1 w-1 rounded-full bg-[#c8d0d8]" aria-hidden="true" />
          <span class="text-[#555]">Contact US</span>
        </nav>
      </div>
    </section>

    <main class="mx-auto max-w-[1120px] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div class="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-stretch">
        <section class="reveal flex flex-col justify-center">
          <img
            src="https://norcopeptide.com/wp-content/uploads/2026/03/9XvPV85Mqm-300x288-1.webp"
            alt=""
            class="h-auto w-[150px] max-w-full object-contain sm:w-[180px]"
            fetchpriority="high"
          >

          <h2 class="mt-7 max-w-[460px] text-[30px] font-semibold leading-[1.2] text-[#222] sm:text-[36px]">
            Secure Your Premium Peptides - Connect with Our Expert Team Today!
          </h2>

          <div class="mt-8 space-y-5 text-[16px] leading-7 text-[#333]">
            <div v-for="method in contactMethods" :key="method.label">
              <p>
                <span class="underline decoration-brand-100 decoration-[8px] underline-offset-[-2px]">
                  {{ method.label }}
                </span>:
              </p>
              <a
                :href="method.href"
                class="mt-1 inline-block text-[17px] text-[#333] transition hover:text-brand-600"
                :target="method.href.startsWith('http') ? '_blank' : undefined"
                :rel="method.href.startsWith('http') ? 'noopener noreferrer' : undefined"
              >
                {{ method.value }}
              </a>
            </div>
          </div>
        </section>

        <section class="reveal bg-[#f5f5f5] p-6 sm:p-9 lg:p-12">
          <div class="bg-white/0">
            <h2 class="text-[26px] font-semibold lowercase leading-tight text-[#222] sm:text-[30px]">
              send a message
            </h2>

            <form class="mt-7 grid gap-4" @submit.prevent="submit">
              <label class="sr-only" for="contact-name">Name</label>
              <input
                id="contact-name"
                v-model="form.name"
                type="text"
                name="name"
                autocomplete="name"
                placeholder="Name"
                class="min-h-12 rounded-[5px] border border-[#d8dee5] bg-white px-4 text-[14px] outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
              >

              <label class="sr-only" for="contact-email">Enter your email</label>
              <input
                id="contact-email"
                v-model="form.email"
                required
                type="email"
                name="email"
                autocomplete="email"
                placeholder="Enter your email .. *"
                class="min-h-12 rounded-[5px] border border-[#d8dee5] bg-white px-4 text-[14px] outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
              >

              <div class="grid gap-4 sm:grid-cols-2">
                <label class="sr-only" for="contact-whatsapp">Whatsapp</label>
                <input
                  id="contact-whatsapp"
                  v-model="form.whatsapp"
                  required
                  type="tel"
                  name="whatsapp"
                  autocomplete="tel"
                  placeholder="Whatsapp *"
                  class="min-h-12 rounded-[5px] border border-[#d8dee5] bg-white px-4 text-[14px] outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
                >

                <label class="sr-only" for="contact-country">Country</label>
                <input
                  id="contact-country"
                  v-model="form.country"
                  type="text"
                  name="country"
                  autocomplete="country-name"
                  placeholder="Country"
                  class="min-h-12 rounded-[5px] border border-[#d8dee5] bg-white px-4 text-[14px] outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
                >
              </div>

              <label class="sr-only" for="contact-message">Message</label>
              <textarea
                id="contact-message"
                v-model="form.message"
                name="message"
                placeholder="Message"
                rows="10"
                maxlength="2000"
                class="min-h-[220px] rounded-[5px] border border-[#d8dee5] bg-white px-4 py-3 text-[14px] outline-none transition focus:border-brand-600 focus:ring-2 focus:ring-brand-600/20"
              />

              <button
                class="min-h-12 w-fit rounded-[5px] bg-brand-600 px-7 text-[13px] font-semibold uppercase text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60"
                :disabled="status === 'submitting'"
                type="submit"
              >
                {{ status === 'submitting' ? 'Sending...' : 'SEND MESSAGE ->' }}
              </button>

              <p v-if="status === 'success'" class="text-sm font-semibold text-brand-700">
                Message submitted.
              </p>
              <p v-if="status === 'error'" class="text-sm font-semibold text-red-700">
                Please check required fields and try again.
              </p>
            </form>
          </div>
        </section>
      </div>
    </main>
  </div>
</template>
