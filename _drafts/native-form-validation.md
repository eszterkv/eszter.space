---
title: Native form validation in HTML5
date: 2022-10-10T11:24:00.000Z
---

While there are many excellent form-handling tools out there — such as [yup](https://www.npmjs.com/package/yup), [React Hook Form](https://react-hook-form.com/) and [Formik](https://formik.org/) —, they are not a pre-requisite for form validation. In this post I will deep-dive into how to do this with only HTML (plus some CSS) and JavaScript.

Let’s start with a simple job application form.

We will not care about the JavaScript part this time, it’s just a simple way of extracting form data that can also be used for actual form submission[^1]. What we care about is validation: enforcing users to populate form fields with entries in the format that we require, prompt them with helpful messages if some of the data is incorrectly formatted or missing, and prevent form submission until everything is formatted correctly.

## The basics: a simple form with an email field

HTML takes care of a lot of validation by default. If you enter `123` in the email field below and click ‘Subscribe’, most modern browsers will show you a little popup with text similar to _‘Please enter an email address’_, and refuse to submit the form.

<form onsubmit="handleSubmit(event)">
  <label>
    Name<br />
    <input type="name" name="name" />
  </label>
  <label>
    Email<br />
    <input type="email" name="email" />
  </label>
  <button type="submit">Apply</button>
</form>
<script>
function handleSubmit(e) {
  e.preventDefault()
  const formData = new FormData(e.target)
  console.log(Object.fromEntries(formData))
}
</script>
<style type="text/css">
label, fieldset {
  display: block;
  margin-top: 8px;
}
button {
  margin-top: 16px;
}
</style>

#### Here is the source code so far:
**HTML**
```html
<form onsubmit="handleSubmit(event)">
  <label>
    Name<br />
    <input type="name" name="name" />
  </label>
  <label>
    Email<br />
    <input type="email" name="email" />
  </label>
  <button type="submit">Apply</button>
</form>
```

**CSS**
```css
label {
  display: block;
}

label, fieldset {
  display: block;
  margin-top: 8px;
}

button {
  margin-top: 16px;
}
```

**JavaScript**
```js
function handleSubmit(e) {
  e.preventDefault()
  const formData = new FormData(e.target)
  console.log(Object.fromEntries(formData))
}
```

## More field types and required fields

Let’s add some more fields to our form to see what else HTML gives us out of the box. Here’s a summary of our fields:
- Name (required)
- Email
- Desired salary (number)
- Preferred location (one of London, Amsterdam or remote)

<form onsubmit="handleSubmit(event)">
  <label>
    Name<br />
    <input type="name" name="name" required />
  </label>
  <label>
    Email<br />
    <input type="email" name="email" />
  </label>
  <label>
    Desired salary (EUR/year)<br />
    <input type="number" name="salary" />
  </label>
  <fieldset>
    <legend>Preferred location</legend>
    <label>
      <input type="radio" id="London" name="location" value="London" checked>
      London
    </label>
    <label>
      <input type="radio" id="Amsterdam" name="location" value="Amsterdam">
      Amsterdam
    </label>
    <label>
      <input type="radio" id="Remote" name="location" value="Remote" checked>
      Remote
    </label>
  </fieldset>
  <button type="submit">Apply</button>
</form>

```html
<form onsubmit="handleSubmit(event)">
  other fields...
  <label>
    Desired salary (EUR/year)<br />
    <input type="number" name="salary" />
  </label>
  <fieldset>
    <legend>Preferred location</legend>
    <label>
      <input type="radio" id="London" name="location" value="London" checked>
      London
    </label>
    <label>
      <input type="radio" id="Amsterdam" name="location" value="Amsterdam">
      Amsterdam
    </label>
    <label>
      <input type="radio" id="Remote" name="location" value="Remote" checked>
      Remote
    </label>
  </fieldset>
  <button type="submit">Apply</button>
</form>
```

// TODO STUFF:
- This is very helpful in itself, but what if we want more control over validation messages?
- salary should be within a range, have steps, default value etc

[^1]: You can check the console to see what it's logging each time you submit.
[^2]: See GDPR [data minimisation principle](https://ico.org.uk/for-organisations/guide-to-data-protection/guide-to-the-general-data-protection-regulation-gdpr/principles/data-minimisation/)  
[^3]: I spent five minutes searching for the perfect *The Office* gif to illustrate this, to no avail. Please email me if you find it.  
[^4]: GitHub repos: [matomo-org/matomo](https://github.com/matomo-org/matomo) and [usefathom/fathom](https://github.com/usefathom/fathom)
