import { TEL, FAX, RECEPTION_HOURS, GOOGLE_MAPS_EMBED_URL } from '../../data/siteData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className={styles.transitionOverlay} />
      <div className={styles.woodTexture} />
      <div className="container">
        <div className={styles.splitLayout} ref={ref}>
          <div
            className={`${styles.letterSide} fadeInUp stagger-1${isVisible ? ' is-visible' : ''}`}
          >
            <div className={styles.envelope}>
              <div className={styles.envelopeFlap} />
              <div className={styles.envelopeBody}>
                <h2 className={styles.heading}>
                  お気軽にお問い合わせください
                </h2>
                <p className={styles.subtitle}>
                  ご見学・ご相談は随時受け付けております
                </p>

                <div className={styles.contactInfo}>
                  <a href={`tel:${TEL.replace(/-/g, '')}`} className={styles.phoneLink}>
                    <span className={`material-symbols-outlined ${styles.phoneIcon}`}>
                      call
                    </span>
                    {TEL}
                  </a>
                  <p className={styles.fax}>FAX: {FAX}</p>
                </div>

                <p className={styles.hours}>
                  受付時間 {RECEPTION_HOURS}
                </p>
              </div>
            </div>
          </div>

          <div
            className={`${styles.mapSide} fadeInUp stagger-3${isVisible ? ' is-visible' : ''}`}
          >
            <div className={styles.mapContainer}>
              <iframe
                className={styles.map}
                src={GOOGLE_MAPS_EMBED_URL}
                title="コスモスの里 地図"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
