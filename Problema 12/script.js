const materiasHTML = document.querySelector(".materias");

const materias = [
    {
        nombre: "Física 1",
        nota: 90
    },
    {
        nombre: "Cálculo 2",
        nota: 78
    },
    {
        nombre: "Química 1",
        nota: 61
    },
    {
        nombre: "Programación 1",
        nota: 100
    },
    {
        nombre: "Contabilidad 1",
        nota: 61
    }
]

const obtenerMateria = (id)=>{
    return new Promise((res,rej)=>{
        materia = materias[id];
        if(materia == undefined) rej("La materia no existen");
        else setTimeout(()=>{res(materia)},Math.random()*400);
    })
    
}
const devolverMaterias = async()=>{
    let materia = [];
    for (let i=0; i< materias.length; i++){
        materia[i] = await obtenerMateria(i);
        let nuevoHTMLCode = `
        <div class="materia">
        <div class="nombre">${materia[i].nombre}</div>
        <div class="nota">${materia[i].nota}</div>
    </div>`;
    materiasHTML.innerHTML += nuevoHTMLCode;
    }
}

devolverMaterias();