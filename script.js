var jogador = {}
var jogadores = []


function construtorJogador(nome, imagem) {
    return (jogador = {
        nome: nome,
        imagem: imagem,
        partidas: 0,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0
    });
}

function adicionarJogador() {
    debugger
    var nome = document.getElementById('nomeJogador').value
    var imagem = document.getElementById('imagemJogador').value
    if (nome == '') {
        document.getElementById('msgErro').innerHTML = '<h3>Insira um nome para o jogador!</h3>'
        return
    }
    if (imagem == '') {
        document.getElementById('msgErro').innerHTML = '<h3>Insira uma imagem para o jogador!</h3>'
        return
    }
    document.getElementById('msgErro').innerHTML = ''

    jogadores.push(construtorJogador(nome, imagem))
    document.getElementById('nomeJogador').value = ''
    document.getElementById('imagemJogador').value = ''

    exibeJogadores(jogadores)
}

function calculaPontos(jogador) {
    jogador.pontos = jogador.vitorias * 3 + jogador.empates
}

function calculaPartidas(jogador) {
    jogador.partidas = jogador.vitorias + jogador.empates + jogador.derrotas
}

function adicionarVitoria(i) {
    jogadores[i].vitorias++
    exibeJogadores(jogadores)
}

function adicionarEmpate(i) {
    jogadores[i].empates++
    exibeJogadores(jogadores)
}

function adicionarDerrota(i) {
    jogadores[i].derrotas++
    exibeJogadores(jogadores)
}

function exibeJogadores(jogadores) {
    console.log(jogadores)
    var tabela = ''
    for (var i = 0; i < jogadores.length; i++) {
        calculaPontos(jogadores[i])
        calculaPartidas(jogadores[i])
        tabela += "<tr>"
        tabela += "<th><img class='imgJogador' src=" + jogadores[i].imagem + "></th>"
        tabela += "<td>" + jogadores[i].nome + "</td>"
        tabela += "<td>" + jogadores[i].pontos + "</td>"
        tabela += "<td>" + jogadores[i].partidas + "</td>"
        tabela += "<td>" + jogadores[i].vitorias + "</td>"
        tabela += "<td>" + jogadores[i].empates + "</td>"
        tabela += "<td>" + jogadores[i].derrotas + "</td>"
        tabela += "<td>"
        tabela += '<button class="acoes" onclick="adicionarVitoria(' + i + ')">Vitória</button>'
        tabela += '<button class="acoes" onclick="adicionarEmpate(' + i + ')">Empate</button>'
        tabela += '<button class="acoes" onclick="adicionarDerrota(' + i + ')">Derrota</button>'
        tabela += "</td>"
        tabela += "</tr>"
    }
    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = tabela
}

function zerarPontos() {
    for (var i = 0; i < jogadores.length; i++) {
        jogadores[i].vitorias = 0
        jogadores[i].empates = 0
        jogadores[i].derrotas = 0
    }
    exibeJogadores(jogadores)
}

function reiniciarJogo() {
    var tabelaJogadores = document.getElementById('tabelaJogadores')
    tabelaJogadores.innerHTML = ''
    for (var i = jogadores.length; i > 0; i--) {
        jogadores.pop()
    }
}

