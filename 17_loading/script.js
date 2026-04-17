let angle=0;
const spinner=document.getElementById('spinner');
function rotate(){
    angle+=4;
    spinner.style.transform=`rotate(${angle}deg)`
    requestAnimationFrame(rotate)

}
rotate()