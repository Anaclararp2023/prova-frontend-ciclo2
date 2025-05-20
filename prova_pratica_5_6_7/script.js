document.addEventListener('DOMContentLoaded', () => {
  const pesoInput = document.getElementById('peso');
  const alturaInput = document.getElementById('altura');
  const calcularBtn = document.getElementById('calcular-btn');
  const resultadoDiv = document.getElementById('resultado');
  const erroMensagem = document.getElementById('erro-messagem');
  const nomeSpan = document.getElementById('your-name');

  function addYourName() {
    nomeSpan.textContent = 'Ana Clara Rodrigues';
  }

  function removeClassResultadoDiv() {
    const classes = [
      'resultado-baixo',
      'resultado-normal',
      'resultado-sobre',
      'resultado-obesidade'
    ];
    resultadoDiv.classList.remove(...classes);
  }

  calcularBtn.addEventListener('click', () => {
    removeClassResultadoDiv();
    erroMensagem.style.display = 'none';
    resultadoDiv.textContent = '';

    // Ajustar para permitir vírgula como separador decimal e corrigir valores
    let peso = parseFloat(pesoInput.value.replace(',', '.'));
    let altura = parseFloat(alturaInput.value.replace(',', '.'));

    // Corrigir altura caso o usuário tenha digitado um valor inteiro (ex: 152 para 1.52)
    if (altura && altura < 10) {
      altura = altura / 100;
    }

    // Verificar se o peso ou a altura são válidos e positivos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      erroMensagem.style.display = 'block';
      erroMensagem.textContent = 'Por favor, insira valores válidos e positivo para peso e altura.';
      return;
    }

    // Verificar se o peso ou a altura são negativos
    if (peso < 0) {
      erroMensagem.style.display = 'block';
      erroMensagem.textContent = 'O peso não pode ser negativo.';
      return;
    }

    if (altura < 0) {
      erroMensagem.style.display = 'block';
      erroMensagem.textContent = 'A altura não pode ser negativa.';
      return;
    }

    const imc = peso / (altura * altura);
    const imcFormatado = imc.toFixed(2);
    let classificacao = '';
    let classeResultado = '';

    if (imc < 18.5) {
      classificacao = 'Abaixo do peso';
      classeResultado = 'resultado-baixo';
    } else if (imc >= 18.5 && imc < 25) {
      classificacao = 'Peso normal';
      classeResultado = 'resultado-normal';
    } else if (imc >= 25 && imc < 30) {
      classificacao = 'Sobrepeso';
      classeResultado = 'resultado-sobre';
    } else if (imc >= 30 && imc < 35) {
      classificacao = 'Obesidade Grau I';
      classeResultado = 'resultado-obesidade';
    } else if (imc >= 35 && imc < 40) {
      classificacao = 'Obesidade Grau II';
      classeResultado = 'resultado-obesidade';
    } else {
      classificacao = 'Obesidade Grau III (Mórbida)';
      classeResultado = 'resultado-obesidade';
    }

    resultadoDiv.textContent = `IMC: ${imcFormatado} - ${classificacao}`;
    resultadoDiv.classList.add(classeResultado);
  });

  addYourName();
});
