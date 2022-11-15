import { reactive } from 'vue';

export function useContent() {
    const contentSchema = reactive({
        // top level oulet to use
        // actual value come inside the respective page
        page_meta_data: {
            title: '$title',
            description: '$description',
            image: '$image',
        },
        // global navigation
        navigation: {
            uuid: null,
        },

        home: {
            page_meta_data: {
                title: '$title',
                description: '$description',
                image: '$image',
            },
            intro: {
                headign: 'Main Headign',
                description: 'Home page description',
            },
        },

        authors: {
            page_meta_data: {
                title: '$title',
                description: '$description',
                image: '$image',
            },
            intro: {
                headign: 'Main Headign',
                description: 'Home page description',
            },
        },
    });
    return useState('content', () => contentSchema);
}
