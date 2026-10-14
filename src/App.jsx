
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
  Cookie,
  MousePointerClick,
  PanelsTopLeft,
  Search,
  ShieldCheck,
  Target,
  TrendingUp,
  X,
} from "lucide-react";

import logo from "../unnamed.png";

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
  {
    icon: PanelsTopLeft,
    number: "05",
    title: "Criação de Landing Pages",
    description:
      "Desenvolvimento de páginas profissionais, responsivas e estratégicas para apresentar serviços, apoiar campanhas de tráfego pago e captar potenciais clientes.",
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

function BrandLogo() {
  return (
    <a href="#inicio" className="brand" aria-label="MB Digital - Início">
      <img
        src={logo}
        alt="Logomarca MB Digital"
        style={{
          width: "54px",
          height: "54px",
          objectFit: "contain",
          borderRadius: "50%",
          flexShrink: 0,
        }}
      />
      <span className="brand-name">MB DIGITAL</span>
    </a>
  );
}

const textButtonStyle = {
  border: 0,
  background: "transparent",
  color: "#38e58b",
  textDecoration: "underline",
  cursor: "pointer",
  padding: 0,
  font: "inherit",
  fontSize: 14,
};

export default function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [consent, setConsent] = React.useState(() =>
    typeof window !== "undefined" ? window.MBConsent?.get() ?? null : null
  );
  const [consentOpen, setConsentOpen] = React.useState(() =>
    typeof window !== "undefined" ? !window.MBConsent?.get() : false
  );
  const [privacyOpen, setPrivacyOpen] = React.useState(false);

  React.useEffect(() => {
    const openConsent = () => setConsentOpen(true);
    const syncConsent = () => {
      const choice = window.MBConsent?.get() ?? null;
      setConsent(choice);
      if (choice) setConsentOpen(false);
    };
    window.addEventListener("mbdigital:openconsent", openConsent);
    window.addEventListener("mbdigital:consentchange", syncConsent);
    return () => {
      window.removeEventListener("mbdigital:openconsent", openConsent);
      window.removeEventListener("mbdigital:consentchange", syncConsent);
    };
  }, []);

  function chooseConsent(accepted) {
    if (accepted) window.MBConsent?.accept();
    else window.MBConsent?.reject();
    setConsent(accepted ? "accepted" : "rejected");
    setConsentOpen(false);
  }


  // Registra o clique em qualquer link do WhatsApp da página.
  // O evento indica intenção de contato, não mensagem enviada.
  function handleWhatsAppClick(event) {
    const link = event.target.closest?.('a[href]');
    if (!link) return;

    try {
      const url = new URL(link.href);
      if (url.hostname !== 'wa.me' && url.hostname !== 'api.whatsapp.com') return;

      if (window.MBConsent?.get() === 'accepted' && typeof window.fbq === 'function') {
        window.fbq('track', 'Contact', {
          contact_method: 'WhatsApp',
        });
      }
    } catch (error) {
      // Não interrompe a navegação caso o rastreamento falhe.
    }
  }

  return (
    <div className="site" onClick={handleWhatsAppClick}>
      <header className="header">
        <div className="container header-inner">
          <BrandLogo />

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
                <span className="proof-icon">
                  <ShieldCheck size={20} />
                </span>
                <span>
                  Estratégia, análise e acompanhamento em cada campanha.
                </span>
              </div>
            </div>

            <div
              className="hero-visual"
              aria-label="Painel ilustrativo de marketing digital"
            >
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
                  <div className="dashboard-label">
                    MARKETING DE PERFORMANCE
                  </div>

                  <div className="dashboard-heading">
                    Decisões baseadas
                    <br />
                    em dados<span>.</span>
                  </div>

                  <p>Planejar. Analisar. Otimizar.</p>

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
                        <linearGradient
                          id="chartFill"
                          x1="0"
                          x2="0"
                          y1="0"
                          y2="1"
                        >
                          <stop
                            offset="0%"
                            stopColor="#38e58b"
                            stopOpacity=".24"
                          />
                          <stop
                            offset="100%"
                            stopColor="#38e58b"
                            stopOpacity="0"
                          />
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
                <span className="floating-icon">
                  <TrendingUp size={21} />
                </span>
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
                Cada negócio tem seus desafios. Unimos tráfego pago e
                soluções digitais alinhadas aos seus objetivos.
              </p>
            </div>

            <div className="services-grid">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <article className="service-card" key={service.number}>
                    <div className="service-top">
                      <div className="service-icon">
                        <Icon size={27} />
                      </div>
                      <span className="service-number">
                        {service.number}
                      </span>
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

                <Target
                  className="graphic-target"
                  size={105}
                  strokeWidth={1}
                />

                <strong>
                  Não é apenas
                  <br />
                  anunciar.
                  <br />
                  <span>É ter estratégia.</span>
                </strong>

                <span className="graphic-footer">
                  TRÁFEGO PAGO • MARKETING DIGITAL
                </span>
              </div>
            </div>

            <div className="about-content">
              <span className="section-kicker">
                POR QUE A MB DIGITAL?
              </span>

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
              <span className="section-kicker">
                NOSSA METODOLOGIA
              </span>

              <h2>
                Da estratégia à <span>otimização.</span>
              </h2>

              <p>
                Um processo organizado para orientar cada decisão.
              </p>
            </div>

            <div className="process-grid">
              {[
                [
                  "01",
                  "Diagnóstico",
                  "Entendemos o negócio, o público e os objetivos.",
                ],
                [
                  "02",
                  "Planejamento",
                  "Definimos campanhas, canais e direcionamento estratégico.",
                ],
                [
                  "03",
                  "Execução",
                  "Colocamos as campanhas no ar e acompanhamos os dados.",
                ],
                [
                  "04",
                  "Otimização",
                  "Analisamos o desempenho e identificamos melhorias.",
                ],
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
                <span className="section-kicker">
                  VAMOS CONVERSAR?
                </span>

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
              <BrandLogo />

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

              <a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle size={16} /> WhatsApp
              </a>

              <a
                href={INSTAGRAM}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={16} /> Instagram
              </a>

              <span>Atendimento online</span>
            </div>
          </div>

          <div className="footer-bottom">
            <span>
              © {new Date().getFullYear()} MB Digital.
              Todos os direitos reservados.
            </span>

            <span>
              Estratégia que conecta negócios a oportunidades.
            </span>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, paddingBottom: 20 }}>
            <button type="button" onClick={() => setPrivacyOpen(true)} style={textButtonStyle}>
              Política de Privacidade
            </button>
            <button type="button" onClick={() => setConsentOpen(true)} style={textButtonStyle}>
              Preferências de cookies {consent === "accepted" ? "(aceitos)" : consent === "rejected" ? "(recusados)" : ""}
            </button>
          </div>
        </div>
      </footer>

      {consentOpen && (
        <div role="dialog" aria-modal="true" aria-label="Preferências de cookies"
          style={{ position: "fixed", bottom: 16, left: 16, right: 16, zIndex: 10000,
            maxWidth: 650, margin: "0 auto", background: "#111c17", color: "#f5fff9",
            border: "1px solid #345542", borderRadius: 18, padding: 22,
            boxShadow: "0 12px 40px rgba(0,0,0,.55)" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
            <Cookie size={24} color="#38e58b" />
            <strong style={{ fontSize: 18 }}>Sua privacidade é importante</strong>
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.6, margin: "0 0 14px" }}>
            Usamos tecnologias de publicidade da Meta para medir visitas e cliques
            no WhatsApp e melhorar nossas campanhas. Elas só serão ativadas com
            sua autorização. Recusar não impede o uso do site.
          </p>
          <button type="button" onClick={() => setPrivacyOpen(true)} style={{ ...textButtonStyle, marginBottom: 16 }}>
            Ler Política de Privacidade
          </button>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            <button type="button" onClick={() => chooseConsent(false)}
              style={{ flex: "1 1 140px", border: "1px solid #63816d", background: "transparent",
                color: "#f5fff9", borderRadius: 10, padding: "12px 18px", cursor: "pointer", fontWeight: 700 }}>
              Recusar
            </button>
            <button type="button" onClick={() => chooseConsent(true)}
              style={{ flex: "1 1 140px", border: 0, background: "#38e58b",
                color: "#082015", borderRadius: 10, padding: "12px 18px", cursor: "pointer", fontWeight: 700 }}>
              Aceitar cookies de marketing
            </button>
          </div>
        </div>
      )}

      {privacyOpen && (
        <div role="dialog" aria-modal="true" aria-label="Política de Privacidade"
          style={{ position: "fixed", inset: 0, zIndex: 10001, background: "rgba(0,0,0,.78)",
            display: "flex", justifyContent: "center", alignItems: "center", padding: 16 }}>
          <div style={{ background: "#111c17", color: "#f5fff9", width: "100%", maxWidth: 650,
            maxHeight: "85vh", overflowY: "auto", border: "1px solid #345542",
            borderRadius: 18, padding: 24, lineHeight: 1.65 }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
              <h2 style={{ fontSize: 22, margin: 0 }}>Política de Privacidade</h2>
              <button type="button" aria-label="Fechar política" onClick={() => setPrivacyOpen(false)}
                style={{ ...textButtonStyle, padding: 8 }}><X size={22} /></button>
            </div>
            <p><strong>MB Digital</strong> — Esta página apresenta nossos serviços de marketing digital e criação de landing pages.</p>
            <p><strong>Contato:</strong> quando você utiliza os links de WhatsApp, é direcionado ao serviço externo do WhatsApp. Informações que você decidir enviar na conversa serão usadas para atender à sua solicitação.</p>
            <p><strong>Cookies e publicidade:</strong> com seu consentimento, utilizamos o Pixel da Meta para registrar visualizações de página (PageView) e cliques para contato (Contact). Esses dados podem ser tratados pela Meta conforme as políticas dela. O clique não comprova o envio de uma mensagem.</p>
            <p><strong>Escolha:</strong> você pode aceitar ou recusar o rastreamento de marketing e alterar sua decisão pelo link “Preferências de cookies” no rodapé. O funcionamento básico do site não depende dessa autorização.</p>
            <p><strong>Seus direitos:</strong> para solicitar informações sobre o tratamento de seus dados ou exercer direitos previstos na LGPD, entre em contato com a MB Digital pelo WhatsApp: (83) 99937-8365.</p>
            <p style={{ fontSize: 13, opacity: .8 }}>Esta é uma versão inicial. Antes da divulgação em campanhas, revise-a com os dados completos do responsável, fornecedores, prazos de retenção e procedimentos aplicáveis.</p>
            <button type="button" onClick={() => setPrivacyOpen(false)}
              style={{ border: 0, background: "#38e58b", color: "#082015",
                borderRadius: 10, padding: "11px 20px", cursor: "pointer", fontWeight: 700 }}>
              Fechar
            </button>
          </div>
        </div>
      )}

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
