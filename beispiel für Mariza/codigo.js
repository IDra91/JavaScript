let weather ={"paris":{temperatura: 19.7, humedad:80, nombre:"paris"}, 
"tokyo":{temperatura:17.3, humedad:50, nombre:"tokyo"}, 
"lisboa":{temperatura:30.2,humedad:20, nombre:"lisboa"}, 
"san francisco":{temperatura:20.9, humedad:100, nombre:"san francisco"},
"moscu":{temperatura:5, humedad:20, nombre:"moscu"},};
let weatherSearch = prompt("Ingresa una ciudad");

if(weatherSearch==weather['paris'].nombre){
	alert("bon jour :3");
	alert("Su temperatura es: " + (weather['paris'].temperatura));
	alert("La humedad ahí es: " + (weather['paris'].humedad));
}
else if(weatherSearch==weather['tokyo'].nombre){
	alert("Konichiwa :3");
	alert("Su temperatura es: " + (weather['tokyo'].temperatura));
	alert("La humedad ahí es: " + (weather['tokyo'].humedad));
}
else if(weatherSearch==weather['lisboa'].nombre){
	alert("Soppa do maccaco, uma delicia");
	alert("Su temperatura es: " + (weather['lisboa'].temperatura));
	alert("La humedad ahí es: " + (weather['lisboa'].humedad));
}
else if(weatherSearch==weather['san francisco'].nombre){
	alert("Tráiganme mi Big Mac");
	alert("Su temperatura es: " + (weather['san francisco'].temperatura));
	alert("La humedad ahí es: " + (weather['san francisco'].humedad));
}
else if(weatherSearch==weather['moscu'].nombre){
	alert("Vodka para todos");
	alert("Su temperatura es: " + (weather['moscu'].temperatura));
	alert("La humedad ahí es: " + (weather['moscu'].humedad));
}
else{
	alert("Too bad my boy :c");
}