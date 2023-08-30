export function DeleteDataReturn(button, data, table){
    button.addEventListener("click", function(event) {
        console.log(data);
        console.log(button.value);
        const removedItem = data.splice(button.value, 1); // [0] para obter o item removido

        let elementoClicado = event.target;
        if (elementoClicado.classList.contains("buttonDelete")) {
            console.log(elementoClicado)

            let cell = elementoClicado.parentNode;
            let linha = cell.parentNode;
            cell.remove();
        }

        const buttonsToUpdate = document.querySelectorAll(".buttonDelete");
            buttonsToUpdate.forEach((btn, index) => {
                btn.value = index;
        });


    });

}