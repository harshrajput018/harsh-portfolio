import React from 'react';
import useFade from '../hooks/useFade';
import SectionHead from './SectionHead';
import { SKILLS } from '../data';

function SkillCard({ s, i }) {
  const f = useFade(i * 0.07);
  return (
    <div
      key={s.label}
      {...f}
      style={{
        ...f.style,
        background: 'var(--bg2)', padding: '1.5rem', transition: 'background 0.2s',
      }}
      onMouseEnter={e => e.currentTarget.style.background = 'var(--accentbg)'}
      onMouseLeave={e => e.currentTarget.style.background = 'var(--bg2)'}
    >
      <div style={{
        display: 'flex', alignItems: 'center', gap: '0.55rem',
        marginBottom: '1rem', paddingBottom: '0.9rem', borderBottom: '1px solid var(--line)',
      }}>
        <span style={{ fontSize: '0.9rem', color: 'var(--accent)', fontFamily: 'var(--ff-mono)' }}>{s.icon}</span>
        <span style={{
          fontFamily: 'var(--ff-mono)', fontSize: '0.62rem',
          letterSpacing: '0.12em', textTransform: 'uppercase',
          color: 'var(--accent)', fontWeight: 500,
        }}>{s.label}</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.48rem' }}>
        {s.items.map(item => (
          <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', fontSize: '0.83rem', fontWeight: 300, color: 'var(--ink2)' }}>
            <span style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--ink4)', display: 'inline-block', flexShrink: 0 }} />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" style={{
      padding: '6rem 1.5rem',
      background: 'var(--bg3)',
      borderTop: '1px solid var(--line)', borderBottom: '1px solid var(--line)',
    }}>
      <div style={{ maxWidth: 1140, margin: '0 auto' }}>
        <SectionHead eyebrow="Capabilities" title="Technical Skills" />
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 200px), 1fr))',
          gap: '1px', background: 'var(--line2)',
          border: '1px solid var(--line2)', borderRadius: 12, overflow: 'hidden',
        }}>
          {SKILLS.map((s, i) => <SkillCard key={s.label} s={s} i={i} />)}
        </div>
      </div>
    </section>
  );
}
