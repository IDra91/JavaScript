let materias={
		fisica: ["Sr. Arturo","Pedro","Maria","Carlos","Kimberly"],
		matematica: ["Sr. Mario","Pedro","Armando","Kristen"],
		programacion: ["Sra. Lady","Gloria","Carlos","Pedro","Sara"],
		quimica: ["Sra. Bertha","Maria","Carlos","Maria","Sara","Pedro"],
	}

const obtenerInformacion = (materia)=>{
	materias={
		fisica: ["Sr. Arturo","Pedro","Maria","Carlos","Kimberly"],
		matematica: ["Sr. Mario","Pedro","Armando","Kristen"],
		programacion: ["Sra. Lady","Gloria","Carlos","Pedro","Sara"],
		quimica: ["Sra. Bertha","Maria","Carlos","Maria","Sara","Pedro"],
	}
	if(materias[materia] !== undefined){
		return [materias[materia],materia,materias];
	}else{
		return materias;
	}
}
const mostrarInformacion =(materia)=>{
	let informacion = obtenerInformacion(materia);


	if(informacion !== false){
		let profesor = informacion[0][0];
		let alumnos = informacion[0]
		alumnos.shift();

		document.write(`El profesor de <b>${informacion[1]}</b>: <b style='color:red'>${profesor}</b><br>`);

		document.write(`Los alumnos de <b>${informacion[1]}</b>: <b style='color:blue'>${alumnos}</b><br>`);
	}
}

const cantidadDeClases =(alumno)=>{
	let cantidadTotal = 0;
	let clasesPresentes =[];
	let informacion = obtenerInformacion();
	for(info in informacion){
		if(informacion[info].includes(alumno)){
			cantidadTotal++;
			clasesPresentes.push(" "+ info);
		}
	} return `<b style='color:red'>${alumno} </b> está en esta cantidad de clases: <b> ${cantidadTotal}</b><br>
	Y está cursando las clases: <b style='color:green'>${clasesPresentes}</b><br><br>`;
}

const inscribir =(alumno,materia)=>{
	personas = materias[materia];
	if(personas.length>=21){
		document.write(`Lo siento <b>${alumno}</b> las clases de <b>${materia}</b> ya están llenas :c`);
	}else{
		personas.push(alumno);
		if(materia == "fisica"){
			materias={
		fisica: personas,
		matematica: materias['matematica'],
		programacion: materias['programacion'],
		quimica: materias['quimica']}
	}else if(materia == "matematica"){
			materias={
		fisica: materias['fisica'],
		matematica: personas,
		programacion: materias['programacion'],
		quimica: materias['quimica']}
	}else if(materia == "programacion"){
			materias={
		fisica: materias['fisica'],
		matematica: materias['matematica'],
		programacion: personas,
		quimica: materias['quimica']}
	}else if(materia == "quimica"){
			materias={
		fisica: materias['fisica'],
		matematica: materias['matematica'],
		programacion: materias['programacion'],
		quimica: personas}
	}document.write(`¡Felicidades ${alumno}! Te has inscrito a ${materia}`);
	} 
	}

inscribir("Carmelo","programacion");
inscribir("Karen","programacion");
inscribir("Saúl","programacion");
inscribir("Robin","programacion");
inscribir("Bruce Wayne","programacion");
inscribir("Flash","programacion");
inscribir("Cloud","programacion");
inscribir("Tifa","programacion");
inscribir("Yoshi","programacion");
inscribir("Rodrigo","programacion");
inscribir("Pikachu","programacion");
inscribir("Javier","programacion");
inscribir("Joel","programacion");
inscribir("May","programacion");
inscribir("Misty","programacion");
inscribir("Paco","programacion");
inscribir("Riana","programacion");
inscribir("Alexandra","programacion");
inscribir("Musculoso","programacion");
inscribir("Mordecai","programacion");
inscribir("Rigby","programacion");
inscribir("Bill","programacion");
inscribir("Matt","programacion");
inscribir("Steve","programacion");
inscribir("Natasha","programacion");

