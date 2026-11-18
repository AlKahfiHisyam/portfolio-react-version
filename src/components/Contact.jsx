import { useState } from 'react';
import { Mail } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { profile, ui, whatsappLink } from '../data/portfolio';
import { GitHubIcon, LinkedInIcon, WhatsAppIcon } from './BrandIcons';
import styles from './Contact.module.css';

const emptyForm = { name: '', email: '', message: '' };

export const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState(emptyForm);
  const [status, setStatus] = useState('idle'); // idle | sending | sent | failed
  const c = ui.contact;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status !== 'sending') setStatus('idle');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xwvblllz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error(`Formspree responded ${response.status}`);
      setFormData(emptyForm);
      setStatus('sent');
    } catch (err) {
      console.error('Formspree error:', err);
      setStatus('failed');
    }
  };

  return (
    <section id="contact" className={`section ${styles.contact}`} aria-labelledby="contact-title">
      <div className={`container ${styles.grid}`}>
        <div>
          <h2 id="contact-title" className={styles.title}>{t(c.title)}</h2>
          <p className={styles.intro}>{t(c.intro)}</p>

          <div className={styles.channels}>
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
          <p className={styles.linkedin}>
            <a href={`mailto:${profile.email}`} className={styles.social} title={profile.email}>
              <Mail aria-hidden="true" />
              <span className={styles.full}>{profile.email}</span>
              <span className={styles.short}>Email</span>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={styles.social}>
              <LinkedInIcon />
              LinkedIn
            </a>
            <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer" className={styles.social}>
              <GitHubIcon />
              GitHub
            </a>
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.pair}>
            <label className={styles.field}>
              <span>{t(c.name)}</span>
              <input type="text" name="name" autoComplete="name" maxLength={100} value={formData.name} onChange={handleChange} required />
            </label>
            <label className={styles.field}>
              <span>{t(c.email)}</span>
              <input type="email" name="email" autoComplete="email" maxLength={200} value={formData.email} onChange={handleChange} required />
            </label>
          </div>
          <label className={styles.field}>
            <span>{t(c.message)}</span>
            <textarea
              name="message"
              rows="5"
              maxLength={4000}
              placeholder={t(c.messageHint)}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>
          <div className={styles.actions}>
            <button type="submit" className="btn btn-primary btn-lg" disabled={status === 'sending'}>
              {status === 'sending' ? t(c.sending) : t(c.send)}
            </button>
            <p className={`${styles.status} ${status === 'failed' ? styles.failed : ''}`} role="status">
              {status === 'sent' && t(c.sent)}
              {status === 'failed' && t(c.failed)}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};
