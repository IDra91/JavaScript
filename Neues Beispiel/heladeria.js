dineroCofla = prompt ("¿Cuánto dinero tienes Cofla?: ");
dineroRoberto = prompt ("¿Cuánto dinero tienes Roberto?: ");
dineroPedro = prompt("¿Cuánto dinero tienes Pedro?: ");
dineroCoflaI = parseInt(dineroCofla);
dineroRobertoI = parseInt(dineroRoberto);
dineroPedroI = parseInt(dineroPedro);

if(dineroCofla >= 0.6 && dineroCofla < 1){
	alert("Te alcanza para raspado del freezer");
	alert("Tu vuelto es " + (dineroCoflaI - 0.6));
} else if(dineroCofla >= 1 && dineroCofla < 1.5){
	alert("Te alcanza para uno de vainilla");
	alert("Tu vuelto es " + (dineroCoflaI - 1));
} else if(dineroCofla >= 1.5 && dineroCofla < 1.7){
	alert("Te alcanza para uno de fresa");
	alert("Tu vuelto es " + (dineroCoflaI - 1.5));
} else if(dineroCofla >= 1.7 && dineroCofla < 1.9){
	alert("Te alcanza para uno de fresa");
	alert("Tu vuelto es " + (dineroCoflaI - 1.7));
} else if(dineroCofla >= 1.9){
	alert("Te alcanza para uno de chocolate");
	alert("Tu vuelto es " + (dineroCoflaI - 1.9));
} else{
	alert("No te alcanza para nada, ve por un agua de a 0.5 :c");
}

if(dineroRoberto >= 0.6 && dineroRoberto < 1){
	alert("Te alcanza para raspado del freezer");
	alert("Tu vuelto es " + (dineroRobertoI - 0.6));
} else if(dineroRoberto >= 1 && dineroRoberto < 1.5){
	alert("Te alcanza para uno de vainilla");
	alert("Tu vuelto es " + (dineroRobertoI - 1));
} else if(dineroRoberto >= 1.5 && dineroRoberto < 1.7){
	alert("Te alcanza para uno de fresa");
	alert("Tu vuelto es " + dineroRobertoI - 1.5);
} else if(dineroRoberto >= 1.7 && (dineroRoberto < 1.9)){
	alert("Te alcanza para uno de fresa");
	alert("Tu vuelto es " + (dineroRobertoI - 1.7));
} else if(dineroRoberto >= 1.9){
	alert("Te alcanza para uno de chocolate");
	alert("Tu vuelto es " + (dineroRobertoI - 1.9));
} else{
	alert("No te alcanza para nada, ve por un agua de a 0.5 :c");
}


if(dineroPedro >= 0.6 && dineroPedro < 1){
	alert("Te alcanza para raspado del freezer");
	alert("Tu vuelto es " + (dineroPedroI - 0.6));
} else if(dineroPedro >= 1 && dineroPedro < 1.5){
	alert("Te alcanza para uno de vainilla");
	alert("Tu vuelto es " + (dineroPedroI - 1));
} else if(dineroPedro >= 1.5 && dineroPedro < 1.7){
	alert("Te alcanza para uno de fresa");
	alert("Tu vuelto es " + (dineroPedroI - 1.5));
} else if(dineroPedro >= 1.7 && dineroPedro < 1.9){
	alert("Te alcanza para uno de fresa");
	alert("Tu vuelto es " + (dineroPedroI - 1.7));
} else if(dineroPedro >= 1.9){
	alert("Te alcanza para uno de chocolate");
	alert("Tu vuelto es " + (dineroPedroI - 1.9));
} else{
	alert("No te alcanza para nada, ve por un agua de a 0.5 :c");
}