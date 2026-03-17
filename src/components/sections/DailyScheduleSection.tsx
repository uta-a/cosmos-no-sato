import SectionTitle from '../ui/SectionTitle';
import { SCHEDULE } from '../../data/siteData';
import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import styles from './DailyScheduleSection.module.css';

function TimelineItem({
  time,
  activity,
  icon,
  index,
  isVisible,
}: {
  time: string;
  activity: string;
  icon: string;
  index: number;
  isVisible: boolean;
}) {
  const isLeft = index % 2 === 0;
  const side = isLeft ? styles.itemLeft : styles.itemRight;
  const pcAnimation = isLeft ? 'fadeInLeft' : 'fadeInRight';

  return (
    <div
      className={`${side} ${pcAnimation} stagger-${Math.min(index + 1, 5)}${isVisible ? ' is-visible' : ''}`}
    >
      <span className={styles.dot} />
      <span className={styles.connector} />
      <div className={styles.card}>
        <span className={styles.timeBadge}>{time}</span>
        <span className={styles.activity}>
          <span className={`material-symbols-outlined ${styles.activityIcon}`}>
            {icon}
          </span>
          {activity}
        </span>
      </div>
    </div>
  );
}

export default function DailyScheduleSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="schedule" className={`section ${styles.schedule}`}>
      <div className="container">
        <SectionTitle label="DAILY LIFE" title="一日の流れ" />
        <div className={styles.timeline} ref={ref}>
          {SCHEDULE.map((item, index) => (
            <TimelineItem
              key={item.time}
              time={item.time}
              activity={item.activity}
              icon={item.icon}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
