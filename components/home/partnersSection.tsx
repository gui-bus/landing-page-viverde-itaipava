'use client'

export function PartnersSection() {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-8 md:px-12 border-t border-black/10 dark:border-white/10 text-[#24271d] dark:text-[#f1efe8] transition-colors">
      <div className="mb-10">
        <p className="text-[#849181] dark:text-[#a4aa9d] text-xs uppercase tracking-[0.2em] font-semibold mb-2">
          Quem torna possível
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
          Grandes ideias, <em className="italic text-[#b7a77f]">juntas.</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8">
        <div className="p-6 rounded-lg border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] transition-colors">
          <p className="text-[10px] uppercase tracking-widest text-[#73786e] dark:text-[#a4aa9d] mb-4 font-semibold">
            ESTRUTURAÇÃO
          </p>
          <div className="w-full max-w-[200px] h-16 relative">
            <img
              src="/parceiros/estruturacao/agrega_black.svg"
              alt="Agrega"
              className="w-full h-full object-contain object-left block dark:hidden"
            />
            <img
              src="/parceiros/estruturacao/agrega_white.svg"
              alt="Agrega"
              className="w-full h-full object-contain object-left hidden dark:block"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] transition-colors">
          <p className="text-[10px] uppercase tracking-widest text-[#73786e] dark:text-[#a4aa9d] mb-4 font-semibold">
            INCORPORAÇÃO
          </p>
          <div className="w-full max-w-[200px] h-16 relative">
            <img
              src="/parceiros/incorporacao/braemp_black.svg"
              alt="Braemp"
              className="w-full h-full object-contain object-left block dark:hidden"
            />
            <img
              src="/parceiros/incorporacao/braemp_white.svg"
              alt="Braemp"
              className="w-full h-full object-contain object-left hidden dark:block"
            />
          </div>
        </div>

        <div className="p-6 rounded-lg border border-black/5 dark:border-white/5 bg-black/[0.01] dark:bg-white/[0.01] transition-colors">
          <p className="text-[10px] uppercase tracking-widest text-[#73786e] dark:text-[#a4aa9d] mb-4 font-semibold">
            PARCERIA
          </p>
          <div className="w-full max-w-[200px] h-16 relative">
            <img
              src="/parceiros/parceria/ribus_black.svg"
              alt="Ribus"
              className="w-full h-full object-contain object-left block dark:hidden"
            />
            <img
              src="/parceiros/parceria/ribus_white.svg"
              alt="Ribus"
              className="w-full h-full object-contain object-left hidden dark:block"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
