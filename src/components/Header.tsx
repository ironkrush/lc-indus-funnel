import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">SGE</span>
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-primary">
                Shree Ganesh Enterprise
              </h1>
              <p className="text-xs text-muted-foreground">Industrial Workforce Solutions</p>
            </div>
          </div>
          
          <a 
            href="tel:+919979623217"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">+91 99796 23217</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
