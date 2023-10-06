var output = document.querySelector('.output');
var botao = document.querySelectorAll('.js-bumber-button');

// maximo de número que aparece na tela é 12

var numero1 = null;
var numero2 = null;
var op = null;

function mostrar(textoNumero){ /*só mostra na tela*/
	var mostraNumero = textoNumero;
	output.innerHTML += mostraNumero;
}

function getNumber(){ /*utilizar o numero*/
	var numero = document.querySelector('.output').textContent;
	numero = parseFloat(numero);
	return numero;
}

function operation(o){
	numero1 = getNumber();
	limpar();
	op = o;
}

function calculo(numero1, o, numero2){
	var resultado = null;
    switch(o){ /*contas*/
		case '+':
			resultado = numero1 + numero2;
			break;
		case '-':
			resultado = numero1 - numero2;
			break;
		case '*':
			resultado = numero1 * numero2;
			break;
		case '/':
			resultado = numero1 / numero2;
			break;
		default:
			resultado = (numero1/100) * numero2;
			break;
	}
		return resultado;
	}


function submit(){
	numero2 = getNumber();
	limpar();
	msg = calculo(numero1, op, numero2);
	output.innerHTML = msg;
}

function AC(){
    var limpar = '';
    numero1 = 0;
    numero2 = 0;
	tempNumber = 0;
    output.innerHTML = limpar;
}
function limpar(){
    var limpar = ''
    output.innerHTML = limpar;
}