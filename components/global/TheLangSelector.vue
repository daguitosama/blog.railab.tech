<script setup>
import WorldIcon from '../icons/WorldIcon.vue';

const props = defineProps({
    prop1: {},
});
</script>

<template>
    <button class="px-[15px] flex items-center justify-between gap-[10px]">
        <span><WorldIcon class="w-5 h-5" /></span>
        <span>English</span>
    </button>
</template>
