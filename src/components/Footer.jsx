import { ArrowUp, Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { profile, ui, whatsappLink } from '../data/portfolio';
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from './BrandIcons';
import styles from './Footer.module.css';

export const Footer = () => {
  const { t } = useLanguage();

  const socials = [
    { label: 'WhatsApp', href: whatsappLink(t(ui.hero.whatsappText)), Icon: WhatsAppIcon, external: true },
    { label: 'Email', href: `mailto:${profile.email}`, Icon: Mail },
    { label: 'LinkedIn', href: profile.linkedin, Icon: LinkedInIcon, external: true },
    { label: 'GitHub', href: `https://github.com/${profile.github}`, Icon: GitHubIcon, external: true },
  ];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.top}>
          <div>
            <p className={styles.line}>{t(ui.footer.line)}</p>
            <a
              href={whatsappLink(t(ui.hero.whatsappText))}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-wa btn-lg"
            >
              <WhatsAppIcon />
              {t(ui.hero.whatsapp)}
            </a>
          </div>
          <ul className={styles.socials}>
            {socials.map(({ label, href, Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  {...(external && { target: '_blank', rel: 'noopener noreferrer' })}
                >
                  <Icon />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className={styles.wordmark} aria-hidden="true">Al-Kahfi</p>

        <div className={styles.bottom}>
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
