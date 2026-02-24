# JavaScript DOM & Events – Quick Notes

## 1. Difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`

* **`getElementById('id')`** → Selects one element by ID.
* **`getElementsByClassName('class')`** → Returns an **HTMLCollection** of elements by class.
* **`querySelector('selector')`** → Selects the **first element** matching a CSS selector.
* **`querySelectorAll('selector')`** → Selects **all elements** matching a CSS selector (**NodeList**).

---

## 2. Create and Insert a New Element

```js
const div = document.createElement('div');
div.textContent = 'Hello';
document.body.appendChild(div);
```

---

## 3. Event Bubbling

* Event starts from the **target element** and bubbles up to ancestors.
* Example: Clicking a button triggers its click event → parent → body → document.

---

## 4. Event Delegation

* Attach **one event listener** to a parent instead of many children.
* Works via **event bubbling**.
* Useful for **dynamic elements** added later.

---

## 5. Difference between `preventDefault()` and `stopPropagation()`

* **`preventDefault()`** → Stops default browser action (link click, form submit).
* **`stopPropagation()`** → Stops event from bubbling up to parent elements.
