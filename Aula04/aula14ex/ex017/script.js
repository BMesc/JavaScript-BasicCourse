function Tab(){
    var num = document.getElementById("txtnum")
    let tab = document.getElementById("seltab")
    if (num.value == ""){
        window.alert("[ERRO] Faltam dados!")
    } else {
        var n = Number(num.value)
        tab.innerHTML = ''
        for(var x = 1; x <= 10; x++){
            var r = n*x
            let item = document.createElement('option')
            item.text = `${n} x ${x} = ${r}`
            tab.appendChild(item)
        }

    }
}