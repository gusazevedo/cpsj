import { Church, Mail, MapPin, Phone, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Church className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">Paróquia Mãe Santíssima</h3>
              </div>
              <p className="text-sm text-muted-foreground">
                Uma comunidade de fé, esperança e caridade, dedicada a servir e acolher a todos.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Contato</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                  <span>R. L, Lot. Expedicionários I, 417 - Parque Dois Irmãos, Fortaleza - CE</span>
                </div>
                {/* <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>(00) 0000-0000</span>
                </div> */}
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>cpms.saojose@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Instagram className="w-4 h-4 flex-shrink-0" />
                  <a href="https://www.instagram.com/cpsaojoseoperario/" target="_blank" rel="noopener noreferrer"><span>cpsaojoseoperario</span></a>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Centro Pastoral São José</h3>
              <p className="text-sm text-muted-foreground mb-3">
                Um projeto da nossa comunidade para fortalecer a fé e o serviço.
              </p>
              <p className="text-xs text-muted-foreground italic">
                "São José, rogai por nós e pela obra que realizamos em vosso nome."
              </p>
            </div>
          </div>

          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Paróquia Mãe Santíssima. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
