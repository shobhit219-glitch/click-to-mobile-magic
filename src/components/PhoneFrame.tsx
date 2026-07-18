import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

/**
 * Realistic phone bezel used to frame the embedded Wandr app.
 * Matches the prototype's rounded shell + shadow language.
 */
export function PhoneFrame({ children, className = "" }: Props) {
  return (
    <div
      className={`relative mx-auto w-full max-w-[420px] ${className}`}
      style={{ aspectRatio: "9 / 19.5" }}
    >
      {/* Outer bezel */}
      <div
        className="absolute inset-0 rounded-[44px] bg-ink p-[10px]"
        style={{
          boxShadow:
            "0 40px 90px -20px oklch(0.24 0.05 265 / 0.45), 0 0 0 2px oklch(0.24 0.05 265 / 0.9), inset 0 0 0 1px oklch(1 0 0 / 0.05)",
        }}
      >
        {/* Inner screen */}
        <div className="relative h-full w-full overflow-hidden rounded-[36px] bg-paper">
          {/* Notch */}
          <div className="pointer-events-none absolute left-1/2 top-2 z-30 h-6 w-28 -translate-x-1/2 rounded-full bg-ink" />
          {children}
        </div>
      </div>
    </div>
  );
}
