import Hero from "@/components/Hero";
import About from "@/components/About";
import Progress from "@/components/Progress";
import Gallery from "@/components/Gallery";
import Donations from "@/components/Donations";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Progress />
      <Gallery />
      <Donations />
      <Footer />
    </main>
  );
};

export default Index;
