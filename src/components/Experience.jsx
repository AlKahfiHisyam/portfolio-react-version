import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { experience, recentCount, ui } from '../data/portfolio';
import { Reveal } from './Reveal';
import styles from './Experience.module.css';

// One line of the flight log. The first point always shows; the rest open on request.
const Job = ({ job }) => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);
  const [first, ...more] = job.points;
  return (
    <li className={styles.job}>
      <p className={styles.period}>{t(job.period)}</p>
      <div className={styles.main}>
        <header className={styles.head}>
          <span
            className={`${styles.mark} ${job.mark?.cover ? styles.cover : ''}`}
            style={{ '--mark': job.mark?.color ?? '#64748b', ...(job.mark?.plate && { background: job.mark.plate }) }}
            aria-hidden="true"
          >
            {job.mark?.logo && <img src={job.mark.logo} alt="" loading="lazy" />}
          </span>
          <div className={styles.who}>
            <h3>{t(job.company)}</h3>
            <p className={styles.role}>{t(job.role)}</p>
          </div>
          {job.current && (
            <span className={styles.now}>
              <span className={styles.lamp} aria-hidden="true" />
              {t(ui.experience.current)}
            </span>
          )}
        </header>
        <ul className={styles.points}>
          <li>{t(first)}</li>
          {open && more.map((point) => <li key={point.en}>{t(point)}</li>)}
        </ul>
        {more.length > 0 && (
          <button type="button" className={styles.more} aria-expanded={open} onClick={() => setOpen((o) => !o)}>
            {open ? t(ui.experience.showLess) : `${t(ui.experience.showAll)} (${job.points.length})`}
            <ChevronDown aria-hidden="true" />
          </button>
        )}
      </div>
    </li>
  );
};

export const Experience = () => {
  const { t } = useLanguage();
  const recent = experience.slice(0, recentCount);
  const earlier = experience.slice(recentCount);

  return (
    <section id="experience" className="section section-subtle" aria-labelledby="experience-title">
      <div className="container">
        <Reveal className="section-head">
          <h2 id="experience-title">{t(ui.experience.title)}</h2>
          <p>{t(ui.experience.intro)}</p>
        </Reveal>

        <Reveal>
          <ol className={styles.log}>
            {recent.map((job) => <Job key={job.period.en + t(job.company)} job={job} />)}
          </ol>
          {earlier.length > 0 && (
            <details className={styles.earlier}>
              <summary>
                {t(ui.experience.earlier)} ({earlier.length})
                <ChevronDown aria-hidden="true" />
              </summary>
              <ol className={styles.log}>
                {earlier.map((job) => <Job key={job.period.en + t(job.company)} job={job} />)}
              </ol>
            </details>
          )}
        </Reveal>
      </div>
    </section>
  );
};
