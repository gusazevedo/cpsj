import heroImage from "@/assets/hero-image.jpg";
import { Church } from "lucide-react";
import churchLogo from "@/assets/logo.svg";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/85 to-background/95" />
      </div>
      
      <div className="container relative z-10 mx-auto px-4 py-20 text-center">
        <div className="flex justify-center mb-6 animate-fade-in">
          {/* <Church className="w-16 h-16 text-primary" /> */}
          <img src={churchLogo} alt="Centro Pastoral São José" className="h-[400px]" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground animate-slide-up">
          Centro Pastoral São José
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto animate-slide-up" style={{ animationDelay: "0.1s" }}>
          Paróquia Mãe Santíssima
        </p>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: "0.2s" }}>
          Acompanhe o progresso da construção do nosso novo espaço de acolhimento e fé
        </p>
      </div>
    </section>
  );
};

export default Hero;
