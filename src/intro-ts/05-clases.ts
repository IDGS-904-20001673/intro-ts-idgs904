class persona2{
    nombre:string='2';
    edad:number=2;
    constructor(nombre:string,edad:number){
        this.nombre=nombre;
        this.edad=edad;
    }
    imprimir(){
        console.log(`nombre: ${this.nombre} y edad: ${this.edad}`)
    }
}

let persona:persona2;
persona=new persona2('Juan',23)
persona.imprimir();

class Dado{
private valor:number=0;
public tirar(){
    this.generar();
}
private generar(){
    this.valor=Math.floor(Math.random()*6)+1;

}
imprimir(){
    console.log(`valor: ${this.valor}`)
}
}
let dado1=new Dado();
dado1.tirar();
dado1.imprimir;

class Persona3{
    constructor(public nombre:string, public edad:number){}
    imprimir(){
        console.log(`nombre: ${this.nombre} y edad: ${this.edad}`)
    }
}

let persona3:Persona3;
persona=new Persona3('Juan',23)
persona.imprimir();

