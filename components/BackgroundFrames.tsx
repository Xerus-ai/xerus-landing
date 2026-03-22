'use client';

import { useRef, useEffect, useCallback } from 'react';
import { useScroll, useSpring, useMotionValueEvent } from 'framer-motion';

export default function BackgroundFrames() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const lastSeekRef = useRef(0);

  const { scrollYProgress } = useScroll();

  // useSpring smooths the raw scroll progress — eliminates jitter
  // stiffness 100 + damping 30 = responsive but fluid (from framer-motion skill)
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Map smoothed progress to video time — zero re-renders
  useMotionValueEvent(smoothProgress, 'change', (progress) => {
    const video = videoRef.current;
    if (!video || !video.duration) return;

    // Stop 1 second before the end
    const maxTime = Math.max(0, video.duration - 1);
    const targetTime = Math.min(progress * video.duration, maxTime);

    // Only seek if change is meaningful (>30ms) — prevents decoder thrashing
    if (Math.abs(targetTime - lastSeekRef.current) > 0.03) {
      video.currentTime = targetTime;
      lastSeekRef.current = targetTime;
    }
  });

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoaded = () => {
      video.currentTime = 0;
      lastSeekRef.current = 0;
    };

    if (video.readyState >= 1) {
      onLoaded();
    } else {
      video.addEventListener('loadedmetadata', onLoaded);
      return () => video.removeEventListener('loadedmetadata', onLoaded);
    }
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Cream wash overlay for text readability */}
      <div className="absolute inset-0 bg-cream-base/30 z-10" />

      {/* Scroll-driven video background */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        src="/images/frames/bgvideo.mp4"
        muted
        playsInline
        preload="auto"
        autoPlay={false}
      />

      {/* Fallback: first frame as poster while video loads */}
      <img
        src="/images/frames/frame-1.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
        width={1920}
        height={900}
      />
    </div>
  );
}
