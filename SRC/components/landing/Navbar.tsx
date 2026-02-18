import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 backdrop-blur-xl bg-background/60">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <Link to="/" className="gradient-text text-xl font-bold tracking-tight">
          EduNOVA
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <a href="#features" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Features</a>
          <Link to="/login" className="text-sm text-muted-foreground transition-colors hover:text-foreground">Login</Link>
          <Link to="/register" className="glow-button px-4 py-2 text-sm">Get Started</Link>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground">
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/50 bg-background/95 backdrop-blur-xl md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-4">
            <a href="#features" onClick={() => setOpen(false)} className="text-sm text-muted-foreground">Features</a>
            <Link to="/login" onClick={() => setOpen(false)} className="text-sm text-muted-foreground">Login</Link>
            <Link to="/register" onClick={() => setOpen(false)} className="glow-button inline-block px-4 py-2 text-center text-sm">Get Started</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
