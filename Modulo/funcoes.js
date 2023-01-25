// importar informções de outros arquivo do mesmo tipo
// organização
// compartilhamento v e escopo diferente
// explicita a dependencia dos arquivos



function mostraIdade(nome, idade) {
    return `A idade de ${nome} é ${idade}`;
}

function mostraCidade(nome, cidade) {
    return `A idade de ${nome} é ${cidade}`;
}


function mostraHobby(nome, hobby) {
    return `A idade de ${nome} é ${hobby}`;
}

export {mostraIdade,mostraCidade,mostraHobby}