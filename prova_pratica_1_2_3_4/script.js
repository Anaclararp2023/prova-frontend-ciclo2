document.addEventListener('DOMContentLoaded', () => {
  // Obter referências para os elementos HTML
  const textArea = document.getElementById('text-area');
  const charCount = document.getElementById('char-count');
  const wordCount = document.getElementById('word-count');
  const yourName = document.getElementById('your-name');

  // Adiciona seu nome no footer
  function addYourName() {
    yourName.textContent = 'Ana Clara Rodrigues';
    console.log("Seu nome foi adicionado ao rodapé!");
  }

  addYourName();

  // Atualiza as contagens
  function atualizarContagens() {
    const texto = textArea.value;

    // Contagem de caracteres sem espaços e quebras de linha
    const textoSemEspacos = texto.replace(/\s/g, ''); // remove espaços, tabs e quebras de linha
    charCount.textContent = textoSemEspacos.length;

    // Contagem de palavras (ignora múltiplos espaços e entradas vazias)
    const palavras = texto.trim().split(/\s+/).filter(p => p.length > 0);
    wordCount.textContent = palavras.length;

    console.log("Texto atualizado.");
  }

  textArea.addEventListener('input', atualizarContagens);
  atualizarContagens(); // Inicializa contagens ao carregar
});
