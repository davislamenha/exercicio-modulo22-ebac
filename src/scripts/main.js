// STAMP DA DATA DO ANIVERSARIO NO ANO ATUAL
const anoAtual = new Date().getFullYear();
const meuNiver = new Date(`Jul 24, ${anoAtual}`);
const stampNiver = meuNiver.getTime();

// DISPLAYS DO CONTADOR
const displayDias = document.getElementById('dias');
const displayHoras = document.getElementById('horas');
const displayMinutos = document.getElementById('minutos');
const displaySegundos = document.getElementById('segundos');

// BOTAO E MENSAGEM
const mensagemBoasVindas = document.getElementById('boas_vindas');
const botao = document.getElementById('botao');

// CONTADOR
const contador = setInterval(function () {
  //STAMP DA DATA E HORA ATUAL
  const stampAtual = new Date().getTime();

  // TEMPO QUE FALTA PARA O ANIVERSARIO
  const tempoQueFalta = stampNiver - stampAtual;

  // CALCULO DE TRANSFORMAÇÃO DE MS
  const diaEmMs = 1000 * 60 * 60 * 24;
  const horaEmMs = 1000 * 60 * 60;
  const minutoEmMs = 1000 * 60;

  const dias = Math.floor(tempoQueFalta / diaEmMs);
  const horas = Math.floor((tempoQueFalta % diaEmMs) / horaEmMs);
  const minutos = Math.floor((tempoQueFalta % horaEmMs) / minutoEmMs);
  const segundos = Math.floor((tempoQueFalta % minutoEmMs) / 1000);

  // VERFICANDO SE A DATA PASSOU OU NÃO
  if (tempoQueFalta < 0) {
    clearInterval(contador);

    displayDias.innerHTML = '';
    displayHoras.innerHTML = '';
    displayMinutos.innerHTML = '';
    displaySegundos.innerHTML = '';

    mensagemBoasVindas.innerHTML =
      'Já fiquei mais velho este ano, até o próximo!';
    botao.innerHTML = 'Me conheça';
  } else {
    mensagemBoasVindas.innerHTML = 'Vamos comemorar meu aniversário?';
    botao.innerHTML = 'Dê meus parabéns';

    const unidadeDias =
      '<span class="hero__contador__display__unidade">dias</span>';
    const unidadeHoras =
      '<span class="hero__contador__display__unidade">horas</span>';
    const unidadeMinutos =
      '<span class="hero__contador__display__unidade">minutos</span>';
    const unidadeSegundos =
      '<span class="hero__contador__display__unidade">segundos</span>';

    displayDias.innerHTML = `${dias}${unidadeDias}`;
    displayHoras.innerHTML = `${horas}${unidadeHoras}`;
    displayMinutos.innerHTML = `${minutos}${unidadeMinutos}`;
    displaySegundos.innerHTML = `${segundos}${unidadeSegundos}`;
  }
}, 1000);
