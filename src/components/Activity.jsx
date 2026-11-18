import { useMemo } from 'react';
import { useGitHubContributions } from '../hooks/useGitHub';
import { useLanguage } from '../i18n/LanguageContext';
import { profile, ui } from '../data/portfolio';
import styles from './Activity.module.css';

// Sum daily counts into consecutive 7-day buckets, oldest first.
const toWeeks = (days) => {
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    const slice = days.slice(i, i + 7);
    weeks.push({ start: new Date(slice[0].date), count: slice.reduce((sum, d) => sum + d.count, 0) });
  }
  return weeks;
};

export const Activity = () => {
  const { lang, t } = useLanguage();
  const { data, error } = useGitHubContributions(profile.github);
  const weeks = useMemo(() => (data ? toWeeks(data.days) : []), [data]);

  // The section reads fine without it, so a failed fetch simply hides the card.
  if (error || !data || weeks.length === 0) return null;

  const locale = lang === 'id' ? 'id-ID' : 'en-GB';
  const dayMonth = new Intl.DateTimeFormat(locale, { day: 'numeric', month: 'short' });
  const monthYear = new Intl.DateTimeFormat(locale, { month: 'short', year: 'numeric' });
  const max = Math.max(...weeks.map((w) => w.count), 1);
  const busiest = weeks.reduce((a, b) => (b.count > a.count ? b : a));

  return (
    <figure className={styles.card}>
      <figcaption>
        <a href={`https://github.com/${profile.github}`} target="_blank" rel="noopener noreferrer">
          {data.total.toLocaleString(locale)} {t(ui.activity.total)}
        </a>{' '}
        {t(ui.activity.rest)}
      </figcaption>
      <div
        className={styles.bars}
        role="img"
        aria-label={`${t(ui.activity.busiest)}: ${busiest.count}, ${dayMonth.format(busiest.start)}.`}
      >
        {weeks.map((week) => (
          <span
            key={week.start.toISOString()}
            className={week.count === 0 ? styles.empty : ''}
            style={{ '--h': week.count / max }}
            title={`${dayMonth.format(week.start)}: ${week.count}`}
          />
        ))}
      </div>
      <div className={styles.axis} aria-hidden="true">
        <span>{monthYear.format(weeks[0].start)}</span>
        <span>{monthYear.format(weeks[weeks.length - 1].start)}</span>
      </div>
    </figure>
  );
};
