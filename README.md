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

## Content Architecture

blog
    Pages
        home
        posts
        topics
        authors
    Posts
    Authors
    Topics
