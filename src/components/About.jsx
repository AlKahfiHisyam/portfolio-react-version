import { BadgeCheck, GraduationCap } from 'lucide-react';
import { about, ui } from '../data/portfolio';
import { useLanguage } from '../i18n/LanguageContext';
import { Activity } from './Activity';
import { Reveal } from './Reveal';
import styles from './About.module.css';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className={`section ${styles.about}`} aria-labelledby="about-title">
      <div className="container">
        <Reveal className="section-head">
          <h2 id="about-title">{t(ui.about.title)}</h2>
        </Reveal>

        <div className={styles.layout}>
          <div className={styles.story}>
            <Reveal as="p" className={styles.statement}>{t(ui.about.statement)}</Reveal>
            <Reveal className={styles.prose} delay={80}>
              {about.paragraphs.map((text) => <p key={text.en}>{t(text)}</p>)}
            </Reveal>
          </div>

          <div className={styles.bento}>
            <Reveal className={`${styles.tile} ${styles.grad}`}>
              <span className={styles.icon}><GraduationCap aria-hidden="true" /></span>
              <p className={styles.big}>{t(ui.about.best)}</p>
              <p className={styles.small}>{t(ui.about.gpa)}</p>
            </Reveal>

            <Reveal className={`${styles.tile} ${styles.cert}`} delay={80}>
              <span className={styles.icon}><BadgeCheck aria-hidden="true" /></span>
              <p className={styles.mid}>{t(ui.about.certTitle)}</p>
              <p className={styles.small}>{t(about.courses)}</p>
            </Reveal>

            <Reveal className={styles.activity} delay={120}>
              <Activity />
            </Reveal>
          </div>
        </div>

        <Reveal className={styles.toolkit}>
          <h3>{t(ui.about.toolkit)}</h3>
          <div className={styles.groups}>
            {about.toolkit.map((row) => (
              <div key={t(row.group)} className={styles.group}>
                <p className={styles.groupName}>{t(row.group)}</p>
                <ul className={styles.chips}>
                  {t(row.items).split(', ').map((item, i) => (
                    <li key={item} style={{ '--i': i }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
