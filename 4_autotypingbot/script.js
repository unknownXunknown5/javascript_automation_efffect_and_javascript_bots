const input=document.getElementById("input"); 
const text="Hello I Am BoboiBoy's Autobot";
let i=0;
const typeBot=setInterval(() => {
    if(i<text.length){
        input.value+=text.charAt(i);
        i++;
    }else{
        clearInterval(typeBot)
    }
    
}, 90);