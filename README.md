# Railab Blog

## Content Types

```graphql

Author {
    name     String
    bio      RichText
    avatar   URL
    slug     URL
    posts    [Post]!
}

Post {
    title         String
    post_picture  PostPicture
    authors       [Author]!
    content       RichText
    published_at  String
    updated_at    String
}

PostPicture {
    alt     String
    url     URL
}

Page {

    slug             String

    title            String
    description      String

    og-title         String
    og-description   String
    og-image         URL
    og-site_name     String
    og-url           URL

    twitter-image    URL
    twitter-card     "summary_large_image"
    twitter-site     @RailabMac
    twitter-title    String
}

```

## Component Architecure

### Page_Metadata

```js
    title: '',
    description: ''
    image: ''
```

## Content fetching & hydration plan

aproach-1
Keep a structure of the relation of content-section: {value, query}

```js
const content_query_map = {
    home: {
        value: {},
        query: '',
    },
    navigation: {
        value: {},
        query: '',
    },
};
```

When attempt to load from a page craft the global query by:
- injecting in it all non initialized content sections (the ones with value == nul)
- injecting fresh required content-keys (page_meta_data)

aproach-2
define several (page based) functions for fetch data, for instance: 

```js 
// /home
fetchContent('/home');

// author
fetchContent('/authors')

```