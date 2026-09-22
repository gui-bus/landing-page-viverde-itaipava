import type { FilmItem, GalleryItem, ProjectCategory, ProjectImageItem } from './types'

export const galleryData: GalleryItem[] = [
  { src: '/localizacao/location_01_vista_do_viverde_itaipava_residences.webp', alt: 'Vista panorâmica do Viverde entre montanhas', tag: 'Vista Panorâmica' },
  { src: '/localizacao/location_02_clima_montanha_e_verdes.webp', alt: 'Clima de montanha e verdes de Itaipava', tag: 'Clima de Montanha' },
  { src: '/localizacao/location_03_cachoeira.webp', alt: 'Cachoeiras cercadas pela Mata Atlântica', tag: 'Cachoeiras' },
  { src: '/localizacao/location_04_ciclismo_e_trilhas.webp', alt: 'Ciclismo e trilhas na serra de Itaipava', tag: 'Trilhas & Esporte' },
  { src: '/localizacao/location_05_mercado.webp', alt: 'Mercados e empórios selecionados', tag: 'Conveniência' },
  { src: '/localizacao/location_06_adega.webp', alt: 'Adegas e cartas de vinhos exclusivas', tag: 'Adegas & Vinhos' },
  { src: '/localizacao/location_07_bar.webp', alt: 'Bares acolhedores e drinques autorais', tag: 'Vida Noturna' },
  { src: '/localizacao/location_08_produtos_locais.webp', alt: 'Produtos orgânicos e feiras da serra', tag: 'Produtos da Serra' },
  { src: '/localizacao/location_09_restaurante.webp', alt: 'Polo gastronômico e bistrôs refinados', tag: 'Gastronomia' },
]

export const filmsData: FilmItem[] = [
  {
    title: 'O manifesto',
    label: 'A essência Viverde',
    image: '/utils/bg_hero_section.webp',
    video: '/videos/01.mp4',
    description: 'A harmonia entre arquitetura contemporânea, silêncio e o verde exuberante de Itaipava.',
  },
  {
    title: 'A arquitetura',
    label: 'Forma que acolhe',
    image: '/viverde/casa-04-suites/casa_04_suites_fachada.webp',
    video: '/videos/02.mp4',
    description: 'Projetos autorais com madeira nobre, iluminação natural e integração absoluta.',
  },
  {
    title: 'A paisagem',
    label: 'Serra, tempo e presença',
    image: '/localizacao/location_04_ciclismo_e_trilhas.webp',
    video: '/videos/03.mp4',
    description: 'Montanhas, trilhas, cachoeiras e o clima ameno que transformam qualquer rotina.',
  },
  {
    title: 'O cotidiano',
    label: 'Viver é estar aqui',
    image: '/localizacao/location_07_bar.webp',
    video: '/videos/04.mp4',
    description: 'Gastronomia refinada, adegas selecionadas e momentos inesquecíveis em família.',
  },
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
