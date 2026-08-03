import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import { ME } from '../data';

export default function Hero() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section style={{
      padding: isMobile ? '7rem 1.5rem 4rem' : '9rem 2.5rem 5.5rem',
      maxWidth: 1100, margin: '0 auto', width: '100%',
    }}>
      <div style={{
        fontSize: '0.85rem', color: 'var(--ink3)', marginBottom: '1.5rem',
      }}>
        New Delhi, India — available for full-time roles
      </div>

      <h1 style={{
        fontWeight: 700,
        fontSize: isMobile ? '2.5rem' : '3.75rem',
        lineHeight: 1.08, letterSpacing: '-0.03em', color: 'var(--ink)',
        marginBottom: '1.4rem', maxWidth: 760,
      }}>
        Full-stack developer building AI-integrated products.
      </h1>

      <p style={{
        fontSize: '1.1rem', lineHeight: 1.7,
        color: 'var(--ink2)', maxWidth: 540, marginBottom: '2.2rem',
        fontWeight: 400,
      }}>
        I'm Harsh — I build production web applications with React, Next.js, and Node.js,
        and I've shipped real-time systems, LLM-integrated tools, and infrastructure
        built from scratch, not just CRUD.
      </p>

      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
        <a href={`mailto:${ME.email}`} style={{
          display: 'inline-flex', alignItems: 'center',
          padding: '0.7rem 1.4rem', borderRadius: 'var(--radius-sm)',
          fontSize: '0.92rem', fontWeight: 600,
          background: 'var(--accent)', color: '#fff',
          transition: 'transform 0.15s ease, background 0.15s ease',
        }}
          onMouseEnter={e => { e.currentTarget.style.background = 'var(--accent2)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent)'; e.currentTarget.style.transform = 'none'; }}
        >Email me</a>
        {[
          { label: 'GitHub', href: ME.github },
          { label: 'LinkedIn', href: ME.linkedin },
        ].map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer" style={{
            display: 'inline-flex', alignItems: 'center',
            padding: '0.7rem 1.4rem', borderRadius: 'var(--radius-sm)',
            fontSize: '0.92rem', fontWeight: 500,
            color: 'var(--ink2)', border: '1px solid var(--line2)',
            transition: 'border-color 0.15s ease, color 0.15s ease',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ink3)'; e.currentTarget.style.color = 'var(--ink)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line2)'; e.currentTarget.style.color = 'var(--ink2)'; }}
          >{label}</a>
        ))}
      </div>

      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
        maxWidth: 500, gap: '2.5rem',
      }}>
        {ME.stats.map(s => (
          <div key={s.label} style={{ borderTop: '2px solid var(--ink)', paddingTop: '0.8rem' }}>
            <div style={{ fontFamily: 'var(--ff-mono)', fontWeight: 600, fontSize: '1.6rem', color: 'var(--ink)' }}>{s.n}</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--ink3)', marginTop: '0.15rem' }}>{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
