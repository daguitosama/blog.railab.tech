<script setup>
const { content } = useComContent()

onMounted(() => {
    console.log('(comp-3) mounted')
})

</script>

<template>
    <div>
        <p>{{ content.comp3.name }}</p>
        <slot />
    </div>
</template>