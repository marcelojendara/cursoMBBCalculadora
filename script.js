
function calcular() {
    // recuperar los valores de la página
    // sumarlos
    // agregarlos en la página en el lugar adecuado
    
    valor1 = parseFloat(document.getElementById("op1").value)
    valor2 = parseFloat(document.getElementById("op2").value)
    if (!isNaN(valor1)){
        if (!isNaN(valor2)){
            switch (document.getElementById("slop").value) {
                case "+":
                    document.getElementById("resultado").innerHTML=valor1+valor2        
                    break;
                case "-":
                     document.getElementById("resultado").innerHTML=valor1-valor2        
                      break;
                case "/":
                    if (valor2!==0){
                        document.getElementById("resultado").innerHTML=valor1/valor2                           
                    } else {
                
                             document.getElementById("resultado").innerHTML="error en valor 2, no puede ser 0" 
                    }
                    break;
                case "*":
                    document.getElementById("resultado").innerHTML=valor1*valor2        
                    break;
                default:
                    document.getElementById("resultado").innerHTML=valor1+valor2
                    break;
            }
                    
        } else {
            document.getElementById("resultado").innerHTML="error en valor 2, los valores deben ser numéricos"
    
        }

    } else {
        document.getElementById("resultado").innerHTML="error en valor 1, los valores deben ser numéricos"

    }
    
}