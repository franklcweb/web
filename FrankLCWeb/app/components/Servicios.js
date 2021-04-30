export function Servicios(){
    const d = document,
    $servicios = d.createElement("section");
   
    $servicios.innerHTML = `
    
     <h2>Servicios</h2>
     <div class="grid-2">
                <div class="card">
                    <img src="./app/assets/4.svg"></img>
                    <h3>One page</h3>
                    <p>Toda la información se encuentra en la misma vista, al navegar la página se desplaza por las secciones.</p>
                    <p>Este tipo de páginas se usan generalmente para portafolios, sitios personales o landing pages.</p>
                </div>
                <div class="card">
                <img src="./app/assets/5.svg"></img>
                    <h3>Single page aplication</h3>
                    <p>Todo el contenido carga dinamicamente desde el inicio, pero las secciones son vistas que aparecen una vez que usamos el menú de navegación, lo que la hace más fluida y rápida</p>
                    <p>Esta página es un ejemplo de SPA (Single page aplication).</p>
                </div>
                <div class="card">
                <img src="./app/assets/6.svg"></img>
                    <h3>Blog</h3>
                    <p>Realiza publicaciones comodamente con Wordpress, yo me encargo de que aparezcan en una pagina con diseño original y una sección de blog.</p>
                </div>
                <div class="card">
                    <img src="./app/assets/7.svg"></img>
                    <h3>Tienda online</h3>
                    <p>Programo tu página para que tengas un catalogo de productos administrable.</p>
                    <p>Vende productos con pagos unicos o servicios con suscripciones.</p>
                </div>
                <div class="card">
                <img src="./app/assets/8.svg"></img>
                    <h3>Sitio web corporativo</h3>
                    <p>Muestra tus servicios en un sitio web con diseño original y profesional.</p>
                </div>
                <div class="card">
                <img src="./app/assets/9.svg"></img>
                    <h3>Portafolio</h3>
                    <p>¿Eres artista, diseñador/a, fotograf@?</p>
                    <p>Puedes tener un portafolio profesional, una galería con filtro por categorías.</p>
                </div>
                
        </div>
        <h2>Funcionalidades</h2>

        <div class="grid-3">
        <div class="card">
            <img src="./app/assets/10.svg"></img>
                <h3>Responsivo</h3>
                
            </div>
            <div class="card">
            <img src="./app/assets/11.svg"></img>
                <h3>Formulario</h3>
                
            </div>
            <div class="card">
            <img src="./app/assets/12.svg"></img>
                <h3>Version light/dark</h3>
               
            </div>
            <div class="card">
            <img src="./app/assets/13.svg"></img>
                <h3>Animaciones</h3>
                
            </div>
            <div class="card">
            <img src="./app/assets/14.svg"></img>
                <h3>Pagos Online</h3>
                
            </div>
            <div class="card">
            <img src="./app/assets/15.svg"></img>
                <h3>Buscador</h3>
            </div>
            <div class="card">
            <img src="./app/assets/16.svg"></img>
                <h3>Registro de usuarios</h3>
            </div>
            <div class="card">
            <img src="./app/assets/17.svg"></img>
                <h3>Galería</h3>
            </div>
            <div class="card">
            <img src="./app/assets/18.svg"></img>
                <h3>Slider</h3>
            </div>
            <div class="card">
            <img src="./app/assets/19.svg"></img>
                <h3>Traducción</h3>
            </div>
            <div class="card">
            <img src="./app/assets/20.svg"></img>
                <h3>Aviso de cookies</h3>
            </div>
            <div class="card">
            <img src="./app/assets/21.svg"></img>
                <h3>Chat bot</h3>
            </div>
            <div class="card">
            <img src="./app/assets/22.svg"></img>
                <h3>Chat directo</h3>
            </div>
            <div class="card">
            <img src="./app/assets/23.svg"></img>
                <h3>Google analytics</h3>
            </div>

            
            





        </div>



        <div class="container">
                <a class="boton" href="#/contacto">Cuentame de tu proyecto</a>
                </div>
    
    `

   return $servicios;
}