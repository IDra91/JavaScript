array1 = ["maría", "josefa", "clementina"];
array2 = ["Saúl", "Marcelo", array1];

for(let array in array2){
	if(array == 2){
		for(let array of array1){
			document.write(array + "<br>");
		}
	}else{
		document.write(array2[array] + "<br>");
	}
}