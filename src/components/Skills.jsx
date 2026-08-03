import React from 'react';
import SectionHead from './SectionHead';
import { SKILLS } from '../data';

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: '5rem 1.5rem',
      background: 'var(--bg2)',
      borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <SectionHead title="Skills" />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 220px), 1fr))',
          gap: '1.8rem',
        }}>
          {SKILLS.map(s => (
            <div key={s.label}>
              <div style={{
                fontWeight: 700, fontSize: '0.85rem', color: 'var(--ink)', marginBottom: '0.6rem',
              }}>{s.label}</div>
              <div style={{ fontSize: '0.88rem', color: 'var(--ink2)', lineHeight: 1.9 }}>
                {s.items.join(', ')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
