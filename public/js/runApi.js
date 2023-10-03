import { returnDivs } from "./returnDiv.js";
import { ReturnPageNew } from "./returnPageNew.js";
import { ReturnTd } from "./ReturnTD.js";
import { ReturnH1Mes } from "../../src/utils/month.js";

const url = "http://localhost/api.php";

const path = window.location.pathname;

async function dataAPI(){
    await fetch(url).
    then(response => {
        if (!response.ok) {
            throw new Error("Erro ao acessar a API");
        } else {
            return response.json() //Convertendo a API em Objeto JSON()
        }
    }).then(data => {
        if ((path.includes("Payall/")) || (path.includes("PayAll/index.html"))) {
            console.log(data)
            ReturnH1Mes()
            returnDivs(data);
            
            //ReturnH1Mes(data);
        }else if(path.includes("src/pages/nova-despesa.html")){
            console.log(data)
            ReturnPageNew(data);
        }else if(path.includes("PayAll/src/pages/nova-conta.html")){
            console.log(data)
            ReturnTd(data);
        }
        
    }).catch(error => {
        console.log(error);
    });
}

dataAPI();