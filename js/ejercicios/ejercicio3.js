export function ejercicio3(){
    const arr = [];
    const arr_res = [
        {suma: 1, repe: 0},
        {suma: 2, repe: 0},
        {suma: 3, repe: 0},
        {suma: 4, repe: 0},
        {suma: 5, repe: 0},
        {suma: 6, repe: 0},
        {suma: 7, repe: 0},
        {suma: 8, repe: 0},
        {suma: 9, repe: 0},
        {suma: 10, repe: 0},
        {suma: 11, repe: 0},
        {suma: 12, repe: 0},
    ];
    
    const $table = document.createElement('table');
    const $thead = document.createElement('thead'); $thead.innerHTML = '<tr><th>Suma</th><th>Apariciones</th></tr>';
    const $tbody = document.createElement('tbody'); const $fragment = document.createDocumentFragment();


    for(let i = 0; i<50; i++){
        let dado1 = Math.trunc(Math.random() * 6) + 1;
        let dado2 = Math.trunc(Math.random() * 6) + 1;

        arr.push(dado1+dado2);

    }

    arr.forEach(e=>{
        switch (e) {
            case 1: {
                arr_res[0].repe++;
            }
                break;
            case 2: {
                arr_res[1].repe++;
            }
                break;
            case 3: {
                arr_res[2].repe++;
            }
                break;
            case 4: {
                arr_res[3].repe++;
            }
                break;
            case 5: {
                arr_res[4].repe++;
            }
                break;
            case 6: {
                arr_res[5].repe++;
            }
                break;
            case 7: {
                arr_res[6].repe++;
            }
                break;
            case 8: {
                arr_res[7].repe++;
            }
                break;
            case 9: {
                arr_res[8].repe++;
            }
                break;
            case 10: {
                arr_res[9].repe++;
            }
                break;
            case 11: {
                arr_res[10].repe++;
            }
                break;
            case 12: {
                arr_res[11].repe++;
            }
                break;
        
            default:
                break;
        }
    })
    /*console.log(arr)
    console.log(arr_res)*/

    arr_res.forEach(e=>{
        let $tr = document.createElement('tr');
        $tr.innerHTML = `<td>${e.suma}</td><td>${e.repe}</td>`;
        $fragment.appendChild($tr);
    })

    $table.appendChild($thead);
    $tbody.appendChild($fragment);
    $table.appendChild($tbody);

    window.$resultados.appendChild($table);

    return 'ejercicio3';
}