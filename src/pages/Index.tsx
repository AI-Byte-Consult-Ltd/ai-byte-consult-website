import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Ecosystem from "@/components/Ecosystem";
import Projects from "@/components/Projects";
import AutomationConstructor from "@/components/AutomationConstructor";
import TelegramProducts from "@/components/TelegramProducts";
import Testimonials from "@/components/Testimonials";
import Team from "@/components/Team";
import Contact from "@/components/Contact";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Ecosystem />
      <Projects />
      <AutomationConstructor />
      <TelegramProducts />
      <Testimonials />
      <Team />
      <Contact />
      <Newsletter />
      <Footer />
    </main>
  );
};

export default Index;