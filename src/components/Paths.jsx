import { Check, Download, Mail, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { profile, ui, whatsappLink } from '../data/portfolio';
import { Reveal } from './Reveal';
import styles from './Paths.module.css';

export const Paths = () => {
  const { t } = useLanguage();
  const { build, hire } = ui.paths;

  return (
    <section id="services" className="section" aria-labelledby="services-title">
      <div className="container">
        <Reveal className="section-head">
          <h2 id="services-title">{t(ui.paths.title)}</h2>
        </Reveal>

        <div className={styles.grid}>
          <Reveal as="article" className={`${styles.path} ${styles.build}`}>
            <h3>{t(build.title)}</h3>
            <p className={styles.intro}>{t(build.intro)}</p>
            <ul>
              {build.items.map((item) => (
                <li key={item.en}><Check aria-hidden="true" />{t(item)}</li>
              ))}
            </ul>
            <div className={styles.actions}>
              <a
                href={whatsappLink(t(ui.hero.whatsappText))}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-wa"
              >
                <MessageCircle aria-hidden="true" />
                {t(build.cta)}
              </a>
              <a href="#contact" className="btn btn-secondary">{t(build.secondary)}</a>
            </div>
          </Reveal>

          <Reveal as="article" className={styles.path} delay={100}>
            <h3>{t(hire.title)}</h3>
            <p className={styles.intro}>{t(hire.intro)}</p>
            <ul>
              {hire.items.map((item) => (
                <li key={item.en}><Check aria-hidden="true" />{t(item)}</li>
              ))}
            </ul>
            <div className={styles.actions}>
              {profile.cv ? (
                <a href={profile.cv} download className="btn btn-primary">
                  <Download aria-hidden="true" />
                  {t(hire.cv)}
                </a>
              ) : (
                <a href={`mailto:${profile.email}`} className="btn btn-primary">
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
