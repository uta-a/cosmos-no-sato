import SectionTitle from '../ui/SectionTitle';
import { FEATURES } from '../../data/siteData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './FeaturesSection.module.css';

function FeatureBlock({ feature, index }: { feature: typeof FEATURES[number]; index: number }) {
  const { ref, isVisible } = useScrollAnimation();
  const num = String(index + 1).padStart(2, '0');
  const isReversed = index === 1;
  const isBanner = index === 2;

  if (isBanner) {
    return (
      <div
        ref={ref}
        className={`${styles.block} ${styles.bannerBlock} fadeInUp${isVisible ? ' is-visible' : ''}`}
        data-num={num}
      >
        <div className={styles.bannerImageWrapper}>
          <img src={feature.image} alt={feature.title} loading="lazy" className={styles.bannerImage} />
        </div>
        <div className={styles.bannerOverlay}>
          <div className={styles.bannerContent}>
            <div className={styles.iconBadge}>
              <span className="material-symbols-outlined">{feature.icon}</span>
            </div>
            <h3 className={styles.blockTitle}>{feature.title}</h3>
            <p className={styles.blockDescription}>{feature.description}</p>
          </div>
        </div>
      </div>
    );
  }

  const animClass = isReversed ? 'fadeInRight' : 'fadeInLeft';

  return (
    <div
      ref={ref}
      className={`${styles.block} ${isReversed ? styles.blockReversed : ''} ${animClass}${isVisible ? ' is-visible' : ''}`}
      data-num={num}
    >
      <div className={styles.imageWrapper}>
        <img src={feature.image} alt={feature.title} loading="lazy" className={styles.image} />
      </div>
      <div className={styles.textWrapper}>
        <div className={styles.envelopeFlap} />
        <div className={styles.envelopeBody}>
          <div className={styles.iconBadge}>
            <span className="material-symbols-outlined">{feature.icon}</span>
          </div>
          <h3 className={styles.blockTitle}>{feature.title}</h3>
          <p className={styles.blockDescription}>{feature.description}</p>
        </div>
      </div>
    </div>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className={`section ${styles.features}`}>
      <div className={styles.bgDecorBottom} />
      <div className="container">
        <SectionTitle label="FEATURES" title="コスモスの里の特徴" />
        <div className={styles.blocks}>
          {FEATURES.map((feature, index) => (
            <FeatureBlock key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
