import React from 'react';
import useFade from '../hooks/useFade';
import { ME } from '../data';

export default function Footer() {
  const f = useFade(0);
  return (
    <footer style={{ background: 'var(--bg2)', borderTop: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1140, margin: '0 auto', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div {...f} style={f.style}>
          <div style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.63rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--accent)', marginBottom: '1rem' }}>
            Let's build something
          </div>
          <h2 style={{
            fontFamily: 'var(--ff-display)', fontWeight: 800,
            fontSize: 'clamp(1.8rem, 5vw, 3.5rem)',
            letterSpacing: '-0.03em', color: 'var(--ink)',
            marginBottom: '1.2rem', lineHeight: 1,
          }}>
            Open to <span style={{ color: 'var(--accent)' }}>opportunities</span>
          </h2>
          <p style={{ fontSize: '0.9rem', fontWeight: 300, color: 'var(--ink3)', maxWidth: 360, margin: '0 auto 2.2rem', lineHeight: 1.75 }}>
            Full-time roles, freelance projects, or interesting collaborations — let's connect.
          </p>
          <div style={{ display: 'flex', gap: '0.8rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={`mailto:${ME.email}`} style={{
              padding: '0.65rem 1.5rem', background: 'var(--accent)', color: '#fff',
              borderRadius: 4, fontFamily: 'var(--ff-body)', fontWeight: 500, fontSize: '0.85rem',
              transition: 'background 0.2s', WebkitTapHighlightColor: 'transparent',
            }}
              onMouseEnter={e => e.currentTarget.style.background = 'var(--accent2)'}
              onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
            >{ME.email}</a>
            <a href={ME.linkedin} target="_blank" rel="noreferrer" style={{
              padding: '0.65rem 1.5rem', background: 'transparent', color: 'var(--ink2)',
              border: '1px solid var(--line2)', borderRadius: 4,
              fontFamily: 'var(--ff-body)', fontSize: '0.85rem', transition: 'all 0.2s',
              WebkitTapHighlightColor: 'transparent',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--ink3)'; e.currentTarget.style.color = 'var(--ink)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--line2)'; e.currentTarget.style.color = 'var(--ink2)'; }}
            >LinkedIn ↗</a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--line)', padding: '1.2rem 1.5rem' }}>
        <div style={{
          maxWidth: 1140, margin: '0 auto',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '0.8rem',
        }}>
          <span style={{ fontFamily: 'var(--ff-mono)', fontSize: '0.62rem', color: 'var(--ink4)', letterSpacing: '0.06em' }}>
            © {new Date().getFullYear()} Harsh Rajput · New Delhi
          </span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {[['GitHub', ME.github], ['LinkedIn', ME.linkedin], ['Email', `mailto:${ME.email}`]].map(([l, h]) => (
              <a key={l} href={h} target={h.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                style={{
                  fontFamily: 'var(--ff-mono)', fontSize: '0.6rem',
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--ink4)', transition: 'color 0.2s',
                  WebkitTapHighlightColor: 'transparent',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--ink4)'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
