const dataToSubmit = [];
let VarDateNotSave = false;

function InitAll(){
    SubmitData();
    PostData();
}

function DateSave(){
    VarDateNotSave = true;
}

function DateNotSave(VarDateNotSave){
    if (VarDateNotSave === true) {
        window.addEventListener("beforeunload", function (event) {
            event.preventDefault();
        
            const mensagem = "Você tem dados não salvos. Tem certeza de que deseja sair desta página?";
            event.returnValue = mensagem; 
            return mensagem;
        });
    }
    
}

function FullDate(){
    const data = new Date();
    const day = data.getUTCDate();
    const month = data.getUTCMonth() + 1;
    const year = data.getUTCFullYear();

    const Fulldate = (`${year}-${month}-${day}`);

    return Fulldate;
}

function SubmitData(){
    const PayForm = document.querySelector('#paymentForm');
    PayForm.addEventListener("submit", function (event) {
        event.preventDefault();
    
        const novoPagamento = {
            "conta_id": document.getElementById('select').value,
            "situacao": document.getElementById('situacao').checked === true ? '1' : '0',
            "valor": document.getElementById('valor').value,
            "vencimento": document.getElementById('vencimento').value,
            "data_pagamento": FullDate()//document.getElementById('data_pagamento').value
        };
    
        dataToSubmit.push(novoPagamento);
    
        const tbody = document.getElementById("tbody-container");

        const buttons = document.createElement('button');
        const dataRow = document.createElement("tr");

        for (const key in novoPagamento) {
            const dataCell = document.createElement("td");
            dataCell.textContent = novoPagamento[key];
            dataRow.appendChild(dataCell);
        }

        buttons.textContent = "Update";
        buttons.setAttribute('value', novoPagamento.conta_id);
        dataRow.appendChild(buttons);
    
        tbody.appendChild(dataRow);
    
        this.reset();
        DateSave();
        DateNotSave(VarDateNotSave);
    });
}

function PostData(){
    const ButtonData = document.querySelector('#enviarDados');
    ButtonData.addEventListener("click", function (event) {
        event.preventDefault();
    
        console.log(dataToSubmit);

        if (dataToSubmit.length > 0) {
            
            fetch("http://localhost/api.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(dataToSubmit),
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Erro ao enviar os dados");
                }
                //window.location.href = "../../index.html";
                alert('Despesa Criada Com Sucesso!');
                console.log(response);
                DateNotSave();
                return response.json();
            })    
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error("Erro:", error);
            });
        } else {
            alert("Nenhuma conta para enviar. Adicione pelo menos uma.")
            console.warn("Nenhum dado para enviar.");
        }
    });
}

InitAll();

