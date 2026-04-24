import React, { useState } from 'react';
import { Plus, X, Calendar, Tag, AlertCircle } from 'lucide-react';
import { useApp } from '../context/AppContext';

const columns = ['Backlog', 'To Do', 'In Progress', 'Review', 'Done'];
const columnColors = {
  'Backlog': 'bg-[#9ca3af]/10 text-[#6b6375]',
  'To Do': 'bg-[#703074]/10 text-[#703074]',
  'In Progress': 'bg-[#D4AF37]/10 text-[#D4AF37]',
  'Review': 'bg-[#F59E0B]/10 text-[#F59E0B]',
  'Done': 'bg-[#10B981]/10 text-[#10B981]'
};

const priorityColors = {
  high: 'bg-[#EF4444]/10 text-[#EF4444]',
  medium: 'bg-[#F59E0B]/10 text-[#F59E0B]',
  low: 'bg-[#10B981]/10 text-[#10B981]'
};

export default function KanbanBoard() {
  const { data, updateKanban } = useApp();
  const [draggingId, setDraggingId] = useState(null);
  const [showNewTask, setShowNewTask] = useState(false);
  const [newTask, setNewTask] = useState({ title: '', description: '', priority: 'medium', deadline: '' });

  const handleDragStart = (id) => setDraggingId(id);

  const handleDrop = (column) => {
    if (!draggingId) return;
    const updated = data.kanban.map(k => k.id === draggingId ? { ...k, column } : k);
    updateKanban(updated);
    setDraggingId(null);
  };

  const addTask = () => {
    if (!newTask.title.trim()) return;
    const task = {
      id: `k${Date.now()}`,
      column: 'Backlog',
      ...newTask,
      tags: []
    };
    updateKanban([...data.kanban, task]);
    setNewTask({ title: '', description: '', priority: 'medium', deadline: '' });
    setShowNewTask(false);
  };

  const deleteTask = (id) => {
    updateKanban(data.kanban.filter(k => k.id !== id));
  };

  return (
    <div className="animate-fade-in">
      <div className="flex items-center justify-between mb-6">
        <div />
        <button
          onClick={() => setShowNewTask(true)}
          className="flex items-center gap-2 px-4 py-2 bg-[#703074] text-white rounded-lg text-sm font-medium hover:bg-[#5a255e] transition-colors"
        >
          <Plus className="w-4 h-4" /> Nova Tarefa
        </button>
      </div>

      {showNewTask && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-full max-w-md mx-4 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-[#1A1A2E]">Nova Tarefa</h3>
              <button onClick={() => setShowNewTask(false)} className="text-[#9ca3af] hover:text-[#1A1A2E]">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3">
              <input
                type="text"
                placeholder="Título"
                value={newTask.title}
                onChange={e => setNewTask({ ...newTask, title: e.target.value })}
                className="w-full px-3 py-2 border border-[#e5e4e7] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#703074]/30"
              />
              <textarea
                placeholder="Descrição"
                value={newTask.description}
                onChange={e => setNewTask({ ...newTask, description: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-[#e5e4e7] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#703074]/30 resize-none"
              />
              <div className="flex gap-3">
                <select
                  value={newTask.priority}
                  onChange={e => setNewTask({ ...newTask, priority: e.target.value })}
                  className="px-3 py-2 border border-[#e5e4e7] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#703074]/30"
                >
                  <option value="low">Baixa</option>
                  <option value="medium">Média</option>
                  <option value="high">Alta</option>
                </select>
                <input
                  type="date"
                  value={newTask.deadline}
                  onChange={e => setNewTask({ ...newTask, deadline: e.target.value })}
                  className="flex-1 px-3 py-2 border border-[#e5e4e7] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#703074]/30"
                />
              </div>
              <button
                onClick={addTask}
                className="w-full py-2 bg-[#703074] text-white rounded-lg text-sm font-medium hover:bg-[#5a255e]"
              >
                Criar Tarefa
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="flex gap-4 overflow-x-auto pb-4">
        {columns.map(col => (
          <div
            key={col}
            className="flex-shrink-0 w-72"
            onDragOver={e => e.preventDefault()}
            onDrop={() => handleDrop(col)}
          >
            <div className="flex items-center justify-between mb-3">
              <span className={`px-2.5 py-1 rounded-lg text-xs font-medium ${columnColors[col]}`}>
                {col}
              </span>
              <span className="text-xs text-[#9ca3af]">{data.kanban.filter(k => k.column === col).length}</span>
            </div>
            <div className="space-y-3">
              {data.kanban.filter(k => k.column === col).map(task => (
                <div
                  key={task.id}
                  draggable
                  onDragStart={() => handleDragStart(task.id)}
                  className={`bg-white rounded-xl p-4 border border-[#e5e4e7] cursor-move hover:shadow-md transition-shadow ${draggingId === task.id ? 'opacity-50' : ''}`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-sm font-medium text-[#1A1A2E] leading-tight">{task.title}</h4>
                    <button
                      onClick={() => deleteTask(task.id)}
                      className="text-[#9ca3af] hover:text-[#EF4444] opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  {task.description && (
                    <p className="text-xs text-[#6b6375] mb-3 line-clamp-2">{task.description}</p>
                  )}
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${priorityColors[task.priority] || priorityColors.medium}`}>
                      {task.priority === 'high' ? 'Alta' : task.priority === 'medium' ? 'Média' : 'Baixa'}
                    </span>
                    {task.deadline && (
                      <span className="flex items-center gap-1 text-xs text-[#9ca3af]">
                        <Calendar className="w-3 h-3" />
                        {new Date(task.deadline).toLocaleDateString('pt-BR')}
                      </span>
                    )}
                    {task.tags?.map(tag => (
                      <span key={tag} className="flex items-center gap-1 text-xs text-[#6b6375]">
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
