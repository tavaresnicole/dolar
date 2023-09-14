function converteParaDolar(){
    valor = document.querySelector('.valor').value;
    conversaoDolar = valor * 0.20;
    const pDolar = document.createElement("p");
    pDolar.innerHTML = `Convertido para o dólar: $ ${conversaoDolar}`;
    document.querySelector('.container').appendChild(pDolar);
}

function converteParaEuro(){
    valor = document.querySelector('.valor').value;
    conversaoEuro = valor * 0.19;
    const pEuro = document.createElement("p");
    pEuro.innerHTML = `Convertido para o euro: $ ${conversaoEuro}`;
    document.querySelector('.container').appendChild(pEuro);
}
