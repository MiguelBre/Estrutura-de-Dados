'use strict'

const showArray = (array, element, title='Array') => {
    //Seleciona o elemento do html: main
    const container = document.querySelector(element)

    //Cria um novo elemento no HTML: div
    const div = document.createElement('div')

    //Adiciona uma classe ao div criado anteriormente: numbers-container
    div.classList.add('numbers-container')

    //Preenche a DIV com novos elementos do array
    div.innerHTML = `
        <h2>${title}</h2>
        <div class="numbers-item">
            ${array.join('</div><div class="numbers-item">')}
        </div>
    `
    //Inserindo o novo elemento (DIV) no DOM
    container.appendChild(div)

}

export {
    showArray
}