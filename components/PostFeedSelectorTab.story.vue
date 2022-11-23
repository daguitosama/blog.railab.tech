<script setup>
import PostFeedSelectorTab from './PostFeedSelectorTab.vue';

const state = reactive({
    isActive: false,
    tab: {
        text: 'Foo',
        route: '/bar',
    },
});
// function initState() {
//     return {
//         tab: {
//             text: 'Foo',
//             route: '/bar',
//         },
//         isActive: false,
//     };
// }
</script>

<template>
    <Story title="Post Feed Selector Tab">
        <PostFeedSelectorTab :tab="state.tab" :isActive="state.isActive" />
    </Story>
</template>
