//tipos de manera para crear variables
var num = 23;
let num2=34;
const num3=23;

//asi se declaran varibales y el tipo de dato de la variable
let version:number=2.34;
version=3.24;

let nombre:string="Leonel";
let activo:boolean=false;

//de esta manera podemos declarar variables que sean de dos tipos de datos
let matricula:number|string=1232321;

matricula="asd34566";

//para crear un arreglo
let vector:number[]=[1,2,3];
//asi remplazamos valores del arreglo
vector[2]=8;
//asi añadimos valores al arreglo
vector.push(9);

//for en tipescrio}pt
for(let elemento of vector)
    console.log(elemento);

    

console.log(matricula);
console.log(vector);