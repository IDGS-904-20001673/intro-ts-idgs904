
//para definir las propiedades de las variables de objeto
//usamos las interfaces
//es un molde donde establecemois tipos de datos de donde obtenemos objetos simples
//para darle opccionalidad en el objeto se pone un signo de interrogacion
//en el interface
interface Alumno{
    matricula?:number;
    nombre:string,
    email:string,
    edad:number
}

//manera de declarar un objeto con un interface
const alumnos:Alumno={
    matricula:1212312,
    nombre:'Mario',
    edad:23,
    email:'mario@gmail.com'
}

//declarar un arreglo
let vector1:Array<number>=[9,8,7,6,5];
vector1.push(34);
for(let dato of vector1)
    console.log(dato)
