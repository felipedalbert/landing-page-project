const imagensPainel = document.querySelectorAll('.imagem-painel');
const setaAvancar = document.getElementById ('btn-avancar');
const setaVoltar = document.getElementById ('btn-voltar');
let imagemAtual = 0;

setaVoltar.classList.add('fim'); // por padrão, deixa a seta voltar 'desabilitada'

function esconderImagens(){
    imagensPainel[imagemAtual].classList.remove('mostrar');
}

function mostrarImagem(){
    imagensPainel[imagemAtual].classList.add('mostrar');
}



setaAvancar.addEventListener('click', function () {
    console.log('clicou na seta avançar');
    const totalDeImagens = imagensPainel.length - 1;

    if(imagemAtual === totalDeImagens){
        console.log('voltou')
        return  // faz com que a função seja retornada ou descontinuada
        // se o index for igual a 2
    }

    esconderImagens(); // index 0 (imagemAtual = 0) -> remove a classe 'mostrar' do index 0

    imagemAtual++; // itera + 1 ao index

    setaVoltar.classList.remove('fim')

    mostrarImagem(); // index 1 (imagemAtual = 1) -> adiciona a classe 'mostrar' no index 1

    if(imagemAtual === totalDeImagens){
        console.log('não existem mais elementos a seguir, portanto não é possível avançar!');
        setaAvancar.classList.add('fim');
           
    }

    console.log(imagemAtual);
});



setaVoltar.addEventListener('click', function() {
    console.log('clicou na seta voltar'); 

    if(imagemAtual === 0){
        console.log('voltou')
        return   
    }
    
    esconderImagens();

    imagemAtual--;

    setaAvancar.classList.remove('fim')

    mostrarImagem()
    
    if(imagemAtual === 0){
        console.log('Não existem elementos anteriores, portanto não é possével voltar!');
        setaVoltar.classList.add('fim');
    }

    console.log(imagemAtual)
});

