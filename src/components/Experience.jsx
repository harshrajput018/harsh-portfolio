import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import SectionHead from './SectionHead';
import { EXPERIENCE } from '../data';

function ExpRow({ e, isMobile }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '220px 1fr',
      gap: isMobile ? '0.8rem' : '2.5rem',
      padding: '2rem 0',
      borderTop: '1px solid var(--line)',
    }}>
      <div>
        <div style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--ink)', marginBottom: '0.2rem' }}>{e.co}</div>
        <div style={{ fontSize: '0.88rem', color: 'var(--accent)', marginBottom: '0.5rem' }}>{e.role}</div>
        <div style={{ fontSize: '0.82rem', color: 'var(--ink3)', lineHeight: 1.6 }}>
          {e.period} · {e.loc}
        </div>
      </div>
      <ul style={{ listStyle: 'disc', paddingLeft: '1.1rem', display: 'flex', flexDirection: 'column', gap: '0.55rem' }}>
        {e.points.map((pt, pi) => (
          <li key={pi} style={{ fontSize: '0.92rem', color: 'var(--ink2)', lineHeight: 1.65 }}>{pt}</li>
        ))}
      </ul>
    </div>
  );
}

function EduRow({ isMobile }) {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : '220px 1fr',
      gap: isMobile ? '0.8rem' : '2.5rem',
      padding: '2rem 0',
      borderTop: '1px solid var(--line)',
    }}>
      <div>
        <div style={{ fontWeight: 600, fontSize: '1rem', color: 'var(--ink)', marginBottom: '0.2rem' }}>GGSIPU</div>
        <div style={{ fontSize: '0.82rem', color: 'var(--ink3)', lineHeight: 1.6 }}>2020 – 2024 · New Delhi, India</div>
      </div>
      <div>
        <div style={{ fontWeight: 600, fontSize: '0.95rem', color: 'var(--ink)', marginBottom: '0.2rem' }}>
          B.Tech, Computer Science
        </div>
        <div style={{ fontSize: '0.88rem', color: 'var(--ink3)' }}>
          Guru Gobind Singh Indraprastha University
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  const isMobile = useMediaQuery('(max-width: 640px)');
  return (
    <section id="experience" style={{ padding: '5rem 1.5rem', maxWidth: 1100, margin: '0 auto' }}>
      <SectionHead title="Experience" />
      <div>
        {EXPERIENCE.map(e => <ExpRow key={e.co} e={e} isMobile={isMobile} />)}
        <EduRow isMobile={isMobile} />
      </div>
    </section>
  );
}
