// ==UserScript==
// @name         Google Page Jumper
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automates clicking to the next page
// @author       You
// @match        https://www.google.com/search*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // CONFIGURATION
  const targetPage = "100"; // Set this to the page number you want to reach
    const delay=3000;// 3 seconds wait so the page actually loads

    console.log("Tampermonkey active. Looking for Page: " + targetPage);

    setTimeout(() => {
        // This finds the link by looking at the text inside the pagination table
        let links = Array.from(document.querySelectorAll('td a'));
        let nextButton = links.find(el => el.textContent.trim() === targetPage);

        if (nextButton) {
            console.log("Found Page " + targetPage + ". Clicking now...");
            nextButton.click();
        } else {
            // If we aren't at the target yet, look for the "Next" (आगे बढ़ें) button
            let nextArrow = document.querySelector('#pnnext');
            if (nextArrow) {
                console.log("Target not visible yet. Clicking 'Next'...");
                nextArrow.click();
            } else {
                console.log("Could not find any navigation buttons.");
            }
        }
    }, delay);
})();

// this is script for Tamper monkey 
// go to tamper Monkey create New Script then clear all script which was present earlier and paste this on it