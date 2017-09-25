function selecionarNivel(){



var nivel_jogo = document.getElementById('nivel_jogo').value;

window.location.href= "jogo.html?" + nivel_jogo;

}


function iniciaJogo(){

var url = window.location.search;

var nivel_jogo = url.replace("?","");

var tempo_segundos = 0;
	//facil = 120 segundos
	//médio = 60 segundos
	//dificil = 30 segundos
	if(nivel_jogo == 1){
		tempo_segundos = 120;
	}else if(nivel_jogo == 2){
		tempo_segundos = 60;
	}else if(nivel_jogo == 3){
		tempo_segundos = 30;
	}

	//inserindo segundo no span
	document.getElementById('cronometro').innerHTML = tempo_segundos;

	//quantidade de baloes
	var qtde_baloes = 80;

	criaBaloes(qtde_baloes);

	//imprimindo quantidade de baloes no span
	document.getElementById("baloes_inteiros").innerHTML = qtde_baloes;
	document.getElementById("baloes_estourados").innerHTML = 0;
	
	contadorTempo(tempo_segundos+1);
}

function criaBaloes(qtde_baloes){
	for(i=1;i<=qtde_baloes;i++){
		var balao = document.createElement("img");
		balao.src = "img/balao_azul_pequeno.png";
		balao.style.margin = "12px";
		balao.id = "b"+i;
		balao.onclick = function(){ 
			estourar(this);
		}
		document.getElementById('cenario').appendChild(balao);
	}
}

function estourar(e){
	var id_balao = e.id;
	document.getElementById(id_balao).setAttribute("onclick", "");
	document.getElementById(id_balao).src = "img/balao_azul_pequeno_estourado.png";
   pontuacao(-1);
}

function pontuacao(acao){
var baloes_inteiros = document.getElementById('baloes_inteiros').innerHTML;
var baloes_estourados = document.getElementById('baloes_estourados').innerHTML;

baloes_inteiros = parseInt(baloes_inteiros);
baloes_estourados = parseInt(baloes_estourados);

baloes_inteiros = baloes_inteiros + acao;
baloes_estourados = baloes_estourados - acao;

document.getElementById('baloes_inteiros').innerHTML = baloes_inteiros;
document.getElementById('baloes_estourados').innerHTML = baloes_estourados;

situacao_jogo(baloes_inteiros);

}

function situacao_jogo(baloes_inteiros){
   if(balooes_inteiros == 0){
      alert("Parabéns, vc conseguiu estourar todos os balões");
      parar_jogo();
   }
}

function parar_jogo(){
	clearTimeout(timerId);
}

var timerId = null; //arnazena a chamada da função Timeout
function contadorTempo(segundos){
 
 segundos = segundos - 1;

 if(segundos==-1){
 	clearTimeout(timerId);//para a excecução da função serTimeout;
 	game_over();
 	return false;
 }
 
 document.getElementById('cronometro').innerHTML = segundos;
 
 timerId = setTimeout("contadorTempo("+segundos+")", 1000);
 
}

function game_over(){
	alert("FIM DE JOGO, você não conseguiu estourar todos os seus balões a tempo");
}

