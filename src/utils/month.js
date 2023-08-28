export async function ReturnH1Mes(data){
    const pagamentos = data.pagamentos;
    const body = document.querySelector('#mes');

    pagamentos.forEach(element => {
        const vencimento = element.vencimento;

        const newsSplit  = vencimento.split("-");
        const mes = newsSplit[1];
        const newmes = mes.split("");
        const mesmes = parseInt(newmes[1]);

        const meses = [
            "", "JANEIRO", "FEVEREIRO", "MARÇO", "ABRIL", "MAIO", "JUNHO", "JULHO", "AGOSTO", "SETEMBRO", "OUTUBRO", "NOVEMBRO", "DEZEMBRO"
        ];

        if (mesmes >= 1 && mesmes <= 12) {
            const nomeMes = meses[mesmes];
            body.innerHTML = `<label class="meslabel">Todas as Contas do mês de ${nomeMes}</label>`;
        }
       
    });
    
}