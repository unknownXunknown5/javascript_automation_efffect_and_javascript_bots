

# 🌧️ Matrix Rain Animation (HTML5 Canvas)

A visually appealing **rain animation effect** built using the **HTML5 Canvas API** and JavaScript.
This project simulates falling raindrops (Matrix-style) with smooth motion using `requestAnimationFrame()`.

---

## 🚀 Features

* 🌧️ Real-time rain animation
* ⚡ Smooth rendering using `requestAnimationFrame()`
* 🎯 Random drop positions and speeds
* 🎨 Customizable color and size
* 🧠 Efficient canvas-based animation

---

## 📸 Preview

> 📷 *Add screenshot/GIF of rain animation*

---

## 🛠️ Tech Stack

| Technology       | Usage                   |
| ---------------- | ----------------------- |
| **HTML5 Canvas** | Rendering animation     |
| **JavaScript**   | Logic & animation       |
| **Browser API**  | `requestAnimationFrame` |

---

## 📂 Project Structure

```id="rainstruct"
├── index.html     # Canvas setup
├── script.js      # Rain animation logic
└── readme.md      # Documentation
```

---

## ⚙️ How It Works

* A canvas is initialized using `getContext('2d')`

* An array of **raindrop objects** is created

  * Each drop has:

    * `x` → horizontal position
    * `y` → vertical position
    * `speed` → falling speed

* Animation loop:

  * Clears canvas
  * Draws each drop
  * Updates position
  * Resets drop when it reaches bottom

---

## 💻 Core Logic

```javascript id="raincore"
const c = document.getElementById("rain").getContext('2d');

const drops = [];
for (let i = 0; i < 200; i++) {
    drops.push({
        x: Math.random() * 1920,
        y: Math.random() * 1080,
        speed: Math.random() * 5 + 2
    });
}

function rain() {
    c.clearRect(0, 0, 1920, 1080);
    c.fillStyle = '#00f';

    drops.forEach(d => {
        c.fillRect(d.x, d.y, 4, 9);
        d.y += d.speed;

        if (d.y > 1090) d.y = 0;
    });

    requestAnimationFrame(rain);
}

rain();
```

---

## ▶️ How to Run

1. Clone the repository

```bash id="rainrun"
git clone 
```

2. Open `index.html` in your browser

---

## 🎯 Customization

You can modify:

* 🌧️ Number of drops → change `200`
* ⚡ Speed → adjust `Math.random()*5+2`
* 🎨 Color → change `fillStyle`
* 📏 Drop size → modify `fillRect(4,9)`
* 🖥️ Canvas size → replace `1920x1080` with dynamic values

---

## 💡 Key Concepts Used

* Canvas Rendering (`getContext`)
* Animation loop (`requestAnimationFrame`)
* Object arrays for particles
* Randomization (`Math.random()`)

---

## 🚧 Challenges Faced

* ⚠️ Managing smooth animation
* ⚠️ Resetting drops without flicker

✔ Solved using:

* `requestAnimationFrame()`
* Efficient clearing & redraw

---

## ⚠️ Improvements (Important)

❗ Current limitation:

* Fixed canvas size (`1920x1080`)

✔ Better approach:


---

## 📈 Future Improvements

* 🌈 Add gradient rain colors
* 🎬 Add blur/glow effects
* 🧠 Add wind effect (side movement)
* 📱 Make responsive
* 🎵 Add background sound

---

## 🤝 Contributing

```bash id="raincontri"
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
