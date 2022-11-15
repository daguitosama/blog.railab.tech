export const queryName = 'PageItem';
// this query is expected to be wrapped by a general content query
// do no wrapp with {}
export const query = `
    PageItem(id: "blog/pages/home") {
        full_slug
        created_at
        first_published_at

        name
        content {
            title
            description
            image
          	stone
            
        }
    }
`;
