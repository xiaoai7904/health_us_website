<script setup lang="ts">
interface LabReportImage {
  title: string
  src: string
  href: string
  alt: string
}

interface LabReportItem {
  id: string
  title: string
  productTo: string
  productLabel: string
  facts: Array<{
    label: string
    value: string
  }>
  images: LabReportImage[]
}

interface LabReportGroup {
  month: string
  items: LabReportItem[]
}

const openReports = ref<Set<string>>(new Set())

const reportGroups: LabReportGroup[] = [
  {
    month: 'June 2026',
    items: [
      {
        id: 'bpc-157-june-2026',
        title: 'BPC-157 - 99.973%',
        productTo: '/products/bpc-157-reference-standard',
        productLabel: 'Buy BPC-157',
        facts: [
          { label: 'Date tested', value: 'June 05, 2026' },
          { label: 'Purity', value: '99.731%' },
          { label: 'Weight', value: '11.03mg' },
          { label: 'Batch Number', value: 'BP06261310K' }
        ],
        images: [
          {
            title: 'BPC-157 Peptide Purity Certificate of Analysis Lab Test Report June 2026',
            src: 'https://verifiedpeptides.com/wp-content/uploads/2026/06/BPC-157-Peptide-Purity-Certificate-of-Analysis-Lab-Test-Report-June-2026-271x400.jpg',
            href: 'https://verifiedpeptides.com/wp-content/uploads/2026/06/BPC-157-Peptide-Purity-Certificate-of-Analysis-Lab-Test-Report-June-2026.jpg',
            alt: 'BPC-157 Peptide Purity Certificate of Analysis Lab Test Report June 2026'
          }
        ]
      },
      {
        id: 'cartalax-june-2026',
        title: 'Cartalax - 99.92%',
        productTo: '/products/cartalax',
        productLabel: 'Buy Cartalax',
        facts: [
          { label: 'Date tested', value: 'June 05, 2026' },
          { label: 'Purity', value: '99.928%' },
          { label: 'Weight', value: '23.80mg' },
          { label: 'Batch Number', value: 'CAR06260420D' }
        ],
        images: [
          {
            title: 'Cartalax Peptide Purity Certificate of Analysis Lab Test Report June 2026',
            src: 'https://verifiedpeptides.com/wp-content/uploads/2026/06/Cartalax-Peptide-Purity-Certificate-of-Analysis-Lab-Test-Report-June-2026-271x400.jpg',
            href: 'https://verifiedpeptides.com/wp-content/uploads/2026/06/Cartalax-Peptide-Purity-Certificate-of-Analysis-Lab-Test-Report-June-2026-542x800.jpg',
            alt: 'Cartalax Peptide Purity Certificate of Analysis Lab Test Report June 2026'
          }
        ]
      },
      {
        id: 'glutathione-june-2026',
        title: 'Glutathione - 99.01%',
        productTo: '/products',
        productLabel: 'Buy Glutathione',
        facts: [
          { label: 'Date tested', value: 'June 05, 2026' },
          { label: 'Purity', value: '99.010%' },
          { label: 'Weight', value: '1563.83mg' },
          { label: 'Batch Number', value: 'GL0526031500B' }
        ],
        images: [
          {
            title: 'Glutathione Peptide Purity Certificate of Analysis Lab Test Report June 2026',
            src: 'https://verifiedpeptides.com/wp-content/uploads/2026/06/Glutathione-Peptide-Purity-Certificate-of-Analysis-Lab-Test-Report-June-2026-271x400.jpg',
            href: 'https://verifiedpeptides.com/wp-content/uploads/2026/06/Glutathione-Peptide-Purity-Certificate-of-Analysis-Lab-Test-Report-June-2026-542x800.jpg',
            alt: 'Glutathione Peptide Purity Certificate of Analysis Lab Test Report June 2026'
          }
        ]
      },
      {
        id: 'mots-c-june-2026',
        title: 'MOTS-C - 98.67%',
        productTo: '/products',
        productLabel: 'Buy MOTS-C',
        facts: [
          { label: 'Date tested', value: 'June 05, 2026' },
          { label: 'Purity', value: '98.672%' },
          { label: 'Weight', value: '23.77mg' },
          { label: 'Batch Number', value: 'MO05261320L' }
        ],
        images: [
          {
            title: 'MOTS-C Peptide Purity Certificate of Analysis Lab Test Report June 2026',
            src: 'https://verifiedpeptides.com/wp-content/uploads/2026/06/MOTS-C-Peptide-Purity-Certificate-of-Analysis-Lab-Test-Report-June-2026-271x400.jpg',
            href: 'https://verifiedpeptides.com/wp-content/uploads/2026/06/MOTS-C-Peptide-Purity-Certificate-of-Analysis-Lab-Test-Report-June-2026-542x800.jpg',
            alt: 'MOTS-C Peptide Purity Certificate of Analysis Lab Test Report June 2026'
          }
        ]
      }
    ]
  },
  {
    month: 'May 2026',
    items: [
      {
        id: '5-amino-1mq-may-2026',
        title: '5-Amino 1MQ',
        productTo: '/products/5-amino-1mq',
        productLabel: 'Buy 5-Amino 1MQ',
        facts: [
          { label: 'Date tested', value: 'May 28, 2026' },
          { label: 'Weight', value: '62.15mg' },
          { label: 'Batch Number', value: '5AQ05260450D' }
        ],
        images: [
          {
            title: '5-Amino 1MQ Peptide Purity Certificate of Analysis Lab Test Report May 2026',
            src: 'https://verifiedpeptides.com/wp-content/uploads/2026/06/5-Amino-1MQ-Peptide-Purity-Certificate-of-Analysis-Lab-Test-Report-May-2026-271x400.jpg',
            href: 'https://verifiedpeptides.com/wp-content/uploads/2026/06/5-Amino-1MQ-Peptide-Purity-Certificate-of-Analysis-Lab-Test-Report-May-2026.jpg',
            alt: '5-Amino 1MQ Peptide Purity Certificate of Analysis Lab Test Report May 2026'
          },
          {
            title: '5-Amino 1MQ Peptide Endotoxin Certificate of Analysis Lab Test Report May 2026',
            src: 'https://verifiedpeptides.com/wp-content/uploads/2026/06/5-Amino-1MQ-Peptide-Endotoxin-Certificate-of-Analysis-Lab-Test-Report-May-2026-271x400.jpg',
            href: 'https://verifiedpeptides.com/wp-content/uploads/2026/06/5-Amino-1MQ-Peptide-Endotoxin-Certificate-of-Analysis-Lab-Test-Report-May-2026.jpg',
            alt: '5-Amino 1MQ Peptide Endotoxin Certificate of Analysis Lab Test Report May 2026'
          }
        ]
      },
      {
        id: 'cjc-1295-dac-may-2026',
        title: 'CJC-1295 DAC - 99.46%',
        productTo: '/products',
        productLabel: 'Buy CJC-1295 DAC',
        facts: [
          { label: 'Date tested', value: 'May 12, 2026' },
          { label: 'Purity', value: '99.464%' },
          { label: 'Weight', value: '6.08mg' },
          { label: 'Endotoxin', value: 'Pass' },
          { label: 'Sterility', value: 'Pass' },
          { label: 'Batch Number', value: 'CJCD06261105J' }
        ],
        images: [
          {
            title: 'CJC-1295 DAC Peptide Purity Certificate of Analysis Lab Test Report May 2026',
            src: 'https://verifiedpeptides.com/wp-content/uploads/2026/05/CJC-1295-DAC-Peptide-Purity-Certificate-of-Analysis-Lab-Test-Report-May-2026-271x400.jpg',
            href: 'https://verifiedpeptides.com/wp-content/uploads/2026/05/CJC-1295-DAC-Peptide-Purity-Certificate-of-Analysis-Lab-Test-Report-May-2026-542x800.jpg',
            alt: 'CJC-1295 DAC Peptide Purity Certificate of Analysis Lab Test Report May 2026'
          }
        ]
      },
      {
        id: 'ipamorelin-may-2026',
        title: 'Ipamorelin - 99.77%',
        productTo: '/products',
        productLabel: 'Buy Ipamorelin',
        facts: [
          { label: 'Date tested', value: 'May 27, 2026' },
          { label: 'Purity', value: '99.770%' },
          { label: 'Weight', value: '11.73mg' },
          { label: 'Endotoxin', value: 'Pass' },
          { label: 'Batch Number', value: 'IPA05261110K' }
        ],
        images: [
          {
            title: 'Ipamorelin Peptide Purity Certificate of Analysis Lab Test Report May 2026',
            src: 'https://verifiedpeptides.com/wp-content/uploads/2026/05/Ipamorelin-Peptide-Purity-Certificate-of-Analysis-Lab-Test-Report-May-2026-271x400.jpg',
            href: 'https://verifiedpeptides.com/wp-content/uploads/2026/05/Ipamorelin-Peptide-Purity-Certificate-of-Analysis-Lab-Test-Report-May-2026-542x800.jpg',
            alt: 'Ipamorelin Peptide Purity Certificate of Analysis Lab Test Report May 2026'
          }
        ]
      }
    ]
  },
  {
    month: 'April 2025',
    items: [
      {
        id: 'thymosin-alpha-1-april-2025',
        title: 'Thymosin Alpha-1 - 99.60%',
        productTo: '/products',
        productLabel: 'Buy Thymosin Alpha-1',
        facts: [
          { label: 'Date tested', value: 'April 28, 2025' },
          { label: 'Purity', value: '99.601%' },
          { label: 'Weight', value: '12.55mg' },
          { label: 'Batch Number', value: '04-25-0510D' }
        ],
        images: [
          {
            title: 'Thymosin Alpha-1 Lab Report Test April 2025',
            src: 'https://verifiedpeptides.com/wp-content/uploads/2025/04/Thymosin-Alpha-1-Lab-Report-Test-April-2025-271x400.jpg',
            href: 'https://verifiedpeptides.com/wp-content/uploads/2025/04/Thymosin-Alpha-1-Lab-Report-Test-April-2025-542x800.jpg',
            alt: 'Thymosin Alpha-1 Lab Report Test April 2025'
          }
        ]
      },
      {
        id: 'epitalon-april-2025',
        title: 'Epitalon - 99.63%',
        productTo: '/products',
        productLabel: 'Buy Epitalon',
        facts: [
          { label: 'Date tested', value: 'April 28, 2025' },
          { label: 'Purity', value: '99.630%' },
          { label: 'Weight', value: '10.99mg' },
          { label: 'Endotoxin', value: 'Pass' },
          { label: 'Batch Number', value: '04-25-0510E' }
        ],
        images: [
          {
            title: 'Epitalon Lab Report Test April 2025',
            src: 'https://verifiedpeptides.com/wp-content/uploads/2025/04/Epitalon-Lab-Report-Test-April-2025-271x400.jpg',
            href: 'https://verifiedpeptides.com/wp-content/uploads/2025/04/Epitalon-Lab-Report-Test-April-2025-542x800.jpg',
            alt: 'Epitalon Lab Report Test April 2025'
          },
          {
            title: 'Epitalon Endotoxin Lab Report Test April 2025',
            src: 'https://verifiedpeptides.com/wp-content/uploads/2025/05/Epitalon-Endotoxin-Lab-Report-Test-April-2025-271x400.jpg',
            href: 'https://verifiedpeptides.com/wp-content/uploads/2025/05/Epitalon-Endotoxin-Lab-Report-Test-April-2025-542x800.jpg',
            alt: 'Epitalon Endotoxin Lab Report Test April 2025'
          }
        ]
      },
      {
        id: 'bpc-157-april-2025',
        title: 'BPC-157 - 99.08%',
        productTo: '/products/bpc-157-reference-standard',
        productLabel: 'Buy BPC-157',
        facts: [
          { label: 'Date tested', value: 'April 16, 2025' },
          { label: 'Purity', value: '99.081%' },
          { label: 'Weight', value: '11.21mg' },
          { label: 'Endotoxin', value: 'Pass' },
          { label: 'Batch Number', value: '01-25-0510F' }
        ],
        images: [
          {
            title: 'BPC-157 Lab Report Test April 2025',
            src: 'https://verifiedpeptides.com/wp-content/uploads/2025/04/BPC-157-Lab-Report-Test-April-2025-1-271x400.jpg',
            href: 'https://verifiedpeptides.com/wp-content/uploads/2025/04/BPC-157-Lab-Report-Test-April-2025-1-542x800.jpg',
            alt: 'BPC-157 Lab Report Test April 2025'
          },
          {
            title: 'BPC-157 Endotoxin Test April 2025',
            src: 'https://verifiedpeptides.com/wp-content/uploads/2025/04/BPC-157-Endotoxin-Test-April-2025-271x400.jpg',
            href: 'https://verifiedpeptides.com/wp-content/uploads/2025/04/BPC-157-Endotoxin-Test-April-2025-542x800.jpg',
            alt: 'BPC-157 Endotoxin Test April 2025'
          }
        ]
      }
    ]
  }
]

const toggleReport = (id: string) => {
  const next = new Set(openReports.value)
  if (next.has(id)) {
    next.delete(id)
  } else {
    next.add(id)
  }
  openReports.value = next
}

const isOpen = (id: string) => openReports.value.has(id)

useSeoMeta({
  title: 'Research Peptide Lab Reports - 99% Pure Research Peptides',
  description: 'Browse over 500+ published lab reports. Every batch is documented with available lot-specific testing information.',
  ogTitle: 'Lab Reports',
  ogDescription: 'Browse published peptide certificates of analysis and lab test reports.',
  ogImage: 'https://verifiedpeptides.com/wp-content/uploads/2024/06/CJC1295-5MG.jpg'
})

useHead({
  link: [{ rel: 'canonical', href: 'https://verifiedpeptides.com/lab-reports/' }]
})

useReveal()
</script>

<template>
  <div class="bg-white">
    <section id="section_561012536" class="mb-1">
      <div
        class="relative flex min-h-[150px] items-center justify-center overflow-hidden bg-cover bg-[position:3%_30%]"
        style="background-image: url('https://verifiedpeptides.com/wp-content/uploads/2024/02/ORANGEmoleculefield-711x400.jpg')"
      >
        <div class="absolute inset-0 bg-white/10" aria-hidden="true" />
        <div class="relative mx-auto max-w-[1200px] px-4 text-center">
          <h1 class="text-[32px] font-semibold leading-tight text-ink-900 md:text-[42px]">
            Peptide Lab Test Reports
          </h1>
        </div>
      </div>
    </section>

    <section id="section_1806637067" class="py-8 md:py-10">
      <div class="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div class="reveal text-center">
          <h2 class="text-[24px] font-medium leading-snug text-ink-900 md:text-[30px]">
            Consistent, reliable, verified quality peptides.
          </h2>
          <h3 class="mx-auto mt-3 max-w-4xl text-[18px] font-medium leading-8 text-ink-900 md:text-[22px]">
            Browse our collection of over <strong>500+</strong> published peptide certificates of analysis.<br>
            The #1 leader in peptide testing.<br>
            <span class="text-[80%]">For research use only</span>
          </h3>
        </div>

        <div class="mt-8 space-y-8">
          <section v-for="group in reportGroups" :key="group.month" class="reveal">
            <h3 class="accordion_title mb-3 text-[22px] font-semibold text-ink-900">
              {{ group.month }}
            </h3>

            <div class="accordion overflow-hidden border border-line bg-white">
              <article v-for="item in group.items" :key="item.id" class="accordion-item border-b border-line last:border-b-0">
                <button
                  class="accordion-title plain flex w-full items-center gap-3 bg-white px-4 py-3 text-left text-[16px] font-semibold text-ink-900 transition hover:bg-brand-50 hover:text-brand-600"
                  type="button"
                  :aria-expanded="isOpen(item.id)"
                  :aria-controls="`${item.id}-content`"
                  @click="toggleReport(item.id)"
                >
                  <span class="toggle flex size-7 shrink-0 items-center justify-center rounded-full border border-line text-brand-600 transition" :class="isOpen(item.id) ? 'rotate-180' : ''">
                    <svg class="size-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.17l3.71-3.94a.75.75 0 1 1 1.08 1.04l-4.25 4.5a.75.75 0 0 1-1.08 0l-4.25-4.5a.75.75 0 0 1 .02-1.06Z" clip-rule="evenodd" />
                    </svg>
                  </span>
                  <span>{{ item.title }}</span>
                </button>

                <Transition name="report-accordion">
                  <div v-if="isOpen(item.id)" :id="`${item.id}-content`" class="accordion-inner border-t border-line px-4 py-6">
                    <div class="grid gap-8 md:grid-cols-2">
                      <div class="col-inner">
                        <table id="footable_parent_NT_ID" class="w-full max-w-[500px] overflow-hidden rounded-xl border border-[#e6edf5] bg-white text-left">
                          <tbody>
                            <tr v-for="fact in item.facts" :key="fact.label" class="border-b border-[#eef3f8] last:border-b-0">
                              <td class="w-[42%] bg-[#f8fbfe] px-4 py-3 text-[13px] font-semibold text-[#5f6b7a]">{{ fact.label }}:</td>
                              <td class="px-4 py-3 text-[13px] font-medium text-[#1f2937]">{{ fact.value }}</td>
                            </tr>
                          </tbody>
                        </table>

                        <NuxtLink
                          :to="item.productTo"
                          class="mt-5 inline-flex min-h-10 items-center rounded border border-brand-600 px-4 text-[13px] font-semibold text-brand-600 transition hover:bg-brand-600 hover:text-white"
                        >
                          {{ item.productLabel }}
                        </NuxtLink>
                      </div>

                      <div class="col-inner">
                        <div class="grid grid-cols-2 gap-5 sm:grid-cols-3">
                          <a
                            v-for="image in item.images"
                            :key="image.href"
                            :href="image.href"
                            target="_blank"
                            rel="noopener"
                            class="group block text-center"
                          >
                            <div class="box-image mx-auto overflow-hidden bg-white shadow-[0_3px_10px_rgba(0,0,0,0.22)] transition group-hover:-translate-y-1">
                              <img
                                :src="image.src"
                                :alt="image.alt"
                                class="mx-auto aspect-[271/400] w-full object-cover"
                                loading="lazy"
                              >
                            </div>
                            <p class="box-text mt-3 text-[13px] leading-5 text-ink-800 group-hover:text-brand-600">
                              {{ image.title }}
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Transition>
              </article>
            </div>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.report-accordion-enter-active,
.report-accordion-leave-active {
  transition: opacity 180ms ease, transform 180ms ease;
}

.report-accordion-enter-from,
.report-accordion-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

@media (prefers-reduced-motion: reduce) {
  .report-accordion-enter-active,
  .report-accordion-leave-active {
    transition: none;
  }
}
</style>
