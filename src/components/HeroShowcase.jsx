import { useEffect, useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { featuredProjects, ui } from '../data/portfolio';
import { useInView } from './useInView';
import styles from './HeroShowcase.module.css';

const slides = featuredProjects.filter((p) => p.shot);
const SLIDE_MS = 4200;
const hostname = (url) => new URL(url).hostname.replace(/^www\./, '');
const reduced = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// The hero's right side: a browser window that cycles through real project screens.
// It advances on its own while visible, pauses on hover or focus, and the dots jump to a slide.
export const HeroShowcase = () => {
  const { t } = useLanguage();
  const [ref, inView] = useInView({ once: false, threshold: 0.3, rootMargin: '0px' });
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const auto = !reduced();

  useEffect(() => {
    if (!auto || !inView || paused) return undefined;
    const id = setTimeout(() => setIndex((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => clearTimeout(id);
  }, [auto, inView, paused, index]);

  const current = slides[index];

  return (
    <figure
      ref={ref}
      className={styles.showcase}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-label={t(ui.hero.showcase)}
    >
      <div className={styles.back2} aria-hidden="true" />
      <div className={styles.back1} aria-hidden="true" />
      <div className={styles.window}>
        <div className={styles.bar}>
          <span /><span /><span />
          <div className={styles.url} key={current.url}>{hostname(current.url)}</div>
        </div>
        <div className={styles.viewport}>
          {slides.map((slide, i) => (
            <img
              key={slide.title}
              src={slide.shot}
              alt={i === index ? `${slide.title}: ${t(slide.kind)}` : ''}
              aria-hidden={i !== index}
              loading={i < 2 ? 'eager' : 'lazy'}
              className={`${styles.slide} ${i === index ? styles.active : ''}`}
              style={{ '--ms': `${SLIDE_MS + 800}ms` }}
            />
          ))}
          {auto && !paused && inView && <span className={styles.progress} key={`p-${index}`} style={{ '--ms': `${SLIDE_MS}ms` }} />}
        </div>
      </div>

      <figcaption className={styles.caption}>
        <span className={styles.name} key={current.title}>
          <strong>{current.title}</strong> {t(current.kind)}
        </span>
        <span className={styles.dots}>
          {slides.map((slide, i) => (
            <button
              key={slide.title}
              type="button"
              aria-label={`${t(ui.hero.slide)} ${slide.title}`}
              aria-pressed={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </span>
      </figcaption>
    </figure>
  );
};
