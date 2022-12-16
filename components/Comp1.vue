<script setup>
const { content } = useComContent()

onMounted(() => {
    console.log('(comp-1) mounted')
})


</script>

<template>
    <div>
        <p>{{ content.comp1.name }}</p>
        <slot />
    </div>
</template>