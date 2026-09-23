'use client'

import { useCallback, useState } from 'react'
import { ArrowUpRight, Check, MapPin, Phone } from 'lucide-react'
import { Header } from '@/components/home/header'
import { Footer } from '@/components/home/footer'
import { CtaButton } from '@/components/ui/ctaButton'

export default function ContatoPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }, [])

  return (
    <main className="w-full bg-[#f4f2ed] dark:bg-[#161616] text-[#24271d] dark:text-[#f1efe8] transition-colors min-h-screen">
      <Header variant="default" />

      <div className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute -right-16 sm:-right-24 md:-right-32 -bottom-16 sm:-bottom-24 md:-bottom-32 w-[clamp(600px,90vw,1450px)] pointer-events-none select-none z-0 opacity-[0.035] flex justify-end items-end"
        >
          <img
            src="/logo/icon_black.svg"
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain object-right-bottom dark:hidden"
          />
          <img
            src="/logo/icon_white.svg"
            alt=""
            loading="lazy"
            decoding="async"
            className="w-full h-auto object-contain object-right-bottom hidden dark:block"
          />
        </div>

        <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-8 md:px-12 max-w-4xl">
          <p className="text-[#849181] dark:text-[#a4aa9d] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
            Fale com a gente
          </p>
          <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.98] tracking-tight">
            Seu próximo capítulo<br />
            <em className="italic text-[#B88A2D]">começa aqui.</em>
          </h1>
          <p className="text-base sm:text-lg text-[#73786e] dark:text-[#a4aa9d] leading-relaxed mt-6 font-light">
            Preencha seus dados e receba o book digital completo com plantas, memorial descritivo e tabela de vendas do Viverde Itaipava Résidences.
          </p>
        </section>

        <section className="relative z-10 pb-16 sm:pb-28 px-4 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <p className="text-[#849181] dark:text-[#a4aa9d] text-xs uppercase tracking-[0.2em] font-semibold mb-2">
                Atendimento exclusivo
              </p>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight mb-4">
                Vamos conversar sobre o seu <em className="italic text-[#B88A2D]">lugar.</em>
              </h2>
              <p className="text-sm sm:text-base text-[#73786e] dark:text-[#a4aa9d] leading-relaxed mb-8 font-light">
                Nossa equipe está pronta para apresentar cada detalhe do projeto, agendar uma visita guiada ao stand e encontrar a casa que combina com o seu ritmo.
              </p>

              <div className="space-y-4 pt-8 border-t border-black/10 dark:border-white/10">
                <div className="flex items-start gap-3.5 text-sm text-[#24271d] dark:text-[#f1efe8]">
                  <MapPin size={18} className="text-[#B88A2D] shrink-0 mt-0.5" />
                  <span>
                    Rua Neuza Goulart Brizola, 2005<br />
                    Itaipava · Petrópolis · RJ
                  </span>
                </div>
                <div className="flex items-center gap-3.5 text-sm">
                  <Phone size={18} className="text-[#B88A2D] shrink-0" />
                  <a
                    href="https://wa.me/5521997862692"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[#24271d] dark:text-[#f1efe8] hover:text-[#B88A2D] transition-colors font-medium"
                  >
                    (21) 99786-2692
                  </a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
            {submitted ? (
              <div className="py-6 sm:py-8 space-y-4">
                <span className="w-12 h-12 rounded-full bg-[#B88A2D]/15 text-[#B88A2D] flex items-center justify-center mb-6">
                  <Check size={24} />
                </span>
                <h3 className="font-heading text-2xl sm:text-3xl font-medium mb-3">
                  Mensagem enviada com sucesso!
                </h3>
                <p className="text-sm sm:text-base text-[#73786e] dark:text-[#a4aa9d] leading-relaxed font-light">
                  Agradecemos o seu contato. Um consultor exclusivo retornará em breve com todas as informações do Viverde Itaipava Résidences.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block text-[11px] uppercase tracking-wider font-semibold text-[#161616] dark:text-[#f1efe8] mb-2">
                    Nome completo
                  </label>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    required
                    type="text"
                    placeholder="Como podemos te chamar?"
                    className="w-full px-4 py-3.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] focus:bg-transparent dark:focus:bg-transparent border border-transparent focus:border-[#B88A2D] transition-all text-sm outline-none placeholder:text-[#849181]/60"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-[11px] uppercase tracking-wider font-semibold text-[#161616] dark:text-[#f1efe8] mb-2">
                      E-mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      autoComplete="email"
                      required
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] focus:bg-transparent dark:focus:bg-transparent border border-transparent focus:border-[#B88A2D] transition-all text-sm outline-none placeholder:text-[#849181]/60"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-[11px] uppercase tracking-wider font-semibold text-[#161616] dark:text-[#f1efe8] mb-2">
                      Telefone / WhatsApp
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      autoComplete="tel"
                      required
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className="w-full px-4 py-3.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] focus:bg-transparent dark:focus:bg-transparent border border-transparent focus:border-[#B88A2D] transition-all text-sm outline-none placeholder:text-[#849181]/60"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-[11px] uppercase tracking-wider font-semibold text-[#161616] dark:text-[#f1efe8] mb-2">
                    Mensagem ou unidade de interesse
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Conte um pouco sobre o que você procura (ex: Casa de 3 ou 4 suítes, agendamento de visita...)"
                    className="w-full px-4 py-3.5 rounded-xl bg-black/[0.03] dark:bg-white/[0.05] focus:bg-transparent dark:focus:bg-transparent border border-transparent focus:border-[#B88A2D] transition-all text-sm outline-none placeholder:text-[#849181]/60 resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                  <CtaButton
                    type="submit"
                    variant="secondary"
                    size="md"
                    className="w-full sm:w-auto"
                  >
                    <span>Enviar mensagem</span>
                    <ArrowUpRight size={16} />
                  </CtaButton>

                  <p className="text-[11px] text-[#73786e] dark:text-[#a4aa9d] flex items-center gap-2 font-light">
                    <Check size={14} className="text-[#B88A2D]" /> Seus dados estão protegidos.
                  </p>
                </div>
              </form>
            )}
            </div>
          </div>
        </section>

        <section className="relative z-10 pb-20 sm:pb-28 px-4 sm:px-8 md:px-12">
          <div className="w-full space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <p className="text-[#849181] dark:text-[#a4aa9d] text-xs uppercase tracking-[0.2em] font-semibold mb-2 flex items-center gap-2">
                  <MapPin size={14} className="text-[#B88A2D]" /> Localização
                </p>
                <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-normal tracking-tight">
                  Como chegar ao <em className="italic text-[#B88A2D]">Viverde.</em>
                </h2>
              </div>
              <a
                href="https://maps.google.com/?q=Rua+Neuza+Goulart+Brizola,+2005+-+Itaipava,+Petr%C3%B3polis+-+RJ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-[#161616] dark:text-[#c7b88d] hover:underline shrink-0"
              >
                <span>Abrir no Google Maps</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            <div className="relative w-full h-[450px] sm:h-[540px] md:h-[600px] rounded-2xl sm:rounded-3xl overflow-hidden border border-black/10 dark:border-white/10 shadow-xl bg-black/5">
              <iframe
                title="Localização do Viverde Itaipava"
                src="https://maps.google.com/maps?q=Rua+Neuza+Goulart+Brizola,+2005+-+Itaipava,+Petr%C3%B3polis+-+RJ&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
