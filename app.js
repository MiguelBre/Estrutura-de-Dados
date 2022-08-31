'use strict'

import { showArray } from "./showArray.js"

const numbers = [23, 5, 9, 10, 100, 45]

//Função criada para pegar os elementos de um array e subtrair 2 de cada
const desconto2 = (number) => number - 2

//map: escania o array e, se receber algum argumento, manda os elementos para uma nova array
//Sintaxe: nomearray.map(callback)
//Parâmetros do callback: 1 - Elemento
// 2 - Índice
// 3 - Array 
//Retorno do callback tem que ser booleanoi (true or false)
const numbersDesconto = numbers.map(desconto2)

const menor20 = (valor) => valor < 20
//Filtra os valores menores que 20 de um array
const valoresMenores20 = numbers.filter(menor20)

//REDUCE: percorre o array utilizando um callback e retorna um único valor
//Sintaxe: array.reduce(callback, valorInicial)
//vaorInicial pode ser qualquer tipo de variável (lembrando que o tipo afeta o resultado)
//Somar todos os valores
const soma = (a, b) => a + b
const valorTotal = numbers.reduce(soma, 0)


//Exercícios
// 1 - Aumentar 100 em cada elemento
// 2 - Somente os números pares
// 3 - Total dos valores com o desconto de 4
// 4 - Array com todos os elementos ímpares somando 21

const aumentocem = (number) => number+100
const aumentar100 = numbers.map(aumentocem)

const par = (number) => number % 2 == 0
const pares = numbers.filter(par)

const descont4 = (number) => number - 4
const valorDesconto = numbers.map(descont4)

const impar = (number) => number % 2 != 0
const impares = numbers.filter(impar)

const soma21 = (number) => number + 21
const ex4Completo = impares.map(soma21)



showArray(numbers, 'main', 'All numbers: ')
showArray(numbersDesconto, 'main', 'Desconto: ')
showArray(valoresMenores20, 'main', 'Mneores que 20: ')
showArray([valorTotal], 'main', 'Soma dos valores: ')

showArray(aumentar100, 'main', 'Aumento 100: ')
showArray(pares, 'main', 'Pares: ')
showArray(valorDesconto, 'main', 'Desconto 4: ')
showArray(ex4Completo, 'main', 'Ímpares: ')