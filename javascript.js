let button=document.getElementById('button')
let form=document.getElementById('form')
let message=document.getElementById('message')
let link=document.getElementById('link')

const scretNumero=Math.floor(Math.random()*100);
let attempts=7 ;

button.onclick=function(){
    const input = document.getElementById("input");
    if(input.value != ""){
        if(input.value < scretNumero){
            message.innerText = 'Le nombre est plus grand que '+ input.value +'';
            message.style.color="gray"
        }
        else if(input.value>scretNumero){
            message.innerText = 'Le nombre est plus petit que ' + input.value +'';
            message.style.color ="gray"
        }
        if(attempts == 0){
            message.innerText = 'Vous avez perdu,le nombre était :' + scretNumero +'';
            message.style.color='red'
            message.style.fontSize="18"
            form.style.display='none';
            link.style.display='flex'
        }
        attempts--;

        if(input.value == scretNumero){
            message.innerText = 'Bravo, Vous avez trouvé le nombre qui est ' +scretNumero+''
            message.style.color='springgreen'
            message.style.fontSize="18"
            form.style.display='none';
            link.style.display='flex'
        }
    }
    else{
        message.innerText = "Le champ est vide !";
        message.style.color ="blue";
    }
    // vider le champ pour chaque saisie
    input.value="";
    
}