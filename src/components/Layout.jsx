import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const pageTitles = {
  '/': { title: 'Dashboard', subtitle: 'Visão geral da campanha atual' },
  '/kanban': { title: 'Kanban', subtitle: 'Gerenciamento de tarefas' },
  '/planner': { title: 'Planner de Marketing', subtitle: 'Calendário de publicações' },
  '/approvals': { title: 'Área de Aprovações', subtitle: 'Revisão de conteúdo' },
  '/library': { title: 'Biblioteca de Conteúdo', subtitle: 'Copies, hashtags e templates' },
  '/settings': { title: 'Configurações', subtitle: 'Preferências do sistema' }
};

export default function Layout() {
  const location = useLocation();
  const { title, subtitle } = pageTitles[location.pathname] || { title: 'Alice Studio', subtitle: '' };

  return (
    <div className="flex min-h-screen bg-[#F8F7FC]">
      <Sidebar />
      <div className="flex-1 flex flex-col min-h-screen overflow-hidden">
        <Header title={title} subtitle={subtitle} />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
