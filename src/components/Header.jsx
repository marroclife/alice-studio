import React from 'react';
import { Bell, Search } from 'lucide-react';

export default function Header({ title, subtitle }) {
  return (
    <header className="h-16 bg-white border-b border-[#e5e4e7] flex items-center justify-between px-6 sticky top-0 z-10">
      <div>
        <h1 className="text-xl font-bold text-[#1A1A2E]">{title}</h1>
        {subtitle && <p className="text-xs text-[#9ca3af]">{subtitle}</p>}
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden sm:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9ca3af]" />
          <input
            type="text"
            placeholder="Buscar..."
            className="pl-10 pr-4 py-2 bg-[#F8F7FC] border border-[#e5e4e7] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#703074]/30 w-64"
          />
        </div>
        <button className="relative p-2 text-[#6b6375] hover:text-[#703074] transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-[#EF4444] rounded-full"></span>
        </button>
      </div>
    </header>
  );
}
