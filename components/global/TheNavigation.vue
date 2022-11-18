<script setup>
const props = defineProps({
    links: {
        type: Array,
        default: () => [{ text: 'Foo', route: '/foo' }],
    },
    externalLink: {
        text: 'Go to Railab',
        url: 'https://railab.tech',
    },
});
</script>

<template>
    <!-- <NuxtLink :to="localePath('/')"> home </NuxtLink> -->
    <header class="">
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
