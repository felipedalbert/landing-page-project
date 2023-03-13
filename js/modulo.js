let imagemAtual = 0

function esconderImagens(imagensPainel){
    imagensPainel[imagemAtual].classList.remove('mostrar'); 
}

function mostrarImagem(imagensPainel){
    imagensPainel[imagemAtual].classList.add('mostrar');
}

function avancarImagem(totalDeImagens, imagensPainel, bullets){

    esconderImagens(imagensPainel); 

    if(imagemAtual === totalDeImagens){
        imagemAtual = 0
    }else{
        imagemAtual++;
    }

    mostrarImagem(imagensPainel);

    console.log(imagemAtual)
    
    bullets.forEach((bullet, i) => {
        bullet.classList.toggle('mostrar', i === imagemAtual);
    });
}

function voltarImagem(totalDeImagens, imagensPainel, bullets){

    esconderImagens(imagensPainel);

    if(imagemAtual === 0){
        imagemAtual = totalDeImagens
    }else{
        imagemAtual--; 
    }

    mostrarImagem(imagensPainel);

    bullets.forEach((bullet, i) => {
        bullet.classList.toggle('mostrar', i === imagemAtual);
    });
}

export default{
    avancarImagem,
    voltarImagem
}