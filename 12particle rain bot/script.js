const c=document.getElementById("rain").getContext('2d');
const drops=[];
for (let i =0 ;i<200;i++) drops.push({x:Math.random()*1920,y:Math.random()*1080,speed:Math.random()*5+2});
    

function rain(){
    c.clearRect(0,0,1920,1080);
    c.fillStyle='#00f';
    drops.forEach(d=>{
        c.fillRect(d.x,d.y,4,9);
        d.y+=d.speed;
        if(d.y>1090) d.y=0;
    });
    requestAnimationFrame(rain);
}
rain();


