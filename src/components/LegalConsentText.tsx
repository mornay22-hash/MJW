import { Link } from "react-router-dom";

interface LegalConsentTextProps {
  className?: string;
}

const LegalConsentText = ({ className = "" }: LegalConsentTextProps) => (
  <p className={`text-muted-foreground text-xs leading-relaxed ${className}`}>
    By creating an account or continuing, you agree to the{" "}
    <Link to="/terms-of-service" className="text-teal underline underline-offset-2 hover:text-foreground transition-colors">Terms of Service</Link>{" "}
    and acknowledge the{" "}
    <Link to="/data-privacy" className="text-teal underline underline-offset-2 hover:text-foreground transition-colors">Data & Privacy Notice</Link>.
  </p>
);

export default LegalConsentText;
