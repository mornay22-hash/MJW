import { Link } from "react-router-dom";

interface ProductLegalNoticeProps {
  productName?: string;
  className?: string;
}

const ProductLegalNotice = ({ productName, className = "" }: ProductLegalNoticeProps) => (
  <div className={`text-muted-foreground text-xs leading-relaxed ${className}`}>
    <p>
      {productName ? `${productName} forms` : "This product forms"} part of the MJW Group ecosystem and is subject to the MJW Group{" "}
      <Link to="/legal-notice" className="text-teal underline underline-offset-2 hover:text-foreground transition-colors">Legal Notice</Link>,{" "}
      <Link to="/terms-of-service" className="text-teal underline underline-offset-2 hover:text-foreground transition-colors">Terms of Service</Link>, and{" "}
      <Link to="/data-privacy" className="text-teal underline underline-offset-2 hover:text-foreground transition-colors">Data & Privacy Notice</Link>.
      {" "}Where a product has additional feature-specific, subscription-specific, data-specific, or workflow-specific rules, those apply together with the group-wide legal framework.
    </p>
  </div>
);

export default ProductLegalNotice;
