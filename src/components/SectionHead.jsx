import React from 'react';
import useFade from '../hooks/useFade';

export default function SectionHead({ eyebrow, title }) {
  const f = useFade(0);
  return (
    <div {...f} style={{ ...f.style, marginBottom: '3rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '0.9rem' }}>
        <span style={{
          fontFamily: 'var(--ff-mono)', fontSize: '0.63rem',
          letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)',
          whiteSpace: 'nowrap',
        }}>{eyebrow}</span>
        <div style={{ flex: 1, height: 1, background: 'var(--line)' }} />
      </div>
      <h2 style={{
        fontFamily: 'var(--ff-display)', fontWeight: 800,
        fontSize: 'clamp(2rem, 4.5vw, 3.2rem)',
        letterSpacing: '-0.03em', color: 'var(--ink)',
      }}>{title}</h2>
    </div>
  );
}
