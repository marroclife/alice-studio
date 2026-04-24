import React from 'react';
import { FileText, CheckCircle, Clock, TrendingUp, Calendar, ArrowRight } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Dashboard() {
  const { data } = useApp();

  const pendingPosts = data.posts.filter(p => p.status === 'pendente').length;
  const pendingStories = data.stories.filter(s => s.status === 'pendente').length;
  const inProgressTasks = data.kanban.filter(k => k.column === 'In Progress').length;
  const doneTasks = data.kanban.filter(k => k.column === 'Done').length;
  const totalTasks = data.kanban.length;
  const progress = totalTasks > 0 ? Math.round((doneTasks / totalTasks) * 100) : 0;

  const nextPost = data.posts.find(p => p.status === 'pendente');
  const recentActivities = [
    { icon: FileText, text: `Post "${nextPost?.title || '—'}" aguardando aprovação`, time: 'Hoje', color: '#F59E0B' },
    { icon: CheckCircle, text: `${doneTasks} tarefas concluídas`, time: 'Hoje', color: '#10B981' },
    { icon: Clock, text: `${inProgressTasks} tarefas em andamento`, time: 'Agora', color: '#703074' }
  ];

  const stats = [
    { label: 'Posts Pendentes', value: pendingPosts, icon: FileText, color: 'text-[#F59E0B]', bg: 'bg-[#F59E0B]/10' },
    { label: 'Stories Pendentes', value: pendingStories, icon: TrendingUp, color: 'text-[#703074]', bg: 'bg-[#703074]/10' },
    { label: 'Tarefas em Andamento', value: inProgressTasks, icon: Clock, color: 'text-[#D4AF37]', bg: 'bg-[#D4AF37]/10' },
    { label: 'Concluídas', value: doneTasks, icon: CheckCircle, color: 'text-[#10B981]', bg: 'bg-[#10B981]/10' }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Campaign banner */}
      <div className="bg-[#703074] rounded-2xl p-6 text-white relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2 py-1 bg-white/20 rounded-lg text-xs font-medium">Campanha Atual</span>
            <span className="text-xs text-white/70">Abril 2026</span>
          </div>
          <h2 className="text-2xl font-bold mb-1">Desafio 21 Dias de Emagrecimento</h2>
          <p className="text-white/80 text-sm mb-4">14 posts · 35 stories · 5 DMs automatizadas</p>
          <div className="flex items-center gap-4">
            <div className="flex-1 max-w-xs">
              <div className="flex justify-between text-xs mb-1">
                <span>Progresso</span>
                <span>{progress}%</span>
              </div>
              <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-[#D4AF37] rounded-full transition-all" style={{ width: `${progress}%` }} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-0 top-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map(({ label, value, icon: Icon, color, bg }) => (
          <div key={label} className="bg-white rounded-xl p-5 border border-[#e5e4e7]">
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 ${bg} rounded-lg flex items-center justify-center`}>
                <Icon className={`w-5 h-5 ${color}`} />
              </div>
              <span className="text-2xl font-bold text-[#1A1A2E]">{value}</span>
            </div>
            <p className="text-sm text-[#6b6375]">{label}</p>
          </div>
        ))}
      </div>

      {/* Bottom section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Next post */}
        <div className="bg-white rounded-xl p-6 border border-[#e5e4e7]">
          <h3 className="font-semibold text-[#1A1A2E] mb-4 flex items-center gap-2">
            <Calendar className="w-5 h-5 text-[#703074]" />
            Próximo Post
          </h3>
          {nextPost ? (
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 mt-2 rounded-full bg-[#F59E0B]" />
                <div>
                  <p className="font-medium text-[#1A1A2E]">{nextPost.title}</p>
                  <p className="text-sm text-[#6b6375]">{nextPost.day} · {nextPost.time}</p>
                </div>
              </div>
              <div className="p-3 bg-[#F8F7FC] rounded-lg text-sm text-[#6b6375]">
                <span className="font-medium text-[#1A1A2E]">Hook:</span> {nextPost.hook}
              </div>
              <button className="text-sm text-[#703074] font-medium flex items-center gap-1 hover:underline">
                Ver detalhes <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <p className="text-sm text-[#9ca3af]">Todos os posts foram publicados! 🎉</p>
          )}
        </div>

        {/* Recent activities */}
        <div className="bg-white rounded-xl p-6 border border-[#e5e4e7]">
          <h3 className="font-semibold text-[#1A1A2E] mb-4">Últimas Atividades</h3>
          <div className="space-y-4">
            {recentActivities.map((activity, i) => (
              <div key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${activity.color}15` }}>
                  <activity.icon className="w-4 h-4" style={{ color: activity.color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-[#1A1A2E] truncate">{activity.text}</p>
                  <p className="text-xs text-[#9ca3af]">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
