export function Portafolio(){
    const d = document,
    $portafolio = d.createElement("section");
   
    $portafolio.innerHTML = `
    
     <h2>Portafolio</h2>

     <div class="card">
          <img src="./app/assets/portafolio/01.png"></img>
          <a class="boton" target="_blank href="#">Visitar</a>
     </div>
     <div class="card">
          <img src="./app/assets/portafolio/02.png"></img>
          <a class="boton" target="_blank href="#">Visitar</a>
     </div>
     <div class="card">
          <img src="./app/assets/portafolio/03.png"></img>
          <a class="boton" target="_blank href="#">Visitar</a>
     </div>
     <div class="card">
          <img src="./app/assets/portafolio/04.png"></img>
          <a class="boton" target="_blank href="#">Visitar</a>
     </div>
     <div class="card">
          <img src="./app/assets/portafolio/05.png"></img>
          <a class="boton" target="_blank href="#">Visitar</a>
     </div>
     
     
    `

   return $portafolio;
}