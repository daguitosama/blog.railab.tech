<script setup>
// props
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
    <nav ref="naviation_menu">
        <!-- nav bar -->
        <div
            class="px-[30px] py-[30px] lg:px-[50px] flex items-baseline justify-between relative z-50 bg-white"
        >
            <TheLogo />

            <NavigationLargeMenu :links="links" :externalLink="externalLink" />
        </div>
    </nav>
</template>
