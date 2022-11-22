<script setup>
const state = reactive({
    heading: 'The Railab Blog',
    copy: 'Mac care and mantainance tutorials. Buying guides, news, tricks and much more.',
});
function initState() {
    return {
        heading: 'The Railab Blog',
        copy: 'Mac care and mantainance tutorials. Buying guides, news, tricks and much more.',
    };
}
</script>

<template>
    <Story title="HomeIntro">
        <HomeIntro :heading="state.heading" :copy="state.copy" />
    </Story>
</template>

<docs lang="md">
# Home Intro

This component is the intro on the Home Page to tell new landers what it's the site about in a simple look.

---

## Props:

| Name        | Required | Description                    |
| ----------- | -------- | ------------------------------ |
| **headign** | `true`   | The main headign               |
| **copy**    | `true`   | The copy under the main heding |

---
</docs>
