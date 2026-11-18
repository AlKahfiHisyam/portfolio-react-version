import { useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { experience, recentCount, ui } from '../data/portfolio';
import { Reveal } from './Reveal';
import styles from './Experience.module.css';

const Job = ({ job, index }) => {
  const { t } = useLanguage();
  return (
    <Reveal as="li" className={styles.job} delay={(index % 3) * 60}>
      <span className={`${styles.node} ${job.current ? styles.live : ''}`} aria-hidden="true" />
      <article className={styles.card}>
        <header className={styles.head}>
          <span
            className={`${styles.mark} ${job.mark?.cover ? styles.coverMark : styles.logoMark}`}
            style={{ '--mark': job.mark?.color ?? '#64748b', ...(job.mark?.plate && { background: job.mark.plate }) }}
            aria-hidden="true"
          >
            {job.mark?.logo && <img src={job.mark.logo} alt="" loading="lazy" />}
          </span>
          <div className={styles.who}>
            <h3>{t(job.company)}</h3>
            <p className={styles.role}>{t(job.role)}</p>
          </div>
          <p className={styles.period}>
            {job.current && <span className={styles.now}>{t(ui.experience.current)}</span>}
            {t(job.period)}
          </p>
        </header>
        <ul className={styles.points}>
          {job.points.map((point) => <li key={point.en}>{t(point)}</li>)}
        </ul>
      </article>
    </Reveal>
  );
};

export const Experience = () => {
  const { t } = useLanguage();
  const lineRef = useRef(null);
  const recent = experience.slice(0, recentCount);
  const earlier = experience.slice(recentCount);

  // The timeline's accent line fills as the reader scrolls through it.
  useEffect(() => {
    const el = lineRef.current;
    if (!el) return undefined;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.setProperty('--progress', '1');
      return undefined;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = el.getBoundingClientRect();
      const progress = (window.innerHeight * 0.7 - rect.top) / rect.height;
      el.style.setProperty('--progress', Math.min(Math.max(progress, 0), 1).toFixed(3));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section id="experience" className={`section ${styles.experience}`} aria-labelledby="experience-title">
      <div className="container">
        <Reveal className="section-head">
          <h2 id="experience-title">{t(ui.experience.title)}</h2>
          <p>{t(ui.experience.intro)}</p>
        </Reveal>

        <div ref={lineRef} className={styles.timeline}>
          <ol className={styles.list}>
            {recent.map((job, i) => <Job key={job.period + t(job.company)} job={job} index={i} />)}
          </ol>
          {earlier.length > 0 && (
            <details className={styles.earlier}>
              <summary>
                {t(ui.experience.earlier)} ({earlier.length})
                <ChevronDown aria-hidden="true" />
              </summary>
              <ol className={styles.list}>
                {earlier.map((job, i) => <Job key={job.period + t(job.company)} job={job} index={i} />)}
              </ol>
            </details>
          )}
        </div>
      </div>
    </section>
  );
};
