<script setup>
const { content, loadContent } = useComContent()
onMounted(async () => {
    console.log('(comp-2) mounted')
})


</script>

<template>
    <div>
        <p>{{ content.comp2.name }}</p>
        <slot />
    </div>
</template>