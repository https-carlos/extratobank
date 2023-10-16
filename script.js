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

function calcular(){
    
}
