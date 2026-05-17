import React, { useState } from 'react';
import useFade from '../hooks/useFade';
import SectionHead from './SectionHead';
import { PROJECTS } from '../data';

function ProjectCard({ p, i }) {
  const f = useFade(i * 0.1);
  const [hov, setHov] = useState(false);
  const [open, setOpen] = useState(false);

  return (
    <div
      {...f}
      style={{
        ...f.style,
        background: hov ? p.accentBg : 'var(--bg2)',
        border: `1px solid ${hov ? p.accent + '33' : 'var(--line)'}`,
        borderRadius: 12, overflow: 'hidden', transition: 'all 0.3s',
        boxShadow: hov ? `0 8px 32px ${p.accent}18` : '0 1px 4px rgba(0,0,0,0.04)',
      }}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      {/* Accent top bar */}
      <div style={{ height: 3, background: p.accent }} />

      <div style={{ padding: '1.5rem 1.5rem 1.4rem' }}>
        {/* Header row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
              <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.6rem', color: 'var(--ink4)', letterSpacing: '0.08em' }}>{p.id}</span>
              <span style={{
                fontFamily: 'var(--ff-mono)', fontSize: '0.58rem', letterSpacing: '0.06em',
                padding: '0.15rem 0.55rem', borderRadius: 99,
                background: 'var(--bg3)', color: 'var(--ink3)', border: '1px solid var(--line)',
              }}>{p.category}</span>
              {p.live && (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontFamily: 'var(--ff-mono)', fontSize: '0.58rem', letterSpacing: '0.08em', color: 'var(--accent)' }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--accent)', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                  Live
                </span>
              )}
            </div>
            <h3 style={{
              fontFamily: 'var(--ff-display)', fontWeight: 700,
              fontSize: '1.4rem', color: 'var(--ink)',
              letterSpacing: '-0.02em', lineHeight: 1.05, marginBottom: '0.2rem',
            }}>{p.name}</h3>
            <p style={{ fontFamily: 'var(--ff-body)', fontSize: '0.8rem', color: 'var(--ink3)' }}>{p.tagline}</p>
          </div>
          <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.62rem', color: 'var(--ink4)', flexShrink: 0, marginLeft: '0.75rem' }}>{p.year}</span>
        </div>

        {/* Description */}
        <p style={{ fontSize: '0.85rem', fontWeight: 300, color: 'var(--ink2)', lineHeight: 1.75, marginBottom: '1.2rem' }}>{p.desc}</p>

        {/* Stack tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.38rem', marginBottom: '1.2rem' }}>
          {p.stack.map(t => (
            <span key={t} style={{
              fontFamily: 'var(--ff-mono)', fontSize: '0.6rem', letterSpacing: '0.04em',
              padding: '0.2rem 0.58rem', borderRadius: 4,
              background: 'var(--bg3)', color: 'var(--ink2)', border: '1px solid var(--line)',
            }}>{t}</span>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center', flexWrap: 'wrap' }}>
          {p.liveUrl && (
            <a href={p.liveUrl} target="_blank" rel="noreferrer" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
              padding: '0.48rem 1rem', borderRadius: 4,
              background: p.accent, color: '#fff',
              fontFamily: 'var(--ff-body)', fontWeight: 500, fontSize: '0.78rem',
              transition: 'opacity 0.2s', WebkitTapHighlightColor: 'transparent',
            }}
              onMouseEnter={e => e.currentTarget.style.opacity = '0.85'}
              onMouseLeave={e => e.currentTarget.style.opacity = '1'}
            >Live Demo ↗</a>
          )}
          <a href={p.githubUrl} target="_blank" rel="noreferrer" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.35rem',
            padding: '0.48rem 1rem', borderRadius: 4,
            background: 'transparent', color: 'var(--ink2)',
            border: '1px solid var(--line2)',
            fontFamily: 'var(--ff-body)', fontSize: '0.78rem', transition: 'all 0.2s',
            WebkitTapHighlightColor: 'transparent',
          }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ink3)'; e.currentTarget.style.color = 'var(--ink)'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line2)'; e.currentTarget.style.color = 'var(--ink2)'; }}
          >GitHub</a>

          {/* Expand toggle */}
          <button
            onClick={() => setOpen(o => !o)}
            style={{
              marginLeft: 'auto', background: 'none',
              border: `1px solid ${open ? p.accent : 'var(--line2)'}`,
              borderRadius: 4, width: 32, height: 32,
              color: open ? p.accent : 'var(--ink3)',
              fontFamily: 'var(--ff-mono)', fontSize: '1rem',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              transition: 'all 0.2s', cursor: 'pointer',
              WebkitTapHighlightColor: 'transparent',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = p.accent; e.currentTarget.style.color = p.accent; }}
            onMouseLeave={e => { if (!open) { e.currentTarget.style.borderColor = 'var(--line2)'; e.currentTarget.style.color = 'var(--ink3)'; } }}
          >{open ? '−' : '+'}</button>
        </div>

        {/* Highlights (expandable) */}
        {open && (
          <div style={{ marginTop: '1.4rem', paddingTop: '1.4rem', borderTop: `1px solid ${p.accent}22` }}>
            <div style={{
              fontFamily: 'var(--ff-mono)', fontSize: '0.6rem',
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: p.accent, marginBottom: '0.9rem',
            }}>Key highlights</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {p.highlights.map((h, i) => (
                <li key={i} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.83rem', color: 'var(--ink2)', lineHeight: 1.65, fontWeight: 300 }}>
                  <span style={{ color: p.accent, flexShrink: 0, marginTop: '0.05rem' }}>→</span>{h}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '6rem 1.5rem', maxWidth: 1140, margin: '0 auto' }}>
      <SectionHead eyebrow="Selected Work" title="Projects" />
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 320px), 1fr))',
        gap: '1.2rem',
      }}>
        {PROJECTS.map((p, i) => <ProjectCard key={p.id} p={p} i={i} />)}
      </div>
    </section>
  );
}
