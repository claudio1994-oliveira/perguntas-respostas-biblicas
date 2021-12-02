var i = 0
var imagem = document.getElementById('img-modal')


function valida() {
    alert("A resposta certa é " + array[i]['certa'] + "\n")
}

function proxima() {
    if (array.length <= (i + 1)) {
        alert("Não tem mais perguntas")
    } else {
        i = i + 1
        document.getElementById("pergunta").innerHTML = array[i]['pergunta']
        document.getElementById("a").innerHTML = array[i]['a']
        document.getElementById("b").innerHTML = array[i]['b']
        document.getElementById("c").innerHTML = array[i]['c']
        document.getElementById("certa").innerHTML = array[i]['certa']
        document.getElementById("dificuldade").innerHTML = "Dificuldade: " + array[i]['dificuldade']
        imagem.src = array[i]['imagem']
    }
}


function anterior() {
    if (i < 0) {
        alert("Não tem como voltar")
    } else {
        i = i - 1
        document.getElementById("pergunta").innerHTML = array[i]['pergunta']
        document.getElementById("a").innerHTML = array[i]['a']
        document.getElementById("b").innerHTML = array[i]['b']
        document.getElementById("c").innerHTML = array[i]['c']
        document.getElementById("certa").innerHTML = array[i]['certa']
        document.getElementById("dificuldade").innerHTML = "Dificuldade: " + array[i]['dificuldade']
        imagem.src = array[i]['imagem']
    }
}

var array = [{
        pergunta: "1 - Quantas pragas foram enviadas ao Egito?",
        a: "a) 7 Pragas",
        b: "b) 10 Pragas",
        c: "c) 3 Pragas",
        certa: "b) 10 Pragas. Referência bíblica: Êxodo capítulo 7 ao 10.",
        dificuldade: "baixa",
        imagem: "images/Imagem10.png"
    },
    {
        pergunta: "2 - Quem foi lançado na cova dos leões?",
        a: "a) Paulo",
        b: "b) José",
        c: "c) Daniel.",
        certa: "c) Daniel. Referência bíblica: Daniel 6:16.",
        dificuldade: "baixa",
        imagem: "images/Imagem9.png"
    },
    { pergunta: "3 - Qual instrumento Davi gostava de tocar?", a: "a) Tambor", b: "b) Harpa", c: "c) Flauta", certa: "b) Harpa. Referência bíblica: 1 Samuel 16:23.", dificuldade: "Média", imagem: "images/Imagem1.png" },
    { pergunta: "4 - Quando Jesus nasceu, onde Ele foi colocado?", a: "a) Foi colocado numa cama.", b: "b) Foi colocado numa manjedoura.", c: "c) Foi colocado em um trono.", certa: "b) Foi colocado numa manjedoura. Referência bíblica: Lucas 2:16.", dificuldade: "Baixa", imagem: "images/Imagem2.png" },
    { pergunta: "5 - Quando a mulher com fluxo de sangue tocou nas vestes de Jesus, no que ela pensava?", a: "a) 'Se eu tão somente tocar em seu manto, ficarei curada'.", b: "b) 'Tenho que chamar a atenção de Jesus para ser curada'.", c: "c)'Tenho que interromper o caminho de Jesus'.", certa: "a) 'Se eu tão somente tocar em seu manto, ficarei curada'. Referência bíblica: Mateus 9:20-22.", dificuldade: "Baixa", imagem: "images/Imagem3.png" },
    { pergunta: "6 - Na parábola do semeador, quais sementes que cresceram e deram uma boa colheita?", a: "a) As sementes que caíram nas pedras.", b: "b) As sementes que caíram em boa terra.", c: "c) As sementes que caíram entre os espinhos.", certa: "b) As sementes que caíram em boa terra. Referência bíblica: Mateus 13:23.", dificuldade: "Baixa", imagem: "images/Imagem4.png" },
    { pergunta: "7 - Jesus comparou o Reino de Deus a qual semente?", a: "a) Ao grão de mostarda.", b: "b) Ao grão de milho.", c: "c) A semente de uva.", certa: "a) Ao grão de mostarda. Referência bíblica: Mateus 13:31-32.", dificuldade: "Média", imagem: "images/Imagem5.png" },
    { pergunta: "8 - Quem são conhecidos como os patriarcas na Bíblia?", a: "a) Jesus, Maria e José", b: "b) Pedro, João e Tiago", c: "c) Abraão, Isaque e Jacó", certa: "c) Abraão, Isaque e Jacó. Referência bíblica: Êxodo 3:6.", dificuldade: "Média", imagem: "images/Imagem6.png" },
    { pergunta: "9 - Quem ensinou os discípulos a oração do 'Pai nosso'?", a: "a) Os fariseus", b: "b) Jesus", c: "c) Paulo", certa: "b) Jesus. Referência bíblica: Mateus 6:5-15.", dificuldade: "Baixa", imagem: "images/Imagem7.png" },
    { pergunta: "10 - Quem foi o 'assistente' do profeta Elias?", a: "a) Eliseu", b: "b) Enoque", c: "c) Jonas", certa: "a) Eliseu. Referência bíblica: 1 Reis 19:19-21.", dificuldade: "Alta", imagem: "images/Imagem8.png" },
    { pergunta: "11 - Na transfiguração, quem apareceu ao lado de Jesus?", a: "a) Enoque e Elias", b: "b) Elias e Moisés", c: "c) Abraão e Isaque", certa: "b) Elias e Moisés. Referência bíblica: Lucas 9:29-30.", dificuldade: "Alta", imagem: "images/Imagem9.png" },
    { pergunta: "12 - Qual é o último capítulo da Bíblia?", a: "a) Apocalipse 22", b: "b) Apocalipse 16", c: "c) Malaquias 4", certa: "a) Apocalipse 22. Referência bíblica: Apocalipse 22.", dificuldade: "Média", imagem: "images/Imagem10.png" },
    { pergunta: "13 - Qual desses nomes não era profeta?", a: "a) Ezequiel", b: "b) Davi", c: "c) Jeremias", certa: "b) Davi foi apenas rei. Referência bíblica: 2 Samuel 5:4-5.", dificuldade: "Média", imagem: "images/Imagem12.png" },
    { pergunta: "14 - Quem era os gentios na Bíblia?", a: "a) Eram os judeus.", b: "b) Eram religiosos.", c: "c) Eram os 'não judeus'.", certa: "c) Eram os 'não judeus'. Referência bíblica: Romanos 3:29-30.", dificuldade: "Alta", imagem: "images/Imagem12.png" },
    { pergunta: "15 - O que aconteceu quando Paulo e Silas louvavam na prisão?", a: "a) Houve um terremoto na prisão e todas as portas se abriram!", b: "b) Os saldados pediram para que os dois se calassem.", c: "c) Os dois foram agredidos pelos outros prisioneiros.", certa: "a) Houve um terremoto na prisão e todas as portas se abriram! Referência bíblica: Atos 16:25-26.", dificuldade: "Média", imagem: "images/Imagem1.png" },
    { pergunta: "16 - Quem era a mãe de Samuel?", a: "a) Isabel", b: "b) Maria", c: "c) Ana", certa: "c) Ana. Referência bíblica: 1 Samuel 1:20.", dificuldade: "Alta", imagem: "images/Imagem2.png" },
    { pergunta: "17 - Quem a Bíblia diz que foi pior que todos os reis de Israel?", a: "a) Saul", b: "b) Acabe", c: "c) Salomão", certa: "b) Acabe. Referência bíblica: 1 Reis 16:32-33.", dificuldade: "Alta", imagem: "images/Imagem3.png" },
    { pergunta: "18 - Quem era a mãe de Ismael, filho de Abraão?", a: "a) Sara", b: "b) Sete", c: "c) Hagar", certa: "c) Hagar. Referência bíblica: Gênesis 16:15.", dificuldade: "Alta", imagem: "images/Imagem4.png" },
    { pergunta: "19 - Quem é chamado na Bíblia como o 'Príncipe da Paz'?", a: "a) Lúcifer", b: "b) Miguel", c: "c) Jesus", certa: "c) Jesus. Referência bíblica: Isaías 9:6.", dificuldade: "Baixa", imagem: "images/Imagem5.png" },
    { pergunta: "20 - Quando Moisés foi colocado num cesto e lançado no rio, quem o encontrou?", a: "a) A rainha de Sabá.", b: "b) A filha do faraó.", c: "c) Joquebede", certa: "b) A filha do faraó. Referência bíblica: Êxodo 2:5-6.", dificuldade: "Alta", imagem: "images/Imagem6.png" },
    { pergunta: "21 - Quem foi o imperador da Babilônia?", a: "a) Jeocaz", b: "b) Nabucodonosor", c: "c) Faraó", certa: "b) Nabucodonosor. Referência bíblica: 2 Reis 24:1-2.", dificuldade: "Média", imagem: "images/Imagem7.png" },
    { pergunta: "22 - Quem negou Jesus 3 vezes?", a: "a) Judas", b: "b) Pedro", c: "c) André", certa: "b) Pedro. Referência bíblica: Marcos 14:72.", dificuldade: "Baixa", imagem: "images/Imagem8.png" },
    { pergunta: "23 - Como morreu Judas?", a: "a) Assassinado", b: "b) Acidente", c: "c) Suicídio", certa: "c) Suicídio. Referência bíblica: Mateus 27:5.", dificuldade: "Média", imagem: "images/Imagem9.png" },
    { pergunta: "24 - Quantos discípulos tinha Jesus?", a: "a) 3", b: "b) 10", c: "c) 12", certa: "c) 12. Referência bíblica: Mateus 10:1-4.", dificuldade: "Baixa", imagem: "images/Imagem10.png" },
    { pergunta: "25 - Sadraque, Mezaque e Abedenego foram jogados aonde?", a: "a) Na cova dos leões", b: "b) Na fornalha", c: "c) No Coliseu", certa: "b) Na fornalha. Referência bíblica: Daniel 3:19-23.", dificuldade: "Média", imagem: "images/Imagem12.png" },
    { pergunta: "26 - Qual foi o primeiro nome de Abraão?", a: "a) Israel", b: "b) Abrão", c: "c) Adão", certa: "b) Abrão. Referência bíblica: Gênesis 17:5.", dificuldade: "Média", imagem: "images/Imagem12.png" },
    { pergunta: "27 - Quanto tempo durou a chuva do dilúvio?", a: "a) 7 dias e 7 noites", b: "b) 40 dias e 40 noites", c: "c) 3 dias e 3 noites", certa: "b) 40 dias e 40 noites. Referência bíblica: Gênesis 7:17.", dificuldade: "Média", imagem: "images/Imagem1.png" },
    { pergunta: "28 - Qual o nome do anjo que apareceu a Maria, mãe de Jesus?", a: "a) Rafael", b: "b) Miguel", c: "c) Gabriel", certa: "c) Gabriel. Referência bíblica: Lucas 1:26-28.", dificuldade: "Média", imagem: "images/Imagem2.png" },
    { pergunta: "29 - Quais destes nomes não é mencionado na Bíblia?", a: "a) Caio", b: "b) Tiago", c: "c) Filipe", certa: "a) Caio. Não há menção a este nome na Bíblia.", dificuldade: "Alta", imagem: "images/Imagem3.png" },
    { pergunta: "30 - Quantos pães e peixes Jesus utilizou para multiplicar e alimentar a multidão?", a: "a) 5 Pães e 2 Peixes", b: "b) 7 Pães e 7 Peixes", c: "c) 8 Pães e 1 Peixe", certa: "a) 5 Pães e 2 Peixes. Referência bíblica: Mateus 14:17.", dificuldade: "Baixa", imagem: "images/Imagem4.png" },
    { pergunta: "31 - Quem ajudou Jesus a carregar a cruz?", a: "a) João", b: "b) Simão Cirineu", c: "c) Timóteo", certa: "b) Simão Cirineu. Referência bíblica:Marcos 15:21.", dificuldade: "Média", imagem: "images/Imagem5.png" },
    { pergunta: "32 - Antes de ser Rei, qual era o trabalho de Davi?", a: "a) Caçador", b: "b) Pastor de ovelhas", c: "c) Carpinteiro", certa: "b) Pastor de ovelhas. Referência bíblica: 1 Samuel 17:34-35.", dificuldade: "Baixa", imagem: "images/Imagem6.png" },
    { pergunta: "33 - Quem perseguiu Davi?", a: "a) Faraó", b: "b) Nabucodonosor", c: "c) Saul", certa: "c) Saul. Referência bíblica: 1 Samuel 18:9.", dificuldade: "Média", imagem: "images/Imagem7.png" },
    { pergunta: "34 - Em que cidade nasceu Jesus?", a: "a) Jerusalém", b: "b) Belém", c: "c) Samaria", certa: "b) Belém. Referência bíblica: Mateus 2:1.", dificuldade: "Baixa", imagem: "images/Imagem8.png" },
    { pergunta: "35 - O que a mulher de Samaria saiu para fazer?", a: "a) Tirar água", b: "b) Caçar", c: "c) Colher trigo", certa: "a) Tirar água. Referência bíblica: João 4:6-7.", dificuldade: "Média", imagem: "images/Imagem9.png" },
    { pergunta: "36 - Depois que Pedro negou a Jesus pela terceira vez...", a: "a) o véu do templo se rasgou", b: "b) o céu ficou em trevas", c: "c) o galo cantou", certa: "c) o galo cantou. Referência bíblica: Mateus 26:74.", dificuldade: "Baixa", imagem: "images/Imagem10.png" },
    { pergunta: "37 - Sansão se apaixonou por qual mulher?", a: "a) Rute", b: "b) Dalila", c: "c) Sara", certa: "b) Dalila. Referência bíblica: Juízes 16:4.", dificuldade: "Alta", imagem: "images/Imagem12.png" },
    { pergunta: "38 - Eliseu sucedeu a qual profeta?", a: "a) Zacarias", b: "b) João Batista", c: "c) Elias", certa: "c) Elias. Referência bíblica: 2 Reis 2:11-15.", dificuldade: "Média", imagem: "images/Imagem12.png" },
    { pergunta: "39 - Quem não foi Apóstolo?", a: "a) Pedro", b: "b) Isaías", c: "c) João", certa: "b) Isaías era profeta. Referência bíblica: Isaías 1:1.", dificuldade: "Média", imagem: "images/Imagem1.png" },
    { pergunta: "40 - Quem escreveu Cantares?", a: "a) Davi", b: "b) Moisés", c: "c) Salomão", certa: "c) Salomão. Referência bíblica: Cânticos 1:1.", dificuldade: "Alta", imagem: "images/Imagem2.png" },
    { pergunta: "41 - Quem foi governador do Egito?", a: "a) Moisés", b: "b) José", c: "c) Ismael", certa: "b) José. Referência bíblica: Gênesis 42:6.", dificuldade: "Baixa", imagem: "images/Imagem3.png" },
    { pergunta: "42 - Quem pediu para andar nas águas com Jesus?", a: "a) Pedro", b: "b) Tiago", c: "c) João", certa: "a) Pedro. Referência bíblica: Mateus 14:28-29.", dificuldade: "Baixa", imagem: "images/Imagem4.png" },
    { pergunta: "43 - Lázaro foi ressuscitado depois de quantos dias?", a: "a) 10", b: "a) 10", c: "c) 4", certa: "c) 4. Referência bíblica: João 11:38-39.", dificuldade: "Baixa", imagem: "images/Imagem5.png" },
    { pergunta: "44 - Qual foi o primeiro nome do Apóstolo Paulo?", a: "a) Saulo", b: "b) Tiago", c: "c) Barnabé", certa: "a) Saulo. Referência bíblica: Atos 9:4-5.", dificuldade: "Média", imagem: "images/Imagem6.png" },
    { pergunta: "45 - Quanto tempo o povo hebreu ficou no deserto?", a: "a) 4 dias", b: "b) 40 dias", c: "c) 40 anos", certa: "c) 40 anos. Referência bíblica: Deuteronômio 2:7.", dificuldade: "Alta", imagem: "images/Imagem7.png" },
    { pergunta: "46 - Quem escreveu o livro de Lamentações?", a: "a) Zacarias", b: "b) Elias", c: "c) Jeremias", certa: "c) A autoria é atribuída à Jeremias.", dificuldade: "Alta", imagem: "images/Imagem8.png" },
    { pergunta: "47 - O que quer dizer 'Rabi'?", a: "a) Rei", b: "b) Pai", c: "c) Mestre", certa: "c) Mestre. Referência bíblica: João 1:38.", dificuldade: "Média", imagem: "images/Imagem9.png" },
    { pergunta: "48 - Qual era o ofício de José, pai de Jesus?", a: "a) Pescador", b: "b) Cobrador de impostos", c: "c) Carpinteiro", certa: "c) Carpinteiro. Referência bíblica: Mateus 13:55.", dificuldade: "Baixa", imagem: "images/Imagem10.png" },
    { pergunta: "49 - 'Aquele que está em Cristo nova criatura é; as coisas velhas já passaram;...", a: "a) eis que passaram da morte para a vida.'", b: "b) eis que já ressuscitou dos mortos.'", c: "c) eis que tudo se fez novo.'", certa: "c) eis que tudo se fez novo.' Referência bíblica: 2 Coríntios 5:17.", dificuldade: "Baixa", imagem: "images/Imagem12.png" },
    { pergunta: "50 - Quais são os dois grandes mandamentos destacados por Jesus?", a: "a) Não matarás / Amarás o Senhor teu Deus de todo o teu coração.", b: "b) Amarás o Senhor teu Deus de todo o teu coração / Amarás ao teu próximo como a ti mesmo.", c: "c) Não cobiçarás (seus servos, animais, ou coisa alguma que lhe pertença) / Não matarás.", certa: "b) Amarás o Senhor teu Deus de todo o teu coração / Amarás ao teu próximo como a ti mesmo. Referência bíblica: Mateus 22:36-40.", dificuldade: "Baixa", imagem: "images/Imagem12.png" },
    { pergunta: "51 - Qual foi o primeiro milagre de Jesus?", a: "a) A transformação da água em vinho", b: "b) A ressurreição de Lázaro", c: "c) A multiplicação dos pães e peixes", certa: "a) A transformação da água em vinho. Referência bíblica: João 2:1-12.", dificuldade: "Baixa", imagem: "images/Imagem1.png" },
    { pergunta: "52 - Quem escreveu o livro de Apocalipse?", a: "a) Moisés", b: "b) João", c: "c) Paulo", certa: "b) João. Referência bíblica: Apocalipse 1:1.", dificuldade: "Baixa", imagem: "images/Imagem2.png" },
    { pergunta: "53 - Quem foi arrebatado por Deus e não viu a morte?", a: "a) Enoque", b: "b) Jó", c: "c) Matusalém", certa: "a) Enoque. Referência bíblica: Gênesis 5:24.", dificuldade: "Baixa", imagem: "images/Imagem3.png" },
    { pergunta: "54 - Qual o nome do lugar onde habitavam Adão e Eva?", a: "a) Jardim Suspenso", b: "b) Torre de Babel", c: "c) Jardim do Éden", certa: "c) Jardim do Éden. Referência bíblica: Gênesis 2:8.", dificuldade: "Baixa", imagem: "images/Imagem4.png" },
    { pergunta: "55 - Qual profeta foi engolido por um grande peixe?", a: "a) Malaquias", b: "b) Jonas", c: "c) Elias", certa: "b) Jonas. Referência bíblica: Jonas 1:17.", dificuldade: "Baixa", imagem: "images/Imagem5.png" },
    { pergunta: "56 - Quem subiu na árvore para ver Jesus passar?", a: "a) Ananias", b: "b) Tadeu", c: "c) Zaqueu", certa: "c) Zaqueu. Referência bíblica: Lucas 19:2-5.", dificuldade: "Baixa", imagem: "images/Imagem6.png" },
    { pergunta: "57 - Qual foi o Apóstolo que ficou temporariamente cego?", a: "a) Tiago", b: "b) Paulo", c: "c) Pedro", certa: "b) Paulo enquanto se chamava Saulo. Referência bíblica: Atos 9:8", dificuldade: "Baixa", imagem: "images/Imagem7.png" },
    { pergunta: "58 - Quem escreveu o Salmo 23?", a: "a) Salomão", b: "b) Saul", c: "c) Davi", certa: "c) A autoria é atribuída a Davi.", dificuldade: "Baixa", imagem: "images/Imagem8.png" },
    { pergunta: "59 - Jesus curou 10 leprosos. Quantos voltaram para agradecer?", a: "a) 10", b: "b) 1", c: "c) 3", certa: "b) 1. Referência bíblica: Lucas 17:11-19.", dificuldade: "Baixa", imagem: "images/Imagem9.png" },
    { pergunta: "60 - Quem entrou na Terra Prometida?", a: "a) Noé", b: "b) Moisés", c: "c) Josué", certa: "c) Josué. Referência bíblica: Josué 1:3.", dificuldade: "Baixa", imagem: "images/Imagem10.png" }


]


// carregamento da primeira pergunta
document.getElementById("pergunta").innerHTML = array[i]['pergunta']
document.getElementById("a").innerHTML = array[i]['a']
document.getElementById("b").innerHTML = array[i]['b']
document.getElementById("c").innerHTML = array[i]['c']
document.getElementById("certa").innerHTML = array[i]['certa']
document.getElementById("dificuldade").innerHTML = "Dificuldade: " + array[i]['dificuldade']
imagem.src = array[i]['imagem']