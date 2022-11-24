<script setup>
const props = defineProps({
    prop1: {},
});
</script>

<template>
    <div class="fixed inset-0 w-full h-full grid grid-cols-2 grid-rows-2 z-10">
        <div
            class="border-r border-b border-black flex items-center justify-center text-rose-500 font-bold text-3xl"
        >
            1
        </div>
        <div
            class="border-b border-black flex items-center justify-center text-rose-500 font-bold text-3xl"
        >
            2
        </div>
        <div
            class="border-r border-black flex items-center justify-center text-rose-500 font-bold text-3xl"
        >
            3
        </div>
        <div
            class="flex items-center justify-center text-rose-500 font-bold text-3xl"
        >
            4
        </div>
    </div>
</template>
