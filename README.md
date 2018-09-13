# Looking-glass


## Requirements

These items must be installed on your computer:

*   [Node.js](http://nodejs.org) - 7.6 or above
*   [Yarn](https://yarnpkg.com/en/docs/install)
*   [Ruby](https://www.ruby-lang.org/en/downloads/) - 2.3.5 (we suggest using rbenv to provide the specific version)
*   [RubyGems](https://rubygems.org/pages/download)

## Getting Started

1. Download the repo

Next, you will want to open the project directory in terminal and run `yarn setup`. This will download all the packages and gems you need to compile assets on this project.

Running `yarn start` will start the jekyll server and the task that watches for changes to your files, always have this running in a seperate terminal tab while developing.

After initial setup, if changes are made to the packages needed for the project, run `yarn` to get the latest.


## Using SiteLeaf

SiteLeaf uses Jekyll and the Liquid template engine. Here are some general tips and links to help you get started:

### Documentation

*   [Jekyll](https://jekyllrb.com/docs/home/)
*   [SiteLeaf](https://learn.siteleaf.com/)
*   [Liquid](https://shopify.github.io/liquid/)

### Collections

*   [https://jekyllrb.com/docs/collections/](https://jekyllrb.com/docs/collections/)

### Custom Fields and Defaults

*   [https://learn.siteleaf.com/content/metadata/](https://learn.siteleaf.com/content/metadata/)
*   [https://learn.siteleaf.com/content/defaults/](https://learn.siteleaf.com/content/defaults/)
*   [https://jekyllrb.com/docs/configuration/#front-matter-defaults](https://jekyllrb.com/docs/configuration/#front-matter-defaults)


## SEO

The base Jekyll templates have hooks to several fields that will help with SEO and social metadata:

*   `site.description` - controls meta description. Changed from site settings.
*   `site.keywords` - controls meta keywords. Changed from site settings.
*   `page.title` - controls `<title>` and the open graph title tag (also used by Twitter). You get this field by default in Jekyll, so name your page/content something appropriate.
*   `page.description` - overrides meta description on a page-by-page basis. This can either be added to the metadata scope for pages or collections or can be added manually as needed.
*   `page.keywords` - overrides meta keywords on a page-by-page basis. This can either be added to the metadata scope for pages or collections or can be added manually as needed.
*   `page.canonical` - by default, a canonical link tag is created pointing to the current url. This field can override that and can either be a local path (eg. `/stories/eric`) or can be a fully resolved url to a separate domain. For local urls, it is recommended to just use the path fragment as the rest of the url is filled in automatically. This field can either be added to the metadata scope for pages or collections or can be added manually as needed.
*   `page.image` - if an `image` field exists for a page, it is used for the open graph image tag (also used by Twitter). It is recommended to add this to the metadata scope for pages or collections as the default image field so it is most likely to be populated.
