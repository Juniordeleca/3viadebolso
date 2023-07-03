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
    
    
    console.log(novoTitulo);
        }
