import BentoBg from './BentoBg';

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];

// Days in the month grid (5 weeks). 0 = empty, number = day of month.
const WEEKS = [
  [0, 0, 0, 0, 1, 2, 3],
  [4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 29, 30, 0],
];

// Days with scheduled agent activity (pulse on these)
const ACTIVE_DAYS = new Set([3, 5, 8, 10, 12, 15, 17, 19, 22, 24, 26, 29]);
// "Today"
const TODAY = 15;

export default function SchedulePulseBg() {
  return (
    <BentoBg>
      <div className="absolute inset-0 flex items-start justify-center pt-8 px-4">
        <div className="w-full max-w-[200px] bg-white/50 rounded-2xl p-3 shadow-sm border border-cream-active/30">
          {/* Month header */}
          <div className="flex items-center justify-between mb-2 px-1">
            <span className="text-[10px] font-semibold text-text-primary">February 2026</span>
            <div className="flex gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-accent" />
              <div className="w-1.5 h-1.5 rounded-full bg-accent/30" />
            </div>
          </div>

          {/* Day headers */}
          <div className="grid grid-cols-7 gap-0.5 mb-1">
            {DAYS.map((d, i) => (
              <div key={i} className="text-center text-[7px] font-medium text-text-muted py-0.5">
                {d}
              </div>
            ))}
          </div>

          {/* Calendar grid */}
          {WEEKS.map((week, wi) => (
            <div key={wi} className="grid grid-cols-7 gap-0.5">
              {week.map((day, di) => {
                if (day === 0) return <div key={di} />;
                const isActive = ACTIVE_DAYS.has(day);
                const isToday = day === TODAY;
                return (
                  <div
                    key={di}
                    className={`
                      relative flex items-center justify-center rounded-md py-0.5
                      text-[8px] font-medium
                      ${isToday ? 'bg-accent text-white' : isActive ? 'text-text-primary' : 'text-text-muted'}
                    `}
                  >
                    {day}
                    {isActive && !isToday && (
                      <span className="absolute bottom-0 w-1 h-1 rounded-full bg-accent animate-fade-cycle"
                        style={{ animationDelay: `${(day % 5) * 0.6}s` }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </BentoBg>
  );
}
