import { Progress as ProgressBar } from "@/components/ui/progress";
import { CheckCircle2, Circle, Clock } from "lucide-react";

const Progress = () => {
  const progress = 10; // Progresso atual da obra em %
  
  const milestones = [
    { phase: "Planejamento e Projeto", status: "in-progress", date: "Em andamento" },
    { phase: "Licenças e Aprovações", status: "pending", date: "Próxima etapa" },
    { phase: "Preparação do Terreno", status: "pending", date: "Aguardando" },
    { phase: "Fundação", status: "pending", date: "Aguardando" },
    { phase: "Estrutura", status: "pending", date: "Aguardando" },
    { phase: "Acabamento", status: "pending", date: "Aguardando" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Progresso da Obra</h2>
            <p className="text-lg text-muted-foreground">
              Acompanhe cada etapa da construção do Centro Pastoral São José
            </p>
          </div>

          <div className="mb-16 p-8 rounded-2xl bg-card shadow-[var(--shadow-soft)]">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-foreground">Andamento Geral</span>
              <span className="text-3xl font-bold text-primary">{progress}%</span>
            </div>
            <ProgressBar value={progress} className="h-4" />
            <p className="text-sm text-muted-foreground mt-4 text-center">
              Última atualização: {new Date().toLocaleDateString('pt-BR')}
            </p>
          </div>

          <div className="space-y-4">
            {milestones.map((milestone, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-[var(--shadow-soft)] transition-all"
              >
                {milestone.status === 'completed' && (
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                )}
                {milestone.status === 'in-progress' && (
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1 animate-pulse" />
                )}
                {milestone.status === 'pending' && (
                  <Circle className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-1" />
                )}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-1">{milestone.phase}</h3>
                  <p className="text-sm text-muted-foreground">{milestone.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Progress;
