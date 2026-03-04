import { AppShell } from "@/components/app-shell"
import { UnifiedParallaxSection } from "@/components/unified-parallax-section"
import { ScrollHeader } from "@/components/scroll-header"
import { SalesLoungeGallery } from "@/components/sales-lounge-gallery"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { StatsSection } from "@/components/stats-section"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { ClientsSection } from "@/components/clients-section"
import { Footer } from "@/components/footer"
import { SmoothScroll } from "@/components/smooth-scroll"
import { PageTransition } from "@/components/page-transition"

export default function Page() {
  return (
    <SmoothScroll>
      <PageTransition />
      <ScrollHeader />
      <AppShell />
      <UnifiedParallaxSection />
      <SalesLoungeGallery />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <TeamSection />
      <TestimonialsSection />
      <ClientsSection />
      <Footer />
    </SmoothScroll>
  )
}
