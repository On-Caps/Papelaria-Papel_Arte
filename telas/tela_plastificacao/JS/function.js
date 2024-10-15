var tabtoggle = 0;
var lista = "Olá! Meu nome é ";

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

function send() {
    lista += document.getElementById('name').value;
    lista += " e meu Email é ";
    lista += document.getElementById('email').value + ". ";
    lista += "Eu gostaria de fazer uma plastificação de tamanho ";
    lista += document.getElementById('size').value + ". ";
    lista += "Observações: ";
    lista += document.getElementById('obs').value + ". ";
    lista += "É possível?";

    document.getElementById('mandar').href = "https://wa.me/5511943536095?text=" + lista;

}

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

