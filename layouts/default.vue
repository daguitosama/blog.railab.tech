<script setup>

/**
 * I18n Meta Data
 */
// https://v8.i18n.nuxtjs.org/guide/seo/
const head = useLocaleHead({
    addDirAttribute: true,
    identifierAttribute: 'id',
    addSeoAttributes: true,
});
// learn more
// console.log({ head: head.value })

/** Content Metadata 
 * 
 * 
 * // base
 * title: '',
 * description: '',
 * 
 * // og
 * og_title: '',
 * og_description: '',
 * og_image: '',
 * og_site_name: '',
 * og_url: '',
 * 
 * // twitter
 * twitter_card: 'summary_large_image',
 * twitter_title: '',
 * twitter_image: '',
 * twitter_site: '@RailabMac',
 * 
*/
const {
    page_meta_data,
    navigation_data,
    // post_content_data, 
} = useContentData();

const { public: { siteName } } = useRuntimeConfig();



</script>
<template>
    <div>
        <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">

        <Head>
            <!-- i18n metadata -->
            <template v-for="link in head.link" :key="link.id">
                <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
            </template>
            <template v-for="meta in head.meta" :key="meta.id">
                <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
            </template>

            <!-- content metadata -->
            <!-- base -->
            <Title> {{ page_meta_data.title }} </Title>
            <Meta name="description" :content="page_meta_data.description" />
            <!-- OG -->
            <Meta property="og:title" :content="page_meta_data.og_title" />
            <Meta property="og:description" :content="page_meta_data.og_description" />
            <Meta property="og:image" :content="page_meta_data.og_image" />
            <Meta property="og:site_name" :content="siteName" />
            <!-- clone canonical -->
            <Meta property="og:url" :content="page_meta_data.og_url" />
            <!-- Twitter -->
            <Meta property="twitter:card" :content="page_meta_data.twitter_card" />
            <Meta property="twitter:title" :content="page_meta_data.twitter_title" />
            <Meta property="twitter:image" :content="page_meta_data.twitter_image" />
            <Meta property="twitter:site" :content="page_meta_data.twitter_site" />



        </Head>

        <Body>
            <!-- navigation :navigation_data="navigation_data" -->
            <slot />
        </Body>

        </Html>
    </div>
</template>
