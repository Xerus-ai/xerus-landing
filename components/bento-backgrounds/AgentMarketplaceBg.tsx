'use client';

import { m } from 'framer-motion';
import { staggerSlideIn, slideFromRight } from '@/lib/variants';
import BentoBg from './BentoBg';

const agents = [
  { name: 'Research', color: '#FF6600' },
  { name: 'Content', color: '#3B82F6' },
  { name: 'Email', color: '#10B981' },
  { name: 'Social', color: '#8B5CF6' },
  { name: 'Data', color: '#F59E0B' },
];

export default function AgentMarketplaceBg() {
  return (
    <BentoBg>
      <m.div
        className="absolute inset-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerSlideIn}
      >
        {agents.map((agent, i) => (
          <m.div
            key={agent.name}
            className="absolute flex items-center gap-2.5 animate-drift"
            style={{
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${5 + i * 0.5}s`,
              top: `${10 + i * 16}%`,
              right: `${8 + (i % 3) * 10}%`,
            }}
            variants={slideFromRight}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 shadow-md"
              style={{ backgroundColor: agent.color }}
            >
              {agent.name[0]}
            </div>
            <span className="text-xs font-medium text-text-primary whitespace-nowrap bg-white/70 px-3 py-1.5 rounded-full shadow-sm">
              {agent.name}
            </span>
          </m.div>
        ))}
      </m.div>
    </BentoBg>
  );
}
