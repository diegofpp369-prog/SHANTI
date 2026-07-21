import type { ReactNode } from "react";

export function Section({
  eyebrow,
  title,
  intro,
  children,
  className = "",
  center = false,
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  children?: ReactNode;
  className?: string;
  center?: boolean;
}) {
  return (
    <section className={`mx-auto max-w-7xl px-6 py-24 md:py-32 lg:px-10 ${className}`}>
      {(eyebrow || title || intro) && (
        <div className={`max-w-3xl ${center ? "mx-auto text-center" : ""}`}>
          {eyebrow && <div className="eyebrow mb-6">{eyebrow}</div>}
          {title && (
            <h2 className="font-display text-4xl leading-[1.05] md:text-6xl">
              {title}
            </h2>
          )}
          {intro && (
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {intro}
            </p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}
