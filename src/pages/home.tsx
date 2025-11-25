import Hero from "@/components/Hero";
import About from "@/components/About";
import Progress from "@/components/Progress";
import Gallery from "@/components/Gallery";
import Donations from "@/components/Donations";
import Footer from "@/components/Footer";
import FloatingDonateButton from "@/components/ui/floating-donate-button";

const HomePage = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Progress />
      <Gallery />
      <Donations />
      <Footer />
      <FloatingDonateButton />
    </main>
  );
};

export default HomePage;
