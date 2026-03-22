'use client';

import { m } from 'framer-motion';
import { fadeInUp, fadeInUpFast, scaleIn } from '@/lib/variants';

const floatingCards = [
  { text: 'Draft this week\'s newsletter', pos: 'top-[12%] left-[5%] md:left-[8%]', delay: 0.5, rotate: '-3deg' },
  { text: 'Research competitor pricing', pos: 'top-[8%] right-[5%] md:right-[10%]', delay: 0.65, rotate: '2deg' },
  { text: 'Reply to client emails', pos: 'top-[55%] left-[2%] md:left-[5%]', delay: 0.8, rotate: '-1deg' },
  { text: 'Schedule social posts', pos: 'top-[50%] right-[2%] md:right-[6%]', delay: 0.95, rotate: '3deg' },
  { text: 'Summarize yesterday\'s calls', pos: 'bottom-[18%] left-[15%] md:left-[20%]', delay: 1.1, rotate: '-2deg' },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden"
        aria-label="Hero"
      >
        {/* Animated blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div
            className="absolute w-96 h-96 rounded-full mix-blend-multiply blur-[64px] animate-blob"
            style={{ background: 'var(--blob-1)', top: '20%', left: '15%' }}
          />
          <div
            className="absolute w-96 h-96 rounded-full mix-blend-multiply blur-[64px] animate-blob-delayed-2"
            style={{ background: 'var(--blob-2)', top: '10%', right: '20%' }}
          />
          <div
            className="absolute w-96 h-96 rounded-full mix-blend-multiply blur-[64px] animate-blob-delayed-4"
            style={{ background: 'var(--blob-3)', bottom: '20%', left: '40%' }}
          />
        </div>

        {/* Noise texture overlay */}
        <div className="noise-overlay" />

        {/* Main content stack */}
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Heading */}
          <m.h1
            className="font-heading text-heading-hero heading-hero text-text-primary mb-0"
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
          >
            Your virtual office.
          </m.h1>

          {/* Mascot — overlaps heading */}
          <m.div
            className="relative -mt-8 md:-mt-12 z-20"
            initial="hidden"
            animate="visible"
            variants={scaleIn}
            transition={{ delay: 0.3 }}
          >
            <img
              src="/images/mascot.png"
              alt="Xerus mascot"
              width={400}
              height={400}
              className="w-48 h-48 md:w-72 md:h-72 lg:w-96 lg:h-96 object-contain animate-float"
            />
          </m.div>

          {/* Subline */}
          <m.p
            className="font-body text-subheading text-text-primary mt-4 md:mt-6 max-w-lg"
            initial="hidden"
            animate="visible"
            variants={fadeInUpFast}
            transition={{ delay: 0.6 }}
          >
            Hire <span className="text-accent bg-white px-1.5 py-0.5">AI agents</span>. Give them tools. Watch them work.
          </m.p>

          {/* CTA */}
          <m.a
            href="#request-access"
            className="btn-primary inline-flex mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease }}
          >
            Request Early Access
          </m.a>
        </div>

        {/* Floating task cards */}
        {floatingCards.map((card, i) => (
          <m.div
            key={card.text}
            className={`absolute ${card.pos} liquid-glass hidden md:block max-w-[220px]`}
            style={{ rotate: card.rotate, '--lg-radius': '16px', '--lg-blur': '10px' } as React.CSSProperties}
            initial={{ opacity: 0, scale: 0.8, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: card.delay, duration: 0.7, ease }}
          >
            <div
              className="lg__effect"
              style={{ filter: 'url(#lg-distortion)' }}
              aria-hidden="true"
            />
            <div className="lg__tint" aria-hidden="true" />
            <div className="lg__shine" aria-hidden="true" />
            <div className="lg__content px-4 py-3 flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-accent shrink-0" />
              <span className="text-card-desc text-text-primary font-body">
                {card.text}
              </span>
            </div>
          </m.div>
        ))}
    </section>
  );
}
