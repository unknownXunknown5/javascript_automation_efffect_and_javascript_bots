
---

# 🖱️ Mouse Follower (JavaScript)

A simple and interactive **JavaScript animation project** where an element follows the **mouse cursor in real-time**.

This project demonstrates **event handling, DOM manipulation, and coordinate tracking**.

---

## 🚀 Features

* 🖱️ Element follows mouse movement
* ⚡ Real-time position tracking
* 🎯 Smooth and responsive behavior
* 🧠 Beginner-friendly logic
* 🎨 Easily customizable UI

---

## 📸 Preview

📷 ![alt text](<Screen Recording 2026-04-13 191444.gif>) 

---

## 🛠️ Tech Stack

| Technology     | Usage                      |
| -------------- | -------------------------- |
| **HTML5**      | Structure                  |
| **CSS3**       | Styling (follower element) |
| **JavaScript** | Mouse tracking logic       |

---

## 📂 Project Structure

```id="followerstruct"
├── index.html     # Main file
├── style.css      # Styling (optional)
├── script.js      # Mouse follower logic
└── readme.md      # Documentation
```

---

## ⚙️ How It Works

* Listens for **mouse movement (`mousemove`)** event

* Captures cursor position using:

  * `e.clientX` → horizontal position
  * `e.clientY` → vertical position

* Updates element position dynamically:

  * Moves element to cursor location

* Offset (`-15px`) is used to center the follower

---



## ▶️ How to Run

1. Clone the repository

```bash id="followerrun"
git clone 
```

2. Open `index.html` in your browser

---

## 🎯 Customization

You can modify:

* 🎯 Offset → change `-15` (center alignment)
* 🎨 Shape → circle, square, image
* 🌈 Color → using CSS
* ⚡ Smoothness → add transition or easing
* 🖼️ Replace with icon or emoji

---

## 💡 Key Concepts Used

* Event Handling (`mousemove`)
* Mouse coordinates (`clientX`, `clientY`)
* DOM Manipulation (`style.left`, `style.top`)
* Real-time UI updates

---

## 🚧 Challenges Faced

* ⚠️ Aligning element with cursor center
* ⚠️ Smooth movement

✔ Solved using:

* Position offset
* Continuous event tracking

---

## ⚠️ Important Requirement

Make sure your follower element has:

```css id="followercss"
#follower {
    position: fixed;
}
```

Otherwise, it will not follow correctly.

---

## 📈 Future Improvements

* 🎬 Add smooth trailing effect
* 🌟 Add glow or shadow
* 🎯 Multiple followers
* 🧠 Add click interaction
* 🎮 Use in games or UI effects

---

## 🤝 Contributing

```bash id="followercontri"
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