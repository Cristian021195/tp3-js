export function ejercicio2(){
    const arr = []; 
    const $fragment = document.createDocumentFragment();
    const $p1 = document.createElement('p'); const $h1 = document.createElement('h1');
    const $ul1 = document.createElement('ul');    const $ul2 = document.createElement('ul');

    let res = window.prompt('Ingrese la ciudad, pais');
    while(res){
        arr.push(res);
        res = window.prompt('Ingrese la ciudad, pais');
    }

    $p1.textContent = `El arreglo de ciudades tiene ${arr.length} ciudades`

    $ul1.innerHTML = `
        <li>Elemento 1er posicion: ${arr[0]}</li>
        <li>Elemento 3er posicion: ${arr[2]}</li>
        <li>Elemento ultima posicion posicion: ${arr[arr.length - 1]}</li>
        <li>Elemento ultima posicion posicion: Paris</li>
    `;

    $h1.textContent = 'Arreglo de ciudades';

    arr.forEach(e=>{
        let $li = document.createElement('li');
        $li.textContent = 'Elemento: '+e;
        $ul2.appendChild($li);
    })

    $fragment.appendChild($p1); $fragment.appendChild($ul1); $fragment.appendChild($h1); $fragment.appendChild($ul2);

    window.$resultados.appendChild($fragment);

    console.log(arr);
}