import React, { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, Variants } from 'framer-motion';

interface AnimationWrapperProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  animation?: 'fadeIn' | 'slideUp' | 'slideLeft' | 'slideRight';
  className?: string;
  once?: boolean;
}

const animations: Record<string, Variants> = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  slideUp: {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  slideLeft: {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  slideRight: {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
};

const AnimationWrapper: React.FC<AnimationWrapperProps> = ({
  children,
  delay = 0,
  duration = 0.5,
  animation = 'fadeIn',
  className = '',
  once = true,
}) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount: 0.3 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else if (!once) {
      controls.start('hidden');
    }
  }, [controls, inView, once]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animations[animation]}
      transition={{ duration, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimationWrapper;