interface SectionLabelProps {
    children: React.ReactNode;
    className?: string;
}

export function SectionLabel({ children, className = "" }: SectionLabelProps) {
    return (
        <div className={`inline-flex items-center gap-3 mb-6 ${className}`}>
            <span className="text-xs font-light uppercase tracking-[0.2em] text-text-dark-muted">
                {children}
            </span>
        </div>
    );
}
