const follower=document.getElementById("follower");  // select element with id follower
document.addEventListener('mousemove',(e)=>{   // mousemove is inbuilt predefined function like click,keydown,scroll but e the paramenter we pass ( we are telling whenever mousemoves happen call this function and give me the event data)
    follower.style.left=(e.clientX-15)+'px'; // mouse X postion 
    follower.style.top=(e.clientY-15)+'px'; // mouse y position

});