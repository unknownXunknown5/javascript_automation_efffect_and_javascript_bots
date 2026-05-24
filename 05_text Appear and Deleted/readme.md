

# 🖥️ Matrix Typing Animation (JS Bot)

A dynamic **JavaScript typing & deleting animation** inspired by terminal-style interfaces (Matrix effect).
This project simulates a bot that types messages, deletes them, and loops continuously.

---

## 🚀 Features

* ⌨️ Real-time typing animation
* 🔁 Auto deleting effect (like ChatGPT typing)
* 🔄 Infinite message loop
* ⚡ Smooth speed control using `setTimeout()`
* 🧠 Clean logic with state handling (`isDeleting`)

---

## 📸 Preview

> 📷 ![alt text](<Screen Recording 2026-03-31 215722.gif>)


<br>
<br>

![alt text](<Screenshot 2026-03-31 220608.png>)

---

## 🛠️ Tech Stack

| Technology     | Usage                   |
| -------------- | ----------------------- |
| **HTML5**      | Structure               |
| **CSS3**       | Styling (terminal look) |
| **JavaScript** | Typing logic            |

---

## 📂 Project Structure

```id="struct2"
├── index.html     # UI layout
├── script.js      # Typing & deleting logic
├── readme.md      # Documentation
```

---

## ⚙️ How It Works

* An array of messages is stored
* Bot types each message character-by-character
* Once completed:

  * It switches to **deleting mode**
* After deletion:

  * Moves to next message
* Loops infinitely

---

## ▶️ How to Run

1. Clone the repository

```bash id="run2"
git clone 'link of respoitory of javascript automation'
```

2. Open `index.html` in browser

---

## 🎯 Customization

You can easily modify:

* 📝 Messages → edit `messages[]` array
* ⚡ Typing speed → change `100`
* 🧹 Deleting speed → change `50`
* 🎨 UI → update CSS for terminal effect

---

## 💡 Key Concepts Used

* DOM Manipulation
* `setTimeout()` recursion
* State management (`isDeleting`)
* String handling (`substring`)

---

## 🚧 Challenges Faced

* ⚠️ Handling typing vs deleting states
* ⚠️ Smooth looping between messages

✔ Solved using **boolean state (`isDeleting`) + index control**

---

## 📈 Future Improvements

* ⌨️ Add blinking cursor (`|`)
* 🎵 Add typing sound effect
* 🎨 Matrix rain background
* 🧠 User input support
* 🌈 Multi-color text animation

---

## 🤝 Contributing

```bash id="contri2"
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


