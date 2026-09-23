'use client'

const partners = [
  {
    role: 'Estruturação',
    name: 'Agrega',
    url: 'https://agregabr.com.br/',
    lightLogo: '/parceiros/estruturacao/agrega_white.svg',
    darkLogo: '/parceiros/estruturacao/agrega_black.svg',
  },
  {
    role: 'Incorporação',
    name: 'Braemp',
    url: 'https://braemp.com.br/',
    lightLogo: '/parceiros/incorporacao/braemp_white.svg',
    darkLogo: '/parceiros/incorporacao/braemp_black.svg',
  },
  {
    role: 'Parceria',
    name: 'Ribus',
    url: 'https://ribus.io/',
    lightLogo: '/parceiros/parceria/ribus_white.svg',
    darkLogo: '/parceiros/parceria/ribus_black.svg',
  },
]

const marqueeList = [
  ...partners,
  ...partners,
  ...partners,
  ...partners,
  ...partners,
  ...partners,
]

export function PartnersSection() {
  return (
    <section className="pb-20 text-[#24271d] dark:text-[#f1efe8] transition-colors overflow-hidden">
      <div className="px-4 sm:px-8 md:px-12 text-center mb-12 sm:mb-16">
        <p className="text-[#849181] dark:text-[#a4aa9d] text-xs uppercase tracking-[0.2em] font-semibold mb-2">
          Quem torna possível
        </p>
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight">
          Grandes ideias, <em className="italic text-[#B88A2D]">juntas.</em>
        </h2>
      </div>

      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="flex w-max items-center gap-12 sm:gap-20 md:gap-28 animate-[marquee_25s_linear_infinite] hover:[animation-play-state:paused] py-4">
          {marqueeList.map((partner, index) => (
            <a
              key={`${partner.name}-${index}`}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center shrink-0 px-4 sm:px-8 group select-none transition-transform duration-300 hover:scale-105 cursor-pointer"
              aria-label={`Visitar site da ${partner.name}`}
            >
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#849181] dark:text-[#a4aa9d] font-semibold mb-3 transition-colors">
                {partner.role}
              </span>
              <div className="h-12 sm:h-14 md:h-16 flex items-center justify-center">
                <img
                  src={partner.lightLogo}
                  alt={partner.name}
                  loading="lazy"
                  decoding="async"
                  className="h-8 sm:h-10 md:h-12 w-auto max-w-[160px] sm:max-w-[200px] object-contain block dark:hidden transition-opacity duration-300"
                />
                <img
                  src={partner.darkLogo}
                  alt={partner.name}
                  loading="lazy"
                  decoding="async"
                  className="h-8 sm:h-10 md:h-12 w-auto max-w-[160px] sm:max-w-[200px] object-contain hidden dark:block transition-opacity duration-300"
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
