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

  // Close menu on resize to desktop
  useEffect(() => {
    if (!isMobile) setMenuOpen(false);
  }, [isMobile]);

  // Prevent body scroll when menu open
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
        backgroundColor: sc || menuOpen ? 'rgba(244,241,236,0.97)' : 'transparent',
        backdropFilter: sc || menuOpen ? 'blur(18px)' : 'none',
        borderBottom: sc || menuOpen ? '1px solid var(--line)' : '1px solid transparent',
        transition: 'all 0.35s',
      }}>
        <div style={{
          maxWidth: 1140, margin: '0 auto', height: 60,
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <span style={{
            fontFamily: 'var(--ff-display)', fontWeight: 800,
            fontSize: '1.05rem', letterSpacing: '0.06em',
            textTransform: 'uppercase', color: 'var(--ink)',
          }}>
            HR<span style={{ color: 'var(--accent)' }}>.</span>
          </span>

          {/* Desktop nav */}
          {!isMobile && (
            <nav style={{ display: 'flex', gap: '2.2rem', alignItems: 'center' }}>
              {['projects', 'skills', 'experience'].map(id => (
                <button key={id} onClick={() => go(id)} style={{
                  background: 'none', border: 'none',
                  fontFamily: 'var(--ff-mono)', fontSize: '0.67rem',
                  letterSpacing: '0.12em', textTransform: 'uppercase',
                  color: 'var(--ink3)', transition: 'color 0.2s', cursor: 'pointer',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--ink3)'}
                >{id}</button>
              ))}
              <a href="mailto:harshrajput18@gmail.com" style={{
                fontFamily: 'var(--ff-body)', fontSize: '0.8rem', fontWeight: 500,
                padding: '0.48rem 1.2rem', borderRadius: 4,
                background: 'var(--accent)', color: '#fff', transition: 'background 0.2s',
              }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--accent2)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
              >Hire me</a>
            </nav>
          )}

          {/* Mobile hamburger */}
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
                  background: 'var(--ink)',
                  borderRadius: 2,
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

      {/* Mobile full-screen menu overlay */}
      {isMobile && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 998,
          background: 'var(--bg)',
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          gap: '2.5rem',
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          transition: 'opacity 0.3s ease',
        }}>
          {['projects', 'skills', 'experience'].map((id, i) => (
            <button key={id} onClick={() => go(id)} style={{
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: 'var(--ff-display)', fontWeight: 700,
              fontSize: '2rem', letterSpacing: '-0.02em',
              color: 'var(--ink)', textTransform: 'capitalize',
              transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: `transform 0.4s ${0.05 * i + 0.1}s ease, opacity 0.4s ${0.05 * i + 0.1}s ease`,
              opacity: menuOpen ? 1 : 0,
            }}>{id}</button>
          ))}
          <a href="mailto:harshrajput18@gmail.com" style={{
            fontFamily: 'var(--ff-body)', fontSize: '0.9rem', fontWeight: 500,
            padding: '0.7rem 2rem', borderRadius: 4,
            background: 'var(--accent)', color: '#fff',
            marginTop: '0.5rem',
            transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
            transition: 'transform 0.4s 0.25s ease, opacity 0.4s 0.25s ease',
            opacity: menuOpen ? 1 : 0,
          }}>Hire me</a>
        </div>
      )}
    </>
  );
}
