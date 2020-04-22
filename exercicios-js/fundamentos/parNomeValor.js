const saudacao = 'Opa' //Contexto léxico 1

function exec(){
    const saudacao = 'Falaaaa' //Contexto léxico 2
    return saudacao
}

//Objetos sao grupos aninhados de parde nome/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logradouro: 'Rua do Luco',
        numero: 56
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)
