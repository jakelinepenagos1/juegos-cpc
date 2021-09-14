let calcular=document.getElementById("2");
let gif=document.getElementById("3");
let gif2=document.getElementById("4");

calcular.addEventListener("click",verificarRespuesta);

function verificarRespuesta(){
    

    let numero1=document.getElementById("numero1").value;
    let numero2=document.getElementById("numero2").value;
    let resultado=document.getElementById("resultado").value;

    let calcularResultado= Number(numero1)+Number(numero2);
    
    if(resultado==calcularResultado){

        console.log("ok");
        gif.classList.add("visible");
        gif.classList.remove("invisible");


    }else{

        console.log("ojo");
        gif2.classList.add("visible");
        gif2.classList.remove("invisible");

    }




}
