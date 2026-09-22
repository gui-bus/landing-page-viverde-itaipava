import type { FilmItem, GalleryItem, PlaceItem, ProjectCategory, ProjectImageItem } from './types'

export const galleryData: GalleryItem[] = [
  { src: '/localizacao/location_01_vista_do_viverde_itaipava_residences.webp', alt: 'Vista panorâmica do Viverde entre montanhas', tag: 'Localização' },
  { src: '/viverde/casa-04-suites/casa_04_suites_lazer.webp', alt: 'Lazer privativo com piscina e jardim', tag: 'Casa 04 Suítes' },
  { src: '/localizacao/location_02_clima_montanha_e_verdes.webp', alt: 'Clima de montanha e verdes de Itaipava', tag: 'Natureza' },
  { src: '/viverde/casa-03-suites/casa_03_suites_interior.webp', alt: 'Interior acolhedor da Casa 03 Suítes', tag: 'Casa 03 Suítes' },
  { src: '/localizacao/location_03_cachoeira.webp', alt: 'Cachoeira cercada pela mata atlântica', tag: 'Ecoturismo' },
  { src: '/viverde/geral/area_de_convivencia.webp', alt: 'Área de convivência e lazer integrado', tag: 'Condomínio' },
]

export const placesData: PlaceItem[] = [
  { number: '01', title: 'Polo Gastronômico', text: 'Sabores autorais, bistrôs refinados e experiências que celebram a serra.', src: '/localizacao/location_09_restaurante.webp', alt: 'Polo gastronômico de Itaipava' },
  { number: '02', title: 'Natureza & Cachoeiras', text: 'Trilhas, cachoeiras e montanhas para desacelerar em meio à Mata Atlântica.', src: '/localizacao/location_03_cachoeira.webp', alt: 'Cachoeira cercada pela mata' },
  { number: '03', title: 'Produtos & Feiras da Serra', text: 'Conveniência, produtos orgânicos, queijos e delícias artesanais locais.', src: '/localizacao/location_08_produtos_locais.webp', alt: 'Produtos da serra e feiras' },
  { number: '04', title: 'Ciclismo & Ecoturismo', text: 'Rotas de mountain bike e caminhadas emolduradas pelas montanhas.', src: '/localizacao/location_04_ciclismo_e_trilhas.webp', alt: 'Ciclismo e trilhas na serra' },
  { number: '05', title: 'Mercados & Empórios', text: 'Empórios selecionados e mercados completos a minutos do condomínio.', src: '/localizacao/location_05_mercado.webp', alt: 'Mercado e empório de Itaipava' },
  { number: '06', title: 'Adegas & Vinhos Finos', text: 'Degustação e rótulos exclusivos para apreciar no clima ameno da serra.', src: '/localizacao/location_06_adega.webp', alt: 'Adega e gastronomia local' },
  { number: '07', title: 'Bares & Encontros', text: 'Ambientes acolhedores, drinques autorais e noites descontraídas.', src: '/localizacao/location_07_bar.webp', alt: 'Bares e vida noturna serrana' },
  { number: '08', title: 'Clima de Montanha', text: 'Verdes exuberantes, ar puro e temperatura agradável em todas as estações.', src: '/localizacao/location_02_clima_montanha_e_verdes.webp', alt: 'Clima de montanha e verdes' },
  { number: '09', title: 'Vista Privilegiada', text: 'Localização alta com vista panorâmica definitiva para a serra de Itaipava.', src: '/localizacao/location_01_vista_do_viverde_itaipava_residences.webp', alt: 'Vista panorâmica do Viverde Itaipava' },
]

export const filmsData: FilmItem[] = [
  { title: 'O manifesto', label: 'A essência Viverde', image: '/utils/bg_hero_section.webp' },
  { title: 'A arquitetura', label: 'Forma que acolhe', image: '/viverde/casa-04-suites/casa_04_suites_fachada.webp' },
  { title: 'A paisagem', label: 'Serra, tempo e presença', image: '/localizacao/location_04_ciclismo_e_trilhas.webp' },
  { title: 'O cotidiano', label: 'Viver é estar aqui', image: '/localizacao/location_07_bar.webp' },
]

export const projectCategoriesData: ProjectCategory[] = [
  { id: 'todos', label: 'Todos os Ambientes' },
  { id: 'casa-03', label: 'Casas 3 Suítes' },
  { id: 'casa-04', label: 'Casas 4 Suítes' },
  { id: 'lazer', label: 'Lazer & Condomínio' },
]

export const projectImagesData: ProjectImageItem[] = [

  { category: 'casa-03', tag: 'Casa 03 Suítes', title: 'Fachada Principal', text: 'Linhas contemporâneas, madeira nobre e jardins integrados.', src: '/viverde/casa-03-suites/casa_03_suites_fachada.webp', alt: 'Fachada da Casa 03 Viverde' },
  { category: 'casa-03', tag: 'Casa 03 Suítes', title: 'Living Integrado', text: 'Ambientes integrados e amplos para a vida acontecer sem pressa.', src: '/viverde/casa-03-suites/casa_03_suites_interior.webp', alt: 'Interior da Casa 03 Viverde' },
  { category: 'casa-03', tag: 'Casa 03 Suítes', title: 'Lazer Privativo & Piscina', text: 'Deck gourmet e piscina privativa emoldurada pelo verde.', src: '/viverde/casa-03-suites/casa_03_suites_lazer.webp', alt: 'Área de lazer da Casa 03 Viverde' },
  { category: 'casa-03', tag: 'Casa 03 Suítes', title: 'Suíte Master 01', text: 'Conforto térmico, iluminação natural e vista relaxante para a mata.', src: '/viverde/casa-03-suites/casa_03_suites_lazer_suite_01.webp', alt: 'Suíte 01 da Casa 03 Viverde' },
  { category: 'casa-03', tag: 'Casa 03 Suítes', title: 'Suíte Conforto 02', text: 'Espaço planejado com privacidade e aconchego serrano.', src: '/viverde/casa-03-suites/casa_03_suites_lazer_suite_02.webp', alt: 'Suíte 02 da Casa 03 Viverde' },
  { category: 'casa-03', tag: 'Casa 03 Suítes', title: 'Suíte 03', text: 'Ambiente versátil com ventilação cruzada e acabamento premium.', src: '/viverde/casa-03-suites/casa_03_suites_lazer_suite_03.webp', alt: 'Suíte 03 da Casa 03 Viverde' },
  { category: 'casa-03', tag: 'Casa 03 Suítes', title: 'Banheiro da Suíte', text: 'Metais nobres, bancada ampla e revestimentos elegantes.', src: '/viverde/casa-03-suites/casa_03_suites_lazer_banheiro.webp', alt: 'Banheiro da Suíte Casa 03 Viverde' },
  { category: 'casa-03', tag: 'Casa 03 Suítes', title: 'Planta Humanizada (218 m²)', text: 'Projeto inteligente com 218 m² e máximo aproveitamento de espaço.', src: '/viverde/casa-03-suites/casa_03_suites_planta.webp', alt: 'Planta humanizada da Casa 03 Viverde' },

  { category: 'casa-04', tag: 'Casa 04 Suítes', title: 'Fachada Imponente', text: 'Conceito arquitetônico autoral e acabamentos em alto padrão.', src: '/viverde/casa-04-suites/casa_04_suites_fachada.webp', alt: 'Fachada da Casa 04 Viverde' },
  { category: 'casa-04', tag: 'Casa 04 Suítes', title: 'Living & Salas de Estar', text: 'Espaços nobres integrados ao horizonte da montanha.', src: '/viverde/casa-04-suites/casa_04_suites_interior.webp', alt: 'Interior e salas da Casa 04 Viverde' },
  { category: 'casa-04', tag: 'Casa 04 Suítes', title: 'Piscina & Varanda Gourmet', text: 'Piscina aquecida, solarium e liberdade de viver ao ar livre.', src: '/viverde/casa-04-suites/casa_04_suites_lazer.webp', alt: 'Área de lazer da Casa 04 Viverde' },
  { category: 'casa-04', tag: 'Casa 04 Suítes', title: 'Suíte Master com Vista', text: 'Suíte principal ampla com closet e vista panorâmica.', src: '/viverde/casa-04-suites/casa_04_suites_lazer_suite_01.webp', alt: 'Suíte Master Casa 04 Viverde' },
  { category: 'casa-04', tag: 'Casa 04 Suítes', title: 'Suíte Conforto 02', text: 'Ambiente espaçoso e silencioso para descanso absoluto.', src: '/viverde/casa-04-suites/casa_04_suites_lazer_suite_02.webp', alt: 'Suíte 02 Casa 04 Viverde' },
  { category: 'casa-04', tag: 'Casa 04 Suítes', title: 'Suíte Hóspedes 03', text: 'Privacidade e bem-estar para receber família e amigos.', src: '/viverde/casa-04-suites/casa_04_suites_lazer_suite_03.webp', alt: 'Suíte 03 Casa 04 Viverde' },
  { category: 'casa-04', tag: 'Casa 04 Suítes', title: 'Suíte 04', text: 'Quarto flexível para hóspedes, escritório ou sala íntima.', src: '/viverde/casa-04-suites/casa_04_suites_lazer_suite_04.webp', alt: 'Suíte 04 Casa 04 Viverde' },
  { category: 'casa-04', tag: 'Casa 04 Suítes', title: 'Planta Humanizada (286 m²)', text: 'Plantas versáteis de 286 m² a 312 m² com 4 suítes completas.', src: '/viverde/casa-04-suites/casa_04_suites_planta.webp', alt: 'Planta humanizada da Casa 04 Viverde' },

  { category: 'lazer', tag: 'Condomínio', title: 'Área de Convivência', text: 'Espaços comuns desenhados para encontros memoráveis ao ar livre.', src: '/viverde/geral/area_de_convivencia.webp', alt: 'Área de convivência do Viverde' },
  { category: 'lazer', tag: 'Condomínio', title: 'Parquinho Infantil', text: 'Diversão e segurança para as crianças em contato com a natureza.', src: '/viverde/geral/parquinho_infantil.webp', alt: 'Parquinho infantil do Viverde' },
  { category: 'lazer', tag: 'Condomínio', title: 'Quadra Poliesportiva', text: 'Estrutura completa para prática de esportes e bem-estar.', src: '/viverde/geral/quadra_poliesportiva.webp', alt: 'Quadra poliesportiva do Viverde' },
  { category: 'lazer', tag: 'Condomínio', title: 'Salão de Festas & Gourmet', text: 'Um cenário acolhedor e sofisticado para celebrar junto.', src: '/viverde/geral/salao_de_festas.webp', alt: 'Salão de festas do Viverde' },
]
