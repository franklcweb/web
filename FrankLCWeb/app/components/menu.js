export function Menu(){
    const $menu = document.createElement("nav");
    $menu.classList.add("menu");
    $menu.innerHTML = `
       
    <div class="enlaces">
      <a href="#/">Inicio</a>
      
      <a href="#/servicios">Servicios</a>
      
      <a href="#/portafolio">Portafolio</a>
      
      <a href="#/contacto">Contacto</a>
    </div>
    <div class="hamburguesa">
    <i class='bx bx-menu' id=hamburguesa></i>
    </div>
 
  `
/*

//////////////////MENU RESPONSIVO////////////////////
//obtengo los elementos por class y ID
const enlaces = document.getElementsByClassName("enlaces")[0];
const hamburguesa = document.getElementsByClassName("hamburguesa");
const menuHamburguesa = document.getElementById("hamburguesa");

let abierto = false;

//funcion para cabiarle la clase a los enlaces
const toggleMenu = () => {
    enlaces.classList.toggle("enlaces2");
    
}

//llamo  a la funcion con un event listener
hamburguesa.addEventListener("click", function(){
    toggleMenu();
    //saber si el menu esta abierto-cuando tiene las dos clases
    if(document.querySelector(".enlaces.enlaces2")){
        abierto=true;
    }else{
        abierto=false;
    }
})

//creo funcion para que el menu cierre al hacer click en otra zona de la pantalla 
window.addEventListener("click", function(e){
    
    if(abierto){
        if(e.target !== menuHamburguesa){
            toggleMenu();
            abierto=false;
        }
    }
})

*/


    
return $menu;


}