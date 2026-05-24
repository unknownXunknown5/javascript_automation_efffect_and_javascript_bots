
# 🎉 Confetti Explosion Animation (JavaScript)

A fun and interactive **JavaScript confetti animation project** that launches colorful falling particles when a button is clicked.
Built using **pure HTML, CSS, and JavaScript**, this project demonstrates **DOM manipulation and Web Animations API**.

---

## 🚀 Features

* 🎊 Confetti burst on button click
* 🌈 Random colors using HSL
* 🎯 Dynamic particle generation (150 pieces)
* ⚡ Smooth falling + rotation animation
* 🧠 Uses modern **Web Animations API (`element.animate`)**
* 🧹 Auto cleanup after animation

---

## 📸 Preview

> 📷 ![alt text](<Screen Recording 2026-04-01 195635.gif>)

![alt text](<Screenshot 2026-04-01 195858.png>)


---

## 🛠️ Tech Stack

| Technology     | Usage           |
| -------------- | --------------- |
| **HTML5**      | Structure       |
| **CSS3**       | Button styling  |
| **JavaScript** | Animation logic |

---

## 📂 Project Structure

```id="confstruct"
├── index.html     # Main file (HTML + CSS + JS)
├── readme.md      # Documentation
```

---

## ⚙️ How It Works

* User clicks **"Launch Confetti"** button
* Loop runs **150 times** → creates confetti particles
* Each particle:

  * Gets random position
  * Gets random color
  * Falls with animation
* After animation:

  * Particle is automatically removed

---



---

## ▶️ How to Run

1. Clone the repository

```bash id="confrun"
git clone https://github.com/kriyanshkirito/javascript_automation_efffect_and_javascript_bots.git
```

2. Open `index.html` in your browser

---

## 🎯 Customization

You can easily modify:

* 🎊 Number of particles → change `150`
* 🎨 Colors → adjust HSL values
* ⚡ Speed → change duration (`fall`)
* 🔄 Rotation → modify `rotate(720deg)`
* 📏 Size → change width & height

---

## 💡 Key Concepts Used

* DOM Manipulation (`createElement`, `appendChild`)
* Web Animations API (`element.animate`)
* Randomization (`Math.random()`)
* Event Handling (`addEventListener`)

---

## 🚧 Challenges Faced

* ⚠️ Managing multiple animated elements
* ⚠️ Performance when creating many DOM nodes

✔ Solved using:

* Efficient loop handling
* Removing elements after animation

---

## 📈 Future Improvements

* 🎵 Add sound effects
* 🎨 Different shapes (circles, stars)
* 🎯 Confetti direction control
* 📱 Mobile optimization
* 🌈 Gradient or glowing particles

---

## 🤝 Contributing

```bash id="confcontri"
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

If you want, next I can help you:

* 🔥 Add **real physics (gravity + bounce)**
* 🎬 Create **portfolio-level animation page**
* ⚡ Optimize performance using **canvas instead of divs**
