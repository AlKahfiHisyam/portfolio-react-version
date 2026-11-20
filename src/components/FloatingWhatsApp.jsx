import { useLanguage } from '../i18n/LanguageContext';
import { ui, whatsappLink } from '../data/portfolio';
import { TicketLink } from './TicketLink';
import styles from './FloatingWhatsApp.module.css';

// Always-visible WhatsApp ticket, the fastest way for clients to get in touch.
export const FloatingWhatsApp = () => {
  const { t } = useLanguage();

  return (
    <TicketLink
      href={whatsappLink(t(ui.hero.whatsappText))}
      className={styles.fab}
      aria-label={t(ui.hero.whatsapp)}
      title={t(ui.hero.whatsapp)}
    >
      <span className={styles.label}>{t(ui.hero.whatsappShort)}</span>
    </TicketLink>
  );
};
