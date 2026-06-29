import type { Faq, NewsArticle, Product } from '~/types/content'

export const products: Product[] = [
  {
    id: 'prd-bpc-157',
    slug: 'bpc-157-reference-standard',
    name: 'BPC-157 Reference Standard',
    category: 'Research Peptides',
    summary: 'High-purity reference material for qualified laboratory research workflows.',
    description:
      'A controlled reference material prepared for analytical comparison, documentation, and laboratory workflow validation. Not for human or veterinary use.',
    price: '$89.00',
    images: [
      { src: '/images/product-vial-a.svg', alt: 'BPC-157 vial package' },
      { src: '/images/product-report.svg', alt: 'Analytical report preview' },
      { src: '/images/product-box.svg', alt: 'Secure product box' }
    ],
    packages: [
      { id: 'pkg-5mg', label: '5 mg', price: '$89.00', detail: 'Single vial' },
      { id: 'pkg-10mg', label: '10 mg', price: '$149.00', detail: 'Single vial' },
      { id: 'pkg-kit', label: 'Lab pack', price: '$399.00', detail: '5 vial bundle' }
    ],
    specs: {
      Purity: '>= 99%',
      Form: 'Lyophilized powder',
      Storage: '-20 C, protected from light',
      Use: 'Research use only'
    },
    certificates: [
      {
        id: 'coa-bpc-001',
        lot: 'BPC2406-A',
        title: 'Certificate of Analysis',
        issuedAt: '2026-06-12',
        source: 'Internal quality unit'
      }
    ],
    reports: [
      {
        id: 'rpt-bpc-001',
        lot: 'BPC2406-A',
        title: 'HPLC and MS Test Report',
        issuedAt: '2026-06-14',
        result: 'Conforms'
      }
    ],
    testingNotes: [
      'Samples are checked against documented analytical methods.',
      'Reports include lot number, method summary, issue date, and result status.',
      'Retain product and report identifiers for future verification.'
    ],
    reviews: [
      {
        id: 'rev-1',
        author: 'Verified lab buyer',
        rating: 5,
        body: 'Documentation was clear and the report matched the lot information.'
      }
    ],
    relatedSlugs: ['tb-500-reference-standard', 'ghk-cu-reference-standard']
  },
  {
    id: 'prd-tb-500',
    slug: 'tb-500-reference-standard',
    name: 'TB-500 Reference Standard',
    category: 'Research Peptides',
    summary: 'Reference peptide with lot-specific documentation and analytical report access.',
    description:
      'Prepared for qualified laboratory research, method comparison, and controlled analytical documentation workflows.',
    price: '$96.00',
    images: [
      { src: '/images/product-vial-b.svg', alt: 'TB-500 vial package' },
      { src: '/images/product-box.svg', alt: 'Product package' }
    ],
    packages: [
      { id: 'pkg-5mg', label: '5 mg', price: '$96.00', detail: 'Single vial' },
      { id: 'pkg-10mg', label: '10 mg', price: '$169.00', detail: 'Single vial' }
    ],
    specs: {
      Purity: '>= 98%',
      Form: 'Lyophilized powder',
      Storage: '-20 C',
      Use: 'Research use only'
    },
    certificates: [
      {
        id: 'coa-tb-001',
        lot: 'TB2406-B',
        title: 'Certificate of Analysis',
        issuedAt: '2026-06-10',
        source: 'Internal quality unit'
      }
    ],
    reports: [
      {
        id: 'rpt-tb-001',
        lot: 'TB2406-B',
        title: 'Identity and Purity Report',
        issuedAt: '2026-06-11',
        result: 'Conforms'
      }
    ],
    testingNotes: ['Confirm lot identifiers before use.', 'Store according to package and certificate instructions.'],
    reviews: [],
    relatedSlugs: ['bpc-157-reference-standard', 'ghk-cu-reference-standard']
  },
  {
    id: 'prd-ghk-cu',
    slug: 'ghk-cu-reference-standard',
    name: 'GHK-Cu Reference Standard',
    category: 'Copper Peptides',
    summary: 'Lot-traceable reference material for analytical laboratory environments.',
    description:
      'Designed for research teams that require clear lot information, certificate traceability, and accessible testing documentation.',
    price: '$112.00',
    images: [
      { src: '/images/product-vial-c.svg', alt: 'GHK-Cu vial package' },
      { src: '/images/product-report.svg', alt: 'Report preview' }
    ],
    packages: [
      { id: 'pkg-50mg', label: '50 mg', price: '$112.00', detail: 'Single vial' },
      { id: 'pkg-100mg', label: '100 mg', price: '$198.00', detail: 'Single vial' }
    ],
    specs: {
      Purity: '>= 98%',
      Form: 'Blue lyophilized powder',
      Storage: '2-8 C',
      Use: 'Research use only'
    },
    certificates: [
      {
        id: 'coa-ghk-001',
        lot: 'GHK2406-C',
        title: 'Certificate of Analysis',
        issuedAt: '2026-06-09',
        source: 'Internal quality unit'
      }
    ],
    reports: [
      {
        id: 'rpt-ghk-001',
        lot: 'GHK2406-C',
        title: 'Purity Test Report',
        issuedAt: '2026-06-13',
        result: 'Conforms'
      }
    ],
    testingNotes: ['Review certificate before opening package.', 'Use report ID when requesting support.'],
    reviews: [
      {
        id: 'rev-2',
        author: 'Procurement manager',
        rating: 5,
        body: 'The batch documentation made internal review straightforward.'
      }
    ],
    relatedSlugs: ['bpc-157-reference-standard', 'tb-500-reference-standard']
  }
]

export const faqs: Faq[] = [
  {
    id: 'faq-1',
    question: 'Are products intended for human use?',
    answer: 'No. Product copy and documentation should be treated as research-use information unless approved business copy states otherwise.'
  },
  {
    id: 'faq-2',
    question: 'Where can I find lot-specific reports?',
    answer: 'Product details include report and certificate links when lot-specific documentation is available.'
  },
  {
    id: 'faq-3',
    question: 'Can I request support before ordering?',
    answer: 'Yes. Use the contact page or purchase support popup to reach customer service before submitting an order.'
  }
]

export const news: NewsArticle[] = [
  {
    id: 'news-1',
    slug: 'reading-product-test-reports',
    title: 'How to Read Product Test Reports',
    excerpt: 'A practical overview of lot numbers, method summaries, dates, and result status.',
    body:
      'Product test reports should connect directly to a lot identifier, method summary, issue date, and result statement. Always compare the report lot with the package or product detail page before relying on it.',
    category: 'Testing',
    publishedAt: '2026-06-20'
  },
  {
    id: 'news-2',
    slug: 'certificate-traceability-basics',
    title: 'Certificate Traceability Basics',
    excerpt: 'Why certificate identifiers and issue dates matter for qualified research buyers.',
    body:
      'Traceability depends on stable identifiers. A useful certificate should show product name, lot or batch number, issue date, source, and any linked analytical documents.',
    category: 'Certificates',
    publishedAt: '2026-06-18'
  }
]
