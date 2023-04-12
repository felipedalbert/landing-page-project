const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById ('btn-avancar');
const setaVoltar = document.getElementById ('btn-voltar');
const bullets = document.querySelectorAll('.bullet')
const divBullets = document.querySelector('.bullets')
const totalDeImagens = imagensPainel.length - 1;
let imagemAtual = 0;

function alterarImagem(direcao){
    imagensPainel[imagemAtual].classList.remove('mostrar');

    if (direcao === 'avancar') {
        imagemAtual = (imagemAtual === totalDeImagens) ? 0 : ++imagemAtual;
    }else{
        imagemAtual = (imagemAtual === 0) ? totalDeImagens : --imagemAtual;
    }

    imagensPainel[imagemAtual].classList.add('mostrar');

    alterarBullet()
}

function clearTimer() {
    clearInterval(timer);
    timer = setInterval(()=>{alterarImagem('avancar')}, 5000); 
}

function alterarBullet(){
    bullets.forEach((bullet, i) => {
        bullet.classList.toggle('mostrar', i === imagemAtual);
    });
}

let timer = setInterval(()=>{alterarImagem('avancar')}, 5000);

setaAvancar.addEventListener('click', ()=>{
    alterarImagem('avancar')
    clearTimer()
})

setaVoltar.addEventListener('click', ()=>{
    alterarImagem('voltar') 
    clearTimer()
})

document.addEventListener("keydown", (e)=> {
    if (e.key === "ArrowLeft") {
        setaVoltar.click()
    }else if(e.key === "ArrowRight"){
        setaAvancar.click()
    }
})

bullets.forEach((bullet, index) => {
    bullet.addEventListener('click', () => {
        clearTimer()
        
        imagensPainel.forEach((imagem, i) => {
            imagem.classList.toggle('mostrar', i === index);
            imagemAtual = index
        });
        
        alterarBullet()
    });
});