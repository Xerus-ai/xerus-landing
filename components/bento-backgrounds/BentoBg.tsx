interface BentoBgProps {
  children: React.ReactNode;
  className?: string;
}

export default function BentoBg({ children, className }: BentoBgProps) {
  return (
    <div className={`bento-bg ${className ?? ''}`} aria-hidden="true">
      {children}
    </div>
  );
}
