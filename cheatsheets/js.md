---
title: JavaScript
---

## Objects

Renaming a const while destructuring
```js
const officeDog = { name: 'Lola', age: 10, type: 'labradoodle' };
const { name, age, type: breed } = officeDog;

console.log(breed); // 'labradoodle'
```
