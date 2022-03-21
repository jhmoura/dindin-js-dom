//Ajustes da página de contatos
let acao = document.getElementById("formulario").setAttribute("acao", "sucesso.html")

let telefone = document.createElement("input")
telefone.setAttribute("type", "tel")
telefone.setAttribute("required", "yes")
telefone.setAttribute("placeholder", "telefone")
document.querySelector("textarea").insertAdjacentElement("beforebegin", telefone)

//3. O campo de mensagem está ultrapassando o tamanho do elemento pai.Podemos resolver adicionando o atributo box-sizing: border-box;

let tamanho = document.querySelector("textarea").setAttribute("style", "box-sizing: border-box")
//4. O botão não está do tamanho adequado, precisa ter uma largura maior;
console.log("teste1")

document.querySelector("#enviar").setAttribute("style", "width:100px")


console.log("teste2")

// 1- O header deve ter cor de fundo #2E948A.

let header = document.getElementsByTagName('header')
// console.log(header[0])
// document.getElementsByTagName('header').style.backgroundColor = '#2E948A'
header[0].style.backgroundColor = '#2E948A'

// 2 - No menu do header, está faltando o link do item Cursos que deve redirecionar para cursos.
let linkCursos = document.querySelector('#menu_opcoes nav a:nth-child(1)')
// console.log(linkCursos)
linkCursos.setAttribute('href', 'cursos.html')

//  Na etapa de depoimentos, o título deveria ser "O que falam sobre nós".
let oqueFalam = document.querySelector(".titulo.depoimento h3")
oqueFalam.innerHTML = "O que falam sobre nós"

let centralizar = document.getElementById("introducao")
centralizar.style.justifyContent="center"

let blog = document.querySelectorAll(".titulo h3")[1].innerHTML= "Mais conteúdo para você"

let maiusculas = document.querySelectorAll(".titulo")
maiusculas.forEach(item =>{
    item.style.textTransform = "uppercase"
})

let linkBlog = document.getElementById("todos_posts").setAttribute("href", "./blog.html")

let div = document.createElement('div')
div.innerHTML = `<div id="independencia">
    <img src="/imagens/independencia_financeira.png" width="180px" alt="Independência Financeira"/>
    <h2>Independência Financeira</h2>
    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat      nulla     ariatur.</p>
    <a class="comecar_agora" href="./curso.html">começar agora</a>
</div>`

let divprimeiro = document.querySelector('#investimentos')

divprimeiro.insertAdjacentElement("beforebegin",div)


