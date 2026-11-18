import { useLanguage } from '../i18n/LanguageContext';
import { testimonials, ui } from '../data/portfolio';
import { Reveal } from './Reveal';
import styles from './Testimonials.module.css';

// Renders nothing until real quotes are added to src/data/portfolio.js.
export const Testimonials = () => {
  const { t } = useLanguage();
  if (testimonials.length === 0) return null;

  return (
    <section className="section section-subtle" aria-labelledby="testimonials-title">
      <div className="container">
        <Reveal className="section-head">
          <h2 id="testimonials-title">{t(ui.testimonials.title)}</h2>
        </Reveal>
        <div className={styles.grid}>
          {testimonials.map((item) => (
            <figure key={item.name} className={styles.quote}>
              <blockquote>{t(item.quote)}</blockquote>
              <figcaption>
                <strong>{item.name}</strong>
                <span>{t(item.role)}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
