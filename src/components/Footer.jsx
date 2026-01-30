import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.stars}></div>
      <div className={styles.container}>
        <p>&copy; 2026 Al-Kahfi Fajrhul Hisyam. All rights reserved.</p>
      </div>
    </footer>
  );
};
