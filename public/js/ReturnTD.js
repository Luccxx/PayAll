export async function ReturnTd(data){
    const contas = data.contas;
    
    await contas.forEach(itens => {
        const buttonUpdate = document.createElement('button');
        buttonUpdate.setAttribute('class', "buttonUpdate");
        buttonUpdate.textContent = "Atualizar";

        const buttonDelete = document.createElement('button');
        buttonDelete.textContent = "Deletar";
        buttonDelete.setAttribute("class", "buttonDelete");

        const list_contas = {
            ID: itens.ID,
            Nome: itens.Nome
        }

        function createTds(id, conta, buttonUpdate, buttonDelete){
            const tbody = document.querySelector("#tbody-container");
            const tr = document.createElement('tr');

            const args = [id, conta, buttonUpdate, buttonDelete];

            for (const arg of args) {
                const td = document.createElement('td');

                td.setAttribute('class', "td-contains")
                
                if(arg instanceof HTMLElement){
                    td.appendChild(arg);
                } else {
                    td.textContent = arg;
                }
                
                tr.appendChild(td);
                tbody.appendChild(tr)
            }
        }

        createTds(list_contas.ID, list_contas.Nome, buttonUpdate, buttonDelete);
    })
}
