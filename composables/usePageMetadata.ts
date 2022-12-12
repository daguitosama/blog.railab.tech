export function usePageMetadata(
    /**
     * The Page title
     */
    title: string,
    /**
     * The Page description
     */
    description: string,
    /**
     * The image url to use in OG and friends
     */
    image_url: string,
    /**
     * The page's canonical url
     */
    canonical_url: string
) {
    const {
        public: { siteName, twitterSite },
    } = useRuntimeConfig();

    /**
     *  
            <!-- Twitter -->
            <Meta property="twitter:site" :content="twitterSite" />

     */
    const meta_description = {
        name: 'description',
        content: description,
    };
    // og
    const og_title = {
        property: 'og:title',
        content: title,
    };
    const og_description = {
        name: 'og:description',
        content: description,
    };
    const og_image = {
        name: 'og:image',
        content: image_url,
    };

    const og_site_name = {
        name: 'site_name',
        content: siteName,
    };

    const og_url = {
        name: 'og:url',
        content: canonical_url,
    };

    // tw
    const twitter_card = {
        name: 'twitter:card',
        content: 'summary_large_image',
    };

    const twitter_title = {
        name: 'twitter:title',
        content: title,
    };

    const twitter_image = {
        name: 'twitter:image',
        content: image_url,
    };
    const twitter_site = {
        name: 'twitter:site',
        content: twitterSite,
    };

    const metatags = [
        meta_description,
        og_title,
        og_description,
        og_image,
        og_site_name,
        og_url,
        twitter_card,
        twitter_title,
        twitter_image,
        twitter_site,
    ];

    useHead({
        title,
        meta: metatags,
    });
}
