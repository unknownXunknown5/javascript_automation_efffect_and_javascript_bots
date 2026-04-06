

# 📦 Growing Box Animation (JavaScript)

A simple and visually appealing **JavaScript animation project** where a box continuously **grows and shrinks smoothly** using scaling transformations.

This project demonstrates **basic animation logic, state handling, and CSS transforms**.

---

## 🚀 Features

* 🔄 Continuous grow & shrink animation
* 📏 Smooth scaling using `transform: scale()`
* ⚡ Lightweight animation using `setInterval()`
* 🎯 Dynamic size change (X and Y independently)
* 🧠 Beginner-friendly logic

---

## 📸 Preview

> 📷 ![alt text](<Screen Recording 2026-04-06 221752.gif>)

---

## 🛠️ Tech Stack

| Technology     | Usage            |
| -------------- | ---------------- |
| **HTML5**      | Structure        |
| **CSS3**       | Styling & layout |
| **JavaScript** | Animation logic  |

---

## 📂 Project Structure

```id="growstruct"
├── index.html     # Main project file
└── readme.md      # Documentation
```

---

## ⚙️ How It Works

* A box is displayed at the center

* Two scale values are maintained:

  * `scaleX` → horizontal growth
  * `scaleY` → vertical growth

* Animation loop:

  * If growing → increase scale
  * If shrinking → decrease scale
  * Toggle state when limits reached

---


## ▶️ How to Run

1. Clone the repository

```bash id="growrun"
git clone 
```

2. Open `index.html` in your browser

---

## 🎯 Customization

You can modify:

* 📏 Max size → change `scaleX >= 3`
* ⚡ Speed → change `setInterval(50)`
* 🔄 Growth rate → adjust `0.05`, `0.02`
* 🎨 Color → update CSS (`background-color`)
* 📝 Text → change "HI"

---

## 💡 Key Concepts Used

* CSS Transform (`scale`)
* Animation loops (`setInterval`)
* State management (`growing` flag)
* DOM Manipulation

---

## 🚧 Challenges Faced

* ⚠️ Maintaining smooth animation
* ⚠️ Preventing overflow scaling

✔ Solved using:

* Controlled scale limits
* Toggle state logic

---

## ⚠️ Common Mistake

❌ Missing variable declaration:

```javascript id="mistake1"
scaleY = 1;
```

✔ Correct:

```javascript id="correct1"
let scaleY = 1;
```

---

## 📈 Future Improvements

* 🎬 Use `requestAnimationFrame()` for smoother animation
* 🎨 Add color transition effect
* 🔁 Add rotation along with scaling
* 🎯 Add hover interaction
* 📱 Make responsive

---

## 🤝 Contributing

```bash id="growcontri"
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

