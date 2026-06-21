import { cn } from "@/lib/utils";

export type PlatformStatus = "live" | "final-testing" | "closed-testing" | "internal" | "pilot" | "coming-soon";

const statusConfig: Record<PlatformStatus, { label: string; className: string; dotClassName: string }> = {
  live: {
    label: "Live",
    className: "bg-teal/10 text-teal border-teal/20",
    dotClassName: "bg-teal",
  },
  "final-testing": {
    label: "Final Testing",
    className: "bg-accent/10 text-accent border-accent/20",
    dotClassName: "bg-accent",
  },
  "closed-testing": {
    label: "Closed Testing",
    className: "bg-orange/10 text-orange border-orange/20",
    dotClassName: "bg-orange",
  },
  internal: {
    label: "Internal Platform",
    className: "bg-muted text-muted-foreground border-border",
    dotClassName: "bg-muted-foreground/50",
  },
  pilot: {
    label: "Pilot",
    className: "bg-blue-accent/10 text-blue-accent border-blue-accent/20",
    dotClassName: "bg-blue-accent",
  },
  "coming-soon": {
    label: "Coming Soon",
    className: "bg-muted text-muted-foreground/70 border-border",
    dotClassName: "bg-muted-foreground/50",
  },
};

interface StatusBadgeProps {
  status: PlatformStatus;
  customLabel?: string;
  className?: string;
}

const StatusBadge = ({ status, customLabel, className }: StatusBadgeProps) => {
  const config = statusConfig[status];
  return (
    <span
      className={cn(
        "text-xs px-3 py-1 rounded-full font-semibold border inline-flex items-center gap-1.5 whitespace-nowrap leading-none shrink-0",
        config.className,
        className
      )}
    >
      <span className={cn("w-1.5 h-1.5 rounded-full", config.dotClassName)} />
      {customLabel || config.label}
    </span>
  );
};

export default StatusBadge;
