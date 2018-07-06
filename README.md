# siteleaf-bootstrap

A starter pack for SiteLeaf (or Contentful).

## About siteleaf-bootstrap

siteleaf-bootstrap is a package to help you get started quickly on SiteLeaf (or Contentful) projects.

## Requirements

These items must be installed on your computer:

*   [Node.js](http://nodejs.org) - 7.6 or above
*   [Yarn](https://yarnpkg.com/en/docs/install)
*   [Ruby](https://www.ruby-lang.org/en/downloads/) - 2.3.5 (we suggest using rbenv to provide the specific version)
*   [RubyGems](https://rubygems.org/pages/download)

## Getting Started

When you first download the repo, you'll want to get your base site settings entered before doing anything else. For SiteLeaf sites, that typically means editing the `title`, `url`, and `cloudinary_cloud_name` (if using cloudinary) fields of your `_config.yml` file. For Cloudinary sites, in addition to those settings, you'll want to enter your Contentful credentials into the `_config.yml` file (then see the "Contentful vs. SiteLeaf" section of this guide for complete setup instructions).

Next, you will want to open the project directory in terminal and run `yarn setup`. This will download all the packages and gems you need to compile assets on this project.

Running `yarn start` will start the jekyll server and the task that watches for changes to your files.

After initial setup, if changes are made to the packages needed for the project, run `yarn` to get the latest.

## Setting up other projects.

As this is a starter pack, you'll want to use these files in a new repo.

First create the new repo, and clone it to your local machine.

Second, connect SiteLeaf to sync with the repo (skip this step if you are using Contentful).

Next, go to the repo's directory in terminal. Then run:

`svn export https://github.com/fictivekin/siteleaf-bootstrap/trunk . --force`

to populate the repo with the bootstrap files. Commit the files to your repo.

Then, go through the "Getting Started" steps of this guide for your new repo.

Finally, commit the new files to the repo.

## Setting up Sass

To use [Sasspool](https://github.com/guerillalabs/Sasspool) within this project, go to the repo's directory in terminal, then run:

`svn export https://github.com/guerillalabs/Sasspool/trunk/sass source/scss --force`

## Contenful vs. SiteLeaf

If you're using Contentful as a data source instead of SiteLeaf, follow these steps to configure for site:

*   open your `Gemfile` and uncomment the line for `gem 'jekyll-contentful-data-import'`
*   add a sync script to package.json - `"sync": "bundle exec jekyll contentful"`
*   add a deploy script to package.json - `"deploy": "yarn sync && yarn build"`
*   in `_config.yml` uncomment the 'contentful' and 'page_gen' sections. Add the appropriate values and credentials for your site

If you're using SiteLeaf, there are a couple of optional steps you may want to take to clean things up.

*   delete the `_plugins` directory
*   delete the commented reference to the `jekyll-contentful-data-import` gem in your `Gemfile`
*   delete the commented lines out of `_config.yml`

## Testing

### Accessibility Tests

**Note:** Chrome must be installed to run these tests.

With the Jekyll server running, run `npm_config_url=http://localhost:4000/ yarn test:accessibility` to test a page on your site. Change the url to the specific page you want to test.

Test results appear are saved to the `/results/` directory.

### UI Regression Tests

Using screenshots and Puppeteer, we can test "approved" UI components to make sure they weren't altered with more recent changes. [Read more about this approach.](https://meowni.ca/posts/2017-puppeteer-tests/)

First, create a "test" by generating a golden screenshot of an approved compoenent. It works very well to target generated styleguide pages for this. Run the following command from terminal:

```
node ./test/screenshots-golden/grab.js button http://localhost:4000/styleguide/section-components.html#kss-fullscreen-kssref-components-button
```

Change `button` to be the name of your component and the url to the real url where your component is visible.

After some tests are created, all tests can be run with `yarn test:ui`. The output will tell you which tests pass or fail.

Settings for the tests - screen sizes in particular - can be changed in `test/settings/settings.js`

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

### Site Settings

These values set in `_config.yml` are used to personalize your new site. If you look in the HTML files, you will see them accessed via {{ site.title }}, {{ site.email }}, and so on. You can create any custom variable you would like, and they will be accessible in the templates via {{ site.myvariable }}.

### Pagination

To enable pagination, add:

```
paginate: 10
paginate_path: "/posts/page:num/"
plugins:
  - jekyll-paginate
```

to the config file.

## Image Processing

For information on processing images with Cloudinary, see the [Jekyll::CloudinaryFetcher documentation](https://github.com/fictivekin/jekyll-cloudinaryfetcher).

## SEO

The base Jekyll templates have hooks to several fields that will help with SEO and social metadata:

*   `site.description` - controls meta description. Changed from site settings.
*   `site.keywords` - controls meta keywords. Changed from site settings.
*   `page.title` - controls `<title>` and the open graph title tag (also used by Twitter). You get this field by default in Jekyll, so name your page/content something appropriate.
*   `page.description` - overrides meta description on a page-by-page basis. This can either be added to the metadata scope for pages or collections or can be added manually as needed.
*   `page.keywords` - overrides meta keywords on a page-by-page basis. This can either be added to the metadata scope for pages or collections or can be added manually as needed.
*   `page.canonical` - by default, a canonical link tag is created pointing to the current url. This field can override that and can either be a local path (eg. `/stories/eric`) or can be a fully resolved url to a separate domain. For local urls, it is recommended to just use the path fragment as the rest of the url is filled in automatically. This field can either be added to the metadata scope for pages or collections or can be added manually as needed.
*   `page.image` - if an `image` field exists for a page, it is used for the open graph image tag (also used by Twitter). It is recommended to add this to the metadata scope for pages or collections as the default image field so it is most likely to be populated.
