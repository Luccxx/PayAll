export default function DeleteDataReturn(button, data, table){
    const divtotal = document.querySelector('#totalValue');
    
    button.addEventListener("click", function(event) {
        console.log(data);
        console.log(button.value);
        const removedItem = data.splice(button.value, 1); // Remove o item
        
        // Reduz o total pelo valor do item removido
        let removedValue = parseFloat(removedItem[0].valor);
        console.log(removedValue);
        let currentTotal = parseFloat(divtotal.textContent);
        divtotal.textContent = (currentTotal - removedValue).toFixed(2); // Atualiza o total
        
        let elementoClicado = event.target;
        if (elementoClicado.classList.contains("buttonDelete")) {
            console.log(elementoClicado)

            let cell = elementoClicado.parentNode;
            let linha = cell.parentNode;
            cell.remove();

            // Atualiza os valores dos botões após a remoção
            const buttonsToUpdate = document.querySelectorAll(".buttonDelete");
            buttonsToUpdate.forEach((btn, index) => {
                btn.value = index;
            });
        }
    });

    //SOMA TOTAL
    const PayForm = document.querySelector('#paymentForm');
    PayForm.addEventListener("submit", function (event) {

        let number = 0;
        data.forEach(element => {
            let a = parseFloat(element.valor);
            number += a;
        });

        console.log(number)

        if (data.length === 0) {
            divtotal.textContent = "";
        } else {
            divtotal.textContent = number.toFixed(2); // Formata para exibir 2 casas decimais
        }
    });
}
