class PilaEnteros{
    private vec:number[]=[];
    insertar(x:number){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0){
            return this.vec.pop();
        }else{
            return null;
        }
    }
}

class PilaString{
    private vec:string[]=[];
    insertar(x:string){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0){
            return this.vec.pop();
        }else{
            return null;
        }
    }
}

//enteros
let pila1 = new PilaEnteros();
pila1.insertar(23);
pila1.insertar(28);
pila1.insertar(2);
console.log(pila1.extraer());

//cadenas
let pila2 = new PilaString();
pila2.insertar("hola");
pila2.insertar("mundo");
pila2.insertar("en tipescript");
console.log(pila2.extraer());

//numeros
class PilaGenerica<T>{
    private vec:T[]=[];
    insert(x:T){
        this.vec.push(x);
    }
    extraer(){
        if(this.vec.length>0)
        return this.vec.pop();
        else
        return null;
    }
}
let pila3 = new PilaGenerica<number>();
pila3.insert(23);
pila3.insert(28);
pila3.insert(2);
console.log(pila3.extraer());

//cadenas
let pila4 = new PilaGenerica<string>();
pila4.insert("hola");
pila4.insert("mundo");
pila4.insert("siu");
console.log(pila4.extraer());

