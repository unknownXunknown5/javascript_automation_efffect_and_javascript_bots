

# 🎆 Firework Animation (HTML5 Canvas)

A visually engaging **firework particle animation** built using the **HTML5 Canvas API** and JavaScript.
This project simulates realistic fireworks using **particle physics, gravity, and fading trails**.

---

## 🚀 Features

* 🎆 Dynamic firework explosions
* 🌈 Random colors using HSL
* ⚡ Smooth animation with `requestAnimationFrame()`
* 🌌 Trail/fade effect using semi-transparent background
* 🧠 Particle-based physics (velocity + gravity)

---

## 📸 Preview

> 📷 ![alt text](<Screenshot 2026-04-19 221744.png>)

---

## 🛠️ Tech Stack

| Technology       | Usage                   |
| ---------------- | ----------------------- |
| **HTML5 Canvas** | Rendering animation     |
| **JavaScript**   | Logic & physics         |
| **Browser API**  | `requestAnimationFrame` |

---

## 📂 Project Structure

```id="firestruct"
├── index.html     # Canvas + script
└── readme.md      # Documentation
```

---

## ⚙️ How It Works

### 🔹 Firework Creation

* Random position is generated
* 60 particles are created per explosion
* Each particle has:

  * Position (`x, y`)
  * Velocity (`vx, vy`)
  * Life duration
  * Color

---

### 🔹 Animation Loop

* Clears canvas with slight opacity → creates trail effect
* Updates each particle:

  * Moves position
  * Applies gravity
  * Decreases life
* Removes dead particles
* Randomly triggers new fireworks

---



---

## ▶️ How to Run

1. Clone the repository

```bash id="firerun"
git clone https://github.com/your-username/firework-animation.git
```

2. Open `index.html` in your browser

---

## 🎯 Customization

You can modify:

* 🎆 Particle count → change `60`
* ⚡ Explosion frequency → change `0.12`
* 🌈 Colors → adjust HSL range
* 🌍 Gravity → modify `0.2`
* 📏 Particle size → change `fillRect(4,4)`

---

## 💡 Key Concepts Used

* Canvas Rendering (`getContext`)
* Particle Systems
* Gravity simulation
* Animation loop (`requestAnimationFrame`)
* Array filtering for cleanup

---

## 🚧 Challenges Faced

* ⚠️ Managing many particles efficiently
* ⚠️ Creating smooth fading effect

✔ Solved using:

* `filter()` for cleanup
* Transparent background redraw

---

## ⚠️ Improvements

❗ Canvas size is fixed (800x600)

✔ Better responsive version:

```javascript id="firefix"
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
```

---

## 📈 Future Improvements

* 🎇 Add explosion sound effects
* 🎨 Multi-shape particles (circles, stars)
* 🎯 Click to trigger fireworks
* 🌈 Gradient glow effect
* 📱 Responsive design

---

## 🤝 Contributing

```bash id="firecontri"
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


