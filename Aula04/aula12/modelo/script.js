function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 00 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique seus dados e tente de novo!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        if (fsex[0].checked){
            gênero = 'Homem'
        } else {
            gênero = 'Mulher'
        }
        //res.style.textAlign = 'center'
        res.innerHTML = `Detectado ${gênero} com ${idade} anos`
    }
}