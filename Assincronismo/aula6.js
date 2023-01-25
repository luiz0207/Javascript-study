function ImprimirDados (dados) {
    console.log(dados())
}

ImprimirDados (function() {
    return 'oi'
})