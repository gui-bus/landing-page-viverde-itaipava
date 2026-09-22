export interface GalleryItem {
  src: string
  alt: string
  tag?: string
}

export interface PlaceItem {
  number: string
  title: string
  text: string
  src: string
  alt: string
}

export interface FilmItem {
  title: string
  label: string
  image: string
}

export interface ProjectCategory {
  id: string
  label: string
}

export interface ProjectImageItem {
  category: string
  tag: string
  title: string
  text: string
  src: string
  alt: string
}
