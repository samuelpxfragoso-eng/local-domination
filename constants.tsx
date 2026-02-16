
import { Content, Language, PricingPlan } from './types';

export const TRANSLATIONS: Record<Language, Content> = {
  pt: {
    nav: {
      services: 'Serviços',
      plans: 'Planos',
      guaranteed: 'G-Guerra EUA',
      instagram: 'Instagram',
      cta: 'Consultoria Gratuita'
    },
    hero: {
      title: 'Domine o Google, Conquiste o Instagram e Transforme Cliques em Clientes Reais.',
      subtitle: 'Especialistas em Google Guaranteed (LSA) e estruturas digitais de alto fluxo para negócios nos EUA e Brasil.',
      cta: 'Quero um Diagnóstico Gratuito'
    },
    projects: {
      title: 'Projetos de Clientes',
      subtitle: 'Veja alguns dos sites que criamos para nossos clientes.'
    },
    digitalStructure: {
      title: 'Estrutura Digital de Alta Conversão',
      subtitle: 'Criação e entrega única de um ecossistema focado em credibilidade e vendas.',
      items: [
        {
          title: 'Design de Autoridade',
          description: 'Site desenvolvido com estética premium para gerar credibilidade imediata no primeiro clique.'
        },
        {
          title: 'Fluxo Contínuo de Clientes',
          description: 'Arquitetura pensada para atrair e reter o fluxo de visitantes, transformando-os em clientes reais.'
        },
        {
          title: 'Hub de Interação',
          description: 'Botões estratégicos para levar o cliente diretamente para suas Redes Sociais e WhatsApp.'
        },
        {
          title: 'Prova Social Integrada',
          description: 'Espaço dedicado para avaliações e depoimentos, aumentando a segurança e a confiança na marca.'
        },
        {
          title: 'Performance Lab Ready',
          description: 'Estrutura otimizada para carregar em alta velocidade em qualquer dispositivo.'
        }
      ],
      card: {
        title: 'Pacote Único',
        subtitle: 'SINGLE DELIVERY',
        originalPrice: 'R$ 1.200,00',
        currentPrice: 'R$ 750,00',
        footnote: 'Pagamento único',
        cta: 'Quero Minha Estrutura por R$ 750,00'
      }
    },
    pricing: {
      title: 'Planos de Aceleração Digital',
      subtitle: 'Escolha o plano ideal para decolar seu negócio e dominar seu mercado.',
      monthlyTitle: 'Planos de Aceleração Mensal',
      siteTitle: 'Pacote Único: Criação de Site',
      siteSubtitle: 'Pagamento único para sua estrutura digital de alta performance.',
      originalPrice: 'R$ 1.200,00',
      currentPrice: 'R$ 750,00',
      cta: 'Contratar Agora'
    },
    founder: {
      title: 'O Especialista',
      name: 'Samuel Fragoso (Samuel Shepherd)',
      description: 'Programador e estrategista digital com 6 anos de experiência em vendas e tecnologia. Especialista em verificação avançada e escala de negócios locais.'
    }
  },
  en: {
    nav: {
      services: 'Services',
      plans: 'Plans',
      guaranteed: 'LSA USA',
      instagram: 'Instagram',
      cta: 'Free Consulting'
    },
    hero: {
      title: 'Master Google, Conquer Instagram, and Turn Clicks into Real Customers.',
      subtitle: 'Google Guaranteed (LSA) and high-flow digital structure specialists for businesses in the USA and Brazil.',
      cta: 'Get a Free Diagnosis'
    },
    projects: {
      title: 'Client Projects',
      subtitle: 'See some of the websites we have created for our clients.'
    },
    digitalStructure: {
      title: 'High Conversion Digital Structure',
      subtitle: 'Single creation and delivery of an ecosystem focused on credibility and sales.',
      items: [
        {
          title: 'Authority Design',
          description: 'Website developed with premium aesthetics to generate immediate credibility at the first click.'
        },
        {
          title: 'Continuous Customer Flow',
          description: 'Architecture designed to attract and retain visitor flow, transforming them into real customers.'
        },
        {
          title: 'Interaction Hub',
          description: 'Strategic buttons to lead the client directly to your Social Networks and WhatsApp.'
        },
        {
          title: 'Integrated Social Proof',
          description: 'Dedicated space for reviews and testimonials, increasing brand security and trust.'
        },
        {
          title: 'Performance Lab Ready',
          description: 'Optimized structure to load at high speed on any device.'
        }
      ],
      card: {
        title: 'Single Package',
        subtitle: 'SINGLE DELIVERY',
        originalPrice: '$217.00',
        currentPrice: '$137.00',
        footnote: 'One-time payment',
        cta: 'I Want My Structure for $137.00'
      }
    },
    pricing: {
      title: 'Digital Acceleration Plans',
      subtitle: 'Choose the ideal plan to launch your business and dominate your market.',
      monthlyTitle: 'Monthly Acceleration Plans',
      siteTitle: 'One-Time Package: Website Creation',
      siteSubtitle: 'One-time payment for your high-performance digital structure.',
      originalPrice: '$217.00',
      currentPrice: '$137.00',
      cta: 'Order Now'
    },
    founder: {
      title: 'The Specialist',
      name: 'Samuel Fragoso (Samuel Shepherd)',
      description: 'Programmer and digital strategist with 6 years of experience in sales and technology. Specialist in advanced verification and local business scaling.'
    }
  },
  es: {
    nav: {
      services: 'Servicios',
      plans: 'Planes',
      guaranteed: 'LSA EE.UU.',
      instagram: 'Instagram',
      cta: 'Consultoría Gratuita'
    },
    hero: {
      title: 'Domine Google, Conquiste Instagram y Transforme Clics en Clientes Reales.',
      subtitle: 'Especialistas en Google Guaranteed (LSA) y estructuras digitales de alto flujo para negocios en EE.UU. y Brasil.',
      cta: 'Quiero un Diagnóstico Gratis'
    },
    projects: {
      title: 'Proyectos de Clientes',
      subtitle: 'Vea algunos de los sitios que creamos para nuestros clientes.'
    },
    digitalStructure: {
      title: 'Estructura Digital de Alta Conversión',
      subtitle: 'Creación y entrega única de un ecosistema enfocado en la credibilidad y las ventas.',
      items: [
        {
          title: 'Diseño de Autoridad',
          description: 'Sitio desarrollado con estética premium para generar credibilidad inmediata al primer clic.'
        },
        {
          title: 'Flujo Continuo de Clientes',
          description: 'Arquitectura diseñada para atraer y retener el flujo de visitantes, transformándolos en clientes reales.'
        },
        {
          title: 'Hub de Interacción',
          description: 'Botones estratégicos para llevar al cliente directamente a sus Redes Sociales y WhatsApp.'
        },
        {
          title: 'Prueba Social Integrada',
          description: 'Espacio dedicado a reseñas y testimonios, aumentando la seguridad y la confianza en la marca.'
        },
        {
          title: 'Performance Lab Ready',
          description: 'Estructura optimizada para cargar a alta velocidad en cualquier dispositivo.'
        }
      ],
      card: {
        title: 'Paquete Único',
        subtitle: 'SINGLE DELIVERY',
        originalPrice: '199,00€',
        currentPrice: '127,00€',
        footnote: 'Pago único',
        cta: 'Quiero Mi Estructura por 127,00€'
      }
    },
    pricing: {
      title: 'Planes de Aceleración Digital',
      subtitle: 'Elija el plan ideal para despegar su negocio y dominar su mercado.',
      monthlyTitle: 'Planes de Aceleración Mensual',
      siteTitle: 'Paquete Único: Creación de Sitio Web',
      siteSubtitle: 'Pago único para su estructura digital de alto rendimiento.',
      originalPrice: '199,00€',
      currentPrice: '127,00€',
      cta: 'Contratar Agora'
    },
    founder: {
      title: 'El Especialista',
      name: 'Samuel Fragoso (Samuel Shepherd)',
      description: 'Programador y estratega digital con 6 años de experiencia en ventas y tecnología. Especialista en verificación avanzada y escalado de negocios locales.'
    }
  }
};

export const PRICING_MONTHLY_BRL: PricingPlan[] = [
  {
    id: '1',
    name: 'Pacote Essential (Básico)',
    subtitle: 'Focado em presença digital e Google Meu Negócio.',
    originalPrice: 'R$ 800,00',
    currentPrice: 'R$ 400,00',
    period: '/ mês',
    features: [
      'Google Meu Negócio: Otimização estratégica do perfil para buscas locais.',
      'Gestão de Reputação: Monitoramento e resposta profissional de avaliações.',
      'Landing Page: Site de alta conversão com botões de ação direta (WhatsApp/Maps).',
      'Instagram: Design de autoridade com 2 postagens semanais no feed.'
    ],
    cta: 'Construir Minha Presença'
  },
  {
    id: '2',
    name: 'Pacote Gold (Ouro)',
    subtitle: 'O plano ideal para quem quer dominar o ranking local e converter seguidores.',
    originalPrice: 'R$ 1.500,00',
    currentPrice: 'R$ 1.100,00',
    period: '/ mês',
    popular: true,
    features: [
      'Tudo do Pacote Essential.',
      'Verificação Avançada (G-Guerra): Suporte completo para verificação oficial e blindagem de perfil (Brasil e EUA).',
      'Google Local Pack: Estratégia ativa para posicionar seu negócio no TOP 3 do mapa.',
      'Instagram Authority: 3 posts no feed + 5 sequências de Stories semanais.',
      'Site Multilíngue: Landing Page com seletor de idiomas (PT/EN/ES).'
    ],
    cta: 'Dominar o Ranking'
  },
  {
    id: '3',
    name: 'Pacote Elite Diamond (Premium)',
    subtitle: 'Gestão 360º para liderança total de mercado e escala internacional.',
    originalPrice: 'R$ 2.000,00',
    currentPrice: 'R$ 1.600,00',
    period: '/ mês',
    features: [
      'Tudo do Pacote Gold.',
      'Dominação Global: Gestão completa de anúncios e presença em Português e Inglês.',
      'Google Ads: Gestão de campanhas patrocinadas no Google Maps para tráfego imediato.',
      'Instagram Full: 5 postagens semanais, incluindo Reels e gestão de tráfego para novos seguidores.',
      'Relatórios Avançados: Dashboard mensal de ROI e conversão de clientes.'
    ],
    cta: 'Liderança Total'
  }
];

export const PRICING_MONTHLY_USD: PricingPlan[] = [
  {
    id: '1',
    name: 'Essential Package (Basic)',
    subtitle: 'Focused on digital presence and Google Business Profile.',
    originalPrice: '$160',
    currentPrice: '$80',
    period: '/ mo',
    features: [
      'Google Business: Strategic profile optimization for local searches.',
      'Reputation Management: Monitoring and professional response to reviews.',
      'Landing Page: High-conversion site with direct action buttons (WhatsApp/Maps).',
      'Instagram: Authority design with 2 weekly feed posts.'
    ],
    cta: 'Build My Presence'
  },
  {
    id: '2',
    name: 'Gold Package (Gold)',
    subtitle: 'The ideal plan for those who want to dominate the local ranking and convert followers.',
    originalPrice: '$300',
    currentPrice: '$220',
    period: '/ mo',
    popular: true,
    features: [
      'Everything in the Essential Package.',
      'Advanced Verification (LSA): Full support for official verification and profile shielding (Brazil and USA).',
      'Google Local Pack: Active strategy to position your business in the TOP 3 of the map.',
      'Instagram Authority: 3 feed posts + 5 sequences of Stories weekly.',
      'Multilingual Site: Landing Page with language selector (PT/EN/ES).'
    ],
    cta: 'Dominate the Ranking'
  },
  {
    id: '3',
    name: 'Elite Diamond Package (Premium)',
    subtitle: '360º management for total market leadership and international scale.',
    originalPrice: '$400',
    currentPrice: '$320',
    period: '/ mo',
    features: [
      'Everything in the Gold Package.',
      'Global Domination: Full management of ads and presence in Portuguese and English.',
      'Google Ads: Management of sponsored campaigns on Google Maps for immediate traffic.',
      'Instagram Full: 5 weekly posts, including Reels and traffic management for new followers.',
      'Advanced Reports: Monthly ROI dashboard and customer conversion.'
    ],
    cta: 'Total Leadership'
  }
];
