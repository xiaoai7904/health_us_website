<script setup lang="ts">
type FaqContent =
  | {
      type: 'paragraph'
      text: string
    }
  | {
      type: 'list'
      items: Array<{
        label?: string
        text: string
      }>
    }

interface FaqItem {
  id: string
  question: string
  content: FaqContent[]
}

useSeoMeta({
  title: 'FAQ | Health US',
  description: 'Frequently asked questions about peptide products, purity, packaging, shipping, payment, and support.'
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://norcopeptide.com/faq/'
    }
  ]
})

useReveal()

const openItems = ref<Set<string>>(new Set())

const faqItems: FaqItem[] = [
  {
    id: 'types',
    question: 'What types of peptides do you manufacture?',
    content: [
      {
        type: 'paragraph',
        text: 'We specialize in a variety of high-purity peptides, including custom peptides, research-grade peptides, cosmetic peptides, and peptide lyophilized powders and raw materials for pharmaceutical applications.'
      }
    ]
  },
  {
    id: 'purity',
    question: 'What is the typical purity of your peptides?',
    content: [
      {
        type: 'paragraph',
        text: 'Our peptides are typically >=99% pure, and we provide detailed COA (Certificate of Analysis).'
      }
    ]
  },
  {
    id: 'research-use',
    question: 'Why do your products say: "Research Use Only"?',
    content: [
      {
        type: 'paragraph',
        text: 'In the United States, only licensed pharmacies can compound peptides and resell them for human use.'
      },
      {
        type: 'paragraph',
        text: 'Peptides in powder form can still be sold, however, they must be marked "Research Use Only," for legal and liability reasons.'
      },
      {
        type: 'paragraph',
        text: 'PLEASE be aware that self administering "research" peptides could be dangerous! There is a reason certain compounds are available ONLY under the careful supervision of a doctor. We do not want to see anyone harmed by misusing our products.'
      },
      {
        type: 'paragraph',
        text: 'Furthermore, we cannot provide medical advice of any kind. Please be safe.'
      }
    ]
  },
  {
    id: 'support',
    question: 'What if I need technical support after purchasing?',
    content: [
      {
        type: 'paragraph',
        text: 'Our technical and sales support team are always here to answer any questions you may have before or after your purchase. Please contact us via WhatsApp or email or form, we will usually respond within 12 hours.'
      }
    ]
  },
  {
    id: 'reconstitute',
    question: 'How do you reconstitute powdered peptides?',
    content: [
      {
        type: 'paragraph',
        text: 'Our lyophilized peptides require reconstitution before they are viable for research use. This involves adding a liquid (Bac Water, Saline, Distilled Water...).'
      },
      {
        type: 'paragraph',
        text: 'Any amount of liquid can be used. If you add 1ml (1ml equals 100 units) every 10 units will contain 1mg of peptide.'
      },
      {
        type: 'paragraph',
        text: 'Once reconstituted peptides should be stored refrigerated.'
      }
    ]
  },
  {
    id: 'packaging',
    question: 'How is the product packaged to ensure stability?',
    content: [
      {
        type: 'paragraph',
        text: 'Our peptides are lyophilized (freeze-dried) and sealed in sterile vials. Products are shipped with appropriate insulation and temperature control based on destination and climate.'
      }
    ]
  },
  {
    id: 'international-shipping',
    question: 'Do you ship internationally?',
    content: [
      {
        type: 'paragraph',
        text: 'Yes, we ship to over 35 countries and regions worldwide and provide full order tracking. If you have special shipping requirements, please let us know in advance.'
      }
    ]
  },
  {
    id: 'shipping-from',
    question: 'Where are you shipping from?',
    content: [
      {
        type: 'paragraph',
        text: 'Our express parcels will be concentrated in Hong Kong and then sent to the world for delivery.'
      }
    ]
  },
  {
    id: 'payment',
    question: 'What payment methods do you accept?',
    content: [
      {
        type: 'paragraph',
        text: 'We support multiple secure payment methods, including:'
      },
      {
        type: 'list',
        items: [
          { text: 'Bitcoin' },
          { text: 'USDT' },
          { text: 'USDC' },
          { text: 'ETH' },
          { text: 'Bank Transfer (T/T)' }
        ]
      },
      {
        type: 'paragraph',
        text: 'We provide a variety of payment methods to serve customers in a convenient way.'
      }
    ]
  },
  {
    id: 'processing',
    question: 'How long does it take to process and ship my order?',
    content: [
      {
        type: 'list',
        items: [
          {
            label: 'Standard peptides',
            text: 'We will send out the goods within three days after receiving your payment, and the estimated delivery time is 7-25 days.'
          },
          {
            label: 'Custom peptides',
            text: 'Depending on complexity, lead time ranges from 2-4 weeks. We ship worldwide using trusted carriers like DHL, FedEx, and EMS.'
          }
        ]
      }
    ]
  }
]

const isOpen = (id: string) => openItems.value.has(id)

const toggleItem = (id: string) => {
  const nextItems = new Set(openItems.value)

  if (nextItems.has(id)) {
    nextItems.delete(id)
  } else {
    nextItems.add(id)
  }

  openItems.value = nextItems
}
</script>

<template>
  <div class="bg-white">
    <section class="border-b border-[#e8eef4] bg-[#f8fafc] py-9 text-center">
      <div class="mx-auto max-w-[1222px] px-4 sm:px-6 lg:px-8">
        <h1 class="text-[34px] font-semibold leading-tight text-[#242424]">
          FAQ
        </h1>
        <nav aria-label="Breadcrumb" class="mt-2 flex items-center justify-center gap-2 text-[13px] text-[#777]">
          <NuxtLink to="/" class="transition hover:text-[#23527c]">
            Home
          </NuxtLink>
          <span class="h-1 w-1 rounded-full bg-[#c8d0d8]" aria-hidden="true" />
          <span class="text-[#555]">FAQ</span>
        </nav>
      </div>
    </section>

    <main class="mx-auto max-w-[1222px] px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div class="reveal space-y-[10px]">
        <article
          v-for="item in faqItems"
          :key="item.id"
          class="overflow-hidden rounded-[2px] border border-[#edf1f5] bg-white shadow-[0_1px_8px_rgba(0,0,0,0.12)]"
        >
          <button
            type="button"
            class="flex w-full items-center gap-4 px-5 py-[17px] text-left transition hover:text-[#23527c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#23527c] focus-visible:ring-offset-2 sm:px-6"
            :aria-expanded="isOpen(item.id)"
            :aria-controls="`faq-panel-${item.id}`"
            @click="toggleItem(item.id)"
          >
            <span
              class="relative flex h-5 w-5 shrink-0 items-center justify-center text-[#333]"
              aria-hidden="true"
            >
              <span class="absolute h-[2px] w-[14px] rounded-full bg-current transition-transform duration-200" />
              <span
                class="absolute h-[14px] w-[2px] rounded-full bg-current transition-transform duration-200"
                :class="isOpen(item.id) ? 'scale-y-0' : 'scale-y-100'"
              />
            </span>
            <span class="text-[16px] font-semibold leading-6 text-[#333]">
              {{ item.question }}
            </span>
          </button>

          <Transition name="faq-accordion">
            <div
              v-if="isOpen(item.id)"
              :id="`faq-panel-${item.id}`"
              class="border-t border-[#f0f3f6] px-5 pb-6 pt-1 text-[15px] leading-7 text-[#555] sm:px-6"
            >
              <template v-for="(block, blockIndex) in item.content" :key="`${item.id}-${blockIndex}`">
                <p v-if="block.type === 'paragraph'" class="mt-4">
                  {{ block.text }}
                </p>
                <ul v-else class="mt-4 list-disc space-y-1 pl-5">
                  <li v-for="listItem in block.items" :key="`${item.id}-${listItem.label || listItem.text}`">
                    <strong v-if="listItem.label" class="font-semibold text-[#333]">{{ listItem.label }}: </strong>
                    <span>{{ listItem.text }}</span>
                  </li>
                </ul>
              </template>
            </div>
          </Transition>
        </article>
      </div>
    </main>
  </div>
</template>

<style scoped>
.faq-accordion-enter-active,
.faq-accordion-leave-active {
  transition:
    opacity 180ms ease,
    transform 180ms ease;
}

.faq-accordion-enter-from,
.faq-accordion-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (prefers-reduced-motion: reduce) {
  .faq-accordion-enter-active,
  .faq-accordion-leave-active,
  .faq-accordion-enter-from,
  .faq-accordion-leave-to {
    transition: none;
    transform: none;
  }
}
</style>
