//EJERCICIO 1
class coladecolores{
    constructor(){
        this.cola=["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"]
        this.cola1=[]
        this.cola2=[]
    }
    separar(){

        for (let i = 0; i = (this.cola.length); i++) {

        if(this.cola.length%2==0){
        this.cola1.push(this.cola[0])
        this.cola.shift()
        }else{
        this.cola2.push(this.cola[0])
        this.cola.shift()
        }

    }
    console.log(this.cola1)
    console.log(this.cola2)
}
}
let coladecolores1=new coladecolores()
coladecolores1.separar()
//EJERCICIO2
class coladeconcierto{
    constructor(){
this.colaconcolados=[ 
    { user:"User1", ticket:true },
    { user:"User2", ticket:true },
    { user:"User3", ticket:false },
    { user:"User4", ticket:true },
    { user:"User5", ticket:false },
    { user:"User6", ticket:false },
    { user:"User7", ticket:true },
    { user:"User8", ticket:true },
    { user:"User9", ticket:true },
    { user:"User10", ticket:false },
    { user:"User11", ticket:true }]
this.colasincolados=[]

}
colados(){

    for (let i = 0; i = (this.colaconcolados.length); i++) {
        if(this.colaconcolados[0].ticket==true){
        this.colasincolados.push(this.colaconcolados[0])
        this.colaconcolados.shift()
        }else{
        this.colaconcolados.shift()  
        }
    }
    console.log(this.colasincolados)
}
}
let colasincolados1=new coladeconcierto()
colasincolados1.colados()

