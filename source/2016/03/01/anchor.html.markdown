---
title: Where's the Class Go?
date: 2016-03-01 16:21 UTC
tags:
---
There was a debate at work the other day concerning where to place a class on a given snippet of HTML. The HTML was used to markup a linked profile photo and the disagreement was whether or not to place the class on the anchor or the image tag. The markup is:

<pre class="prettyprint lang-html">
div class="nr-comment-reply"
  a href="#"
    img src="http://placehold.it/100/100"
  /a
/div
</pre>


The CSS is:

<pre class="prettyprint lang-css">
.c-avatar {
  display: block;
  float: left;
  border-radius: 19px;
  width: 38px;
  height: 38px;
}
</pre>

Since the avatar link and image combo is floated to the left, placing the class on the image removes the anchor element from the DOM. This wouldn’t appear to be a problem if you were fine removing focus on the entire element when tabbing through the page. For example: [http://cl.ly/fFwI](http://cl.ly/fFwI)

The benefit of placing the CSS class on the anchor element is it keeps tab focus on the entire element as seen here: [http://cl.ly/fFxh](http://cl.ly/fFxh)

Long story short: Put the class on the anchor tag if you care about tab focus.
