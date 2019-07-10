
/*Cronometros****************************************************************/
window.onload = function() {
   pantalla = document.getElementById("screen");
}
var isMarch = false;
var acumularTime = 0;
function start () {
         if (isMarch == false) {
            timeInicial = new Date();
            control = setInterval(cronometro,10);
            isMarch = true;
            }
         }
function cronometro () {
         timeActual = new Date();
         acumularTime = timeActual - timeInicial;
         acumularTime2 = new Date();
         acumularTime2.setTime(acumularTime);
         cc = Math.round(acumularTime2.getMilliseconds()/10);
         ss = acumularTime2.getSeconds();
         mm = acumularTime2.getMinutes();
         hh = acumularTime2.getHours()-19;
         if (cc < 10) {cc = "0"+cc;}
         if (ss < 10) {ss = "0"+ss;}
         if (mm < 10) {mm = "0"+mm;}
         if (hh < 10) {hh = "0"+hh;}
         pantalla.innerHTML = hh+" : "+mm+" : "+ss+" : "+cc;
         }

function stop () {
         if (isMarch == true) {
            clearInterval(control);
            isMarch = false;
            }    
         }      

function resume () {
         if (isMarch == false) {
            timeActu2 = new Date();
            timeActu2 = timeActu2.getTime();
            acumularResume = timeActu2-acumularTime;
           
            timeInicial.setTime(acumularResume);
            control = setInterval(cronometro,10);
            isMarch = true;
            }    
         }

function reset () {
         if (isMarch == true) {
            clearInterval(control);
            isMarch = false;
            }
         acumularTime = 0;
         pantalla.innerHTML = "00 : 00 : 00 : 00";
         }
function capturar(){
    var tiempo= document.getElementById("screen");
    var texto= document.getElementById("textTiempo");
    texto.value=tiempo.innerHTML;
}

/*firebasefirebasefirebasefirebasevfirebasefirebasefirebasefirebasefirebase*/

var db = firebase.database().ref().child("grup1");
db.on('value', function (snapshot) {
        var grupo1= document.getElementById("grupo1");
        grupo1.setAttribute("position", snapshot.child("/posicion1/"+snapshot.child("/estacion/").val()+"/").val());
});

var db = firebase.database().ref().child("grup2");
db.on('value', function (snapshot) {
        var grupo2sha = document.getElementById("grupo2sha");
        grupo2sha.setAttribute("position", snapshot.child("/posicion/").val());
        grupo2sha.setAttribute("width", snapshot.child("/ancho/").val());
       
        var grupo2= document.getElementById("grupo2");
        grupo2.setAttribute("position", snapshot.child("/posicion2/").val());
});

var db = firebase.database().ref().child("grup3");
db.on('value', function (snapshot) {
        var grupo3sha = document.getElementById("grupo3sha");
        grupo3sha.setAttribute("position", snapshot.child("/posicion/").val());
        grupo3sha.setAttribute("width", snapshot.child("/ancho/").val());
       
        var grupo3= document.getElementById("grupo3");
        grupo3.setAttribute("position", snapshot.child("/posicion2/").val());
});

var db = firebase.database().ref().child("grup4");
db.on('value', function (snapshot) {
        var grupo4sha = document.getElementById("grupo4sha");
        grupo4sha.setAttribute("position", snapshot.child("/posicion/").val());
        grupo4sha.setAttribute("width", snapshot.child("/ancho/").val());
       
        var grupo4= document.getElementById("grupo4");
        grupo4.setAttribute("position", snapshot.child("/posicion2/").val());      
});
function visualizar(id,next,grupo,posicion1,posicion2,ancho) {
  var btn=document.getElementById(id);
  var btnNT=document.getElementById(next);
  btn.disabled=true;
 
  var db= firebase.database().ref().child(grupo);
    db.set({
        posicion: posicion1,
        posicion2: posicion2,
        ancho: ancho
    });
    btnNT.disabled=false;
}
function reiniciar(grup1, grup2, grup3, grup4, ancho) {
    var db = firebase.database().ref().child("grup1");
    db.set({
        posicion: grup1,
        posicion2: grup1,
        ancho: ancho
    });
    var db = firebase.database().ref().child("grup2");
    db.set({
        posicion: grup2,
        posicion2: grup2,
        ancho: ancho
    });
    var db = firebase.database().ref().child("grup3");
    db.set({
        posicion: grup3,
        posicion2: grup3,
        ancho: ancho
    });
    var db = firebase.database().ref().child("grup4");
    db.set({
        posicion: grup4,
        posicion2: grup4,
        ancho: ancho
    });
}