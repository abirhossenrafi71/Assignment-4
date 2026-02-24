

## 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`
- `getElementById('id')` → selects one element by ID.  
- `getElementsByClassName('class')` → selects HTMLCollection of elements by class.  
- `querySelector('selector')` → selects first element matching CSS selector.  
- `querySelectorAll('selector')` → selects **all elements matching CSS selector (NodeList).

## 2. Create and insert a new element
```js
const div = document.createElement('div');
div.textContent = 'Hello';                 
document.body.appendChild(div); 

## 3. Event Bubbling
- Event starts from target element and bubbles up to ancestors.  
- Example: Clicking a button triggers its click event → parent → body → document.

## 4. Event Delegation

Attach one event listener to a parent instead of many children.

Works via event bubbling.

Useful for dynamic elements added later.

## 5. Difference between preventDefault() and stopPropagation()

preventDefault() → stops default browser action ( link click, form submit).

stopPropagation() → stops event from bubbling up to parent elements.