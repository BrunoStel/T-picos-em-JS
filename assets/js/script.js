
// //Modificando atributos
// function trocar(diretorio){
//     document.querySelector('#imagem').setAttribute('src', diretorio)
// }

// //Dimensões
// obterDados = () =>{
//     //Vai pegar o valor total padding+borda
//     console.log(document.querySelector('.texto').offsetWidth) 
//     console.log(document.querySelector('.texto').offsetHeight)

//     //Vai pegar o espaço do elemento + padding
//     console.log(document.querySelector('.texto').clientWidth)
//     console.log(document.querySelector('.texto').clientHeight)

//     //Vai me dar o valor do tamanho do CONTEUDO total (sem borda. sem barra de rolagem)
//      console.log(document.querySelector('.texto').scrollWidth)
//      console.log(document.querySelector('.texto').scrollHeight)
//  } 

//  obterDados()

//  //Scroll control
//  subir = () =>{
//     console.log(document.querySelector('.texto').scrollTop)
//     document.querySelector('.texto').scrollTo({
//         top:0, //Scroll vertical
//         left:0, //Scroll vertical
//         behavior:'smooth'
//     })
//  }

//  document.querySelector('#menu-opener').onclick = () =>{
//      let menu = document.querySelector('.menu-area')
//      menu.classList.toggle('active')
//  }




// //Métodos de arrays ------------------------------------------------------------------
// let pessoas = [
//     {id:1, nome: 'Bruno', sobrenome:'Stelmastchuk'},
//     {id:2, nome: 'Vitor', sobrenome:'Stelmastchuk'},
//     {id:3, nome: 'Abner', sobrenome:'Stelmastchuk'}
// ]

// //Método every (retorna true ou false, true se TODOS itens satisfizerem a condição)
// let pessoa = pessoas.every((item)=>{
//     if(item.sobrenome == 'Stelmastchuk'){return true}
// })
// console.log(pessoa)

// //Métodos some (retorna true ou false, true se PELO MENOS UM iten satisfizer a condição)
// let pessoa1 = pessoas.some((item)=>{
//     if(item.nome == 'Bruno'){return true}
// })
// console.log(pessoa1)


// //Método find (retorna o primeiro item que satisfaça a condição)
// let pessoa2 = pessoas.find((item)=>{
//     if(item.id == 1){return true}
// })
// console.log(pessoa2)

// //Método filter (retorna um novo array que satisfaça a condição)
// let pessoa3 = pessoas.filter((item)=>{
//     if(item.id >= 2){return true}
// })
// console.log(pessoa3)

// //Método map (retorna um novo array modificado)
// let pessoa4 = pessoas.map((item)=>{
//     return item.id //vai retornar um novo array somente com os ids
// })
// console.log(pessoa4)

// //Método findIndex(retorna o índice do item que satisfaça uma condição)

// let pessoa5 = pessoas.findIndex((item)=>{
//     return (item.id == 3) ? true : false
// })
// console.log(pessoa5)


// let arr = ['a','c','d','g','z','a','d','j','m','f']

// //Método sort (retorna um array por ordem alfabetica/numerica)
// let arr2 = arr.sort()
// console.log(arr2)

// //Método reverse (retorna um array com ordem invertida)
// let arr3 = arr2.reverse()
// console.log(arr3)



// //Intervalos----------------------------------------------------------------

// //setInterval
// let timer
// start = () => {
//      timer = setInterval(showTime, 1000) // vai executar de 1 em 1 segundo
// }

// stop = () => {clearInterval(timer)}

// function showTime() {
//     let d = new Date()
//     let h = d.getHours()
//     let m = d.getMinutes()
//     let s = d.getSeconds()
//     let horas = h + ':' + m + ':' + s

//     document.querySelector('.relogio').innerHTML = horas
// }

// //setTimeout

// setTimeout(()=>{
//     console.log('Testando timeout')
// },1000) //Vai executar após 1 segundo, uma única vez


// //Desconstrução Objeto
// let cliente ={
//     nome:'Bruno',
//     sobrenome:'Stelmastchuk',
//     idade:'26',
//     social:{
//         instagram:'brunoStel',
//         github:'Brunostel'
//     }
// }

// let {nome, sobrenome:sobrenomeRenomeado, idade= 'Não possui', endereco ='Não tem', social:{github}} = cliente
// let {instagram}= cliente.social

// console.log(nome)
// console.log(sobrenomeRenomeado)
// console.log(idade)
// console.log(endereco)
// console.log(github)
// console.log(instagram)

// let cliente1 = {
//     nome:'Lacerda',
//     sobrenome:'Silva'
// }

// function pegarNome({nome, sobrenome}){
//     return `${nome} ${sobrenome}`
// }

// console.log(pegarNome(cliente))

// console.log(pegarNome(cliente1))


// //Desconstrução Array
// let array = ['Bruno', 'Stelmastchuk', 'Roque', '@brunostel']

// let [nomePessoa,,,insta] = array //Na ordem do índice
// console.log(nomePessoa)
// console.log(insta)

// let [nomeArray, sobrenomeArray] = ['Lucas', 'Santos']

// console.log(`${nomeArray} ${sobrenomeArray}`)


//  criar= () =>[1,2,3]

// let [a,b,c] = criar()
// console.log(a,b,c)




// //Operador spread - Arrays e Objetos
// let numeros = [1,2,3,4]
// let outros = [...numeros, 5,6,7,8]
// console.log(outros)

// let info = {
//     nome:'Bruno',
//     sobrenome:'Roque'
// }

// let novaInfo ={
//     ...info,
//     idade:'26'
// }

// console.log(novaInfo)


// //Operador rest
// adicionar = (...numeros) =>{ //Para múltiplos parâmetros que não sabemos quantos serão
//     console.log(numeros)
// }

// adicionar(1,2,3,4,5)

// let exemplo = ['Bruno', 'Abner', 'Vitor']
// add = (Array, ...Args) => {
//     let novoArray = [...Array, ...Args]
//     return novoArray
// }

// let pessoas_array = add(exemplo, 'Adão', 'Ana', 'Gabriela')

// console.log(pessoas_array)


// //Include e repeat

// let list = ['carne', 'ovo', 'arroz', 'farinha']

// let example = 'Bruno Stel'

// console.log(list.includes('carne')) //Retorna true
// console.log(list.includes('queijo')) //Retorna false

// console.log(example.includes('Stel'))//Retorna true
// console.log(example.includes('Stelmas'))//Retorna false

// let person = 'Joao'
// console.log(person.repeat(5))
// console.log('a'.repeat(30))


// //Object keys, values, entries
// let new_list = ['pipoca', 'manteiga', 'cacau']

// console.log(Object.keys(new_list))
// console.log(Object.values(new_list))
// console.log(Object.entries(new_list))

// let new_pessoa = {
//     nome: 'Julia',
//     sobrenome:'Pereira',
//     idade:'55'
// }

// console.log(Object.keys(new_pessoa))
// console.log(Object.values(new_pessoa))
// console.log(Object.entries(new_pessoa))


// //padStart, padEnd
// let number = '9960691'
// console.log(number.padEnd(9, '*')) //NO MÍNIMO 9 CARACTERES, se nao ira preencher com * ao final da string

// console.log(number.padStart(9, '*')) //NO MÍNIMO 9 CARACTERES, se nao ira preencher com * no começo da string

// let cartao ='7634812734817345'

// let final_cartao = cartao.slice(-4)

// console.log(`Este é seu cartão: ${final_cartao.padStart(16, '*')} ?`)


// //JSON.parse  -Transforma string json em objeto 

// let person_new = '{"nome":"Bruno", "sobrenome":"Stelmastchuk", "idade": 26}' //String de JSON (como vem nas requisições)
// let person_json = JSON.parse(person_new) //Transforma em um objeto 

// console.log(person_json)

// //JSON.stringify - transforma o objeto em string json

// console.log(JSON.stringify(person_json))






//----------------------------------------------Index 2 ----------------------------------------------------------
//Promisses - Fetch

const urlUsuarios = 'https://jsonplaceholder.typicode.com/users'

const httpRequest = response => {

    if(!response.ok){ //Caso a requisição não retorne um HTTP entre 200 e 299 criará um novo erro
        throw new Error(`HTTP error, status ${response.status}`) //Retornará um erro que será "pego" pelo catch
    } 

    return response.json()
}

const adicionarUsuarios = json =>{ //Manipulação da resposta no DOM
    let html = '<div style="text-align:center; font-size:30px; font-weight:bold; margin-top:10px">Usuários Cadastrados - Fetch</div>'

    json.forEach(elem =>{
        html += `<li>ID:${elem.id} <strong>Nome:${elem.name}</strong> Usuário:${elem.username} E-mail:${elem.email} Cidade: ${elem.address.city}</li><hr>`
    })


    document.querySelector('.usuarios').innerHTML = html

    return json[0].address //Será capturado pelo 3 then
}

const handleRequestError = error =>{ //Exibindo o erro criado no httpRequest, caso haja um erro na requisição
    console.log(error)
}

fetch(urlUsuarios)
    .then(httpRequest)
    .then(adicionarUsuarios)
    .then(json => {console.log(json.city)}) //Demonstrando como podemos criar uma cascata de then
    .catch(handleRequestError)
    
    
//Assync/await com axios


    const adicionarUsuarios2 =  async () =>{ 

        const json = await axios.get(urlUsuarios)

        let html = '<div style="text-align:center; font-size:30px; font-weight:bold; margin-top:10px">Usuários Cadastrados - Axios</div>'

        json.data.forEach(elem =>{
            html += `<li>ID:${elem.id} <strong>Nome:${elem.name}</strong> Usuário:${elem.username} E-mail:${elem.email} Cidade: ${elem.address.city}</li><hr>`
        })
    

        document.querySelector('.usuarios2').innerHTML = html

    }

adicionarUsuarios2()




//Pokemon - Criando promisse com async-await
const getPokemon2 =  (number) =>  `https://pokeapi.co/api/v2/pokemon/${number}`

const adicionarUsuarios3 = async (...numbers) =>{ 

    let html = '<div style="text-align:center; font-size:30px; font-weight:bold; margin-top:10px">Pokemons capturados - Promise - Async/Await</div>'

    
    const numberLength = numbers.length
    i = 0
    const aPromisse = new Promise((resolve, reject)=>{
        numbers.forEach(async (number)=>{
        try {
            let pokemon = await axios.get(getPokemon2(number))
            html += `<li>ID:${pokemon.data.id} <strong>Nome:${pokemon.data.name}</strong> Local:${pokemon.data.location_area_encounters}  URL: ${pokemon.data.species.url}</li><hr>`
            i++
        } catch (error) {
            html += `<li>Pokemon de número ${number} não existe</li><hr>`
            i++
        }
        if(numberLength == i){ resolve(html)}
        })
     
    }).then(val =>{
        document.querySelector('.pokemons').innerHTML = val
    })

}

adicionarUsuarios3(5,898,12,900,1050, 560, 789, 1870)

//Pokemon2 - somente com assync-await
const getPokemon =  (number) =>  `https://pokeapi.co/api/v2/pokemon/${number}`

const adicionarPokemon = async (...numbers) =>{ 
    document.querySelector('.pokemons2').innerHTML = '<div style="text-align:center; font-size:30px; font-weight:bold; margin-top:10px">Capturando pokemons...</div>'

    let html = '<div style="text-align:center; font-size:30px; font-weight:bold; margin-top:10px">Pokemons capturados - Axios</div>'

    //console.log(numbers)
       for (let number of numbers[0]){
            try {
                let pokemon = await axios.get(getPokemon(number))
                html += `<li>ID:${pokemon.data.id} <strong>Nome:${pokemon.data.name}</strong> Local:${pokemon.data.location_area_encounters}  URL: ${pokemon.data.species.url}</li><hr>`
            }catch (error) {
                html += `<li>Pokemon de número ${number} não existe</li><hr>`
                console.log(error)
            }
        }

      
        document.querySelector('.pokemons2').innerHTML = html

    }


 const listarPokemons = () =>{
    const regExp = /_|\s|-|,/
    let arr = (document.querySelector('.entrada').value).split(regExp)
    adicionarPokemon(arr)
 }