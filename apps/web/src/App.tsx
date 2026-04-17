import Footer from './components/Footer'
import TrustBar from './components/TrustBar'
import WhatsAppButton from './components/WhatsAppButton'
import { siteContent } from './data/siteContent'
import MainLayout from './layouts/MainLayout'
import ContactSection from './sections/ContactSection'
import GallerySection from './sections/GallerySection'
import HeroSection from './sections/HeroSection'
import PricingSection from './sections/PricingSection'
import ProfileSection from './sections/ProfileSection'
import ServicesSection from './sections/ServicesSection'
import TestimonialsSection from './sections/TestimonialsSection'

function App() {
  return (
    <MainLayout brandName={siteContent.brandName}>
      <HeroSection
        title={siteContent.heroTitle}
        subtitle={siteContent.heroSubtitle}
        description={siteContent.heroDescription}
        primaryButtonText={siteContent.heroPrimaryButtonText}
        secondaryButtonText={siteContent.heroSecondaryButtonText}
        imageUrl={siteContent.heroImageUrl}
        imageAlt={siteContent.heroImageAlt}
        location={siteContent.publicLocation}
      />

      <TrustBar items={siteContent.trustItems} />

      <GallerySection
        title={siteContent.galleryTitle}
        description={siteContent.galleryDescription}
        items={siteContent.galleryItems}
      />

      <ProfileSection
        title={siteContent.profileTitle}
        description={siteContent.profileDescription}
        highlights={siteContent.profileHighlights}
        location={siteContent.publicLocation}
        languages={siteContent.teachingLanguages}
        linkedinUrl={siteContent.linkedinUrl}
        showLinkedIn={siteContent.showLinkedIn}
      />

      <ServicesSection
        title={siteContent.servicesTitle}
        services={siteContent.services}
      />

      <PricingSection
        title={siteContent.pricingTitle}
        description={siteContent.pricingDescription}
        plans={siteContent.pricingPlans}
      />

      <TestimonialsSection
        title={siteContent.testimonialsTitle}
        description={siteContent.testimonialsDescription}
        testimonials={siteContent.testimonials}
      />

      <ContactSection
        title={siteContent.contactTitle}
        description={siteContent.contactDescription}
        contacts={siteContent.contacts}
      />

      <Footer
        brandName={siteContent.brandName}
        footerText={siteContent.footerText}
      />

      <WhatsAppButton
        phoneNumber={siteContent.whatsappNumber}
        message={siteContent.whatsappMessage}
      />
    </MainLayout>
  )
}

export default App