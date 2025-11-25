import saoJoseImage from "@/assets/sao-jose.jpg";
import { Building2, Heart, Users } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Sobre o Projeto</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            O Centro Pastoral São José será construído em uma de nossas 10 capelas, criando um espaço dedicado ao acolhimento, formação e encontro de movimento e pastorais da nossa comunidade paroquial.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 rounded-lg bg-secondary/30 transition-all hover:shadow-[var(--shadow-soft)]">
                <Building2 className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Infraestrutura</h3>
                  <p className="text-muted-foreground">
                    Espaços amplos para atividades pastorais, reuniões, catequese e eventos comunitários.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-lg bg-secondary/30 transition-all hover:shadow-[var(--shadow-soft)]">
                <Heart className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Acolhimento</h3>
                  <p className="text-muted-foreground">
                    Um lugar de encontro, oração e serviço, aberto a todos que buscam crescer na fé.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 rounded-lg bg-secondary/30 transition-all hover:shadow-[var(--shadow-soft)]">
                <Users className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">Comunidade</h3>
                  <p className="text-muted-foreground">
                    Fortalecer os laços fraternos e promover ações solidárias em nossa paróquia.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-soft)]">
                <img 
                  src={saoJoseImage} 
                  alt="São José, padroeiro do Centro Pastoral" 
                  className="w-full h-auto"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-muted-foreground italic">
                  São José, nosso padroeiro, modelo de trabalho e dedicação
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
