let min = document.querySelector("#campoprimario").value
let sec = document.querySelector("#camposecundario").value
let mil = 100
let ateofim;

function contar(){
    document.querySelector(".count").style.display = "none"
    min = document.querySelector("#campoprimario").value
    sec = document.querySelector("#camposecundario").value
    mil = 100
    if(min == 0 && sec == 0){
        min
        sec
        mil
    }
    ateofim = setInterval(contando, 10)
}
function zero(digito){
    if(digito < 10){
        return digito = "0" + digito
    } else{
        return digito
    }
}



function parar(){
    document.querySelector(".count").style.display = "block"
    clearInterval(ateofim)
    hora = 0
    min = 0
    sec = 0
    mil = 100
    document.querySelector(".numero").innerHTML = `${zero(min)}:${zero(sec)}`
}

/*function contando(){
    mil--
    if(hora == 0 & min == 0 && sec == 0){
        clearTimeout(ateofim)
        min == 0
        sec == 0
    } else if(mil == 0){
        mil = 99
        sec--
    } else if(sec == 0 && min == 0 && hora == 0){
        sec = 0
    } else if(sec == 0){
        sec = 60
        min--
    }else if (min == 0 && hora == 0){
        sec-
        min = 0
    }else if(min == 0){
        min = 59
        hora--
    } else if (hora < 0){
        hora = 0
    } 
    document.querySelector(".numero").innerHTML = `${zero(hora)}:${zero(min)}:${zero(sec)}`
}*/

function contando(){
    //primeira parte
    /*if(mil == 0){
        mil = 100
        sec--
    } else if(sec == 0){
        sec = 59
        min--
    }*/
    mil--
    if(mil == 0){
        mil = 100
        sec--
    }else if(sec > 60){
        sec = 60
    } else if(sec == 0 || sec == 00){
        verificasec()
    }
    document.querySelector(".numero").innerHTML = `${zero(min)}:${zero(sec)}`
}

function verificasec(){
    if(min == 0 && sec == 0){
        sec = 0
        clearTimeout(ateofim)
    } else {
        sec = 59
        min--
    }
}


