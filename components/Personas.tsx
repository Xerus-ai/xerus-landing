'use client';

import { useRef } from 'react';
import { m, useScroll, useTransform } from 'framer-motion';
import { fadeInUp } from '@/lib/variants';
import Image from 'next/image';

const personas = [
  {
    title: 'Solo Founders',
    description: 'Run your startup like a team of ten. Research, emails, content — handled.',
    image: '/images/personas/1.png',
  },
  {
    title: 'Creators',
    description: 'Draft posts, schedule content, and reply to DMs on autopilot.',
    image: '/images/personas/4.png',
  },
  {
    title: 'Coaches',
    description: 'Client onboarding, session prep, and follow-ups. More clients, same you.',
    image: '/images/personas/2.png',
  },
  {
    title: 'Consultants',
    description: 'Proposals, research, and client comms. Agents handle the admin.',
    image: '/images/personas/3.png',
  },
  {
    title: 'Agencies',
    description: 'Coordinate deliverables, track projects, and scale without more hires.',
    image: '/images/personas/5.png',
  },
];

// Duplicate for seamless loop
const marqueeItems = [...personas, ...personas];

function PersonaCard({ title, description, image }: typeof personas[number]) {
  return (
    <div className="persona-card flex-shrink-0 w-[360px] md:w-[440px] rounded-[20px] bg-cream-surface/70 overflow-hidden">
      {/* Text area */}
      <div className="px-6 pt-7 pb-3 text-center">
        <h3 className="font-heading text-[28px] md:text-[34px] font-semibold text-text-primary leading-[1.15] mb-2">
          {title}
        </h3>
        <p className="font-body text-body-small text-text-secondary leading-snug">
          {description}
        </p>
      </div>

      {/* Poster image — left padding + top-left radius */}
      <div className="pl-4">
        <Image
          src={image}
          alt={`${title} — Xerus workspace`}
          width={880}
          height={1100}
          className="w-full h-auto block rounded-tl-[16px]"
        />
      </div>
    </div>
  );
}

export default function Personas() {
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll-linked depth effect
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'center center'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [6, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [0.4, 1]);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 py-section overflow-hidden"
      aria-label="Who it's for"
    >
      {/* Depth perspective wrapper */}
      <m.div style={{ perspective: 1200 }}>
        <m.div
          style={{
            scale,
            rotateX,
            opacity,
            transformOrigin: 'center bottom',
          }}
        >
          {/* Section header */}
          <m.div
            className="px-6 mb-10 md:mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={fadeInUp}
          >
            <p className="font-body text-label uppercase tracking-widest text-text-muted backdrop-blur-sm bg-cream-base/50 rounded-full px-4 py-1.5 inline-block mb-4">
              Built For You
            </p>
            <h2 className="font-heading text-heading-section heading-section text-text-primary mx-auto max-w-2xl">
              For the ones doing it all alone.
            </h2>
          </m.div>

          {/* Marquee carousel — always moving */}
          <div className="personas-marquee-wrapper">
            <div className="personas-marquee">
              {marqueeItems.map((persona, i) => (
                <PersonaCard key={`${persona.title}-${i}`} {...persona} />
              ))}
            </div>
          </div>
        </m.div>
      </m.div>
    </section>
  );
}
