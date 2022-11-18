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

### Stroyblock components content structure (contentSchema)

### Navigation
```js
const navitation = {
    links : [
        {
            text: 'Home',,
            route: '/'
        },
        {
            text: 'Posts',
            route: '/posts'
        }
        {
            text: 'Topics',
            route: '/topics'
        },
        {
            text: 'Authors',
            route: '/authors'
        }
    ],
    externalLink : {
        text: 'Go to Railab',
        url: 'https://railab.tech'
    }
}
```

#### Page_Metadata

```js
    title: '',
    description: ''
    image: ''
```


## Hot Zone

- [x] Make a composable for the content version (published or draft) to dynamically change in the fetchStoryblok hook

- [x] Make a global middleware to set the version based on a `content-version` cookie
- [x] Make a simple mechanism to toogle the content versions (privacy in mind)
  - Version selector route with a password query to match and them allow to select the content version
    - make a cookie for enable content version selection & another cookie for the content version