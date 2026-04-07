

# 🔢 Dynamic Counter Animation (JavaScript)

A simple **JavaScript counter project** that increments numbers over time and dynamically changes **text size based on conditions**.

This project demonstrates **DOM updates, conditional styling, and timed execution**.

---

## 🚀 Features

* 🔢 Auto-incrementing counter
* ⏱️ Runs at fixed intervals
* 🎯 Dynamic font size change
* ⚡ Lightweight and efficient
* 🧠 Beginner-friendly logic

---

## 📸 Preview

> 📷 ![alt text](<Screenshot 2026-04-07 200216.png>)

![alt text](<Screenshot 2026-04-07 200236.png>)



---

## 🛠️ Tech Stack

| Technology     | Usage         |
| -------------- | ------------- |
| **HTML5**      | Structure     |
| **JavaScript** | Counter logic |

---

## 📂 Project Structure

```id="counterstruct"
├── index.html     # Main project file
└── readme.md      # Documentation
```

---

## ⚙️ How It Works

* Counter starts from **0**
* Every **1.5 seconds (`setInterval`)**:

  * Value increases by 1
  * Updates text content on screen
* If number is divisible by 10:

  * Font size becomes **large (100px)**
* Otherwise:

  * Font size resets to **normal (20px)**

---

## 💻 Core Logic

```javascript id="countercore"
let count = 0;

function counter() {
    count++;

    if (count % 10 == 0) {
        cnt.style.fontSize = "100px";
    } else {
        cnt.style.fontSize = "20px";
    }

    cnt.textContent = count;
}

setInterval(counter, 1500);
```

---

## ▶️ How to Run

1. Clone the repository

```bash id="counterrun"
git clone 
```

2. Open `index.html` in your browser

---

## 🎯 Customization

You can modify:

* ⏱️ Speed → change `1500 ms`
* 🎯 Condition → change `% 10`
* 📏 Font sizes → adjust `100px` / `20px`
* 🔢 Start value → change `count`

---

## 💡 Key Concepts Used

* DOM Manipulation (`textContent`)
* Conditional Logic (`if-else`)
* Modulus Operator (`%`)
* Timers (`setInterval`)

---

## 🚧 Challenges Faced

* ⚠️ Correctly detecting multiples of 10
* ⚠️ Updating UI dynamically

✔ Solved using:

* Modulus operator (`count % 10`)
* Proper state update

---

## ⚠️ Common Mistake

❌ Using:

```javascript id="mistake2"
cnt.textContent % 10 == 0
```

✔ Correct:

```javascript id="correct2"
count % 10 == 0
```

---

## 📈 Future Improvements

* 🎬 Add animation effect on number change
* 🎨 Color change on milestones
* 🔁 Reset button
* ⏸️ Pause/Resume feature
* 🔊 Add sound on multiples of 10

---

## 🤝 Contributing

```bash id="countercontri"
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
