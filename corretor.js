const btErrado = document.getElementById('errado')
const btCerto = document.getElementById('correto')

async function consutaDados() {
    const retorno = await fetch('https://sheetdb.io/api/v1/p7fx5a53vumtf')
    const dados = await retorno.json()
    receba(dados)
    mandar(dados)
    btCerto.addEventListener('click', () => {
        const dates = mandar()
        enviarDadosParaAPI(dates)
        excluirDadosApi()
        setTimeout(function() { location.reload(); }, 800);
    })
}
consutaDados()

function receba(dados) {
    contador = dados[8].Contador1;
    contador = parseInt(contador)
    document.getElementById('Textos').innerHTML = dados[contador].Textos;
    return contador
}

function mandar() {
    contador2 = contador;
    contar = contador2 + 1
    const conta = {
        Contador: contar
    }
    return conta
}

async function enviarDadosParaAPI(conta) {
    try {
        const resposta = await fetch('https://sheetdb.io/api/v1/p7fx5a53vumtf', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(conta)
        })
    } catch (erro) {
        console.error(erro)
    }
}

async function excluirDadosApi() {
    try {
        const resposta = await fetch(`https://sheetdb.io/api/v1/p7fx5a53vumtf/Contador/${contador}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
        })
    } catch (erro) {
        console.error(erro)
    }
}

btErrado.addEventListener('click', () => {
    document.getElementById('mostrar').innerHTML = `<div></div>
    <h3>tipo de erro:</h3>
    <select name="data" id="selec">
    <option value="">Selecionar...</option>
    <option value="abr">Abreviação</option>
    <option value="ace">Acentuação</option>
    <option value="Adj">Adjetivo</option>
    <option value="adv">Advérbio</option>
    <option value="conj">Conjugação</option>
    <option value="aha">Há/A</option>
    <option value="ali">Outros Problemas</option>
    <option value="arc">Arcaísmo</option>
    <option value="bde">Balanceamento de delimitadores</option>
    <option value="cap">Letras Maiúsculas</option>
    <option value="cjc">Conjunções</option>
    <option value="cli">Clichê</option>
    <option value="cmt">Concordância entre modos e tempos verbais</option>
    <option value="con">Concordância Nominal</option>
    <option value="cop">Colocação Pronominal</option>
    <option value="cov">Concordância Verbal</option>
    <option value="cra">Crase</option>
    <option value="det">Artigos e determinantes</option>
    <option value="esp">Espaço</option>
    <option value="est">Estrangeirismo</option>
    <option value="ger">Gerúndio</option>
    <option value="lex">Inadequação Lexical</option>
    <option value="mal">Mau/Mal</option>
    <option value="mec">Problemas mecânicos</option>
    <option value="mor">Morfologia</option>
    <option value="neo">Neologismo</option>
    <option value="nol">Notações léxicas</option>
    <option value="num">Numerais</option>
    <option value="ond">Onde/Aonde</option>
    <option value="ort">Ortografia</option>
    <option value="par">Parônimos</option>
    <option value="ple">Plebeísmo</option>
    <option value="pre">Preposição</option>
    <option value="pro">Pronomes</option>
    <option value="prq">Uso de por que</option>
    <option value="ptn">Pontuação</option>
    <option value="ptp">Particípio</option>
    <option value="reg">Regência verbal</option>
    <option value="ren">Regência nominal</option>
    <option value="rep">Repetição Excessiva de Palavras</option>
    <option value="res">Repetição de Símbolos</option>
    <option value="sem">Pleonasmo vicioso</option>
    <option value="ver">verbos</option>
</select>
    <h3>texto certo:</h3>
    <input id="txtCerto">
    <br>
    <br>
    <button id="corrigir">Corrigir</button>
    <br>`
})