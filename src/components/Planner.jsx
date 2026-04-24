import React, { useState } from 'react';
import { FileText, TrendingUp, Calendar, Clock, Filter, X, Image, MessageSquare } from 'lucide-react';
import { useApp } from '../context/AppContext';

const daysOfWeek = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

const statusColors = {
  rascunho: 'bg-[#9ca3af]/15 text-[#6b6375] border-[#9ca3af]/30',
  pendente: 'bg-[#F59E0B]/15 text-[#F59E0B] border-[#F59E0B]/30',
  aprovado: 'bg-[#10B981]/15 text-[#10B981] border-[#10B981]/30',
  publicado: 'bg-[#3B82F6]/15 text-[#3B82F6] border-[#3B82F6]/30'
};

const typeIcons = {
  feed: FileText,
  reels: TrendingUp,
  carousel: Image,
  story: TrendingUp,
  dm: MessageSquare
};

export default function Planner() {
  const { data, updatePostStatus, updateStoryStatus } = useApp();
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState(null);

  const allItems = [
    ...data.posts.map(p => ({ ...p, itemType: 'post' })),
    ...data.stories.map(s => ({ ...s, itemType: 'story', type: 'story' }))
  ];

  const filteredItems = filter === 'all' ? allItems : allItems.filter(i => i.status === filter);

  const getItemsForDay = (dayLabel) => {
    return filteredItems.filter(i => {
      const itemDay = i.day?.split(' (')[0];
      return itemDay === dayLabel.substring(0, 3);
    }).sort((a, b) => (a.time || '00:00').localeCompare(b.time || '00:00'));
  };

  const handleStatusChange = (item, newStatus) => {
    if (item.itemType === 'post') {
      updatePostStatus(item.id, newStatus);
    } else {
      updateStoryStatus(item.id, newStatus);
    }
    setSelectedItem(null);
  };

  return (
    <div className="animate-fade-in">
      {/* Filter bar */}
      <div className="flex items-center gap-3 mb-6 flex-wrap">
        <div className="flex items-center gap-2">
          <Filter className="w-4 h-4 text-[#6b6375]" />
          <span className="text-sm text-[#6b6375]">Filtrar:</span>
        </div>
        {[
          { key: 'all', label: 'Todos' },
          { key: 'rascunho', label: 'Rascunho' },
          { key: 'pendente', label: 'Pendente' },
          { key: 'aprovado', label: 'Aprovado' },
          { key: 'publicado', label: 'Publicado' }
        ].map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filter === key
                ? 'bg-[#703074] text-white'
                : 'bg-white text-[#6b6375] border border-[#e5e4e7] hover:bg-[#F8F7FC]'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Weekly calendar grid */}
      <div className="grid grid-cols-7 gap-3 min-w-[800px]">
        {daysOfWeek.map(day => (
          <div key={day} className="bg-white rounded-xl border border-[#e5e4e7] overflow-hidden">
            <div className="p-3 border-b border-[#e5e4e7] bg-[#F8F7FC]">
              <p className="text-xs font-semibold text-[#1A1A2E] text-center">{day}</p>
            </div>
            <div className="p-2 space-y-2 min-h-[200px]">
              {getItemsForDay(day).map(item => {
                const Icon = typeIcons[item.type] || FileText;
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className={`w-full text-left p-2.5 rounded-lg border text-xs transition-all hover:shadow-sm ${statusColors[item.status] || statusColors.rascunho}`}
                  >
                    <div className="flex items-center gap-1.5 mb-1">
                      <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                      <span className="font-medium truncate">{item.title}</span>
                    </div>
                    <div className="flex items-center gap-1 text-[10px] opacity-75">
                      <Clock className="w-3 h-3" />
                      {item.time || '—'}
                    </div>
                  </button>
                );
              })}
              {getItemsForDay(day).length === 0 && (
                <p className="text-center text-[10px] text-[#9ca3af] py-4">Nenhum item</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Detail modal */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg mx-4 shadow-xl max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded text-xs font-medium capitalize ${statusColors[selectedItem.status] || statusColors.rascunho}`}>
                  {selectedItem.status}
                </span>
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-[#703074]/10 text-[#703074] capitalize">
                  {selectedItem.type}
                </span>
              </div>
              <button onClick={() => setSelectedItem(null)} className="text-[#9ca3af] hover:text-[#1A1A2E]">
                <X className="w-5 h-5" />
              </button>
            </div>

            <h3 className="text-lg font-semibold text-[#1A1A2E] mb-2">{selectedItem.title}</h3>
            <p className="text-sm text-[#6b6375] mb-4">{selectedItem.day} · {selectedItem.time}</p>

            {selectedItem.hook && (
              <div className="mb-4">
                <p className="text-xs font-medium text-[#1A1A2E] mb-1">Hook:</p>
                <p className="text-sm text-[#6b6375] bg-[#F8F7FC] p-3 rounded-lg">{selectedItem.hook}</p>
              </div>
            )}

            {selectedItem.cta && (
              <div className="mb-4">
                <p className="text-xs font-medium text-[#1A1A2E] mb-1">CTA:</p>
                <p className="text-sm text-[#6b6375] bg-[#F8F7FC] p-3 rounded-lg">{selectedItem.cta}</p>
              </div>
            )}

            {selectedItem.hashtags && (
              <div className="mb-4">
                <p className="text-xs font-medium text-[#1A1A2E] mb-1">Hashtags:</p>
                <p className="text-sm text-[#6b6375] bg-[#F8F7FC] p-3 rounded-lg">{selectedItem.hashtags}</p>
              </div>
            )}

            {selectedItem.visual && (
              <div className="mb-4">
                <p className="text-xs font-medium text-[#1A1A2E] mb-1">Visual:</p>
                <p className="text-sm text-[#6b6375] bg-[#F8F7FC] p-3 rounded-lg">{selectedItem.visual}</p>
              </div>
            )}

            <div className="mb-4">
              <p className="text-xs font-medium text-[#1A1A2E] mb-2">Alterar Status:</p>
              <div className="flex gap-2">
                {['rascunho', 'pendente', 'aprovado', 'publicado'].map(s => (
                  <button
                    key={s}
                    onClick={() => handleStatusChange(selectedItem, s)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium capitalize transition-colors ${
                      selectedItem.status === s
                        ? 'bg-[#703074] text-white'
                        : 'bg-[#F8F7FC] text-[#6b6375] border border-[#e5e4e7] hover:bg-[#703074]/10'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
