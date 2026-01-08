import { ReactNode } from "react";

interface LinkButtonProps {
  href: string;
  icon: ReactNode;
  label: string;
}

const LinkButton = ({ href, icon, label }: LinkButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-3 w-full py-3 px-6 border border-border bg-secondary/50 text-foreground rounded-sm transition-all duration-300 hover:bg-foreground hover:text-background hover:border-foreground"
    >
      <span className="w-5 h-5">{icon}</span>
      <span className="text-sm uppercase tracking-widest font-medium">{label}</span>
    </a>
  );
};

export default LinkButton;
