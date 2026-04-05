
# 🎭 Toggle Visibility Image Slider (JavaScript)

A dynamic **JavaScript project** that toggles visibility of a container while cycling through **background images and text (quotes)** at regular intervals.

This project combines **visibility control + slideshow logic** to create a simple animated UI effect.

---

## 🚀 Features

* 🔁 Auto toggle (show/hide) effect
* 🖼️ Background image slider
* 📝 Dynamic text/quote updates
* ⏱️ Interval-based animation
* 🎯 Clean UI with centered layout
* 🧠 Beginner-friendly logic

---

## 📸 Preview

> 📷 ![alt text](<screenshot/Screen Recording 2026-04-05 223748.gif>)

![alt text](<screenshot/Screenshot 2026-04-05 224625.png>)

![ j](<screenshot/Screenshot 2026-04-05 225941.png>)



---

## 🛠️ Tech Stack

| Technology     | Usage                 |
| -------------- | --------------------- |
| **HTML5**      | Structure             |
| **CSS3**       | Styling & layout      |
| **JavaScript** | Toggle & slider logic |

---

## 📂 Project Structure

```id="togglestruct"
├── index.html     # Main project file
├── images/        # Image assets (anime1, anime3, Neon)
└── readme.md      # Documentation
```

---

## ⚙️ How It Works

* On page load:

  * Script initializes images and text arrays

* Every **1.5 seconds (`setInterval`)**:

  * Toggles visibility (show/hide)
  * If visible:

    * Updates background image
    * Updates text
    * Moves to next index
  * If hidden:

    * Hides both image box and text

---

## ▶️ How to Run

1. Clone the repository

```bash id="togglerun"
git clone https://github.com/kriyanshkirito/javascript_automation_efffect_and_javascript_bots.git
```

2. Open `index.html` in your browser

---

## 🎯 Customization

You can easily modify:

* 🖼️ Images → update `images[]` paths
* 📝 Text → edit `slo[]` array
* ⏱️ Speed → change `1500 ms`
* 📏 Size → adjust box width/height
* 🎨 Styles → update CSS

---

## 💡 Key Concepts Used

* DOM Manipulation
* `setInterval()` timing
* State toggling (`visible` flag)
* Array indexing & looping
* Dynamic styling (`backgroundImage`)

---

## 🚧 Challenges Faced

* ⚠️ Syncing image and text together
* ⚠️ Handling toggle visibility smoothly

✔ Solved using:

* Boolean state (`visible`)
* Modular index update

---

## 📈 Future Improvements

* 🎬 Add fade-in / fade-out animation
* ⏸️ Pause/Resume feature
* 🎯 Manual controls (Next/Previous buttons)
* 📱 Mobile responsive design
* 🌈 Add transition effects

---

## ⚠️ Common Mistakes

* Wrong image path → images not loading
* Forgetting modulo (`%`) → index out of range
* Using `display:none` without restoring layout

---

## 🤝 Contributing

```bash id="togglecontri"
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

