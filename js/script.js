function exibir() {
    const fotos = document.querySelector("#fotos");
    
    let listafotos = "";
    let numeros = new Set();
    
    // Gerando 10 números aleatórios únicos
    while (numeros.size < 10) {
        let numero = Math.floor(Math.random() * 16) + 1;
        numeros.add(numero);
    }
    
    // Convertendo o Set em um array
    let ListaNumeros = Array.from(numeros);
    
    // Adicionando as imagens ao HTML
    ListaNumeros.forEach(numero => {
        listafotos += '<img src="../img/' + numero + '.jpg">';
    });
    
    fotos.innerHTML = listafotos;
}

window.onload = exibir;
