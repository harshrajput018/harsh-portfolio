import React from 'react';
import { ME } from '../data';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--bg2)', borderTop: '1px solid var(--line)' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <h2 style={{
          fontWeight: 600, fontSize: '1.8rem',
          letterSpacing: '-0.02em', color: 'var(--ink)',
          marginBottom: '0.8rem',
        }}>
          Get in touch
        </h2>
        <p style={{ fontSize: '0.95rem', color: 'var(--ink3)', maxWidth: 380, margin: '0 auto 1.8rem', lineHeight: 1.6 }}>
          Open to full-time roles and interesting projects.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={`mailto:${ME.email}`} style={{
            padding: '0.65rem 1.5rem', background: 'var(--accent)', color: '#fff',
            borderRadius: 6, fontWeight: 500, fontSize: '0.9rem',
          }}>{ME.email}</a>
          <a href={ME.linkedin} target="_blank" rel="noreferrer" style={{
            padding: '0.65rem 1.5rem', background: 'transparent', color: 'var(--ink2)',
            border: '1px solid var(--line2)', borderRadius: 6, fontSize: '0.9rem',
          }}>LinkedIn</a>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--line)', padding: '1.2rem 1.5rem' }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '0.8rem',
        }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--ink4)' }}>
            © {new Date().getFullYear()} Harsh Rajput
          </span>
          <div style={{ display: 'flex', gap: '1.3rem' }}>
            {[['GitHub', ME.github], ['LinkedIn', ME.linkedin], ['Email', `mailto:${ME.email}`]].map(([l, h]) => (
              <a key={l} href={h} target={h.startsWith('http') ? '_blank' : undefined} rel="noreferrer"
                style={{ fontSize: '0.8rem', color: 'var(--ink3)' }}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
