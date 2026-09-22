'use client'

import { ArrowLeft, ArrowUpRight, Check, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { AnimatedThemeToggler } from '@/components/ui/animatedThemeToggler'

export default function ContatoPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="w-full bg-[#f4f2ed] dark:bg-[#161914] text-[#24271d] dark:text-[#f1efe8] transition-colors min-h-screen">
      {}
      <header className="w-full flex items-center justify-between py-6 px-4 sm:px-8 md:px-12 border-b border-black/5 dark:border-white/5">
        <a className="block w-28 sm:w-36 h-auto" href="/">
          <img src="/logo/logo_black.svg" alt="Viverde" className="w-full h-auto max-h-9 object-contain block dark:hidden" />
          <img src="/logo/logo_white.svg" alt="Viverde" className="w-full h-auto max-h-9 object-contain hidden dark:block" />
        </a>
        <div className="flex items-center gap-4">
          <AnimatedThemeToggler />
          <a className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold hover:text-[#b7a77f] transition-colors" href="/">
            <ArrowLeft size={14} /> Voltar ao início
          </a>
        </div>
      </header>

      {}
      <section className="py-16 sm:py-24 px-4 sm:px-8 md:px-12 max-w-4xl">
        <p className="text-[#849181] dark:text-[#a4aa9d] text-xs uppercase tracking-[0.2em] font-semibold mb-3">
          Fale com a gente
        </p>
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-normal leading-[0.98] tracking-tight">
          Seu próximo capítulo<br />
          <em className="italic text-[#b7a77f]">começa aqui.</em>
        </h1>
        <p className="text-base sm:text-lg text-[#73786e] dark:text-[#a4aa9d] leading-relaxed mt-6 font-light">
          Preencha seus dados e receba o book digital completo com plantas, memorial descritivo e tabela de vendas do Viverde Itaipava Résidences.
        </p>
      </section>

      {}
      <section className="py-12 sm:py-20 px-4 sm:px-8 md:px-12 bg-black/[0.02] dark:bg-white/[0.02] border-t border-black/5 dark:border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-[#849181] dark:text-[#a4aa9d] text-xs uppercase tracking-[0.2em] font-semibold mb-2">
              Atendimento personalizado
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight mb-4">
              Vamos conversar sobre o seu <em className="italic text-[#b7a77f]">lugar.</em>
            </h2>
            <p className="text-sm sm:text-base text-[#73786e] dark:text-[#a4aa9d] leading-relaxed mb-8 font-light">
              Nossa equipe está pronta para apresentar cada detalhe do projeto, agendar uma visita guiada ao stand e encontrar a casa que combina com o seu ritmo.
            </p>

            <div className="space-y-4 pt-6 border-t border-black/10 dark:border-white/10">
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={18} className="text-[#b7a77f] shrink-0" />
                <span>R. Neuza Goulart Brizola, 2005 · Itaipava · RJ</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone size={18} className="text-[#b7a77f] shrink-0" />
                <span>(24) 99999-9999 · Atendimento VIP</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Mail size={18} className="text-[#b7a77f] shrink-0" />
                <span>contato@viverdeitaipava.com.br</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="p-8 sm:p-12 rounded-xl bg-white dark:bg-[#1d211b] border border-black/10 dark:border-white/10 shadow-sm">
                <h3 className="font-heading text-2xl sm:text-3xl font-medium mb-3">
                  Mensagem enviada com sucesso!
                </h3>
                <p className="text-sm sm:text-base text-[#73786e] dark:text-[#a4aa9d] leading-relaxed">
                  Agradecemos o seu contato. Um consultor exclusivo retornará em breve com todas as informações do Viverde Itaipava Résidences.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 sm:p-10 rounded-xl bg-white dark:bg-[#1d211b] border border-black/10 dark:border-white/10 shadow-sm space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#73786e] dark:text-[#a4aa9d] mb-2">
                    Nome completo
                  </label>
                  <input
                    required
                    type="text"
                    placeholder="Como podemos te chamar?"
                    className="w-full px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-transparent focus:outline-none focus:border-[#b7a77f] transition-colors text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#73786e] dark:text-[#a4aa9d] mb-2">
                      E-mail
                    </label>
                    <input
                      required
                      type="email"
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-transparent focus:outline-none focus:border-[#b7a77f] transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#73786e] dark:text-[#a4aa9d] mb-2">
                      Telefone / WhatsApp
                    </label>
                    <input
                      required
                      type="tel"
                      placeholder="(00) 00000-0000"
                      className="w-full px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-transparent focus:outline-none focus:border-[#b7a77f] transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#73786e] dark:text-[#a4aa9d] mb-2">
                    Mensagem ou unidade de interesse
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Conte um pouco sobre o que você procura (ex: Casa de 3 ou 4 suítes, agendamento de visita...)"
                    className="w-full px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-transparent focus:outline-none focus:border-[#b7a77f] transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#30382c] dark:bg-[#b7a77f] text-white dark:text-[#161914] text-xs uppercase tracking-widest font-semibold rounded-lg hover:opacity-95 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Enviar mensagem</span>
                  <ArrowUpRight size={16} />
                </button>

                <p className="text-[11px] text-[#73786e] dark:text-[#a4aa9d] flex items-center gap-2 font-light">
                  <Check size={14} className="text-[#b7a77f]" /> Seus dados estão protegidos. Não enviamos spam.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {}
      <footer className="bg-[#1d211b] text-white py-12 px-4 sm:px-8 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 uppercase tracking-widest border-t border-white/10">
        <span>R. Neuza Goulart Brizola, 2005 · Itaipava · RJ</span>
        <span>© 2026 Viverde · Todos os direitos reservados.</span>
      </footer>
    </main>
  )
}
