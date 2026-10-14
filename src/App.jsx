
import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  ChevronRight,
  Instagram,
  Menu,
  MessageCircle,
  MousePointerClick,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  X,
} from "lucide-react";

const WHATSAPP = "https://wa.me/5583999378365";
const INSTAGRAM = "https://www.instagram.com/matheussbl/";

const services = [
  {
    icon: Target,
    number: "01",
    title: "Gestão de Meta Ads",
    description:
      "Campanhas estratégicas no Instagram e Facebook para alcançar pessoas com potencial de se tornarem clientes.",
  },
  {
    icon: Search,
    number: "02",
    title: "Gestão de Google Ads",
    description:
      "Anúncios para apresentar sua empresa a pessoas que estão pesquisando por produtos ou serviços como os seus.",
  },
  {
    icon: MousePointerClick,
    number: "03",
    title: "Captação de Leads",
    description:
      "Estratégias para gerar oportunidades de contato e aproximar sua empresa de novos clientes.",
  },
  {
    icon: BarChart3,
    number: "04",
    title: "Análise e Otimização",
    description:
      "Acompanhamento de métricas e ajustes contínuos para melhorar o desempenho das campanhas.",
  },
];

const benefits = [
  "Estratégias adaptadas ao seu negócio",
  "Segmentação de público e objetivos",
  "Acompanhamento das principais métricas",
  "Otimização contínua dos anúncios",
];

function WhatsAppButton({ children, className = "", message }) {
  const url = message
    ? `${WHATSAPP}?text=${encodeURIComponent(message)}`
    : WHATSAPP;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn btn-primary ${className}`}
    >
      {children}
      <ArrowUpRight size={19} />
    </a>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="site">
      <header className="header">
        <div className="container header-inner">
          <a href="#inicio" className="brand" aria-label="MB Digital - Início">
            <span className="brand-mark">MB<span>.</span></span>
            <span className="brand-name">DIGITAL</span>
          </a>

          <nav className={`nav ${menuOpen ? "nav-open" : ""}`}>
            <a href="#inicio" onClick={() => setMenuOpen(false)}>
              Início
            </a>
            <a href="#servicos" onClick={() => setMenuOpen(false)}>
              Serviços
            </a>
            <a href="#sobre" onClick={() => setMenuOpen(false)}>
              Sobre
            </a>
            <a href="#contato" onClick={() => setMenuOpen(false)}>
              Contato
            </a>
          </nav>

          <a
            href={`${WHATSAPP}?text=${encodeURIComponent(
              "Olá! Gostaria de saber mais sobre a gestão de tráfego pago da MB Digital."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="header-cta"
          >
            Fale com um especialista <ArrowUpRight size={17} />
          </a>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </header>

      <main>
        <section className="hero" id="inicio">
          <div className="hero-glow" />
          <div className="container hero-grid">
            <div className="hero-content">
              <div className="eyebrow">
                <span className="status-dot" />
                MARKETING DIGITAL ORIENTADO POR DADOS
              </div>

              <h1>
                Seu negócio merece
                <br />
                <span>mais visibilidade.</span>
                <br />
                E mais oportunidades.
              </h1>

              <p className="hero-description">
                Transformamos anúncios em oportunidades de negócio.
                Gestão estratégica de tráfego pago para empresas que
                querem alcançar o público certo e crescer com inteligência.
              </p>

              <div className="hero-actions">
                <WhatsAppButton message="Olá! Quero conhecer as soluções de tráfego pago da MB Digital.">
                  Quero atrair mais clientes
                </WhatsAppButton>

                <a href="#servicos" className="btn btn-secondary">
                  Conhecer serviços <ChevronRight size={18} />
                </a>
              </div>

              <div className="hero-proof">
                <span className="proof-icon"><ShieldCheck size={20} /></span>
                <span>Estratégia, análise e acompanhamento em cada campanha.</span>
              </div>
            </div>

            <div className="hero-visual" aria-label="Painel ilustrativo de marketing digital">
              <div className="visual-orbit orbit-one" />
              <div className="visual-orbit orbit-two" />

              <div className="dashboard">
                <div className="dashboard-top">
                  <div className="dashboard-dots">
                    <i /><i /><i />
                  </div>
                  <span>VISÃO ESTRATÉGICA</span>
                  <BarChart3 size={17} />
                </div>

                <div className="dashboard-body">
                  <div className="dashboard-label">MARKETING DE PERFORMANCE</div>
                  <div className="dashboard-heading">
                    Decisões baseadas <br /> em dados<span>.</span>
                  </div>
                  <p>
                    Planejar. Analisar. Otimizar.
                  </p>

                  <div className="chart-visual">
                    <div className="chart-grid">
                      <span /><span /><span /><span />
                    </div>
                    <svg
                      viewBox="0 0 420 160"
                      preserveAspectRatio="none"
                      aria-hidden="true"
                    >
                      <defs>
                        <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="#38e58b" stopOpacity=".24" />
                          <stop offset="100%" stopColor="#38e58b" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M0 140 C45 130 65 112 100 120 S165 90 205 94 S275 48 315 65 S370 20 420 14 L420 160 L0 160 Z"
                        fill="url(#chartFill)"
                      />
                      <path
                        d="M0 140 C45 130 65 112 100 120 S165 90 205 94 S275 48 315 65 S370 20 420 14"
                        fill="none"
                        stroke="#38e58b"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <circle cx="420" cy="14" r="6" fill="#38e58b" />
                    </svg>
                  </div>

                  <div className="dashboard-tags">
                    <span><Target size={14} /> Estratégia</span>
                    <span><TrendingUp size={14} /> Performance</span>
                    <span><BarChart3 size={14} /> Dados</span>
                  </div>
                </div>
              </div>

              <div className="floating-card">
                <span className="floating-icon"><TrendingUp size={21} /></span>
                <div>
                  <strong>Otimização contínua</strong>
                  <small>Foco em oportunidades reais</small>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="hero-bottom">
              <span>ESTRATÉGIA</span>
              <i />
              <span>CRIATIVIDADE</span>
              <i />
              <span>PERFORMANCE</span>
              <i />
              <span>RESULTADOS MENSURÁVEIS</span>
            </div>
          </div>
        </section>

        <section className="services section" id="servicos">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">O QUE FAZEMOS</span>
                <h2>
                  Soluções para sua empresa
                  <br />
                  <span>ir mais longe.</span>
                </h2>
              </div>
              <p>
                Cada negócio tem seus desafios. Desenvolvemos estratégias
                de mídia paga alinhadas aos seus objetivos.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article className="service-card" key={service.number}>
                    <div className="service-top">
                      <div className="service-icon"><Icon size={27} /></div>
                      <span className="service-number">{service.number}</span>
                    </div>

                    <h3>{service.title}</h3>
                    <p>{service.description}</p>

                    <a
                      href={`${WHATSAPP}?text=${encodeURIComponent(
                        `Olá! Gostaria de saber mais sobre ${service.title}.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="service-link"
                    >
                      Saiba mais <ArrowUpRight size={17} />
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="about section" id="sobre">
          <div className="container about-grid">
            <div className="about-graphic">
              <div className="about-graphic-inner">
                <span className="graphic-small">MB DIGITAL</span>
                <Target className="graphic-target" size={105} strokeWidth={1} />
                <strong>
                  Não é apenas
                  <br />
                  anunciar.
                  <br />
                  <span>É ter estratégia.</span>
                </strong>
                <span className="graphic-footer">TRÁFEGO PAGO • MARKETING DIGITAL</span>
              </div>
            </div>

            <div className="about-content">
              <span className="section-kicker">POR QUE A MB DIGITAL?</span>

              <h2>
                Mais que anúncios.
                <br />
                <span>Uma estratégia para crescer.</span>
              </h2>

              <p>
                A MB Digital é especializada em gestão de tráfego pago,
                com atuação online e foco em ajudar empresas a conquistar
                visibilidade e gerar novas oportunidades comerciais.
              </p>

              <p>
                Nosso trabalho une planejamento, execução e análise para
                que cada campanha tenha um objetivo claro.
              </p>

              <div className="benefits">
                {benefits.map((benefit) => (
                  <div className="benefit" key={benefit}>
                    <CheckCircle2 size={20} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <WhatsAppButton message="Olá! Gostaria de conversar sobre uma estratégia de anúncios para minha empresa.">
                Conversar sobre meu negócio
              </WhatsAppButton>
            </div>
          </div>
        </section>

        <section className="process section">
          <div className="container">
            <div className="process-heading">
              <span className="section-kicker">NOSSA METODOLOGIA</span>
              <h2>
                Da estratégia à <span>otimização.</span>
              </h2>
              <p>
                Um processo organizado para orientar cada decisão.
              </p>
            </div>

            <div className="process-grid">
              {[
                ["01", "Diagnóstico", "Entendemos o negócio, o público e os objetivos."],
                ["02", "Planejamento", "Definimos campanhas, canais e direcionamento estratégico."],
                ["03", "Execução", "Colocamos as campanhas no ar e acompanhamos os dados."],
                ["04", "Otimização", "Analisamos o desempenho e identificamos melhorias."],
              ].map(([number, title, description]) => (
                <div className="process-step" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section" id="contato">
          <div className="container">
            <div className="cta-box">
              <div className="cta-light" />
              <div className="cta-content">
                <span className="section-kicker">VAMOS CONVERSAR?</span>
                <h2>
                  Seus próximos clientes
                  <br />
                  podem estar <span>online.</span>
                </h2>
                <p>
                  Descubra como uma estratégia de tráfego pago pode
                  ajudar sua empresa a alcançar novas oportunidades.
                </p>

                <WhatsAppButton message="Olá, MB Digital! Gostaria de solicitar uma análise para minha empresa.">
                  Solicitar uma conversa
                </WhatsAppButton>
              </div>

              <div className="cta-decoration">
                <div className="cta-ring">
                  <ArrowRight size={90} strokeWidth={1.1} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-brand">
              <a href="#inicio" className="brand">
                <span className="brand-mark">MB<span>.</span></span>
                <span className="brand-name">DIGITAL</span>
              </a>
              <p>
                Gestão de tráfego pago e estratégias digitais
                para empresas que querem crescer.
              </p>
            </div>

            <div className="footer-links">
              <strong>Navegação</strong>
              <a href="#inicio">Início</a>
              <a href="#servicos">Serviços</a>
              <a href="#sobre">Sobre</a>
              <a href="#contato">Contato</a>
            </div>

            <div className="footer-links">
              <strong>Contato</strong>
              <a href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                <MessageCircle size={16} /> WhatsApp
              </a>
              <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
                <Instagram size={16} /> Instagram
              </a>
              <span>Atendimento online</span>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} MB Digital. Todos os direitos reservados.</span>
            <span>Estratégia que conecta negócios a oportunidades.</span>
          </div>
        </div>
      </footer>

      <a
        href={`${WHATSAPP}?text=${encodeURIComponent(
          "Olá! Vim pelo site da MB Digital e gostaria de saber mais."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Falar com a MB Digital no WhatsApp"
      >
        <MessageCircle size={26} />
      </a>
    </div>
  );
}
