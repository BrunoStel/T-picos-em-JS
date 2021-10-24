
//Modificando atributos
function trocar(diretorio){
    document.querySelector('#imagem').setAttribute('src', diretorio)
}

//Dimensões
obterDados = () =>{
    //Vai pegar o valor total padding+borda
    console.log(document.querySelector('.texto').offsetWidth) 
    console.log(document.querySelector('.texto').offsetHeight)

    //Vai pegar o espaço do elemento + padding
    console.log(document.querySelector('.texto').clientWidth)
    console.log(document.querySelector('.texto').clientHeight)

    //Vai me dar o valor do tamanho do CONTEUDO total (sem borda. sem barra de rolagem)
     console.log(document.querySelector('.texto').scrollWidth)
     console.log(document.querySelector('.texto').scrollHeight)
 } 

 obterDados()

 //Scroll control
 subir = () =>{
    console.log(document.querySelector('.texto').scrollTop)
    document.querySelector('.texto').scrollTo({
        top:0, //Scroll vertical
        left:0, //Scroll vertical
        behavior:'smooth'
    })
 }

 document.querySelector('#menu-opener').onclick = () =>{
     let menu = document.querySelector('.menu-area')
     menu.classList.toggle('active')
 }


