---
title: Naming things is hard
date: 2020-11-23
---

Or, what the heck does `getDisabledHours` do?

Every now and then, I come across a function call and have no clue what it does. I have to go to the definition and check the function body. One of my biggest fears in programming is writing code that’s difficult to understand — I don’t want my name to be the answer to _“Holy $*?!, who wrote this??”_

I’ve found two opportunities where naming can be improved greatly: pair coding and pull request reviews. Here follows an example, and the logic I’ve used to improve a function name for future programmers.

## How to recognise a bad function name
Usually, if you have to think (or worse, look) what a function does, there’s a better name for it. Take `getDisabledHours` as an example, which is a method I’ve come across in a time picker. I don’t remember the surrounding code, but let’s assume it was something like this:
```jsx
<TimePicker disabledHours={getDisabledHours} />
/* TimePicker will likely expect an onChange handler too,
 * but we’ll ignore that for the sake of simplicity */
```

What’s the problem here?

Ideally, the reader of this piece of code should be able to tell _why_ some hours are disabled, or _which_ hours are disabled, without looking at the function body. `getDisabledHours` gives us no information on that. It only says that the disabled hours will be those that are disabled. That’s not too helpful.

## The road to a better name
Assuming the following function body:
```js
function getDisabledHours() {
  const hours = []
  for (let hour = 0; hour < moment().hour(); i++) {
    hours.push(hour)
  }
  return hours
}
```
The question we need to ask is: **What does this function do?** It creates an empty array of hours that it will disable, then adds all of the hours up to the current point in time — `moment().hour()` — and returns them. In other words, **disabled hours are those that are in the past**. (This could be a likely scenario in an appointment-booking system.)

Turning this into code, `disabledHours` will be the `hoursInThePast`. Let’s try if that makes more sense:
```jsx
<TimePicker disabledHours={hoursInThePast} />
```

Even our function makes more sense:
```js
function hoursInThePast() {
  const hours = []
  for (let hour = 0; hour < moment().hour(); i++) {
    hours.push(hour)
  }
  return hours
}
```

This reads much better — someone reading this piece of code will know that this time picker will allow the selection of hours in the future, but not in the past, without having to look at the function body.

In short, if you have to think too much about what a function does without reading the function body, there’s probably a better name for it. A good way to find this is to answer the question _‘what does it do?’_ in human language, and then refine the answer until it can be used in the code.

Naming things well can take some time, but it’s worth the effort. Future collaborators (including future you) will be grateful for a carefully chosen, descriptive name.
