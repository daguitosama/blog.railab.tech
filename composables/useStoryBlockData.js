const page_meta_data = reactive({
    title: '$title',
    description: '$description',
    image: '$image',
})


export function useStoryBlockData() {
    return {
        // page_meta_data: {
        //     // base
        //     title: '$title',
        //     description: '$description',
        //     image: '$image',
        // },
        page_meta_data,
        navigation_data: {}
    }
}