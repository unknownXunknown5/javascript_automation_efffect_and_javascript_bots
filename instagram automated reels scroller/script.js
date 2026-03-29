const scrollBot = setInterval(() => {
  // Find the button that has the label "Navigate to next Reel"
  const nextButton = document.querySelector('div[aria-label="Navigate to next Reel"]');

  if (nextButton) {
    nextButton.click();
    console.log("Clicked next Reel!");
  } else {
    console.log("Button not found. Make sure the Reel is active.");
  }
}, 25000)  // this timer  paste this code in console and reel will we scroll at interval of 25 sec (if set 5000 then at interval of 5 sec)
// but when you first paste output will come undefined but that will be okay beacause it is now activated

/*for end the automatic function use
for(let i=o;i<9999;i++){
windows.clearInterval(i);
}



*/