export function useStoryblokApi() {
    const {
        public: { storyblockAccessToken, storyblokApiUrl },
    } = useRuntimeConfig();
    return {
        async fetchStoryblokContent(
            query: string,
            variables: object = { version: 'draft' || 'published' }
        ) {
            // console.log({ query });

            const { data, errors } = await (
                await fetch(storyblokApiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Token: storyblockAccessToken,
                    },
                    body: JSON.stringify({
                        query,
                        variables,
                    }),
                })
            ).json();

            /**
             *  In case we need to look up
             *  the actual api response
             */
            // const res = await fetch(storyblokApiUrl, {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //         Token: storyblockAccessToken,
            //     },
            //     body: JSON.stringify({
            //         query,
            //         variables,
            //     }),
            // });
            // const json = await res.json();
            // const { data, errors } = json;
            // console.log({ res, resHeaders: res.headers, data, errors });
            //

            // handle only errors comming back from graphql
            // leave operationals & other errors to handle by
            // the final fetchStoryblokContent consumer
            if (errors) {
                console.error(errors);
                throw new Error('Storyblok Api Response Graphql Error');
            }
            return { data };
        },
    };
}
