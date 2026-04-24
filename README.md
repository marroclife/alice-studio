# Alice Studio 🌀

Mini Notion para Alice Marotta — Personal Trainer

**Cliente:** Alice Marotta  
**Site:** [alicemarotta.com](https://alicemarotta.com)  
**Stack:** React 19 + Vite + Tailwind CSS + localStorage

---

## 🚀 Como usar

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build para produção
npm run build
```

## 🔐 Acesso

- **Senha:** `alice2026`
- Dados salvos no `localStorage` do navegador

## 📦 Módulos

1. **Dashboard** — Visão geral da campanha
2. **Kanban** — Tarefas com drag-and-drop
3. **Planner** — Calendário semanal de posts/stories
4. **Aprovações** — Revisão de conteúdo
5. **Biblioteca** — Copies, hashtags, templates, DMs
6. **Configurações** — Alterar senha e links úteis

## 🎨 Design System

| Token | Valor |
|-------|-------|
| Primary | `#703074` (Roxo Alice) |
| Secondary | `#D4AF37` (Dourado) |
| Background | `#F8F7FC` (Off-white lilás) |
| Text | `#1A1A2E` |

## 🏗️ Arquitetura

```
src/
├── components/     # Componentes de UI
├── context/        # Estado global (React Context)
├── data/           # Dados iniciais da campanha
├── hooks/          # useLocalStorage
├── App.jsx         # Rotas e autenticação
├── main.jsx        # Entry point
└── index.css       # Tailwind + custom styles
```

## 📝 Campanha Atual

**Desafio 21 Dias de Emagrecimento**
- 14 posts
- 35 stories
- 5 DMs automatizadas
- 3 conjuntos de hashtags

---

*Alice Studio © 2026 — Criado para Alice Marotta*
