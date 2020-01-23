const app=new Vue({
  el:"#app",
  data: {
    texto:'',
    filas:[],

      
  },
  
  methods:{
      Click1:function(){
          console.log(this.texto);
            alert(this.texto);
     },
     AgregarFila(){
        console.log(this.texto);
        this.filas.push({
            nombre:this.texto,
            estado:1,

        });
        localStorage.setItem('miprimer',JSON.stringify(this.filas));
   },
   Editar:function(index){
    console.log(this.texto);
    this.filas[index].estado=0;
    localStorage.setItem('miprimer',JSON.stringify(this.filas));
},

Eliminar:function(index){
    console.log(this.filas[index].nombre);
    this.filas.splice(index,1);
    localStorage.setItem('miprimer',JSON.stringify(this.filas));
},


  },

created:function(){
    console.log("carga primer");
    let datosbd=JSON.parse(localStorage.getItem('miprimer'));
    console.log(datosbd);
    if(datosbd===null){
        this.filas=[];
    }else{
        this.filas=datosbd;
    }
}



});