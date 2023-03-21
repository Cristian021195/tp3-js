export function ejercicio1(){
    const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Octubre', 'Noviembre', 'Diciembre'];
    const $ul = document.createElement('ul');

    meses.forEach(e=>{
        let $li = document.createElement('li'); $li.textContent = e;
        $ul.appendChild($li);
    })
    
    window.$resultados.innerHTML = '';
    window.$resultados.appendChild($ul);
}