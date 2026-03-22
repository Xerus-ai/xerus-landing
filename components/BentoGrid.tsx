'use client';

import { m } from 'framer-motion';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from '@/lib/variants';
import {
  Plug,
  Clock,
  Inbox,
  Brain,
  FolderOpen,
} from 'lucide-react';
import {
  ChatInteractiveBg,
  AppConnectionsBg,
  SchedulePulseBg,
  InboxFeedBg,
  MemoryBubblesBg,
  KnowledgeDriveBg,
} from './bento-backgrounds';

const cards = [
  {
    id: 'a',
    heading: '',
    className: 'md:col-span-7 md:row-span-2 min-h-[480px]',
    hasParallax: false,
    Background: ChatInteractiveBg,
  },
  {
    id: 'b',
    icon: Plug,
    heading: 'Connect everything',
    className: 'md:col-span-5 min-h-[280px]',
    hasParallax: false,
    Background: AppConnectionsBg,
  },
  {
    id: 'c',
    icon: Inbox,
    heading: 'One inbox. Zero chaos.',
    className: 'md:col-span-5 min-h-[260px]',
    hasParallax: false,
    Background: InboxFeedBg,
  },
  {
    id: 'd',
    icon: Clock,
    heading: 'Always on. Your terms.',
    className: 'md:col-span-4 min-h-[260px]',
    hasParallax: false,
    Background: SchedulePulseBg,
  },
  {
    id: 'e',
    icon: Brain,
    heading: 'Memory that compounds',
    className: 'md:col-span-4 min-h-[260px]',
    hasParallax: false,
    Background: MemoryBubblesBg,
  },
  {
    id: 'f',
    icon: FolderOpen,
    heading: 'Feed them context',
    className: 'md:col-span-4 min-h-[260px]',
    hasParallax: false,
    Background: KnowledgeDriveBg,
  },
];

export default function BentoGrid() {
  return (
    <section
      className="relative z-10 py-section px-6"
      aria-label="Features"
    >
      <div className="max-w-content mx-auto">
        {/* Section header */}
        <m.div
          className="mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={fadeInUp}
        >
          <p className="font-body text-label uppercase tracking-widest text-text-muted mb-4">
            What Xerus Does
          </p>
          <h2 className="font-heading text-heading-section heading-section text-text-primary max-w-2xl">
            Everything your team would do. Without the team.
          </h2>
        </m.div>

        {/* Grid */}
        <m.div
          className="grid grid-cols-1 md:grid-cols-12 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <m.div
                key={card.id}
                className={`liquid-glass group flex flex-col ${card.className}`}
                variants={staggerItem}
              >
                <div
                  className="lg__effect"
                  style={{ filter: 'url(#lg-distortion)' }}
                  aria-hidden="true"
                />
                <div className="lg__tint" aria-hidden="true" />
                <div className="lg__shine" aria-hidden="true" />
                {card.Background && <card.Background />}
                {/* Icon + Heading pinned to bottom (skip for cards without icon) */}
                {Icon && card.heading && (
                  <div className="lg__content p-6 md:p-8 mt-auto flex flex-col">
                    <div className="w-10 h-10 rounded-icon bg-cream-surface flex items-center justify-center mb-3">
                      <Icon size={20} className="text-text-secondary" />
                    </div>
                    <h3 className="font-heading text-heading-card text-text-primary">
                      {card.heading}
                    </h3>
                  </div>
                )}
              </m.div>
            );
          })}
        </m.div>
      </div>
    </section>
  );
}
