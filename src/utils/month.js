export async function ReturnH1Mes(data){
    const pagamentos = data.pagamentos; //Atribuindo variavel para percorrer Lista Pagamentos na API
    const select = document.querySelector("#select-meses"); //Atribuindo variaveis
    const tabela = document.querySelector("#tbody-container");

    //T E S T E
    select.addEventListener("change", function(event){
        var valor = this.value; // O valor da opção selecionada
        var texto = this.options[this.selectedIndex].text; // O texto da opção selecionada
        console.log('Valor: ' + valor + ', Texto: ' + texto);

        if (texto === 'SETEMBRO') {
            const click = event.target;
            console.log(click)
            const element = click.classList.contains("td-contains")
            console.log(element)
        }
    })
    //Percorrendo Lista pagamentos no Foreach
    pagamentos.forEach(element => {
        //Definindo data de pagamento
        const dt_pagamento = element.data_pagamento;

        const month = parseInt(dt_pagamento.split("-")[1]); //Primeiro recorte retornarar uma array => ["23", "10", "01"]; Pegamos apenas a posição 1 => 10;
        
        const Arraymeses = [
            "", "JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"
        ];

        //Função para retornar o mês correspondente com base no seu numero => 9 = Agosto
        function ReturnMonth(mes) {
            return Arraymeses[mes];
        }

        //Atirbuindo uma variavel a função e definindo a função com seus parametros
        const MonthReturn = ReturnMonth(month);
        const optionElement = document.createElement('option'); 
        optionElement.value = dt_pagamento; 

        optionElement.textContent += MonthReturn; // Use a propriedade textContent para definir o texto visível do elemento option
        
        select.appendChild(optionElement);
        
    });
    
}