// Objetivos do exame LPI 010-200 (versão 2.0) e registro das questões.
// Os pesos somam 40, igual ao número de questões do exame real.
window.LPI = {
  topics: [
    { id: "011", name: "O Sistema Operacional Linux e Software de Código Aberto", objectives: [
      ["011.1", "Distribuições Linux", 2],
      ["011.2", "Principais Aplicações de Código Aberto", 2],
      ["011.3", "Software de Código Aberto e Licenciamento", 1],
      ["011.4", "Uso do Linux", 2],
    ] },
    { id: "012", name: "Noções Básicas da Linha de Comando", objectives: [
      ["012.1", "Uso da Linha de Comando", 3],
      ["012.2", "Documentação, Páginas de Manual e Informações de Uso", 2],
      ["012.3", "Arquivos, Diretórios e Caminhos", 2],
      ["012.4", "Gerenciamento de Arquivos e Diretórios", 2],
    ] },
    { id: "013", name: "Processamento de Dados", objectives: [
      ["013.1", "Arquivamento e Compressão", 2],
      ["013.2", "Redirecionamentos e Processamento de Texto", 3],
      ["013.3", "Noções Básicas de Shell Script", 4],
    ] },
    { id: "014", name: "Noções Básicas de Administração do Sistema", objectives: [
      ["014.1", "Instalação e Provisionamento do Linux", 1],
      ["014.2", "Hardware e Acesso a Dispositivos", 2],
      ["014.3", "Processos e Mensagens de Log", 3],
      ["014.4", "Configuração de Rede", 2],
    ] },
    { id: "015", name: "Segurança e Permissões do Sistema de Arquivos", objectives: [
      ["015.1", "Logins Remotos, Transferência de Arquivos e Privilégios Elevados", 2],
      ["015.2", "Gerenciamento de Usuários e Grupos", 2],
      ["015.3", "Permissões e Propriedade de Arquivos", 2],
      ["015.4", "Diretórios e Arquivos Especiais", 1],
    ] },
  ],

  questions: [],

  // Múltipla escolha. Opções que começam com "*" são corretas
  // (mais de uma correta = questão "escolha N").
  // Em textos, `crases` viram código, **asteriscos duplos** viram negrito
  // e ``` delimita bloco de código.
  mc: function (obj, q, opts, exp) {
    window.LPI.questions.push({ type: "mc", obj: obj, q: q, opts: opts, exp: exp });
  },

  // Preencher lacuna. "answers" lista todas as respostas aceitas.
  fill: function (obj, q, answers, exp) {
    window.LPI.questions.push({ type: "fill", obj: obj, q: q, answers: answers, exp: exp });
  },
};

// Atalhos usados nos arquivos de questões (questions/*.js).
function Q(obj, q, opts, exp) { LPI.mc(obj, q, opts, exp); }
function F(obj, q, answers, exp) { LPI.fill(obj, q, answers, exp); }
