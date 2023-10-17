function adicionar(){
    let table = document.getElementById("tabela");
    let categoria = document.getElementById("categoria").value
    let valor = document.getElementById("valor").value
    let data = document.getElementById("data").value
    let qtdlinhas = table.rows.length;

    let linha = table.insertRow(qtdlinhas)
    let cell1 = linha.insertCell(0)
    let cell2 = linha.insertCell(1)
    let cell3 = linha.insertCell(2)

    cell1.innerHTML = categoria 
    cell2.innerHTML = valor
    cell3.innerHTML = data
}

function calcular() {
    let table = document.getElementById("tabela");
    let total = 0;
    let mes = {};
    let categoria = {};

    for (let i = 1; i < table.rows.length; i++) {
        let row = table.rows[i];

        let categoriaAtual = row.cells[0].textContent;
        let valor = parseFloat(row.cells[1].textContent);
        let data = new Date(row.cells[2].textContent);

        total += valor;

        let mesAno = data.toLocaleString('pt-BR', { month: '2-digit', year: 'numeric' });
        mes[mesAno] = (mes[mesAno] || 0) + valor;

        categoria[categoriaAtual] = (categoria[categoriaAtual] || 0) + valor;
    }

    let divCalculos = document.getElementById("calculos");
    divCalculos.innerHTML = "Valor total: " + total.toFixed(2) + "<br><br>";

    for (let m in mes) {
        divCalculos.innerHTML += m + ": " + mes[m].toFixed(2) + "<br><br>";
    }

    for (let c in categoria) {
        divCalculos.innerHTML += c + ": " + categoria[c].toFixed(2) + "<br><br>";
    }
}
