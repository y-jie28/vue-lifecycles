# vue-lifecycles

## Updates using the Virtual DOM
The Virtual DOM is a JavaScript __Object__. 

Updates on the real DOM is quite costly. Virtual DOM is a lightweight copy of the real DOM. After checking element, it will perform patch, which is adding, updating or removing elements from the page. 

Not required to add classes or IDs to select an element (ofc would still use classes for styling). Keeps code minimal. 

## Understanding Reactivity with Proxies
__Reactivity__ is when a program is able to react to changes. 

## The Vue Compiler
2 Versions of Vue
- One version __WITH__ the compiler
- One version __WITHOUT__ the compiler

With compiler build is refer to the "full" build, without the compiler build is known as the "runtime only" build. 

#### Vue without the Compiler
Pros
- 30% Lighter than the full version.
- Slightly faster since Vue no longer has to compile the template. 

Cons
- Difficult to read and manage code with plain JavaScript. 
- Tooling required if you want to make the process faster. 