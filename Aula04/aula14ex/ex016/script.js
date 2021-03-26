function contar(){
    var ini = document.getElementById("txtini")
    var fim = document.getElementById("txtfim")
    var pas = document.getElementById("txtpas")
    var res = document.getElementById("res")

    if (ini.value == "" || fim.value == "" || pas.value == ""){
        window.alert("[ERRO] Faltam dados")
        res.innerHTML = "Impossível contar!"
    } else {
        res.innerHTML = 'Contando: <br>'
        if (Number(pas.value) == 0){
            window.alert("Usaremos o Passo com o valor 1")
            pas.value = 1
        }
        if (Number(ini.value)< Number(fim.value)){
            //Contagem crescente
            for (var c = Number(ini.value); c <= Number(fim.value); c += Number(pas.value)){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else{
            //Contagem decrescente
            for (var c = Number(ini.value); c >= Number(fim.value); c -= Number(pas.value)){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`


    }
}