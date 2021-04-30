import { footer } from "./components/footer.js";
import { Header } from "./components/Header.js"
import {Loader} from "./components/Loader.js"
import { Main } from "./components/Main.js";
import { Router } from "./components/Router.js";




export function App(){
    const $root = document.getElementById("root");
    
    $root.innerHTML = null; //limpiar contenido para que no se duplique
    
    $root.appendChild(Header());
    $root.appendChild(Main());
    $root.appendChild(Loader());
    $root.appendChild(footer())
    Router();
    
    
   
    }
 
