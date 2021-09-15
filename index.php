<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="hola.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous">

</head>
<body class="bg-dark">

<header>

</header>

<main>

<div class="container-fluid ">
    <div class="row">

    <div class="col-7">
    <div class="row ms-2 mt-5 p-3 text-center">
    <h1 class="titulo">BIENVENIDOS 😊 </h1>
    <h4 class="titulo">juegos</h4>

        <div class="col p-3">
        
        <input type="number" class="form-control caja text-center" id="numero1" value="1"  readonly placeholder="">
        </div>

        <div class="col p-3">
        
        <input type="text" class="form-control caja text-center" id="operacion" value="+" readonly placeholder="">
          </div>
    
        <div class="col p-3">
        
       <input type="number" class="form-control caja text-center" id="numero2"  value="3"  readonly placeholder="">
       </div>

       <div class="col  p-3">
        
        <input type="text" class="form-control caja text-center" id="texto2" value="="  readonly placeholder="">
          </div>

          <div class="col  p-3">
       
        <input type="number" class="form-control caja text-center" id="resultado" placeholder="">
          </div>
       
        <button type="button" class="btn btn-outline-success mt-5 p-3" id="2">2  </button>
    </div>
    </div>

    <div class="col-4 mt-5 p-3 align-self-center text-center">
    <img src="https://firebasestorage.googleapis.com/v0/b/juegos-cpc.appspot.com/o/imagen1.jpg?alt=media&token=fb0c2064-2708-443a-b8ae-dab746bc679b" alt="" class="img-fluid w-100 pa-2">
    <button type="button" class="btn btn-outline-light mt-5 p-3 ">siguiente ☺😀</button>
    </div>


    </div>
</div>

<div class="row">
                <div class="col-6 align-self-center ">
                    <iframe src="https://giphy.com/embed/l0MYKDrj6SXHz8YYU" width="480" height="270" id="3" frameBorder="0" class="giphy-embed invisible  " allowFullScreen></iframe>
                        
                </div>
            
            <div class="col-6">
            <iframe src="https://giphy.com/embed/1wnqG7rvm1fvHqyelX" width="280" height="280" frameBorder="0" id="4" class="giphy-embed invisible" allowFullScreen></iframe>
                       
                </div>
            </div>
        </div>

</main>

<footer>

</footer>
    <script src="controlador.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
</body>

</html>