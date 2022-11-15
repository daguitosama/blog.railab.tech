<script setup lang="ts">
const { version, AVAILABLE_VERSIONS, cookieKey } = useContentVersion();
const route = useRoute();
const allow_content_version_selection = ref(false);
const selected_content_version = ref(AVAILABLE_VERSIONS[0]);

// cookies
const content_version_selection_enabled = useCookie(
    'content_version_selection_enabled'
);
const content_version = useCookie('content_version');
//

// password
const {
    query: { password },
} = route;
const { contentVersionSelectorPassword } = useRuntimeConfig();

// case comming fresh,
// no content version selection cookie
// pass required
if (
    contentVersionSelectorPassword &&
    contentVersionSelectorPassword == password
) {
    content_version_selection_enabled.value = 'true';
}

// case comming with a content version selection enabled cookie
// or a password validated avobe that enabled the cookie
if (String(content_version_selection_enabled.value) == 'true') {
    allow_content_version_selection.value = true;
}

// content-version cookie has (implement next) be sync
// at global content-version middleware handler

function setContentVersion() {
    const content_version = useCookie(cookieKey);
    content_version.value = selected_content_version.value;
    version.value = selected_content_version.value;
}
</script>

<template>
    <div class="p-16 max-w-xl mx-auto">
        <div v-if="allow_content_version_selection">
            <h1 class="text-4xl font-semibold">Content version selector</h1>
            <p class="mt-4">
                <span>Currently using version: </span>
                <span>
                    <em>
                        <code>{{ version }}</code>
                    </em>
                </span>
            </p>
            <form
                @submit.prevent="setContentVersion"
                class="mt-20 border rounded-xl p-8"
            >
                <label
                    for="content-version-selector"
                    class="block w-full text-2xl font-semibold"
                    >Select a content version</label
                >
                <select
                    name="content-version"
                    id="content-version-selector"
                    v-model="selected_content_version"
                    class="block w-full mt-8 text-xl border p-2 rounded-lg"
                >
                    <template
                        v-for="version in AVAILABLE_VERSIONS"
                        :key="version"
                    >
                        <option :value="version">{{ version }}</option>
                    </template>
                </select>
                <div class="mt-8">
                    <button
                        class="bg-primary-on-light-base text-white px-4 py-2 rounded-2xl"
                        type="submit"
                    >
                        Use version
                    </button>
                </div>
            </form>
        </div>
        <div v-else>
            <h1 class="font-extrabold text-3xl">This is a private area</h1>
        </div>
    </div>
</template>
