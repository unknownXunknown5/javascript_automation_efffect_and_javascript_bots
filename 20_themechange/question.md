---

### 🔑 How the browser decides
- CSS variables are **scoped** to the selector where they’re defined.  
- You wrote:
  ```css
  [data-theme="party"] { --bg-primary: #0a001f; }
  [data-theme="light"] { --bg-primary: #ffffff; }
  ```
- That means:
  - If `<body data-theme="party">`, then inside `<body>` the variable `--bg-primary` resolves to `#0a001f`.
  - If `<body data-theme="light">`, then inside `<body>` the variable `--bg-primary` resolves to `#ffffff`.

---

### 📌 Example
```html
<body data-theme="party">
  <div class="card">Hello!</div>
</body>
```
- Here, `var(--bg-primary)` = `#0a001f`.

```html
<body data-theme="light">
  <div class="card">Hello!</div>
</body>
```
- Now, `var(--bg-primary)` = `#ffffff`.

---

### ⚡ Why this works
- Both themes define the **same variable names** (`--bg-primary`, `--text-primary`, etc.).
- The **active theme** is chosen by the `data-theme` attribute.
- CSS rules like:
  ```css
  body { background: var(--bg-primary); }
  ```
  don’t care which theme is active — they just pull the current value of `--bg-primary` from the active `[data-theme]`.

---

✅ In short: the **same variable name** can exist in multiple themes, but only the one inside the currently active `[data-theme="..."]` block applies. That’s how your body decides which value to use.
