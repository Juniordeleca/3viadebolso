var candidatos = ["Ciro Gomes", "Rodrigo Pacheco", "Mandeta", "Sérgio Moro", "Dória", "Bolsonaro", "ACM Neto", "Eduardo Leite", "o Crackinho, seu amiguinho",
"Alessandro Vieira", "o Véio da Havan", "Mia Kalifha" ,"o senador Heinze", "Romeu Zema", "Simone Tebet", "Batoré", "Sérgio Reis", "Zé Trovão", "Michel Temer", 
"Tiririca", "Bulbassauro", "Allan dos Santos", "Roberto Jefferson"]
var imagens = ["ciro", "rodrigoPacheco", "mandeta", "moro", "doria", "bolsonaro", "acmNeto", "eduardoLeite", "crackinho", "alessandroVieira", "veio",
"miaKalifha", "heinze", "romeuZema", "simone", "batore", "sergioReis", "zeTrovao", "temer", "tiririca", "bulbassauro", "allan", "bobJef"]

var candidato;

function gerarCandidato() {
    document.getElementById("btnGerar");
    var numeroCandidato = parseInt(Math.random() * 23);
    candidato = candidatos[numeroCandidato];
    console.log(candidato)
    var novoTitulo = document.getElementById("titulo");
    novoTitulo.innerHTML = "Seu candidato é " + candidato;
    var novaImagem = document.getElementById("imgcan");
    var imagem = imagens[numeroCandidato];
    novaImagem.innerHTML = "<img src='images/" + (imagem) + ".jpg' width='360' heght='300'/>";  
    
    //     if (candidato=="Ciro Gomes") {
    //         novaImagem.innerHTML = "<img src='images/ciro.jpg' width='360' heght='300'/>";
    //     }
    //     else if (candidato=="Mandeta") {
    //         novaImagem.innerHTML = "<img src='images/mandeta.jpg' width='360' heght='300'/>";
    //     }
    //     else if (candidato=="Sérgio Moro") {
    //         novaImagem.innerHTML = "<img src='images/moro.jpg' width='360' heght='300'/>";
    //     }
    //     else if (candidato=="Dória") {
    //         novaImagem.innerHTML = "<img src='images/doria.jpg' width='360' heght='300'/>";
    //     }
    //     else if (candidato=="Bolsonaro") {
    //         novaImagem.innerHTML = "<img src='images/bolsonaro.jpg' width='360' heght='300'/>";
    //     }
    //     else if (candidato=="ACM Neto") {
    //         novaImagem.innerHTML = "<img src='images/acmNeto.jpg' width='360' heght='300'/>";
    //     }
    //     else if (candidato=="Eduardo Leite") {
    //         novaImagem.innerHTML = "<img src='images/eduardoLeite.jpg' width='360' heght='300'/>";
    //     }
    //     else if (candidato=="Alessandro Vieira") {
    //         novaImagem.innerHTML = "<img src='images/alessandroVieira.jpg' width='360' heght='300'/>";
    //     }
    //     else if (candidato=="Simone Tebet") {
    //         novaImagem.innerHTML = "<img src='images/simone.jpg' width='360' heght='300'/>";
    //     }
    //     else if (candidato=="Batoré") {
    //         novaImagem.innerHTML = "<img src='images/batore.jpg' width='360' heght='300'/>";
    //     }    
    //     else if (candidato=="Sérgio Reis") {
    //         novaImagem.innerHTML = "<img src='images/sergioReis.jpg' width='360' heght='300'/>";
    //     }
    //     else if (candidato=="Zé Trovão") {
    //         novaImagem.innerHTML = "<img src='images/zeTrovao.jpg' width='360' heght='300'/>";
    //     }
    //     else if (candidato=="Michel Temer") {
    //         novaImagem.innerHTML = "<img src='images/temer.jpg' width='360' heght='300'/>";
    //     }
    //     else if (candidato=="Tiririca") {
    //         novaImagem.innerHTML = "<img src='images/tiririca.jpg' width='360' heght='300'/>";
    //     }
    //     else if (candidato=="Bulbassauro") {
    //         novaImagem.innerHTML = "<img src='images/bulbassauro.jpg' width='360' heght='300'/>";
    //     }
    //     else if (candidato=="Rodrigo Pacheco") {
    //         novaImagem.innerHTML = "<img src='images/rodrigoPacheco.jpg' width='360' heght='300'/>";
    //     }
    //     else if (candidato=="Romeu Zema") {
    //         novaImagem.innerHTML = "<img src='images/romeuZema.jpg' width='360' heght='300'/>";
    //     }
    //     else if (candidato=="o Véio da Havan") {
    //         novaImagem.innerHTML = "<img src='images/veio.jpg' width='360' heght='300'/>";
    //     }
    //     else if (candidato=="o Crackinho, seu amiguinho") {
    //         novaImagem.innerHTML = "<img src='images/crackinho.jpg' width='360' heght='300'/>";
    //     }
    //     else if (candidato=="Mia Kalifha") {
    //         novaImagem.innerHTML = "<img src='images/miaKalifha.jpg' width='360' heght='300'/>";
    //     }
    //     else if (candidato=="o senador Heinze"){
    //         novaImagem.innerHTML = "<img src='images/heinze.jpg' width='360' heght='300'/>";
    //     }
    //     else if (candidato=="Roberto Jefferson") {
    //         novaImagem.innerHTML = "<img src='images/bobJef.jpg' width='360' heght='300'/>";
    //     }
    //     else if(candidato=="Allan dos Santos") {
    //         novaImagem.innerHTML = "<img src='images/allan.jpg' width='360' heght='300'/>";
    //     }
    //     else {
    //     //     console.log("deu certo")
    //      }        
    console.log(novoTitulo);
        }
    //titulo.getElementById = ("titulo" + "candidato");
    //element.innerHTML = ("titulo" + "candidato")
    // let img = document.createElement("img");
    // img.src=("https://exame.com/wp-content/uploads/2018/07/2018-07-20t194155z_1_lynxmpee6j1ks_rtroptp_3_politica-ciro-programa-prelim-1-e1532522155477.jpg");
    // document.body.appendChild(img);




//function adicionarFilme() {
//    var campoFilme = document.getElementById("filme").value;
//    if (campoFilme.endsWith(".jpg")) {
//        listarFilmesNaTela(campoFilme);
//    } else {
//        console.error("Endereço de filme inválido");
//        alert("Você é burro, cara!");
//    }
//    document.getElementById("filme").value = "";
//}

function listarFilmesNaTela(filme) {
    console.log(filme);
    var elementoFilme = "<img src=" + filme + ">";
    var elementoListaFilmes = document.getElementById("listaFilmes");
    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilme;
}