
let contador=0;
let malo=0;
let calcular=document.getElementById("2");
let gif=document.getElementById("3");
let siguiente=document.getElementById("4");
let terminar=document.getElementById("terminar")


calcular.addEventListener("click",verificarRespuesta);   
siguiente.addEventListener("click",numerosAlzar);
terminar.addEventListener("click",finalizar);



function verificarRespuesta(){
    

    let numero1=document.getElementById("numero1").value;
    let numero2=document.getElementById("numero2").value;
    let resultado=document.getElementById("resultado").value;
    
    let calcularResultado= Number(numero1)+Number(numero2);
    
    if(resultado==calcularResultado){

        console.log("ok");
        gif.classList.remove("invisible");
        contador=contador+1;
        console.log(contador)

        gif.src="https://giphy.com/embed/l0MYKDrj6SXHz8YYU";
        setTimeout(function(){
            gif.src="";
            gif.classList.remove("invisible");
            gif.classList.add("invisible");
            
        },5000)



    }
    else{

        console.log("ojo");
        gif.classList.remove("invisible");
        malo=malo+1;
        console.log(malo)
        gif.src="https://giphy.com/embed/1wnqG7rvm1fvHqyelX";
        setTimeout(function(){
            gif.src="";
            gif.classList.remove("invisible");
            gif.classList.add("invisible");
            
        },5000)


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

  function finalizar(){

    let trofeo=document.getElementById("trofeo")
    trofeo.classList.remove("invisible");
    trofeo.classList.add("visible")
    console.log("hola")

    let titulo1=document.getElementById("buenas");
    let titulo2=document.getElementById("malas");

    titulo1.textContent=contador;
    titulo2.textContent=malo;


    trofeo.src="https://giphy.com/embed/9xt1MUZqkneFiWrAAD"

    setTimeout(function(){
      
       trofeo.classList.remove("visible");
    trofeo.classList.add("invisible")
    titulo1.classList.remove("visible");
    titulo1.classList.add("invisible")
    titulo1.textContent="";
    titulo2.textContent="";

    },5000)

  }

 
