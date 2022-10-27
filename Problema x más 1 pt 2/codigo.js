alumnos = [{
    nombre: "Mi Mami",
    email: "mimami@gmail.com",
    materia: "fisica2"
},{
    nombre: "Johnny Joestar",
    email: "johnnyjo88@gmail.com",
    materia: "Química"
},{
    nombre: "Fugo",
    email: "fugo676@gmail.com",
    materia: "Filosofía Avanzada"
},{
    nombre: "Edward",
    email: "edward2mami@gmail.com",
    materia: "Biología"
},{
    nombre: "Amber",
    email: "amber69bitch@gmail.com",
    materia: "MateBásica"
}];
const boton = document.querySelector(".confirmar-boton");
const contenedor = document.querySelector(".grid-container");
 

for(alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email = datos["email"];
    let materia = datos["materia"];
    let htmlCode = `
    <div class="grid-item nombre"> ${nombre} </div>
    <div class="grid-item email">${email}</div>
    <div clas="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>`;
        contenedor.innerHTML+= htmlCode;
}

boton.addEventListener("click",()=>{
    let confirmar = confirm("¿Realmente deseas confirmar estas mesas?");
    if(confirmar){
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
     let semanasElegidas = document.querySelectorAll(".semana-elegida");
     for (papa in elementos){
         semana = elementos[papa];
         semana.innerHTML = semanasElegidas[papa].value;
     }
    }
 });
