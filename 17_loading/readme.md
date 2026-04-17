

# 🔄 Spinner Rotation Animation (JavaScript)

A simple and smooth **JavaScript animation project** that continuously rotates an element using **CSS transforms** and `requestAnimationFrame()`.

This project demonstrates **real-time animation, rotation logic, and performance-efficient rendering**.

---

## 🚀 Features

* 🔄 Continuous rotation animation
* ⚡ Smooth performance using `requestAnimationFrame()`
* 🎯 Lightweight and efficient
* 🧠 Beginner-friendly implementation
* 🎨 Works with any element (div, image, icon)

---

## 📸 Preview

> 📷 ![alt text](<Screenshot 2026-04-17 210247.png>)

---

## 🛠️ Tech Stack

| Technology     | Usage           |
| -------------- | --------------- |
| **HTML5**      | Structure       |
| **CSS3**       | Styling         |
| **JavaScript** | Animation logic |

---

## 📂 Project Structure

```id="spinnerstruct"
├── index.html     # Main file
├── style.css      # Styling (optional)
├── script.js      # Rotation logic
└── readme.md      # Documentation
```

---

## ⚙️ How It Works

* A variable `angle` stores current rotation
* Every frame:

  * Angle increases
  * Element rotates using `transform: rotate()`
* Loop runs continuously using `requestAnimationFrame()`

---

## 💻 Core Logic

```javascript id="spinnercore"
let angle = 0;

function rotate() {
    angle += 4;
    spinner.style.transform = `rotate(${angle}deg)`;
    requestAnimationFrame(rotate);
}

rotate();
```

---

## ▶️ How to Run

1. Clone the repository

```bash id="spinnerrun"
git clone 
```

2. Open `index.html` in your browser

---

## 🎯 Customization

You can modify:

* ⚡ Speed → change `angle += 4`
* 🎯 Direction → use negative value (`-4`)
* 🎨 Style → apply border, color, image
* 🔄 Rotation type → combine with scaling

---

## 💡 Key Concepts Used

* CSS Transform (`rotate`)
* Animation loop (`requestAnimationFrame`)
* DOM Manipulation
* Continuous state update

---

## 🚧 Challenges Faced

* ⚠️ Smooth animation performance
* ⚠️ Maintaining continuous rotation

✔ Solved using:

* `requestAnimationFrame()` (better than `setInterval`)

---

## ⚠️ Important Requirement

Make sure your element exists:

```html id="spinnerhtml"
<div id="spinner"></div>
```

---

## 📈 Future Improvements

* 🎬 Add easing effects
* 🌈 Add color-changing spinner
* 🎯 Add start/stop button
* 🔁 Combine with pulse or scale
* 📱 Responsive design

---

## 🤝 Contributing

```bash id="spinnercontri"
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

