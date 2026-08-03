import React, { useState } from 'react';
import SectionHead from './SectionHead';
import { PROJECTS } from '../data';

function ProjectCard({ p }) {
  const [open, setOpen] = useState(false);
  const [hov, setHov] = useState(false);

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        border: `1px solid ${hov ? 'var(--line2)' : 'var(--line)'}`, borderRadius: 'var(--radius)',
        padding: '1.6rem', background: 'var(--bg)',
        boxShadow: hov ? '0 4px 16px rgba(0,0,0,0.06)' : 'none',
        transform: hov ? 'translateY(-2px)' : 'none',
        transition: 'box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease',
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.6rem' }}>
        <div>
          <h3 style={{ fontWeight: 700, fontSize: '1.2rem', color: 'var(--ink)', marginBottom: '0.25rem', letterSpacing: '-0.01em' }}>{p.name}</h3>
          <p style={{ fontSize: '0.88rem', color: 'var(--ink3)' }}>{p.tagline}</p>
        </div>
        <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.78rem', color: 'var(--ink4)', flexShrink: 0 }}>{p.year}</span>
      </div>

      <p style={{ fontSize: '0.9rem', color: 'var(--ink2)', lineHeight: 1.65, marginBottom: '1rem' }}>{p.desc}</p>

      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.2rem' }}>
        {p.stack.map(t => (
          <span key={t} style={{
            fontFamily: 'var(--ff-mono)',
            fontSize: '0.73rem', padding: '0.22rem 0.6rem', borderRadius: 'var(--radius-sm)',
            background: 'var(--bg3)', color: 'var(--ink2)',
          }}>{t}</span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', fontSize: '0.85rem' }}>
        {p.liveUrl && (
          <a href={p.liveUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--accent)', fontWeight: 600 }}>
            Live demo
          </a>
        )}
        <a href={p.githubUrl} target="_blank" rel="noreferrer" style={{ color: 'var(--ink2)', fontWeight: 500 }}>
          Source
        </a>
        <button
          onClick={() => setOpen(o => !o)}
          style={{ marginLeft: 'auto', background: 'none', border: 'none', color: 'var(--ink3)', fontSize: '0.85rem' }}
        >{open ? 'Hide details' : 'More details'}</button>
      </div>

      {open && (
        <ul style={{ marginTop: '1.1rem', paddingTop: '1.1rem', borderTop: '1px solid var(--line)', listStyle: 'disc', paddingLeft: '1.2rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {p.highlights.map((h, i) => (
            <li key={i} style={{ fontSize: '0.85rem', color: 'var(--ink2)', lineHeight: 1.6 }}>{h}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '5rem 1.5rem', maxWidth: 1100, margin: '0 auto' }}>
      <SectionHead title="Projects" subtitle="A few things I've built end to end." />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
        gap: '1rem',
      }}>
        {PROJECTS.map(p => <ProjectCard key={p.id} p={p} />)}
      </div>
    </section>
  );
}
