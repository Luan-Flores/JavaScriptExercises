const palavrasChave = JSON.parse(localStorage.getItem("words")) || []; // Recupera as palavras salvas ou inicia com array vazio

// Aqui atualiza o input e armazena a palavra ao clicar no botão
function guardarPalavra() {
    const inputElement = document.getElementById("input-main");
    const word = inputElement.value.trim(); // Remove espaços extras

    if (word === "") {
        console.log("Por favor, insira uma palavra válida.");
        return; // Sai da função se a palavra estiver vazia
    }

    palavrasChave.push(word);
    localStorage.setItem("words", JSON.stringify(palavrasChave)); // Salva no localStorage
    console.log(`Palavra "${word}" adicionada com sucesso!`);

    inputElement.value = ""; // Limpa o campo de entrada após salvar
}

// Associa o evento de clique ao botão
document.getElementById("btn-main").addEventListener("click", guardarPalavra);


    
console.log(palavrasChave);
const input = document.getElementById("input-main");
input.addEventListener('input', (event) => {
    const valorAtual = event.target.value;
    console.log(valorAtual);
    let result = palavrasChave.filter(filtrar);
    function filtrar(wordez){
        return wordez.match(valorAtual);
    }
    console.log(result + " <- resultado do filter")
    const sugestao = document.getElementById("sugestao");
    sugestao.innerText = result;
})


