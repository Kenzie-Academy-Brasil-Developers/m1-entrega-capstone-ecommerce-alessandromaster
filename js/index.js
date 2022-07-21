const listaProdutos = [
    {
      id: 1,
      img: "./img/tela 1.png",
      nameItem: "Tela samsung np350",
      description:
        "As telas AleMaster são provenientes das maiores fabricantes de telas de cristal líquido e CCFL do mundo.",
      value: 419.15,
      addCart: "Adicionar ao carrinho",
      categoria: ["Tela"],
    },
    {
      id: 2,
      img: "./img/tela 2.png",
      nameItem: "Tela Acer a315-53",
      description:
        "As telas AleMaster são provenientes das maiores fabricantes de telas de cristal líquido e CCFL do mundo.",
      value: 528.96,
      addCart: "Adicionar ao carrinho",
      categoria: ["Tela"],
    },
    {
      id: 3,
      img: "./img/tela 3.png",
      nameItem: "Tela Vaio FE15",
      description:
        "As telas AleMaster são provenientes das maiores fabricantes de telas de cristal líquido e CCFL do mundo.",
      value: 692.69,
      addCart: "Adicionar ao carrinho",
      categoria: ["Tela"],
    },
    {
      id: 4,
      img: "./img/bateria 1.png",
      nameItem: "Bateria eMachines g430<",
      description:
        "Nossos produtos AleMaster são de confiança e possuem compatibilidade garantida.",
      value: 159.90,
      addCart: "Adicionar ao carrinho",
      categoria: ["Bateria"],
    },
    {
      id: 5,
      img: "./img/bateria 2.png",
      nameItem: "Bateria Acer e1-471",
      description:
        "Nossos produtos AleMaster são de confiança e possuem compatibilidade garantida.",
      value: 149.90,
      addCart: "Adicionar ao carrinho",
      categoria: ["Bateria"],
    },
    {
      id: 6,
      img: "./img/bateria 3.png",
      nameItem: "Bateria Acer ES1-531",
      description:
        "Nossos produtos AleMaster são de confiança e possuem compatibilidade garantida.",
      value: 199.90,
      addCart: "Adicionar ao carrinho",
      categoria: ["Bateria"],
    },
    {
      id: 7,
      img: "./img/case not acwesório.png",
      nameItem: "Bolsa para notebook",
      description:
        "A bolsa de transporte para notebook AleMaster oferece um tecido repelente à água e design simples.",
      value: 156.70,
      addCart: "Adicionar ao carrinho",
      categoria: ["Acessórios"],
    },
    {
      id: 8,
      img: "./img/suporte-notebook_.png",
      nameItem: "Suporte para notebook",
      description:
        "Nossos produtos AleMaster são de confiança e possuem compatibilidade garantida.",
      value: 110.50,
      addCart: "Adicionar ao carrinho",
      categoria: ["Acessórios"],
    },
    {
      id: 9,
      img: "./img/suporte_Acessório_resfriamento.png",
      nameItem: "Suporte refrigerado",
      description:
        "Tenha segurança e praticidade enquanto utiliza o seu notebook com a base refrigerada AleMaster",
      value: 230.90,
      addCart: "Adicionar ao carrinho",
      categoria: ["Acessórios"],
    },
  ];

let tagUl    = document.querySelector(".listaProdutos")
let carrinho  = document.querySelector(".Carrinho")
let contagemIte = document.querySelector(".contagemItem")
let contagemTot = document.querySelector(".contagemValor")

function listarProdutoVitrine (produtos, section){
  section.innerHTML = ""


    for(let i = 0; i < produtos.length; i++){
        let produto = produtos[i]
        let arquiteturaCriada = arquitetura(produto)
        section.appendChild(arquiteturaCriada)
    }
}
listarProdutoVitrine (listaProdutos, tagUl)


function arquitetura (item){
    let id = item.id
    let imagem = item.img
    let nome = item.nameItem
    let descricao = item.description
    let preco = item.value
    let categoria = item.categoria
  
    let tagLi   = document.createElement("li")
    tagLi.classList.add("produtos")
    tagLi.id = id
  
    let tagImg  = document.createElement("img")
    tagImg.src = imagem
    tagImg.alt = nome
    tagImg.title = nome
    tagLi.appendChild(tagImg)
  
    let tagDiv = document.createElement("div")
    tagDiv.classList.add("informacoes")
    tagLi.appendChild(tagDiv)

    let tagSpan = document.createElement("span")
    tagSpan.classList.add("categoria")
    tagSpan.innerText = categoria
  
    let tagH1 = document.createElement("h1")
    tagH1.classList.add("titulo")
    tagH1.innerText = nome
  
    let tagP1 = document.createElement("p")
    tagP1.classList.add("descricao")
    tagP1.innerText = descricao

    let tagP2= document.createElement("p")
    tagP2.classList.add("valorProduto")
    tagP2.innerText = preco
  
    let tagButao = document.createElement("button")
    tagButao.classList.add("butaoAddCarrinho")
    tagButao.innerText = "Adicionar ao carrinho"

    tagDiv.append(tagSpan, tagH1, tagP1, tagP2, tagButao)
  
return tagLi
}

tagUl.addEventListener("click", confirmandoProduto)



function confirmandoProduto (evento){

  let btnClick = evento.target

  if(btnClick.tagName == "BUTTON"){

    let produtoLi = btnClick.closest("li")
    let idProduto = produtoLi.id
   
    let produtoCheck = listaProdutos.find(function(product){
      if(product.id == idProduto){
        return product
      }
    })
    addItemCarrinho (produtoCheck)
    
  }
}
let recebendoProduto = []

function addItemCarrinho (itemCheck){
  recebendoProduto.push(itemCheck)
  listarProdutoVitrine(recebendoProduto, carrinho)
}
