import { useState, useEffect, useCallback } from 'react';
import { NAV_ITEMS, SITE_NAME, SITE_NAME_SHORT } from '../../data/siteData';
import styles from './Header.module.css';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleNavClick = useCallback(
    (href: string) => {
      setMenuOpen(false);
      const id = href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [],
  );

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <header
        className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}
      >
        <div className={styles.inner}>
          <button
            className={`${styles.logo} ${scrolled ? styles.logoScrolled : ''}`}
            onClick={scrollToTop}
            type="button"
            aria-label="ページの先頭へ"
          >
            <span className={styles.logoFull}>{SITE_NAME}</span>
            <span className={styles.logoShort}>{SITE_NAME_SHORT}</span>
          </button>

          <nav className={styles.nav} aria-label="メインナビゲーション">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                className={`${styles.navLink} ${scrolled ? styles.navLinkScrolled : ''}`}
                onClick={() => handleNavClick(item.href)}
                type="button"
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button
            className={`${styles.hamburger} ${menuOpen ? styles.hamburgerOpen : ''} ${scrolled && !menuOpen ? styles.hamburgerScrolled : ''}`}
            onClick={() => setMenuOpen((prev) => !prev)}
            type="button"
            aria-label={menuOpen ? 'メニューを閉じる' : 'メニューを開く'}
            aria-expanded={menuOpen}
          >
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
            <span className={styles.hamburgerLine} />
          </button>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={`${styles.overlay} ${menuOpen ? styles.overlayOpen : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className={styles.mobileNav} aria-label="モバイルナビゲーション">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              className={styles.mobileNavLink}
              onClick={() => handleNavClick(item.href)}
              type="button"
              tabIndex={menuOpen ? 0 : -1}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </>
  );
}
