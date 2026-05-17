import React from 'react';
import useFade from '../hooks/useFade';
import useMediaQuery from '../hooks/useMediaQuery';
import { ME } from '../data';

export default function Hero() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const f1 = useFade(0.05);
  const f2 = useFade(0.18);
  const f3 = useFade(0.32);
  const f4 = useFade(0.46);

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: isMobile ? '6rem 1.5rem 4rem' : '6rem 2.5rem 4rem',
      maxWidth: 1140, margin: '0 auto', width: '100%',
    }}>

      {/* Status badge */}
      <div {...f1} style={{ ...f1.style, marginBottom: '2rem' }}>
        <span style={{
          display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.32rem 0.9rem', borderRadius: 99,
          background: 'var(--accentbg)', border: '1px solid #C4DDD0',
          fontFamily: 'var(--ff-mono)', fontSize: '0.65rem',
          letterSpacing: '0.1em', color: 'var(--accent)',
        }}>
          <span style={{
            width: 6, height: 6, borderRadius: '50%',
            background: 'var(--accent)', display: 'inline-block',
            animation: 'pulse 2s infinite',
          }} />
          Open to work · New Delhi, India
        </span>
      </div>

      {/* Name */}
      <div {...f2} style={f2.style}>
        <h1 style={{
          fontFamily: 'var(--ff-display)', fontWeight: 800,
          fontSize: isMobile ? 'clamp(3.2rem, 18vw, 5rem)' : 'clamp(3.8rem, 10vw, 8.5rem)',
          lineHeight: 0.9, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '0.06em',
        }}>Harsh</h1>
        <h1 style={{
          fontFamily: 'var(--ff-display)', fontWeight: 800,
          fontSize: isMobile ? 'clamp(3.2rem, 18vw, 5rem)' : 'clamp(3.8rem, 10vw, 8.5rem)',
          lineHeight: 0.9, letterSpacing: '-0.03em', color: 'var(--accent)',
        }}>Rajput</h1>
      </div>

      {/* Divider */}
      <div {...f3} style={{
        ...f3.style, display: 'flex', alignItems: 'center',
        gap: '1.5rem', margin: '2.2rem 0',
      }}>
        <div style={{ flex: 1, height: 1, background: 'var(--line2)' }} />
        <span style={{
          fontFamily: 'var(--ff-mono)',
          fontSize: isMobile ? '0.6rem' : '0.68rem',
          letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink3)',
          whiteSpace: 'nowrap',
        }}>Full Stack · AI Engineering</span>
        <div style={{ flex: 1, height: 1, background: 'var(--line2)' }} />
      </div>

      {/* Body — stacked on mobile, grid on desktop */}
      <div {...f4} style={{
        ...f4.style,
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
        gap: isMobile ? '2rem' : '3.5rem',
        alignItems: 'end',
      }}>
        {/* Bio + CTA */}
        <div>
          <p style={{
            fontSize: '1rem', fontWeight: 300, lineHeight: 1.8,
            color: 'var(--ink2)', maxWidth: 430, marginBottom: '2rem',
          }}>
            I design and ship intelligent, full-stack products. Focused on applied LLM engineering — RAG systems, AI tooling, and scalable MERN applications.
          </p>
          <div style={{ display: 'flex', gap: '0.7rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Get in touch ↗', href: `mailto:${ME.email}`, primary: true },
              { label: 'GitHub', href: ME.github },
              { label: 'LinkedIn', href: ME.linkedin },
            ].map(({ label, href, primary }) => (
              <a key={label} href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center',
                  padding: '0.58rem 1.3rem', borderRadius: 4,
                  fontFamily: 'var(--ff-body)', fontSize: '0.84rem',
                  fontWeight: primary ? 500 : 400,
                  background: primary ? 'var(--accent)' : 'transparent',
                  color: primary ? '#fff' : 'var(--ink2)',
                  border: primary ? 'none' : '1px solid var(--line2)',
                  transition: 'all 0.2s',
                  WebkitTapHighlightColor: 'transparent',
                }}
                onMouseEnter={e => {
                  if (primary) e.currentTarget.style.background = 'var(--accent2)';
                  else { e.currentTarget.style.borderColor = 'var(--ink3)'; e.currentTarget.style.color = 'var(--ink)'; }
                }}
                onMouseLeave={e => {
                  if (primary) e.currentTarget.style.background = 'var(--accent)';
                  else { e.currentTarget.style.borderColor = 'var(--line2)'; e.currentTarget.style.color = 'var(--ink2)'; }
                }}
              >{label}</a>
            ))}
          </div>
        </div>

        {/* Stats grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px', background: 'var(--line)',
          border: '1px solid var(--line2)', borderRadius: 10, overflow: 'hidden',
        }}>
          {ME.stats.map(s => (
            <div key={s.label} style={{
              padding: isMobile ? '1.2rem 0.6rem' : '1.6rem 1rem',
              background: 'var(--bg2)', textAlign: 'center',
            }}>
              <div style={{
                fontFamily: 'var(--ff-display)', fontWeight: 800,
                fontSize: isMobile ? '1.4rem' : '1.9rem',
                color: 'var(--accent)', letterSpacing: '-0.02em', marginBottom: '0.3rem',
              }}>{s.n}</div>
              <div style={{
                fontFamily: 'var(--ff-mono)',
                fontSize: isMobile ? '0.5rem' : '0.58rem',
                letterSpacing: '0.06em', color: 'var(--ink3)',
                textTransform: 'uppercase', lineHeight: 1.5,
              }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
