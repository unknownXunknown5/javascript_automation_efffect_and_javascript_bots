   const terminal=document.getElementById("terminal");
        const messages=["Hello World","I am Js Bot","Welcome To Matrix"];
        let msgIndx=0,charIndx=0,isDeleting=false;
        function typeloop(){
            const current=messages[msgIndx];
            if(isDeleting){
                terminal.textContent=current.substring(0,charIndx--);
                if(charIndx<0) {isDeleting=false;msgIndx=(msgIndx+1)%messages.length;}
            }else{
                terminal.textContent=current.substring(0,charIndx++);
                if(charIndx>current.length) isDeleting=true;
            }
            setTimeout(typeloop,isDeleting?50:100);

        }
        typeloop();