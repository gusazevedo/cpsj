// import { Button } from "@/components/ui/button";
import { HandHeart, QrCode } from "lucide-react";

const Donations = () => {
  return (
    <section id="donations" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Como Contribuir</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sua doação é fundamental para tornar realidade o Centro Pastoral São José. 
              Toda contribuição, grande ou pequena, faz diferença.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-card shadow-[var(--shadow-soft)] border border-border">
              <div className="flex items-center gap-3 mb-6">
                <QrCode className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">PIX</h3>
              </div>
              <div className="bg-secondary/30 rounded-xl p-8 mb-6 flex items-center justify-center min-h-[280px]">
                <div className="text-center">
                  <QrCode className="w-48 h-48 mx-auto text-muted-foreground mb-4" />
                  <p className="text-sm text-muted-foreground">QR Code para doação via PIX</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                Escaneie o QR Code acima com o app do seu banco
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-card shadow-[var(--shadow-soft)] border border-border">
              <div className="flex items-center gap-3 mb-6">
                <HandHeart className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-semibold text-foreground">Outras Formas</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Transferência Bancária</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>Banco: [Nome do Banco]</p>
                    <p>Agência: [Número]</p>
                    <p>Conta: [Número]</p>
                    <p>CNPJ: [Número do CNPJ]</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border">
                  <h4 className="font-semibold text-foreground mb-2">Doação Presencial</h4>
                  <p className="text-sm text-muted-foreground mb-4">
                    Você também pode fazer sua contribuição diretamente na secretaria paroquial.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    <strong>Horário:</strong> Segunda a Sexta, 9h às 17h
                  </p>
                </div>

                {/* <Button className="w-full mt-6" size="lg">
                  <Heart className="w-5 h-5 mr-2" />
                  Fazer uma Doação
                </Button> */}
              </div>
            </div>
          </div>

          <div className="mt-12 p-6 rounded-xl bg-accent/20 border border-accent/30 text-center">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Transparência:</strong> Todas as doações serão utilizadas exclusivamente para a construção do Centro Pastoral São José. 
              Relatórios financeiros serão disponibilizados periodicamente nesta página.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donations;
