import { cn } from "@/lib/utils";

type GalleryImageCardProps = {
  src: string;
  alt: string;
  title?: string;
  className?: string;
  onClick?: () => void;
};

const GalleryImageCard = ({ src, alt, title = alt, className, onClick }: GalleryImageCardProps) => (
  <div
    className={cn("group", onClick && "cursor-pointer", className)}
    onClick={onClick}
  >
    <div className="relative overflow-hidden rounded-xl shadow-[var(--shadow-soft)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
      <img
        src={src}
        alt={alt}
        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
      />
      {title && (
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-primary-foreground font-semibold text-lg">{title}</h3>
          </div>
        </div>
      )}
    </div>
  </div>
);

export default GalleryImageCard;

