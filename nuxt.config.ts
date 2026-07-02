import tailwindcss from '@tailwindcss/vite'
import type { PluginOption } from 'vite'

const isDev = process.env.NODE_ENV === 'development'
const tailwindVitePlugin = tailwindcss() as PluginOption
const siteUrl = process.env.NUXT_PUBLIC_SITE_URL || 'https://healthus.xiaoai.work'
const siteName = 'Health US'
const defaultTitle = 'Your Trusted Source for High-Quality Lab Tested Peptides'
const defaultDescription = 'Discover premium, lab-tested peptides from your trusted source. Our products meet rigorous quality standards, ensuring purity, efficacy, and reliability.'
const defaultKeyword = 'High-Quality Lab Tested Peptides'
const defaultOgImage = `${siteUrl.replace(/\/$/, '')}/images/TG-banner.jpg`

export default defineNuxtConfig({
  compatibilityDate: '2026-06-29',
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/eslint'],
  runtimeConfig: {
    public: {
      siteUrl,
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '',
      cdnBase: process.env.NUXT_PUBLIC_CDN_BASE || ''
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: defaultTitle,
      meta: [
        { name: 'description', content: defaultDescription },
        { property: 'og:site_name', content: siteName },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'en' },
        { property: 'og:image:alt', content: defaultKeyword },
        { property: 'og:title', content: defaultTitle },
        { property: 'og:description', content: defaultDescription },
        { property: 'og:image', content: defaultOgImage },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: defaultTitle },
        { name: 'twitter:description', content: defaultDescription },
        { name: 'twitter:image', content: defaultOgImage },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }]
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    }
  },
  vite: {
    plugins: [tailwindVitePlugin]
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    },
    routeRules: isDev
      ? {}
      : {
          '/': { swr: 300 },
          '/products/**': { swr: 300 },
          '/blog/**': { swr: 600 },
          '/news/**': { swr: 600 },
          '/api/products/**': { swr: 300 },
          '/api/news/**': { swr: 600 }
        }
  },
  typescript: {
    strict: true,
    typeCheck: true
  }
})
