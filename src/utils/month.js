export async function ReturnH1Mes(){
    const select = document.querySelector("#select-meses");
    const tabela = document.getElementById("tbody-container");

    select.addEventListener("change", function (event) {
        let expression = select.value;
        console.log(expression)

        let linhas = tabela.getElementsByTagName("tr");

        console.log(linhas)

        for (const posicao in linhas) {
            if (isNaN(Number(posicao))) {
                continue;
            }

            let conteudoDalinha = linhas[posicao].cells[4].innerHTML;

            console.log(conteudoDalinha);
            if (conteudoDalinha.includes(expression)) {
                linhas[posicao].style.display = "";
            } else {
                linhas[posicao].style.display = "none";
            }
        }
    });
    
}