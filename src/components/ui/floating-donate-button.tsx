import { Button } from "@/components/ui/button";
import { HandHeart } from "lucide-react";

const FloatingDonateButton = () => {
  const scrollToDonations = () => {
    const donationsSection = document.getElementById("donations");
    if (donationsSection) {
      donationsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <button
      onClick={scrollToDonations}
      className="flex items-center justify-center fixed bottom-6 right-6 z-50 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 h-14 px-6 gap-2 bg-primary text-primary-foreground hover:bg-primary/90"
    >
      <HandHeart className="w-6 h-6 text-white" />
      <span className="font-semibold">Doe agora</span>
    </button>
  );
};

export default FloatingDonateButton;

