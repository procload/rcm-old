--- 
title: One-direction Margins	
date: 2012/06/21
tags: CSS, Front-end
nav: blog
---

[An interesting take](http://csswizardry.com/2012/06/single-direction-margin-declarations/) on something I've never really considered before: limiting your CSS margin declarations to one horizontal and one vertical direction, like so:

<pre class="prettyprint html">
 div {
   margin-left: 1.5em;
   margin-top: 1.5em;
 }
</pre>

Which is opposed to how I normally write my margins with values on all four sides. The benefits of writing margins this way allow for greater control of vertical rhythm and also remove the worry of collapsible margins, which means one less thing to worry about. Nice trick.
