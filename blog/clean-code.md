---
title: The importance of clean code
date: 2020-12-26
tags:   clean code
---

At the very beginning of my developer career, I had a conversation with a good friend and mentor, who (somewhat indirectly) recommended for me to read [Clean Code](https://www.goodreads.com/book/show/3735293-clean-code). He told me about how, as a junior developer at a prominent startup[^1], he was given the book, and was told to read it (before writing any code, if my memory is not mistaken).

I thought, all right, it must be important then!

## A good start

Said startup was a really lucky pick for me too, for two reasons[^2]:
1. they hired me, and
2. they had an excellent library, which, of course, featured *Clean Code*.

I got right to it.

How slow I was progressing! I barely even understood JavaScript and Python, so the Java code samples in  *Clean Code* seemed [Alienese](https://futurama.fandom.com/wiki/Alienese) to me. It must have taken me more than a year to finish, but I felt that it had a huge positive effect on my code.

So did working with senior colleagues who believed in, and enforced, similar principles in the form of pair programming and code reviews.

## What’s *clean code*?

To me, clean code is **easy to read, navigate, and extend**. I don’t only understand it when I write it, but [naming](/naming-things/) is clear enough for anyone in the future to know what a function does (or what a variable represents), without having to dig up the function body (or variable assignment). It is also well-organised, and doesn’t have surprising side effects.

The book touches on naming, writing functions that do one thing, organising code, using (and not over-using) comments, unit testing, error handling etc.

Writing clean code takes more time than *just working* code, but working with clean code is significantly easier. Given how many times one iterates over the typical application these days, the benefits outweigh the cost by a large margin.

## A message from the future

Some weeks ago, I got an email from a former colleague. He inherited a code base in large part written by myself[^3]. In relation to that project, he shared this quote with me:

> “I could list all of the qualities that I notice in clean code, but there is one overarching quality that leads to all of them. **Clean code always looks like it was written by someone who cares.** There is nothing obvious that you can do to make it better. All of those things were thought about by the code’s author, and if you try to imagine improvements, you’re led back to where you are, sitting in appreciation of the code someone left for you—**code left by someone who cares deeply about the craft.**” <cite>— Michael Feathers</cite>

Now, to be clear, I do *not* think that my code is amazing — if anything, I know of that particular project that it was in constant need of cleaning up and improving. But, I *did* care, and tried my best to keep it readable.

Applying clean code principles won’t make your code perfect, and it won’t save you from bugs or refactoring. But it *will* make someone’s life easier. And that’s worth all the effort.

[^1]: Not incidentally, the same where I was applying for a position :)
[^2]: Two is an underestimate. I also had extremely helpful and knowledgeable colleagues, an inclusive culture open to juniors, a general ‘no stupid questions’ attitude etc… but these are less relevant for the purposes of this writing.
[^3]: Not a huge feat when you work some years in a team of just a handful of developers.
