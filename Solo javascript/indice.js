var aux=2;
var aux2=0;
for(aux; aux<contador; aux++){
   aux2= contador%aux;
   if(aux2==0){
    continue;
    } else{
        document.getElementById("p1").innerHTML=aux;
    }
}