import React, { useState, useEffect } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

export default function Nav() {
  const [sc, setSc] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 640px)');

  useEffect(() => {
    const h = () => setSc(window.scrollY > 30);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const go = id => {
    setMenuOpen(false);
    setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }), 10);
  };

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999,
        padding: '0 1.5rem',
        backgroundColor: sc || menuOpen ? 'rgba(255,255,255,0.96)' : 'transparent',
        backdropFilter: sc || menuOpen ? 'blur(10px)' : 'none',
        borderBottom: sc || menuOpen ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'background-color 0.2s, border-color 0.2s',
      }}>
        <div style={{
          maxWidth: 1100, margin: '0 auto', height: 60,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <span style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--ink)', letterSpacing: '-0.01em' }}>Harsh Rajput</span>

          {!isMobile && (
            <nav style={{ display: 'flex', gap: '1.8rem', alignItems: 'center' }}>
              {['projects', 'skills', 'experience'].map(id => (
                <button key={id} onClick={() => go(id)} style={{
                  background: 'none', border: 'none', padding: '0.2rem 0',
                  fontSize: '0.9rem', textTransform: 'capitalize',
                  color: 'var(--ink2)', cursor: 'pointer',
                  borderBottom: '1.5px solid transparent',
                  transition: 'border-color 0.15s ease, color 0.15s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.color = 'var(--ink)'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'transparent'; e.currentTarget.style.color = 'var(--ink2)'; }}
                >{id}</button>
              ))}
              <a href="mailto:harshrajput18@gmail.com" style={{
                fontSize: '0.88rem', fontWeight: 600,
                padding: '0.5rem 1.1rem', borderRadius: 'var(--radius-sm)',
                background: 'var(--accent)', color: '#fff',
                transition: 'background 0.15s ease',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--accent2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
              >Hire me</a>
            </nav>
          )}

          {isMobile && (
            <button
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              style={{
                background: 'none', border: 'none', padding: '0.5rem',
                display: 'flex', flexDirection: 'column', gap: 5,
                cursor: 'pointer', zIndex: 1001,
              }}
            >
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: 'block', width: 22, height: 2,
                  background: 'var(--ink)', borderRadius: 2,
                  transition: 'all 0.3s',
                  transform: menuOpen
                    ? i === 0 ? 'translateY(7px) rotate(45deg)'
                    : i === 2 ? 'translateY(-7px) rotate(-45deg)'
                    : 'scaleX(0)'
                    : 'none',
                  opacity: menuOpen && i === 1 ? 0 : 1,
                }} />
              ))}
            </button>
          )}
        </div>
      </header>

      {isMobile && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 998,
          background: 'var(--bg)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: '2rem',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transition: 'opacity 0.25s ease',
        }}>
          {['projects', 'skills', 'experience'].map(id => (
            <button key={id} onClick={() => go(id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontWeight: 600, fontSize: '1.6rem',
              color: 'var(--ink)', textTransform: 'capitalize',
            }}>{id}</button>
          ))}
          <a href="mailto:harshrajput18@gmail.com" style={{
            fontSize: '0.9rem', fontWeight: 500,
            padding: '0.65rem 1.6rem', borderRadius: 6,
            background: 'var(--accent)', color: '#fff',
            marginTop: '0.5rem',
          }}>Hire me</a>
        </div>
      )}
    </>
  );
}
