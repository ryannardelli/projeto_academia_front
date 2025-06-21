import BackToTop from "./components/BackToTop";
import FeaturesSection from "./components/FeaturesSection";
import Footer from "./components/Footer";
import HeaderMain from "./components/HeaderMain";
import HeroTwoSection from "./components/HeorTwoSection";
import HeroSection from "./components/HeroSection";
import OnlineAcademySection from "./components/OnlineAcademySection";
import Testimonial from "./components/Testimoinal";

export default function Home() {
  return (
    <div>
      <HeaderMain />
      <HeroSection/>
      <FeaturesSection />
      <OnlineAcademySection />
      <Testimonial />
      <HeroTwoSection />
      <Footer />
      <BackToTop />
    </div>
  );
}
