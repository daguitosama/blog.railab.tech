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
    modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss'],

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

    runtimeConfig: {
        public: {
            siteName: process.env?.SITE_NAME || 'localhost',
            twitterSite: process.env?.TWITTER_SITE || '',
            storyblokApiUrl: process.env.STORYBLOK_API_URL,
            storyblockAccessToken: process.env.STORYBLOK_ACCESS_TOKEN,
        },
        contentVersionSelectorPassword:
            process.env.CONTENT_VERSION_SELECTOR_PASSWORD || 'supper-foo-pass',
    },
});
