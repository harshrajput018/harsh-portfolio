import React from 'react';
import useFade from '../hooks/useFade';
import useMediaQuery from '../hooks/useMediaQuery';
import SectionHead from './SectionHead';
import { EXPERIENCE } from '../data';

function ExpRow({ e, delay, isMobile }) {
  const f = useFade(delay);
  return (
    <div
      {...f}
      style={{
        ...f.style,
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '240px 1fr',
        gap: isMobile ? '1rem' : '3rem',
        padding: '2.4rem 0',
        borderTop: '1px solid var(--line)',
      }}
    >
      {/* Left: company info */}
      <div>
        <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--ink)', marginBottom: '0.3rem', letterSpacing: '-0.01em' }}>{e.co}</div>
        <div style={{ fontFamily: 'var(--ff-body)', fontSize: '0.84rem', color: 'var(--accent)', fontWeight: 500, marginBottom: '0.6rem' }}>{e.role}</div>
        <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.62rem', color: 'var(--ink3)', lineHeight: 1.9, letterSpacing: '0.04em' }}>
          {e.period}<br />{e.loc}
        </div>
        <span style={{
          display: 'inline-block', marginTop: '0.6rem',
          fontFamily: 'var(--ff-mono)', fontSize: '0.57rem',
          letterSpacing: '0.1em', textTransform: 'uppercase',
          padding: '0.18rem 0.6rem', borderRadius: 99,
          background: 'var(--bg3)', color: 'var(--ink3)', border: '1px solid var(--line2)',
        }}>{e.type}</span>
      </div>

      {/* Right: bullet points */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', paddingTop: isMobile ? 0 : '0.1rem' }}>
        {e.points.map((pt, pi) => (
          <div key={pi} style={{ display: 'flex', gap: '0.85rem', fontSize: '0.86rem', fontWeight: 300, color: 'var(--ink2)', lineHeight: 1.75 }}>
            <span style={{ color: 'var(--accent)', fontFamily: 'var(--ff-mono)', fontSize: '0.63rem', paddingTop: '0.28rem', flexShrink: 0 }}>→</span>
            {pt}
          </div>
        ))}
      </div>
    </div>
  );
}

function EduRow({ isMobile }) {
  const f = useFade(0.1);
  return (
    <div
      {...f}
      style={{
        ...f.style,
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '240px 1fr',
        gap: isMobile ? '1rem' : '3rem',
        padding: '2.4rem 0',
        borderTop: '1px solid var(--line)',
      }}
    >
      <div>
        <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '0.7rem' }}>Education</div>
        <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--ink)', lineHeight: 1.3, marginBottom: '0.35rem' }}>GGSIPU</div>
        <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.62rem', color: 'var(--ink3)', lineHeight: 1.9, letterSpacing: '0.04em' }}>
          2020 – 2024<br />New Delhi, India
        </div>
      </div>
      <div style={{ paddingTop: isMobile ? 0 : '2.2rem' }}>
        <div style={{ fontFamily: 'var(--ff-display)', fontWeight: 600, fontSize: '1rem', color: 'var(--ink)', letterSpacing: '-0.01em', marginBottom: '0.3rem' }}>
          B.Tech — Computer Science Engineering
        </div>
        <div style={{ fontFamily: 'var(--ff-body)', fontSize: '0.83rem', color: 'var(--ink3)' }}>
          Guru Gobind Singh Indraprastha University
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const isMobile = useMediaQuery('(max-width: 640px)');
  return (
    <section id="experience" style={{ padding: '6rem 1.5rem', maxWidth: 1140, margin: '0 auto' }}>
      <SectionHead eyebrow="Work History" title="Experience" />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {EXPERIENCE.map((e, i) => (
          <ExpRow key={e.co} e={e} delay={i * 0.15} isMobile={isMobile} />
        ))}
        <EduRow isMobile={isMobile} />
      </div>
    </section>
  );
}
