window.addEventListener("load",()=>{
    document.getElementById("botonContenedor").addEventListener("click",
    ()=>{
      alert("Holas");
    })
    var imagenRotativa = document.getElementById('imagen-rotativa');
    var imagenes = imagenRotativa.getElementsByTagName('img');
    var indice = 0;    
    setInterval(() => {
      imagenes[indice].style.opacity = 0;
      indice = (indice + 1);
      if(indice==imagenes.length){
        indice=0;
      }
      imagenes[indice].style.opacity = 1;
    }, 3000);
    
  })

