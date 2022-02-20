


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
        console.log('Não existem elementos anteriores, portanto não é possével voltar!');
        return(setaVoltar.classList.add('fim'));
    }

    imagemAtual--;

    esconderImagens();
    
    setaAvancar.classList.remove('fim')

    mostrarImagem()
});

