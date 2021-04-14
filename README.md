# vue-lifecycles

## Updates using the Virtual DOM
The Virtual DOM is a JavaScript __Object__. 

Updates on the real DOM is quite costly. Virtual DOM is a lightweight copy of the real DOM. After checking element, it will perform patch, which is adding, updating or removing elements from the page. 

Not required to add classes or IDs to select an element (ofc would still use classes for styling). Keeps code minimal. 

## Understanding Reactivity with Proxies
__Reactivity__ is when a program is able to react to changes. 