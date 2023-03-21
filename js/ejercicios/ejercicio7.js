export function ejercicio7(){
    let res = window.prompt("Ingrese numero");
    let multiplicadores = [1,2,3,4,5,6,7,8,9,10];
    const $table = document.createElement('table');
    const $thead = document.createElement('thead'); $thead.innerHTML = '<tr><th>OPERACION  </th><th>RESULTADO</th></tr>';
    const $tbody = document.createElement('tbody');
    if(res != null){
        let num = parseInt(res);

        multiplicadores.forEach(e=>{
            let $tr = document.createElement('tr');
            $tr.innerHTML = `<td>${res} x ${e}</td><td>${res*e}</td>`;
            $tbody.appendChild($tr); //console.log(res, ' x ', e, ' = ', res*e);
        })

        $table.appendChild($thead);
        $table.appendChild($tbody);
        window.$resultados.appendChild($table);
    }
}