function buttonGuess() {
    const valor = parseFloat(document.querySelector("#idInput").value);
    const tipoConversao = document.getElementById('idSelect').value;
    let resultado = 0;

    if (!isNaN(valor)) {
        if (tipoConversao === 'milesToKm') {
            resultado = valor * 1.60934;  // Conversão de milhas para quilômetros
        } else if (tipoConversao === 'kmToMiles') {
            resultado = valor / 1.60934;  // Conversão de quilômetros para milhas
        }
        
        // Atualizando o span com o resultado
        document.getElementById('idSpan').textContent = resultado.toFixed(5);
    } else {
        alert('Por favor, insira um valor válido.');
    }
}

document.getElementById('converter').addEventListener('click', buttonGuess);