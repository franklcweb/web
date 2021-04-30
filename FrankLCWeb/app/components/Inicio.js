export function Inicio(){
    const d = document,
    $inicio = d.createElement("section");
    
  
    $inicio.innerHTML = `
    
        <h1>Programador web</h1>
            <p class="subtitulo">Hago sitios y aplicaciones web</p>
            <div class="grid">
                <div class="card">
                    <img src="./app/assets/1.svg"></img>
                    <h3>Programación Front-end</h3>
                    <p>Sitios web hechos con optima experiencia de usuario para
                    lograr tus objetivos.</p>
                    <a class="boton2" href="#/servicios">ver más...</a>
                </div>
                <div class="card">
                <img src="./app/assets/2.svg"></img>
                    <h3>Rendimiento, SEO & accesibilidad</h3>
                    <p>Tu sitio web rápido, facil de encontrar y alcanza la mayor
                    audiencia posible.</p>
                    <a class="boton2" href="#/servicios">ver más...</a>
                </div>
                <div class="card">
                <img src="./app/assets/3.svg"></img>
                    <h3>Responsivo</h3>
                    <p>tu sitio web debe adaptarse a todos los dispositivos que se
                    usan en la actualidad.</p>
                    <a class="boton2" href="#/servicios">ver más...</a>
                </div>
        </div>
        <div class="container">
            <a class="boton" href="#/servicios">Todos los servicios...</a>
        </div>
        <div class="container">
    <div class="tecnologias">
    <figure>
        <i class='bx bxl-html5'></i>
        <figcaption>HTML5</figcaption>
    </figure>
    <figure>
    <i class='bx bxl-css3' ></i>
    <figcaption>CSS3</figcaption>
</figure>
<figure>
<i class='bx bxl-javascript' ></i>
<figcaption>Javascript</figcaption>
</figure>
<figure>
<i class='bx bxl-bootstrap' ></i>
<figcaption>Bootstrap</figcaption>
</figure>
<figure>
<i class='bx bxl-wordpress' ></i>
<figcaption>Wordpress</figcaption>
</figure>
<figure>
<i class='bx bxl-git' ></i>
<figcaption>Git</figcaption>
</figure>
<figure>
<i class='bx bxl-github' ></i>
<figcaption>Github</figcaption>
</figure>
<figure>
<i class='bx bxl-figma' ></i>
        <figcaption>Figma</figcaption>
</figure>
<figure>
<i class='bx bxl-jquery' ></i>
<figcaption>Jquery</figcaption>
</figure>
<figure>

       
       
       
       
       
       
        
       
       
    </div>
        </div>
        
        <h2>Acerca</h2>
    <div class="grid-2">
        <div class="foto"> 
        <img src="./app/assets/3.svg"></img>
        </div>

        <div class="card">    
            <p >Mi nombre es Francisco Ricardo Lucero Castillo, aunque todos me dicen Frank. Soy diseñador y desarrollador front-end freelance. Soy de la ciudad de México.
            Creo sitios web a medida para ayudar a las personas a tener una presencia digital profesional.</p>
        </div>
        
        </div>
        <div class="container">
            <a class="boton" href="#/portafolio">Ver Portafolio...</a>
        </div>
   
    
   
   
    `
    
    



   return $inicio;
}