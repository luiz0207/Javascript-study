const preco = [
    "Crédito",
    "R$ 200",
    "Contas Pagar",
    "R$ 300",
    "R$ 400",
    "Meus dados"
];

const precosFiltro = preco.filter(preco =>
     preco.includes("R$")
     );

const precoNumeros = precosFiltro.map(preco =>
    Number(preco.replace("R$", ""))
);


const total = precoNumeros.reduce((acc, item) => acc + item);

console.log(total)




/*const precoFiltro = preco.filter(preco =>  {
    console.log(preco);
    if(preco.includes("R$")) {
        return true;
    } else {
        return false
    }
}); */



const valor = [
    'R$ oi',
    'R$ oi',
    'R$ oi',
    'R$ oi',
    'R$ oi',
    'R$ oi',
]


const precoValor = valor.filter(valor =>
    valor.includes('R$')
);

const precoValor1 = precoValor.map(valor =>
    String(valor.replace('R$', "")) 
    );

const all = precoValor1.reduce((acc, bcc) => acc+ bcc);
console.log(all)
