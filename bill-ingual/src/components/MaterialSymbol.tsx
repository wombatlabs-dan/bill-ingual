interface MaterialSymbolProps {
  icon: string;
  className?: string;
  filled?: boolean;
}

export default function MaterialSymbol({
  icon,
  className = "",
  filled = false,
}: MaterialSymbolProps) {
  const fill = filled ? 1 : 0;
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      data-icon={icon}
      style={{ fontVariationSettings: `'FILL' ${fill}, 'wght' 300, 'GRAD' 0, 'opsz' 24` }}
    >
      {icon}
    </span>
  );
}