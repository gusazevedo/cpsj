import { Link } from "react-router-dom";
import { ArrowLeft } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link to="/" className="flex items-center justify-center gap-2">
                        <ArrowLeft className="w-8 h-8 text-primary" />
                        <span className="text-lg font-bold">Voltar ao início</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export { Navbar };