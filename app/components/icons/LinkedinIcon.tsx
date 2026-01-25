interface IconProps {
  className?: string;
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zm-11 19H5V9h3v10zM6.5 7.732C5.534 7.732 4.75 6.942 4.75 5.968S5.534 4.204 6.5 4.204s1.75.79 1.75 1.764-.784 1.764-1.75 1.764zM20 19h-3v-5.604c0-1.337-.027-3.064-1.868-3.064-1.868 0-2.154 1.46-2.154 2.968V19h-3V9h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.037 0 3.6 2 3.6 4.604V19z" />
    </svg>
  );
}
