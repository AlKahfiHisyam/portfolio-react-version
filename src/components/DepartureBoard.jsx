import { useEffect, useRef, useState } from 'react';
import { PlaneTakeoff } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { board } from '../data/portfolio';
import { SplitFlap } from './SplitFlap';
import { useInView } from './useInView';
import { useLocalTime } from './useLocalTime';
import styles from './DepartureBoard.module.css';

const LEN = { since: 4, flight: 6, dest: 16, status: 8 };

// One departure. Hovering or focusing it spins its flaps again, like a board updating that line.
const Row = ({ row, index, run }) => {
  const { t } = useLanguage();
  const [bump, setBump] = useState(0);
  const again = () => run && setBump((b) => b + 1);
  const dest = t(row.dest);
  const spin = run + bump;
  const lead = bump ? 0 : index * 2;
  return (
    <li>
      <a href={row.href} className={`${styles.row} ${row.next ? styles.next : ''}`} onMouseEnter={again} onFocus={again}>
        <span className="sr-only">
          {`${dest}: ${t(row.role)}, ${t(board.cols.since).toLowerCase()} ${row.since}. ${t(board.statusLong[row.status])}.`}
        </span>
        <span className={styles.since}><SplitFlap text={row.since} length={LEN.since} run={spin} delay={lead} tone="dim" /></span>
        <span className={styles.flight}><SplitFlap text={row.flight} length={LEN.flight} run={spin} delay={lead + 2} tone="sign" /></span>
        <span className={styles.dest}><SplitFlap text={dest} length={LEN.dest} run={spin} delay={lead + 4} /></span>
        <span className={styles.status}>
          <SplitFlap text={t(board.status[row.status])} length={LEN.status} run={spin} delay={lead + 8} tone={row.status} />
        </span>
      </a>
    </li>
  );
};

// The hero's departure board: real clients as departures, the visitor's team as the next flight out.
// The flaps spin once when the board comes into view and again whenever the language changes.
export const DepartureBoard = () => {
  const { lang, t } = useLanguage();
  const time = useLocalTime();
  const [ref, inView] = useInView({ threshold: 0.25, rootMargin: '0px' });
  const [run, setRun] = useState(0);
  const firstLang = useRef(lang);

  useEffect(() => {
    if (inView) setRun((r) => r || 1);
  }, [inView]);

  useEffect(() => {
    if (lang !== firstLang.current) {
      firstLang.current = lang;
      setRun((r) => r + 1);
    }
  }, [lang]);

  return (
    <div ref={ref} className={styles.board} role="region" aria-labelledby="board-title">
      <div className={styles.head}>
        <h2 id="board-title" className={styles.title}>
          <PlaneTakeoff aria-hidden="true" />
          {t(board.title)}
        </h2>
        <p className={styles.clock}>
          <time>{time}</time> WIB
        </p>
      </div>

      <div className={styles.cols} aria-hidden="true">
        <span>{t(board.cols.since)}</span>
        <span>{t(board.cols.flight)}</span>
        <span>{t(board.cols.dest)}</span>
        <span>{t(board.cols.status)}</span>
      </div>

      <ol className={styles.rows}>
        {board.rows.map((row, i) => <Row key={row.flight} row={row} index={i} run={run} />)}
      </ol>
    </div>
  );
};
