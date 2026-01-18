
import React from 'react';
import { BusinessType } from './types';

export const COLOR_PRESETS = [
  { name: 'Professional Blue', value: '#1E40AF' },
  { name: 'Elegant Gold', value: '#B45309' },
  { name: 'Health Green', value: '#065F46' },
  { name: 'Modern Purple', value: '#6D28D9' },
  { name: 'Passionate Red', value: '#B91C1C' },
  { name: 'Clean Slate', value: '#334155' }
];

export const INDUSTRY_ICONS: Record<string, string> = {
  [BusinessType.CLINIC]: 'fa-stethoscope',
  [BusinessType.LAW_FIRM]: 'fa-scale-balanced',
  [BusinessType.RESTAURANT]: 'fa-utensils',
  [BusinessType.ENGINEERING]: 'fa-drafting-compass',
  [BusinessType.TEACHER]: 'fa-chalkboard-user',
  [BusinessType.RETAIL]: 'fa-shop',
  [BusinessType.OTHER]: 'fa-briefcase'
};
