import FeaturesSection from "./components/FeaturesSection";
import HeaderMain from "./components/HeaderMain";
import HeroSection from "./components/HeroSection";
import Testimonial from "./components/Testimoinal";

export default function Home() {
  return (
    <div>
      <HeaderMain />
      <HeroSection/>
      <FeaturesSection />
      <Testimonial />
    </div>
  );
}
