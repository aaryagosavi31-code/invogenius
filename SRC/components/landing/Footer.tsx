import { Github, Mail } from "lucide-react";

const Footer = () => (
  <footer className="glass-card mt-12 border-t border-b-0 border-x-0 rounded-none py-12">
    <div className="container mx-auto px-4">
      <div className="grid gap-8 sm:grid-cols-3">
        <div>
          <h3 className="gradient-text mb-2 text-xl font-bold">EduNOVA</h3>
          <p className="text-sm text-muted-foreground">
            Smart Student Onboarding Agent for Engineering Colleges
          </p>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-foreground">Team</h4>
          <p className="text-sm text-muted-foreground">Team EduNOVA</p>
          <p className="text-sm text-muted-foreground">National Level Hackathon 2026</p>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-foreground">Contact</h4>
          <div className="flex flex-col gap-2">
            <a href="mailto:team@edunova.ai" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
              <Mail className="h-4 w-4" /> team@edunova.ai
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary">
              <Github className="h-4 w-4" /> GitHub Repository
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
        © 2026 EduNOVA. Built with ❤️ for better student experiences.
      </div>
    </div>
  </footer>
);

export default Footer;
