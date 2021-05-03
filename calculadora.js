const prompt = require('prompt-sync')();

function projecao(valor) {
    let initialViews = valor * 30;
    let totalViews = 0;

    if (!valor) {
        return;
    }

    if (initialViews < 100) {
        return totalViews = initialViews;
    }

    if (initialViews > 100) {
        let first = shareCycle(initialViews)
        let second = shareCycle(first)
        let third = shareCycle(second)
        let fourth = shareCycle(third)

        totalViews = initialViews + first + second + third + fourth
    }

    return Math.floor(totalViews);
}

function shareCycle(views) {
    if (!views) {
        return;
    }

    let clickers = (views / 100) * 12;
    let shares = (clickers / 20) * 3;
    let shareViews = shares * 40;

    return shareViews;
}

function projecaoScreen(number) {
    return `Voce investiu R$${number}, a projeção aproximada da quantidade máxima de pessoas que visualizarão o anúncio é de ${projecao(number)} pessoas.`
}

const value = prompt('Escolha o valor a ser investido ');
console.log(projecaoScreen(value))

module.exports = {
    projecao,
    shareCycle,
}