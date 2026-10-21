type IconProps = { className?: string };

export function WrenchIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.5 2.5-2-2 2.5-2.5Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BoltIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function FanIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <circle cx="12" cy="12" r="2.2" />
      <path d="M12 9.8c0-3 1.5-6.3 4-6.8 2 1 2.5 4 .7 6.3M12 14.2c0 3-1.5 6.3-4 6.8-2-1-2.5-4-.7-6.3M9.8 12c-3 0-6.3-1.5-6.8-4 1-2 4-2.5 6.3-.7M14.2 12c3 0 6.3 1.5 6.8 4-1 2-4 2.5-6.3.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HammerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className={className}>
      <path d="m14.5 6.5 3 3L8 19l-3-3L14.5 6.5Z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17.5 3.5 20.5 6.5 18 9l-3-3 2.5-2.5Z" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export const iconMap: Record<string, (props: IconProps) => React.ReactElement> = {
  wrench: WrenchIcon,
  bolt: BoltIcon,
  fan: FanIcon,
  hammer: HammerIcon,
};
