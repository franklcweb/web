import { Inicio } from "./Inicio.js";
import { Servicios } from "./Servicios.js";
import { Portafolio } from "./Portafolio.js";
import { ContactForm } from "./ContactForm.js";

Portafolio
//Enrutamiento
export async function Router(){
  const d = document,
  w = window,
  $main = document.getElementById("main");
  
  let {hash} = location; 

   $main.innerHTML = null;

  if (!hash || hash === "#/"){ //contenido home
    $main.appendChild(Inicio());

  } else if (hash === "#/servicios") { //contenido servicios
    
    $main.appendChild(Servicios());
  
  } else if (hash.includes("#/portafolio")) { //contenido portafolio
    
    $main.appendChild(Portafolio());
  
  } else if (hash === "#/contacto") {  //contenido contacto
    $main.appendChild(ContactForm());   
  } else { 
              $main.appendChild(Inicio()); 
                
    };
    d.querySelector(".loader").style.display = "none";//ocultar loader
  };
  
