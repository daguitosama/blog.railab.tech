<script setup>
const props = defineProps({
    link: {
        type: Object,
        default: () => ({
            route: '/',
            text: '',
        }),
    },
    isReachable: {
        type: Boolean,
        default: false,
    },
    isCurrent: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <li
        class="px-[30px] py-[15px] text-4xl font-bold leading-none text-type-on-light-base hover:text-primary-on-light-base hover:underline active:text-primary-on-light-base"
        :class="{ 'underline text-primary-on-light-base': isCurrent }"
    >
        <NuxtLink
            :to="localePath(link.route)"
            :tabindex="isReachable ? 0 : -1"
            class="focus:outline-none focus:ring-2 focus:ring-black rounded-lg"
        >
            {{ link.text }}</NuxtLink
        >
    </li>
</template>
