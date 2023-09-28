import { FullDate } from "./PostNewData.js";

export default function UpdateReturnData(buttonUpdate, data, table, buttonUpdateData){
    const txt_valor = document.querySelector('#valor');
    const txt_vencimento = document.querySelector('#vencimento');
    const txt_checkout = document.querySelector("#situacao");
    const select = document.querySelector('#select');
    const buttonsToUpdate = document.querySelectorAll(".buttonUpdate");

    const buttonsUpdateButton = document.querySelector("#atualizar");
    //buttonsUpdateButton.setAttribute("disabled", "disabled");

    let dataTosubmit = data;

    buttonUpdate.addEventListener('click', function(event){
        buttonsToUpdate.forEach((btn, index) => {
            btn.value = index;
            //console.log(btn)
        });
        
        //Teste de target conteudo da tabela atualizar
        let dataTabela = event.target;
        if (dataTabela.classList.contains("tbody-container")) {
               console.log(dataTabela);
        }
        console.log(event.target);

        const ValueButton = parseInt(buttonUpdate.value);
        console.log(ValueButton);
        
        //Dados da posição definida do dataTosubmit
        let PositionArrayValue = dataTosubmit[ValueButton];
        console.log(PositionArrayValue);

        //Valor de cada coluna da posição do dataTosubmit
        let VALUE_CONTA_ID_TABLE = PositionArrayValue['conta_id'];
        let VALUE_SITUACAO_TABLE = PositionArrayValue['situacao'];
        let VALUE_VALOR_TABLE = PositionArrayValue['valor'];
        let VALUE_VENCIMENTO_TABLE = PositionArrayValue['vencimento'];

        //Transferindo Valores para os inputs
        txt_valor.value = VALUE_VALOR_TABLE;
        txt_vencimento.value = VALUE_VENCIMENTO_TABLE
        txt_checkout.value = VALUE_SITUACAO_TABLE
        
        txt_checkout.value === "1" ? txt_checkout.checked = true : txt_checkout.checked = false;

        for (var i = 0; i < select.options.length; i++) {
            if (select.options[i].value === VALUE_CONTA_ID_TABLE) {
                select.selectedIndex = i;
                break;
            }
        }
    })
    //Script para atualização de dados do buttonUpdate da barra de inserir informações, não da tabela
    /*
    buttonUpdateData.addEventListener('click', function(event) {
        console.log('clicou');
    
        //const buttonsToUpdate = document.querySelectorAll(".buttonUpdate");
        buttonsToUpdate.forEach((btn, index) => {
            btn.value = index;
            //console.log(btn)
        });

        const ValueButton = parseInt(buttonUpdate.value);
        console.log(ValueButton);
    
        const listArray = {
            conta_id: select.value,
            situacao: txt_checkout.checked === true ? "1" : "0",
            valor: txt_valor.value,
            vencimento: txt_vencimento.value,
            data_pagamento: FullDate()
        };
        
    
        const posicao = ValueButton; // A posição que você deseja substituir
        console.log(posicao);
    
        // Use o método splice() corretamente
        //remove 1 item da posição da DatatoSubmit
        dataTosubmit.splice(posicao, 1, listArray);
        
        console.log(dataTosubmit);
        
    });
    */
    
}