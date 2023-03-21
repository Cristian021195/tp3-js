export function ejercicio6(){
    let ladoA = window.prompt("Ingrese el lado A");
    let ladoB = window.prompt("Ingrese el lado A");

    if(ladoA != null && ladoB != null){
        window.$resultados.innerHTML = perimetroRectangulo(parseInt(ladoA), parseInt(ladoB));
    }else{
        window.$resultados.innerHTML = 'Datos ingresados incorrectos';
    }
}

function perimetroRectangulo(a=1,b=1){
    return 2 * (a+b);
}