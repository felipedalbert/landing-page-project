const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById ('btn-avancar');
const setaVoltar = document.getElementById ('btn-voltar');
const totalDeImagens = imagensPainel.length - 1;
let imagemAtual = 0;

function esconderImagens(){
    imagensPainel[imagemAtual].classList.remove('mostrar');
}

function mostrarImagem(){
    imagensPainel[imagemAtual].classList.add('mostrar');
}

function avancarImagem(){
    esconderImagens(); 

    if(imagemAtual === totalDeImagens){
        imagemAtual = 0
    }else{
        imagemAtual++;
    }

    mostrarImagem();
}

function voltarImagem(){
    esconderImagens();

    if(imagemAtual === 0){
        imagemAtual = 2
    }else{
        imagemAtual--; 
    }

    mostrarImagem(); 
}

function carrosselAutomatico(){
    avancarImagem()
}

setInterval(avancarImagem, 6000)

setaAvancar.addEventListener('click', avancarImagem)

setaVoltar.addEventListener('click', voltarImagem)

