import { defineConfig } from 'histoire';
import { HstVue } from '@histoire/plugin-vue';
import { HstNuxt } from '@histoire/plugin-nuxt';

export default defineConfig({
    plugins: [HstVue(), HstNuxt()],
    vite: {
        server: {
            port: 3000,
            hmr: {
                overlay: false,
            },
        },
    },
    setupFile: './historie.setup.ts',
    // storyMatch: ['components/**/*.story.vue'],
});
