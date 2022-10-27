const objeto = [
    propiedad1 = "valor1",
    propiedad2 = "valor2",
    propiedad3 = "valor3"
]
  const obtenerInformacion = (text)=>{
      return new Promise((resolve,reject)=>{
          setTimeout(()=>{resolve(text)},Math.random()*200)
      })
  }  
/*
const obtenerInformacion = ()=>{
    return objeto;
}
*//*
console.log(obtenerInformacion().then(resultado => console.log(resultado)*/
/*
const mostrarResultado = async ()=>{
    resultado = await obtenerInformacion();
    console.log(resultado);
}

mostrarResultado();*/

obtenerInformacion("pito").then(resultado => console.log(resultado));

obtenerInformacion("parangaricutirimicuaro").then(resultado => console.log(resultado));

obtenerInformacion("Yaaaaiiiiiiiii").then(resultado => console.log(resultado));

