<script setup>
const props = defineProps({
    tab: {
        type: Object,
        default: {
            text: '',
            route: '',
        },
    },
    isActive: {
        type: Boolean,
        default: false,
    },
});
</script>

<template>
    <div class="">
        <NuxtLink
            :to="localePath(tab.route)"
            class="px-[16px] py-[10px] text-type-on-light-base"
            :class="{
                'text-primary-on-light-base border-b border-primary-on-light-base ':
                    isActive,
            }"
        >
            {{ tab.text }}</NuxtLink
        >
    </div>
</template>
