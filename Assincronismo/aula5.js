// Promise carregar um arquivo
//leitura de dados em uma API
// Fulfilled a promessa foi concluida com sucesso
//Rejected: A promessa foi rejeitada, houve um erro
// Settled: Seja com sucesso ou com erro, ela foi finalmente concluida


//const promessa = new Promise(() => {}) Sixtase

let aceitar = false


console.log('pedir uber')
const promessa = new Promise((resolve, reject) => {
    if (aceitar) {
        return resolve('pedido aceito')
    }

    return reject ('pedido negado')
})


promessa
.then(result => console.log(result))
.catch(erro => console.log(erro))
.finally(() => console.log('finalizado'))

console.log("aguardando")

