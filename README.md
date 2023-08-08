# Spinner Wheel

This is a spinner wheel that helps the user who are having a hard time what to do next. The user can input 6 different options on each spinning cone, and could spin three times to create a sentense. 

# Feature

# Testing

## HTML
Conducted HTML validation check by [The W3C Markup Validation Service](https://validator.w3.org/)
- Line 22, 25, 28, 31, 34, 37 had unused text class on div. 
- Also, span was having h5 as a child element which is not allowed. 
```
<div class="option" id="red">
    <span class="text"><h5></h5></span>
```
> Changed span to div and h5 as p.
\
> Fixed class="text" to be the class for p.
```
<div class="option" id="red">
    <div><p class="text"></p></div>
```

## CSS
Conducted CSS validation check by [The W3C Markup Validation Service](https://validator.w3.org/)
- No errors were spotted. 

## JavaScript
Conducted JavaScript check by [JSHint](https://jshint.com/)
- Seven unused variables were found. They initially were called by the onclick function on HTML, so I have changed them to have event listener on JavaScript and it removed the error. 

![jshint](readme-image/jshint-issue.png)






## Functional Testing

# Deployment

# Credits

## Reference
- [CSS clip path maker](https://bennettfeely.com/clippy/)
- [W3schools](https://www.w3schools.com/)