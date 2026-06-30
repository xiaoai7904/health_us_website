import tailwindcss from '@tailwindcss/vite'
import type { PluginOption } from 'vite'

const isDev = process.env.NODE_ENV === 'development'
const tailwindVitePlugin = tailwindcss() as PluginOption

export default defineNuxtConfig({
  compatibilityDate: '2026-06-29',
  devtools: { enabled: true },
  ssr: true,
  css: ['~/assets/css/main.css'],
  modules: ['@nuxt/eslint'],
  runtimeConfig: {
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL || 'https://example.com',
      apiBase: process.env.NUXT_PUBLIC_API_BASE || '',
      cdnBase: process.env.NUXT_PUBLIC_CDN_BASE || ''
    }
  },
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]
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
