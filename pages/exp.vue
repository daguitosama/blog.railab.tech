<script setup>
const { loadContent, content } = useComContent()

useAsyncData('com-content', async (nApp) => {
    console.log('(exp-page) loading content')
    await loadContent()
    console.log()
})
</script>

<template>
    <div class="w-full min-h-screen">
        <Comp1>
            <Comp2>
                <Comp3 />
            </Comp2>
        </Comp1>

        <div class="bg-slate-100 mt-10">
            <pre><code>{{ content }}</code></pre>
        </div>
    </div>
</template>
