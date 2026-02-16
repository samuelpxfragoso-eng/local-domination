
export type Language = 'pt' | 'en' | 'es';

export interface PricingPlan {
  id: string;
  name: string;
  subtitle: string;
  originalPrice: string;
  currentPrice: string;
  period: string;
  popular?: boolean;
  features: string[];
  cta: string;
}

export interface Content {
  nav: {
    services: string;
    plans: string;
    guaranteed: string;
    instagram: string;
    cta: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  projects: {
    title: string;
    subtitle: string;
  };
  digitalStructure: {
    title: string;
    subtitle: string;
    items: {
      title: string;
      description: string;
    }[];
    card: {
      title: string;
      subtitle: string;
      originalPrice: string;
      currentPrice: string;
      footnote: string;
      cta: string;
    };
  };
  pricing: {
    title: string;
    subtitle: string;
    monthlyTitle: string;
    siteTitle: string;
    siteSubtitle: string;
    originalPrice: string;
    currentPrice: string;
    cta: string;
  };
  founder: {
    title: string;
    name: string;
    description: string;
  };
}
