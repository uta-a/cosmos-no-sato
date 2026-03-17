import Header from './components/layout/Header';
import HeroSection from './components/sections/HeroSection';
import FeaturesSection from './components/sections/FeaturesSection';
import DailyScheduleSection from './components/sections/DailyScheduleSection';
import FlowSection from './components/sections/FlowSection';
import CompanySection from './components/sections/CompanySection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/layout/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DailyScheduleSection />
        <FlowSection />
        <CompanySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
