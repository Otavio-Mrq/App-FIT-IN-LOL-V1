function clicar(){
    /*CALCULO DE PRANCHA*/
    var num1 = document.querySelector(".torres").value;
    var resultado = parseInt(num1) *20;
    if(num1>0 & num1<=11){
    document.querySelector(".resultado1").innerHTML="Tempo em prancha: "+ resultado +" segundos" 
    }
    else{
        document.querySelector(".resultado1").innerHTML="Quantidade Invalida de torres!"         
    }

    /*CALCULO DE ABDOMINAIS*/
    var vitoria =document.getElementsByName("venceu");
    var abdominais;
    for(var i=0; i<vitoria.length;i++){

        if(vitoria[0].checked){
            abdominais=0
            document.querySelector(".resultado2").innerHTML="Quantidade de Abdominais: "+abdominais
        }
        if(vitoria[1].checked){
            abdominais=15
            document.querySelector(".resultado2").innerHTML="Quantidade de Abdominais: "+abdominais
        }
    }

    /*CALCULO DE AGACHAMENTOS*/
    var kda =document.getElementsByName("venceu");
    var agachamento;
    for(var i=0; i<vitoria.length;i++){

        if(kda[0].checked){
            agachamento=10
            document.querySelector(".resultado3").innerHTML="Quantidade de Agachamentos: "+agachamento
        }
        if(kda[1].checked){
            agachamento=0
            document.querySelector(".resultado3").innerHTML="Quantidade de Agachamentos: "+agachamento
        }
    }

     /*CALCULO DE POLICHINELOS*/
     var ff =document.getElementsByName("ff");
     var polichinelo;
     for(var i=0; i<vitoria.length;i++){
 
         if(ff[0].checked ||ff[1].checked){
            polichinelo=15
             document.querySelector(".resultado4").innerHTML="Quantidade de Polichinelos: "+polichinelo
         }
         if(kda[2].checked){
             agachamento=0
             document.querySelector(".resultado4").innerHTML="Quantidade de Polichinelos: "+polichinelo
         }
     }
}
