import { Fragment } from 'react';
import SectionTitle from '../ui/SectionTitle';
import { FLOW_STEPS } from '../../data/siteData';
import type { FlowStep } from '../../types';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './FlowSection.module.css';

export default function FlowSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="flow" className={`section ${styles.flow}`}>
      <div className="container">
        <SectionTitle label="FLOW" title="入居の流れ" />
        <div className={styles.steps} ref={ref}>
          {FLOW_STEPS.map((step: FlowStep, index: number) => (
            <Fragment key={step.number}>
              {index > 0 && <div className={styles.arrow} />}
              <div
                className={`${styles.step} scaleIn stagger-${index + 1}${isVisible ? ' is-visible' : ''}`}
              >
                <div className={styles.circleWrapper}>
                  <div className={styles.circle}>
                    <span className="material-symbols-outlined">
                      {step.icon}
                    </span>
                  </div>
                  <span className={styles.badge}>STEP {step.number}</span>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
