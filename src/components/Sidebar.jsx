import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard, Columns3, CalendarCheck, ClipboardCheck,
  BookOpen, Settings, LogOut, Sparkles
} from 'lucide-react';
import { useApp } from '../context/AppContext';

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/kanban', label: 'Kanban', icon: Columns3 },
  { to: '/planner', label: 'Planner', icon: CalendarCheck },
  { to: '/approvals', label: 'Aprovações', icon: ClipboardCheck },
  { to: '/library', label: 'Biblioteca', icon: BookOpen },
  { to: '/settings', label: 'Configurações', icon: Settings },
];

export default function Sidebar() {
  const { logout } = useApp();

  return (
    <aside className="w-64 h-screen bg-white border-r border-[#e5e4e7] flex flex-col sticky top-0">
      <div className="p-6 border-b border-[#e5e4e7]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[#703074] rounded-xl flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="font-bold text-[#1A1A2E] text-lg leading-tight">Alice Studio</h2>
            <p className="text-xs text-[#9ca3af]">Mini Notion</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-[#703074]/10 text-[#703074]'
                  : 'text-[#6b6375] hover:bg-[#F8F7FC] hover:text-[#1A1A2E]'
              }`
            }
          >
            <Icon className="w-5 h-5" />
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-[#e5e4e7]">
        <button
          onClick={logout}
          className="flex items-center gap-3 px-4 py-2.5 w-full rounded-xl text-sm font-medium text-[#6b6375] hover:bg-[#F8F7FC] hover:text-[#EF4444] transition-colors"
        >
          <LogOut className="w-5 h-5" />
          Sair
        </button>
      </div>
    </aside>
  );
}
