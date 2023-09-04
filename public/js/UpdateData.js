export default function UpdateReturnData(buttonUpdate, data, table){
    let dataTosubmit = data;

    buttonUpdate.addEventListener('click', function(event){
        const txt_valor = document.querySelector('#valor');
        const txt_vencimento = document.querySelector('#vencimento');
        const txt_checkout = document.querySelector("#situacao");
        const select = document.querySelector('#select');

        //Definindo qual o valor da posição de cada coluna da tabela
        const buttonsToUpdate = document.querySelectorAll(".buttonUpdate");
        buttonsToUpdate.forEach((btn, index) => {
            btn.value = index;
            //console.log(btn)
        });

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

        

        console.log(dataTosubmit)
    })
}