import Asterisk from "@/components/asterisk";

export default function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];

  return (
    <div
      className="overflow-hidden border-y border-ink/15 py-4"
      aria-hidden="true"
    >
      <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
        {row.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center gap-7 pr-7 text-[0.7rem] uppercase tracking-[0.22em] text-ink/65"
          >
            {item}
            <Asterisk className="h-3 w-3 shrink-0 text-terracotta/80" />
          </span>
        ))}
      </div>
    </div>
  );
}
