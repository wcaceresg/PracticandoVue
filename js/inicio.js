const app= new Vue({
   el:'#app',
   data : {
       titulo :  'Hola Mundo',
       nombres : ['Walther','Caceres','Carlos'],
       frutas :
       [
           {nombre:'Manzana',Cantidad:1},
           {nombre:'Pera',Cantidad:2},
           {nombre:'Pollo',Cantidad:3},
           {nombre:'Papa',Cantidad:0},
       ],

       datoinput1:'',
       total:0,
   },

   methods:{
       agregarFunction1(){
             console.log("Diste Click");
             this.frutas.push({
                 nombre:this.datoinput1,Cantidad:0

             });
             this.datoinput1='';
       },
       agregarFunction2(){
        console.log("Diste enter");

    },     
   },
  computed:{
       SumarTodo(){
           this.total=0;
           for(ok of this.frutas){
                this.total=this.total+ok.Cantidad;
           }
           return this.total;
           
       },
  } 

});