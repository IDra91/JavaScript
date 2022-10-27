class Persona{
    constructor(nombre, instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
}

const data = [
    ["Mariano","@mariANO"],
    ["Roxana","@roxi69"],
    ["Conejo Rancio","@cRancio34"],
    ["Camila Nesa","@kmilAneSa"],

];
const personas = [];
for(var i = 0; i < data.length; i++){
    personas[i] = new Persona(data[i][0],data[i][1]);
}

const obtenerPersona = (id)=>{
    return new Promise((res,rej)=>{
        if(personas[id].instagram == undefined){
            rej("No se ha encontrado la persona");
        }else{
            res(personas[id]);
        }
    })
}
const obtenerInstagram = (id)=>{
    return new Promise((res,rej)=>{
        if(personas[id].instagram == undefined){
            rej("No se ha encontrado el instagram de la persona");
        }else{
            res(personas[id].instagram);
        }
    })
}

obtenerPersona(1).then((persona)=>{
    console.log(persona.nombre);
    obtenerInstagram(1).then((instagram)=>{
        console.log(persona.instagram);
    });
}).catch((e)=>{
    console.log(e);
})
/*
persona = new Persona("Mariano","@mariANO");

console.log(persona);
*/
/*function prueba(callback){
    callback("roberto, el que te dejó el culo abierto");
}

function decirNombre(nombre){
    console.log(nombre);
}

prueba(decirNombre)*/
/*
let nombre = "Papa";
const promesa = new Promise((resolve,reject)=>{
    if (nombre !== "Papa") reject("Lo siento, el nombre no es papa")
        else resolve(nombre)   
    
})

promesa.then((resultado)=>{
    console.log(resultado);
}).catch((e)=>{
    console.log(e);
})*/

/*class Persona{
    constructor(nombre, instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
}

const data = [
    ["Mariano","@mariANO"],
    ["Roxana","@roxi69"],
    ["Conejo Rancio","@cRancio34"],
    ["Camila Nesa","@kmilAneSa"],

];
const personas = [];
for(var i = 0; i < data.length; i++){
    personas[i] = new Persona(data[i][0],data[i][1]);
}

const obtenerPersona = (id,cb)=>{
    if(personas[id] == undefined){
        cb("No se ha encontrado la persona");
    }else{
        cb(null,personas[id]);
    }
}

obtenerPersona(1,(err,persona)=>{
    if(err){
        console.log(err)
    } else{
        console.log(persona);
    }
})*/