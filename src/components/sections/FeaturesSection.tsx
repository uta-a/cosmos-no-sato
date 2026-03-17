import SectionTitle from '../ui/SectionTitle';
import { FEATURES } from '../../data/siteData';
import type { Feature } from '../../types';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './FeaturesSection.module.css';

export default function FeaturesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="features" className={`section ${styles.features}`}>
      <div className="container">
        <SectionTitle label="FEATURES" title="コスモスの里の特徴" />
        <div className={styles.grid} ref={ref}>
          {FEATURES.map((feature: Feature, index: number) => (
            <div
              key={feature.title}
              className={`${styles.card} fadeInUp stagger-${index + 1}${isVisible ? ' is-visible' : ''}`}
            >
              <div className={styles.imageWrapper}>
                <img
                  className={styles.image}
                  src={feature.image}
                  alt={feature.title}
                  loading="lazy"
                />
                <div className={styles.iconOverlay}>
                  <span className="material-symbols-outlined">
                    {feature.icon}
                  </span>
                </div>
              </div>
              <div className={styles.body}>
                <h3 className={styles.cardTitle}>{feature.title}</h3>
                <p className={styles.description}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
