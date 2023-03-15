const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById ('btn-avancar');
const setaVoltar = document.getElementById ('btn-voltar');
const bullets = document.querySelectorAll('.bullet')
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

    bullets.forEach((bullet, i) => {
        bullet.classList.toggle('mostrar', i === imagemAtual);
    });
}

function voltarImagem(){

    esconderImagens();

    if(imagemAtual === 0){
        imagemAtual = totalDeImagens
    }else{
        imagemAtual--; 
    }

    mostrarImagem();

    bullets.forEach((bullet, i) => {
        bullet.classList.toggle('mostrar', i === imagemAtual);
    });
}

function clearTimer() {
    clearInterval(timer);
    timer = setInterval(avancarImagem, 5000); 
}

let timer = setInterval(avancarImagem, 5000);

setaAvancar.addEventListener('click', ()=>{
    avancarImagem()
    clearTimer()
})

setaVoltar.addEventListener('click', ()=>{
    voltarImagem() 
    clearTimer()
})

bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
        clearTimer()

        imagensPainel.forEach((imagem, i) => {
            imagem.classList.toggle('mostrar', i === index);
            imagemAtual = index
        });
        bullets.forEach((bullet, i) => {
            bullet.classList.toggle('mostrar', i === index);
        });
    });
});