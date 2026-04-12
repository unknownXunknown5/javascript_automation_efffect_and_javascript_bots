

---

# 🔄 Pagination Scraper using Tampermonkey (Browser Automation)

A **browser automation project** that navigates through paginated websites automatically using JavaScript.
This project solves the problem of **script reset on page reload** by using **Tampermonkey**, allowing persistent execution across pages.

---

## 🚀 Problem Statement

When running a scraping or automation script in the browser console:

* ❌ Script stops when page reloads
* ❌ State is lost on pagination
* ❌ Need to manually re-run script

---

## 💡 Solution

Use **Tampermonkey**

Tampermonkey allows you to:

* Inject JavaScript into webpages
* Automatically run scripts on page load
* Maintain behavior across pagination

---

## ⚙️ How It Works

1. Script runs on a webpage
2. Clicks **Next Page** automatically
3. Page reloads
4. Tampermonkey **re-runs the script automatically**
5. Process continues across all pages

---

## 🛠️ Tampermonkey Setup

### 1️⃣ Install Tampermonkey

* Go to Chrome Web Store
* Install **Tampermonkey** extension

---

### 2️⃣ Create New Script

* Click Tampermonkey icon
* Select **"Create a new script"**
* Paste your automation code

---

### 3️⃣ Configure Script

Example basic structure:

```javascript
// ==UserScript==
// @name         Pagination Scraper
// @match        *://example.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your scraping / automation logic here
})();
```

---

### 4️⃣ Save & Run

* Save the script
* Refresh the webpage
* Script runs automatically

---

## 📸 Project Preview

* 📷![alt text](<Screenshot 2026-04-12 230009.png>)


* 📷![alt text](<Screenshot 2026-04-12 231043.png>)


* 📷 ![alt text](<Screen Recording 2026-04-12 225424.gif>)

---

## 🧠 Key Concept

### 🔄 Persistence Across Pages

Normally:

* Script runs once → page reload → script lost

With Tampermonkey:

* Script attaches to page
* Runs on every load automatically

---

## 💻 Example Use Case

```javascript
const nextBtn = document.querySelector('.next');

if (nextBtn) {
    nextBtn.click();
}
```

---

## 🎯 Use Cases

* 📄 Pagination scraping
* 🤖 Form automation
* 🔁 Auto navigation bots
* 🧪 UI testing
* 📊 Data collection from multiple pages

---

## ⚠️ Important Notes

* Some websites block automation
* Avoid excessive requests (respect server limits)
* Always follow website terms of use

---

## 🚧 Challenges Faced

* ⚠️ Script stops on reload
* ⚠️ State loss

✔ Solved using Tampermonkey auto-execution

---

## 📈 Future Improvements

* 🧠 Add delay between page navigation
* 📊 Store scraped data (localStorage / backend)
* 🔐 Add login handling
* 🌐 Multi-site support

---

## 🤝 Contributing

```bash
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

## 🔥 Where Else You Can Use This

Beyond pagination, Tampermonkey can be used for:

* 🚀 Auto-fill forms
* 🎯 Modify website UI
* 🔄 Auto-click buttons
* 📥 Download automation
* 📊 Extract structured data

---

