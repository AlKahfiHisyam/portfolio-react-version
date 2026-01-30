import styles from './FloatingWA.module.css';

export const FloatingWA = () => {
  const waNumber = '6285854789879';
  const waLink = `https://wa.me/${waNumber}`;

  return (
    <a 
      href={waLink} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={styles.floatingWA}
      title="Chat on WhatsApp"
    >
      <span className={styles.icon}>💬</span>
      <div className={styles.tooltip}>
        <p>Let's make something</p>
        <p>incredible together</p>
      </div>
    </a>
  );
};
