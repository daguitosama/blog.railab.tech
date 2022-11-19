<script setup>
import WorldIcon from '../icons/WorldIcon.vue';

const props = defineProps({
    prop1: {},
});
</script>

<template>
    <button class="px-[15px] flex items-baseline justify-between gap-[10px]">
        <span class="flex items-center justify-center h-full relative"
            ><WorldIcon class="w-[18px] h-[18px] translate-y-[3px]"
        /></span>
        <span>English</span>
    </button>
</template>
