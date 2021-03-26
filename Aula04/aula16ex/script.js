var vetor = []
let res = document.getElementById("res")
function add(){
    res.innerHTML = ''
    var num = document.getElementById("txtnum")
    let tab = document.getElementById("seltab")
    if (num.value == ""){
        window.alert("[ERRO] Faltam dados!")
    } else {
        if (Number(num.value) >= 1 && Number(num.value) <= 100){
            vetor.push(Number(num.value))
            let item = document.createElement('option')
            item.text = `Valor ${Number(num.value)} adicionado`
            tab.appendChild(item)
        } else{
            window.alert("[ERRO] Número fora do intervalo solicitado!")
        }
    }
}

function Tab(num){
    res.innerHTML = ''
    let item = document.createElement('p')
    item.innerHTML = `Length: ${num.length} <br>`
    var max = num.reduce(function(a,b){
        return Math.max(a,b);
    })
    var min = num.reduce(function(a,b){
        return Math.min(a,b);
    })
    var soma = num.reduce(function(a,b){
        return a+b;
    })
    item.innerHTML += `Max value: ${max}<br>`
    item.innerHTML += `Min value: ${min}<br>`
    item.innerHTML += `Sum value: ${soma}<br>`
    item.innerHTML += `Average value: ${soma/num.length}`
    res.appendChild(item)
}