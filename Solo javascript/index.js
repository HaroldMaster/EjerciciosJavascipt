/*let meses = ['ENE','FEB','MARZ','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DEC'];
for(let i = 0; i<meses.length; i++){
    console.log(meses[i]);

   document.write(meses[i] + '<br>');
}*/
/* NUMEROS PRIMOS
let numerosPrimos=2;
let contador = 0;
for (numerosPrimos; numerosPrimos<=30;numerosPrimos++){
    for (let i=2; i<numerosPrimos; i++){
        var modulo= numerosPrimos%i;
        if (modulo == 0){
            numerosPrimos++;
            contador++;
        };
        contador=0;
        console.log(i + ' este es i del numero ' + numerosPrimos + ' con modulo '+ modulo);
    };
    if(contador==0){
    document.write(numerosPrimos+',');
    console.log(contador + ' este es contador de ' + numerosPrimos );
    };
};*/
/*
var numeroSolicitado=parseInt(prompt('Digita el número', 'Escribe cualquier numero del 1 al 50'));
    for (let i=2; i<=51; i++){
        if(numeroSolicitado==i){
            i=i+1;
            console.log('entro en el primer if');
        }
        let modulo = numeroSolicitado%i;
        if (modulo==0){
            document.write('no es primo');
            console.log('entro en el segundo if');
            break;}
            else{

                document.write('Es primo');
                console.log('entro en el else'+modulo+' ' + i );
                break;
            }
        

    };
*/

/*for (numerosPrimos=1; numerosPrimos<100; numerosPrimos++){
    var formula= 2**numerosPrimos-1;
    document.write(formula+', ');
}*/
/*/NUMEROS PRIMOS FINAL
function primos(){
 let numeroPrimo=2;
 let bandera = true;
 for (numeroPrimo; numeroPrimo<=100; numeroPrimo++){
    for(let i=2; i<numeroPrimo;i++){
        let residuo=numeroPrimo%i;
        if (residuo==0){
           // document.write('el numero '+  numeroPrimo+ ' tiene modulo 0');
           bandera=false;
           console.log('el numero '+numeroPrimo + ' tiene bandera ' + bandera + 'porque el residuo de ' + numeroPrimo + '%'+ i+ ' es cero')
           numeroPrimo++;
           i=2;
        };
        bandera=true;// necesita resetearse el estado por que si el modulo se hace cero sube el numeroprimo a comparar y tiene que volver a ser true
        console.log('el numero '+numeroPrimo + ' tiene bandera ' + bandera + 'porque el residuo de ' + numeroPrimo + '%'+ i+ ' es ' + residuo)
    };
    if(bandera==true){
        document.write(numeroPrimo+' ');
    };
  
 };
};*/
/*/fibonacci sin recursividad
let a=1;
let b=2;
for(let i=1; i<30;i++){

 let cont=a+b;
 document.write(cont+',');
 a=b;
 b=cont;

};*/
/*/ fibonacci con recursividad
let c=1;
let d=2;
let fibo=0;
function suma(c,d){

    fibo=c+d;
    if (fibo>=35){
     //   document.write(fibo+' yo soy fibo '+ c +' soy c ' + d+ ' soy d');
        return;
    }
    document.write(fibo+',');
    return suma(c=d,d=fibo);
}
suma(1,2);*/

/*/ fibonacci limitado a mostrar 10 primeros
let fibo=0;
let contador=0;
let solicitud=parseInt(prompt('cuantos números de la serie de fibonacci desea desplegar?'))
function suma(c,d){

    if(contador==solicitud){
        return;
    };
    document.write(c+',');
    fibo=c+d;
    contador++;
    return c+d+suma(c=d,fibo);
    
};

suma(0,1);*/

/*/fibonacci experimento
let numeroInicial=0;
let numeroSucesivo=1;
let suma=0;
let contador=0;
let solicitud=parseInt(prompt('cuantos números de la serie de fibonacci desea desplegar?'));
for(let i = 1; i<=solicitud;i++){
    document.write(fibonacciRecursivo(i)+',')
}
function fibonacciRecursivo(solicitud){

if(solicitud==0||solicitud==1){
return solicitud;
}
else {
    return fibonacciRecursivo(solicitud-1)+fibonacciRecursivo(solicitud-2);
}
};*/
/*/ factorial recursivo desde mi punto de vista
let solicitud=parseInt(prompt('Escriba el numero del cual quiere obtener el factorial'));

function factorialRecursivo(solicitud){
    if(solicitud==1){
        return 1;
    } else{
    return solicitud * factorialRecursivo(solicitud-1);}
};
document.write(factorialRecursivo(solicitud));*/
/*/ numero primo o no desde mi punto de vista
let solicitud=parseInt(prompt('Escriba el numero del cual quiere verificar si es primo o no'));
let bandera=true;
function primo(solicitud){
    if(solicitud==1){
        document.write('no es primo');
        return;
    };
    for(let i=2; i<solicitud; i++){
        if(solicitud%i==0){
            document.write('No es primo');
            bandera=false;
            return;
        };
    };
    if(bandera==true){
        document.write('es primo');
    };
};
primo(solicitud);*/
/*/numeros primos hasta el 30 segun mi punto de vista
let bandera=true;

function Primos30() {
   if(confirm('ejecutar numeros primos')){
    for (let i=2; i<=30;i++){
        for (let j=2; j<i;j++){
            let k=i%j;
           if(k==0){
              //  bandera=false;
                console.log('se esta quedando el: '+i+' con j: ' +j);
                i++;
                j=2;
            };
           // bandera=true;
            
        };
       // if(bandera==true){
            document.write(i+',');
           // console.log('el numero '+i+ 'tiene bandera ' +bandera);
      //  };
    };
};
  
};
Primos30();*/
/*/rombo mal
let longitudCentro=5;
for(let i=longitudCentro;i>0;i--){
    let asteriscos='*';
    let espacio=' ';
    let espacios=espacio.repeat(longitudCentro-3);
    let imprime=asteriscos.repeat(i);
    document.write(espacios+imprime+'<br>');
    i--;

}*/
var cadena = "* ";
var piramide="";

//con 
/*
for(var i =1; i<10; i++){
    if(i<=5){
    piramide +=cadena;
    document.write(piramide + " <br>");
   
    }
    else{
        for(j=10;j>i;j--){
            let piramidebajo='';
            piramidebajo +=cadena;
            document.write(piramidebajo);
        }
        document.write("<br>");
        }

}*/
/*puah en ARRAYS
const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
const count2 = animals.push('&nbsp');
const count3= animals.push('&nbsp');
const count4 = animals.push('&nbsp');
const count5= animals.push('&nbsp');
const count6 = animals.push('&nbsp');
const count7= animals.push('&nbsp');
const count8 = animals.push('&nbsp');
const count9= animals.push('&nbsp');
const count10 = animals.push('cats');
const count11 = animals.push('dogs');
animals[30]='harols'
for(i=0;i<animals.length;i++){

    document.write(animals[i]);
    
}*/
// matrices
/*var arrayMuchasDimensiones = [1, ["hola", "que", "tal", ["estas", "estamos", "estoy"], ["bien", "mal"], "acabo"], 2, 5];
/*alert (arrayMuchasDimensiones[1][0])
alert (arrayMuchasDimensiones[1][1])
alert (arrayMuchasDimensiones[1][2])
alert (arrayMuchasDimensiones[1][3])
alert (arrayMuchasDimensiones[1][3][2])
alert (arrayMuchasDimensiones[1][4][0])
alert (arrayMuchasDimensiones[1][4][1])


var insertar=arrayMuchasDimensiones.push(['@','&'])

alert (arrayMuchasDimensiones [4][1])
arrayMuchasDimensiones[9]='     o';
document.write(arrayMuchasDimensiones);*/
/*
var matriz3x3=[[],[],[],[],[]];
for(let i=0; i<5;i++){
    for(let j=0; j<5;j++){
        matriz3x3[i][j]='*';
        document.write(matriz3x3[i][j]);
     
    }
    document.write("<br>");
}
console.log(matriz3x3.length)
*/
//rombo
let max=5;
let i=0,j=0,k=0;

// Si el valor recibido es par, le añadimos uno
if(max%2==0)
{
    max++;
}

// parte superior del rombo
for(i=1;i<=max;i=i+2)
{
    // Añadimos los espacios necesarios delante de cada linea
    for(k=max+1;k>=i;k=k-2)
    { 
      if(i==k||i==k-1){

      } else{
        document.write("&nbsp");
        document.write("&nbsp");
    }
        
    }
    // Mostramos los asteriscos
    for(j=0;j<i;j++)
    {
        document.write("*");
    }
    document.write("<br>");
}
//parte inferior del rombo
for(i=max;i>=1;i=i-2)
{
    // Añadimos los espacios necesarios delante de cada linea
    for(k=i;k<=max+2;k=k+2)
    {
        document.write("&nbsp");
      
    }
    // Mostramos los asteriscos
    for(j=i-2;j>0;j--)
    {
        document.write("*");
    }
    document.write('<br>');
}

//hola
function myFunction (){
    document.write("hola soy harold");
}
/*
for (let x=0; x < matriz3x3.length; x++) {
    for (let y=0; y < matriz3x3[x].length; y++) {
      document.write(matriz3x3[x][y]);
      if (y!=matriz3x3[x].length-1) document.write('&nbsp');
    }
    document.write("<br>");
}
  
  /*

//document.write(matriz3x3)
/*
//factorial recursivo
 function factorial(numeroFactorial){
     console.log(numeroFxactorial);
     if(numeroFactorial<1){
        
         return 0;
     }
   else{
       if(numeroFactorial==1){
       }
       return  numeroFactorial*factorial(numeroFactorial-1);
       
   };
  
    };

let consola=factorial(5);

console.log(consola);
*/
 //con prompt
 /*
 var numeroSolicitado=parseInt(prompt('Digita el número', 'Escribe cualquier numero del 1 al 50'));
 let bandera = 0;
    for(let i=2; i<numeroSolicitado;i++){
        let residuo=numeroSolicitado%i;
        if (residuo==0){
           // document.write('el numero '+  numeroPrimo+ ' tiene modulo 0');
          // bandera++;
          bandera++;
           //console.log('el numero '+numeroPrimo + ' tiene bandera ' + bandera + 'porque el residuo de ' + numeroPrimo + '%'+ i+ ' es cero')
           document.write('no es primo');
           break;
        }

    };
    if(bandera==0){
        console.log('la bandera es '+bandera);
        document.write('es primo');}
    */

 