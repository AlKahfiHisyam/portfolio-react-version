import { useEffect, useRef, useState } from 'react';
import { BookOpen, CalendarDays, Check, Clock3, LoaderCircle, Thermometer, Users, Wallet } from 'lucide-react';
import { useLanguage } from '../i18n/LanguageContext';
import { featuredProjects, ui } from '../data/portfolio';
import styles from './PismartPanel.module.css';

const moduleIcons = { users: Users, clock: Clock3, calendar: CalendarDays, wallet: Wallet };
const leaveIcons = { annual: CalendarDays, sick: Thermometer, study: BookOpen };
const views = ['leave', 'attendance', 'payroll'];
const VIEW_MS = 5200;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const LeaveView = ({ playing }) => {
  const { t } = useLanguage();
  // A pending request gets approved a moment after the view appears, as it would in PISMART.
  const [approved, setApproved] = useState(!playing);

  useEffect(() => {
    if (!playing) return undefined;
    setApproved(false);
    const id = setTimeout(() => setApproved(true), 1600);
    return () => clearTimeout(id);
  }, [playing]);

  return (
    <>
      <p className={styles.heading}>{t(ui.panel.leave.heading)}</p>
      <ul className={styles.rows}>
        {ui.panel.leave.rows.map((row) => {
          const isLive = row.status === 'live';
          const status = isLive ? (approved ? 'approved' : 'pending') : row.status;
          const Icon = leaveIcons[row.type];
          return (
            <li key={row.detail.en} className={isLive && !approved ? styles.live : ''}>
              <span className={styles.type}><Icon /></span>
              <span className={styles.lines}>
                <span className={styles.title}>{t(row.title)}</span>
                <span className={styles.detail}>{t(row.detail)}</span>
              </span>
              <span className={`${styles.chip} ${styles[status]}`}>
                {status === 'approved' && <Check />}
                {t(status === 'approved' ? ui.panel.approved : ui.panel.pending)}
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

const AttendanceView = () => {
  const { lang, t } = useLanguage();
  const { attendance } = ui.panel;
  const cols = attendance.columns[lang] ?? attendance.columns.en;

  return (
    <>
      <p className={styles.heading}>{t(attendance.heading)}</p>
      <table className={styles.table}>
        <thead>
          <tr>{cols.map((c) => <th key={c} scope="col">{c}</th>)}</tr>
        </thead>
        <tbody>
          {attendance.rows.map((row, i) => (
            <tr key={row.dept.en} style={{ '--i': i }}>
              <th scope="row">{t(row.dept)}</th>
              <td>{row.present}</td>
              <td>{row.leave}</td>
              <td>{row.late}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

const PayrollView = ({ playing }) => {
  const { t } = useLanguage();
  const { payroll } = ui.panel;
  const last = payroll.steps.length - 1;
  // Steps tick off one by one while the view is on screen.
  const [done, setDone] = useState(playing ? 0 : payroll.steps.length);

  useEffect(() => {
    if (!playing) return undefined;
    setDone(0);
    const id = setInterval(() => setDone((d) => Math.min(d + 1, payroll.steps.length)), 900);
    return () => clearInterval(id);
  }, [playing, payroll.steps.length]);

  return (
    <>
      <p className={styles.heading}>{t(payroll.heading)}</p>
      <ol className={styles.steps}>
        {payroll.steps.map((step, i) => {
          const state = i < done ? 'done' : i === done && i <= last ? 'running' : 'waiting';
          return (
            <li key={step.en} className={styles[state]}>
              <span className={styles.stepIcon}>
                {state === 'done' ? <Check /> : state === 'running' ? <LoaderCircle /> : null}
              </span>
              <span className={styles.stepText}>{t(step)}</span>
              {state !== 'waiting' && (
                <span className={`${styles.chip} ${state === 'done' ? styles.approved : styles.pending}`}>
                  {t(state === 'done' ? payroll.done : payroll.running)}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </>
  );
};

// A coded illustration of PISMART with sample data. It cycles through modules on its own
// while visible, like a short screen recording; with reduced motion it stays on `start`.
export const PismartPanel = ({ start = 'leave', inCard = false }) => {
  const { t } = useLanguage();
  const pismart = featuredProjects[0];
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [view, setView] = useState(start);
  const motion = !prefersReducedMotion();

  useEffect(() => {
    if (!motion || !ref.current || !('IntersectionObserver' in window)) return undefined;
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.35 });
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [motion]);

  useEffect(() => {
    if (!visible) return undefined;
    const id = setInterval(() => setView((v) => views[(views.indexOf(v) + 1) % views.length]), VIEW_MS);
    return () => clearInterval(id);
  }, [visible]);

  if (!inCard && pismart.screenshot) {
    return (
      <figure className={styles.shotWrap}>
        <img src={pismart.screenshot} alt={`${pismart.title}: ${t(pismart.kind)}`} className={styles.shot} />
      </figure>
    );
  }

  const playing = motion && visible;

  return (
    <figure ref={ref} className={inCard ? styles.inCard : styles.wrap}>
      <div className={styles.window} aria-hidden="true">
        <div className={styles.bar}>
          <span /><span /><span />
          <div className={styles.url}>pismart.pupuk-indonesia.com/{view}</div>
        </div>
        <div className={styles.body}>
          <aside className={styles.side}>
            <p className={styles.product}>
              {ui.panel.product}
              <small>{t(ui.panel.subtitle)}</small>
            </p>
            <ul>
              {ui.panel.modules.map((m) => {
                const Icon = moduleIcons[m.icon];
                return (
                  <li key={m.icon} className={m.view === view ? styles.active : ''}>
                    <Icon />
                    {t(m.label)}
                  </li>
                );
              })}
            </ul>
            <p className={styles.more}>{t(ui.panel.more)}</p>
          </aside>
          <div className={styles.main} key={view}>
            {view === 'attendance' && <AttendanceView />}
            {view === 'leave' && <LeaveView playing={playing} />}
            {view === 'payroll' && <PayrollView playing={playing} />}
          </div>
        </div>
        {playing && <div className={styles.progress} key={`p-${view}`} style={{ '--ms': `${VIEW_MS}ms` }} />}
      </div>
      <figcaption className={styles.caption}>{t(ui.panel.caption)}</figcaption>
    </figure>
  );
};
