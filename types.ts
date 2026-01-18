
export enum Language {
  EN = 'English',
  AR = 'Arabic'
}

export enum Currency {
  USD = 'USD',
  EUR = 'EUR',
  EGP = 'EGP',
  SAR = 'SAR',
  GBP = 'GBP'
}

export enum DesignArchetype {
  HEALER = 'Healer',       
  GUARDIAN = 'Guardian',   
  SOCIAL = 'Social',       
  VISIONARY = 'Visionary'  
}

// Added BusinessType enum to fix import errors in constants.tsx and services/templateEngine.ts
export enum BusinessType {
  CLINIC = 'Clinic',
  LAW_FIRM = 'Law Firm',
  RESTAURANT = 'Restaurant',
  ENGINEERING = 'Engineering',
  TEACHER = 'Teacher',
  RETAIL = 'Retail',
  OTHER = 'Other'
}

// Added TemplateID type to fix import error in services/templateEngine.ts
export type TemplateID = 'corporate_pro' | 'elegant_minimal' | 'modern_clean';

export interface AnimationConfig {
  type: 'fade' | 'slide' | 'spring';
  duration: number;
  delay?: number;
}

export interface UIStyleConfig {
  borderRadius: string;
  shadow: string;
  animation: AnimationConfig;
  fontPrimary: string;
  fontSecondary: string;
}

export interface Palette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

export interface SiteContent {
  hero: { title: string; subtitle: string; cta: string; };
  about: { title: string; description: string; };
  services: {
    title: string;
    items: Array<{ name: string; description: string; icon: string; price?: string }>;
  };
  contact: { title: string; address: string; email: string; whatsapp: string; workingHours: string; };
}

export interface UserInput {
  businessName: string;
  businessType: string;
  servicesDescription: string;
  archetype: DesignArchetype;
  language: Language;
  currency: Currency;
  whatsappNumber: string;
}

export interface SiteData extends UserInput {
  id: string;
  palette: Palette;
  uiStyle: UIStyleConfig;
  generatedContent: SiteContent;
  status: 'draft' | 'live';
  createdAt: string;
}
