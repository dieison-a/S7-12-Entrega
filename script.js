// chamando Body
let body = document.querySelector("body")

// criando Main e colocando dentro do Body
let tagMain = document.createElement("main")
body.appendChild(tagMain)

// criando array de produtos
let products = [
    {   nome: "Arroz",       preco: 3.5,  },
    {   nome: "Bala",        preco: 4,    },
    {   nome: "Cerveja",     preco: 2.55, },
    {   nome: "Damasco",     preco: 6,    },
    {   nome: "Ervilhas",    preco: 3,    },
    {   nome: "Feijão",      preco: 4,    },
    {   nome: "Goiabada",    preco: 3.75, },
    {   nome: "Hamburguer",  preco: 1.7,  },
    {   nome: "Iogurte",     preco: 3.99, },
    {   nome: "Jabuticaba",  preco: 4.25, },
    {   nome: "Kiwi",  preco: 6.25, },
    {   nome: "Leite",  preco: 4.25, },
    {   nome: "Macarrão",  preco: 3.6, },
    {   nome: "Nozes",  preco: 8.99, },
    {   nome: "Ovos",  preco: 8, }
]

// criando Section do Carrinho de Compras e colocando dentro de Main
let sectionCarrinho = document.createElement("section")
sectionCarrinho.id = "carrinhoCompras"
tagMain.appendChild(sectionCarrinho)

// criando Ul e colocando dentro da Section do Carrinho
let tagUl = document.createElement("ul")
tagUl.id = "productList"
sectionCarrinho.appendChild(tagUl)

// criando Li pegando dados do array de produtos e colocando dentro do Ul
products.forEach((list) => {
    let tagLi = document.createElement("li")
    tagLi.id = "productItem"
    tagUl.appendChild(tagLi)
    
    // criando Section com detalhes dos produtos (nome e preços) e colocando dentro do Li
    let tagSection = document.createElement("section")
    tagSection.id = "productDetails"
    tagSection.innerText = `${list.nome} - R$${list.preco.toFixed(2)}`
    tagLi.appendChild(tagSection)
})

// criando Function para somar preços dos produtos
function somar(precos) {
    let total = 0
    for (let i = 0; i < precos.length; i++) {
        let valores = products[i].preco
        total += valores
    }
    return total.toFixed(2)
}

//  criando Span e colocando dentro da Section do Carrinho
let tagSpan = document.createElement("span")
tagSpan.id = "valorTotal"
tagSpan.innerText = `Valor Total: R$${somar(products)}`
sectionCarrinho.appendChild(tagSpan)

// criando quebra de linha
let quebra = document.createElement("br")
sectionCarrinho.appendChild(quebra)

//  criando Button e colocando dentro da Section do Carrinho
let button = document.createElement("button")
button.id = "buttonEnd"
button.innerText = "Finalizar Compras"
sectionCarrinho.appendChild(button)