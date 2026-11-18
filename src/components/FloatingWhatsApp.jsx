import { useLanguage } from '../i18n/LanguageContext';
import { ui, whatsappLink } from '../data/portfolio';
import { WhatsAppIcon } from './BrandIcons';
import styles from './FloatingWhatsApp.module.css';

// Always-visible WhatsApp button, the fastest way for clients to get in touch.
export const FloatingWhatsApp = () => {
  const { t } = useLanguage();

  return (
    <a
      href={whatsappLink(t(ui.hero.whatsappText))}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.fab}
      aria-label={t(ui.hero.whatsapp)}
      title={t(ui.hero.whatsapp)}
    >
      <span className={styles.ring} aria-hidden="true" />
      <WhatsAppIcon />
    </a>
  );
};
