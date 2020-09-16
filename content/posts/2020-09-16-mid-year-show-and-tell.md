---
title: Mid-year show and tell.
date: 2020-09-16T19:44:22.162Z
subtitle: "Writing is hard. I should write more. "
categories: []
---
Hi! The last half year has been rough not just for me but for everyone. I’ve just had my head down and have been busy building things (both at work and at home). Here are a few things that I’ve built:



## Carousel with a lot of moving parts.

This carousel makes the most out of css-snap to give the swipe that native feel. It came with a lot of headaches, as I had to rebuild it 3 times!



![](/images/uploads/carousel.gif)

The carousel seems very straightforward at first, but there’s actually a lot happening.

* The white card is attached to its row of colored status cards.
* The colored status cards have varying heights, and can be expanded or collapsed at any time our customer so chooses.
* The “non-active” (previous, and next) colored status cards may not have a height exceeding the current status card being displayed.
* Multiple instances of these carousels exist in our overview page (update: we are thankfully moving away from this so there won’t be more than one of these carousels in a page!)

CSS transitions are expensive if you’re not careful. They get expensive fast. Building this carousel that contains a lot of moving parts while minimizing expensive computations (ie preventing reflows and relayouts) was a real challenge. I enjoyed it very much!

### **Notable tricks I’ve cooked up:**

* The white contract card is absolutely positioned. It relies on transform: translateY(x) to move up and down at will all while not causing any reflows.
* Instead of adjusting the height of the “non-active” status cards, I am using clip-path. The height css property is very expensive to transition compared to clip-path. This allows me to animate the transition without expensive computations.
* Given that the white contract card is no longer part of the layout. The overall height of the carousel continually needed to be recomputed. While I’ve mentioned that the height css property is expensive to transition, all elements before and after a carousel is out of view of our customers. This allows us to just let the “out of sigh elements” jitter up and down without any smoothness all while not lessening the experience of our customers!