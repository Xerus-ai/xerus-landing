'use client';

import { m } from 'framer-motion';
import { staggerSlideIn, slideFromLeft } from '@/lib/variants';
import BentoBg from './BentoBg';

const lines = [
  { prefix: '>', text: 'Read("src/api/auth.ts")' },
  { prefix: '>', text: 'Grep("validateToken")' },
  { prefix: '>', text: 'Edit("auth.ts", line 42)' },
  { prefix: '>', text: 'Bash("npm test")' },
  { prefix: '$', text: 'All tests passed' },
];

export default function ExecutionTraceBg() {
  return (
    <BentoBg>
      <m.div
        className="absolute inset-0 flex flex-col gap-2 p-5 pt-8 font-mono"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerSlideIn}
      >
        {lines.map((line, i) => (
          <m.div
            key={i}
            className="flex items-center gap-2"
            variants={slideFromLeft}
          >
            <span className="text-accent text-xs font-bold">{line.prefix}</span>
            <span className="text-xs text-text-primary truncate">{line.text}</span>
            {i === lines.length - 1 && (
              <span className="w-2 h-4 bg-accent animate-blink-cursor inline-block ml-0.5" />
            )}
          </m.div>
        ))}
      </m.div>
    </BentoBg>
  );
}
