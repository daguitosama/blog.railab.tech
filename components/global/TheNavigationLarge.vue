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
            class="px-[30px] py-[30px] lg:px-[50px] grid grid-cols-3 relative z-10 transition-all duration-300"
        >
            <div class="border-black flex items-center">
                <TheLogo />
            </div>

            <div class="border-black flex items-center justify-center">
                <NavigationLargeMenu
                    :links="links"
                    :externalLink="externalLink"
                />
            </div>

            <div class="border-black flex items-center justify-end">
                <TheLangSelector :showBorders="false" iconClasses="w-4 h-4" />
                <TheColorSelector :showBorders="false" class="ml-[8px]" />
            </div>
        </div>
    </nav>
</template>
