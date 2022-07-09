let num = document.querySelector('#fnum')
let add = document.querySelector('#adicionar')
let lista = document.querySelector('#seltab')
add.addEventListener('click', adicionar)
let fina = document.querySelector('#finalizar')
fina.addEventListener('click', finalizar)
let res = document.querySelector('.res')
var valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100)
        return true
    else
        return false
}


function isLista(n, l) {
    if (l.indexOf(Number(n)) != -1)
        return true
    else
        return false
}

function adicionar() {
    if (isNumero(num.value) && !isLista(num.value, valores)) {
        valores.push(Number(num.value))
        var itens = document.createElement('option')
        itens.text = `Valor ${num.value} adicionado`
        lista.appendChild(itens)
        res.innerHTML = ''


    } else {
        alert('[ERRO] Valor invalido ou já encontrado na lista!')
    }
    num.value = ''
    num.focus()

}



function finalizar() {
    if (valores.length == 0) {
        alert('[ERRO] adicione valores antes de finalizar.!')
    } else {
        var tot = valores.length
        var soma = 0
        var media = 0
        let maior = valores[0]
        let menor = valores[0]
        for (var conta in valores) {
            soma += valores[conta]

            if (valores[conta] > maior)
                maior = valores[conta]
            if (valores[conta] < menor) {
                menor = valores[conta]
            }
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos <strong>${tot}</strong> numeros cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi <strong>${maior}</strong>.</p>`
        res.innerHTML += `<p>O menor valor informado foi <strong>${menor}</strong>.</p>`
        res.innerHTML += `<p>Somando todos os valores temos <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A media dos valores digitados é <strong>${media}</strong>.</p>`


    }
}