import { useState, useEffect, useRef } from 'react';
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
  isSelected,
  onSelect,
}: {
  time: string;
  activity: string;
  icon: string;
  index: number;
  isVisible: boolean;
  isSelected: boolean;
  onSelect: () => void;
}) {
  const isLeft = index % 2 === 0;
  const sideClass = isLeft ? styles.itemLeft : styles.itemRight;
  const animClass = isLeft ? 'fadeInLeft' : 'fadeInRight';

  return (
    <div
      className={`${styles.timelineItem} ${sideClass} ${animClass} stagger-${Math.min(index + 1, 5)}${isVisible ? ' is-visible' : ''}`}
    >
      <span className={`${styles.dot} ${isSelected ? styles.dotActive : ''}`} />
      <span className={styles.connector} />
      <div
        className={`${styles.card} ${isSelected ? styles.cardSelected : ''}`}
        role="button"
        tabIndex={0}
        aria-pressed={isSelected}
        onClick={onSelect}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onSelect();
          }
        }}
      >
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

function ScheduleListPanel({
  selectedIndex,
  itemRefs,
  panelRef,
}: {
  selectedIndex: number;
  itemRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  panelRef: React.RefObject<HTMLDivElement | null>;
}) {
  return (
    <div className={styles.detailPanel} ref={panelRef}>
      {SCHEDULE.map((item, index) => (
        <div
          key={item.time}
          ref={(el) => { itemRefs.current[index] = el; }}
          className={`${styles.listItem} ${selectedIndex === index ? styles.listItemActive : ''}`}
        >
          <div className={styles.listItemStamp} />
          <span className={`material-symbols-outlined ${styles.listItemIcon}`}>
            {item.icon}
          </span>
          <div className={styles.listItemContent}>
            <span className={styles.listItemTime}>{item.time}</span>
            <h3 className={styles.listItemActivity}>{item.activity}</h3>
            {item.description && (
              <p className={styles.listItemDescription}>{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function DailyScheduleSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = itemRefs.current[selectedIndex];
    const panel = panelRef.current;
    if (el && panel) {
      const elTop = el.offsetTop;
      const elHeight = el.offsetHeight;
      const panelHeight = panel.clientHeight;
      panel.scrollTo({
        top: elTop - panelHeight / 2 + elHeight / 2,
        behavior: 'smooth',
      });
    }
  }, [selectedIndex]);

  return (
    <section id="schedule" className={`section ${styles.schedule}`}>
      <div className={styles.bgDecorLeft} />
      <div className={styles.bgDecorRight} />
      <div className="container">
        <SectionTitle label="DAILY LIFE" title="一日の流れ" />
        <div className={styles.scheduleLayout} ref={ref}>
          <div className={styles.timelineColumn}>
            <span className={styles.timelineCap}>
              <span className={`material-symbols-outlined ${styles.timelineCapIcon}`}>wb_sunny</span>
            </span>
            {SCHEDULE.map((item, index) => (
              <TimelineItem
                key={item.time}
                time={item.time}
                activity={item.activity}
                icon={item.icon}
                index={index}
                isVisible={isVisible}
                isSelected={selectedIndex === index}
                onSelect={() => setSelectedIndex(index)}
              />
            ))}
            <span className={`${styles.timelineCap} ${styles.timelineCapBottom}`}>
              <span className={`material-symbols-outlined ${styles.timelineCapIcon}`}>bedtime</span>
            </span>
          </div>
          <ScheduleListPanel selectedIndex={selectedIndex} itemRefs={itemRefs} panelRef={panelRef} />
        </div>
      </div>
    </section>
  );
}
