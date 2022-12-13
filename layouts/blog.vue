<script setup>
/**
 * I18n Meta Data
 */

// i18n metadata
// https://v8.i18n.nuxtjs.org/guide/seo/
const head = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true,
});

// canonical
const canonical = computed(
    () => head.value?.link.filter((link) => link.rel == 'canonical')[0].href
);



// TODO hidrate page metadata with real content from ST api
//  make the content gets a `meta_data` component as ST respective blok
// use that `meta_data` story to create the page metadata
const content = useContent();


// Page Metadata
// TEST page metadata harcoded success
usePageMetadata({
    title: 'awesome title',
    description: 'awesome description',
    image_url: 'awesome image url',
    canonical_url: canonical,
});

//


function onError(error) {
    console.error(error);
}
</script>
<template>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
    <NuxtErrorBoundary @error="onError">

        <Head>
            <!-- i18n metadata -->
            <template v-for="link in head.link" :key="link.id">
                <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
            </template>
            <template v-for="meta in head.meta" :key="meta.id">
                <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
            </template>
        </Head>

        <Body class="
             antialiased bg-surface-light-base dark:bg-surface-dark-base text-type-on-light-base 
             dark:text-type-on-dark-base transition-all duration-300
            ">
            <TheNavigationProvider />

            <slot />
        </Body>
    </NuxtErrorBoundary>

    </Html>
</template>
