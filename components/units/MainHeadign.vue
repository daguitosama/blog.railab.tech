<script setup>
const props = defineProps({
    /**
     * The text content
     */
    text: {
        type: String,
        default: 'Supper Nice Headign',
    },

    /**
     * Id in case needed for a fragment identifier
     *
     */
    // id: {
    //     type: String,
    // },
});
</script>

<template>
    <h1
        class="text-type-on-light-base font-bold pb-2 text-4xl sm:text-5xl md:text-6xl"
    >
        {{ text }}
    </h1>
</template>
