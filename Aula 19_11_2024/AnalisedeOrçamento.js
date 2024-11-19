const salario = 2100;
const salarioMedio = 2408;

// calculo 13 //

const meses = 12;
const salario13 = (salario / 12) * meses;

//calculo ferias//

const valorDiario = salarioMedio / 30;
const diasDeferias = 30;
const Totaldeferias = valorDiario * diasDeferias ;
const terço = Totaldeferias / 3;
const ferias = Totaldeferias + terço;


// orçamento dia 12/2024 //

orçamento = ferias + salario + salario13;

// despesas //

despesas = [

autoEscola = 950,
Mecanico = 2016,
Pensao = 1260,
Gasolina = 300,
RoupaCrianças = 200,
mochilMala = 112,
Viagem = 480,
Roupa = 400

]

const totalDespesas = despesas.reduce((acumulador, valorAtual) => acumulador + valorAtual, 0);

// informaçoes //

saldo = orçamento - totalDespesas;

resultadoFinal = `esse mes seu orçamento será de ${orçamento} seu total de despesas será ${totalDespesas} e seu saldo final será ${saldo}`

console.log( resultadoFinal);










