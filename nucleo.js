function entrar(){
var usuario=document.getElementById("user").value;
var clave=document.getElementById("clave").value;
if(usuario=="foras" && clave=="8312"){
    window.location.href="prengu.html"
}else{
    alert("USUARIO INVALIDO")
}
}
function clean(){
document.getElementById("user").value="";
document.getElementById("clave").value="";
}
function respu(){
var p1=document.getElementById("preg1").value;
var p2=document.getElementById("preg2").value;
var p3=document.getElementById("preg3").value;
var p4=document.getElementById("preg4").value;
var p5=document.getElementById("preg5").value;
var p6=document.getElementById("preg6").value;

if(p1=="1" && p2=="2" && p3=="3" && p4=="1" && p5=="1" && p6=="2"){
 document.getElementById("respuesta").textContent=" Completaste las preguntas correctamente";
}
if(p1=="2" && p2=="2" && p3=="3" && p4=="1" && p5=="1" && p6=="2"){
 document.getElementById("respuesta").textContent=" Respuesta incorrecta pregunta 1, la opcion correta es la 1, las demas correctas";
}
if(p1=="3" && p2=="2" && p3=="3" && p4=="1" && p5=="1" && p6=="2"){
 document.getElementById("respuesta").textContent=" Respuesta incorrecta pregunta 1, la opcion correta es la 1, las demas correctas";
}
if(p1=="1" && p2=="1" && p3=="3" && p4=="1" && p5=="1" && p6=="2"){
 document.getElementById("respuesta").textContent=" Respueta incorrecta pregunta 2, la opcion correcta es la 2, las demas correctas";
}
if(p1=="1" && p2=="3" && p3=="3" && p4=="1" && p5=="1" && p6=="2"){
 document.getElementById("respuesta").textContent=" Respueta incorrecta pregunta 2, la opcion correcta es la 2, las demas correctas";
}
if(p1=="1" && p2=="1" && p3=="1" && p4=="1" && p5=="1" && p6=="1"){
 document.getElementById("respuesta").textContent=" Tienes mas de 1 respuestas incorrecta";
}
if(p1=="2" && p2=="2" && p3=="2" && p4=="2" && p5=="2" && p6=="2"){
 document.getElementById("respuesta").textContent=" tienes mas de 1 respuesta incorrectas";
}
if(p1=="1" && p2=="2" && p3=="3" && p4=="2" && p5=="1" && p6=="2"){
 document.getElementById("respuesta").textContent=" Respueta incorrecta pregunta 4,la opcion correcta es la 1, las demas correctas";
}
if(p1=="1" && p2=="2" && p3=="3" && p4=="3" && p5=="1" && p6=="2"){
 document.getElementById("respuesta").textContent=" Respueta incorrecta pregunta 4,la opcion correcta es la 1, las demas correctas";
}
if(p1=="1" && p2=="2" && p3=="2" && p4=="1" && p5=="1" && p6=="2"){
 document.getElementById("respuesta").textContent=" Respueta incorrecta pregunta 3, la opcion correcta es la 3, las demas correctas";
}if(p1=="1" && p2=="2" && p3=="1" && p4=="1" && p5=="1" && p6=="2"){
 document.getElementById("respuesta").textContent=" Respueta incorrecta pregunta 3, la opcion correcta es la 3, las demas correctas";
}
if(p1=="1" && p2=="2" && p3=="3" && p4=="1" && p5=="3" && p6=="2"){
 document.getElementById("respuesta").textContent=" Respueta incorrecta pregunta 5, la opcion correcta es la 1, las demas correctas";
}
if(p1=="1" && p2=="2" && p3=="3" && p4=="1" && p5=="2" && p6=="2"){
 document.getElementById("respuesta").textContent=" Respueta incorrecta pregunta 5, la opcion correcta es la 1, las demas correctas";
}
if(p1=="1" && p2=="2" && p3=="3" && p4=="1" && p5=="1" && p6=="1"){
 document.getElementById("respuesta").textContent=" Respueta incorrecta pregunta 6, la opcion correcta es la 2, las demas correctas";
}
if(p1=="1" && p2=="2" && p3=="3" && p4=="1" && p5=="1" && p6=="3"){
 document.getElementById("respuesta").textContent=" Respueta incorrecta pregunta 6, la opcion correcta es la 2, las demas correctas";
}
if(p1=="3" && p2=="3" && p3=="3" && p4=="3" && p5=="3" && p6=="3"){
 document.getElementById("respuesta").textContent=" tienes mas de 1 respuesta incorrectas";
}
if(p1=="1" && p2=="2" && p3=="2" && p4=="2" && p5=="2" && p6=="2"){
 document.getElementById("respuesta").textContent=" tienes mas de 1 respuesta incorrectas";
}if(p1=="2" && p2=="1" && p3=="2" && p4=="2" && p5=="2" && p6=="2"){
 document.getElementById("respuesta").textContent=" tienes mas de 1 respuesta incorrectas";
}if(p1=="2" && p2=="2" && p3=="1" && p4=="2" && p5=="2" && p6=="2"){
 document.getElementById("respuesta").textContent=" tienes mas de 1 respuesta incorrectas";
}if(p1=="2" && p2=="2" && p3=="2" && p4=="1" && p5=="2" && p6=="2"){
 document.getElementById("respuesta").textContent=" tienes mas de 1 respuesta incorrectas";
}if(p1=="2" && p2=="2" && p3=="2" && p4=="2" && p5=="1" && p6=="2"){
 document.getElementById("respuesta").textContent=" tienes mas de 1 respuesta incorrectas";
}if(p1=="2" && p2=="2" && p3=="2" && p4=="2" && p5=="2" && p6=="1"){
 document.getElementById("respuesta").textContent=" tienes mas de 1 respuesta incorrectas";
}
if(p1=="2" && p2=="2" && p3=="2" && p4=="2" && p5=="2" && p6=="2"){
 document.getElementById("respuesta").textContent=" tienes mas de 1 respuesta incorrectas";
}
if(p1=="3" && p2=="2" && p3=="2" && p4=="2" && p5=="2" && p6=="2"){
 document.getElementById("respuesta").textContent=" tienes mas de 1 respuesta incorrectas";
}
if(p1=="2" && p2=="3" && p3=="2" && p4=="2" && p5=="2" && p6=="2"){
 document.getElementById("respuesta").textContent=" tienes mas de 1 respuesta incorrectas";
}if(p1=="2" && p2=="2" && p3=="3" && p4=="2" && p5=="2" && p6=="2"){
 document.getElementById("respuesta").textContent=" tienes mas de 1 respuesta incorrectas";
}
if(p1=="2" && p2=="2" && p3=="2" && p4=="3" && p5=="2" && p6=="2"){
 document.getElementById("respuesta").textContent=" tienes mas de 1 respuesta incorrectas";
}
if(p1=="2" && p2=="2" && p3=="2" && p4=="2" && p5=="3" && p6=="2"){
 document.getElementById("respuesta").textContent=" tienes mas de 1 respuesta incorrectas";
}
if(p1=="2" && p2=="2" && p3=="2" && p4=="2" && p5=="2" && p6=="3"){
 document.getElementById("respuesta").textContent=" tienes mas de 1 respuesta incorrectas";
}
if(p1=="1" && p2=="1" && p3=="2" && p4=="2" && p5=="2" && p6=="2"){
 document.getElementById("respuesta").textContent=" tienes mas de 1 respuesta incorrectas";
}
if(p1=="2" && p2=="1" && p3=="1" && p4=="2" && p5=="2" && p6=="2"){
 document.getElementById("respuesta").textContent=" tienes mas de 1 respuesta incorrectas";
}
if(p1=="2" && p2=="2" && p3=="1" && p4=="1" && p5=="2" && p6=="2"){
 document.getElementById("respuesta").textContent=" tienes mas de 1 respuesta incorrectas";
}
if(p1=="2" && p2=="2" && p3=="2" && p4=="1" && p5=="1" && p6=="2"){
 document.getElementById("respuesta").textContent=" tienes mas de 1 respuesta incorrectas";
}
if(p1=="2" && p2=="2" && p3=="2" && p4=="2" && p5=="1" && p6=="1"){
 document.getElementById("respuesta").textContent=" tienes mas de 1 respuesta incorrectas";
}if(p1=="1" && p2=="1" && p3=="1" && p4=="2" && p5=="1" && p6=="1"){
 document.getElementById("respuesta").textContent=" tienes mas de 1 respuesta incorrectas";
}if(p1=="3" && p2=="3" && p3=="2" && p4=="2" && p5=="1" && p6=="1"){
 document.getElementById("respuesta").textContent=" tienes mas de 1 respuesta incorrectas";
}if(p1=="2" && p2=="3" && p3=="2" && p4=="3" && p5=="1" && p6=="1"){
 document.getElementById("respuesta").textContent=" tienes mas de 1 respuesta incorrectas";
}

}
function verrep(){
    window.location.href="endpage.html"
}
function formu(){
var ema=document.getElementById("correo").value;
document.getElementById("nombre").value="";
document.getElementById("apellido").value="";
document.getElementById("edad").value="";
document.getElementById("correo").value="";
document.getElementById("telefono").value="";

if (ema=="foras@gmail.com"){
    document.getElementById("respuesta2").textContent="Usuario ya existente";
}else{
    document.getElementById("respuesta2").textContent="Informacion enviada, te aviseremos cuando tengamos nuevas preguntas";
}
}