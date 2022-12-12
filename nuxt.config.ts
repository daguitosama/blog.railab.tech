// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    experimental: {
        inlineSSRStyles: true,
        // noScripts: true,
    },

    // ------
    // Use when importing nuxt recipes from GH
    //
    // layer doc: https://nuxt.com/docs/guide/going-further/layers#authoring-nuxt-layers
    // extends: ['github:daguitosama/dagos-nuxt3-recipes'],
    //
    // fs tuning for remove 403: https://vitejs.dev/config/server-options.html#server-fs-allow
    // vite: {
    //     server: {
    //         fs: {
    //             // Allow serving files from one level up to the project root
    //             allow: ['/private/var/folders/_s/'],
    //         },
    //     },
    // },
    // -------

    css: [
        /* Fonts */
        '~/assets/css/fonts.css',
    ],
    modules: ['@nuxtjs/i18n', '@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],

    i18n: {
        baseUrl: process.env.ORIGIN ? process.env.ORIGIN : 'https://localhost',
        defaultLocale: 'es',
        // langDir: 'content',
        // lazy: true,
        vueI18n: {
            legacy: false,
        },
        locales: [
            {
                code: 'en',
                iso: 'en-US',
                name: 'English',
                // file: 'en-US.json',
            },
            {
                code: 'es',
                iso: 'es-ES',
                name: 'Español',
                // file: 'es-ES.json',
            },
            // temp
            // {
            //     code: 'fr',
            //     iso: 'fr-FR',
            //     name: 'French',
            //     // file: 'es-ES.json',
            // },
        ],
    },
    colorMode: {
        classSuffix: '',
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
    typescript: {
        shim: false,
    },
});
