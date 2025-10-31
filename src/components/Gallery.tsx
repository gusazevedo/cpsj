import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import { useState } from "react";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: gallery1, alt: "Fachada externa do Centro Pastoral", title: "Vista Externa" },
    { src: gallery2, alt: "Interior do salão principal", title: "Salão de Reuniões" },
    { src: gallery3, alt: "Vista aérea do complexo", title: "Vista Aérea" },
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Galeria do Projeto</h2>
            <p className="text-lg text-muted-foreground">
              Visualizações 3D e simulações do Centro Pastoral São José
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div 
                key={index}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
                  <img 
                    src={image.src} 
                    alt={image.alt}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-primary-foreground font-semibold text-lg">{image.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl w-full">
            <img 
              src={selectedImage} 
              alt="Imagem ampliada"
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
