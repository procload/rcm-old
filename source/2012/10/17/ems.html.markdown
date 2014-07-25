--- 
title: Sizing Text in Pixels, Ems or Rems &mdash; What's Correct?
date: 2012/10/17 09:00
tags: Design, Typography, Front-end, CSS, SCSS
nav: blog
---

There's been a number of discussions at [Ample](http://helloample.com) lately about whether or not using ems for text sizing is worth the headache. As the one who maintains Ample's baseline getting-started repo, I figured it's up to me to figure out what's what.

A routine argument against ems is that they over complicate something so basic such as setting the size of type. So why do we even need ems? Why can't we just size everything in pixels?

One case for using ems was given 6 years ago by Richard Rutter in [this article for A List Apart](http://www.alistapart.com/articles/howtosizetextincss):
> Sizing text and line-height in ems, with a percentage specified on the body, was shown to provide accurate, resizable text across all browsers in common use today. 

But his tests were based on many browsers that have since become obsolete, save for IE7 which currently has a piddly 1.3% user base. His main argument for using ems was to allow users to "resize text without being forced to use the zoom control." But if 1.3% of the public has to rely on the zoom control, that's cool, right?

### The pixels have it? ###
So we can forget the em, right? Well, not exactly. From what I can gather, the advantage of using ems over pixels for text sizing is to accommodate users who specifically set their browser's text size to larger than the default. And while I'm no expert on the matter, I assume users with a vision impairment go this route as opposed to using the browser's zoom functionality. Setting the text size in a browser's settings panel is a one-time thing, while a user needs to zoom on each individual site or page in order to increase the size.

Another advantage of increasing text size instead of page zooming is the other non-text elements, such as a site's logo, maintain their original size. Page zooming also increases the likelihood of a horizontal scrollbar, which reduces the ability to scan a page.

I couldn't find any hard facts as to which route low vision users typically take, but I'd love to hear from someone on this.

### So let's use ems ###
Because ems are relative, we always need to be aware of how deep in the HTML and CSS we're descending so the browser renders our desired results. Published 8 years ago, Richard Rutter wrote a [great overview on how to calculate your desired text size in ems](http://clagnut.com/blog/348/):
> When sizing text in ems there’s really one rule to remember: size text relative to its parent and use this simple calculation to do so: child pixels / parent pixels = child ems

This was wildly confusing the first time I used it. It was another thing to remember and, honestly, wasn't there enough to remember already?

At Ample we use a simple SCSS mixin to reduce the confusion and to calculate the em value for us:

<pre class="prettyprint css">
@function calc-em($target-px, $context) {
  @return ($target-px / $context) * 1em;
}
</pre>


The [above code is taken from The SASS Way](http://thesassway.com/intermediate/responsive-web-design-part-1) and allows us to think in pixels rather than ems. Of course you still need to be aware of your context and the text size of an element's parent.

### The Ems Have it! Or do they? ###
So what we're left with is using ems is the responsible way to set type on the web. But with the advent of CSS3 and the rem unit, it looks like we're going to soon get the best of both worlds.

The rem does away with having to set type size relative to its parent element by adjusting the text size relative to the root element of the page, often the HTML tag. [Jonathan Snook does a good job explaining this](http://snook.ca/archives/html_and_css/font-size-with-rem):
> The rem unit is relative to the root—or the html—element. That means that we can define a single font size on the html element and define all rem units to be a percentage of that.

Unfortunately we're stuck with lack of support for IE7 and IE8, both of which we begrudgingly support. An option Snook proposes is to create two sets of type sizes, one in rems and the other in pixels to support older browsers. This of course doesn't solve the problem of page zooming vs. text resizing, but we have to draw the line somewhere don't we? 

Well, maybe. 

The guys at Sparkbox [wrote about a SCSS mixin](http://seesparkbox.com/foundry/scss_rem_mixin_now_with_a_better_fallback) they are using to use rems and to provide an accessible fallback for older browsers.

<pre class="prettyprint css">
// Mixin
@mixin font-size( $decimal-size, $keyword: null ) {
	@if $keyword{ font-size: $keyword; }
	@else { font-size: $decimal-size * $base-font-multiplier * 16px;}
	font-size: $decimal-size * 1rem;
}

// Example use case
html {
	@include font-size(1, large);
}
</pre> 

You can read the whole article for their thinking behind the mixin, but in short it uses font-size keywords to provide support for browsers that cannot support the rem.

So what are we going to do? We're going to stick with the em as a unit for resizing type until the share of browsers not supporting the rem is small enough declare obsolete. I'm not fond of the lack of granular control for older browsers that Sparkbox's mixin provides. Plus I'm not sure how they account for margin, padding and line-height.

I think the accessibility benefits of using ems for type size outweigh any headaches associated with them.
