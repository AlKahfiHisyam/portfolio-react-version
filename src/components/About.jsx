import { Download, Plane } from 'lucide-react';
import { about, profile, ui } from '../data/portfolio';
import { useLanguage } from '../i18n/LanguageContext';
import { Activity } from './Activity';
import { Reveal } from './Reveal';
import styles from './About.module.css';

// The facts a recruiter scans for, printed as a boarding pass. The CV is the tear-off stub.
const BoardingPass = () => {
  const { t } = useLanguage();
  const p = ui.about.pass;
  return (
    <article className={styles.pass} aria-label={t(p.title)}>
      <div className={styles.passMain}>
        <header className={styles.passHead}>
          <span>{t(p.title)}</span>
          <Plane aria-hidden="true" />
        </header>
        <div className={styles.passBody}>
          <img src={profile.photo} alt={t(ui.about.photoAlt)} className={styles.photo} width="112" height="140" loading="lazy" />
          <dl className={styles.fields}>
            <div className={styles.wide}>
              <dt>{t(p.passenger)}</dt>
              <dd>{profile.name}</dd>
            </div>
            <div>
              <dt>{t(p.from)}</dt>
              <dd className={styles.code}>{t(p.fromValue)}</dd>
            </div>
            <div>
              <dt>{t(p.to)}</dt>
              <dd className={styles.code}>{t(p.toValue)}</dd>
            </div>
            <div className={styles.wide}>
              <dt>{t(p.class)}</dt>
              <dd>{t(p.classValue)}</dd>
            </div>
            <div className={styles.wide}>
              <dt>{t(p.education)}</dt>
              <dd>{t(ui.about.best)}. {t(ui.about.gpa)}</dd>
            </div>
            <div className={styles.wide}>
              <dt>{t(ui.about.certTitle)}</dt>
              <dd>{t(about.courses)}</dd>
            </div>
          </dl>
        </div>
      </div>
      {profile.cv && (
        <a href={profile.cv} download className={styles.stub}>
          <span className={styles.barcode} aria-hidden="true" />
          <span className={styles.stubLabel}>
            <Download aria-hidden="true" />
            {t(ui.paths.hire.cv)}
          </span>
        </a>
      )}
    </article>
  );
};

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="section" aria-labelledby="about-title">
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

          <Reveal delay={120}>
            <BoardingPass />
          </Reveal>
        </div>

        <div className={styles.lower}>
          <Reveal className={styles.toolkit}>
            <h3>{t(ui.about.toolkit)}</h3>
            <dl className={styles.groups}>
              {about.toolkit.map((row) => (
                <div key={t(row.group)} className={styles.group}>
                  <dt>{t(row.group)}</dt>
                  <dd>{t(row.items).split(', ').join(' · ')}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal className={styles.activity} delay={80}>
            <Activity />
          </Reveal>
        </div>
      </div>
    </section>
  );
};
