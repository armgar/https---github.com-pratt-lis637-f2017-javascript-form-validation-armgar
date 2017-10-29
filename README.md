# Lab 4 - Form Validation
Many web applications involve some kind of forms. Form validation is a way for you to tell the user what kind of input is required in each field, and allows you to notify the user when the input is incorrect. There are many ways to do form validation, but in this assignment we will write a plugin that displays information / error messages besides the fields. 

## Concepts:
The goal of this assignment is to learn how to do simple form validation in JavaScript, using event handlers.

## Exercise:
The code files for form validation are `validate.html`, `css/validate.css` and `js/validate.js`. You will only need to modify `js/validate.js`.

You should implement the function `validateField`. `validateField` should take in three parameters: `fieldElem`, `infoMessage`, and `validateFn`. `fieldElem` should be a DOM element that represents a single form text field. `infoMessage` should be a string that gives a human-readable description of the field’s requirements. `validateFn` should be a function that returns `true` if the field validates, and `false` if it doesn't.

When the `validateField` function is invoked, you should insert a `<span>` notification element immediately after the form field. The notification element should initially be hidden. 

When the field loses focus:

* If the field is empty, the notification element should be hidden.
* If the field is non-empty and the form field validates, the notification element’s text should be “OK”, its class should be “ok”, and it should be visible. The text should appear in green.
* If the field is non-empty and the form field does not validate, the notification element’s text should be “Error: [more specific error message here]." Its class should be “error”, and it should be visible. The text should appear in red.
* Use sensible error messages of your choosing. 

The validations are as follows:

* The username field must contain more than 5 characters. 
* The email address field should contain a @ character.
* _Optional_: Once you have everything working, test that the username also only includes alphabetical or numeric characters. You can use this code snippet as a reference: https://www.w3resource.com/javascript/form/letters-numbers-field.php

## Hints:
You should use the [form events](http://api.jquery.com/category/events/form-events/) functions to detect when a form field gains or loses focus. 

The information span element can be added using element creation and DOM insertion.

You can [hide and show HTML elements](https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp) using `style.display = 'none';` and `style.display = 'block';`

Inside your `validateField(fieldElem, infomessage, validateFn)` function code block, you can call the `validateFn` variable like a function, e.g.:

```
if (validateFn() == true) {
    // the text has validated
    // update the notification element text and visibility
 }
 ```
 
 To prevent multiple `<span>` tags from appearing after each user attempt, you should check to see if there is already a `<span>` tag. Use the `nextSibling` property to check. Assuming you've stored the previous `<span>` in a variable called `previousSpan`, you can do:

```
if (previousSpan != null) {
    // remove the span
}
```

 ## Submission Instructions:
Submit `validate.html`, `validate.js`, and `validate.css` organized in a directory structure of your choosing to your repository **before class on October 23rd**.
