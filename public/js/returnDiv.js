export async function returnDivs(data){
    const pagamentos = data.pagamentos;
    const total = data.soma_total;
    const tbody = document.querySelector(".table-div");

    const url = "../src/pages/new.html";

    if (pagamentos.length < 1) {
        const a = document.createElement('a');
        a.setAttribute('class', 'no_data');
        a.innerHTML = "aqui";
        a.href = "../src/pages/nova-conta.html"; // Use a.href = "URL" para definir o atributo href
        tbody.innerHTML = `
        <label class="no_data">Sem dados no momento. Clique ${a.outerHTML} para inserir uma conta nova</label>`;
    }
    

    await total.forEach(itens => {
        console.log(itens)

        function Total(Request){
            const labelTotal = document.querySelector("#labelTotal");
            
            const total = Request.split(/[,.]/);

            const listTotal = {
                one: total[0],
                two: total[1],
                three: total[2] === undefined ? "" : `,${total[2]}`
            }

            const finally_total = `${listTotal.one}.${listTotal.two}${listTotal.three}`;

            labelTotal.innerHTML = `<strong>Total R$ </strong>${finally_total}`;
        }

        Total(itens.soma_total)
    })

    await pagamentos.forEach(itens => {
        

        function createTd(id, nome, valor, venc, situ, data){
            
            const tbody = document.querySelector("#tbody-container");
            const tr = document.createElement('tr');

            const args = [id, nome, valor, venc, situ, data];

            for (const arg of args) {
                const td = document.createElement('td');

                td.textContent = arg;
                
                tr.appendChild(td);
                tbody.appendChild(tr)
            }
        }

        function Data(Request){
            const old_request = Request.split(" ")
            const request_Date_zero = old_request[0];

            const request_Date = request_Date_zero.split("-")

            const day = request_Date[2];
            const month = request_Date[1];
            const year = request_Date[0];

            const FullDate = `${day}/${month}/${year}`;

            return FullDate;
            
        }

        const list = {
            ID: itens.ID,
            Nome: itens.Nome,
            Valor: itens.valor,
            Vencimento: Data(itens.vencimento),
            Situacao: itens.situacao === "0" ? "❌" : "✅",
            Data: Data(itens.data_pagamento),
            Total: itens.total
        }

        createTd(itens.ID, itens.Nome, "R$ "+itens.valor, list.Vencimento, list.Situacao, list.Data)
        //Total(itens.total)
    });
}
