


# 🤖 Form Filling Bot (JavaScript Automation)

A simple automation project that **auto-fills form inputs using JavaScript** as soon as the page loads.
This demonstrates how bots can interact with web forms using **DOM manipulation and event handling**.

---

## 🚀 Features

* ⚡ Auto-fills form fields instantly
* 🧠 Uses `DOMContentLoaded` for safe execution
* 🎯 Simulates real user input
* 🔔 Button click interaction with alert
* 🪶 Lightweight and beginner-friendly

---

## 📸 Preview

> 📷 ![alt text](<Screenshot 2026-04-04 201349.png>)

---

## 🛠️ Tech Stack

| Technology     | Usage            |
| -------------- | ---------------- |
| **HTML5**      | Form structure   |
| **CSS3**       | Styling          |
| **JavaScript** | Automation logic |

---

## 📂 Project Structure

```id="formstruct"
├── index.html     # Complete project (HTML + CSS + JS)
├── readme.md      # Documentation
```

---

## ⚙️ How It Works

* When page loads (`DOMContentLoaded`):

  * Script automatically fills:

    * Name
    * Email
    * Age

* When user clicks **Submit**:

  * Alert message is triggered

---

## 💻 Core Logic

```javascript id="formcore"
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('name').value = "bot";
    document.getElementById('email').value = "bot@gmail.com";
    document.getElementById('age').value = "22";

    document.getElementById('btn').addEventListener('click', () => {
        alert("form submitted");
    });
});
```
git clone https://github.com/kriyanshkirito/javascript_automation_efffect_and_javascript_bots.git
---

## ▶️ How to Run

1. Clone the repository

```bash id="formrun"
git clone 
```

2. Open `index.html` in your browser

---

## 🎯 Use Cases

* 🧪 Testing forms quickly
* 🤖 Basic browser automation learning
* ⚡ Saving time in repetitive input tasks
* 🎓 Beginner JavaScript practice

---

## 💡 Key Concepts Used

* DOM Manipulation (`getElementById`)
* Event Handling (`addEventListener`)
* Page Load Event (`DOMContentLoaded`)
* Form Interaction

---

## 🚧 Challenges Faced

* ⚠️ Ensuring script runs after DOM loads
  ✔ Solved using `DOMContentLoaded`

---

## 📈 Future Improvements

* 🧠 Dynamic input (random data generator)
* 🔐 Form validation
* 📊 Store submitted data
* 🌐 Integrate with backend
* 🤖 Smart autofill using user behavior

---

## ⚠️ Common Mistakes

* Forgetting `DOMContentLoaded` → script runs before elements load
* Wrong element IDs
* Not preventing default form submission

---

## 🤝 Contributing

```bash id="formcontri"
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


