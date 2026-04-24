import { postsData, storiesData, dmsData, hashtagsData } from './alice-campaign';

export const initialKanban = [
  { id: 'k1', column: 'To Do', title: 'Criar cardápio semanal do desafio', description: 'Montar cardápio completo com receitas fáceis e baratas para as 3 semanas do Desafio 21 Dias.', tags: ['cardápio', 'nutrição'], priority: 'high', deadline: '2026-04-25' },
  { id: 'k2', column: 'To Do', title: 'Gravar reels de treino demo', description: 'Gravar 3 reels curtos (15-30s) demonstrando exercícios do desafio. Ambiente de casa.', tags: ['vídeo', 'treino'], priority: 'high', deadline: '2026-04-26' },
  { id: 'k3', column: 'In Progress', title: 'Design feed Post 1 — Abertura', description: 'Criar arte do Post 1: Alice com balança sorrindo, texto DESAFIO 21 DIAS — 15 VAGAS.', tags: ['design', 'feed'], priority: 'high', deadline: '2026-04-24' },
  { id: 'k4', column: 'In Progress', title: 'Design carousel Post 9', description: 'Criar 3 slides ilustrados para o carousel "Como funciona". Cores vibrantes.', tags: ['design', 'carousel'], priority: 'medium', deadline: '2026-04-27' },
  { id: 'k5', column: 'Review', title: 'Coletar depoimentos de alunas', description: 'Pedir para 3 alunas enviarem foto antes/depois e áudio de depoimento. Prazo: sexta.', tags: ['depoimento', 'prova social'], priority: 'high', deadline: '2026-04-25' },
  { id: 'k6', column: 'Review', title: 'Configurar grupo VIP WhatsApp', description: 'Criar grupo, definir regras, preparar mensagem de boas-vindas.', tags: ['comunidade', 'whatsapp'], priority: 'medium', deadline: '2026-04-24' },
  { id: 'k7', column: 'Done', title: 'Revisar copy Post 4 — Urgência', description: 'Revisar tom de urgência. Não pode soar agressivo demais.', tags: ['copy', 'revisão'], priority: 'medium', deadline: '2026-04-24' },
  { id: 'k8', column: 'Done', title: 'Pesquisa de hashtags', description: 'Pesquisar e organizar 3 conjuntos de hashtags para a campanha.', tags: ['hashtags', 'pesquisa'], priority: 'high', deadline: '2026-04-24' },
  { id: 'k9', column: 'Done', title: 'Definir calendário de publicação', description: 'Mapear 14 posts, 35 stories e 5 DMs com horários e dias.', tags: ['planejamento', 'calendário'], priority: 'high', deadline: '2026-04-24' }
];

export const initialTemplates = [
  { id: 't1', name: 'Hook Urgência', content: '⚠️ [NÚMERO] vagas restantes. E eu não vou abrir de novo tão cedo.\n\nSe você tá esperando o "momento certo" — ele não existe. O momento certo é quando você decide.\n\nManda DESAFIO no meu direct.', category: 'copy', used: false },
  { id: 't2', name: 'Hook Prova Social', content: 'Ela perdeu [X]kg em 21 dias sem passar fome.\n\nO que mudou? Nada mágico. Só um método que funciona — treino curto, comida de verdade e consistência.\n\nQuer seu resultado? Manda DESAFIO no meu direct.', category: 'copy', used: false },
  { id: 't3', name: 'Hook Educativo', content: '[MITO POPULAR] não funciona. E a ciência prova.\n\nNo Desafio 21 Dias a gente ensina a comer de verdade — sem regras absurdas, sem passar fome. Só estratégia que funciona.\n\nQuer aprender? Manda DESAFIO no meu direct.', category: 'copy', used: false },
  { id: 't4', name: 'Story Enquete', content: 'Enquete: "Quer mudar de corpo em 21 dias?"\nSIM / JÁ MUDEI', category: 'template', used: false },
  { id: 't5', name: 'Story Contagem Regressiva', content: 'Efeito de suspense: "3... 2... 1... As vagas abriram!" com transições rápidas.', category: 'template', used: false },
  { id: 't6', name: 'Story Prova Social', content: 'Print de mensagem de aluna: "Alice, funcionou demais!" com música motivacional de fundo.', category: 'template', used: false }
];

export function getInitialState() {
  return {
    posts: postsData,
    stories: storiesData,
    dms: dmsData,
    hashtags: hashtagsData,
    kanban: initialKanban,
    templates: initialTemplates,
    settings: {
      password: 'alice2026',
      whatsappLink: 'https://wa.me/5521992669980',
      instagramLink: 'https://instagram.com/alicemarotta',
      siteLink: 'https://alicemarotta.com'
    }
  };
}
