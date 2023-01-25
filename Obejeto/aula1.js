let amigo = {nome: 'josé',
sexo: 'M',
peso: 85.4,
engordar(p){
    console.log('engordou')
    this.peso += p
}}  
console.log(`${amigo.nome} pesa ${amigo.peso} kg`)



// Array é um objeto e obejto é um obejeto