'use client';

import { m } from 'framer-motion';
import { staggerSlideIn, slideFromTop } from '@/lib/variants';
import BentoBg from './BentoBg';

const notifications = [
  { agent: 'Content Writer', message: 'Blog draft ready for review', time: '2m' },
  { agent: 'Data Analyst', message: 'Weekly report generated', time: '8m' },
  { agent: 'Email Agent', message: 'Sent 12 follow-ups', time: '15m' },
];

export default function InboxFeedBg() {
  return (
    <BentoBg>
      <m.div
        className="absolute inset-0 flex flex-col gap-2.5 p-5 pt-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerSlideIn}
      >
        {notifications.map((n) => (
          <m.div
            key={n.agent}
            className="flex items-start gap-2.5 bg-white/60 rounded-xl px-3 py-2.5 shadow-sm"
            variants={slideFromTop}
          >
            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
              <div className="w-2.5 h-2.5 rounded-full bg-accent" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[11px] font-semibold text-text-primary truncate">{n.agent}</p>
              <p className="text-[10px] text-text-muted truncate">{n.message}</p>
            </div>
            <span className="text-[9px] text-text-muted whitespace-nowrap">{n.time}</span>
          </m.div>
        ))}
      </m.div>
    </BentoBg>
  );
}
