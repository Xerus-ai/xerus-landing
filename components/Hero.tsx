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
          <m.div
            className="flex flex-col items-center gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6, ease }}
          >
            <a
              href="https://app.xerus.ai"
              className="btn-primary inline-flex"
            >
              Go to App
            </a>
            <a
              href="https://github.com/Xerus-ai/xerus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-cream-active bg-white/80 hover:bg-white font-body text-body-small text-text-primary hover:text-accent transition-all shadow-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              Star on GitHub
            </a>
          </m.div>
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
