
---

# 🎨 Random Background Color Bot (JavaScript)

A simple and fun **JavaScript automation project** that continuously changes the **background color of a webpage** at fixed intervals using random RGB values.

This project demonstrates **randomization, DOM manipulation, and timed execution**.

---

## 🚀 Features

* 🌈 Random background color every second
* ⚡ Lightweight and fast
* 🎯 Uses RGB color generation
* 🔄 Continuous automatic updates
* 🧠 Beginner-friendly logic

---

## 📸 Preview

> 📷![alt text](<Screen Recording 2026-04-10 234839.gif>)
---

## 🛠️ Tech Stack

| Technology     | Usage              |
| -------------- | ------------------ |
| **JavaScript** | Logic & automation |
| **HTML5**      | Page structure     |

---

## 📂 Project Structure

```id="colorstruct"
├── index.html     # Main file
├── script.js      # Color bot logic
└── readme.md      # Documentation
```

---

## ⚙️ How It Works

* Every **1 second (`setInterval`)**:

  * Generates random values for:

    * Red (0–255)
    * Green (0–255)
    * Blue (0–255)
* Combines them into an RGB color
* Applies it to the page background

---

## ▶️ How to Run

1. Clone the repository

```bash id="colorrun"
git clone 
```

2. Open `index.html` in your browser

---

## 🛑 Stop the Bot

```javascript id="colorstop"
clearInterval(bot);
```

---

## 🎯 Customization

You can modify:

* ⏱️ Speed → change `1000 ms`
* 🎨 Color range → limit RGB values
* 🌈 Use HEX colors instead of RGB
* 🧠 Add transition effects

---

## 💡 Key Concepts Used

* Random number generation (`Math.random`)
* DOM manipulation (`style.backgroundColor`)
* Timers (`setInterval`)
* RGB color model

---

## 🚧 Challenges Faced

* ⚠️ Ensuring smooth color transitions
* ⚠️ Avoiding too frequent changes

✔ Solved by:

* Balanced interval timing (1 second)

---

## 📈 Future Improvements

* 🎬 Add smooth transition (`CSS transition`)
* 🎯 Add button to start/stop
* 🌈 Gradient background support
* 🎵 Add sound sync with colors
* 🧠 AI-based color themes

---

## 🤝 Contributing

```bash id="colorcontri"
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
