<script setup>
definePageMeta({
    layout: 'blog',
});

const content = useContent();
const home = computed(() => content.value.home);
const { fetchContent } = useFetchContent('home');
const { version } = useContentVersion();

await useAsyncData('home-content', async () => {
    try {
        await fetchContent();
    } catch (error) {
        // ups some error happen, one of the following:
        // net error
        // http error
        // graphql error
        // think what other my happen
        console.log(error);
    }
});
</script>

<template>
    <div class="bg-white w-full min-h-screen"></div>
</template>
