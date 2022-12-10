<script setup>
const tab = ref({
    text: 'Recent',
    route: '/?posts_selection=recent',
});
</script>

<template>
    <div class="w-full min-h-screen flex items-center justify-center">
        <PostFeedSelectorTab :tab="tab" />
    </div>
</template>
