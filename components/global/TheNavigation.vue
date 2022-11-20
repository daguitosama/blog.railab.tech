<script setup>
const props = defineProps({
    links: {
        type: Array,
        default: () => [
            {
                text: 'Home',
                route: '/',
            },
            {
                text: 'Posts',
                route: '/posts',
            },
            {
                text: 'Topics',
                route: '/topics',
            },
            {
                text: 'Authors',
                route: '/authors',
            },
        ],
    },
    externalLink: {
        type: Object,
        default: () => ({
            text: 'Go to Railab',
            url: 'https://railab.tech',
        }),
    },
});
</script>

<template>
    <header class="max-w-screen-xl mx-auto">
        <TheNavigationMobile
            :links="links"
            :externalLink="externalLink"
            class="lg:hidden"
        />
        <TheNavigationLarge
            :links="links"
            :externalLink="externalLink"
            class="hidden lg:block"
        />
    </header>
</template>
