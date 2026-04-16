
---

# 💓 Pulse Animation Bot (JavaScript)

A smooth and modern **pulse animation effect** built using **JavaScript + CSS transforms**.
This project creates a glowing box that **continuously expands and contracts**, simulating a heartbeat/pulse effect.

---

## 🚀 Features

* 💓 Smooth pulse (grow & shrink) animation
* ⚡ High-performance using `requestAnimationFrame()`
* 🎨 Gradient background with glow effect
* 🔁 Infinite animation loop
* 🧠 Beginner-friendly logic

---

## 📸 Preview

> 📷 ![alt text](<Screen Recording 2026-04-16 222520.gif>)

---

## 🛠️ Tech Stack

| Technology     | Usage                  |
| -------------- | ---------------------- |
| **HTML5**      | Structure              |
| **CSS3**       | Styling & glow effects |
| **JavaScript** | Animation logic        |

---

## 📂 Project Structure

```id="pulsestruct"
├── index.html     # Main project file
└── readme.md      # Documentation
```

---

## ⚙️ How It Works

* A box (`pulseBox`) is centered on screen
* A scale value is continuously updated
* Animation loop:

  * If growing → increase scale
  * If shrinking → decrease scale
* When limits are reached:

  * Direction switches

---

## 💻 Core Logic

```javascript id="pulsecore"
let scale = 1;
let growing = true;

function pulse() {
    scale += growing ? 0.01 : -0.01;

    if (scale > 1.3) growing = false;
    if (scale < 1) growing = true;

    box.style.transform = `scale(${scale})`;

    requestAnimationFrame(pulse);
}

pulse();
```

---

## ▶️ How to Run

1. Clone the repository

```bash id="pulserun"
git clone https://github.com/your-username/pulse-animation.git
```

2. Open `index.html` in your browser

---

## 🎯 Customization

You can modify:

* 📏 Max size → change `1.3`
* ⚡ Speed → adjust `0.01`
* 🎨 Colors → update gradient in CSS
* 🌟 Glow → modify `box-shadow`
* 📝 Text → change "PULSE BOT"

---

## 💡 Key Concepts Used

* CSS Transform (`scale`)
* Animation loop (`requestAnimationFrame`)
* State control (`growing` flag)
* DOM Manipulation

---

## 🚧 Challenges Faced

* ⚠️ Smooth animation without lag
* ⚠️ Proper scaling limits

✔ Solved using:

* `requestAnimationFrame()`
* Controlled scale boundaries

---

## ⚠️ Common Mistakes

### ❌ CSS Issue (Missing bracket)

Your CSS currently has a nesting error:

```css id="mistake3"
body {
   ...
   #pulseBox {
```

✔ Fix:

```css id="correct3"
body {
   ...
}

#pulseBox {
   ...
}
```

---

### ❌ JavaScript Issue

```javascript id="mistake4"
if(scale < 1.)
```

✔ Fix:

```javascript id="correct4"
if(scale < 1)
```

---

## 📈 Future Improvements

* 🎬 Add glow animation (opacity change)
* 🎵 Sync pulse with sound
* 🌈 Multi-color pulsing
* 🎯 Add hover interaction
* 📱 Make responsive

---

## 🤝 Contributing

```bash id="pulsecontri"
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
