import tailwindcss from "@tailwindcss/vite"

export default defineNuxtConfig({
  compatibilityDate: "2026-11-08",
  css: ["~/assets/css/global.css"],
  vite: { plugins: [tailwindcss()] },
  vue: {
    compilerOptions: {
      whitespace: "preserve",
    },
  },
  app: {
    head: {
      viewport: "width=device-width",
    },
  },
  experimental: {
    prerenderErrorPages: true,
  },
  nitro: {
    output: { publicDir: "dist" },
    prerender: {
      autoSubfolderIndex: false,
      failOnError: true,
    },
  },
})
