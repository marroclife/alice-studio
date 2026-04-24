import React, { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Login() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login } = useApp();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    if (!login(password)) {
      setError('Senha incorreta. Tente novamente.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F8F7FC]">
      <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg animate-fade-in">
        <div className="text-center mb-8">
          <div className="w-16 h-16 mx-auto mb-4 bg-[#703074] rounded-2xl flex items-center justify-center">
            <Lock className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-2xl font-bold text-[#1A1A2E] mb-2">Alice Studio</h1>
          <p className="text-[#6b6375] text-sm">Gerenciamento de conteúdo</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite a senha"
              className="w-full px-4 py-3 pr-12 bg-[#F8F7FC] border border-[#e5e4e7] rounded-xl text-[#1A1A2E] placeholder:text-[#9ca3af] focus:outline-none focus:ring-2 focus:ring-[#703074]/30 focus:border-[#703074]"
              autoFocus
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9ca3af] hover:text-[#703074]"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {error && (
            <p className="text-sm text-[#EF4444]">{error}</p>
          )}
          <button
            type="submit"
            className="w-full py-3 bg-[#703074] hover:bg-[#5a255e] text-white font-medium rounded-xl transition-colors"
          >
            Entrar
          </button>
        </form>
        <p className="text-center text-xs text-[#9ca3af] mt-6">
          Alice Marotta © 2026
        </p>
      </div>
    </div>
  );
}
