import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { profile, ui } from '../data/portfolio';
import styles from './Footer.module.css';

export const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.line}>{t(ui.footer.line)}</p>

        <p className={styles.wordmark} aria-hidden="true">Al-Kahfi</p>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <p>© {new Date().getFullYear()} {profile.name}. {t(ui.footer.role)}</p>
          <a href="#top" className={styles.toTop}>
            {t(ui.footer.top)}
            <ArrowUp aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
};
