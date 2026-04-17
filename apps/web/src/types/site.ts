export type ServiceItem = {
  title: string
  description: string
}

export type ContactLink = {
  label: string
  value: string
  href: string
}

export type TestimonialItem = {
  name: string
  role: string
  quote: string
}

export type PricingPlan = {
  title: string
  price: string
  description: string
  features: string[]
  featured?: boolean
}

export type GalleryItem = {
  title: string
  category: string
  imageUrl: string
  alt: string
}

export type TrustItem = {
  label: string
  value: string
}

export type SiteContent = {
  brandName: string
  professionalTitle: string
  publicLocation: string
  teachingLanguages: string
  linkedinUrl: string
  showLinkedIn: boolean

  heroTitle: string
  heroSubtitle: string
  heroDescription: string
  heroPrimaryButtonText: string
  heroSecondaryButtonText: string
  heroImageUrl: string
  heroImageAlt: string
  trustItems: TrustItem[]

  profileTitle: string
  profileDescription: string
  profileHighlights: string[]

  aboutTitle: string
  aboutDescription: string

  servicesTitle: string
  services: ServiceItem[]

  galleryTitle: string
  galleryDescription: string
  galleryItems: GalleryItem[]

  pricingTitle: string
  pricingDescription: string
  pricingPlans: PricingPlan[]

  testimonialsTitle: string
  testimonialsDescription: string
  testimonials: TestimonialItem[]

  contactTitle: string
  contactDescription: string
  contacts: ContactLink[]

  whatsappNumber: string
  whatsappMessage: string

  footerText: string
}