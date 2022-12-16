<script setup>
const props = defineProps({
    heading: {
        type: String,
        default: 'Foo',
    },
    copy: {
        type: String,
        default: 'Foo',
    },
});
</script>

<template>
    <div class="text-center w-full flex justify-center px-[30px] pt-[120px]">
        <div class="sm:max-w-[520px] lg:max-w-[580px]">
            <MainHeadign :text="heading" />
            <p class="mt-[15px] text-lg ">
                {{ copy }}
            </p>
        </div>
    </div>
</template>
