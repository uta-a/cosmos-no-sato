import { useState, useEffect, useCallback } from 'react';
import { SITE_NAME, ADDRESS, TEL, CORPORATION_NAME } from '../../data/siteData';
import styles from './Footer.module.css';

export default function Footer() {
  const [showPageTop, setShowPageTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowPageTop(window.scrollY > 300);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.inner}>
          <p className={styles.facilityName}>{SITE_NAME}</p>
          <div className={styles.info}>
            <p>{ADDRESS}</p>
            <p>TEL: {TEL}</p>
          </div>
          <p className={styles.copyright}>
            &copy; 2024 {CORPORATION_NAME} All Rights Reserved.
          </p>
        </div>
      </footer>

      <button
        className={`${styles.pageTop} ${showPageTop ? styles.pageTopVisible : ''}`}
        onClick={scrollToTop}
        type="button"
        aria-label="ページの先頭へ"
      >
        <span className={`material-symbols-outlined ${styles.pageTopIcon}`}>
          keyboard_arrow_up
        </span>
      </button>
    </>
  );
}
