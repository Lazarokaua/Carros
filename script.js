let carros = [
    {
        'nome': 'Fiat uno',
        'img': 'img/fiatUno.jpg',
        'descricao': 'O Fiat Uno é um modelo que tem uma longa história e várias gerações, e suas características específicas podem variar com base no ano de fabricação e na versão do veículo.',
    },
    {
        'nome': 'onix',
        'img': 'img/onix.jpg',
        'descricao': 'O Chevrolet Onix é conhecido por atender às necessidades de diversos públicos, desde consumidores que procuram um carro prático e econômico até aqueles que valorizam recursos tecnológicos e design contemporâneo',
    },
    {
        'nome': 'Lancer',
        'img': 'img/lancer.webp',
        'descricao': 'O Mitsubishi Lancer é apreciado por entusiastas de carros que buscam um equilíbrio entre desempenho, estilo e praticidade. ',
    },
    {
        'nome': 'gtr 32',
        'img': 'img/gtr.jpg',
        'descricao': 'O Nissan Skyline GT-R R32 é considerado um ícone entre os entusiastas de carros esportivos e é admirado por sua performance, durabilidade e sucesso nas pistas. ',
    },
    {
        'nome': 'Dogde charger',
        'img': 'img/dogde.jpg',
        'descricao': 'O Dodge Charger é conhecido por combinar estilo, desempenho e praticidade, tornando-se uma escolha popular para aqueles que buscam um sedan esportivo e potente.',
    },
    {
        'nome': 'Corola',
        'img': 'img/corola.jpg',
        'descricao': 'O Toyota Corolla é popular em todo o mundo e é conhecido por ser uma opção sólida para quem procura um sedã confiável e prático.',
    }
]

carros.map((carro, posicao)=> {
    let cardCarro = document.getElementById('cards');
    cardCarro.innerHTML += `
    <div class="col-md-4">
    <div class="card m-2">
        <img src="${carro.img}" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">${carro.nome}</h5>
          <a href="#" class="btn btn-secondary" onclick="zoomImg('${posicao}')"><i class="bi bi-zoom-in">   </i></a>
        </div>
      </div>
  </div> 
    `

})

function zoomImg(posicao){
    let carroSelecionado = carros[posicao];
    document.getElementById('nomeDoCarro').innerHTML = carroSelecionado.nome;
    document.getElementById('descricaoCarro').innerHTML = carroSelecionado.descricao;
    document.getElementById('imgModal').src = carroSelecionado.img;

    new bootstrap.Modal('#zoomImg').show();

}

function alterarTheme(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if (tema === "light"){
        document.querySelector('html').setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterar").innerHTML = `<i class="bi bi-brightness-low-fill"></i>`;
    } else{
        document.querySelector('html').setAttribute("data-bs-theme", "light");
        document.querySelector("#alterar").innerHTML = `<i class="bi bi-moon-fill"></i>`;
    }
}