import About from "@/components/about/about";
import Contact from "@/components/contact/contact";
import FAQs from "@/components/faq/faq";
import Gallery from "@/components/gallery/gallery";
import HeroSection from "@/components/heroSection/heroSection";
import BlogSection from "@/components/others/blog-posts";
import BookingCTASection from "@/components/others/booking-cta-section";
import EventsPromotionsSection from "@/components/others/events";
import PricingSection from "@/components/others/pricing-section";
import Services from "@/components/services/services";
import Testimonials from "@/components/testimonials/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div >
      <HeroSection />
      <About />
      <Services />
      <PricingSection />
      <Gallery />
      <EventsPromotionsSection />
      <BlogSection />
      <Testimonials />
      <FAQs />
      <Contact />
      <BookingCTASection />
    </div>
  );
}
