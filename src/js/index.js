const equipes = document.querySelectorAll('.equipe');

equipes.forEach((equipe) => {
    equipe.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450) {
            window.scrollTo({top: 0, behavior: 'smooth'});
        }

        removerSelecaoDaEquipe();

        equipe.classList.add('selecionada');

        alterarCarroEquipeSelecionada(equipe);

        alterarNomeEquipeSelecionada(equipe);

        alterarHistoriaEquipe(equipe);
    })
})

function alterarHistoriaEquipe(equipe) {
    const historiaEquipe = document.getElementById('historia-equipe');
    historiaEquipe.innerText = equipe.getAttribute('data-description');
}

function alterarNomeEquipeSelecionada(equipe) {
    const nomeEquipe = document.getElementById('nome-equipe');
    nomeEquipe.innerText = equipe.getAttribute('data-name');
}

function alterarCarroEquipeSelecionada(equipe) {
    const imagemCarroEquipe = document.querySelector('.equipe-carro');
    const idCarro = equipe.attributes.id.value;
    imagemCarroEquipe.src = `https://media.formula1.com/d_team_car_fallback_image.png/content/dam/fom-website/teams/2023/${idCarro}.png.transform/4col/image.png`;
}

function removerSelecaoDaEquipe() {
    const equipeSelecionada = document.querySelector('.selecionada');
    equipeSelecionada.classList.remove('selecionada');
}
