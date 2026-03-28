const carousel=document.getElementById('carousel'); // select element with id carousel
let scrollPos=0;   // keep the track how far we have scrolled start from begn from left = 0px
setInterval(() => {   // function runs every three second;
    scrollPos+=400; // move scroll by 400 pixels 
    if(scrollPos>=carousel.scrollWidth) scrollPos=0;  // scrollWidth is total content inside when it reaches end reset to start
    carousel.scrollTo({left:scrollPos,behaviour:'smooth'}); // scroll horizontally to scroll position
    
},2000);  // scroll after every 2 sec