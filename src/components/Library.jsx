import React, { useState } from 'react';
import { Search, Copy, Check, Edit2, Hash, FileText, MessageSquare, Bookmark, X } from 'lucide-react';
import { useApp } from '../context/AppContext';

const tabs = [
  { key: 'copies', label: 'Copies', icon: FileText },
  { key: 'hashtags', label: 'Hashtags', icon: Hash },
  { key: 'templates', label: 'Templates', icon: Bookmark },
  { key: 'dms', label: 'DMs', icon: MessageSquare }
];

export default function Library() {
  const { data, updateTemplate, addTemplate } = useApp();
  const [activeTab, setActiveTab] = useState('copies');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedId, setCopiedId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editContent, setEditContent] = useState('');
  const [showNewTemplate, setShowNewTemplate] = useState(false);
  const [newTemplate, setNewTemplate] = useState({ name: '', content: '', category: 'copy' });

  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setEditContent(item.content);
  };

  const handleSave = (id) => {
    updateTemplate(id, { content: editContent });
    setEditingId(null);
    setEditContent('');
  };

  const handleAddTemplate = () => {
    if (!newTemplate.name.trim() || !newTemplate.content.trim()) return;
    addTemplate({ ...newTemplate, used: false });
    setNewTemplate({ name: '', content: '', category: 'copy' });
    setShowNewTemplate(false);
  };

  const getFilteredItems = () => {
    const q = searchQuery.toLowerCase();
    switch (activeTab) {
      case 'copies':
        return data.templates.filter(t => t.category === 'copy' && (t.name.toLowerCase().includes(q) || t.content.toLowerCase().includes(q)));
      case 'hashtags':
        return data.hashtags.filter(h => h.name.toLowerCase().includes(q) || h.tags.some(t => t.toLowerCase().includes(q)));
      case 'templates':
        return data.templates.filter(t => t.category === 'template' && (t.name.toLowerCase().includes(q) || t.content.toLowerCase().includes(q)));
      case 'dms':
        return data.dms.filter(d => d.title.toLowerCase().includes(q) || d.content.toLowerCase().includes(q));
      default:
        return [];
    }
  };

  const items = getFilteredItems();

  return (
    <div className="animate-fade-in">
      {/* Search + Tabs */}
      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9ca3af]" />
          <input
            type="text"
            placeholder="Buscar por palavra-chave..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#e5e4e7] rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#703074]/30"
          />
        </div>
        <div className="flex gap-2">
          {tabs.map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => { setActiveTab(key); setSearchQuery(''); }}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                activeTab === key
                  ? 'bg-[#703074] text-white'
                  : 'bg-white text-[#6b6375] border border-[#e5e4e7] hover:bg-[#F8F7FC]'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* New template button for templates tab */}
      {activeTab === 'templates' && (
        <button
          onClick={() => setShowNewTemplate(true)}
          className="mb-4 px-4 py-2 bg-[#703074] text-white rounded-lg text-sm font-medium hover:bg-[#5a255e]"
        >
          + Novo Template
        </button>
      )}

      {/* New template modal */}
      {showNewTemplate && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-[#1A1A2E]">Novo Template</h3>
              <button onClick={() => setShowNewTemplate(false)} className="text-[#9ca3af] hover:text-[#1A1A2E]">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Nome"
                value={newTemplate.name}
                onChange={e => setNewTemplate({ ...newTemplate, name: e.target.value })}
                className="w-full px-3 py-2 border border-[#e5e4e7] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#703074]/30"
              />
              <textarea
                placeholder="Conteúdo"
                value={newTemplate.content}
                onChange={e => setNewTemplate({ ...newTemplate, content: e.target.value })}
                rows={5}
                className="w-full px-3 py-2 border border-[#e5e4e7] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#703074]/30 resize-none"
              />
              <button onClick={handleAddTemplate} className="w-full py-2 bg-[#703074] text-white rounded-lg text-sm font-medium">
                Criar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Items grid */}
      <div className="grid grid-cols-1 gap-4">
        {activeTab === 'hashtags' ? (
          items.map(hashtagSet => (
            <div key={hashtagSet.id} className="bg-white rounded-xl p-5 border border-[#e5e4e7]">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-[#1A1A2E]">{hashtagSet.name}</h3>
                <button
                  onClick={() => handleCopy(hashtagSet.tags.join(' '), `hs-${hashtagSet.id}`)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#703074] text-white rounded-lg text-xs font-medium hover:bg-[#5a255e]"
                >
                  {copiedId === `hs-${hashtagSet.id}` ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedId === `hs-${hashtagSet.id}` ? 'Copiado!' : 'Copiar'}
                </button>
              </div>
              <div className="flex flex-wrap gap-2">
                {hashtagSet.tags.map(tag => (
                  <span key={tag} className="px-2.5 py-1 bg-[#F8F7FC] border border-[#e5e4e7] rounded-lg text-xs text-[#6b6375]">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))
        ) : (
          items.map(item => (
            <div key={item.id} className="bg-white rounded-xl p-5 border border-[#e5e4e7]">
              <div className="flex items-start justify-between mb-3">
                <h3 className="font-semibold text-[#1A1A2E]">{activeTab === 'dms' ? item.title : item.name}</h3>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleCopy(item.content, item.id)}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-[#703074] text-white rounded-lg text-xs font-medium hover:bg-[#5a255e]"
                  >
                    {copiedId === item.id ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copiedId === item.id ? 'Copiado!' : 'Copiar'}
                  </button>
                  <button
                    onClick={() => handleEdit(item)}
                    className="p-1.5 text-[#9ca3af] hover:text-[#703074] rounded-lg hover:bg-[#F8F7FC]"
                  >
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {editingId === item.id ? (
                <div className="space-y-2">
                  <textarea
                    value={editContent}
                    onChange={e => setEditContent(e.target.value)}
                    rows={5}
                    className="w-full px-3 py-2 border border-[#e5e4e7] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#703074]/30 resize-none"
                  />
                  <div className="flex gap-2">
                    <button onClick={() => handleSave(item.id)} className="px-4 py-2 bg-[#703074] text-white rounded-lg text-sm">
                      Salvar
                    </button>
                    <button onClick={() => { setEditingId(null); setEditContent(''); }} className="px-4 py-2 border border-[#e5e4e7] text-[#6b6375] rounded-lg text-sm">
                      Cancelar
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-[#6b6375] whitespace-pre-wrap">{item.content}</p>
              )}
            </div>
          ))
        )}

        {items.length === 0 && (
          <div className="text-center py-12">
            <p className="text-[#9ca3af]">Nenhum item encontrado para "{searchQuery}"</p>
          </div>
        )}
      </div>
    </div>
  );
}
