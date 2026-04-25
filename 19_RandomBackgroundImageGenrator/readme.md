
---

# 🖼️ Auto Refresh Image Slider (Preloaded Images)

A lightweight **JavaScript background image slider** that preloads images, cycles through them smoothly, and then **auto-refreshes the page** to load a new set of images.

This project demonstrates **image preloading, timed transitions, and page refresh automation**.

---

## 🚀 Features

* 🖼️ Fullscreen background image slider
* ⚡ Preloads images for smooth transitions
* 🔄 Automatic cycling through images
* ♻️ Auto-refresh after completing cycle
* 🌐 Uses random images from Picsum API
* 🧠 Simple and efficient logic

---

## 📸 Preview

> 📷 
<video controls src="Screen Recording 2026-04-25 195145.mp4" title="Title"></video>
---

## 🛠️ Tech Stack

| Technology     | Usage                         |
| -------------- | ----------------------------- |
| **HTML5**      | Structure                     |
| **CSS3**       | Fullscreen background styling |
| **JavaScript** | Image logic & automation      |

---

## 📂 Project Structure

```id="imgstruct"
├── index.html     # Complete project (HTML + CSS + JS)
└── readme.md      # Documentation
```

---

## ⚙️ How It Works

### 🔹 Step 1: Define Image URLs

* Uses random images from Picsum API

---

### 🔹 Step 2: Preload Images

* Creates `Image()` objects
* Loads images into memory before display

---

### 🔹 Step 3: Display Images

* Changes background every **1 second**
* Uses `setInterval()`

---

### 🔹 Step 4: Auto Refresh

* After all images are shown:

  * Stops interval
  * Reloads page
  * Fetches new images

---

## 💻 Core Logic

```javascript id="imgcore"
const interval = setInterval(() => {
  document.body.style.backgroundImage = `url(${images[i].src})`;
  i++;

  if (i >= images.length) {
    clearInterval(interval);
    setTimeout(() => {
      location.reload();
    }, 0);
  }
}, 1000);
```

---

## ▶️ How to Run

1. Clone the repository

```bash id="imgrun"
git clone 
```

2. Open `index.html` in your browser

---

## 🎯 Customization

You can modify:

* ⏱️ Interval → change `1000 ms`
* 🖼️ Number of images → update `urls[]`
* 🌐 Image source → replace Picsum API
* ♻️ Refresh delay → change `setTimeout()`
* 🎨 Add transitions (fade effect using CSS)

---

## 💡 Key Concepts Used

* Image Preloading (`new Image()`)
* Timers (`setInterval`, `setTimeout`)
* DOM Manipulation (`style.backgroundImage`)
* Page Reload (`location.reload`)

---

## 🚧 Challenges Faced

* ⚠️ Image flickering
  ✔ Solved using preloading

* ⚠️ Smooth transitions
  ✔ Managed via controlled timing

---

## ⚠️ Improvements

❗ Current behavior:

* Instant refresh (`0 ms`)

✔ Better UX:

```javascript id="imgfix"
setTimeout(() => {
  location.reload();
}, 1000);
```

---

## 📈 Future Improvements

* 🎬 Add fade/transition effects
* ⏸️ Pause/Resume controls
* 🎯 Manual navigation buttons
* 🌈 Add overlay text or UI
* 📱 Responsive enhancements

---

## 🤝 Contributing

```bash id="imgcontri"
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

