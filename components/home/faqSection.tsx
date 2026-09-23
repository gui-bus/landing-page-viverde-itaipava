'use client'

import { useState } from 'react'
import { ArrowUpRight, MessageSquare, Plus } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'

interface FAQItem {
  id: string
  number: string
  tag: string
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    id: 'lazer-privativo',
    number: '01',
    tag: 'Lazer Privativo',
    question: 'As casas já são entregues com a piscina aquecida e área gourmet prontas?',
    answer:
      'Sim. Todas as 40 casas do Viverde Itaipava são entregues completas, com deck em madeira nobre, piscina aquecida privativa e varanda gourmet integrada ao living e jardim, prontas para desfrutar desde o primeiro dia.',
  },
  {
    id: 'cronograma-obras',
    number: '02',
    tag: 'Cronograma & Obra',
    question: 'Qual é o status jurídico e a previsão de entrega das obras?',
    answer:
      'O empreendimento conta com Memorial de Incorporação prenotado sob o nº 31236 no cartório do 10º Ofício de Petrópolis e projeto de construção devidamente aprovado na Prefeitura sob o nº 26.531/23. As obras seguem cronograma rigoroso com entregas programadas por fases.',
  },
  {
    id: 'personalizacao',
    number: '03',
    tag: 'Personalização',
    question: 'É possível personalizar os acabamentos ou layout interno da casa?',
    answer:
      'Sim. Disponibilizamos um programa exclusivo de personalização para que você possa selecionar opções nobres de revestimentos, bancadas, louças, climatização, preparação para automação residencial e ponto de recarga veicular (Wallbox).',
  },
  {
    id: 'seguranca-acesso',
    number: '04',
    tag: 'Segurança 24h',
    question: 'Como funciona a segurança e o controle de acesso do condomínio?',
    answer:
      'O condomínio dispõe de guarita blindada, controle de acesso tecnológico 24h com biometria facial, infraestrutura perimetral inteligente com monitoramento de alta resolução e equipe treinada para assegurar máxima privacidade e proteção.',
  },
  {
    id: 'fiacao-subterranea',
    number: '05',
    tag: 'Infraestrutura',
    question: 'Toda a infraestrutura e rede elétrica são subterrâneas?',
    answer:
      'Sim. Toda a rede de energia elétrica, dados, telefonia e iluminação das vias internas é 100% subterrânea. Isso elimina a poluição visual de postes e fiações, preservando a vista panorâmica para a natureza e as montanhas.',
  },
  {
    id: 'locacao-temporada',
    number: '06',
    tag: 'Uso & Convenção',
    question: 'Como é regulamentada a locação e o convívio no condomínio?',
    answer:
      'A convenção do condomínio foi desenhada com foco na preservação do sossego, da harmonia e da valorização patrimonial. Locações de temporada são regidas por normas claras de segurança e identificação prévia de hóspedes junto à administração.',
  },
]

export function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('lazer-privativo')

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id))
  }

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 md:py-36 px-4 sm:px-8 md:px-12 bg-transparent text-[#24271d] dark:text-[#f1efe8] transition-colors"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8">
          <div>
            <span className="inline-flex items-center text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#B88A2D] font-semibold mb-3 px-3.5 py-1.5 rounded-full bg-[#B88A2D]/10 border border-[#B88A2D]/20">
              Esclarecimentos & Dúvidas
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-normal leading-[0.98] tracking-tight mt-3">
              Perguntas <br />
              <em className="italic text-[#B88A2D]">frequentes.</em>
            </h2>
            <p className="text-sm sm:text-base text-[#73786e] dark:text-[#a4aa9d] leading-relaxed mt-5 font-light">
              Tudo o que você precisa saber sobre a infraestrutura, tipologias, segurança e o processo de aquisição no Viverde Itaipava.
            </p>
          </div>

          <div className="rounded-2xl p-6 sm:p-7 bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-[#B88A2D]/15 text-[#B88A2D] flex items-center justify-center shrink-0">
                <MessageSquare size={18} />
              </span>
              <div>
                <h3 className="font-heading text-sm sm:text-base font-medium">
                  Ainda tem alguma pergunta?
                </h3>
                <p className="text-xs text-[#73786e] dark:text-[#a4aa9d] font-light">
                  Fale diretamente com a equipe de consultoria.
                </p>
              </div>
            </div>

            <a
              href="https://wa.me/5521997862692?text=Ol%C3%A1%2C%20gostaria%20de%20tirar%20algumas%20d%C3%BAvidas%20sobre%20o%20Viverde%20Itaipava."
              target="_blank"
              rel="noreferrer"
              className="w-full py-3.5 px-6 rounded-full bg-[#161616] dark:bg-[#B88A2D] hover:bg-[#B88A2D] dark:hover:bg-[#9e7421] text-white hover:text-white dark:text-[#161616] dark:hover:text-[#161616] text-xs uppercase tracking-widest font-semibold flex items-center justify-between transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              <span>Falar no WhatsApp</span>
              <ArrowUpRight size={15} />
            </a>
          </div>
        </div>

        <div className="lg:col-span-7 divide-y divide-black/10 dark:divide-white/10 border-y border-black/10 dark:border-white/10">
          {faqData.map((item) => {
            const isOpen = openId === item.id

            return (
              <div
                key={item.id}
                className="group py-6 sm:py-8 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleItem(item.id)}
                  className="w-full flex items-start justify-between gap-4 text-left cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start gap-4 sm:gap-6 flex-1 pr-2">
                    <span className="font-heading tabular-nums text-xs sm:text-sm font-semibold text-[#B88A2D] shrink-0 pt-0.5">
                      {item.number}
                    </span>
                    <div className="space-y-1.5 flex-1">
                      <span className="inline-block text-[10px] uppercase tracking-wider text-[#849181] dark:text-[#a4aa9d] font-medium">
                        {item.tag}
                      </span>
                      <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-normal tracking-tight group-hover:text-[#B88A2D] transition-colors leading-snug">
                        {item.question}
                      </h3>
                    </div>
                  </div>

                  <span
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-black/15 dark:border-white/15 flex items-center justify-center shrink-0 transition-all duration-300 ${
                      isOpen
                        ? 'bg-[#161616] text-white dark:bg-[#B88A2D] dark:text-[#161616] rotate-45 border-transparent'
                        : 'text-[#24271d] dark:text-[#f1efe8] group-hover:border-black/40 dark:group-hover:border-white/40'
                    }`}
                  >
                    <Plus size={16} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-8 sm:pl-12 pr-4 sm:pr-12 pt-4">
                        <p className="text-sm sm:text-base text-[#73786e] dark:text-[#a4aa9d] leading-relaxed font-light">
                          {item.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
