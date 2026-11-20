import { useState } from 'react';
import { Check, Download, Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { profile, ui, whatsappLink } from '../data/portfolio';
import { Reveal } from './Reveal';
import { TicketLink } from './TicketLink';
import styles from './Paths.module.css';

export const Paths = () => {
  const { t } = useLanguage();
  const { build, hire } = ui.paths;
  // Phones show one offer at a time; wider screens show both side by side.
  const [tab, setTab] = useState('build');

  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <Reveal className="section-head">
          <h2 id="services-title">{t(ui.paths.title)}</h2>
        </Reveal>

        <div className={styles.tabs} role="tablist" aria-label={t(ui.paths.title)}>
          {['build', 'hire'].map((key) => (
            <button
              key={key}
              type="button"
              role="tab"
              id={`tab-${key}`}
              aria-selected={tab === key}
              aria-controls={`panel-${key}`}
              onClick={() => setTab(key)}
            >
              {t(key === 'build' ? ui.paths.tabBuild : ui.paths.tabHire)}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          <Reveal
            as="article"
            id="panel-build"
            aria-labelledby="tab-build"
            className={`${styles.path} ${styles.build} ${tab === 'build' ? styles.active : ''}`}
          >
            <h3><span className={styles.counter} aria-hidden="true">A</span>{t(build.title)}</h3>
            <p className={styles.intro}>{t(build.intro)}</p>
            <ul>
              {build.items.map((item) => (
                <li key={item.en}><Check aria-hidden="true" />{t(item)}</li>
              ))}
            </ul>
            <div className={styles.actions}>
              <TicketLink href={whatsappLink(t(ui.hero.whatsappText))}>
                <span className={styles.full}>{t(build.cta)}</span>
                <span className={styles.short}>WhatsApp</span>
              </TicketLink>
              <a href="#contact" className="btn btn-secondary">{t(build.secondary)}</a>
            </div>
          </Reveal>

          <Reveal as="article" id="panel-hire" aria-labelledby="tab-hire" className={`${styles.path} ${styles.hire} ${tab === 'hire' ? styles.active : ''}`} delay={100}>
            <h3><span className={styles.counter} aria-hidden="true">B</span>{t(hire.title)}</h3>
            <p className={styles.intro}>{t(hire.intro)}</p>
            <ul>
              {hire.items.map((item) => (
                <li key={item.en}><Check aria-hidden="true" />{t(item)}</li>
              ))}
            </ul>
            <div className={styles.actions}>
              {profile.cv ? (
                <a href={profile.cv} download className="btn btn-sign">
                  <Download aria-hidden="true" />
                  {t(hire.cv)}
                </a>
              ) : (
                <a href={`mailto:${profile.email}`} className="btn btn-sign">
                  <Mail aria-hidden="true" />
                  {t(hire.email)}
                </a>
              )}
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                {t(hire.linkedin)}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
