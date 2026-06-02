let contaLuz
let contaAgua
let contaInternet
let aluguel
let funcionarios
let cuatoTotal



contaLuz = parseInt( prompt("informe o valor da conta de luz"))
contaAgua = parseInt( prompt("informe o valor de sua conta de agua"))
contaInternet = parseInt( prompt("informe o valor de sua conta de internet"))
aluguel = parseInt( prompt("infore o valor de aluguel"))
funcionarios = parseInt( prompt("informe o custo com funcionarios"))




custoTotal = contaLuz + contaAgua + contaInternet + aluguel + funcionarios

alert( "O CUSTO TOTAL E  R$" + custoTotal)
