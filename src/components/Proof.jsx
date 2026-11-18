import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { ui } from '../data/portfolio';
import { useInView } from './useInView';
import styles from './Proof.module.css';

const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Counts from 0 to `value` once the number scrolls into view.
const Count = ({ value, start, locale }) => {
  const [n, setN] = useState(reduced() ? value : 0);

  useEffect(() => {
    if (!start || reduced()) {
      if (start) setN(value);
      return undefined;
    }
    let frame;
    const t0 = performance.now();
    const ms = 1400;
    const tick = (now) => {
      const p = Math.min((now - t0) / ms, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [start, value]);

  return n.toLocaleString(locale);
};

export const Proof = () => {
  const { lang, t } = useLanguage();
  const [ref, inView] = useInView({ threshold: 0.3 });
  const locale = lang === 'id' ? 'id-ID' : 'en-US';

  return (
    <section className={styles.proof} aria-labelledby="proof-title">
      <div className="container">
        <h2 id="proof-title" className="sr-only">{t(ui.proof.title)}</h2>
        <dl ref={ref} className={styles.grid}>
          {ui.proof.items.map((item) => (
            <div key={item.label.en} className={styles.item}>
              <dt className={styles.value}>
                <Count value={item.value} start={inView} locale={locale} />
                {t(item.suffix)}
                <span className="sr-only"> </span>
              </dt>
              <dd className={styles.label}>{t(item.label)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
