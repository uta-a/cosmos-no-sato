import SectionTitle from '../ui/SectionTitle';
import { COMPANY_INFO, GROUP_COMPANIES } from '../../data/siteData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './CompanySection.module.css';

export default function CompanySection() {
  const { ref: leftRef, isVisible: leftVisible } = useScrollAnimation();
  const { ref: rightRef, isVisible: rightVisible } = useScrollAnimation();

  return (
    <section id="company" className={`section ${styles.company}`}>
      <div className="container">
        <SectionTitle label="ABOUT" title="施設概要" />
        <div className={styles.layout}>
          <div
            ref={leftRef}
            className={`${styles.left} fadeInLeft${leftVisible ? ' is-visible' : ''}`}
          >
            <img
              className={styles.corpImage}
              src={COMPANY_INFO.image}
              alt={COMPANY_INFO.name}
              loading="lazy"
            />
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
          <div
            ref={rightRef}
            className={`${styles.right} fadeInRight${rightVisible ? ' is-visible' : ''}`}
          >
            <h3 className={styles.groupHeading}>グループ事業所</h3>
            <div className={styles.companyList}>
              {GROUP_COMPANIES.map((company) => (
                <div key={company.name} className={styles.companyCard}>
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
