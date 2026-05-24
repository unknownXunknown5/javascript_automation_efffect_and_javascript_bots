const bar=document.getElementById("bar");
let width=0;
const interval=setInterval(() => {
    width:0;
    bar.style.width=width+'%';
    if(width>=100) clearInterval(interval);
    
}, 100);