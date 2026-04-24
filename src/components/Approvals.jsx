import React, { useState } from 'react';
import { CheckCircle, XCircle, MessageSquare, Clock, FileText, Eye } from 'lucide-react';
import { useApp } from '../context/AppContext';

export default function Approvals() {
  const { data, updatePostStatus } = useApp();
  const [selectedPost, setSelectedPost] = useState(null);
  const [comment, setComment] = useState('');
  const [activeTab, setActiveTab] = useState('pending');

  const pendingPosts = data.posts.filter(p => p.status === 'pendente' || p.status === 'rascunho');
  const approvedPosts = data.posts.filter(p => p.status === 'aprovado' || p.status === 'publicado');

  const handleApprove = (postId) => {
    updatePostStatus(postId, 'aprovado');
    setSelectedPost(null);
    setComment('');
  };

  const handleRequestChanges = (postId) => {
    // In a real app, this would save the comment
    updatePostStatus(postId, 'rascunho');
    setSelectedPost(null);
    setComment('');
  };

  const currentPosts = activeTab === 'pending' ? pendingPosts : approvedPosts;

  return (
    <div className="animate-fade-in">
      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('pending')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'pending'
              ? 'bg-[#703074] text-white'
              : 'bg-white text-[#6b6375] border border-[#e5e4e7] hover:bg-[#F8F7FC]'
          }`}
        >
          Pendentes ({pendingPosts.length})
        </button>
        <button
          onClick={() => setActiveTab('approved')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
            activeTab === 'approved'
              ? 'bg-[#703074] text-white'
              : 'bg-white text-[#6b6375] border border-[#e5e4e7] hover:bg-[#F8F7FC]'
          }`}
        >
          Aprovados ({approvedPosts.length})
        </button>
      </div>

      {/* Posts list */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {currentPosts.map(post => (
          <div
            key={post.id}
            className="bg-white rounded-xl p-5 border border-[#e5e4e7] hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#703074]/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-4 h-4 text-[#703074]" />
                </div>
                <div>
                  <p className="text-sm font-medium text-[#1A1A2E]">{post.title}</p>
                  <p className="text-xs text-[#9ca3af]">{post.day} · {post.time}</p>
                </div>
              </div>
              <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                post.status === 'pendente'
                  ? 'bg-[#F59E0B]/10 text-[#F59E0B]'
                  : post.status === 'rascunho'
                  ? 'bg-[#9ca3af]/10 text-[#6b6375]'
                  : 'bg-[#10B981]/10 text-[#10B981]'
              }`}>
                {post.status === 'pendente' ? 'Pendente' : post.status === 'rascunho' ? 'Rascunho' : 'Aprovado'}
              </span>
            </div>

            <div className="space-y-3 mb-4">
              <div className="p-3 bg-[#F8F7FC] rounded-lg">
                <p className="text-xs font-medium text-[#1A1A2E] mb-1">Hook:</p>
                <p className="text-sm text-[#6b6375]">{post.hook}</p>
              </div>
              <div className="p-3 bg-[#F8F7FC] rounded-lg">
                <p className="text-xs font-medium text-[#1A1A2E] mb-1">CTA:</p>
                <p className="text-sm text-[#6b6375]">{post.cta}</p>
              </div>
            </div>

            {activeTab === 'pending' && selectedPost?.id === post.id ? (
              <div className="space-y-3">
                <textarea
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  placeholder="Adicione um comentário (opcional)..."
                  rows={2}
                  className="w-full px-3 py-2 border border-[#e5e4e7] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#703074]/30 resize-none"
                />
                <div className="flex gap-2">
                  <button
                    onClick={() => handleApprove(post.id)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#10B981] text-white rounded-lg text-sm font-medium hover:bg-[#059669]"
                  >
                    <CheckCircle className="w-4 h-4" /> Aprovar
                  </button>
                  <button
                    onClick={() => handleRequestChanges(post.id)}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#F59E0B] text-white rounded-lg text-sm font-medium hover:bg-[#D97706]"
                  >
                    <XCircle className="w-4 h-4" /> Pedir Alteração
                  </button>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="px-4 py-2 border border-[#e5e4e7] text-[#6b6375] rounded-lg text-sm hover:bg-[#F8F7FC]"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            ) : activeTab === 'pending' ? (
              <div className="flex gap-2">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#703074] text-white rounded-lg text-sm font-medium hover:bg-[#5a255e]"
                >
                  <Eye className="w-4 h-4" /> Revisar
                </button>
              </div>
            ) : null}
          </div>
        ))}

        {currentPosts.length === 0 && (
          <div className="col-span-full text-center py-12">
            <CheckCircle className="w-12 h-12 text-[#10B981] mx-auto mb-3" />
            <p className="text-[#6b6375]">
              {activeTab === 'pending' ? 'Nenhum post pendente! 🎉' : 'Nenhum post aprovado ainda.'}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
