import React, { useState } from 'react';
import { Lock, Link2, ExternalLink, Save, Check } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Settings() {
  const { data, updatePassword, logout } = useApp();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const handleChangePassword = (e) => {
    e.preventDefault();
    setMessage('');

    if (currentPassword !== data.settings.password) {
      setMessage('Senha atual incorreta.');
      setMessageType('error');
      return;
    }

    if (newPassword.length < 4) {
      setMessage('A nova senha deve ter pelo menos 4 caracteres.');
      setMessageType('error');
      return;
    }

    if (newPassword !== confirmPassword) {
      setMessage('As senhas não coincidem.');
      setMessageType('error');
      return;
    }

    updatePassword(newPassword);
    setMessage('Senha alterada com sucesso!');
    setMessageType('success');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  const links = [
    { label: 'WhatsApp', url: data.settings.whatsappLink, icon: '💬' },
    { label: 'Instagram', url: data.settings.instagramLink, icon: '📷' },
    { label: 'Site', url: data.settings.siteLink, icon: '🌐' }
  ];

  return (
    <div className="animate-fade-in max-w-2xl space-y-6">
      {/* Change Password */}
      <div className="bg-white rounded-xl p-6 border border-[#e5e4e7]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#703074]/10 rounded-lg flex items-center justify-center">
            <Lock className="w-5 h-5 text-[#703074]" />
          </div>
          <div>
            <h2 className="font-semibold text-[#1A1A2E]">Alterar Senha</h2>
            <p className="text-xs text-[#9ca3af]">Mantenha sua conta segura</p>
          </div>
        </div>

        <form onSubmit={handleChangePassword} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[#1A1A2E] mb-1.5">Senha Atual</label>
            <input
              type="password"
              value={currentPassword}
              onChange={e => setCurrentPassword(e.target.value)}
              className="w-full px-3 py-2.5 border border-[#e5e4e7] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#703074]/30"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A1A2E] mb-1.5">Nova Senha</label>
            <input
              type="password"
              value={newPassword}
              onChange={e => setNewPassword(e.target.value)}
              className="w-full px-3 py-2.5 border border-[#e5e4e7] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#703074]/30"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#1A1A2E] mb-1.5">Confirmar Nova Senha</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              className="w-full px-3 py-2.5 border border-[#e5e4e7] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#703074]/30"
              required
            />
          </div>

          {message && (
            <p className={`text-sm ${messageType === 'error' ? 'text-[#EF4444]' : 'text-[#10B981]'}`}>
              {message}
            </p>
          )}

          <button
            type="submit"
            className="flex items-center gap-2 px-4 py-2.5 bg-[#703074] text-white rounded-lg text-sm font-medium hover:bg-[#5a255e]"
          >
            <Save className="w-4 h-4" /> Salvar Alterações
          </button>
        </form>
      </div>

      {/* Useful Links */}
      <div className="bg-white rounded-xl p-6 border border-[#e5e4e7]">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 bg-[#D4AF37]/10 rounded-lg flex items-center justify-center">
            <Link2 className="w-5 h-5 text-[#D4AF37]" />
          </div>
          <div>
            <h2 className="font-semibold text-[#1A1A2E]">Links Úteis</h2>
            <p className="text-xs text-[#9ca3af]">Acesso rápido aos canais da Alice</p>
          </div>
        </div>

        <div className="space-y-3">
          {links.map(link => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-4 bg-[#F8F7FC] rounded-xl hover:bg-[#703074]/5 transition-colors group"
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{link.icon}</span>
                <div>
                  <p className="text-sm font-medium text-[#1A1A2E]">{link.label}</p>
                  <p className="text-xs text-[#9ca3af] truncate max-w-[250px]">{link.url}</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-[#9ca3af] group-hover:text-[#703074]" />
            </a>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="bg-white rounded-xl p-6 border border-[#e5e4e7]">
        <h3 className="font-semibold text-[#1A1A2E] mb-3">Sobre o Alice Studio</h3>
        <div className="space-y-2 text-sm text-[#6b6375]">
          <p><span className="font-medium text-[#1A1A2E]">Versão:</span> 1.0.0</p>
          <p><span className="font-medium text-[#1A1A2E]">Cliente:</span> Alice Marotta — Personal Trainer</p>
          <p><span className="font-medium text-[#1A1A2E]">Campanha atual:</span> Desafio 21 Dias de Emagrecimento</p>
          <p><span className="font-medium text-[#1A1A2E]">Dados salvos em:</span> localStorage (navegador)</p>
        </div>
      </div>
    </div>
  );
}
