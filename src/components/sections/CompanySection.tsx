import SectionTitle from '../ui/SectionTitle';
import { COMPANY_INFO, GROUP_COMPANIES } from '../../data/siteData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './CompanySection.module.css';

const CARD_COLORS = [
  'var(--color-primary)',
  'var(--color-green)',
  '#6B8EC4',
  '#C47B8B',
];

export default function CompanySection() {
  const { ref: photoRef, isVisible: photoVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation();

  return (
    <section id="company" className={`section ${styles.company}`}>
      <div className={styles.bgPattern} aria-hidden="true" />
      <div className="container">
        <SectionTitle label="ABOUT" title="施設概要" />
        <div className={styles.layout}>
          <div
            ref={photoRef}
            className={`${styles.photoArea} fadeInLeft${photoVisible ? ' is-visible' : ''}`}
          >
            <div className={styles.collage}>
              <div className={styles.photoBack}>
                <img
                  src={COMPANY_INFO.subImage}
                  alt="施設外観"
                  loading="lazy"
                />
              </div>
              <div className={styles.photoFront}>
                <img
                  src={COMPANY_INFO.image}
                  alt={COMPANY_INFO.name}
                  loading="lazy"
                />
              </div>
            </div>
            <div className={styles.infoCard}>
              <dl className={styles.infoTable}>
                <dt>運営法人</dt>
                <dd>{COMPANY_INFO.name}</dd>
                <dt>代表者</dt>
                <dd>{COMPANY_INFO.representative}</dd>
                <dt>設立</dt>
                <dd>{COMPANY_INFO.established}</dd>
                <dt>事業内容</dt>
                <dd>{COMPANY_INFO.business}</dd>
                <dt>所在地</dt>
                <dd>{COMPANY_INFO.address}</dd>
                <dt>TEL</dt>
                <dd>{COMPANY_INFO.tel}</dd>
                <dt>FAX</dt>
                <dd>{COMPANY_INFO.fax}</dd>
              </dl>
            </div>
          </div>

          <div
            ref={gridRef}
            className={`${styles.groupArea} fadeInRight${gridVisible ? ' is-visible' : ''}`}
          >
            <h3 className={styles.groupHeading}>グループ事業所</h3>
            <div className={styles.companyGrid}>
              {GROUP_COMPANIES.map((company, index) => (
                <div
                  key={company.name}
                  className={`${styles.companyCard} scaleIn stagger-${index + 1}${gridVisible ? ' is-visible' : ''}`}
                  style={{ '--accent-color': CARD_COLORS[index] } as React.CSSProperties}
                >
                  <div className={styles.cardIcon}>
                    <span className="material-symbols-outlined">{company.icon}</span>
                  </div>
                  <p className={styles.companyName}>{company.name}</p>
                  <p className={styles.companyAddress}>{company.address}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
