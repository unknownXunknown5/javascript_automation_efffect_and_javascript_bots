

# 🤖 Auto Scroll Bot (JavaScript)

A simple automation script that **automatically scrolls a webpage** at fixed intervals.
Useful for testing, demos, or automating scrolling behavior on long pages.

---

## 🚀 Features

* 🔄 Automatic scrolling at intervals
* ⚡ Smooth scrolling behavior
* 🧠 Lightweight and beginner-friendly
* ⏱️ Customizable scroll speed and distance
* 🌐 Works on any webpage

---

## 📸 Preview

> 📷 ![alt text](<Screen Recording 2026-04-02 215246.gif>)

---

## 🛠️ Tech Stack

| Technology      | Usage               |
| --------------- | ------------------- |
| **JavaScript**  | Scroll automation   |
| **Browser API** | `window.scrollBy()` |

---

## 📂 Project Structure

```id="scrollstruct"
├── script.js      # Scroll bot logic
├── readme.md      # Documentation
```

---

## ⚙️ How It Works

* Uses `setInterval()` to run repeatedly
* Every 1.5 seconds:

  * Scrolls the page by a fixed amount
* Continues indefinitely until stopped

---

## 💻 Core Code

```javascript id="scrollcore"
const scrollBot = setInterval(() => {
    window.scrollBy({
        top: 300,
        left: 200,
        behavior: 'smooth'
    });
}, 1500);
```

---

## ▶️ How to Use

### Method 1: Browser Console

1. Open any website
2. Press **F12 → Console**
3. Paste the code
4. Press Enter

---

### Method 2: Script File

* Add this code inside a `<script>` tag in your HTML

---

## 🛑 Stop the Bot

```javascript id="scrollstop"
clearInterval(scrollBot);
```

---

## 🎯 Customization

You can modify:

* ⬇️ Vertical scroll → `top: 300`
* ➡️ Horizontal scroll → `left: 200`
* ⏱️ Interval timing → `1500 ms`
* ⚡ Speed → adjust values




---

## 💡 Use Cases

* 📜 Auto-scrolling long articles
* 🤖 Simple browser automation
* 🎥 Demo presentations
* 🧪 UI testing

---

## 🚧 Limitations

* May not work on sites with scroll restrictions
* Continuous scrolling can affect performance

---

## 📈 Future Improvements

* ⏸️ Pause/Resume functionality
* 🎯 Scroll to specific section
* 🔁 Auto reverse scroll
* 🧠 Smart scrolling (detect page end)

---

## 🤝 Contributing

```bash id="scrollcontri"
# Fork repo
# Make changes
# Submit PR
```

---

## 📜 License

Open-source under **MIT License**

---

## ⭐ Support

If you like this project:

⭐ Star the repo
🍴 Fork it
📢 Share it

---


