export function useContentData() {
    return {
        content_meta_data: {
            // base
            title: '',
            description: '',

            // og
            og_title: '',
            og_description: '',
            og_image: '',
            og_site_name: '',
            og_url: '',

            // twitter
            twitter_card: 'summary_large_image',
            twitter_title: '',
            twitter_image: '',
            twitter_site: '@RailabMac',
        },
        navigation_data: {}
    }
}