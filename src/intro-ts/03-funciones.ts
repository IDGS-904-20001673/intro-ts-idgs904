//definir funciones
//se establece el tipo de dato que va a retornar despues de los parentesis
//void, string, number, bool etc
//funcion que recibe datos implicitos
function sumar(a:string,b:string):void{
    console.log(a+b);
}
const resultado = sumar("carlos"," leonel");


//funcion que recibe datos tipados
function sumar2(a:number,b:number):number{
    return a+b;
}
console.log(sumar2(4,3));

//funcion con variables ya definidas
function multiplicar(n3:number, n4:number, n5:number=5):number{
    let tem=n3*n5;
    return tem;
}
console.log(multiplicar(3,4,6))

interface Mascotas{
    nombre:string;
    edad:number;
    //asi definimos un objeto dentro de un interface
    mostrarEdad:()=>void;
}
 
function datosMascota(mascota:Mascotas, x:number):void{
    mascota.edad+=x;
    console.log(mascota);
}

const nuevaMascota:Mascotas={
    nombre: "Juan",
    edad: 23,
    mostrarEdad(){
        console.log("La edad es: ",this.edad);
    }
}
//asi se le pasa un objeto a una funcion
datosMascota(nuevaMascota,4)


let funcSuma=function(n1:number,n2:number):number{
return n1+n2;
}

console.log(funcSuma(4,3));


//los 3 puntos son para indicar que los valores son implicitos y puede variar la catidad de variables
//funciones con parametros rets
function sumar3(...valores:number[]){
    let suma=0;
    for(let x=0;x<valores.length; x++){
        suma+=valores[x];
    }
    return suma;
}

console.log(sumar3(10,2,3,10,20));
console.log(sumar3(1,2));