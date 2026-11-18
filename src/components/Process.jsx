import { useLanguage } from '../i18n/LanguageContext';
import { ui } from '../data/portfolio';
import { Reveal } from './Reveal';
import styles from './Process.module.css';

export const Process = () => {
  const { t } = useLanguage();

  return (
    <section className="section" aria-labelledby="process-title">
      <div className="container">
        <Reveal className="section-head">
          <h2 id="process-title">{t(ui.process.title)}</h2>
          <p>{t(ui.process.intro)}</p>
        </Reveal>
        <ol className={styles.steps}>
          {ui.process.steps.map((step, i) => (
            <Reveal as="li" key={step.title.en} delay={i * 90}>
              <span className={styles.num} aria-hidden="true">{i + 1}</span>
              <h3>{t(step.title)}</h3>
              <p>{t(step.text)}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
};
