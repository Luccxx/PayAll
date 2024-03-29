import DeleteDataReturn from "./DeleteData.js";
import UpdateReturnData from "./UpdateData.js";
import ReadingIDs from "./ReadingIDs.js";

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


export function FullDate(){
    const data = new Date();
    const day = data.getUTCDate();
    const month = data.getUTCMonth() + 1;
    const year = data.getUTCFullYear();

    const Fulldate = (`${year}-${month}-${day}`);

    return Fulldate;
}

function SubmitData(){
    const PayForm = document.querySelector('#paymentForm');
    const buttonUpdateArray = document.querySelector('#atualizar');
    const select = document.getElementById('select');
    
    PayForm.addEventListener("submit", function (event) {
        event.preventDefault();
    
        const novoPagamento = {
            "conta_id": select.value,
            "situacao": document.getElementById('situacao').checked === true ? '1' : '0',
            "valor": document.getElementById('valor').value,
            "vencimento": document.getElementById('vencimento').value,
            "data_pagamento": FullDate()//document.getElementById('data_pagamento').value
        };

        const ArrayParaTabela = {
            "situacao": document.getElementById('situacao').checked === true ? '✅' : '❌',
            "valor": document.getElementById('valor').value,
            "vencimento": document.getElementById('vencimento').value,
            "data_pagamento": FullDate()//document.getElementById('data_pagamento').value
        };

        let number = 0;
        dataToSubmit.push(novoPagamento);
        
        /*
        let number = 0;
        a.forEach(element => {
            let a = parseInt(element);
            number += a;
        });
        label.innerHTML += number;
        div.appendChild(label)
        */
        
        const tbody = document.getElementById("tbody-container");

        const buttonUpdate = document.createElement('button');
        const buttonDelete = document.createElement('button');
        const dataRow = document.createElement("tr");
        ReadingIDs(select, dataRow);

        for (const key in ArrayParaTabela) {
            const dataCell = document.createElement("td");
            dataCell.textContent = ArrayParaTabela[key];
            dataRow.appendChild(dataCell);
        }

        
        buttonUpdate.textContent = "Checar";
        buttonUpdate.classList.add('buttonUpdate');
        buttonUpdate.setAttribute('id', 'buttonUpdate');
        
        buttonDelete.textContent = "Excluir";
        buttonDelete.setAttribute('id', 'buttonDelete');
        buttonDelete.classList.add('buttonDelete');
        
        dataRow.appendChild(buttonUpdate);
        dataRow.appendChild(buttonDelete);

        tbody.appendChild(dataRow);

        DeleteDataReturn(buttonDelete, dataToSubmit, tbody);
        UpdateReturnData(buttonUpdate, dataToSubmit, tbody, buttonUpdateArray);

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
                //DateNotSave();
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

