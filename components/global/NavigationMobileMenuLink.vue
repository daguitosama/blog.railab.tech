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
    <li class="px-[30px] py-[15px] text-4xl font-bold leading-none">
        <NuxtLink :to="localePath(link.route)" :tabindex="isReachable ? 0 : -1"
            class="font-sentient focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-4 focus-visible:ring-black rounded-lg text-type-on-light-base dark:text-type-on-dark-base hover:text-primary-on-light-base hover:underline active:text-primary-on-light-base"
            :class="{
                'underline text-primary-on-light-base dark:text-primary-on-light-base':
                    isCurrent,
            }">
            {{ link.text }}</NuxtLink>
    </li>
</template>
