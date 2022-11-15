<script setup>

const content = useContent();
const home = computed(() => content.value.home)
const { fetchContent } = useFetchContent('home')
const { version } = useContentVersion();

await useAsyncData('home-content', async () => {
    try {
        await fetchContent()
    } catch (error) {
        // ups some error happen, one of the following:
        // net error
        // http error
        // graphql error
        // think what other my happen
        console.log(error)
    }
})
</script>

<template>



    <div class="bg-white  w-full min-h-screen p-10">
        <!-- <h1 class="text-4xl ">
            <span> {{ home.intro.title }} </span>
        </h1>
        <p> {{ home.intro.description }} </p> -->

        <p>bar</p>
    </div>
</template>
