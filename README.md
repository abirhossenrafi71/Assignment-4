# JavaScript DOM and Event Handling Questions

1. **What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?**

- `getElementById()` takes a single ID element.
- `getElementsByClassName()` returns multiple elements of the same class.
- `querySelector()` takes the first match.
- `querySelectorAll()` takes all matches.

2. **How do you create and insert a new element into the DOM?**

Create an element with `createElement()`, set its content, and add it to the DOM with `append()` or `appendChild()`.

3. **What is Event Bubbling? And how does it work?**

When an event occurs in a child, it gradually rises to the parent—this is called *Event Bubbling*.

4. **What is Event Delegation in JavaScript? Why is it useful?**

Event Delegation is the process of handling events in children by setting a listener on the parent; it requires less code and works on dynamic elements.

5. **What is the difference between `preventDefault()` and `stopPropagation()` methods?**

- `preventDefault()` stops the default action.
- `stopPropagation()` stops the event from bubbling up to parent elements.