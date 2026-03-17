import { TEL, FAX, RECEPTION_HOURS, GOOGLE_MAPS_EMBED_URL } from '../../data/siteData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './ContactSection.module.css';

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <div className={styles.inner} ref={ref}>
          <h2
            className={`${styles.heading} fadeInUp stagger-1${isVisible ? ' is-visible' : ''}`}
          >
            お気軽にお問い合わせください
          </h2>
          <p
            className={`${styles.subtitle} fadeInUp stagger-2${isVisible ? ' is-visible' : ''}`}
          >
            ご見学・ご相談は随時受け付けております
          </p>

          <div
            className={`${styles.contactInfo} fadeInUp stagger-3${isVisible ? ' is-visible' : ''}`}
          >
            <a href={`tel:${TEL.replace(/-/g, '')}`} className={styles.phoneLink}>
              <span className={`material-symbols-outlined ${styles.phoneIcon}`}>
                call
              </span>
              {TEL}
            </a>
            <p className={styles.fax}>FAX: {FAX}</p>
          </div>

          <p
            className={`${styles.hours} fadeInUp stagger-4${isVisible ? ' is-visible' : ''}`}
          >
            受付時間 {RECEPTION_HOURS}
          </p>

          <div
            className={`${styles.mapContainer} fadeInUp stagger-5${isVisible ? ' is-visible' : ''}`}
          >
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
    </section>
  );
}
