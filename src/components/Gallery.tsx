import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import { useRef, useState } from "react";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import GalleryImageCard from "@/components/GalleryImageCard";
import auditorioOne from "@/assets/auditorio/auditorio-1.jpeg";
import auditorioTwo from "@/assets/auditorio/auditorio-2.jpeg";
import insideOne from "@/assets/interna/interna - 1.jpeg";
import insideTwo from "@/assets/interna/interna - 2.jpeg";
import outsideOne from "@/assets/externa/externa-1.jpeg";
import outsideTwo from "@/assets/externa/externa-2.jpeg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    const container = carouselRef.current;
    if (!container) return;
    const scrollAmount = container.clientWidth * 0.8;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  const images = [
    { src: auditorioOne, alt: "Auditório 1", title: "Auditório 1" },
    { src: insideTwo, alt: "Área interna 2", title: "Área interna 2" },
    { src: auditorioTwo, alt: "Auditório 2", title: "Auditório 2" },
    { src: outsideTwo, alt: "Área externa 2", title: "Área externa 2" },
    { src: insideOne, alt: "Área interna 1", title: "Área interna 1" },
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

          <div className="relative -mx-4">
            <div 
              ref={carouselRef}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 md:px-6 lg:px-8 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              style={{ WebkitOverflowScrolling: "touch" }}
            >
              {images.map((image, index) => (
                <GalleryImageCard
                  key={`${image.alt}-${index}`}
                  src={image.src}
                  alt={image.alt}
                  title={image.title}
                  className="flex-shrink-0 snap-center w-[80%] md:w-[45%] lg:w-[30%]"
                  onClick={() => setSelectedImage(image.src)}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => scrollCarousel("left")}
              className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg hover:bg-background transition-colors w-12 h-12"
              aria-label="Imagem anterior"
            >
              <ArrowBigLeft />
            </button>

            <button
              type="button"
              onClick={() => scrollCarousel("right")}
              className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-background/90 text-foreground shadow-lg hover:bg-background transition-colors w-12 h-12"
              aria-label="Próxima imagem"
            >
              <ArrowBigRight />
            </button>
          </div>

          <div className="mt-10 flex justify-center">
            <Button size="lg" asChild>
              <Link to="/galeria">Ver galeria completa</Link>
            </Button>
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
