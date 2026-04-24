import React, { useState } from 'react';
import {
  CheckCircle,
  XCircle,
  MessageSquare,
  Clock,
  FileText,
  Eye,
  Film,
  Image,
  Layers,
  Music,
  Type,
  Camera,
  Palette,
  Hash,
  ChevronDown,
  ChevronUp,
  X,
  MonitorPlay,
  ScrollText
} from 'lucide-react';
import { useApp } from '../context/AppContext';

function FormatBadge({ formato }) {
  const configs = {
    reels: {
      icon: Film,
      label: 'REELS',
      bg: 'bg-[#703074]/10',
      text: 'text-[#703074]',
      border: 'border-[#703074]/20'
    },
    carrossel: {
      icon: Layers,
      label: 'CARROSSEL',
      bg: 'bg-[#D4AF37]/10',
      text: 'text-[#D4AF37]',
      border: 'border-[#D4AF37]/20'
    },
    feed: {
      icon: Image,
      label: 'FEED',
      bg: 'bg-[#10B981]/10',
      text: 'text-[#10B981]',
      border: 'border-[#10B981]/20'
    }
  };

  const config = configs[formato] || configs.feed;
  const Icon = config.icon;

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${config.bg} ${config.text} ${config.border}`}>
      <Icon className="w-3.5 h-3.5" />
      {config.label}
    </span>
  );
}

function ReelsPreview({ roteiro }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="space-y-3">
      {/* Header Info */}
      <div className="flex items-center gap-2 text-sm">
        <MonitorPlay className="w-4 h-4 text-[#703074]" />
        <span className="font-medium text-[#1A1A2E]">Duração:</span>
        <span className="text-[#6b6375]">{roteiro.duracao}</span>
      </div>

      <div className="flex items-center gap-2 text-sm">
        <Music className="w-4 h-4 text-[#703074]" />
        <span className="font-medium text-[#1A1A2E]">Áudio:</span>
        <span className="text-[#6b6375]">{roteiro.audio}</span>
      </div>

      <div className="flex items-start gap-2 text-sm">
        <Type className="w-4 h-4 text-[#703074] mt-0.5" />
        <div>
          <span className="font-medium text-[#1A1A2E]">Texto na tela:</span>
          <p className="text-[#6b6375] mt-0.5 bg-[#703074]/5 px-3 py-2 rounded-lg border border-[#703074]/10 font-medium">
            {roteiro.textoTela}
          </p>
        </div>
      </div>

      {/* Cenas Collapsible */}
      <div className="border border-[#e5e4e7] rounded-xl overflow-hidden">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between px-4 py-3 bg-[#F8F7FC] hover:bg-[#f0eff7] transition-colors"
        >
          <div className="flex items-center gap-2">
            <Film className="w-4 h-4 text-[#703074]" />
            <span className="text-sm font-semibold text-[#1A1A2E]">
              Cenas ({roteiro.cenas?.length || 0})
            </span>
          </div>
          {expanded ? (
            <ChevronUp className="w-4 h-4 text-[#6b6375]" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[#6b6375]" />
          )}
        </button>

        {expanded && (
          <div className="p-4 space-y-3">
            {roteiro.cenas?.map((cena, idx) => (
              <div
                key={idx}
                className="flex gap-3 p-3 bg-white rounded-lg border border-[#e5e4e7] hover:shadow-sm transition-shadow"
              >
                <div className="flex-shrink-0 w-8 h-8 bg-[#703074] text-white rounded-lg flex items-center justify-center text-sm font-bold">
                  {idx + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="text-xs font-medium text-[#D4AF37]">{cena.tempo}</span>
                    <span className="text-xs px-2 py-0.5 bg-[#F8F7FC] rounded text-[#6b6375]">
                      {cena.acao}
                    </span>
                  </div>
                  <p className="text-sm text-[#6b6375]">{cena.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CarrosselPreview({ roteiro }) {
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2 text-sm">
        <Layers className="w-4 h-4 text-[#D4AF37]" />
        <span className="font-medium text-[#1A1A2E]">Slides:</span>
        <span className="text-[#6b6375]">{roteiro.slides}</span>
      </div>

      {/* Slides Collapsible */}
      <div className="border border-[#e5e4e7] rounded-xl overflow-hidden">
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full flex items-center justify-between px-4 py-3 bg-[#F8F7FC] hover:bg-[#f0eff7] transition-colors"
        >
          <div className="flex items-center gap-2">
            <ScrollText className="w-4 h-4 text-[#D4AF37]" />
            <span className="text-sm font-semibold text-[#1A1A2E]">
              Conteúdo dos Slides
            </span>
          </div>
          {expanded ? (
            <ChevronUp className="w-4 h-4 text-[#6b6375]" />
          ) : (
            <ChevronDown className="w-4 h-4 text-[#6b6375]" />
          )}
        </button>

        {expanded && (
          <div className="p-4 space-y-3">
            {roteiro.conteudo?.map((slide, idx) => {
              const corClasses = {
                roxo: 'bg-[#703074]/10 border-[#703074]/20 text-[#703074]',
                dourado: 'bg-[#D4AF37]/10 border-[#D4AF37]/20 text-[#D4AF37]',
                verde: 'bg-[#10B981]/10 border-[#10B981]/20 text-[#10B981]',
                vermelho: 'bg-[#EF4444]/10 border-[#EF4444]/20 text-[#EF4444]',
                azul: 'bg-blue-50 border-blue-200 text-blue-600',
                rosa: 'bg-pink-50 border-pink-200 text-pink-600',
                amarelo: 'bg-yellow-50 border-yellow-200 text-yellow-600',
              };
              const corClass = corClasses[slide.cor] || corClasses.roxo;

              return (
                <div
                  key={idx}
                  className="flex gap-3 p-3 bg-white rounded-lg border border-[#e5e4e7] hover:shadow-sm transition-shadow"
                >
                  <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold ${corClass}`}>
                    {slide.numero}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#1A1A2E] mb-1.5">
                      {slide.texto}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-xs px-2 py-1 bg-[#F8F7FC] rounded text-[#6b6375] flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {slide.visual}
                      </span>
                      <span className={`text-xs px-2 py-1 rounded border flex items-center gap-1 ${corClass}`}>
                        <Palette className="w-3 h-3" />
                        {slide.cor}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

function FeedPreview({ roteiro }) {
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-3 p-4 bg-[#F8F7FC] rounded-xl border border-[#e5e4e7]">
        <Camera className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-xs font-semibold text-[#1A1A2E] uppercase tracking-wide mb-1">Foto</p>
          <p className="text-sm text-[#6b6375]">{roteiro.foto}</p>
        </div>
      </div>

      <div className="flex items-start gap-3 p-4 bg-[#F8F7FC] rounded-xl border border-[#e5e4e7]">
        <Palette className="w-5 h-5 text-[#10B981] mt-0.5 flex-shrink-0" />
        <div>
          <p className="text-xs font-semibold text-[#1A1A2E] uppercase tracking-wide mb-1">Estética</p>
          <p className="text-sm text-[#6b6375]">{roteiro.estetica}</p>
        </div>
      </div>

      <div className="p-4 bg-white rounded-xl border border-[#e5e4e7]">
        <div className="flex items-center gap-2 mb-2">
          <ScrollText className="w-4 h-4 text-[#703074]" />
          <p className="text-xs font-semibold text-[#703074] uppercase tracking-wide">Legenda</p>
        </div>
        <p className="text-sm text-[#1A1A2E] leading-relaxed whitespace-pre-line">
          {roteiro.legenda}
        </p>
      </div>

      <div className="p-4 bg-white rounded-xl border border-[#e5e4e7]">
        <div className="flex items-center gap-2 mb-2">
          <Hash className="w-4 h-4 text-[#D4AF37]" />
          <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wide">Hashtags</p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {roteiro.hashtags?.map((tag, idx) => (
            <span
              key={idx}
              className="text-xs px-2 py-1 bg-[#F8F7FC] text-[#703074] rounded border border-[#703074]/10 hover:bg-[#703074]/5 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReviewModal({ post, onClose, onApprove, onRequestChanges, comment, setComment }) {
  const formato = post.formato || 'feed';

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-8 sm:pt-16">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl max-h-[85vh] bg-white rounded-2xl shadow-2xl overflow-hidden animate-fade-in">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-[#e5e4e7] px-6 py-4">
          <div className="flex items-start justify-between">
            <div className="flex-1 min-w-0 mr-4">
              <div className="flex items-center gap-2 mb-1.5">
                <FormatBadge formato={formato} />
                <span className="text-xs text-[#9ca3af]">
                  {post.day} · {post.time}
                </span>
              </div>
              <h3 className="text-lg font-bold text-[#1A1A2E] truncate">
                {post.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-2 hover:bg-[#F8F7FC] rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-[#6b6375]" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 space-y-6">
          {/* Hook & CTA */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 bg-[#703074]/5 rounded-xl border border-[#703074]/10">
              <p className="text-xs font-semibold text-[#703074] uppercase tracking-wide mb-1.5">Hook</p>
              <p className="text-sm text-[#1A1A2E] font-medium">{post.hook}</p>
            </div>
            <div className="p-4 bg-[#D4AF37]/5 rounded-xl border border-[#D4AF37]/10">
              <p className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wide mb-1.5">CTA</p>
              <p className="text-sm text-[#1A1A2E] font-medium">{post.cta}</p>
            </div>
          </div>

          {/* Roteiro */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-[#703074]" />
              <h4 className="text-sm font-bold text-[#1A1A2E] uppercase tracking-wide">
                Roteiro Completo
              </h4>
            </div>

            {formato === 'reels' && post.roteiro && (
              <ReelsPreview roteiro={post.roteiro} />
            )}
            {formato === 'carrossel' && post.roteiro && (
              <CarrosselPreview roteiro={post.roteiro} />
            )}
            {formato === 'feed' && post.roteiro && (
              <FeedPreview roteiro={post.roteiro} />
            )}
            {!post.roteiro && (
              <p className="text-sm text-[#6b6375] italic">
                Nenhum roteiro detalhado disponível para este post.
              </p>
            )}
          </div>

          {/* Visual (if exists) */}
          {post.visual && (
            <div className="p-4 bg-[#F8F7FC] rounded-xl border border-[#e5e4e7]">
              <p className="text-xs font-semibold text-[#6b6375] uppercase tracking-wide mb-1.5">
                Referência Visual
              </p>
              <p className="text-sm text-[#6b6375]">{post.visual}</p>
            </div>
          )}
        </div>

        {/* Footer - Actions */}
        <div className="sticky bottom-0 z-10 bg-white border-t border-[#e5e4e7] px-6 py-4 space-y-3">
          <textarea
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder="Adicione um comentário (opcional)..."
            rows={2}
            className="w-full px-3 py-2 border border-[#e5e4e7] rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#703074]/30 resize-none bg-[#F8F7FC]"
          />
          <div className="flex gap-2">
            <button
              onClick={() => {
                onApprove(post.id);
                onClose();
              }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#10B981] text-white rounded-lg text-sm font-semibold hover:bg-[#059669] transition-colors"
            >
              <CheckCircle className="w-4 h-4" /> Aprovar
            </button>
            <button
              onClick={() => {
                onRequestChanges(post.id);
                onClose();
              }}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-[#F59E0B] text-white rounded-lg text-sm font-semibold hover:bg-[#D97706] transition-colors"
            >
              <XCircle className="w-4 h-4" /> Pedir Alteração
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2.5 border border-[#e5e4e7] text-[#6b6375] rounded-lg text-sm font-medium hover:bg-[#F8F7FC] transition-colors"
            >
              Fechar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Approvals() {
  const { data, updatePostStatus } = useApp();
  const [selectedPost, setSelectedPost] = useState(null);
  const [reviewPost, setReviewPost] = useState(null);
  const [comment, setComment] = useState('');
  const [activeTab, setActiveTab] = useState('pending');

  const pendingPosts = data.posts.filter(p => p.status === 'pendente' || p.status === 'rascunho');
  const approvedPosts = data.posts.filter(p => p.status === 'aprovado' || p.status === 'publicado');

  const handleApprove = (postId) => {
    updatePostStatus(postId, 'aprovado');
    setSelectedPost(null);
    setReviewPost(null);
    setComment('');
  };

  const handleRequestChanges = (postId) => {
    updatePostStatus(postId, 'rascunho');
    setSelectedPost(null);
    setReviewPost(null);
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
                <div className="min-w-0">
                  <p className="text-sm font-medium text-[#1A1A2E] truncate">{post.title}</p>
                  <p className="text-xs text-[#9ca3af]">{post.day} · {post.time}</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 flex-shrink-0">
                <FormatBadge formato={post.formato || 'feed'} />
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
                  onClick={() => setReviewPost(post)}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#703074] text-white rounded-lg text-sm font-medium hover:bg-[#5a255e]"
                >
                  <Eye className="w-4 h-4" /> Revisar
                </button>
                <button
                  onClick={() => setSelectedPost(post)}
                  className="flex items-center justify-center gap-2 px-4 py-2 border border-[#e5e4e7] text-[#6b6375] rounded-lg text-sm hover:bg-[#F8F7FC]"
                >
                  <CheckCircle className="w-4 h-4" />
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

      {/* Review Modal */}
      {reviewPost && (
        <ReviewModal
          post={reviewPost}
          onClose={() => setReviewPost(null)}
          onApprove={handleApprove}
          onRequestChanges={handleRequestChanges}
          comment={comment}
          setComment={setComment}
        />
      )}
    </div>
  );
}
