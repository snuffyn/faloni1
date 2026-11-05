import { useState } from "react";
import {
  ArrowUpRight,
  BadgeCheck,
  CarFront,
  Check,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Gauge,
  Instagram,
  MapPin,
  Menu,
  MessageCircle,
  PhoneCall,
  Route,
  ShieldCheck,
  Sparkles,
  Star,
  UserRoundCheck,
  Wrench,
  X,
} from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5562985649517?text=Ol%C3%A1%2C%20vim%20pelo%20site%20da%20Faloni%20Auto%20Center%20e%20gostaria%20de%20solicitar%20um%20or%C3%A7amento.";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Faloni+Auto+Center+Master+Car%2C+Senador+Canedo%2C+GO";

const services = [
  {
    icon: Gauge,
    number: "01",
    title: "Diagnóstico eletrônico",
    description: "Leitura precisa para encontrar a causa real do problema e evitar troca desnecessária de peças.",
  },
  {
    icon: Wrench,
    number: "02",
    title: "Revisão preventiva",
    description: "A manutenção certa na hora certa para rodar com tranquilidade e preservar o seu carro.",
  },
  {
    icon: CarFront,
    number: "03",
    title: "Freios e suspensão",
    description: "Segurança para você e sua família com inspeção detalhada, peças de qualidade e mão de obra técnica.",
  },
  {
    icon: Sparkles,
    number: "04",
    title: "Ar-condicionado",
    description: "Conforto térmico, higienização e eficiência para encarar o calor de Goiás sem preocupação.",
  },
];

const testimonials = [
  {
    quote:
      "Conheço a Faloni há muitos anos e recomendo. Serviços de excelência, honestidade no diagnóstico e preços justos.",
    name: "Wagner Guerra",
    meta: "Cliente há muitos anos · Google",
  },
  {
    quote:
      "Atendimento excelente, muita clareza sobre o serviço e os valores. Resolveram a situação do meu carro muito rápido.",
    name: "Márcia Oliveira",
    meta: "Cliente Faloni · Google",
  },
  {
    quote:
      "Super atenciosos e honestos. Fui muito bem atendida todas as vezes que precisei dos serviços.",
    name: "Iara Tab S6",
    meta: "Cliente Faloni · Google",
  },
];

function Logo() {
  return (
    <a className="logo" href="#top" aria-label="Faloni Auto Center - início">
      <span className="logo-mark"><span>F</span></span>
      <span className="logo-copy">
        <strong>FALONI</strong>
        <small>AUTO CENTER</small>
      </span>
    </a>
  );
}

function SectionLabel({ children }: { children: string }) {
  return <p className="section-label"><span />{children}</p>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="site-shell">
      <header className={`site-header ${menuOpen ? "menu-is-open" : ""}`}>
        <div className="header-inner">
          <Logo />
          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#sobre">A Faloni</a>
            <a href="#servicos">Serviços</a>
            <a href="#processo">Como funciona</a>
            <a href="#contato">Contato</a>
          </nav>
          <a className="header-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
            <MessageCircle size={16} />
            <span>Falar com a equipe</span>
            <ArrowUpRight size={15} />
          </a>
          <button className="menu-toggle" onClick={() => setMenuOpen((open) => !open)} aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        <nav className="mobile-nav" aria-label="Navegação mobile">
          <a href="#sobre" onClick={closeMenu}>A Faloni <ChevronRight size={16} /></a>
          <a href="#servicos" onClick={closeMenu}>Serviços <ChevronRight size={16} /></a>
          <a href="#processo" onClick={closeMenu}>Como funciona <ChevronRight size={16} /></a>
          <a href="#contato" onClick={closeMenu}>Contato <ChevronRight size={16} /></a>
          <a className="mobile-nav-cta" href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={closeMenu}>Solicitar orçamento <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-dot" /> Oficina mecânica em Senador Canedo</div>
            <h1>Seu carro merece mais que manutenção<span className="orange-dot">.</span> <em>Merece cuidado.</em></h1>
            <p className="hero-lead">Diagnóstico honesto, serviço bem-feito e conversa sem enrolação. Na Faloni, você entende o que seu carro precisa antes de decidir.</p>
            <div className="hero-actions">
              <a className="button button-primary" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
                <MessageCircle size={18} /> Solicitar orçamento
              </a>
              <a className="button button-ghost" href={MAPS_URL} target="_blank" rel="noreferrer">
                <Route size={17} /> Ver rota <ArrowUpRight size={15} />
              </a>
            </div>
            <div className="hero-proof">
              <div className="rating-block">
                <div className="stars" aria-label="4,6 de 5 estrelas"><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /><Star size={14} fill="currentColor" /></div>
                <strong>4,6 <span>/ 5</span></strong>
                <small>98 avaliações no Google</small>
              </div>
              <div className="proof-divider" />
              <div className="open-now"><span className="status-dot" /> <span><strong>Atendimento próximo</strong><small>Seg a sex · 08:00 às 18:00</small></span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-frame">
              <img src="./assets/workshop.jpg" alt="Interior moderno de oficina automotiva com carro em manutenção" />
              <div className="visual-shade" />
              <div className="visual-topline"><span>MASTER CAR</span><span>GO / 62</span></div>
              <div className="visual-bottomline"><span className="visual-index">01</span><span className="visual-caption">Precisão em cada detalhe</span></div>
            </div>
            <div className="visual-card">
              <BadgeCheck size={21} />
              <span><strong>Preço justo.</strong><small>Sem surpresa na entrega.</small></span>
            </div>
            <div className="visual-crosshair" />
          </div>
        </div>
        <div className="hero-scroll"><span>Deslize para conhecer</span><span className="scroll-line" /></div>
      </section>

      <div className="ticker" aria-label="Valores da Faloni">
        <div className="ticker-track">
          <span>DIAGNÓSTICO CLARO</span><i>✦</i><span>PREÇO JUSTO</span><i>✦</i><span>EXCELÊNCIA TÉCNICA</span><i>✦</i><span>ATENDIMENTO HUMANO</span><i>✦</i><span>DIAGNÓSTICO CLARO</span><i>✦</i><span>PREÇO JUSTO</span><i>✦</i>
        </div>
      </div>

      <section className="section about-section" id="sobre">
        <div className="about-intro">
          <SectionLabel>Por que a Faloni</SectionLabel>
          <h2>Experiência para explicar.<br /><span>Transparência para cuidar.</span></h2>
          <p>Você não precisa entender de mecânica para ser bem atendido. A gente traduz o problema, mostra o caminho e só executa o que foi combinado.</p>
          <a className="text-link" href={WHATSAPP_URL} target="_blank" rel="noreferrer">Conheça nosso jeito de trabalhar <ArrowUpRight size={16} /></a>
        </div>
        <div className="about-panel">
          <div className="panel-scanline" />
          <div className="panel-header"><span>FALONI / SOBRE NÓS</span><span>01—04</span></div>
          <div className="panel-metrics">
            <div><strong>4,6</strong><span>nota média</span></div>
            <div><strong>98</strong><span>avaliações</span></div>
            <div><strong>GO</strong><span>Senador Canedo</span></div>
          </div>
          <div className="panel-quote">"Honestidade é parte da ferramenta."</div>
          <div className="panel-footer"><span /> Desde o primeiro diagnóstico</div>
        </div>
      </section>

      <section className="section services-section" id="servicos">
        <div className="section-heading-row">
          <div><SectionLabel>O que fazemos</SectionLabel><h2>Serviço certo para<br /><span>cada quilômetro.</span></h2></div>
          <p>Da revisão do dia a dia ao diagnóstico mais complexo, nossa equipe cuida do seu carro com método, atenção e responsabilidade.</p>
        </div>
        <div className="services-grid">
          {services.map(({ icon: Icon, number, title, description }) => (
            <article className="service-card" key={number}>
              <div className="service-card-top"><span>{number}</span><Icon size={25} strokeWidth={1.7} /></div>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label={`Solicitar ${title}`}><ArrowUpRight size={17} /></a>
            </article>
          ))}
        </div>
        <div className="service-note"><ShieldCheck size={20} /><span>Não encontrou o que procura? <a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Fale com a equipe</a> — a gente orienta você.</span></div>
      </section>

      <section className="section process-section" id="processo">
        <div className="process-heading"><SectionLabel>Sem mistério</SectionLabel><h2>Do primeiro contato<br /><span>à chave na mão.</span></h2></div>
        <div className="process-list">
          <div className="process-step"><div className="step-number">01</div><div className="step-icon"><MessageCircle size={22} /></div><h3>Você chama</h3><p>Conte o que está acontecendo pelo WhatsApp ou passe na oficina.</p></div>
          <div className="process-connector" />
          <div className="process-step"><div className="step-number">02</div><div className="step-icon"><Wrench size={22} /></div><h3>A gente investiga</h3><p>Fazemos o diagnóstico e explicamos o que realmente precisa ser feito.</p></div>
          <div className="process-connector" />
          <div className="process-step"><div className="step-number">03</div><div className="step-icon"><Check size={22} /></div><h3>Você aprova</h3><p>Serviço combinado, execução cuidadosa e seu carro pronto para rodar.</p></div>
        </div>
      </section>

      <section className="section testimonials-section" id="avaliacoes">
        <div className="testimonial-header"><div><SectionLabel>Quem confia, recomenda</SectionLabel><h2>Histórias reais.<br /><span>Confiança real.</span></h2></div><div className="google-score"><div className="google-score-number">4,6</div><div><div className="stars"><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /><Star size={13} fill="currentColor" /></div><span>98 avaliações no Google</span></div></div></div>
        <div className="testimonials-grid">
          {testimonials.map((testimonial) => <article className="testimonial-card" key={testimonial.name}><div className="quote-mark">“</div><p>{testimonial.quote}</p><div className="testimonial-person"><div className="avatar">{testimonial.name.charAt(0)}</div><div><strong>{testimonial.name}</strong><span>{testimonial.meta}</span></div><BadgeCheck size={18} /></div></article>)}
        </div>
      </section>

      <section className="contact-section" id="contato">
        <div className="contact-inner">
          <div className="contact-main"><SectionLabel>Vamos conversar</SectionLabel><h2>Seu próximo destino<br /><em>começa aqui.</em></h2><p>Se o seu carro está pedindo atenção, não deixe para depois. A equipe Faloni está pronta para ajudar você.</p><a className="button button-dark" href={WHATSAPP_URL} target="_blank" rel="noreferrer"><MessageCircle size={18} /> Chamar no WhatsApp <ArrowUpRight size={15} /></a></div>
          <div className="contact-details">
            <div className="detail-item"><div className="detail-icon"><MapPin size={19} /></div><div><span>Onde estamos</span><strong>Av. Dom Emanuel, 3303<br />Quadra 01 Lote 03E · Alvorada<br />Senador Canedo — GO</strong><a href={MAPS_URL} target="_blank" rel="noreferrer">Abrir no mapa <ArrowUpRight size={14} /></a></div></div>
            <div className="detail-item"><div className="detail-icon"><Clock3 size={19} /></div><div><span>Horário de atendimento</span><strong>Segunda a sexta<br />08:00 às 18:00</strong></div></div>
            <div className="detail-item"><div className="detail-icon"><PhoneCall size={19} /></div><div><span>Fale com a gente</span><strong>(62) 98564-9517</strong><a href={WHATSAPP_URL} target="_blank" rel="noreferrer">Enviar mensagem <ArrowUpRight size={14} /></a></div></div>
            <div className="detail-item"><div className="detail-icon"><Instagram size={19} /></div><div><span>Acompanhe</span><strong>Instagram da Faloni</strong><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Ver Instagram <ArrowUpRight size={14} /></a></div></div>
          </div>
        </div>
      </section>

      <footer className="site-footer"><div className="footer-inner"><Logo /><div className="footer-copy">© {new Date().getFullYear()} Faloni Auto Center — Master Car<br /><span>Feito para quem leva o caminho a sério.</span></div><a className="footer-back" href="#top">Voltar ao topo <ArrowUpRight size={15} /></a></div></footer>
      <a className="floating-whatsapp" href={WHATSAPP_URL} target="_blank" rel="noreferrer" aria-label="Falar com a Faloni pelo WhatsApp"><MessageCircle size={23} /></a>
    </main>
  );
}
