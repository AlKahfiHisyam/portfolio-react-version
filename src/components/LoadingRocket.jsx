import { useState, useEffect } from 'react';
import styles from './LoadingRocket.module.css';

export const LoadingRocket = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Show for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.rocketWrapper}>
        <div className={styles.rocketWrapper}>
          <div className={styles.rocket}>
            <div className={styles.rocketBody}>🚀</div>
            <div className={styles.rocketTrail}>
              <div className={styles.trail}></div>
              <div className={styles.trail}></div>
              <div className={styles.trail}></div>
            </div>
          </div>
        </div>
        
        <div className={styles.textContainer}>
          <h1 className={styles.mainText}>Something</h1>
          <h1 className={styles.mainText}>Incredible</h1>
          <h1 className={styles.mainText}>Is Coming</h1>
        </div>

        <div className={styles.dots}>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
          <span className={styles.dot}></span>
        </div>

        <div className={styles.stars}>
          {[...Array(30)].map((_, i) => (
            <div key={i} className={styles.star}></div>
          ))}
        </div>
      </div>
    </div>
  );
};
