
export default async function ReadingIDs(Request, dataRow) {
    console.log("Entrou no ReadingIDs");
    let Valor = Request.value;
    let celula = document.createElement("td");

    const contas = [, "Água", "Luz", "Cartão", "Internet", "Lista", "Nubank (Pai)", "Nubank (Lucas)", "Faculdade Laris", "Magazine", "Curso Lucas", "Shopping"];

    //Retorna o valor com base na posição
    function RetornandoValorPeloID(numero) {
        return contas[numero];
    }

    const valorCorrespondente = RetornandoValorPeloID(Valor);
    console.log(valorCorrespondente);

    celula.textContent = valorCorrespondente;
    dataRow.appendChild(celula);
    // Você pode retornar o valor correspondente, se desejar.
}
