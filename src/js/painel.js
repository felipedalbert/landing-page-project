/* 
    Quando o usuário clicar na seta avançar o sistema deve esconder todas as imagens, para que consequentemente mostre a próxima.

        A imagem atual começa em 0, pois é o primeiro elemento. Assim que a âncora "avançar" for clicada, é preciso adicionar + 1 ao contador de imagens para ser 
        compreendido que a segunda imagem será mostrada.

            esconder todas as imagens:
                selecionar todas as imagens usando o DOM e remover a classse mostrar.

            mostrar a próxima imagem:
                selecionar todas as imagens, descobrir qual é a próxima, e colocar a classe 'mostrar' nela.
*/

const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById ('btn-avancar');
const setaVoltar = document.getElementById ('btn-voltar');
let imagemAtual = 0;

function esconderImagens(){
    imagensPainel.forEach(imagem => {
        imagem.classList.remove('mostrar')
    });
}

function mostrarImagem(){
    imagensPainel[imagemAtual].classList.add('mostrar');
}

setaAvancar.addEventListener('click', function () {
    console.log('clicou na seta avançar');

    const totalDeImagens = imagensPainel.length - 1;

    if(imagemAtual === totalDeImagens){
        console.log('não existem mais elementos a seguir, portanto não é possível avançar!');
        return(setaAvancar.classList.add('fim'));
           
    }

    imagemAtual++;
    
    esconderImagens();

    setaVoltar.classList.remove('fim')

    mostrarImagem();

});

setaVoltar.addEventListener('click', function() {
    console.log('clicou na seta voltar');
    
    if(imagemAtual === 0){
        console.log('Não existem elemnetos anteriores, portanto não é possével voltar!');
        return(setaVoltar.classList.add('fim'));
    }

    imagemAtual--;

    esconderImagens();
    
    setaAvancar.classList.remove('fim')

    mostrarImagem()
});

