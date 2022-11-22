<script setup>
import MainHeadign from './MainHeadign.vue';
const state = reactive({
    text: 'The Railab Blog',
});

function initState() {
    return {
        text: 'The Railab Blog',
    };
}
</script>

<template>
    <Story title="Main Headign" icon="lucide:heading-1">
        <MainHeadign :text="state.text" />
    </Story>
</template>
<docs lang="md">
# Main Headign

This component it intended for the foremost prominent headign on the site.

---

## Props:

| Name     | Required | Description      |
| -------- | -------- | ---------------- |
| **text** | `true`   | The text content |

---
</docs>
