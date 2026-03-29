"use client";

import { useState, useEffect, useRef } from "react";

// Navigation Component
function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#inicio", label: "Inicio" },
    { href: "#nosotros", label: "El Despacho" },
    { href: "#servicios", label: "Áreas de Práctica" },
    { href: "#equipo", label: "Equipo" },
    { href: "#contacto", label: "Contacto" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md py-4 border-b border-[#c9a962]/20"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#inicio" className="flex items-center gap-3 group">
          <div className="w-10 h-10 border border-[#c9a962] flex items-center justify-center">
            <span className="font-display text-[#c9a962] text-xl font-semibold">DI</span>
          </div>
          <div className="hidden sm:block">
            <span
              className={`font-display text-lg tracking-wider transition-colors group-hover:text-[#c9a962] ${
                scrolled ? "text-[#1a1a1a]" : "text-white"
              }`}
            >
              DESPACHO INFANTE
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm tracking-widest uppercase transition-colors duration-300 hover:text-[#c9a962] hover-gold-line pb-1 ${
                scrolled ? "text-[#1a1a1a]" : "text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="tel:+34934534192"
          className={`hidden lg:flex items-center gap-2 text-sm tracking-wider transition-colors ${
            scrolled ? "text-[#c9a962] hover:text-[#1a1a1a]" : "text-white hover:text-[#c9a962]"
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          +34 934 53 41 92
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 transition-colors hover:text-[#c9a962] ${
            scrolled || mobileMenuOpen ? "text-[#1a1a1a]" : "text-white"
          }`}
          type="button"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-white/98 backdrop-blur-md border-b border-[#c9a962]/20 transition-all duration-300 ${
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="px-6 py-8 flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm tracking-widest uppercase text-[#666] hover:text-[#c9a962] transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:+34934534192"
            className="flex items-center gap-2 text-[#c9a962] text-sm tracking-wider pt-4 border-t border-[#c9a962]/20"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            +34 934 53 41 92
          </a>
        </div>
      </div>
    </nav>
  );
}

// Hero Section
function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/video/hero_video.mp4" type="video/mp4" />
      </video>

      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="inline-flex items-center gap-4 mb-8">
            <span className="h-px w-12 bg-white" />
            <span className="text-white text-sm tracking-[0.3em] uppercase font-body">Abogados de Élite</span>
            <span className="h-px w-12 bg-white" />
          </div>
        </div>

        <h1
          className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white mb-8 leading-[1.1] animate-slide-up"
          style={{ animationDelay: '0.4s' }}
        >
          Despacho
          <br />
          <span className="text-[#c9a962] italic">Infante Abogados</span>
        </h1>

        <p
          className="max-w-2xl mx-auto text-lg md:text-xl text-white/90 mb-4 font-body leading-relaxed animate-slide-up"
          style={{ animationDelay: '0.6s' }}
        >
          Expertos Legales de Confianza en el Corazón de Barcelona
        </p>
        <p
          className="max-w-2xl mx-auto text-base md:text-lg text-white mb-12 font-body leading-relaxed animate-slide-up"
          style={{ animationDelay: '0.7s' }}
        >
          4.610+ clientes satisfechos | Personalizado, Profesional, Orientado a Resultados
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up"
          style={{ animationDelay: '0.8s' }}
        >
          <a
            href="#contacto"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#c9a962] text-[#0a0a0a] text-sm tracking-widest uppercase font-medium hover:bg-[#b8984e] transition-all duration-300"
          >
            Solicitar Consulta
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="tel:+34934534192"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/30 text-white text-sm tracking-widest uppercase hover:border-white hover:bg-white/10 transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Llamar Ahora
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/70 text-xs tracking-widest uppercase">Scroll</span>
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

// Stats Section
function StatsSection() {
  const stats = [
    { number: "4.610+", label: "Clientes Satisfechos" },
    { number: "95%", label: "Casos de Éxito" },
    { number: "30+", label: "Años de Experiencia" },
    { number: "15", label: "Abogados Expertos" },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-r from-[#f8f8f8] to-[#ffffff] border-y border-[#c9a962]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group transform transition-all duration-300 hover:scale-105"
            >
              <div className="font-display text-4xl md:text-5xl lg:text-6xl text-[#c9a962] mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-sm tracking-widest uppercase text-[#666]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// About Section
function AboutSection() {
  return (
    <section id="nosotros" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column - Image */}
          <div className="relative group">
            <div className="aspect-[4/5] bg-gradient-to-br from-[#f0f0f0] to-[#e8e8e8] relative overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 border-2 border-[#c9a962] mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-12 h-12 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                    </svg>
                  </div>
                  <p className="text-[#666] text-sm tracking-widest uppercase">Justicia y Excelencia</p>
                </div>
              </div>
              {/* Decorative frame */}
              <div className="absolute top-4 left-4 right-4 bottom-4 border border-[#c9a962]/30" />
            </div>
            {/* Floating accent */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border border-[#c9a962]/20" />
          </div>

          {/* Right Column - Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="h-px w-8 bg-[#c9a962]" />
              <span className="text-[#c9a962] text-sm tracking-[0.2em] uppercase">El Despacho</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-8 leading-tight">
              Tradición de
              <br />
              <span className="text-[#c9a962] italic">Excelencia Jurídica</span>
            </h2>

            <div className="space-y-6 text-[#666] leading-relaxed">
              <p>
                Despacho Infante Abogados se ha consolidado como uno de los bufetes más
                prestigiosos de Barcelona, con una reputación construida sobre excelencia
                jurídica y dedicación absoluta a la defensa de los derechos de nuestros clientes.
              </p>
              <p>
                Contamos con un equipo de abogados altamente cualificados y especializados
                en diversas ramas del derecho, lo que nos permite ofrecer un servicio
                integral y personalizado adaptado a las necesidades específicas de cada caso.
              </p>
              <p>
                Nuestra reputación se ha construido sobre la base de resultados excepcionales,
                la confidencialidad absoluta, transparencia total y una atención al cliente
                que supera las expectativas. Trabajamos con más de 4.610 clientes satisfechos.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-8">
              <div className="group">
                <div className="font-display text-3xl text-[#c9a962] mb-1 group-hover:scale-110 transition-transform duration-300">30+</div>
                <div className="text-sm text-[#666] tracking-wider uppercase">Años de Experiencia</div>
              </div>
              <div className="sm:border-l sm:border-[#c9a962]/20 sm:pl-8 group">
                <div className="font-display text-3xl text-[#c9a962] mb-1 group-hover:scale-110 transition-transform duration-300">Barcelona</div>
                <div className="text-sm text-[#666] tracking-wider uppercase">Sede Principal</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Services Section
function ServicesSection() {
  const services: Array<{icon: JSX.Element, title: string, description: string}> = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      ),
      title: "Derecho Penal",
      description: "Defensa penal de maxima calidad. Representacion en todo tipo de procedimientos penales, desde delitos economicos hasta defensa en jurado.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Derecho Civil",
      description: "Resolucion de conflictos civiles, herencias, contratos, responsabilidad civil y reclamaciones de todo tipo con la mayor diligencia.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Derecho Mercantil",
      description: "Asesoramiento integral a empresas en constitucion de sociedades, fusiones, adquisiciones, contratos comerciales y litigios empresariales.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Derecho de Familia",
      description: "Divorcios, custodia, regimenes economicos matrimoniales y todo tipo de procedimientos familiares con la sensibilidad que requieren.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Derecho Laboral",
      description: "Defensa de trabajadores y empresas en conflictos laborales, despidos, accidentes de trabajo y negociaciones colectivas.",
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Derecho Fiscal",
      description: "Planificacion fiscal, defensa ante la Agencia Tributaria, recursos y procedimientos tributarios de todo tipo.",
    },
  ];

  return (
    <section id="servicios" className="relative py-24 lg:py-32 bg-gradient-to-b from-[#f8f8f8] to-white">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a962]/20 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c9a962]/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="h-px w-8 bg-[#c9a962]" />
            <span className="text-[#c9a962] text-sm tracking-[0.2em] uppercase">Areas de Practica</span>
            <span className="h-px w-8 bg-[#c9a962]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6">
            Servicios <span className="text-[#c9a962] italic">Juridicos</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#666] leading-relaxed">
            Ofrecemos un servicio integral en todas las ramas del derecho,
            adaptandonos a las necesidades especificas de cada cliente.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 bg-white border-2 border-[#e8e8e8] hover:border-[#c9a962] transition-all duration-500 shadow-md hover:shadow-xl transform hover:-translate-y-2"
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#c9a962]/0 group-hover:border-[#c9a962] transition-all duration-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#c9a962]/0 group-hover:border-[#c9a962] transition-all duration-500" />

              <div className="text-[#c9a962] mb-6 group-hover:scale-125 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-display text-2xl text-[#1a1a1a] mb-4 group-hover:text-[#c9a962] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[#666] leading-relaxed text-sm">
                {service.description}
              </p>

              <div className="mt-6 pt-6 border-t-2 border-[#e8e8e8] group-hover:border-[#c9a962]/30 transition-colors duration-300">
                <a
                  href="#contacto"
                  className="inline-flex items-center gap-2 text-sm text-[#c9a962] font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  Saber mas
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Team Section
function TeamSection() {
  const team: Array<{name: string, role: string, specialty: string, description: string}> = [
    {
      name: "Carlos Infante Morales",
      role: "Socio Fundador",
      specialty: "Derecho Penal",
      description: "Mas de 35 anos de experiencia en defensa penal. Catedratico de Derecho Penal en la Universidad Complutense.",
    },
    {
      name: "Maria Elena Gutierrez",
      role: "Socia Directora",
      specialty: "Derecho Civil",
      description: "Especialista en derecho de sucesiones y contratos. Mediadora certificada con amplia experiencia en negociaciones complejas.",
    },
    {
      name: "Antonio Fernandez Ruiz",
      role: "Socio",
      specialty: "Derecho Mercantil",
      description: "Experto en fusiones y adquisiciones. Asesor de empresas del IBEX 35 en operaciones corporativas de gran envergadura.",
    },
    {
      name: "Laura Martinez Soto",
      role: "Asociada Senior",
      specialty: "Derecho Laboral",
      description: "Especializada en conflictos laborales colectivos y representacion de comites de empresa en grandes corporaciones.",
    },
  ];

  return (
    <section id="equipo" className="relative py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <div className="inline-flex items-center gap-4 mb-6">
            <span className="h-px w-8 bg-[#c9a962]" />
            <span className="text-[#c9a962] text-sm tracking-[0.2em] uppercase">Nuestro Equipo</span>
            <span className="h-px w-8 bg-[#c9a962]" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-6">
            Profesionales de <span className="text-[#c9a962] italic">Elite</span>
          </h2>
          <p className="max-w-2xl mx-auto text-[#666] leading-relaxed">
            Un equipo de abogados con trayectorias excepcionales y un compromiso
            absoluto con la excelencia en el ejercicio de la abogacia.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {team.map((member, index) => (
            <div
              key={index}
              className="group relative flex flex-col sm:flex-row gap-6 p-6 bg-gradient-to-br from-white to-[#f8f8f8] border-2 border-[#e8e8e8] hover:border-[#c9a962] transition-all duration-500 shadow-md hover:shadow-xl"
            >
              {/* Avatar placeholder */}
              <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-[#c9a962]/10 to-[#c9a962]/5 border-2 border-[#c9a962]/30 flex items-center justify-center group-hover:border-[#c9a962] transition-all duration-300">
                <span className="font-display text-3xl text-[#c9a962]">
                  {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="text-[#c9a962] text-xs tracking-widest uppercase mb-2">
                  {member.specialty}
                </div>
                <h3 className="font-display text-2xl text-[#1a1a1a] mb-1 group-hover:text-[#c9a962] transition-colors duration-300">
                  {member.name}
                </h3>
                <div className="text-sm text-[#666] mb-4">{member.role}</div>
                <p className="text-[#666] text-sm leading-relaxed">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonial Section
function TestimonialSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-to-r from-[#c9a962]/5 to-[#c9a962]/10 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-2 border-[#c9a962] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-[#c9a962] rounded-full" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <svg className="w-16 h-16 mx-auto mb-8 text-[#c9a962] opacity-60 animate-pulse" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>

        <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] mb-8 leading-relaxed italic animate-fade-in">
          El Despacho Infante no solo gano mi caso, sino que me devolvio la tranquilidad
          en uno de los momentos mas dificiles de mi vida. Su profesionalidad y dedicacion
          son incomparables.
        </blockquote>

        <div>
          <div className="font-display text-xl text-[#c9a962]">Eduardo Ramirez</div>
          <div className="text-sm text-[#666] tracking-wider uppercase mt-1">Empresario, Madrid</div>
        </div>
      </div>
    </section>
  );
}

// Contact Section
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <section id="contacto" className="relative py-24 lg:py-32 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <div>
            <div className="inline-flex items-center gap-4 mb-6">
              <span className="h-px w-8 bg-[#c9a962]" />
              <span className="text-[#c9a962] text-sm tracking-[0.2em] uppercase">Contacto</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-[#e8e4dc] mb-8">
              Hablemos de
              <br />
              <span className="text-[#c9a962] italic">su caso</span>
            </h2>

            <p className="text-[#a8a49c] leading-relaxed mb-12">
              Primera consulta gratuita y sin compromiso. Contacte con nosotros
              y uno de nuestros abogados especialistas le atendera personalmente.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-[#c9a962]/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#e8e4dc] font-medium mb-1">Direccion</div>
                  <div className="text-[#a8a49c] text-sm">
                    C/ de Muntaner, 135 principal<br />
                    Eixample, 08036 Barcelona, España
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-[#c9a962]/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#e8e4dc] font-medium mb-1">Telefono</div>
                  <div className="text-[#a8a49c] text-sm">
                    +34 934 53 41 92
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-[#c9a962]/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#e8e4dc] font-medium mb-1">Email</div>
                  <div className="text-[#a8a49c] text-sm">
                    info@despachoinfante.es<br />
                    consultas@despachoinfante.es
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 border border-[#c9a962]/30 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#c9a962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <div className="text-[#e8e4dc] font-medium mb-1">Horario</div>
                  <div className="text-[#a8a49c] text-sm">
                    Lunes - Viernes: 10:00 - 19:00<br />
                    Cerrado Sábado y Domingo
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="relative">
            <div className="bg-[#0f0f0f] p-8 lg:p-12 border border-[#1a1a1a]">
              <h3 className="font-display text-2xl text-[#e8e4dc] mb-8">
                Solicite una consulta
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm text-[#a8a49c] mb-2 tracking-wider uppercase">
                      Nombre *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#1a1a1a] text-[#e8e4dc] focus:border-[#c9a962] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm text-[#a8a49c] mb-2 tracking-wider uppercase">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#1a1a1a] text-[#e8e4dc] focus:border-[#c9a962] focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm text-[#a8a49c] mb-2 tracking-wider uppercase">
                      Telefono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#1a1a1a] text-[#e8e4dc] focus:border-[#c9a962] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm text-[#a8a49c] mb-2 tracking-wider uppercase">
                      Asunto *
                    </label>
                    <select
                      id="subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#1a1a1a] text-[#e8e4dc] focus:border-[#c9a962] focus:outline-none transition-colors"
                    >
                      <option value="">Seleccione...</option>
                      <option value="penal">Derecho Penal</option>
                      <option value="civil">Derecho Civil</option>
                      <option value="mercantil">Derecho Mercantil</option>
                      <option value="familia">Derecho de Familia</option>
                      <option value="laboral">Derecho Laboral</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-[#a8a49c] mb-2 tracking-wider uppercase">
                    Mensaje *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0a0a] border border-[#1a1a1a] text-[#e8e4dc] focus:border-[#c9a962] focus:outline-none transition-colors resize-none"
                    placeholder="Describa brevemente su caso..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#c9a962] text-[#0a0a0a] text-sm tracking-widest uppercase font-medium hover:bg-[#b8984e] transition-colors duration-300"
                >
                  Enviar Consulta
                </button>

                <p className="text-xs text-[#a8a49c] text-center">
                  Sus datos seran tratados de forma confidencial conforme a nuestra politica de privacidad.
                </p>
              </form>
            </div>

            {/* Decorative element */}
            <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full border border-[#c9a962]/20" />
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer
function Footer() {
  return (
    <footer className="relative py-16 bg-[#0f0f0f] border-t border-[#c9a962]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#inicio" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 border border-[#c9a962] flex items-center justify-center">
                <span className="font-display text-[#c9a962] text-xl font-semibold">DI</span>
              </div>
              <span className="font-display text-lg tracking-wider text-[#e8e4dc]">
                DESPACHO INFANTE
              </span>
            </a>
            <p className="text-[#a8a49c] leading-relaxed max-w-md mb-6">
              Mas de tres decadas defendiendo los derechos de nuestros clientes
              con excelencia, integridad y dedicacion absoluta.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-[#1a1a1a] hover:border-[#c9a962] flex items-center justify-center text-[#a8a49c] hover:text-[#c9a962] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-[#1a1a1a] hover:border-[#c9a962] flex items-center justify-center text-[#a8a49c] hover:text-[#c9a962] transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg text-[#e8e4dc] mb-6">Enlaces</h4>
            <ul className="space-y-3">
              {["El Despacho", "Areas de Practica", "Nuestro Equipo", "Blog Juridico", "Contacto"].map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[#a8a49c] hover:text-[#c9a962] text-sm transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg text-[#e8e4dc] mb-6">Contacto</h4>
            <ul className="space-y-3 text-[#a8a49c] text-sm">
              <li>C/ de Muntaner, 135 principal</li>
              <li>Eixample, 08036 Barcelona, España</li>
              <li className="pt-2">+34 934 53 41 92</li>
              <li>info@despachoinfante.es</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#1a1a1a] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-[#a8a49c]">
            2026 Despacho Infante. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-[#a8a49c] hover:text-[#c9a962] transition-colors">
              Aviso Legal
            </a>
            <a href="#" className="text-xs text-[#a8a49c] hover:text-[#c9a962] transition-colors">
              Politica de Privacidad
            </a>
            <a href="#" className="text-xs text-[#a8a49c] hover:text-[#c9a962] transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <ServicesSection />
      <TeamSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
