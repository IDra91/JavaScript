let alto = window.screen.availHeight;
let ancho = window.screen.availWidth;
let referencia = window.location.href;
let pathName = window.location.pathname;
let hostName = window.location.hostname;
let protocolo = window.location.protocol;
let html = `Protocolo: <b>${protocolo} </b><br>
            Pathname: <b>${pathName} </b><br>
            Host: <b>${hostName} </b><br>
            URL Completa: <b>${referencia} </b><br>`;

comprar = confirm(`El alto es de: ${alto} y el ancho es de: ${ancho}`);

if(comprar){
    alert("Compra realizada exitosamente");
} else{
    alert("compra cancelada");
}

document.write(html);