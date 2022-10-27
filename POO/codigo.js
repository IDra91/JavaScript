class animal{
	constructor(especie,edad,color){
		this.especie = especie;
		this.edad = edad;
		this.color = color;
		this.informacion = `Soy un: ${this.especie} con una edad de: ${this.edad} y con un color de: ${this.color} `
	}

	saludar (){
		document.write(this.informacion + "<br>");
	}

}

class perro extends animal {
	constructor(especie,edad,color,raza){
		super(especie,edad,color);
		this.raza = null;
	}
	set modificarRaza(nuevaRaza){
		this.raza = nuevaRaza;
	}
	get obtenerRaza(){
		return this.raza;
	}
	ladrar(){
		alert("WOW!");
	}
}

const perro1 = new perro("perro",12,"marrón","schanuzer");
perro1.modificarRaza = "Doberman";
document.write(perro1.obtenerRaza);
const pajaro = new animal("colibrí",3,"azul");
const gato = new animal("felino",8,"negro");

perro1.saludar();
// perro1.ladrar();
pajaro.saludar();
gato.saludar();
