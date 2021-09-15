

let calcular=document.getElementById("2");
let gif=document.getElementById("3");
let siguiente=document.getElementById("4");


calcular.addEventListener("click",verificarRespuesta);   
siguiente.addEventListener("click",numerosAlzar);



function verificarRespuesta(){
    

    let numero1=document.getElementById("numero1").value;
    let numero2=document.getElementById("numero2").value;
    let resultado=document.getElementById("resultado").value;

    let calcularResultado= Number(numero1)+Number(numero2);
    
    if(resultado==calcularResultado){

        console.log("ok");
        gif.src="https://giphy.com/embed/l0MYKDrj6SXHz8YYU";
        gif.classList.remove("invisible");


    }
    else{

        console.log("ojo");
        
        gif.src="https://giphy.com/embed/1wnqG7rvm1fvHqyelX";
        gif.classList.remove("invisible");


    }


}

function numerosAlzar(){

    gif.classList.add("invisible");
    numero1.value=getRandomInt(1,10) ;
    numero2.value=getRandomInt(1,10);
    
 
}
function getRandomInt(min, max,) {
    return Math.floor(Math.random() * (max - min)) + min;
    
  }


 
