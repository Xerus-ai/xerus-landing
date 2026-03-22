'use client';

import { useRef } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import { fadeInUp, parallaxTilt, staggerContainer, artifactIn } from '@/lib/variants';

const artifacts = [
  {
    title: 'Newsletter Draft',
    body: 'Weekly roundup of product updates and industry trends...',
    badge: '5hr',
    pos: 'top-[5%] left-[2%] md:-left-[8%]',
    rotate: -3,
    depth: 0.5,
  },
  {
    title: 'Social Post',
    body: 'New feature spotlight: Meet your AI research analyst...',
    badge: 'just now',
    pos: 'top-[2%] right-[2%] md:-right-[8%]',
    rotate: 2,
    depth: 0.8,
  },
  {
    title: 'Re: Partnership Proposal',
    body: 'Hi Julia, Thanks for reaching out. I\'ve reviewed the...',
    badge: null,
    pos: 'top-[45%] right-[0%] md:-right-[10%]',
    rotate: -1,
    depth: 1.0,
  },
  {
    title: 'Competitor Analysis',
    body: '• Pricing comparison across 5 platforms\n• Feature gap analysis',
    badge: null,
    pos: 'bottom-[15%] left-[2%] md:-left-[8%]',
    rotate: 4,
    depth: 1.2,
  },
  {
    title: 'Meeting Notes',
    body: '3 action items from today\'s standup',
    badge: null,
    pos: 'bottom-[5%] right-[5%] md:-right-[10%]',
    rotate: -2,
    depth: 1.5,
  },
  {
    title: 'Next: 2:30 PM',
    body: 'Content Agent — Weekly newsletter review',
    badge: 'upcoming',
    pos: 'top-[35%] left-[0%] md:-left-[10%]',
    rotate: 1,
    depth: 0.6,
  },
];

function ArtifactCard({
  artifact,
  scrollYProgress,
}: {
  artifact: (typeof artifacts)[0];
  scrollYProgress: any;
}) {
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -80 * artifact.depth]
  );

  return (
    <m.div
      className={`absolute ${artifact.pos} liquid-glass max-w-[200px] hidden md:block`}
      style={{
        rotate: `${artifact.rotate}deg`,
        y,
        '--lg-radius': '16px',
        '--lg-blur': '10px',
      } as unknown as React.CSSProperties}
      variants={artifactIn}
    >
      <div
        className="lg__effect"
        style={{ filter: 'url(#lg-distortion)' }}
        aria-hidden="true"
      />
      <div className="lg__tint" aria-hidden="true" />
      <div className="lg__shine" aria-hidden="true" />
      <div className="lg__content p-4">
        <p className="text-card-title font-body text-text-primary mb-1">
          {artifact.title}
        </p>
        <p className="text-card-desc font-body text-text-secondary line-clamp-2">
          {artifact.body}
        </p>
        {artifact.badge && (
          <span className="inline-block mt-2 px-2 py-0.5 rounded-button bg-cream-surface text-label font-body text-text-muted">
            {artifact.badge}
          </span>
        )}
      </div>
    </m.div>
  );
}

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  return (
    <section
        ref={sectionRef}
        className="relative z-10 py-section px-6 min-h-screen flex flex-col items-center justify-center overflow-visible"
        aria-label="Product showcase"
      >
        {/* Slightly darker cream zone */}
        <div className="absolute inset-0 bg-cream-surface/40 -z-10" />

        <div className="max-w-content mx-auto w-full">
          {/* Section heading */}
          <m.h2
            className="font-heading text-heading-section heading-section text-text-primary text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInUp}
          >
            One dashboard. Your whole team.
          </m.h2>

          {/* Showcase area */}
          <m.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={staggerContainer}
          >
            {/* Central screenshot */}
            <m.div
              className="relative mx-auto max-w-[900px]"
              style={{ perspective: 1000 }}
              variants={parallaxTilt}
            >
              {/* macOS chrome */}
              <div className="bg-[#2D2D2D] rounded-t-xl px-4 py-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                <div className="w-3 h-3 rounded-full bg-[#28C840]" />
              </div>
              <div className="rounded-b-xl overflow-hidden shadow-screenshot-deep">
                <img
                  src="/images/products/inbox_agent.jpg"
                  alt="Xerus office dashboard showing AI agents at work"
                  width={900}
                  height={600}
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </m.div>

            {/* Scattered artifacts */}
            {artifacts.map((artifact) => (
              <ArtifactCard
                key={artifact.title}
                artifact={artifact}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </m.div>
        </div>
    </section>
  );
}
