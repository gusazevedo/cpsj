import { useState } from "react";
import outsideOne from "@/assets/externa/externa-1.jpeg";
import outsideTwo from "@/assets/externa/externa-2.jpeg";
import outsideThree from "@/assets/externa/externa-3.jpeg";
import insideOne from "@/assets/interna/interna - 1.jpeg";
import insideTwo from "@/assets/interna/interna - 2.jpeg";
import insideThree from "@/assets/interna/interna - 3.jpeg";
import auditorioOne from "@/assets/auditorio/auditorio-1.jpeg";
import auditorioTwo from "@/assets/auditorio/auditorio-2.jpeg";
import auditorioThree from "@/assets/auditorio/auditorio-3.jpeg";
import GalleryImageCard from "@/components/GalleryImageCard";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Área externa",
    images: [
      { src: outsideOne, alt: "Área externa 1" },
      { src: outsideTwo, alt: "Área externa 2" },
      { src: outsideThree, alt: "Área externa 3" },
    ],
  },
  {
    title: "Área interna",
    images: [
      { src: insideOne, alt: "Área interna 1" },
      { src: insideTwo, alt: "Área interna 2" },
      { src: insideThree, alt: "Área interna 3" },
    ],
  },
  {
    title: "Auditório",
    images: [
      { src: auditorioOne, alt: "Auditório 1" },
      { src: auditorioTwo, alt: "Auditório 2" },
      { src: auditorioThree, alt: "Auditório 3" },
    ],
  },
];

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <main className="min-h-screen bg-card">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">Galeria de fotos</h1>
          </div>

          {sections.map((section) => (
            <section key={section.title} className="space-y-6">
              <h2 className="text-3xl font-semibold text-foreground text-center md:text-left">{section.title}</h2>

              <div className="md:hidden -mx-4">
                <div
                  className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                  style={{ WebkitOverflowScrolling: "touch" }}
                >
                  {section.images.map((image) => (
                    <GalleryImageCard
                      key={image.alt}
                      src={image.src}
                      alt={image.alt}
                      title={image.alt}
                      className="flex-shrink-0 w-[80%] snap-center"
                      onClick={() => setSelectedImage(image.src)}
                    />
                  ))}
                </div>
              </div>

              <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
                {section.images.map((image) => (
                  <GalleryImageCard
                    key={image.alt}
                    src={image.src}
                    alt={image.alt}
                    title={image.alt}
                    onClick={() => setSelectedImage(image.src)}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <Footer />

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl w-full">
            <img src={selectedImage} alt="Imagem ampliada" className="w-full h-auto rounded-xl shadow-2xl" />
          </div>
        </div>
      )}
    </main>
  );
};

export default GalleryPage;

