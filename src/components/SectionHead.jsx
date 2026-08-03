import React from 'react';

export default function SectionHead({ title, subtitle }) {
  return (
    <div style={{ marginBottom: '2.5rem' }}>
      <h2 style={{
        fontWeight: 700, fontSize: '2.1rem',
        letterSpacing: '-0.025em', color: 'var(--ink)', marginBottom: subtitle ? '0.4rem' : 0,
      }}>{title}</h2>
      {subtitle && (
        <p style={{ fontSize: '0.95rem', color: 'var(--ink3)' }}>{subtitle}</p>
      )}
    </div>
  );
}
