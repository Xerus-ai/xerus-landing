import BentoBg from './BentoBg';

const memories = [
  { text: 'Prefers concise emails', x: 10, y: 12 },
  { text: 'Weekly standup: Mon 9AM', x: 55, y: 25 },
  { text: 'Uses Next.js + Tailwind', x: 8, y: 45 },
  { text: 'Budget cap: $5k/mo', x: 50, y: 58 },
  { text: 'Tone: professional, warm', x: 20, y: 75 },
];

export default function MemoryBubblesBg() {
  return (
    <BentoBg>
      {memories.map((m, i) => (
        <div
          key={m.text}
          className="absolute animate-drift"
          style={{
            left: `${m.x}%`,
            top: `${m.y}%`,
            animationDelay: `${i * 1.2}s`,
            animationDuration: `${5 + i * 0.8}s`,
          }}
        >
          <span className="inline-block text-[10px] font-medium text-text-primary bg-white/60 px-3 py-1.5 rounded-full whitespace-nowrap shadow-sm border border-cream-active/40">
            {m.text}
          </span>
        </div>
      ))}
    </BentoBg>
  );
}
