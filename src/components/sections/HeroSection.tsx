import { HERO } from '../../data/siteData';
import Button from '../ui/Button';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  return (
    <section id="hero" className={styles.hero}>
      <img
        src={HERO.image}
        alt="コスモスの里 入り口"
        className={styles.backgroundImage}
      />
      <div className={styles.overlay} aria-hidden="true" />

      <div className={styles.content}>
        <span className={styles.label}>{HERO.label}</span>

        <h1 className={styles.catchCopy}>
          {HERO.catchCopy.split('\n').map((line, i, arr) => (
            <span key={i}>
              {line}
              {i < arr.length - 1 && <br />}
            </span>
          ))}
        </h1>

        <p className={styles.subCopy}>{HERO.subCopy}</p>

        <div className={styles.cta}>
          <Button href="#contact" icon="arrow_forward">
            {HERO.ctaText}
          </Button>
        </div>
      </div>

      <button
        className={styles.scrollArrow}
        onClick={() =>
          document
            .getElementById('features')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
        aria-label="下にスクロール"
        type="button"
      >
        <span className={`material-symbols-outlined ${styles.scrollArrowIcon}`}>
          expand_more
        </span>
      </button>
    </section>
  );
}
