'use client';

import { motion } from 'framer-motion';

export function Emphasis({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 14"
        preserveAspectRatio="none"
        className="absolute left-[-4%] right-[-4%] bottom-[-12px] w-[108%] h-3.5 pointer-events-none"
      >
        <motion.path
          d="M4,9 C40,3 90,12 140,5 C160,3 180,7 196,4"
          fill="none"
          stroke="#EA5A3D"
          strokeWidth={3}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.3 }}
        />
      </svg>
    </span>
  );
}
