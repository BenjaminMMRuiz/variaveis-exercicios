let nome = prompt ("Digite seu nome completo:")
const nascimento = prompt("Digite sua data de nascimento:")
let endereco = prompt ("Digite seu endereço:")
const cpf = prompt ("Digite seu cpf:")
let escola = prompt ("Digite sua escolaridade:")
let cnh = Number(prompt("Possui CNH?"))
let filhos = Number(prompt("Tem filhos?"))
let cargoAtual = prompt ("Qual seu cargo atual?")
let salario = Number(prompt("Qual seu salario atual?"))
let receber = confirm ("Você recebe comissão?")
let anoDeAdmissao = Number(prompt("Qual seu ano de admissão?"))

console.log (typeof nome)
console.log (typeof nascimento)
console.log (typeof endereco)
console.log (typeof cpf)
console.log (typeof escola)
console.log (typeof cnh)
console.log (typeof filhos)
console.log (typeof cargoAtual)
console.log (typeof salario)
console.log (typeof receber)
console.log (typeof anoDeAdmissao)

console.log (nome, nascimento, endereco, cpf, escola, cnh,filhos, cargoAtual, salario, receber, anoDeAdmissao)