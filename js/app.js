let usuarioLogado = JSON.parse(localStorage.getItem("usuarioLogado")) || null;

let estatisticas = {
  respondidas: 0,
  acertos: 0,
  historico: [],
  revisao: []
};

let rankingMaterias = {};
let metaDiaria = 50;

let simuladoAtual = [];
let grafico = null;
let tempoSimulado = 0;
let intervaloCronometro = null;

function chaveUsuario(chave) {
  return `${usuarioLogado.email}_${chave}`;
}

function salvarDados() {
  if (!usuarioLogado) return;

  localStorage.setItem(
    chaveUsuario("estatisticas"),
    JSON.stringify(estatisticas)
  );

  localStorage.setItem(
    chaveUsuario("rankingMaterias"),
    JSON.stringify(rankingMaterias)
  );

  localStorage.setItem(
    chaveUsuario("metaDiaria"),
    metaDiaria
  );
}
function carregarDadosUsuario() {
  if (!usuarioLogado) return;

  estatisticas = JSON.parse(
    localStorage.getItem(chaveUsuario("estatisticas"))
  ) || {
    respondidas: 0,
    acertos: 0,
    historico: [],
    revisao: []
  };

  rankingMaterias = JSON.parse(
    localStorage.getItem(chaveUsuario("rankingMaterias"))
  ) || {};

  metaDiaria = parseInt(
    localStorage.getItem(chaveUsuario("metaDiaria"))
  ) || 50;

  const msg = document.getElementById("mensagemUsuario");
  if (msg) {
    msg.innerText = `Bem-vindo, ${usuarioLogado.nome}`;
  }
}

function cadastrarUsuario() {
  const nome = document.getElementById("loginNome").value.trim();
  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const senha = document.getElementById("loginSenha").value.trim();
  const msg = document.getElementById("loginMensagem");

  if (!nome || !email || !senha) {
    msg.innerText = "Preencha nome, e-mail e senha.";
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuariosPP")) || [];

  if (usuarios.find(u => u.email === email)) {
    msg.innerText = "Este e-mail já está cadastrado.";
    return;
  }

  usuarios.push({ nome, email, senha });

  localStorage.setItem("usuariosPP", JSON.stringify(usuarios));

  usuarioLogado = { nome, email };
  localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));

  iniciarSistemaLogado();
}

function fazerLogin() {
  const email = document.getElementById("loginEmail").value.trim().toLowerCase();
  const senha = document.getElementById("loginSenha").value.trim();
  const msg = document.getElementById("loginMensagem");

  const usuarios = JSON.parse(localStorage.getItem("usuariosPP")) || [];

  const usuario = usuarios.find(
    u => u.email === email && u.senha === senha
  );

  if (!usuario) {
    msg.innerText = "E-mail ou senha incorretos.";
    return;
  }

  usuarioLogado = {
    nome: usuario.nome,
    email: usuario.email
  };

  localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));

  iniciarSistemaLogado();
}

function sairUsuario() {
  localStorage.removeItem("usuarioLogado");
  location.reload();
}

function iniciarSistemaLogado() {
  document.getElementById("telaLogin").style.display = "none";

  carregarDadosUsuario();
  carregarQuestoes();
  carregarRevisoes();
  atualizarDashboard();
  atualizarCronometroTela();
  showPage("dashboard");
}
  document.getElementById("telaLogin").style.display = "none";

  carregarDadosUsuario();
  carregarQuestoes();
  carregarRevisoes();

  atualizarDashboard();
  atualizarCronometroTela();

  atualizarPainelAdmin(); // ADICIONE ESTA LINHA

  showPage("dashboard");
}

function showPage(pageId) {

  document
    .querySelectorAll(".page")
    .forEach(p =>
      p.classList.remove("active-page")
    );

  document
    .querySelectorAll(".menu-btn")
    .forEach(btn =>
      btn.classList.remove("active")
    );

  const page =
    document.getElementById(pageId);

  if(page){
    page.classList.add("active-page");
  }

  const botao =
    document.querySelector(
      `[onclick="showPage('${pageId}')"]`
    );

  if(botao){
    botao.classList.add("active");
  }

  if(pageId === "estatisticas"){
    carregarEstatisticasDetalhadas();
  }

  if(pageId === "revisao"){
    carregarRevisoes();
  }

  if(pageId === "areaEstudos"){
    renderizarAulas();
  }

  if(pageId === "metas"){
    mostrarHistoricoMetas(7);
  }

}
function embaralharArray(array) {
  return [...array].sort(() => Math.random() - 0.5);
}
function atualizarElemento(id, valor) {
  const el = document.getElementById(id);
  if (el) el.innerText = valor;
}

function atualizarDashboard() {
  const percentual = estatisticas.respondidas
    ? (estatisticas.acertos / estatisticas.respondidas) * 100
    : 0;

  atualizarElemento("totalRespondidas", estatisticas.respondidas);
  atualizarElemento("totalAcertos", estatisticas.acertos);
  atualizarElemento("percentualGeral", percentual.toFixed(1) + "%");
  atualizarElemento("totalRevisao", estatisticas.revisao.length);

  const melhor = estatisticas.historico.length
    ? Math.max(...estatisticas.historico)
    : 0;

  atualizarElemento("melhorNota", melhor.toFixed(1) + "%");
  atualizarMeta();
  atualizarGrafico();
  registrarMetaDiaria();
  atualizarDashboardMaterias();
}

function carregarQuestoes(lista = questoes) {
  lista = embaralharArray(lista);
  const container = document.getElementById("listaQuestoes");
  if (!container) return;

  container.innerHTML = "";

  lista.forEach(q => {
    const div = document.createElement("div");
    div.className = "questao";

    div.innerHTML = `
      <h3>${q.materia} - ${q.assunto}</h3>
      <p>${q.pergunta}</p>

     ${q.alternativas.map((alt, index) => {

  const letra = ["A","B","C","D","E"][index];

  return `
    <div
      class="alternativa"
      onclick="corrigirQuestao(${q.id}, ${index}, this)"
    >
      <strong>${letra})</strong> ${alt}
    </div>
  `;

}).join("")}

      <div id="exp-${q.id}"></div>
    `;

    container.appendChild(div);
  });
}
function atualizarProgressoMaterias(){

    const container =
        document.getElementById(
            "progressoMaterias"
        );

    if(!container) return;

    container.innerHTML = "";

    const materias = {};

    aulas.forEach(aula => {

        if(!materias[aula.materia]){

            materias[aula.materia] = {

                total:0,
                concluidas:0

            };

        }

        materias[aula.materia].total++;

        const concluida =
            localStorage.getItem(
                `aula_concluida_${aula.id}`
            ) === "true";

        if(concluida){

            materias[aula.materia]
            .concluidas++;

        }

    });

    Object.keys(materias)
    .forEach(materia => {

        const dados =
            materias[materia];

        const percentual =
            (
                dados.concluidas /
                dados.total
            ) * 100;

        container.innerHTML += `

            <div class="progresso-materia">

                <div class="progresso-header">

                    <span>
                        ${materia}
                    </span>

                    <span>
                        ${dados.concluidas}/${dados.total}
                        (${percentual.toFixed(0)}%)
                    </span>

                </div>

                <div class="barra-container">

                    <div
                        class="barra-preenchimento"
                        style="
                            width:${percentual}%;
                        "
                    ></div>

                </div>

            </div>

        `;

    });

}
function corrigirQuestao(idQuestao, resposta, elemento) {
  const q = questoes.find(item => item.id === idQuestao);
  if (!q) return;

  const exp = document.getElementById(`exp-${idQuestao}`);
  if (exp && exp.innerHTML.trim() !== "") return;

  const acertou = resposta === q.correta;

  estatisticas.respondidas++;

  if (acertou) {
    estatisticas.acertos++;
  } else {
    elemento.classList.add("errada");
    adicionarRevisao(q);
  }

  registrarMateria(q.materia, acertou);

  elemento.parentElement.querySelectorAll(".alternativa").forEach((alt, i) => {
    if (i === q.correta) alt.classList.add("correta");
  });

  if (exp) {
    exp.innerHTML = `
      <div class="explicacao">
        <strong>Comentário:</strong><br><br>
        ${q.explicacao}
      </div>
    `;
  }

  salvarDados();
  atualizarDashboard();
}

function registrarMateria(materia, acertou) {
  if (!rankingMaterias[materia]) {
    rankingMaterias[materia] = { total: 0, acertos: 0 };
  }

  rankingMaterias[materia].total++;

  if (acertou) {
    rankingMaterias[materia].acertos++;
  }

  salvarDados();
}

function adicionarRevisao(q) {
  const existe = estatisticas.revisao.find(item => item.id === q.id);
  if (existe) return;

  estatisticas.revisao.push({
    ...q,
    dataErro: new Date().toISOString()
  });

  salvarDados();
}

function carregarRevisoes() {
  const lista = document.getElementById("listaRevisao");
  if (!lista) return;

  lista.innerHTML = "";

  if (estatisticas.revisao.length === 0) {
    lista.innerHTML = `<div class="questao">Nenhuma questão para revisar.</div>`;
    return;
  }

  estatisticas.revisao.forEach((q, index) => {
    lista.innerHTML += `
      <div class="questao">
        <h3>${index + 1}. ${q.materia} - ${q.assunto}</h3>
        <p>${q.pergunta}</p>
        <p><strong>Resposta correta:</strong> ${q.alternativas[q.correta]}</p>
        <div class="explicacao">
          <strong>Comentário:</strong><br><br>
          ${q.explicacao}
        </div>
      </div>
    `;
  });
}

function gerarSimulado() {
  const confirmar = confirm("Iniciar prova?\n\nClique em OK para iniciar ou Cancelar para voltar.");
  if (!confirmar) return;

  const quantidade = parseInt(document.getElementById("quantidadeQuestoes")?.value || 10);
  const materia = document.getElementById("simuladoMateria")?.value || "";

  let banco = [...questoes];

  if (materia) {
    banco = banco.filter(q => q.materia === materia);
  }

  banco = embaralharArray(banco);
  simuladoAtual = banco.slice(0, quantidade);

  renderizarSimulado();
  iniciarCronometro();
}

function renderizarSimulado() {
  const area = document.getElementById("areaSimulado");
  if (!area) return;

  area.innerHTML = "";

  simuladoAtual.forEach((q, index) => {
    area.innerHTML += `
      <div class="questao">
        <h3>${index + 1}. ${q.pergunta}</h3>

       ${q.alternativas.map((alt, i) => {

  const letra = ["A","B","C","D","E"][i];

  return `
    <label class="alternativa">

      <input
        type="radio"
        name="q${q.id}"
        value="${i}"
        onchange="verificarConclusaoSimulado()"
      >

      <strong>${letra})</strong> ${alt}

    </label>
  `;

}).join("")}
      </div>
    `;
  });

  area.innerHTML += `
    <button onclick="corrigirSimulado()">Finalizar Simulado</button>
    <div id="resultadoSimulado"></div>
  `;
}

function verificarConclusaoSimulado() {
  const todas = simuladoAtual.every(q =>
    document.querySelector(`input[name="q${q.id}"]:checked`)
  );

  if (todas) corrigirSimulado();
}

function corrigirSimulado() {
  pararCronometro();

  const resultado = document.getElementById("resultadoSimulado");
  if (!resultado) return;

  if (resultado.innerHTML.trim() !== "") return;

  let acertos = 0;
  let resultadoHTML = "";

  simuladoAtual.forEach((q, index) => {
    const marcada = document.querySelector(`input[name="q${q.id}"]:checked`);
    const respostaUsuario = marcada ? parseInt(marcada.value) : -1;
    const acertou = respostaUsuario === q.correta;

    if (acertou) {
      acertos++;
    } else {
      adicionarRevisao(q);
    }

    registrarMateria(q.materia, acertou);

    const respostaMarcadaTexto =
      respostaUsuario >= 0 ? q.alternativas[respostaUsuario] : "Não respondida";

    const respostaCorretaTexto = q.alternativas[q.correta];

    resultadoHTML += `

<div class="questao">

<h3>${index + 1}. ${q.pergunta}</h3>

${q.alternativas.map((alt,i)=>{

const letra = ["A","B","C","D","E"][i];

let icone = "";

if(i === q.correta){
  icone = " ✅";
}

if(
  i === respostaUsuario &&
  respostaUsuario !== q.correta
){
  icone = " ❌";
}

return `
<p>
<strong>${letra})</strong>
${alt}
${icone}
</p>
`;

}).join("")}

<div class="explicacao">

<strong>Comentário:</strong><br><br>

${q.explicacao}

</div>

</div>

`;
  });

  const percentual = simuladoAtual.length
    ? (acertos / simuladoAtual.length) * 100
    : 0;

  estatisticas.respondidas += simuladoAtual.length;
  estatisticas.acertos += acertos;
  estatisticas.historico.push(percentual);

  salvarDados();
  atualizarDashboard();
  carregarRevisoes();

  resultado.innerHTML = `
    <div class="questao">
      <h2>Resultado do Simulado</h2>
      <p><strong>Tempo:</strong> ${formatarTempo(tempoSimulado)}</p>
      <p><strong>Nota:</strong> ${percentual.toFixed(1)}%</p>
      <p><strong>Acertos:</strong> ${acertos} de ${simuladoAtual.length}</p>
    </div>

    ${resultadoHTML}
  `;

  resultado.scrollIntoView({ behavior: "smooth" });
}

function iniciarCronometro() {
  pararCronometro();
  tempoSimulado = 0;
  atualizarCronometroTela();

  intervaloCronometro = setInterval(() => {
    tempoSimulado++;
    atualizarCronometroTela();
  }, 1000);
}

function pararCronometro() {
  if (intervaloCronometro !== null) {
    clearInterval(intervaloCronometro);
    intervaloCronometro = null;
  }
}

function atualizarCronometroTela() {
  const el = document.getElementById("cronometro");
  if (!el) return;

  el.innerText = formatarTempo(tempoSimulado);
}

function formatarTempo(segundosTotais) {
  const h = String(Math.floor(segundosTotais / 3600)).padStart(2, "0");
  const m = String(Math.floor((segundosTotais % 3600) / 60)).padStart(2, "0");
  const s = String(segundosTotais % 60).padStart(2, "0");

  return `${h}:${m}:${s}`;
}

function filtrarQuestoes() {
  const materia = document.getElementById("filtroMateria")?.value || "";

  if (!materia) {
    carregarQuestoes();
    return;
  }

  carregarQuestoes(questoes.filter(q => q.materia === materia));
}

function salvarMeta() {
  metaDiaria = parseInt(document.getElementById("metaDiaria")?.value || 50);
  salvarDados();
  atualizarMeta();
}

function atualizarMeta() {
  atualizarElemento("progressoMeta", `${estatisticas.respondidas} / ${metaDiaria}`);
}

function carregarEstatisticasDetalhadas() {
  const tabela = document.getElementById("tabelaEstatisticas");
  if (!tabela) return;

  if (Object.keys(rankingMaterias).length === 0) {
    tabela.innerHTML = `<p>Nenhuma estatística registrada ainda.</p>`;
    atualizarElemento("materiaForte", "-");
    atualizarElemento("materiaFraca", "-");
    atualizarElemento("estatTotalRevisao", estatisticas.revisao.length);
    return;
  }

  let html = `
    <table>
      <thead>
        <tr>
          <th>Matéria</th>
          <th>Respondidas</th>
          <th>Acertos</th>
          <th>%</th>
        </tr>
      </thead>
      <tbody>
  `;

  let melhorMateria = "-";
  let piorMateria = "-";
  let melhorPercentual = -1;
  let piorPercentual = 101;

  Object.keys(rankingMaterias).forEach(materia => {
    const dados = rankingMaterias[materia];
    const percentual = dados.total ? (dados.acertos / dados.total) * 100 : 0;

    if (percentual > melhorPercentual) {
      melhorPercentual = percentual;
      melhorMateria = materia;
    }

    if (percentual < piorPercentual) {
      piorPercentual = percentual;
      piorMateria = materia;
    }

    html += `
      <tr>
        <td>${materia}</td>
        <td>${dados.total}</td>
        <td>${dados.acertos}</td>
        <td>${percentual.toFixed(1)}%</td>
      </tr>
    `;
  });

  html += `
      </tbody>
    </table>
  `;

  tabela.innerHTML = html;

  atualizarElemento("materiaForte", melhorMateria);
  atualizarElemento("materiaFraca", piorMateria);
  atualizarElemento("estatTotalRevisao", estatisticas.revisao.length);
}

function atualizarGrafico() {
  const canvas = document.getElementById("graficoEvolucao");

  if (!canvas || typeof Chart === "undefined") return;

  if (grafico) grafico.destroy();

  grafico = new Chart(canvas, {
    type: "line",
    data: {
      labels: estatisticas.historico.map((_, i) => `Simulado ${i + 1}`),
      datasets: [{
        label: "Evolução",
        data: estatisticas.historico
      }]
    }
  });
}

function alternarTema() {
  document.body.classList.toggle("light-mode");

  const temaClaro = document.body.classList.contains("light-mode");

  localStorage.setItem("tema", temaClaro ? "light" : "dark");

  const botao = document.getElementById("themeToggle");

  if (botao) {
    botao.innerText = temaClaro ? "☀️" : "🌙";
  }
}

function resetarEstatisticas() {
  const senha = prompt("Digite RESET para apagar estatísticas, histórico e revisões.");

  if (senha !== "RESET") {
    alert("Operação cancelada.");
    return;
  }

  estatisticas = {
    respondidas: 0,
    acertos: 0,
    historico: [],
    revisao: []
  };

  rankingMaterias = {};

  salvarDados();
  atualizarDashboard();
  carregarRevisoes();
  carregarEstatisticasDetalhadas();

  const resultado = document.getElementById("resultadoSimulado");
  if (resultado) resultado.innerHTML = "";

  alert("Estatísticas resetadas com sucesso.");
}

window.addEventListener("DOMContentLoaded", () => {
  const temaSalvo = localStorage.getItem("tema");
  const botaoTema = document.getElementById("themeToggle");

  if (temaSalvo === "light") {
    document.body.classList.add("light-mode");
    if (botaoTema) botaoTema.innerText = "☀️";
  } else {
    if (botaoTema) botaoTema.innerText = "🌙";
  }

  if (usuarioLogado) {
    iniciarSistemaLogado();
  } else {
    document.getElementById("telaLogin").style.display = "flex";
  }
});
function dataHojeISO() {
  return new Date().toISOString().slice(0, 10);
}

function registrarMetaDiaria() {
  const hoje = dataHojeISO();

  let historicoMetas = JSON.parse(
    localStorage.getItem("historicoMetas")
  ) || {};

  if (!historicoMetas[hoje]) {
    historicoMetas[hoje] = {
      data: hoje,
      respondidas: 0,
      meta: metaDiaria
    };
  }

  historicoMetas[hoje].respondidas = estatisticas.respondidas;
  historicoMetas[hoje].meta = metaDiaria;

  localStorage.setItem(
    "historicoMetas",
    JSON.stringify(historicoMetas)
  );
}
function atualizarPainelAdmin(){

    if(!usuarioLogado) return;

    const painel =
        document.getElementById("painelAdmin");

    if(!painel) return;

    if(
        usuarioLogado.email.toLowerCase() ===
        "contato.vitorasr@gmail.com"
    ){

        painel.style.display = "block";

        const usuarios =
            JSON.parse(
                localStorage.getItem("usuariosPP")
            ) || [];

        const total =
            document.getElementById(
                "totalUsuarios"
            );

        if(total){
            total.innerText =
                usuarios.length;
        }

    }else{

        painel.style.display = "none";

    }

}
function mostrarHistoricoMetas(dias = 7) {
  registrarMetaDiaria();

  const container = document.getElementById("historicoMetas");
  if (!container) return;

  const historicoMetas = JSON.parse(
    localStorage.getItem("historicoMetas")
  ) || {};

  let html = `
    <table>
      <thead>
        <tr>
          <th>Data</th>
          <th>Questões</th>
          <th>Meta</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
  `;

  const hoje = new Date();

  for (let i = dias - 1; i >= 0; i--) {
    const data = new Date();
    data.setDate(hoje.getDate() - i);

    const dataISO = data.toISOString().slice(0, 10);
    const item = historicoMetas[dataISO];

    const respondidas = item ? item.respondidas : 0;
    const meta = item ? item.meta : metaDiaria;
    const bateu = respondidas >= meta;

    html += `
      <tr>
        <td>${dataISO}</td>
        <td>${respondidas}</td>
        <td>${meta}</td>
        <td>${bateu ? "✅ Batida" : "❌ Pendente"}</td>
      </tr>
    `;
  }

  html += `
      </tbody>
    </table>
  `;

  container.innerHTML = html;
};
const aulas = [

    // PORTUGUÊS
    {id:"aula01", materia:"Português", titulo:"Leitura e Interpretação de Textos", video:"", pdf:"pdfs/portugues_01.pdf", mapa:"mapas/portugues_01.png"},
    {id:"aula02", materia:"Português", titulo:"Fato, Opinião, Implícitos e Subentendidos", video:"", pdf:"pdfs/portugues_02.pdf", mapa:"mapas/portugues_02.png"},
    {id:"aula03", materia:"Português", titulo:"Coesão e Coerência Textual", video:"", pdf:"pdfs/portugues_03.pdf", mapa:"mapas/portugues_03.png"},
    {id:"aula04", materia:"Português", titulo:"Classes de Palavras", video:"", pdf:"pdfs/portugues_04.pdf", mapa:"mapas/portugues_04.png"},
    {id:"aula05", materia:"Português", titulo:"Concordância Verbal e Nominal", video:"", pdf:"pdfs/portugues_05.pdf", mapa:"mapas/portugues_05.png"},
    {id:"aula06", materia:"Português", titulo:"Regência e Crase", video:"", pdf:"pdfs/portugues_06.pdf", mapa:"mapas/portugues_06.png"},
    {id:"aula07", materia:"Português", titulo:"Pontuação", video:"", pdf:"pdfs/portugues_07.pdf", mapa:"mapas/portugues_07.png"},
    {id:"aula08", materia:"Português", titulo:"Ortografia e Acentuação", video:"", pdf:"pdfs/portugues_08.pdf", mapa:"mapas/portugues_08.png"},
    {id:"aula09", materia:"Português", titulo:"Semântica, Sinônimos e Antônimos", video:"", pdf:"pdfs/portugues_09.pdf", mapa:"mapas/portugues_09.png"},
    {id:"aula10", materia:"Português", titulo:"Reescrita de Frases", video:"", pdf:"pdfs/portugues_10.pdf", mapa:"mapas/portugues_10.png"},

    // INFORMÁTICA
    {id:"aula11", materia:"Informática", titulo:"Windows e Organização de Arquivos", video:"", pdf:"pdfs/informatica_01.pdf", mapa:"mapas/informatica_01.png"},
    {id:"aula12", materia:"Informática", titulo:"Word", video:"", pdf:"pdfs/informatica_02.pdf", mapa:"mapas/informatica_02.png"},
    {id:"aula13", materia:"Informática", titulo:"Excel Básico e Fórmulas", video:"", pdf:"pdfs/informatica_03.pdf", mapa:"mapas/informatica_03.png"},
    {id:"aula14", materia:"Informática", titulo:"Internet e Navegadores", video:"", pdf:"pdfs/informatica_04.pdf", mapa:"mapas/informatica_04.png"},
    {id:"aula15", materia:"Informática", titulo:"Segurança da Informação", video:"", pdf:"pdfs/informatica_05.pdf", mapa:"mapas/informatica_05.png"},

    // RACIOCÍNIO LÓGICO
    {id:"aula16", materia:"Raciocínio Lógico", titulo:"Proposições e Conectivos", video:"", pdf:"pdfs/logico_01.pdf", mapa:"mapas/logico_01.png"},
    {id:"aula17", materia:"Raciocínio Lógico", titulo:"Tabela-Verdade", video:"", pdf:"pdfs/logico_02.pdf", mapa:"mapas/logico_02.png"},
    {id:"aula18", materia:"Raciocínio Lógico", titulo:"Equivalências e Negações", video:"", pdf:"pdfs/logico_03.pdf", mapa:"mapas/logico_03.png"},
    {id:"aula19", materia:"Raciocínio Lógico", titulo:"Porcentagem, Razão e Proporção", video:"", pdf:"pdfs/logico_04.pdf", mapa:"mapas/logico_04.png"},
    {id:"aula20", materia:"Raciocínio Lógico", titulo:"Sequências e Problemas Lógicos", video:"", pdf:"pdfs/logico_05.pdf", mapa:"mapas/logico_05.png"},

    // LEGISLAÇÃO / DIREITO
    {id:"aula21", materia:"Legislação/Direito", titulo:"Constituição Federal: Princípios Fundamentais", video:"", pdf:"pdfs/direito_01.pdf", mapa:"mapas/direito_01.png"},
    {id:"aula22", materia:"Legislação/Direito", titulo:"Direitos e Garantias Fundamentais", video:"", pdf:"pdfs/direito_02.pdf", mapa:"mapas/direito_02.png"},
    {id:"aula23", materia:"Legislação/Direito", titulo:"Administração Pública: Art. 37", video:"", pdf:"pdfs/direito_03.pdf", mapa:"mapas/direito_03.png"},
    {id:"aula24", materia:"Legislação/Direito", titulo:"Servidores Públicos: Arts. 39 a 41", video:"", pdf:"pdfs/direito_04.pdf", mapa:"mapas/direito_04.png"},
    {id:"aula25", materia:"Legislação/Direito", titulo:"Segurança Pública: Art. 144", video:"", pdf:"pdfs/direito_05.pdf", mapa:"mapas/direito_05.png"},
    {id:"aula26", materia:"Legislação/Direito", titulo:"Constituição Estadual do RS", video:"", pdf:"pdfs/direito_06.pdf", mapa:"mapas/direito_06.png"},
    {id:"aula27", materia:"Legislação/Direito", titulo:"Improbidade Administrativa", video:"", pdf:"pdfs/direito_07.pdf", mapa:"mapas/direito_07.png"},
    {id:"aula28", materia:"Legislação/Direito", titulo:"Lei de Acesso à Informação", video:"", pdf:"pdfs/direito_08.pdf", mapa:"mapas/direito_08.png"},
    {id:"aula29", materia:"Legislação/Direito", titulo:"Processo Administrativo", video:"", pdf:"pdfs/direito_09.pdf", mapa:"mapas/direito_09.png"},
    {id:"aula30", materia:"Legislação/Direito", titulo:"Lei 14.133/2021 - Licitações", video:"", pdf:"pdfs/direito_10.pdf", mapa:"mapas/direito_10.png"},

    // SISTEMA PRISIONAL
    {id:"aula31", materia:"Sistema Prisional", titulo:"Estrutura do Sistema Prisional", video:"", pdf:"pdfs/prisional_01.pdf", mapa:"mapas/prisional_01.png"},
    {id:"aula32", materia:"Sistema Prisional", titulo:"Lei de Execução Penal: Fundamentos", video:"https://www.youtube-nocookie.com/embed/OGNH8P4yI50", pdf:"pdfs/prisional_02.pdf", mapa:"mapas/prisional_02.png"},
    {id:"aula33", materia:"Sistema Prisional", titulo:"LEP: Direitos e Deveres do Preso", video:"", pdf:"pdfs/prisional_03.pdf", mapa:"mapas/prisional_03.png"},
    {id:"aula34", materia:"Sistema Prisional", titulo:"LEP: Trabalho, Estudo e Remição", video:"https://www.youtube-nocookie.com/embed/b-WLl13i2sQ", pdf:"pdfs/prisional_04.pdf", mapa:"mapas/prisional_04.png"},
    {id:"aula35", materia:"Sistema Prisional", titulo:"Regimes de Cumprimento de Pena", video:"", pdf:"pdfs/prisional_05.pdf", mapa:"mapas/prisional_05.png"},
    {id:"aula36", materia:"Sistema Prisional", titulo:"Estatuto da Polícia Penal RS", video:"", pdf:"pdfs/prisional_06.pdf", mapa:"mapas/prisional_06.png"},
    {id:"aula37", materia:"Sistema Prisional", titulo:"Normativas Estaduais do Sistema Prisional", video:"", pdf:"pdfs/prisional_07.pdf", mapa:"mapas/prisional_07.png"},

    // RETA FINAL
    {id:"aula38", materia:"Revisão Final", titulo:"Revisão de Português", video:"https://www.youtube-nocookie.com/embed/H4VQjNlAXBY", pdf:"pdfs/revisao_01.pdf", mapa:"mapas/revisao_01.png"},
    {id:"aula39", materia:"Revisão Final", titulo:"Revisão de Informática", video:"https://www.youtube-nocookie.com/embed/2nPzTDT8Hb8", pdf:"pdfs/revisao_02.pdf", mapa:"mapas/revisao_02.png"},
    {id:"aula40", materia:"Revisão Final", titulo:"Revisão de Raciocínio Lógico", video:"https://www.youtube-nocookie.com/embed/T3Y83n6B2Yg", pdf:"pdfs/revisao_logico.pdf", mapa:"mapas/revisao_logico.png"},
    {id:"aula41", materia:"Revisão Final", titulo:"Revisão de Direito", video:"https://www.youtube-nocookie.com/embed/zvprImSjg3g", pdf:"pdfs/revisao_03.pdf", mapa:"mapas/revisao_03.png"},
    {id:"aula42", materia:"Revisão Final", titulo:"Revisão de Sistema Prisional", video:"", pdf:"pdfs/revisao_04.pdf", mapa:"mapas/revisao_04.png"},
    {id:"aula43", materia:"Revisão Final", titulo:"Simulado Geral Comentado", video:"", pdf:"pdfs/revisao_05.pdf", mapa:"mapas/revisao_05.png"}
    

];

function renderizarAulas(){

    const lista = document.getElementById("listaAulas");

    if(!lista){
        console.error("Elemento #listaAulas não encontrado.");
        return;
    }

    const filtro = document.getElementById("filtroMateriaAula")?.value || "";

    const aulasFiltradas = filtro
        ? aulas.filter(aula => aula.materia === filtro)
        : aulas;

    lista.innerHTML = "";

    if(aulasFiltradas.length === 0){
        lista.innerHTML = `
            <div class="questao">
                Nenhuma aula encontrada para esta matéria.
            </div>
        `;
        return;
    }

    aulasFiltradas.forEach(aula => {

        const concluida = localStorage.getItem(`aula_concluida_${aula.id}`) === "true";
        const anotacao = localStorage.getItem(`aula_anotacao_${aula.id}`) || "";

        const mapaHTML = aula.mapa
? `
<div class="mapa-mental">

    <h3>🧠 Mapa Mental</h3>

    <img
        src="${aula.mapa}"
        alt="${aula.titulo}"
        class="mapa-img"
        onerror="this.src=''; this.outerHTML='<div class=&quot;erro-mapa&quot;>⚠️ Mapa mental não encontrado</div>';"
    >

</div>
`
: `
<div class="mapa-mental">

    <h3>🧠 Mapa Mental</h3>

    <div class="erro-mapa">
        Nenhum mapa mental cadastrado.
    </div>

</div>
`;

        const videoHTML = aula.video
    ? `
        <iframe
            class="aula-video"
            src="${aula.video}"
            title="${aula.titulo}"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
        ></iframe>
    `
    : `
        <div class="aula-video"
            style="
                display:flex;
                align-items:center;
                justify-content:center;
                color:#94a3b8;
            "
        >
            🎥 Espaço reservado para videoaula
        </div>
    `;

        const pdfHTML = aula.pdf
            ? `
                <a href="${aula.pdf}" download>
                    <button type="button">
                        📄 Baixar PDF
                    </button>
                </a>
            `
            : `
                <button type="button" disabled>
                    PDF indisponível
                </button>
            `;

        lista.innerHTML += `

            <div class="aula-card">

    <div class="aula-header">

    <div
        class="aula-titulo"
        onclick="toggleAula('${aula.id}')"
    >

        <span id="icone-${aula.id}">
            ▶
        </span>

        <span>
            ${aula.titulo}
        </span>
<span
    id="status-${aula.id}"
    class="
        status-aula
        ${concluida ? 'status-ok' : 'status-pendente'}
    "
>
    ${concluida ? '✓ Concluída' : '○ Pendente'}
</span>
    </div>

</div>

    <div
        id="conteudo-${aula.id}"
        class="aula-conteudo"
    >

                <h2>${aula.titulo}</h2>

                <div class="aula-meta">
                    <strong>Matéria:</strong> ${aula.materia}
                </div>

                ${videoHTML}

                <div class="aula-actions">

                    <label class="check-aula">
                        <input
                            type="checkbox"
                            ${concluida ? "checked" : ""}
                            onchange="marcarAulaConcluida('${aula.id}', this.checked)"
                        >
                        Aula concluída
                    </label>

                    ${pdfHTML}

                </div>

                <h3>📝 Anotações da Aula</h3>

                <textarea
                    class="anotacoes-aula"
                    placeholder="Digite suas anotações desta aula..."
                    oninput="salvarAnotacaoAula('${aula.id}', this.value)"
                >${anotacao}</textarea>

                ${mapaHTML}

            </div>
</div>
</div>
        `;

    });

    atualizarProgressoAulas();
}
function atualizarDashboardMaterias(){

    const container =
        document.getElementById(
            "dashboardMaterias"
        );

    if(!container) return;

    container.innerHTML = "";

    let melhorMateria = "-";
    let piorMateria = "-";

    let melhorPercentual = -1;
    let piorPercentual = 101;

    Object.keys(rankingMaterias)
    .forEach(materia => {

        const dados =
            rankingMaterias[materia];

        const percentual =
            dados.total > 0
            ? (
                dados.acertos /
                dados.total
            ) * 100
            : 0;

        if(percentual > melhorPercentual){

            melhorPercentual =
                percentual;

            melhorMateria =
                materia;
        }

        if(percentual < piorPercentual){

            piorPercentual =
                percentual;

            piorMateria =
                materia;
        }

        container.innerHTML += `

            <div class="dashboard-barra">

                <div class="dashboard-barra-topo">

                    <span>
                        ${materia}
                    </span>

                    <span>
                        ${percentual.toFixed(1)}%
                    </span>

                </div>

                <div class="dashboard-barra-fundo">

                    <div
                        class="dashboard-barra-preenchimento"
                        style="
                            width:${percentual}%;
                        "
                    ></div>

                </div>

            </div>

        `;
    });

    atualizarElemento(
        "dashboardMateriaForte",
        melhorMateria
    );

    atualizarElemento(
        "dashboardMateriaFraca",
        piorMateria
    );

    atualizarPlanoEstudos(
        piorMateria,
        piorPercentual
    );

}
function atualizarPlanoEstudos(
    materia,
    percentual
){

    const plano =
        document.getElementById(
            "planoEstudos"
        );

    if(!plano) return;

    if(
        materia === "-" ||
        materia === undefined
    ){

        plano.innerHTML =
            "Responda algumas questões para gerar recomendações.";

        return;
    }

    plano.innerHTML = `

        <div class="plano-estudo">

            <h3>
                🔥 Prioridade Atual
            </h3>

            <br>

            <strong>
                ${materia}
            </strong>

            <br><br>

            Aproveitamento:
            ${percentual.toFixed(1)}%

            <br><br>

            Recomendação:

            <ul>

                <li>
                    Revisar teoria
                </li>

                <li>
                    Revisar erros
                </li>

                <li>
                    Resolver mais 20 questões
                </li>

            </ul>

        </div>

    `;
}
function salvarAnotacaoAula(id, texto){
    localStorage.setItem(`aula_anotacao_${id}`, texto);
}

function marcarAulaConcluida(id, status){

    localStorage.setItem(
        `aula_concluida_${id}`,
        status
    );

    const statusSpan =
        document.getElementById(
            `status-${id}`
        );

    if(statusSpan){

        statusSpan.className =
            status
            ? "status-aula status-ok"
            : "status-aula status-pendente";

        statusSpan.innerText =
            status
            ? "✓ Concluída"
            : "○ Pendente";

    }

    atualizarProgressoAulas();

}

function atualizarProgressoAulas(){

    const total = aulas.length;

    const concluidas = aulas.filter(a =>
        localStorage.getItem(`aula_concluida_${a.id}`) === "true"
    ).length;

    const percentual = total > 0
        ? (concluidas / total) * 100
        : 0;

    atualizarElemento("aulasConcluidas", concluidas);
    atualizarElemento("totalAulas", total);
    atualizarElemento("progressoAulas", percentual.toFixed(1) + "%");
    atualizarProgressoMaterias();
}
function toggleAula(id){

    const conteudo =
        document.getElementById(
            `conteudo-${id}`
        );

    const icone =
        document.getElementById(
            `icone-${id}`
        );

    if(!conteudo) return;

    const aberta =
        conteudo.style.display === "block";

    conteudo.style.display =
        aberta
        ? "none"
        : "block";

    icone.innerText =
        aberta
        ? "▶"
        : "▼";

}
