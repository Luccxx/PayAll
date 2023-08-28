export async function ReturnPageNew(Request){
    const option = document.querySelector('#select');
    const allPagamento = Request.contas;

    option.innerHTML = "";

    await allPagamento.forEach(element => {
        const optionElement = document.createElement('option');
        optionElement.value = element.ID;
        optionElement.textContent += element.Nome; // Use a propriedade textContent para definir o texto visível do elemento option

        // Adicione o elemento option ao elemento select
        option.appendChild(optionElement);
    });
}
