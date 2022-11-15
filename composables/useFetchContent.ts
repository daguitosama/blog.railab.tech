/** Querys */
import { countReset } from 'console';
import {
    query as homeQuery,
    queryName as homeQueryName,
} from '../graphql_queries/home';

// naviation
// import {navigationQuery} from graphqlQuerys;

/** A Composable to encapsulate all content querys and data hydration from storyblok api */
export function useFetchContent(contentSec: string, options: {}) {
    // console.log({ contentSec });

    const content = useContent();
    const { fetchStoryblokContent } = useStoryblokApi();

    /** the map of query result processor
     * fn that have access to the query response data object
     */
    var result_processors = {
        navigation: (data) =>
            (content.value.navigation =
                data[/* query return data key*/ 'navigation']),
        home: (data) => {
            content.value.home = data[homeQueryName];
            const homeContent = data[homeQueryName];
            // flat the home story in contnet home object
            for (const [key, value] of Object.entries(homeContent)) {
                // console.log(`${key}: ${value}`);
                content.value.home[key] = value;
            }

            // console.log('home-proccessor', { data, content: content.value });
        },
    };
    // Planning Queues
    var querys_to_use: string[] = [];
    var processors_to_use: Function[] = [];

    const contentFetchPlan = {
        home: {
            setup: () => {
                // 1 check if global sections are hydratated

                // navigation
                // if (content.value.navigation?.uuid) {
                //     // navigation content has ben pulated
                //     // do no schedule it's fetch
                //     return;
                // }
                // // navigation section is empty
                // // schedule it's fetch
                // else {
                //     // ignore for now (todo define later)
                //     // add navigation to query
                //     // querys_to_use.push(navigationQuery);
                //     // specify how to handle the navigation data
                //     // processors_to_use.push(result_processors.navigation);
                // }

                // others globals here

                // handle specific section content fetch
                // home

                // console.log({ homeQuery });
                querys_to_use.push(homeQuery);
                processors_to_use.push(result_processors.home);
            },
        },
    };

    /**
     * Once properly configured the query plan (by`countSec` & `options` parent params)
     * this fn will fetch the specified content data
     * and will progatate the result to respective content
     * stores.
     */
    async function fetchContent() {
        //
        //  execute the query plan
        contentFetchPlan[contentSec]?.setup();
        //
        //  craft the query
        const query = mergeQuerys(querys_to_use);

        // console.log(contentFetchPlan[contentSec]);
        // console.log({
        //     querys_to_use,
        //     processors_to_use,
        // });

        // the error if any should be handle at page
        // level, the place where load is actually trigger
        // but we need to make sure that the fetching plan queues
        // allways gets clean no mather what
        try {
            const { data } = await fetchStoryblokContent(query, {
                version: 'published', // todo make this a user option
            });
            // on query success handle data hydratations
            processors_to_use.forEach((p) => p(data));
        } catch (error) {
            // clean the queues
            querys_to_use = [];
            processors_to_use = [];
            // now propagate the error
            throw error;
        }
    }
    // trigger the fetch secuence
    return { fetchContent };
}

function mergeQuerys(querys_array: string[]): string {
    // console.log({ querys_array });
    return `
        query content {
            ${querys_array.join('\n\r')}
        }
    `;
}

// [x] create a contentSection constants
// [x] move useStoryBlokApi to it's own file
// [x] create graphqlQuerys
// implement fully graphql useStoryblokApi fetchContent fn
// ignore navigation for now
// complete definition of graphql querys (home )
// finish this wire up
// test againts storyblok real api
