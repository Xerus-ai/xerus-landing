import BentoBg from './BentoBg';

const files = [
  { name: 'Q4 Strategy.pdf', color: '#EF4444' },
  { name: 'Brand Guide.docx', color: '#3B82F6' },
  { name: 'Leads.csv', color: '#10B981' },
  { name: 'Pitch Deck.pptx', color: '#F59E0B' },
  { name: 'API Docs.md', color: '#6366F1' },
  { name: 'Roadmap.xlsx', color: '#10B981' },
];

const doubled = [...files, ...files];

export default function KnowledgeDriveBg() {
  return (
    <BentoBg>
      <div className="absolute inset-0 flex items-center">
        <div className="flex gap-3 animate-file-marquee" style={{ width: 'max-content' }}>
          {doubled.map((file, i) => (
            <div
              key={`${file.name}-${i}`}
              className="flex items-center gap-2 bg-white/60 rounded-lg px-3 py-2.5 border border-cream-active/30 shrink-0 shadow-sm"
            >
              <div
                className="w-2.5 h-2.5 rounded-sm shrink-0"
                style={{ backgroundColor: file.color }}
              />
              <span className="text-[11px] font-medium text-text-primary whitespace-nowrap">
                {file.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </BentoBg>
  );
}
