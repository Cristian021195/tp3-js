export function ejercicio4(){
    let res = window.prompt("Ingres un numero");
    let num = parseInt(res);

    if(num % 2 == 0){
        window.$resultados.innerHTML = '<p>Es par</p>';
    }else{
        window.$resultados.innerHTML = '<p>Es impar</p>';
    }
}