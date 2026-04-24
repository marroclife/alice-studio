export const postsData = [
  {
    id: 1,
    title: "Post 1 — Abertura/Oferta",
    type: "feed",
    formato: "reels",
    status: "pendente",
    day: "Seg (Sem 1)",
    time: "12:00",
    hook: "21 dias pra mudar seu corpo",
    cta: "Manda DESAFIO no meu direct",
    hashtags: "#emagrecimento #fitness #treinoemcasa #desafio21dias #vidasaudavel #antesedepois #motivacao #mulherfit",
    visual: "Alice segurando uma balança sorrindo, texto em destaque: DESAFIO 21 DIAS — 15 VAGAS",
    roteiro: {
      duracao: "15-30 segundos",
      audio: "Trend '3, 2, 1... vai'",
      textoTela: "DESAFIO 21 DIAS — 15 VAGAS",
      cenas: [
        { tempo: "0-3s", descricao: "Alice correndo pra câmera, energia alta", acao: "Hook energético" },
        { tempo: "3-7s", descricao: "Alice falando direto", acao: "Oferta do desafio" },
        { tempo: "7-12s", descricao: "Mostrar rápido: treino, cardápio, grupo", acao: "Prova social (200+ mulheres)" },
        { tempo: "12-15s", descricao: "CTA na tela", acao: "Manda DESAFIO no direct" }
      ]
    }
  },
  {
    id: 2,
    title: "Post 2 — Antes e Depois",
    type: "feed",
    formato: "reels",
    status: "pendente",
    day: "Ter (Sem 1)",
    time: "12:00",
    hook: "Ela perdeu 7kg em 21 dias sem passar fome",
    cta: "Quer seu resultado? Manda DESAFIO no meu direct",
    hashtags: "#antesedepois #emagrecimento #transformacao #desafio21dias #resultado #motivacao #vidasaudavel #fitness",
    visual: "Foto antes/depois de aluna real, com texto sobreposto: 7kg em 21 dias",
    roteiro: {
      duracao: "20-30 segundos",
      audio: "Trend de superação/emocional",
      textoTela: "7KG EM 21 DIAS",
      cenas: [
        { tempo: "0-3s", descricao: "Foto 'antes' com transição suave", acao: "Contexto emocional" },
        { tempo: "3-8s", descricao: "Foto 'depois' com efeito de zoom", acao: "Revelação do resultado" },
        { tempo: "8-13s", descricao: "Texto narrativo na tela", acao: "Storytelling da Júlia" },
        { tempo: "13-18s", descricao: "Explicação do método", acao: "Desmistificar" },
        { tempo: "18-22s", descricao: "CTA final", acao: "Manda DESAFIO" }
      ]
    }
  },
  {
    id: 3,
    title: "Post 3 — Mito vs Verdade",
    type: "feed",
    formato: "carrossel",
    status: "pendente",
    day: "Qua (Sem 1)",
    time: "12:00",
    hook: "Comer de 3 em 3 horas não emagrece mais. Pare.",
    cta: "Quer aprender? Manda DESAFIO no meu direct",
    hashtags: "#nutricao #emagrecimento #mitos #vidasaudavel #fitness #desafio21dias #comidadoverdade #dica",
    visual: "Card com MITO: Comer de 3 em 3h emagrece riscado e VERDADE: Déficit calórico é o que importa em destaque",
    roteiro: {
      slides: 5,
      conteudo: [
        { numero: 1, texto: "MITO vs VERDADE: Alimentação", visual: "Capa chamativa", cor: "roxo" },
        { numero: 2, texto: "MITO: Comer de 3 em 3h emagrece", visual: "Fundo vermelho", cor: "vermelho" },
        { numero: 3, texto: "VERDADE: Déficit calórico importa", visual: "Fundo verde", cor: "verde" },
        { numero: 4, texto: "No Desafio a gente ensina a comer de verdade", visual: "Foto Alice", cor: "roxo" },
        { numero: 5, texto: "Manda DESAFIO no direct", visual: "CTA grande", cor: "dourado" }
      ]
    }
  },
  {
    id: 4,
    title: "Post 4 — Vagas Limitadas",
    type: "feed",
    formato: "reels",
    status: "pendente",
    day: "Qui (Sem 1)",
    time: "12:00",
    hook: "Sobraram 5 vagas. E eu não vou abrir de novo tão cedo.",
    cta: "Garante sua vaga: Manda DESAFIO no meu direct",
    hashtags: "#vagaslimitadas #emagrecimento #desafio21dias #fitness #ultimavaga #motivacao #vidasaudavel #mulherfit",
    visual: "Contador regressivo visual 5 VAGAS RESTANTES com fundo escuro e texto em vermelho/laranja",
    roteiro: {
      duracao: "10-15 segundos",
      audio: "Música tensa/dramática",
      textoTela: "5 VAGAS",
      cenas: [
        { tempo: "0-2s", descricao: "Alice séria, olho na câmera", acao: "Tensão" },
        { tempo: "2-5s", descricao: "Texto impactante na tela", acao: "Sobraram 5 vagas" },
        { tempo: "5-8s", descricao: "Contagem regressiva visual", acao: "Urgência" },
        { tempo: "8-12s", descricao: "Frase provocativa na tela", acao: "Desafiar" },
        { tempo: "12-15s", descricao: "CTA urgente", acao: "Manda DESAFIO" }
      ]
    }
  },
  {
    id: 5,
    title: "Post 5 — Lifestyle/Café",
    type: "feed",
    formato: "feed",
    status: "pendente",
    day: "Sex (Sem 1)",
    time: "12:00",
    hook: "Meu café da manhã custa R$8 e me deixa saciada até o almoço",
    cta: "Quer o cardápio? Manda DESAFIO no meu direct",
    hashtags: "#cafedamanha #nutricao #emagrecimento #vidasaudavel #desafio21dias #fitness #comidadoverdade #lifestyle",
    visual: "Flat lay de café da manhã saudável, estética clean, prato bonito com luz natural",
    roteiro: {
      foto: "Flat lay de café da manhã saudável",
      estetica: "Clean, luz natural, prato bonito",
      legenda: "Meu café da manhã custa R$8 e me deixa saciada até o almoço. Não é shake caro. Não é comida de coelho. É comida de verdade, barata e que funciona. Quer o cardápio completo? Manda DESAFIO no meu direct.",
      hashtags: ["#cafedamanha", "#nutricao", "#emagrecimento", "#vidasaudavel", "#desafio21dias", "#fitness", "#comidadoverdade", "#lifestyle"]
    }
  },
  {
    id: 6,
    title: "Post 6 — Depoimento Vídeo",
    type: "reels",
    formato: "reels",
    status: "pendente",
    day: "Sáb (Sem 1)",
    time: "12:00",
    hook: "Ela quis desistir no dia 3. No dia 21 mandou essa mensagem.",
    cta: "Sua história pode ser a próxima. Manda DESAFIO no meu direct",
    hashtags: "#depoimento #emagrecimento #transformacao #desafio21dias #comunidade #motivacao #resultado #mulherfit",
    visual: "Screenshot de áudio do WhatsApp convertido em vídeo com legendas, foto da aluna",
    roteiro: {
      duracao: "25-35 segundos",
      audio: "Voz da aluna + música suave",
      textoTela: "Legendas do áudio",
      cenas: [
        { tempo: "0-3s", descricao: "Print do WhatsApp", acao: "Credibilidade" },
        { tempo: "3-8s", descricao: "Áudio da aluna tocando", acao: "Emoção real" },
        { tempo: "8-15s", descricao: "Fotos dela treinando, comendo", acao: "Contextualizar" },
        { tempo: "15-20s", descricao: "Texto reflexivo na tela", acao: "Todo mundo quer desistir" },
        { tempo: "20-25s", descricao: "CTA final", acao: "Manda DESAFIO" }
      ]
    }
  },
  {
    id: 7,
    title: "Post 7 — Fechamento Semana",
    type: "feed",
    formato: "carrossel",
    status: "pendente",
    day: "Dom (Sem 1)",
    time: "12:00",
    hook: "Se segunda você começar, em 21 dias vai ser outra pessoa",
    cta: "Não deixa pra depois. Manda DESAFIO no meu direct",
    hashtags: "#domingo #reflexao #emagrecimento #desafio21dias #motivacao #novocomeco #fitness #vidasaudavel",
    visual: "Alice em ambiente relaxado (sofá/varanda), texto leve: Segunda começa sua transformação",
    roteiro: {
      slides: 4,
      conteudo: [
        { numero: 1, texto: "Se segunda você começar...", visual: "Capa inspiradora", cor: "azul" },
        { numero: 2, texto: "...em 21 dias você vai ser outra pessoa", visual: "Transformação", cor: "roxo" },
        { numero: 3, texto: "✅ Treino ✅ Cardápio ✅ Grupo", visual: "Checklist visual", cor: "verde" },
        { numero: 4, texto: "Não deixa pra depois. Manda DESAFIO", visual: "CTA", cor: "dourado" }
      ]
    }
  },
  {
    id: 8,
    title: "Post 8 — Últimas Vagas",
    type: "feed",
    formato: "reels",
    status: "pendente",
    day: "Seg (Sem 2)",
    time: "12:00",
    hook: "Você viu todos os posts e ainda não mandou mensagem. Tá com medo de funcionar?",
    cta: "Última chance. Manda DESAFIO no meu direct",
    hashtags: "#ultimachance #emagrecimento #desafio21dias #fitness #motivacao #transformacao #vidasaudavel #mulherfit",
    visual: "Foto de Alice séria mas acolhedora, texto: ÚLTIMAS 5 VAGAS",
    roteiro: {
      duracao: "10-15 segundos",
      audio: "Trend de última chance",
      textoTela: "ÚLTIMAS VAGAS",
      cenas: [
        { tempo: "0-3s", descricao: "Alice com expressão de desafio", acao: "Desafio" },
        { tempo: "3-6s", descricao: "Texto impactante", acao: "Últimas vagas. Depois disso, acabou." },
        { tempo: "6-10s", descricao: "Prints de conversas", acao: "Prova social" },
        { tempo: "10-13s", descricao: "Frase empoderada", acao: "Não deixa pra depois" },
        { tempo: "13-15s", descricao: "CTA final", acao: "Manda DESAFIO" }
      ]
    }
  },
  {
    id: 9,
    title: "Post 9 — Como Funciona",
    type: "carousel",
    formato: "carrossel",
    status: "pendente",
    day: "Ter (Sem 2)",
    time: "12:00",
    hook: "3 coisas que você recebe quando entra no Desafio 21 Dias",
    cta: "Quer os 3? Manda DESAFIO no meu direct",
    hashtags: "#comofunciona #emagrecimento #desafio21dias #fitness #treinoemcasa #nutricao #comunidade #vidasaudavel",
    visual: "Carousel com 3 slides ilustrados, um pra cada item, cores vibrantes",
    roteiro: {
      slides: 5,
      conteudo: [
        { numero: 1, texto: "3 coisas que você recebe no Desafio", visual: "Capa", cor: "roxo" },
        { numero: 2, texto: "1. Treino em casa — 30 min", visual: "Ícone treino", cor: "azul" },
        { numero: 3, texto: "2. Cardápio completo — receitas fáceis", visual: "Ícone comida", cor: "verde" },
        { numero: 4, texto: "3. Grupo VIP — acompanhamento diário", visual: "Ícone comunidade", cor: "amarelo" },
        { numero: 5, texto: "Quer os 3? Manda DESAFIO", visual: "CTA", cor: "dourado" }
      ]
    }
  },
  {
    id: 10,
    title: "Post 10 — Objecão Tempo",
    type: "reels",
    formato: "reels",
    status: "pendente",
    day: "Qua (Sem 2)",
    time: "12:00",
    hook: "Você tem 30 min. O que não tem é desculpa.",
    cta: "30 min por dia. Manda DESAFIO no meu direct",
    hashtags: "#tempo #emagrecimento #desafio21dias #fitness #treinoemcasa #motivacao #mulherfit #vidasaudavel",
    visual: "Foto de Alice treinando em casa, relógio mostrando 30 min, ambiente realista",
    roteiro: {
      duracao: "20-25 segundos",
      audio: "Trend de treino/motivação",
      textoTela: "30 MIN",
      cenas: [
        { tempo: "0-3s", descricao: "Relógio mostrando 30 min", acao: "Contexto" },
        { tempo: "3-8s", descricao: "Alice treinando em casa", acao: "Demonstração" },
        { tempo: "8-13s", descricao: "Texto na tela", acao: "30 min por dia. Sem equipamento." },
        { tempo: "13-18s", descricao: "Demonstração de 3 exercícios", acao: "Valorizar" },
        { tempo: "18-22s", descricao: "Frase final", acao: "Treino curto, resultado longo." }
      ]
    }
  },
  {
    id: 11,
    title: "Post 11 — Números",
    type: "feed",
    formato: "carrossel",
    status: "pendente",
    day: "Qui (Sem 2)",
    time: "12:00",
    hook: "200+ mulheres. 4.000kg eliminados. 1 método.",
    cta: "Faz parte dos 94%. Manda DESAFIO no meu direct",
    hashtags: "#resultados #emagrecimento #desafio21dias #fitness #transformacao #comunidade #motivacao #antesedepois",
    visual: "Gráfico simples com estatísticas, fotos de alunas pequenas ao redor",
    roteiro: {
      slides: 5,
      conteudo: [
        { numero: 1, texto: "200+ mulheres. 4.000kg. 1 método.", visual: "Capa impactante", cor: "roxo" },
        { numero: 2, texto: "200+ mulheres", visual: "Ícone feminino", cor: "rosa" },
        { numero: 3, texto: "4.000kg", visual: "Ícone peso", cor: "verde" },
        { numero: 4, texto: "94% das alunas recomendam", visual: "Ícone like", cor: "azul" },
        { numero: 5, texto: "Faz parte dos 94%. Manda DESAFIO", visual: "CTA", cor: "dourado" }
      ]
    }
  },
  {
    id: 12,
    title: "Post 12 — Emocional",
    type: "feed",
    formato: "reels",
    status: "pendente",
    day: "Sex (Sem 2)",
    time: "12:00",
    hook: "Não é falta de força de vontade. É falta de estrutura.",
    cta: "Não faz sozinha. Manda DESAFIO no meu direct",
    hashtags: "#acompanhamento #emagrecimento #desafio21dias #fitness #motivacao #estrutura #comunidade #mulherfit",
    visual: "Foto de Alice abraçando aluna, ambiente acolhedor, luz quente",
    roteiro: {
      duracao: "20-30 segundos",
      audio: "Música emocional, leve",
      textoTela: "Legendas sincronizadas",
      cenas: [
        { tempo: "0-5s", descricao: "Alice falando direto para câmera", acao: "Conexão" },
        { tempo: "5-10s", descricao: "Texto na tela", acao: "Você não precisa ser forte o tempo todo." },
        { tempo: "10-18s", descricao: "Montagem de alunas treinando", acao: "Comunidade" },
        { tempo: "18-23s", descricao: "Texto inspirador", acao: "No Desafio você não tá sozinha" },
        { tempo: "23-28s", descricao: "CTA + abraço", acao: "Manda DESAFIO" }
      ]
    }
  },
  {
    id: 13,
    title: "Post 13 — Urgência Final",
    type: "feed",
    formato: "reels",
    status: "pendente",
    day: "Sáb (Sem 2)",
    time: "12:00",
    hook: "Fecha às 23:59 de hoje. Depois disso, acabou.",
    cta: "ÚLTIMAS HORAS. Manda DESAFIO no meu direct",
    hashtags: "#ultimachance #emagrecimento #desafio21dias #fitness #prazo #motivacao #transformacao #agora",
    visual: "Texto grande em fundo preto: FECHA HOJE 23:59, contagem regressiva",
    roteiro: {
      duracao: "10-15 segundos",
      audio: "Tique-taque de relógio + música tensa",
      textoTela: "FECHA HOJE 23:59",
      cenas: [
        { tempo: "0-2s", descricao: "Fundo preto, texto grande", acao: "Impacto" },
        { tempo: "2-5s", descricao: "Texto piscando", acao: "HOJE 23:59" },
        { tempo: "5-8s", descricao: "Frase de urgência", acao: "Última chance de entrar na turma" },
        { tempo: "8-12s", descricao: "Lista de benefícios rápidos", acao: "Valorizar" },
        { tempo: "12-15s", descricao: "CTA urgente", acao: "Manda DESAFIO" }
      ]
    }
  },
  {
    id: 14,
    title: "Post 14 — Nova Turma",
    type: "feed",
    formato: "feed",
    status: "pendente",
    day: "Dom (Sem 2)",
    time: "12:00",
    hook: "Nova turma. Novas vagas. Mesmo resultado garantido.",
    cta: "Reserva sua vaga: Manda DESAFIO no meu direct",
    hashtags: "#novaturma #emagrecimento #desafio21dias #fitness #maio #motivacao #transformacao #vidasaudavel",
    visual: "Alice com calendário de maio, texto: TURMA MAIO — VAGAS ABERTAS",
    roteiro: {
      foto: "Alice com calendário de maio",
      estetica: "Alegre, cores vibrantes, sorriso largo",
      legenda: "Nova turma. Novas vagas. Mesmo resultado garantido. A turma de abril lotou em 48h. A de maio não vai ser diferente. Reserva sua vaga: Manda DESAFIO no meu direct.",
      hashtags: ["#novaturma", "#emagrecimento", "#desafio21dias", "#fitness", "#maio", "#motivacao", "#transformacao", "#vidasaudavel"]
    }
  }
];

export const storiesData = [
  { id: 's1', title: "Contagem regressiva", day: "Seg (Sem 1)", time: "08:00", status: "pendente" },
  { id: 's2', title: "Behind the scenes", day: "Seg (Sem 1)", time: "10:00", status: "pendente" },
  { id: 's3', title: "Enquete", day: "Seg (Sem 1)", time: "15:00", status: "pendente" },
  { id: 's4', title: "Caixa de perguntas", day: "Seg (Sem 1)", time: "18:00", status: "pendente" },
  { id: 's5', title: "Prova social rápida", day: "Seg (Sem 1)", time: "20:00", status: "pendente" },
  { id: 's6', title: "Transformação do dia", day: "Ter (Sem 1)", time: "08:00", status: "pendente" },
  { id: 's7', title: "Treino demonstração", day: "Ter (Sem 1)", time: "10:00", status: "pendente" },
  { id: 's8', title: "Repost de seguidora", day: "Ter (Sem 1)", time: "15:00", status: "pendente" },
  { id: 's9', title: "Números", day: "Ter (Sem 1)", time: "18:00", status: "pendente" },
  { id: 's10', title: "CTA direto", day: "Ter (Sem 1)", time: "20:00", status: "pendente" },
  { id: 's11', title: "Dica rápida", day: "Qua (Sem 1)", time: "08:00", status: "pendente" },
  { id: 's12', title: "Mito desmistificado", day: "Qua (Sem 1)", time: "10:00", status: "pendente" },
  { id: 's13', title: "Votação", day: "Qua (Sem 1)", time: "15:00", status: "pendente" },
  { id: 's14', title: "Resposta dúvida", day: "Qua (Sem 1)", time: "18:00", status: "pendente" },
  { id: 's15', title: "Depoimento em áudio", day: "Qua (Sem 1)", time: "20:00", status: "pendente" },
  { id: 's16', title: "Urgência/vagas", day: "Qui (Sem 1)", time: "08:00", status: "pendente" },
  { id: 's17', title: "Dia de treino", day: "Qui (Sem 1)", time: "10:00", status: "pendente" },
  { id: 's18', title: "Cardápio do dia", day: "Qui (Sem 1)", time: "15:00", status: "pendente" },
  { id: 's19', title: "Print de conversa", day: "Qui (Sem 1)", time: "18:00", status: "pendente" },
  { id: 's20', title: "Lembrete", day: "Qui (Sem 1)", time: "20:00", status: "pendente" },
  { id: 's21', title: "Vibe leve", day: "Sex (Sem 1)", time: "08:00", status: "pendente" },
  { id: 's22', title: "Enquete sexta", day: "Sex (Sem 1)", time: "10:00", status: "pendente" },
  { id: 's23', title: "Repost aluna", day: "Sex (Sem 1)", time: "15:00", status: "pendente" },
  { id: 's24', title: "Bastidores grupo", day: "Sex (Sem 1)", time: "18:00", status: "pendente" },
  { id: 's25', title: "CTA suave", day: "Sex (Sem 1)", time: "20:00", status: "pendente" },
  { id: 's26', title: "Resultado aluna", day: "Sáb (Sem 1)", time: "08:00", status: "pendente" },
  { id: 's27', title: "Treino rápido", day: "Sáb (Sem 1)", time: "10:00", status: "pendente" },
  { id: 's28', title: "Vida real", day: "Sáb (Sem 1)", time: "15:00", status: "pendente" },
  { id: 's29', title: "Última chamada", day: "Sáb (Sem 1)", time: "18:00", status: "pendente" },
  { id: 's30', title: "Contagem regressiva", day: "Sáb (Sem 1)", time: "20:00", status: "pendente" },
  { id: 's31', title: "Domingo de reflexão", day: "Dom (Sem 1)", time: "08:00", status: "pendente" },
  { id: 's32', title: "Preparação", day: "Dom (Sem 1)", time: "10:00", status: "pendente" },
  { id: 's33', title: "Nova turma", day: "Dom (Sem 1)", time: "15:00", status: "pendente" },
  { id: 's34', title: "Pergunta", day: "Dom (Sem 1)", time: "18:00", status: "pendente" },
  { id: 's35', title: "CTA", day: "Dom (Sem 1)", time: "20:00", status: "pendente" }
];

export const dmsData = [
  { id: 1, title: "Boas-vindas", content: "Oi! 💜 Vi que você mandou DESAFIO. Sou a Alice e vou te acompanhar nesses 21 dias. Antes de te passar os valores e como funciona, me conta: qual sua maior dificuldade hoje? É comida, treino, ou consistência? (Sua resposta me ajuda a entender se o desafio é realmente pra você)", status: "ativo" },
  { id: 2, title: "Qualificação", content: "Obrigada por responder! 🙏 Então, o Desafio 21 Dias funciona assim:\n\n✅ Treino em casa — 30 min, sem equipamento\n✅ Cardápio completo — com receitas fáceis\n✅ Grupo VIP no WhatsApp — acompanhamento diário\n\nO investimento é R$ 97 (ou 2x de R$ 54).\n\nVocê topa começar segunda?", status: "ativo" },
  { id: 3, title: "Objecão (Preço)", content: "Entendo perfeitamente! 💜\n\nR$97 parece dinheiro — e é. Mas pensa comigo: quanto você gasta com delivery, lanche, besteira numa semana só?\n\nO desafio te dá 21 dias de estrutura. No final, você não só emagrece — aprende a manter.\n\nE se parcelar em 2x de R$54 fica mais tranquilo?", status: "ativo" },
  { id: 4, title: "Fechamento", content: "Perfeito! 🎉\n\nTô te mandando o link de pagamento aqui em cima. Assim que confirmar, você entra no grupo e recebe todo o material.\n\nQualquer dúvida, me chama aqui mesmo. Não some, hein? 😊\n\nLink: [PAGAMENTO]", status: "ativo" },
  { id: 5, title: "Pós-venda / Retenção", content: "E aí, como foi seu primeiro dia? 💪\n\nSe tiver qualquer dificuldade com treino ou cardápio, manda aqui. Tô de olho no grupo, mas quero que você saiba que pode falar comigo no particular também.\n\nBora juntas! 🔥", status: "ativo" }
];

export const hashtagsData = [
  {
    id: 1, name: "Conjunto 1: Nicho Principal", tags: ["#emagrecimento", "#fitness", "#emagrecercomsaude", "#exerciciofisico", "#vidasaudavel", "#saude", "#bemestar", "#perdadepeso", "#emagrecerrapido", "#fitnessbrasil", "#treinofuncional", "#dieta", "#nutricao", "#qualidadedevida", "#fitnessmotivation", "#corposaudavel", "#emagrecimentosaudavel", "#treinointeligente", "#transformacaocorporal", "#fitnessbr"]
  },
  {
    id: 2, name: "Conjunto 2: Sub-nicho + Local", tags: ["#emagrecimentofeminino", "#treinoemcasa", "#treinoparamulheres", "#personaltrainerrio", "#personaltrainerrj", "#personaltrainer", "#treinoemcasafeminino", "#mulheresquecorrem", "#mulheresfitness", "#treinopersonalizado", "#fitnessfeminino", "#desafioemagrecimento", "#perderbarriga", "#comoemagrecer", "#emagreceremcasa", "#treinododia", "#focoemagrecimento", "#resultadosreais", "#riodejaneirofit", "#personalonlinerj"]
  },
  {
    id: 3, name: "Conjunto 3: Trending/Virais", tags: ["#reelsfitness", "#reelsemagrecimento", "#desafio21dias", "#trendfitness2026", "#antesedepois", "#minutofitness", "#treinoexpress", "#rotinafit", "#fitnessmotivacao", "#transformacaofeminina", "#treinoeficiente", "#fitnessrj", "#vidafit", "#resultadosnatela", "#alunorealresultadoreal", "#academiaemcasa", "#foconofoco", "#naodesisto", "#supereacao", "#alicefazdiferenca"]
  }
];
