export function UpdateDataReturn(button, data, table){
    button.addEventListener("click", function(event) {
        console.log(data);
        console.log(button.value);
        const removedItem = data.splice(button.value, 1)[0]; // [0] para obter o item removido

        let elementoClicado = event.target;
        if (elementoClicado.classList.contains("buttonUpdate")) {
            
            let cell = elementoClicado.parentNode;

            let linha = cell.parentNode;

            cell.remove();
            
        }
    });

}