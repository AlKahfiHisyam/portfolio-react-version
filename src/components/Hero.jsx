import { Download } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { profile, ui, whatsappLink } from '../data/portfolio';
import { DepartureBoard } from './DepartureBoard';
import { TicketLink } from './TicketLink';
import styles from './Hero.module.css';

export const Hero = () => {
  const { t } = useLanguage();

  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <h1 className={styles.headline}>{t(ui.hero.headline)}</h1>
        <div className={styles.copy}>
          <p className={styles.lead}>{t(ui.hero.lead)}</p>
          <p className={styles.status}>
            <span className={styles.dot} aria-hidden="true" />
            <span>
              {t(ui.hero.available)} <span className={styles.base}>{t(ui.hero.base)}</span>
            </span>
          </p>
        </div>

        <div className={styles.actions}>
          <TicketLink href={whatsappLink(t(ui.hero.whatsappText))} tone="ink" size="lg">
            {t(ui.hero.primary)}
          </TicketLink>
          {profile.cv && (
            <a href={profile.cv} download className="btn btn-secondary btn-lg">
              <Download aria-hidden="true" />
              {t(ui.paths.hire.cv)}
            </a>
          )}
        </div>
      </div>

      <div className={`container ${styles.boardWrap}`}>
        <DepartureBoard />
      </div>
    </section>
  );
};
