let nome = prompt('Digite seu nome: ');
let altura = Number(prompt('Digite sua altura em centímetros: '));
let peso = Number(prompt('Digite seu peso: '));

let altura_em_metros = altura / 100

const IMC = peso / (altura_em_metros * altura_em_metros)

let informacao_imc;
if (IMC < 16) {
    informacao_imc = `muito abaixo do peso! (Muito Grave)`
    console.log(`${nome} você está muito abaixo do peso! \nMuito Grave!`);
} else if (IMC >= 16 && IMC <= 16.99) {
    informacao_imc = `abaixo do peso! (Grave)`
    console.log(`${nome} você está abaixo do peso! \nGrave!`);
} else if (IMC >= 17 && IMC <= 18.49) {
    informacao_imc = `abaixo do peso!`
    console.log(`${nome} você está abaixo do peso!`);
} else if (IMC >= 18.50 && IMC <= 24.99) {
    informacao_imc = `com o peso normal!`
    console.log(`${nome} você está com o peso normal!`);
} else if (IMC >= 25 && IMC <= 29.99) {
    informacao_imc = `com sobrepeso!`
    console.log(`${nome} você está com sobrepeso!`);
} else if (IMC >= 30 && IMC <= 34.99) {
    informacao_imc = `com obesidade grau I!`
    console.log(`${nome} você está com obesidade grau I!`);
} else if (IMC >= 35 && IMC <= 39.99) {
    informacao_imc = `com obesidade grau II!`
    console.log(`${nome} você está com obesidade grau II!`);
} else if (IMC >= 40) {
    informacao_imc = `com obesidade grau III!`
    console.log(`${nome} você está com obesidade grau III!`);
}

window.alert(`${nome}, seu IMC foi de ${IMC.toFixed(1)}, portanto, você está ${informacao_imc} `)
console.log(`${nome}, seu IMC foi de ${IMC.toFixed(1)}, portanto, você está ${informacao_imc} `);