import { MessageCircle, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../i18n/LanguageContext';
import { profile, ui, whatsappLink } from '../data/portfolio';
import styles from './Header.module.css';

const sections = ['work', 'services', 'experience', 'about'];

export const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a href="#top" className={styles.brand}>
          <span className={styles.mark} aria-hidden="true">AK</span>
          {profile.shortName}
        </a>

        <nav className={styles.nav} aria-label={t(ui.nav.sections)}>
          {sections.map((id) => (
            <a key={id} href={`#${id}`}>{t(ui.nav[id])}</a>
          ))}
        </nav>

        <div className={styles.actions}>
          <div className={styles.lang} role="group" aria-label={t(ui.nav.language)}>
            {['en', 'id'].map((code) => (
              <button
                key={code}
                type="button"
                aria-pressed={lang === code}
                onClick={() => setLang(code)}
                lang={code}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            className={styles.icon}
            onClick={toggleTheme}
            aria-label={t(isDark ? ui.nav.toLight : ui.nav.toDark)}
          >
            {isDark ? <Sun aria-hidden="true" /> : <Moon aria-hidden="true" />}
          </button>
          <a
            href={whatsappLink(t(ui.hero.whatsappText))}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary ${styles.cta}`}
          >
            <MessageCircle aria-hidden="true" />
            {t(ui.nav.cta)}
          </a>
        </div>
      </div>
    </header>
  );
};
