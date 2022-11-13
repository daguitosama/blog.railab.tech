// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    experimental: {
        inlineSSRStyles: true,
        noScripts: true,
    },
    css: [
        /* Fonts */
        '~/assets/css/fonts.css',
    ],
    modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@storyblok/nuxt'],

    i18n: {
        baseUrl: process.env.ORIGIN ? process.env.ORIGIN : 'https://localhost',
        locales: [
            {
                code: 'en',
                iso: 'en-US',
            },
            {
                code: 'es',
                iso: 'es-ES',
            },
        ],
        defaultLocale: 'es',
    },

    storyblok: {
        accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        bridge: true,
        apiOptions: { region: 'us' },
        useApiClient: true,
    },
    runtimeConfig: {
        public: {
            siteName: process.env?.SITE_NAME || 'localhost',
        },
    },
});
