import { useEffect, useState } from 'react';
import styles from './DepartureBoard.module.css';

const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const TICK_MS = 55;
const random = () => GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// One run of flap cells. Each time `run` changes, every cell spins through letters and lands on its target,
// left to right. Static text is shown before the first run and whenever motion is reduced.
// `plate` drops the cell chrome so the letters can spin on a printed sign, such as a gate number.
export const SplitFlap = ({ text, length, run = 0, delay = 0, tone, plate }) => {
  const target = text.toUpperCase().padEnd(length).slice(0, length);
  const [shown, setShown] = useState(target);

  useEffect(() => {
    if (!run || reduced()) {
      setShown(target);
      return undefined;
    }
    const settleAt = [...target].map((_, i) => delay + i + 3 + Math.floor(Math.random() * 5));
    let tick = 0;
    const id = setInterval(() => {
      tick += 1;
      setShown([...target].map((ch, i) => (tick >= settleAt[i] ? ch : random())).join(''));
      if (tick >= Math.max(...settleAt)) clearInterval(id);
    }, TICK_MS);
    return () => clearInterval(id);
  }, [target, run, delay]);

  return (
    <span className={`${styles.flaps} ${tone ? styles[tone] : ''} ${plate ? styles.plate : ''}`} aria-hidden="true">
      {[...shown].map((ch, i) => (
        <span key={i} className={styles.cell}>
          <span key={ch} className={styles.ch}>{ch}</span>
        </span>
      ))}
    </span>
  );
};
