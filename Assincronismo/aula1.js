const hello = () => {
    console.log('Agora');
    const resultado = unirPalavras('Opa', 'tudo bem!!')
    console.log(resultado);
    console.log('depois...')
 }

const unirPalavras = (p1, p2) => {
    return `${p1}   ${p2}`
}
hello();