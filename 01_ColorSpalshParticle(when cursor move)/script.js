
const conatiner=document.getElementById("trail-container"); // Select html element on whom we have to add this effect;
document.addEventListener('mousemove',(e)=>{         // add event  listner to whole page ,runs function every time mouse moves ,e points to object
    const particle=document.createElement('div');  // create new div element for particle(new dot dot is going to be made when set border radius 50%)
    particle.style.position='absolute';           //allow fre placement anywhere; 
    particle.style.left=e.clientX+'px';           // mouse X postion 
    particle.style.top=e.clientY+'px';            //mouse y postion
    particle.style.width='8px';                   // set div score so we can made in dot
    particle.style.height='8px';
    particle.style.background=`hsl(${Math.random()*360},100%,50%)`; /// math.random()*360 genrate random hue color whee
    particle.style.borderRadius='50%';    //   converts sqaure into circle dot
    particle.style.opacity='1';        // particle slighty tarnparent so look softer and smoother
    conatiner.appendChild(particle);     // insert partcle into container now visible on the screen
    particle.animate([
        { transform:'translateY(0px)',opacity:1},  // start from normal postion, visble
        { transform:'translateX(-80px)',opacity:0}    // moves upward and fade out
    ],{duration:800,easing:'ease-out'});     // slows down at end  duration 800 ms

    setTimeout(()=> particle.remove(),800);  
}
);
