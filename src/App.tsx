import { useEffect } from "react";
import {
  ArrowRight,
  Target,
  TrendingDown,
  Layers,
  Compass,
  Settings,
  AlertTriangle,
  Search,
  Microscope,
  Wrench,
  Rocket,
  LineChart,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import logoPV from "@/assets/logo-pv.png";
import heroCover from "@/assets/hero-cover.png";

const CTA_URL = "https://form.respondi.app/u7wFtlqp";
const CTA_LABEL = "AGENDAR DIAGNÓSTICO";

function CtaButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={CTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 px-7 py-4 font-display text-sm sm:text-base tracking-wider rounded-md bg-primary text-primary-foreground hover:shadow-[0_0_40px_rgba(49,171,80,0.5)] hover:-translate-y-0.5 transition-all duration-300 ${className}`}
    >
      {CTA_LABEL}
      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary text-[10px] sm:text-xs font-medium tracking-widest uppercase">
      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
      {children}
    </div>
  );
}

export default function App() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HERO COVER IMAGE */}
      <section className="relative w-full">
        <img
          src={heroCover}
          alt="Performance Valor — Estruturação Empresarial"
          className="w-full h-auto object-cover block"
        />
      </section>

      {/* HERO */}
      <section className="relative pt-12 pb-10 sm:pt-20 sm:pb-16 px-5 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] glow-radial pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background pointer-events-none" />

        <div className="relative max-w-5xl mx-auto text-center">
          <h1
            className="font-display text-[2rem] leading-[1.05] sm:text-6xl md:text-7xl mb-5 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            ESTRUTURAÇÃO EMPRESARIAL PARA <span className="text-primary">CRESCIMENTO DE FATURAMENTO</span>.
          </h1>

          <p
            className="text-sm sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-7 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            Identificamos os gargalos que estão limitando o crescimento da sua empresa e estruturamos soluções
            para aumentar faturamento, eficiência e direção operacional.
          </p>

          <div className="flex justify-center animate-fade-up" style={{ animationDelay: "0.3s" }}>
            <CtaButton className="w-full sm:w-auto" />
          </div>
        </div>
      </section>

      {/* AUTHORITY STRIP */}
      <section className="relative px-5 pb-12 sm:pb-16">
        <div className="reveal max-w-4xl mx-auto text-center">
          <div className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.05] tracking-wide diamond-text">
            +7 DÍGITOS EM FATURAMENTO
          </div>
          <div className="font-display text-xl sm:text-3xl md:text-4xl mt-3 text-foreground/90 tracking-wide">
            PARA OS NOSSOS CLIENTES
          </div>
        </div>
      </section>


      {/* PROBLEMS */}
      <section className="relative py-14 sm:py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="reveal max-w-3xl mb-10 sm:mb-14 text-left">
            <SectionLabel>Diagnóstico</SectionLabel>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl mt-4 leading-tight">
              SUA EMPRESA ESTÁ <span className="text-primary">TRAVADA</span> SEM VOCÊ ENXERGAR O PORQUÊ?
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mt-4 leading-relaxed">
              A maioria das empresas não cresce por falta de esforço. Cresce menos do que poderia por falta de
              estrutura. Veja se algum desses gargalos existe na sua operação.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
            {[
              { icon: TrendingDown, title: "Crescimento estagnado", desc: "Faturamento parou de evoluir há meses." },
              { icon: AlertTriangle, title: "Ineficiência operacional", desc: "Equipe ocupada, mas resultados não acompanham." },
              { icon: Compass, title: "Falta de direção", desc: "Decisões reativas, sem estratégia clara." },
              { icon: Target, title: "Posicionamento fraco", desc: "Empresa não é percebida como referência." },
              { icon: LineChart, title: "Baixa conversão", desc: "Oportunidades chegam, mas não viram receita." },
              { icon: Layers, title: "Processos desorganizados", desc: "Falta padronização e previsibilidade." },
              { icon: Sparkles, title: "Oportunidades desperdiçadas", desc: "Demanda existente que não é capturada." },
              { icon: Settings, title: "Operação sem clareza", desc: "Ninguém sabe exatamente o que move o resultado." },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="reveal group p-5 rounded-xl border border-border bg-card/50 hover:border-primary/40 hover:bg-card hover:-translate-y-0.5 transition-all duration-300"
              >
                <Icon className="w-6 h-6 text-primary mb-3 transition-transform group-hover:scale-110" />
                <h3 className="font-display text-lg sm:text-xl tracking-wide mb-1.5">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <CtaButton className="w-full sm:w-auto" />
          </div>
        </div>
      </section>

      {/* WHAT IS */}
      <section className="relative py-14 sm:py-20 px-5 bg-card/30 border-y border-border">
        <div className="absolute top-0 left-1/3 w-[400px] h-[400px] glow-radial opacity-30 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="reveal text-left">
            <SectionLabel>O que é Performance Valor</SectionLabel>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl mt-4 leading-tight">
              UMA <span className="text-primary">INFRAESTRUTURA</span> DE CRESCIMENTO PARA SUA EMPRESA.
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mt-4 leading-relaxed">
              A Performance Valor é uma consultoria de estruturação e crescimento empresarial. Atuamos como
              parceiro estratégico que entra na sua operação, identifica o que está limitando o seu faturamento
              e desenha soluções sob medida.
            </p>
            <p className="text-muted-foreground text-base sm:text-lg mt-3 leading-relaxed">
              Cada empresa possui gargalos diferentes. Por isso cada estratégia é construída especificamente para
              o seu cenário, mercado e estágio.
            </p>
            <div className="mt-6">
              <CtaButton className="w-full sm:w-auto" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {[
              "Aquisição de clientes",
              "Estrutura comercial",
              "Posicionamento digital",
              "Estratégias de crescimento",
              "Estrutura operacional",
              "Processos empresariais",
              "Eficiência operacional",
              "Direcionamento estratégico",
            ].map((item) => (
              <div
                key={item}
                className="reveal p-4 rounded-lg border border-border bg-background/60 backdrop-blur hover:border-primary/50 hover:-translate-y-0.5 transition-all duration-300"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mb-2" />
                <div className="font-display text-sm sm:text-base tracking-wide">{item}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIAGNOSIS PROCESS */}
      <section className="relative py-14 sm:py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="reveal max-w-3xl mb-10 sm:mb-14 text-left">
            <SectionLabel>Metodologia</SectionLabel>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl mt-4 leading-tight">
              COMO FUNCIONA O <span className="text-primary">DIAGNÓSTICO ESTRATÉGICO</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mt-4 leading-relaxed">
              Um processo estruturado que transforma incertezas em clareza operacional e direção de crescimento.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {[
              { icon: Search, step: "01", title: "Análise Estratégica", desc: "Mapeamento da operação, mercado e modelo de negócio." },
              { icon: AlertTriangle, step: "02", title: "Identificação de Gargalos", desc: "Pontos críticos que limitam crescimento e faturamento." },
              { icon: Microscope, step: "03", title: "Diagnóstico Operacional", desc: "Avaliação de processos, aquisição, posicionamento e conversão." },
              { icon: Wrench, step: "04", title: "Planejamento de Crescimento", desc: "Estrutura sob medida com prioridades, metas e direção." },
              { icon: Rocket, step: "05", title: "Implementação Estratégica", desc: "Execução acompanhada para gerar resultados consistentes." },
            ].map(({ icon: Icon, step, title, desc }) => (
              <div
                key={step}
                className="reveal relative p-5 rounded-xl border border-border bg-card hover:border-primary/50 hover:-translate-y-0.5 hover:shadow-[0_10px_40px_rgba(49,171,80,0.1)] transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/40 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="font-display text-primary text-xs tracking-widest mb-1">PASSO {step}</div>
                <h3 className="font-display text-lg sm:text-xl tracking-wide mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section id="solucoes" className="relative py-14 sm:py-20 px-5 bg-card/30 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="reveal max-w-3xl mb-10 text-left">
            <SectionLabel>Soluções</SectionLabel>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl mt-4 leading-tight">
              ESTRUTURAS QUE DESTRAVAM <span className="text-primary">FATURAMENTO</span>.
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg mt-4 leading-relaxed">
              Cada solução é desenhada após o diagnóstico, conforme o gargalo real da sua empresa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "Aquisição de Clientes", desc: "Estruturas para gerar fluxo consistente de oportunidades qualificadas." },
              { title: "Estrutura Comercial", desc: "Organização do processo de vendas para escalar com previsibilidade." },
              { title: "Posicionamento Digital", desc: "Construção de autoridade e diferenciação no mercado." },
              { title: "Estratégias de Crescimento", desc: "Direção clara para escalar com inteligência e consistência." },
              { title: "Estrutura Operacional", desc: "Organização de áreas, papéis, indicadores e rotinas." },
              { title: "Processos Empresariais", desc: "Padronização que garante previsibilidade e escala." },
              { title: "Eficiência Operacional", desc: "Redução de ruído e aumento de produtividade interna." },
              { title: "Conversão e Receita", desc: "Aumento real do percentual de oportunidades em faturamento." },
              { title: "Direcionamento Estratégico", desc: "Visão clara de prioridades, metas e próximos passos." },
            ].map((s) => (
              <div
                key={s.title}
                className="reveal group relative p-6 rounded-xl border border-border bg-background/60 backdrop-blur hover:border-primary/50 hover:bg-background hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative">
                  <div className="w-9 h-9 rounded-md border border-primary/40 bg-primary/10 flex items-center justify-center mb-4">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl tracking-wide mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESULTS */}
      <section className="relative py-14 sm:py-20 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="reveal max-w-3xl mb-10 sm:mb-14 text-left">
            <SectionLabel>Transformação</SectionLabel>
            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl mt-4 leading-tight">
              DE OPERAÇÃO CONFUSA PARA <span className="text-primary">CRESCIMENTO ESCALÁVEL</span>.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
            {[
              { title: "Clareza Operacional", desc: "Você passa a enxergar exatamente onde o dinheiro entra, sai e trava." },
              { title: "Mais Faturamento", desc: "Estrutura voltada para aumento consistente de receita." },
              { title: "Processos Aprimorados", desc: "Rotinas previsíveis que sustentam crescimento sem caos." },
              { title: "Demanda Qualificada", desc: "Oportunidades certas, no momento certo, com mais conversão." },
              { title: "Posicionamento Sólido", desc: "Sua empresa percebida como referência no segmento." },
              { title: "Crescimento Escalável", desc: "Capacidade real de crescer sem comprometer a operação." },
            ].map((r) => (
              <div key={r.title} className="reveal p-6 sm:p-8 bg-card hover:bg-card/60 transition-colors text-left">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                  <h3 className="font-display text-xl sm:text-2xl tracking-wide">{r.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <CtaButton className="w-full sm:w-auto" />
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="relative py-14 sm:py-20 px-5 bg-card/30 border-y border-border">
        <div className="reveal max-w-5xl mx-auto text-left">
          <SectionLabel>Quem atendemos</SectionLabel>
          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl mt-4 leading-tight">
            PARA EMPRESAS QUE QUEREM <span className="text-primary">CRESCER COM ESTRUTURA</span>.
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg mt-5 leading-relaxed max-w-3xl">
            Atuamos junto a empresas, empreendedores e profissionais que buscam crescimento estratégico,
            eficiência operacional e expansão consistente de faturamento. Cada estratégia é desenhada de acordo
            com o estágio, o mercado e o potencial real do negócio.
          </p>
          <div className="mt-8 flex justify-start">
            <CtaButton className="w-full sm:w-auto" />
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-20 sm:py-24 px-5 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] glow-radial pointer-events-none" />
        <div className="reveal relative max-w-4xl mx-auto text-left">
          <SectionLabel>Próximo Passo</SectionLabel>
          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl mt-6 leading-[1.05]">
            SUA EMPRESA PODE NÃO PRECISAR DE <span className="text-primary">MAIS ESFORÇO</span>.
          </h2>
          <p className="font-display text-2xl sm:text-4xl md:text-5xl mt-5 leading-tight text-muted-foreground">
            PODE PRECISAR DE MAIS <span className="text-foreground">ESTRUTURA</span>, <span className="text-foreground">DIREÇÃO</span> E <span className="text-foreground">ESTRATÉGIA</span>.
          </p>
          <p className="text-base sm:text-lg text-muted-foreground mt-6 max-w-2xl leading-relaxed">
            Agende um diagnóstico estratégico e descubra os gargalos que estão limitando o crescimento e o
            faturamento da sua empresa.
          </p>
          <div className="mt-8 flex justify-start">
            <CtaButton className="w-full sm:w-auto text-base sm:text-lg px-10 py-5" />
          </div>
          <p className="text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground mt-5">
            Vagas limitadas por semana • Atendimento personalizado
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border py-8 px-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src={logoPV} alt="Performance Valor" className="w-8 h-8 object-contain" />
            <span className="font-display tracking-widest text-sm">PERFORMANCE VALOR</span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} Performance Valor. Consultoria de Estruturação e Crescimento Empresarial.
          </p>
        </div>
      </footer>
    </div>
  );
}
