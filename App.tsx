
import React, { useState } from 'react';
import { 
  Globe, 
  ArrowRight, 
  CheckCircle2, 
  Layout, 
  Instagram, 
  Search, 
  Star, 
  Zap, 
  User, 
  Check, 
  Medal, 
  Share2 
} from 'lucide-react';
import { TRANSLATIONS, PRICING_MONTHLY_BRL, PRICING_MONTHLY_USD } from './constants';
import { Language } from './types';

// Componentes Auxiliares (fora do App para melhor performance e estabilidade)
const SectionHeader: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="text-center mb-12 animate-fade-in">
    <h2 className="text-2xl md:text-4xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gold/70">
      {title}
    </h2>
    <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto px-4">{subtitle}</p>
  </div>
);

const FeatureIcon: React.FC<{ icon: React.ReactNode }> = ({ icon }) => (
  <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full border border-gold/30 bg-gold/5 text-gold shrink-0">
    {icon}
  </div>
);

const ProjectVideo: React.FC<{ src: string }> = ({ src }) => (
  <div className="flex flex-col items-center gap-6 group">
    <div className="w-[280px] h-[580px] bg-white rounded-[45px] overflow-hidden shadow-2xl relative border-[8px] border-slate-900 group-hover:scale-[1.02] transition-transform duration-500 bg-black">
      <video autoPlay loop muted playsInline className="w-full h-full object-cover">
        <source src={src} type="video/mp4" />
      </video>
    </div>
  </div>
);

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('pt');
  const [currency, setCurrency] = useState<'BRL' | 'USD'>('BRL');
  const t = TRANSLATIONS[lang];

  // Fallback para evitar crash se a tradução falhar
  if (!t) return <div className="min-h-screen bg-[#0a0c10] flex items-center justify-center text-white">Loading...</div>;

  const pricingData = currency === 'BRL' ? PRICING_MONTHLY_BRL : PRICING_MONTHLY_USD;

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
          <div className="flex items-center gap-1 group cursor-pointer">
            <span className="text-xl md:text-2xl font-black text-white tracking-tighter">LSA<span className="text-gold">.</span></span>
            <span className="text-[10px] md:text-xs font-medium text-gray-400 mt-1 uppercase tracking-widest hidden sm:block">Performance Lab</span>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-[11px] font-bold uppercase tracking-wider text-gray-300">
            <a href="#servicos" className="hover:text-gold transition-colors">{t.nav.services}</a>
            <a href="#planos" className="hover:text-gold transition-colors">{t.nav.plans}</a>
            <a href="#projetos" className="hover:text-gold transition-colors">Projetos</a>
            <a href="#instagram" className="hover:text-gold transition-colors">{t.nav.instagram}</a>
          </div>

          <div className="flex items-center gap-3 md:gap-4">
            <div className="relative group">
              <button className="p-2 hover:bg-white/5 rounded-full transition-colors flex items-center gap-1">
                <Globe size={18} className="text-gold" />
                <span className="text-[10px] text-white font-bold hidden sm:inline uppercase">{lang}</span>
              </button>
              <div className="absolute right-0 mt-2 w-32 glass rounded-xl overflow-hidden hidden group-hover:block border border-white/10 shadow-2xl">
                <button onClick={() => setLang('pt')} className="w-full px-4 py-2 text-left text-xs hover:bg-white/10 text-white transition-colors">Português</button>
                <button onClick={() => setLang('en')} className="w-full px-4 py-2 text-left text-xs hover:bg-white/10 text-white transition-colors">English</button>
                <button onClick={() => setLang('es')} className="w-full px-4 py-2 text-left text-xs hover:bg-white/10 text-white transition-colors">Español</button>
              </div>
            </div>
            <button className="bg-gold hover:bg-yellow-500 text-slate-950 px-4 md:px-6 py-2 rounded-lg font-black text-[11px] md:text-xs transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(251,191,36,0.3)] uppercase">
              {t.nav.cta}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[80vh] md:h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover z-0">
          <source src="https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/lsa%20video%20ai.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950/90 z-10" />
        <div className="relative z-20 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-[1.1] animate-fade-in bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-400">
            {t.hero.title}
          </h1>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 font-medium opacity-90 animate-fade-in delay-200">
            {t.hero.subtitle}
          </p>
          <div className="animate-fade-in delay-500">
            <button className="bg-gold hover:bg-yellow-500 text-slate-950 px-8 py-4 rounded-xl font-black text-sm md:text-base transition-all transform hover:scale-105 flex items-center gap-3 mx-auto shadow-[0_0_30px_rgba(251,191,36,0.5)] uppercase tracking-wider">
              {t.hero.cta} <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Projetos Section */}
      <section id="projetos" className="py-20 bg-[#0a0c10]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title={t.projects.title} subtitle={t.projects.subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start justify-items-center">
            <ProjectVideo src="https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/site%20lavanderia.mp4" />
            <ProjectVideo src="https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/site%20patel.mp4" />
            <ProjectVideo src="https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/site%20siao%20barber.mp4" />
          </div>
        </div>
      </section>

      {/* Lab Showcase Section */}
      <section className="py-10 bg-[#0a0c10] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/grok-video-b07b3f8c-68f8-49c0-bf15-87645e6c3248.mp4",
              "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/grok%20site.mp4",
              "https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/grok%20lsa%201.mp4"
            ].map((vSrc, idx) => (
              <div key={idx} className="relative aspect-video rounded-3xl overflow-hidden glass border-white/5 group">
                <video autoPlay loop muted playsInline className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700">
                  <source src={vSrc} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Estrutura Digital Section */}
      <section id="servicos" className="py-24 bg-[#0a0c10]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title={t.digitalStructure.title} subtitle={t.digitalStructure.subtitle} />
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-10">
              {t.digitalStructure.items.map((item, idx) => {
                const icons = [
                  <Medal size={24} />,
                  <Zap size={24} />,
                  <Share2 size={24} />,
                  <Star size={24} />,
                  <Zap size={24} />
                ];
                return (
                  <div key={idx} className="flex gap-6 items-start group">
                    <FeatureIcon icon={icons[idx] || <Check size={24} />} />
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{item.title}</h3>
                      <p className="text-gray-400 leading-relaxed text-[15px] max-w-md">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-md bg-[#161c27] p-10 md:p-14 rounded-2xl border border-gold/30 shadow-[0_0_60px_rgba(251,191,36,0.05)] relative overflow-hidden group">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gold/5 blur-[100px] pointer-events-none" />
                <div className="relative z-10 text-center">
                  <div className="flex justify-center mb-8">
                    <Zap size={50} className="text-gold" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-1 uppercase tracking-tight">{t.digitalStructure.card.title}</h3>
                  <p className="text-gray-500 text-[10px] font-black uppercase tracking-[0.3em] mb-12">{t.digitalStructure.card.subtitle}</p>
                  <div className="mb-12">
                    <span className="text-gray-500 line-through text-lg block mb-2">{t.digitalStructure.card.originalPrice}</span>
                    <span className="text-6xl md:text-7xl font-black text-gold">{t.digitalStructure.card.currentPrice}</span>
                    <p className="text-gray-500 text-xs font-bold uppercase mt-2 tracking-widest">{t.digitalStructure.card.footnote}</p>
                  </div>
                  <button className="w-full bg-gold hover:bg-yellow-500 text-slate-950 py-5 rounded-xl font-black text-sm uppercase transition-all transform hover:scale-[1.03] shadow-[0_20px_40px_rgba(251,191,36,0.25)]">
                    {t.digitalStructure.card.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-24 bg-[#0a0c10]">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader title={t.pricing.title} subtitle={t.pricing.subtitle} />
          
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={`text-sm font-bold ${currency === 'BRL' ? 'text-white' : 'text-gray-500'}`}>BRL (R$)</span>
            <button onClick={() => setCurrency(currency === 'BRL' ? 'USD' : 'BRL')} className="w-12 h-6 bg-slate-800 rounded-full relative p-1 transition-colors">
              <div className={`w-4 h-4 bg-gray-400 rounded-full absolute top-1 transition-all duration-300 ${currency === 'USD' ? 'left-7' : 'left-1'}`} />
            </button>
            <span className={`text-sm font-bold ${currency === 'USD' ? 'text-white' : 'text-gray-500'}`}>USD ($)</span>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {pricingData.map((plan) => (
              <div key={plan.id} className={`relative bg-[#161c27] p-8 rounded-2xl flex flex-col border transition-all duration-500 ${plan.popular ? 'border-gold shadow-[0_0_40px_rgba(251,191,36,0.15)] scale-[1.02] z-10' : 'border-white/5 hover:border-white/10'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-gold px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest whitespace-nowrap">MAIS POPULAR</div>
                )}
                <div className="text-center mb-10">
                  <h3 className={`text-2xl font-black mb-4 ${plan.popular ? 'text-gold' : 'text-white'}`}>{plan.name}</h3>
                  <p className="text-gray-400 text-sm h-12 leading-tight">{plan.subtitle}</p>
                </div>
                <div className="text-center mb-10">
                  <span className="text-gray-500 line-through text-sm block mb-1">{plan.originalPrice}</span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl md:text-5xl font-black text-white">{plan.currentPrice}</span>
                  </div>
                  <span className="text-gray-500 text-xs mt-1 block uppercase font-bold tracking-widest">{plan.period}</span>
                </div>
                <div className="space-y-6 mb-12 flex-grow">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="mt-1"><Check size={18} className="text-emerald-500" /></div>
                      <p className="text-gray-300 text-[13px] leading-relaxed">{feature}</p>
                    </div>
                  ))}
                </div>
                <button className={`w-full py-4 rounded-lg font-black text-sm uppercase transition-all transform hover:scale-[1.02] ${plan.popular ? 'bg-gold text-slate-950 shadow-[0_10px_20px_rgba(251,191,36,0.2)]' : 'bg-slate-900/50 text-white border border-white/5 hover:bg-slate-900'}`}>{plan.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-slate-950 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          <div className="w-full md:w-5/12 relative">
            <div className="aspect-square glass rounded-[40px] overflow-hidden border border-white/10 shadow-2xl">
              <img src="https://bvubljssahqtzzeboeew.supabase.co/storage/v1/object/public/our/WhatsApp%20Image%202026-02-10%20at%203.51.10%20PM.jpeg" alt="Samuel Fragoso" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-all duration-500 transform hover:scale-105" />
            </div>
            <div className="absolute -bottom-4 -right-4 glass p-4 rounded-2xl border border-gold/20 flex items-center gap-3">
              <Star className="text-gold" size={18} fill="#fbbf24" />
              <div>
                <p className="text-white font-black text-lg">6+ Anos</p>
                <p className="text-gray-500 text-[9px] uppercase font-bold tracking-widest">Experiência</p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-7/12">
            <span className="text-gold font-bold uppercase tracking-[0.2em] text-[10px] mb-3 block">{t.founder.title}</span>
            <h2 className="text-3xl md:text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-gray-500">{t.founder.name}</h2>
            <p className="text-base md:text-lg text-gray-400 leading-relaxed mb-8">{t.founder.description}</p>
            <div className="flex flex-wrap gap-3">
              <div className="glass px-4 py-2 rounded-full text-[10px] font-bold text-blue-400 border border-blue-500/10 uppercase">Fullstack Dev</div>
              <div className="glass px-4 py-2 rounded-full text-[10px] font-bold text-gold border border-gold/10 uppercase">Growth Specialist</div>
              <div className="glass px-4 py-2 rounded-full text-[10px] font-bold text-emerald-400 border border-emerald-500/10 uppercase">ROI Expert</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center gap-8 mb-12">
            <div>
              <span className="text-2xl font-black text-white tracking-tighter">LSA<span className="text-gold">.</span></span>
              <p className="text-gray-600 mt-2 text-xs uppercase tracking-widest font-bold">Performance Lab</p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="p-2.5 glass rounded-full hover:bg-gold hover:text-slate-950 transition-all text-gray-500"><Instagram size={20} /></a>
              <a href="#" className="p-2.5 glass rounded-full hover:bg-gold hover:text-slate-950 transition-all text-gray-500"><Globe size={20} /></a>
              <a href="#" className="p-2.5 glass rounded-full hover:bg-gold hover:text-slate-950 transition-all text-gray-500"><User size={20} /></a>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5">
            <p className="text-gray-700 text-[10px] font-medium uppercase tracking-widest">© 2024 LSA Performance Lab. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
