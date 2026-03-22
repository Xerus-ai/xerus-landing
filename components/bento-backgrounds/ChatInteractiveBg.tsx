'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { m, useInView, AnimatePresence } from 'framer-motion';
import BentoBg from './BentoBg';

/* ------------------------------------------------------------------ */
/* Constants                                                           */
/* ------------------------------------------------------------------ */

const USER_MESSAGE =
  'Create an agent that posts on Twitter and add it to the marketing project, content creation channel';

const AGENT_INTRO =
  "On it! I'll set up a Twitter posting agent with your brand voice and add it to marketing.";

const TOOL_CALLS = [
  {
    name: 'create_agent',
    target: 'twitter-poster',
    detail: 'Claude 4.5 Sonnet',
    color: 'bg-emerald-500/10 text-emerald-600',
    iconPath: 'M5 1L9 5L5 9L1 5L5 1Z',
  },
  {
    name: 'connect_app',
    target: 'Twitter / @yourhandle',
    color: 'bg-cyan-500/10 text-cyan-600',
    iconPath: 'M1 5H4M6 5H9M5 1V4M5 6V9',
  },
  {
    name: 'add_to_project',
    target: 'marketing / content-creation',
    color: 'bg-blue-500/10 text-blue-600',
    iconPath: 'M1 2H9M1 5H9M1 8H5',
  },
];

const AGENT_RESULT =
  '"Twitter Poster" is live in your content creation channel — posting every 6 hours from your calendar.';

/* Timing (ms) */
const CHAR_INTERVAL = 28;
const SEND_DELAY = 600;
const RESPONSE_DELAY = 500;
const TOOL_STAGGER = 220;
const HOLD_DURATION = 4000;

/* ------------------------------------------------------------------ */
/* Xerus avatar                                                        */
/* ------------------------------------------------------------------ */

function XerusAvatar({ size = 24 }: { size?: number }) {
  return (
    <img
      src="/images/xerus.svg"
      alt=""
      width={size}
      height={size}
      className="rounded-lg shrink-0"
      style={{ width: size, height: size }}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Tool call card                                                      */
/* ------------------------------------------------------------------ */

function MiniToolCard({ tool }: { tool: (typeof TOOL_CALLS)[0] }) {
  return (
    <div className="flex items-center gap-1.5 rounded-xl border border-[#e0e0e0] bg-white px-2.5 py-1.5">
      <div
        className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 ${tool.color}`}
      >
        <svg width="9" height="9" viewBox="0 0 10 10" fill="none">
          <path
            d={tool.iconPath}
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      </div>
      <span className="text-[11px] font-medium text-[#1a1a1a] shrink-0">
        {tool.name}
      </span>
      <span className="text-[11px] text-[#FF6600] font-mono truncate min-w-0 flex-1 px-1 py-0.5 rounded-md border border-[#FF6600]/15 bg-[#FF6600]/5">
        {tool.target}
      </span>
      {tool.detail && (
        <span className="text-[10px] text-text-muted shrink-0 hidden sm:inline">
          {tool.detail}
        </span>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Chat input bar                                                      */
/* ------------------------------------------------------------------ */

function ChatInputBar({
  text,
  showCursor,
  showSkeleton,
}: {
  text?: string;
  showCursor?: boolean;
  showSkeleton?: boolean;
}) {
  return (
    <div className="w-full rounded-2xl border border-[#e0e0e0] bg-white shadow-sm">
      <div className="px-4 pt-3 pb-2 min-h-[44px]">
        {text ? (
          <span className="text-[15px] font-medium text-[#1a1a1a] leading-relaxed">
            {text}
            {showCursor && (
              <span className="inline-block w-[2px] h-[18px] bg-[#FF6600] ml-0.5 align-middle animate-blink-cursor" />
            )}
          </span>
        ) : showSkeleton ? (
          <div className="flex flex-col gap-2 pt-0.5">
            <div className="h-2.5 w-[85%] rounded-full bg-[#e8e4df] animate-pulse" />
            <div className="h-2.5 w-[60%] rounded-full bg-[#e8e4df] animate-pulse" />
            <div className="h-2.5 w-[70%] rounded-full bg-[#e8e4df] animate-pulse" />
          </div>
        ) : (
          <span className="text-[15px] text-text-muted/40">
            Message Xerus...
          </span>
        )}
      </div>
      <div className="flex items-center justify-between px-3 pb-2 pt-0">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded-md flex items-center justify-center text-text-muted/50">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M21.44 11.05L12.25 20.24C10.07 22.42 6.57 22.42 4.39 20.24C2.21 18.06 2.21 14.56 4.39 12.38L13.58 3.19C15.07 1.7 17.49 1.7 18.98 3.19C20.47 4.68 20.47 7.1 18.98 8.59L9.79 17.78C9.05 18.52 7.84 18.52 7.1 17.78C6.36 17.04 6.36 15.83 7.1 15.09L15.58 6.61" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <div className="w-5 h-5 rounded-md flex items-center justify-center text-text-muted/50">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
              <path d="M12 3v1m0 16v1m-8-9H3m18 0h-1m-2.636-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 h-7 px-2 rounded-lg bg-[#F5F0EB]/80 text-[11px] text-text-secondary">
            <XerusAvatar size={16} />
            <span className="font-medium">Xerus</span>
            <svg width="8" height="8" viewBox="0 0 10 10" fill="none" className="opacity-40">
              <path d="M3 4L5 6L7 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${text ? 'bg-[#FF6600]' : 'bg-[#e0e0e0]'}`}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M6 10V2M6 2L2 6M6 2L10 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Variants                                                            */
/* ------------------------------------------------------------------ */

const fadeIn = {
  hidden: { opacity: 0, y: 6 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.35, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* ------------------------------------------------------------------ */
/* Main                                                                */
/* ------------------------------------------------------------------ */

export default function ChatInteractiveBg() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // phase: 0=idle, 1=typing, 2=typed(pause), 3=sent(input slides down + bubble), 4=response
  const [phase, setPhase] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [loopKey, setLoopKey] = useState(0);

  const startCycle = useCallback(() => {
    setPhase(0);
    setTypedText('');
    setTimeout(() => setPhase(1), 300);
  }, []);

  // Typing — character by character
  useEffect(() => {
    if (phase !== 1) return;
    let i = 0;
    const iv = setInterval(() => {
      i++;
      setTypedText(USER_MESSAGE.slice(0, i));
      if (i >= USER_MESSAGE.length) {
        clearInterval(iv);
        setTimeout(() => setPhase(2), 200);
      }
    }, CHAR_INTERVAL);
    return () => clearInterval(iv);
  }, [phase, loopKey]);

  // Phase 2 → 3 (send)
  useEffect(() => {
    if (phase !== 2) return;
    const t = setTimeout(() => setPhase(3), SEND_DELAY);
    return () => clearTimeout(t);
  }, [phase, loopKey]);

  // Phase 3 → 4 (show response)
  useEffect(() => {
    if (phase !== 3) return;
    const t = setTimeout(() => setPhase(4), 600);
    return () => clearTimeout(t);
  }, [phase, loopKey]);

  // Hold phase 4 then loop
  useEffect(() => {
    if (phase !== 4) return;
    const totalReveal = RESPONSE_DELAY + 400 + TOOL_CALLS.length * TOOL_STAGGER + 400;
    const t = setTimeout(() => {
      setLoopKey((k) => k + 1);
      startCycle();
    }, totalReveal + HOLD_DURATION);
    return () => clearTimeout(t);
  }, [phase, loopKey, startCycle]);

  // First trigger
  useEffect(() => {
    if (!isInView) return;
    startCycle();
  }, [isInView, startCycle]);

  const showConversation = phase >= 3;

  return (
    <BentoBg className="bento-bg--no-zoom">
      <div ref={ref} className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="wait">
          {/* Phase 1-2: Centered input with typing */}
          {!showConversation && phase >= 1 && (
            <m.div
              key={`typing-${loopKey}`}
              className="absolute inset-0 flex items-center justify-center px-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.15 } }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="w-full max-w-[440px]">
                <ChatInputBar
                  text={typedText || undefined}
                  showCursor={phase === 1}
                />
              </div>
            </m.div>
          )}

          {/* Phase 3+: Full chat layout */}
          {showConversation && (
            <m.div
              key={`conv-${loopKey}`}
              className="absolute inset-0 flex flex-col overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.3 } }}
              transition={{ duration: 0.25 }}
            >
              {/* Messages area — top portion with breathing room */}
              <div className="flex-1 flex flex-col px-6 pt-5 overflow-hidden">
                {/* User message bubble — right aligned like a chat */}
                <m.div
                  className="self-end max-w-[80%]"
                  initial={{ opacity: 0, y: 10, scale: 0.97 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="rounded-2xl rounded-tr-md bg-[#F5F0EB] px-4 py-3">
                    <p className="text-[13px] leading-relaxed text-[#1a1a1a]">
                      {USER_MESSAGE}
                    </p>
                  </div>
                </m.div>

                {/* Spacer */}
                <div className="flex-1 min-h-[16px]" />

                {/* Agent response area */}
                {phase >= 4 && (
                  <div className="flex flex-col gap-2 pb-3">
                    {/* Agent header + intro */}
                    <m.div
                      initial="hidden"
                      animate="visible"
                      custom={0}
                      variants={fadeIn}
                    >
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <XerusAvatar size={22} />
                        <span className="text-[13px] font-semibold text-[#FF6600]">Xerus</span>
                        <span className="text-[9px] font-medium text-text-muted bg-[#F5F0EB] rounded-full px-1.5 py-0.5">AI</span>
                      </div>
                      <m.p
                        className="text-[13px] leading-relaxed text-[#1a1a1a] pl-[30px]"
                        initial="hidden"
                        animate="visible"
                        custom={0.15}
                        variants={fadeIn}
                      >
                        {AGENT_INTRO}
                      </m.p>
                    </m.div>

                    {/* Tool calls */}
                    <div className="flex flex-col gap-1.5 pl-[30px]">
                      {TOOL_CALLS.map((tool, i) => (
                        <m.div
                          key={tool.name}
                          initial="hidden"
                          animate="visible"
                          custom={(RESPONSE_DELAY + i * TOOL_STAGGER) / 1000}
                          variants={fadeIn}
                        >
                          <MiniToolCard tool={tool} />
                        </m.div>
                      ))}
                    </div>

                    {/* Success result */}
                    <m.div
                      className="flex items-start gap-1.5 rounded-xl bg-emerald-50/80 border border-emerald-200/50 px-2.5 py-2 ml-[30px]"
                      initial="hidden"
                      animate="visible"
                      custom={(RESPONSE_DELAY + TOOL_CALLS.length * TOOL_STAGGER + 200) / 1000}
                      variants={fadeIn}
                    >
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="shrink-0 mt-0.5">
                        <circle cx="7" cy="7" r="6" fill="#10B981" opacity="0.15" />
                        <path d="M4 7.5L6 9.5L10 5" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <p className="text-[12px] leading-relaxed text-emerald-800 font-medium">
                        {AGENT_RESULT}
                      </p>
                    </m.div>
                  </div>
                )}
              </div>

              {/* Input pinned at bottom */}
              <m.div
                className="px-6 pb-5"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <ChatInputBar showSkeleton={phase === 3} />
              </m.div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </BentoBg>
  );
}
