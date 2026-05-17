import { useState, useEffect, useRef } from 'react';

export default function useFade(delay = 0) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const o = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } },
      { threshold: 0.08 }
    );
    o.observe(el);
    return () => o.disconnect();
  }, []);
  return {
    ref,
    style: {
      opacity: v ? 1 : 0,
      transform: v ? 'none' : 'translateY(22px)',
      transition: `opacity 0.65s ${delay}s ease, transform 0.65s ${delay}s ease`,
    },
  };
}
