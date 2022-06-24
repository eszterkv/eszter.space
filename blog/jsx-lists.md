---
title: "React basics: rendering a list of JSX elements"
date: 2022-06-12
---

Recently, I’ve started mentoring a junior developer. Mentoring is a good way to stay sharp on the basics, and to remind one about the confusing parts of React.

Rendering a list of repeating JSX elements is one of these confusing parts for beginners. So let’s get from a naive approach to a more React-like solution.

## The naive approach

Consider a simple component which renders a list of products for a web shop:

```jsx
const ProductList = () => {
  return (
    <ul>
      <li>Clicky keyboard</li>
      <li>Comfy trackball</li>
      <li>Cushy chair</li>
    </ul>
  )
}
```

Now, a web shop is not really useful unless you can view individual product pages, or product details at least. Let's link to stand-alone product pages this time.

```jsx
const ProductList = () => {
  return (
    <ul>
      <li>
        <a href="/clicky-keyboard">Clicky keyboard</a>
      </li>
      <li>
        <a href="/comfy-trackball">Comfy trackball</a>
      </li>
      <li>
        <a href="/cushy-chair">Cushy chair</a>
      </li>
    </ul>
  )
}
```

As you can see, rendering a list of things can get repetitive very easily. If we keep up this approach, updating our product list will take a lot more time (imagine having thousands of products!), and we _will_ eventually forget to update one of them.

## A better solution

_DRY_ (don’t repeat yourself), if followed, is one of the most impactful coding principles that will make your code look clean and less bug-prone. Let’s try to achieve the same result as before, but without repeating ourselves.

As JSX is a [syntax extension to HTML](https://reactjs.org/docs/introducing-jsx.html), we can write practically any JavaScript code in our JSX components. For this particular problem, we will use `Array.map`.

Let’s put our products in an array first, and then map that array into JSX elements.

The result of this component will be identical to our first list:

```jsx
const ProductList = () => {
  const products = [
    { name: 'Clicky keyboard', link: '/clicky-keyboard' },
    { name: 'Comfy trackball', link: '/comfy-trackball' },
    { name: 'Cushy chair', link: '/cushy-chair' },
  ]

  return (
    <ul>
      {products.map((product) => (
        <li key={product.link}>
          {product.name}
        </li>
      )}
    </ul>
  )
}
```

You’ll see that our `<li>` has a `key` attribute. Simply put, it helps React know which elements have to be re-rendered. You can read more about it [here](https://reactjs.org/docs/lists-and-keys.html).

Now, see how little we have to change to update how a product is rendered.

```diff
const ProductList = () => {
  const products = [
    { name: 'Clicky keyboard', link: '/clicky-keyboard' },
    { name: 'Comfy trackball', link: '/comfy-trackball' },
    { name: 'Cushy chair', link: '/cushy-chair' },
  ]

  return (
    <ul>
      {products.map((product) => (
        <li key={product.link}>
+         <a href={product.link}>
            {product.name}
+         </a>
        </li>
      )}
    </ul>
  )
}
```

### …and another way

In the React docs, you'll see a bit of a different approach, where JSX-rendered lists are first stored in a constant, and then that constant is used later in the return statement. Something like this:

```jsx
const ProductList = () => {
  const products = [/* same as before */]

  const Products = products.map((product) => (
    <li key={product.link}>
      <a href={product.link}>
        {product.name}
      </a>
    </li>
  )
 
  return (
    <ul>
      {Products}
    </ul>
  )
}
```

Both solutions are equally viable, you can choose whichever you prefer. That's it in a nutshell – now you know how to render repeating elements. This is a very common technique that can be used for menu items, all kinds of lists, and any data that can be structured as an array-like.

Thanks for reading, and until next time!
