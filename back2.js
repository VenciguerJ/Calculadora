var output = document.querySelector('.output');
var historico = document.querySelector('#history');
var historico = document.querySelector('#history');
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
			resultado = (numero1*numero2)/100;
			break;
	}
		return resultado;
	}
	
	document.addEventListener("keydown", function(event) {
		var teclaPressionada = '';
  
  switch(event.key){
			case '1':
				teclaPressionada = '1';
				break;
			case '2':
				teclaPressionada = '2';
				break;
			case '3':
				teclaPressionada = '3';
				break;
			case '4':
				teclaPressionada = '4';
				break;
			case '5':
				teclaPressionada = '5';
				break;
			case '6':
				teclaPressionada = '6';
				break;
			case '7':
				teclaPressionada = '7';
				break;
			case '8':
				teclaPressionada = '8';
				break;
			case '9':
				teclaPressionada = '9';
				break;
			case '0':
				teclaPressionada = '0';
				break;
			case '*':
				operation('*');
				break;
			case '/':
				operation('/');
				break;
			case '-':
				operation('-');
				break;
			case '+':
				operation('+');
				break;
			case '.':
				operation('.');
				break;
			case 'Enter':
				submit();
				break;
			case 'Delete':
				AC();
				break;
		}
		mostrar(teclaPressionada);
});
function submit(){
	numero2 = getNumber();
	limpar();
	msg = calculo(numero1, op, numero2);
	output.innerHTML = msg;
	var mostrarmsg = history(numero1, op, numero2);
	historico.innerHTML = mostrarmsg;
}

function history(numero1, op, numero2){
	var hmsg = numero1 + op + numero2;
	return hmsg;
}


function AC(){
    var limpar = '';
    numero1 = 0;
    numero2 = 0;
	tempNumber = 0;
	historico.innerHTML = limpar;
    output.innerHTML = limpar;
}
function limpar(){
    var limpar = ''
    output.innerHTML = limpar;
}