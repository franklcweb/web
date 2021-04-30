export function ContactForm(){
    const d = document,
    $form = d.createElement("section");
   



    $form.classList.add("contact-form");
    
    


    $form.innerHTML = `
    
    <h1>Contacto</h1>
    <p>Envíame un mensaje general o los detalles de tu proyecto y me pondré en contacto lo antes posible.</p>
    
    <div class="grid">
    
        <div class="card">
        <a href="mailto:franklucadi@gmail.com" target="_blank"><i class='bx bx-envelope-open'></i></a>
        <a href="mailto:franklucadi@gmail.com" target="_blank"> franklcweb@gmail.com</a>
        

        
        <a href="tel:5613199265" target="_blank"><i class='bx bx-phone'></i></a>
        <a href="tel:5613199265" target="_blank">56 1319 9265</a>
         

         
         <a href="https://api.whatsapp.com/send?phone=525516322920" target="_blank"><i class='bx bxl-whatsapp'></i></a>
         <a href="https://api.whatsapp.com/send?phone=525613199265" target="_blank">Enviar Mensaje</a>
        

       
        <a href="https://www.linkedin.com/in/franlcweb" target="_blank"><i class='bx bxl-linkedin-square'></i></a>
        <a href="https://www.linkedin.com/in/franlcweb" target="_blank"> /franklcweb</a>
         </div>

    


    <div class="card">
    
    
    <form class="contact-form">
     <input type="text" name="nombre" placeholder="Escribe tu nombre" id="nombre"  required/>
     <input type="email" name="email" placeholder="Escribe tu correo electronico" id="email" required/>
     <input type="text" name="asunto" placeholder="Escribe un asunto" id="asunto"  required/>
     <textarea name="mensaje" placeholder="Escribe tu mensaje" id="mensaje" cols="30" rows="10" required></textarea>
     <input type="submit" value="Enviar" id="enviar"/>
     <input type="reset" value="Borrar" id="borrar"/>
     </form>

    <p id="resultado"></p>
    </div>
   </div>
    `

   

    

    

    return $form;
}

function SendForm(){

    document.addEventListener("submit", (e)=> {
        e.preventDefault();

        fetch("https://formsubmit.co/ajax/franklucadi@gmail.com",{
            method: "POST",
            body: new FormData(e.target)
        })
            .then(res=> res.ok ? res.json(): Promise.reject(res))
            .then(json=> {
               
               document.getElementsByTagName("input")[0].value = "";
               document.getElementsByTagName("input")[1].value = "";
               document.getElementsByTagName("input")[2].value = "";
               document.getElementsByTagName("textarea")[0].value = "";
              
                document.getElementById("resultado").innerHTML = "Gracias!! El mensaje se ha enviado"
            })
            .catch(err=>{
                console.log(err);
            })
    })

    
}
setTimeout(()=>SendForm(),100);
SendForm();