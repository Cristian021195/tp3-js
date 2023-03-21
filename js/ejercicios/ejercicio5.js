export function ejercicio5(){
    let res = window.prompt("Ingres una frase");

    window.$resultados.innerHTML = chequearMayus(res);
}

function chequearMayus(frase=""){
    if(frase == null){
        return 'no ingresaste nada'
    }
    if(frase.match(/^[A-Z]*$/g)){
        return 'todas mayusculares';
    }else if(frase.match(/^[a-z]*$/g)){
        return 'todas minusculas';
    }else{
        return 'tienen ambas';
    }
}