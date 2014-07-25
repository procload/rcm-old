---
title: Custom collections with Middleman
date: 2014-07-25 21:10 UTC
tags: middleman, work, food52, ruby
---

This site is based on the static-site generator Middleman, which has served
me well over the years.

I had the opportunity to work on creating a blog that needed navigation to be built
using dynamic category names defined by an author when creating a new post. The category name
is stored in the article's front matter like so:

<pre class="prettyprint ruby">
---
title: My Second Test
date: 2014-07-25 20:16 UTC
category: design
author: Ryan Merrill
tags: development, programming, swift
summary: This is the summary
---
</pre>

Middleman's blog extension comes built with tagging ability, but didn't offer support for categories.
Fortunately you can create custom collections easily:

<pre class="prettyprint ruby">
activate :blog do |blog|
  blog.custom_collections = {
    category: {
      link: '/categories/{category}.html',
      template: '/category.html'
    }
  }
end
</pre>

After that, I needed to find all of the categories defined by the author to build the navigation. A handy
helper method fixed that:

<pre class="prettyprint ruby">
  def build_categories(articles)
    categories = []
    articles.each do |article|
      category = article.metadata[:page]['category']
      categories.push(category) unless categories.include? category
    end
    return categories
  end
</pre>

It was just a matter of passing the blog's articles to the helper to finish building the site's navigation.
