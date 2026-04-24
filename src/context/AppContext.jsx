import React, { createContext, useContext, useState, useCallback } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { getInitialState } from '../data/initialData';

const AppContext = createContext(null);

export function AppProvider({ children }) {
  const [auth, setAuth] = useLocalStorage('alice_auth', null);
  const [data, setData] = useLocalStorage('alice_data', getInitialState());

  const isAuthenticated = !!auth;

  const login = useCallback((password) => {
    if (password === data.settings.password) {
      setAuth({ timestamp: Date.now() });
      return true;
    }
    return false;
  }, [data.settings.password, setAuth]);

  const logout = useCallback(() => {
    setAuth(null);
  }, [setAuth]);

  const updatePassword = useCallback((newPassword) => {
    setData(prev => ({
      ...prev,
      settings: { ...prev.settings, password: newPassword }
    }));
  }, [setData]);

  const updateKanban = useCallback((kanban) => {
    setData(prev => ({ ...prev, kanban }));
  }, [setData]);

  const updatePostStatus = useCallback((postId, status) => {
    setData(prev => ({
      ...prev,
      posts: prev.posts.map(p => p.id === postId ? { ...p, status } : p)
    }));
  }, [setData]);

  const updateStoryStatus = useCallback((storyId, status) => {
    setData(prev => ({
      ...prev,
      stories: prev.stories.map(s => s.id === storyId ? { ...s, status } : s)
    }));
  }, [setData]);

  const updateTemplate = useCallback((templateId, updates) => {
    setData(prev => ({
      ...prev,
      templates: prev.templates.map(t => t.id === templateId ? { ...t, ...updates } : t)
    }));
  }, [setData]);

  const addTemplate = useCallback((template) => {
    setData(prev => ({
      ...prev,
      templates: [...prev.templates, { ...template, id: `t${Date.now()}` }]
    }));
  }, [setData]);

  const value = {
    auth,
    isAuthenticated,
    data,
    login,
    logout,
    updatePassword,
    updateKanban,
    updatePostStatus,
    updateStoryStatus,
    updateTemplate,
    addTemplate
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
}
