import { SiTiktok, SiX, SiGoogledrive } from "react-icons/si";

export { SiTiktok, SiX, SiGoogledrive };

/**
 * 4-pointed gothic sparkle star (✦) used across the AlternaVale page.
 */
export function Sparkle({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0c.9 6.9 4.2 10.2 12 12-7.8 1.8-11.1 5.1-12 12-.9-6.9-4.2-10.2-12-12C7.8 10.2 11.1 6.9 12 0Z" />
    </svg>
  );
}

/**
 * Smaller companion sparkle with thinner points.
 */
export function SparkleSmall({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2c.7 5.2 3.2 7.7 10 10-6.8 2.3-9.3 4.8-10 10-.7-5.2-3.2-7.7-10-10 6.8-2.3 9.3-4.8 10-10Z" />
    </svg>
  );
}
