import { Plane } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { ui } from '../data/portfolio';
import { Reveal } from './Reveal';
import { useInView } from './useInView';
import styles from './Process.module.css';

// The route draws itself stop by stop while a plane flies it from the first chat to the handover.
export const Process = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.4 });

  return (
    <section className="section" aria-labelledby="process-title">
      <div className="container">
        <Reveal className="section-head">
          <h2 id="process-title">{t(ui.process.title)}</h2>
          <p>{t(ui.process.intro)}</p>
        </Reveal>
        <ol ref={ref} className={`${styles.steps} ${inView ? styles.flying : ''}`}>
          {ui.process.steps.map((step, i) => (
            <li key={step.title.en} style={{ '--i': i }}>
              <span className={styles.num} aria-hidden="true">{i + 1}</span>
              <h3>{t(step.title)}</h3>
              <p>{t(step.text)}</p>
            </li>
          ))}
          <li className={styles.plane} aria-hidden="true"><Plane /></li>
        </ol>
      </div>
    </section>
  );
};
