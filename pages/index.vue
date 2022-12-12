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
        // await fetchContent();
    } catch (error) {
        // ups some error happen, one of the following:
        // net error
        // http error
        // graphql error
        // think what other my happen
        console.log(error);
    }
});

// temp state for component crafting
const state = reactive({
    intro: {
        heading: 'The Railab Blog',
        copy: 'Mac care and mantainance tutorials. Buying guides, news, tricks and much more.',
    },
});
</script>

<template>
    <div class="w-full min-h-screen text-type-on-light-base dark:text-[#E3E8EF]">
        <main>
            <HomeIntro :heading="state.intro.heading" :copy="state.intro.copy" />
        </main>
    </div>
</template>
