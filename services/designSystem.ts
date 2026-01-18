
import { DesignArchetype, Palette, UIStyleConfig } from '../types';

export const ARCHETYPE_PALETTES: Record<DesignArchetype, Palette> = {
  [DesignArchetype.HEALER]: {
    primary: '#10B981',   // Emerald 500
    secondary: '#064E3B', 
    accent: '#D1FAE5',    
    background: '#F8FAFC',
    text: '#0F172A'       
  },
  [DesignArchetype.GUARDIAN]: {
    primary: '#0F172A',   // Slate 900
    secondary: '#334155', 
    accent: '#94A3B8',    
    background: '#FFFFFF',
    text: '#0F172A'
  },
  [DesignArchetype.SOCIAL]: {
    primary: '#EA580C',   // Orange 600
    secondary: '#7C2D12', 
    accent: '#FFEDD5',    
    background: '#FFFBEB',
    text: '#451A03'
  },
  [DesignArchetype.VISIONARY]: {
    primary: '#6366F1',   // Indigo 500
    secondary: '#312E81', 
    accent: '#C7D2FE',    
    background: '#020617', // Midnight
    text: '#F8FAFC'
  }
};

export const ARCHETYPE_STYLES: Record<DesignArchetype, UIStyleConfig> = {
  [DesignArchetype.HEALER]: {
    borderRadius: '24px',
    shadow: '0 20px 25px -5px rgb(0 0 0 / 0.05)',
    animation: { type: 'fade', duration: 0.8 },
    fontPrimary: 'Inter',
    fontSecondary: 'Noto Sans Arabic'
  },
  [DesignArchetype.GUARDIAN]: {
    borderRadius: '4px',
    shadow: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    animation: { type: 'slide', duration: 0.3 },
    fontPrimary: 'Inter',
    fontSecondary: 'Noto Sans Arabic'
  },
  [DesignArchetype.SOCIAL]: {
    borderRadius: '40px',
    shadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
    animation: { type: 'slide', duration: 0.5 },
    fontPrimary: 'Plus Jakarta Sans',
    fontSecondary: 'Noto Sans Arabic'
  },
  [DesignArchetype.VISIONARY]: {
    borderRadius: '16px',
    shadow: '0 0 40px -10px rgba(99, 102, 241, 0.3)',
    animation: { type: 'spring', duration: 0.6 },
    fontPrimary: 'Inter',
    fontSecondary: 'Noto Sans Arabic'
  }
};

export const getArchetypeFromType = (type: string): DesignArchetype => {
  const t = type.toLowerCase();
  if (t.includes('clinic') || t.includes('doctor') || t.includes('teacher') || t.includes('health')) return DesignArchetype.HEALER;
  if (t.includes('law') || t.includes('engineer') || t.includes('bank') || t.includes('firm')) return DesignArchetype.GUARDIAN;
  if (t.includes('rest') || t.includes('shop') || t.includes('retail') || t.includes('cafe')) return DesignArchetype.SOCIAL;
  return DesignArchetype.VISIONARY;
};
