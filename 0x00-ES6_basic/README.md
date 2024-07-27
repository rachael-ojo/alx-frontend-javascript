# 0x00. ES6 Basics

## Overview

This project is an introduction to the basics of ECMAScript 6 (ES6), the latest version of JavaScript. ES6 introduces new syntax and features that make writing JavaScript code easier and more efficient.

## Learning Objectives

By the end of this project, you should be able to:

- Understand the difference between `const`, `let`, and `var` for variable declarations
- Use arrow functions for concise function expressions
- Work with template literals for string interpolation
- Destructure arrays and objects for easier data manipulation
- Use default parameters in functions
- Understand the spread and rest operators
- Work with the new ES6 features for better code readability and maintainability

## Tasks

### Task 0: Const or Let?

Modify the following functions to use `const` and `let` for variable declarations.

- **taskFirst**: Instantiates variables using `const`
- **taskNext**: Instantiates variables using `let`

#### Example:
```javascript
function taskFirst() {
    const task = 'I prefer const when I can.';
    return task;
}

function taskNext() {
    let task = 'But sometimes let is okay';
    return task;
}
