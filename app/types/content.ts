export interface ProductImage {
  src: string
  alt: string
}

export interface ProductPackage {
  id: string
  label: string
  price: string
  detail: string
}

export interface CertificateSummary {
  id: string
  lot: string
  title: string
  issuedAt: string
  source: string
}

export interface ReportSummary {
  id: string
  lot: string
  title: string
  issuedAt: string
  result: string
}

export interface Review {
  id: string
  author: string
  rating: number
  body: string
}

export interface Product {
  id: string
  slug: string
  name: string
  category: string
  summary: string
  description: string
  price: string
  images: ProductImage[]
  packages: ProductPackage[]
  specs: Record<string, string>
  certificates: CertificateSummary[]
  reports: ReportSummary[]
  testingNotes: string[]
  reviews: Review[]
  relatedSlugs: string[]
}

export interface Faq {
  id: string
  question: string
  answer: string
}

export interface NewsArticle {
  id: string
  slug: string
  title: string
  excerpt: string
  body: string
  category: string
  publishedAt: string
}
