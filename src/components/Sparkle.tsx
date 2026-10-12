interface SparkleProps {
  className?: string;
  size?: number;
  delay?: number;
}

export function Sparkle({ className = '', size = 24, delay = 0 }: SparkleProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`pointer-events-none animate-twinkle text-accent-soft ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <path
        d="M12 0 L13.5 9.5 L23 11 L13.5 12.5 L12 22 L10.5 12.5 L1 11 L10.5 9.5 Z"
        fill="currentColor"
      />
    </svg>
  );
}
