var tabtoggle = 0;

function expandir(){
    if (tabtoggle==0){
        document.getElementById('tab1').style.height = '400px';
        tabtoggle=1;
    }
    else{
        document.getElementById('tab1').style.height = '0px';
        tabtoggle=0;
    }
}

/////////////////////////////// A R M A Z E N A R    P R O D U T O S //////////////////////////////////

const listaProdutos = [], contUnidProds = [];

var contLista = 0;
function produto(nome){
    for (var cont1=0,cont2=0 ; cont1 < contLista && cont2!=1; cont1++){
        if (nome == listaProdutos[cont1]){
            contUnidProds[cont1]++;
            cont2++;
        }
    }
    if(cont2!=1){
    listaProdutos.push(nome);
    contUnidProds.push(1);
    contLista = contLista + 1;
    }
}

/////////////////////////////////// C R I A R    L I S T A /////////////////////////////////////////

const btn_abre_lista = document.querySelector("[id='botão-abre-lista-id']");
btn_abre_lista.addEventListener ('click', function() {
    var el = document.querySelector("[class='btn-lista']");
    var pa = el ? el.parentNode : null;

    if (pa) {
        pa.removeChild(el);
    }

    //////////////////////////////////Cria Lista
    const lista = document.createElement("div");
    const lugarTela = document.querySelector(".posição-list1");

    lista.classList.add("lista");

    lugarTela.insertAdjacentElement("afterbegin", lista);

    //////////////////////////////////Cria Cabeçalho da Lista
    const cabeçalho = document.createElement("div");
    const lugarLista = document.querySelector(".lista");

    cabeçalho.classList.add("tamanho");

    lugarLista.insertAdjacentElement("afterbegin", cabeçalho);

    /////////////////////////////////Criar texto e botão de fechar
    const btn_sair = document.createElement("button");
    const titulo_lista = document.createElement("label");
    const conteudo_titulo = document.createElement("span");
    const cabeçalhoLugar = document.querySelector(".tamanho");

    btn_sair.classList.add("btn-close");
    btn_sair.classList.add("btn-sair-posição");
    titulo_lista.classList.add("titulo-list");
    conteudo_titulo.id = 'titulo-lista';

    cabeçalhoLugar.insertAdjacentElement("afterbegin", titulo_lista);
    cabeçalhoLugar.insertAdjacentElement("beforeend", btn_sair);

    const botão_html = document.querySelector(".btn-sair-posição");
    botão_html.addEventListener('click', function() {
        var el2 = document.querySelector("[class='lista']");
        var pa2 = el2 ? el2.parentNode : null;

        if (pa2) {
            pa2.removeChild(el2);
            pa.appendChild(el);
        }
    })
    const titulo2 = document.querySelector(".titulo-list");
    titulo2.insertAdjacentElement("afterbegin", conteudo_titulo);
    document.getElementById("titulo-lista").innerHTML = ("Carrinho");

    /////////////////////////////////////Corpo da lista
    const divcorpo = document.createElement("div");
    divcorpo.classList.add("div-corpo-lista");
    lugarLista.insertAdjacentElement("beforeend", divcorpo);
    const div_corpo = document.querySelector(".div-corpo-lista");
    
    for(var cont=0; cont<contLista; cont++){
        const div_nomeProd = document.createElement("div");
        div_nomeProd.classList.add("div-corpo-prod");
        div_nomeProd.id = "nomeProd"+cont;
        div_corpo.appendChild(div_nomeProd);

        const nome_prod = document.createElement("p");
        nome_prod.id = 'nome-prod'+cont;
        nome_prod.classList.add('paragrafo-lista');

        const div_corpo2 = document.querySelector("#nomeProd"+cont);
        div_corpo2.appendChild(nome_prod);
        document.getElementById('nome-prod'+cont).innerText= "("+contUnidProds[cont]+") "+listaProdutos[cont];
    }
    ////////////////////////////////////Botão de concluir pedido
    const btn_concluir_pedido = document.createElement("button");
    var div_fim_lista = document.createElement("div");

    btn_concluir_pedido.classList.add("btn");
    btn_concluir_pedido.classList.add("btn-success");
    btn_concluir_pedido.classList.add("btn-whatsapp");
    div_fim_lista.classList.add("div-btn-whatsapp");
    btn_concluir_pedido.id='titulo-btn-concluir';

    lugarLista.insertAdjacentElement("beforeend", div_fim_lista);
    div_fim_lista = document.querySelector('.div-btn-whatsapp');
    div_fim_lista.insertAdjacentElement("beforeend", btn_concluir_pedido);
    const btn_concluir_pedido2 = document.querySelector("btn-whatsapp");
    document.getElementById("titulo-btn-concluir").innerHTML = ("Concluir Pedido");

    var mensagem = "Olá. Estou interessado em comprar os seguintes produtos:";
    var controle_repetição = 0;
    btn_concluir_pedido.addEventListener('click', function(){
        if(controle_repetição == 0){
            for (var cont=0; cont<contLista; cont++){
                mensagem += " ("+contUnidProds[cont]+") "+listaProdutos[cont]+";";
                controle_repetição++;
            }
        }
        window.open("https://wa.me/5511943536095?text=" + mensagem);
    });
});

//Fechar modal digitalização

var modalnum = 0
var cod = '';

function togglemodal(cod){
    if (modalnum==0){
        document.getElementById(cod).style.display = "block";
        modalnum=1;
    }
    else{
        document.getElementById(cod).style.display = "none";
        modalnum=0;
    }
}