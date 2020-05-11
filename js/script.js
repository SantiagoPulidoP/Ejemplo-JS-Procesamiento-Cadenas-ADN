var cantCadenas =0;
var sonCorrectos =0;
var arrayProteinas = [];
var cantidad;


var save = e =>{
    var proteina = document.getElementById("proteinas").value;
    proteina = proteina.trim();
    if(cantCadenas<5 && proteina!=""){
        document.querySelector("#monitor").style.display = "block";
        arrayProteinas.push(proteina.toUpperCase())
        cantCadenas+=1;
        document.getElementById("proteinas").value = "";
        document.querySelector("#error").innerHTML = "";
        document.querySelector("#monitor").innerHTML += `${proteina.toUpperCase()} `;


        
    }else if(cantCadenas===5){
        document.querySelector("#error").innerHTML = "Se ha alcanzado el maximo de 20 proteinas";
        document.querySelector("#enviar").disabled = true;
    }
    else{
        document.querySelector("#error").innerHTML = "Debes ingresar un valor válido";
    }   

    console.log(arrayProteinas);
}


var ValidaSecuencia = (e) => {
    
    for(var i = 0; i<arrayProteinas.length ; i++){
        if (arrayProteinas[i]==="A" || arrayProteinas[i]==="C" || arrayProteinas[i]==="G"  || arrayProteinas[i]==="T"){
            sonCorrectos+=1;
        }
    }

    if (sonCorrectos<arrayProteinas.length){
        notCorrect(sonCorrectos); 

    }else{

        cantidad = cuentaProteinas(arrayProteinas);
        
    }
    
    
    
    
}   




/* var results = (cantidad,arr) =>{
    if (cantidad < arr.length){
        notCorrect();
    }

    else{
        cuentaProteinas(arr);
    }

} */

var notCorrect = () => {

    console.log("Error en la secuencia. Hay valores que no corresponden a las proteínas válidas");
    
}



var cuentaProteinas = (arr) =>{

    let cantidad_aux = [
        {
          Adenina:0
        },
        {
          Guanina:0
        },
        {
          Citosina:0
        },
        {
          Tiamina:0
        }
      ];

    for(let i = 0; i <arr.length ;i++){
        switch (arr[i]){
            case "A":
                cantidad_aux[0].Adenina+=1;
                break;
            
            case "C":
                cantidad_aux[2].Citosina+=1;
                break;

            case "G":
                cantidad_aux[1].Guanina+=1;
                break;

            case "T" :
                cantidad_aux[3].Tiamina+=1;
                break;
        }
    }

    return cantidad_aux;



}





document.getElementById("enviar").addEventListener("click",save);
document.getElementById("confirmar").addEventListener("click",ValidaSecuencia);



 