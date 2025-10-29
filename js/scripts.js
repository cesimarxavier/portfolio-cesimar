document.addEventListener('DOMContentLoaded', () => {
       
    const habilidadesContainer = document.getElementById('habilidades-container');
    const btnLimpar = document.getElementById('btn-limpar');
    
    const dadosHabilidades = {
        'front': ['HTML5 Semântico', 'CSS3/Sass', 'JavaScript (DOM)', 'Bootstrap 5', 'Node-RED', 'Acessibilidade Web'],
        'ux': ['Arquitetura de Informação', 'Usabilidade (IHC)', 'Design Thinking', 'Teste de Usuários', 'Wireframe'],
        'soft': ['Liderança Técnica', 'Pesquisa Científica', 'Comunicação Didática', 'Mentoria']
    };

    /**
     * Adiciona badges de habilidades dinamicamente ao container.
     * 
     */
    function adicionarHabilidades(habilidades) {
        habilidadesContainer.innerHTML = '';
        habilidades.forEach(habilidade => {
            const badge = document.createElement('span');
            badge.className = 'badge bg-primary m-2 p-3 shadow-sm'; 
            badge.textContent = habilidade;
            habilidadesContainer.appendChild(badge);
        });
    }

    document.getElementById('btn-front').addEventListener('click', () => {
        adicionarHabilidades(dadosHabilidades.front);
    });

    document.getElementById('btn-ux').addEventListener('click', () => {
        adicionarHabilidades(dadosHabilidades.ux);
    });

    document.getElementById('btn-soft').addEventListener('click', () => {
        adicionarHabilidades(dadosHabilidades.soft);
    });

    btnLimpar.addEventListener('click', () => {
        habilidadesContainer.innerHTML = '<p class="text-muted mt-3">Clique em uma categoria acima para exibir minhas habilidades específicas.</p>';
    });

    
    
    const formContato = document.getElementById('form-contato');
    const feedbackDiv = document.getElementById('feedback-contato');

    formContato.addEventListener('submit', (e) => {
        e.preventDefault(); 
        feedbackDiv.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Sucesso!</strong> Sua mensagem foi enviada. Obrigado pelo contato!
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
        `;
        
        formContato.reset();        
        feedbackDiv.scrollIntoView({ behavior: 'smooth' });
    });

  
    const spanAno = document.getElementById('ano-atual');
    if (spanAno) {
        const ano = new Date().getFullYear();
        spanAno.textContent = ano;
    }
});




// Array com os dados da seção mais projetos
const projetos = [
    {
        link: "https://www.behance.net/gallery/154145453/Cadernos-AWE-Bauhaus-2022",
        imagem: "img/cadernos-bauhaus.webp",
        titulo: "Cadernos AWE Bauhaus 2022",
        descricao: "Projeto criado em conjunto com outros designers para o IFRN"
    },
    {
        link: "https://www.behance.net/cesimarxavier",
        imagem: "img/interfaces-replicacaveis.webp",
        titulo: "Interfaces replicáveis da HC Sports",
        descricao: "Projeto de sistema de interfaces replicáveis"
    },
    {
        link: "https://dribbble.com/shots/26136379-Conhe-a-a-INCIBRA-Engenharia",
        imagem: "img/projeto-incibra.webp",
        titulo: "Projeto Incibra",
        descricao: "Projeto de Site Institucional para Incibra Engenharia"
    }
];

function criarCardProjeto(projeto) {
    return `
        <article class="col-md-4">
            <div class="card-projeto-visual h-100">
                <a href="${projeto.link}" target="_blank" class="text-decoration-none">
                    <img src="${projeto.imagem}" alt="${projeto.titulo}" class="img-fluid rounded-4 mb-3">
                    <h5 class="fw-600">${projeto.titulo}</h5>
                    <p class="fs-6 text-secondary">${projeto.descricao}</p>
                </a>
            </div>
        </article>
    `;
}

// Função para renderizar todos os projetos
function renderizarProjetos() {
    const container = document.getElementById('projetos-container');
    
    if (!container) {
        console.error('Container de projetos não encontrado!');
        return;
    }
    
    container.innerHTML = '';
    projetos.forEach(projeto => {
        container.innerHTML += criarCardProjeto(projeto);
    });
}

document.addEventListener('DOMContentLoaded', renderizarProjetos);