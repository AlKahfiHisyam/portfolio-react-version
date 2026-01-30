import styles from './Hero.module.css';

export const Hero = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.stars}></div>
      <div className={styles.content}>
        <div className={styles.title}>
          <h1>Al-Kahfi Fajrhul Hisyam</h1>
          <p className={styles.subtitle}>Full Stack Developer & Creative Technologist</p>
        </div>
        <p className={styles.description}>
          Crafting beautiful digital experiences through innovative design and cutting-edge technology.
        </p>
        <div className={styles.buttons}>
          <button className={`${styles.btn} ${styles.primary}`} onClick={() => handleScroll('featured')}>
            View My Work
          </button>
          <button className={`${styles.btn} ${styles.secondary}`} onClick={() => handleScroll('contact')}>
            Get In Touch
          </button>
        </div>
        <div className={styles.scrollIndicator}>
          <span>Scroll to explore</span>
          <div className={styles.mouse}></div>
        </div>
      </div>
    </section>
  );
};
