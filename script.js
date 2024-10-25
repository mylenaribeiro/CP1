document.addEventListener('DOMContentLoaded', function() {
    const buscarPostBtn = document.getElementById('buscarPost');
    const resultadoDiv = document.getElementById('resultado');

    buscarPostBtn.addEventListener('click', function() {
        resultadoDiv.textContent = 'Carregando...';
        
        // Gerar um ID aleatório entre 1 e 100
        const randomPostId = Math.floor(Math.random() * 100) + 1;
        
        fetch(`https://jsonplaceholder.typicode.com/posts/${randomPostId}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Resposta da rede não foi ok');
                }
                return response.json();
            })
            .then(data => {
                resultadoDiv.textContent = JSON.stringify(data, null, 2);
            })
            .catch(error => {
                resultadoDiv.textContent = 'Erro ao buscar dados: ' + error.message;
            });
    });
});