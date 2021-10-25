
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




//Métodos de arrays ------------------------------------------------------------------
let pessoas = [
    {id:1, nome: 'Bruno', sobrenome:'Stelmastchuk'},
    {id:2, nome: 'Vitor', sobrenome:'Stelmastchuk'},
    {id:3, nome: 'Abner', sobrenome:'Stelmastchuk'}
]

//Método every (retorna true ou false, true se TODOS itens satisfizerem a condição)
let pessoa = pessoas.every((item)=>{
    if(item.sobrenome == 'Stelmastchuk'){return true}
})
console.log(pessoa)

//Métodos some (retorna true ou false, true se PELO MENOS UM iten satisfizer a condição)
let pessoa1 = pessoas.some((item)=>{
    if(item.nome == 'Bruno'){return true}
})
console.log(pessoa1)


//Método find (retorna o primeiro item que satisfaça a condição)
let pessoa2 = pessoas.find((item)=>{
    if(item.id == 1){return true}
})
console.log(pessoa2)

//Método filter (retorna um novo array que satisfaça a condição)
let pessoa3 = pessoas.filter((item)=>{
    if(item.id >= 2){return true}
})
console.log(pessoa3)

//Método map (retorna um novo array modificado)
let pessoa4 = pessoas.map((item)=>{
    return item.id //vai retornar um novo array somente com os ids
})
console.log(pessoa4)

//Método findIndex(retorna o índice do item que satisfaça uma condição)

let pessoa5 = pessoas.findIndex((item)=>{
    return (item.id == 3) ? true : false
})
console.log(pessoa5)


let arr = ['a','c','d','g','z','a','d','j','m','f']

//Método sort (retorna um array por ordem alfabetica/numerica)
let arr2 = arr.sort()
console.log(arr2)

//Método reverse (retorna um array com ordem invertida)
let arr3 = arr2.reverse()
console.log(arr3)



//Intervalos----------------------------------------------------------------
