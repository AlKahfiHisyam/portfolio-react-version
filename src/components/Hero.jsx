import { Download, MessageCircle } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { clients, profile, ui, whatsappLink } from '../data/portfolio';
import { HeroShowcase } from './HeroShowcase';
import { useLocalTime } from './useLocalTime';
import styles from './Hero.module.css';

export const Hero = () => {
  const { t } = useLanguage();
  const time = useLocalTime();

  return (
    <section id="top" className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true">
        <span className={styles.glowA} />
        <span className={styles.glowB} />
      </div>
      <div className={`container ${styles.grid}`}>
        <div className={styles.copy}>
          <h1>{t(ui.hero.headline)}</h1>
          <p className={styles.lead}>{t(ui.hero.lead)}</p>

          <div className={styles.actions}>
            <a
              href={whatsappLink(t(ui.hero.whatsappText))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-lg"
            >
              <MessageCircle aria-hidden="true" />
              {t(ui.hero.primary)}
            </a>
            {profile.cv && (
              <a href={profile.cv} download className="btn btn-secondary btn-lg">
                <Download aria-hidden="true" />
                {t(ui.paths.hire.cv)}
              </a>
            )}
          </div>

          <div className={styles.status}>
            <span className={styles.dot} aria-hidden="true" />
            <p>
              {t(ui.hero.available)}
              <span className={styles.time}>
                {t(ui.hero.localTime)} <time>{time}</time> WIB (UTC+7).
              </span>
            </p>
          </div>
        </div>

        <HeroShowcase />
      </div>

      <div className="container">
        <div className={styles.clients}>
          <p>{t(ui.hero.shippedFor)}</p>
          <div className={styles.marquee}>
            <ul className={styles.track}>
              {clients.map((name) => <li key={name}>{name}</li>)}
            </ul>
            <ul className={styles.track} aria-hidden="true">
              {clients.map((name) => <li key={name}>{name}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
