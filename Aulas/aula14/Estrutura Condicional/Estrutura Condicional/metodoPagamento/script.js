//Switch casec- MENU
//if

//Metodos de pagamento 
// 1 - pix - 10% desc
// 2 - debito - 5% desc
// 3 - credito - total

function calcularPagamento(){}

let formaPagamento = "credito"
let valorTotal = 100
let valorFinal
switch (formaPagamento) {
    case "pix":
        valorFinal = valorTotal * 0.9
        console.log(valorFinal);
        break
    case "debito":
        valorFinal = valorTotal * 0.95
        console.log(valorFinal);
        break
    case "credito":
        console.log(valorTotal);
        break
    default:
        console.log("Informe uma forma de pagamento válido");
        break


}