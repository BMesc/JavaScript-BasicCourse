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
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if (fsex[0].checked){
            gênero = 'Homem'
            if (idade >= 0 && idade < 10){
                //kid
                img.setAttribute('src', 'foto-bebe-m.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }else if(idade < 60){
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }

        } else {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //kid
                img.setAttribute('src', 'foto-bebe-f.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            }else if(idade < 60){
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }else{
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }    
        }
        //res.style.textAlign = 'center'
        res.innerHTML = `Detectado ${gênero} com ${idade} anos`
        res.appendChild(img)
    }
}