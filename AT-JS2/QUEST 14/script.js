function validarCPF(cpf) {

    const regex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!regex.test(cpf)) {
        return false;
    }

    const numeros = cpf.replace(/\D/g, '');

    if (/^(\d)\1{10}$/.test(numeros)) {
        return false;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(numeros[i]) * (10 - i);
    }
    let primeiroDigito = (soma * 10) % 11;
    if (primeiroDigito === 10 || primeiroDigito === 11) {
        primeiroDigito = 0;
    }

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(numeros[i]) * (11 - i);
    }
    let segundoDigito = (soma * 10) % 11;
    if (segundoDigito === 10 || segundoDigito === 11) {
        segundoDigito = 0;
    }

    return primeiroDigito === parseInt(numeros[9]) && segundoDigito === parseInt(numeros[10]);
}

console.log(validarCPF("123.456.789-09"));
console.log(validarCPF("111.444.777-35"));
console.log(validarCPF("000.000.000-00"));
console.log(validarCPF("123.456.789-00"));

class InvalidCPFError extends Error {}

function solicitarCPF() {
    const cpf = prompt("Por favor, insira um CPF no formato '000.000.000-00':");

    if (!validarCPF(cpf)) {
        throw new InvalidCPFError("CPF inválido.");
    }

    console.log("CPF válido:", cpf);
}

solicitarCPF();