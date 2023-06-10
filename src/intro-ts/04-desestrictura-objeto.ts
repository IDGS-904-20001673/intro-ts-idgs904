interface Alumno1{
    matricula1:number;
    nombre:string;
    edad:number;
    correo:string;
    grupo:Grupo;
   
}

interface Grupo{
    grupo:string;
    year:number;
}
//este es un objeto
const alumno2:Alumno1={
    matricula1:12345,
    nombre:'Mario',
    edad:23,
    correo:"leo@gmail.com",
    grupo:{
        grupo:'idgs904',
        year:2023
          }

}

//la desestructuracion es acceder a los datos sin necesidad de poner el objeto

console.log(`la matricula es: ${alumno2.matricula1}`)
console.log(`el nombre es: ${alumno2.nombre}`)
console.log(`el grupo es: ${alumno2.grupo.grupo}`)
console.log(`el año es: ${alumno2.grupo.year}`)

//esto es desestructurar un objeto
const{matricula1,grupo:x}=alumno2;
const{grupo}=x;

console.log(`la matricula es: ${matricula1}`)
console.log(`el grupo es: ${grupo}`)


//desestructuracion con arreglos
const gps:string[]=['IDGS','IEVN','REDES'];
console.log(`grupo 1: ${gps[0]}`);
console.log(`grupo 2: ${gps[1]}`);
console.log(`grupo 3: ${gps[2]}`);

//desestructuracion de arreglos
const [a,s,b]=gps;
console.log(`grupo 1: ${a}`);

