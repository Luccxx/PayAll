export default function UpdateReturnData(buttonUpdate, data, table){
    let dataTosubmit = data;

    buttonUpdate.addEventListener('click', function(event){
        const txt_valor = document.querySelector('#valor');
        const txt_vencimento = document.querySelector('#vencimento');

        const buttonsToUpdate = document.querySelectorAll(".buttonUpdate");
        buttonsToUpdate.forEach((btn, index) => {
            btn.value = index;
            //console.log(btn)
        });

        const ValueButton = parseInt(buttonUpdate.value);
        console.log(ValueButton);
        
        let PositionArrayValue = dataTosubmit[ValueButton];
        console.log(PositionArrayValue);

        let VALUE_CONTA_ID_TABLE = PositionArrayValue['conta_id'];
        let VALUE_SITUACAO_TABLE = PositionArrayValue['situacao'];
        let VALUE_VALOR_TABLE = PositionArrayValue['valor'];
        let VALUE_VENCIMENTO_TABLE = PositionArrayValue['vencimento'];
        let VALUE_DATA_PAGAMENTO_TABLE = PositionArrayValue['data_pagamento'];

        txt_valor.value = VALUE_VALOR_TABLE;
        txt_vencimento.value = VALUE_VENCIMENTO_TABLE

        console.log(VALUE_CONTA_ID_TABLE);
        console.log(VALUE_SITUACAO_TABLE);
        console.log(VALUE_VALOR_TABLE);
        console.log(VALUE_VENCIMENTO_TABLE);
        console.log(VALUE_DATA_PAGAMENTO_TABLE);

    })
}