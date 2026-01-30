import { useTheme } from '../context/ThemeContext';
import styles from './Navbar.module.css';

export const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <span className={styles.icon}>✦</span>
          <span>AKFH</span>
        </div>
        <ul className={styles.menu}>
          <li><a onClick={() => handleScroll('home')}>Home</a></li>
          <li><a onClick={() => handleScroll('about')}>About</a></li>
          <li><a onClick={() => handleScroll('skills')}>Skills</a></li>
          <li><a onClick={() => handleScroll('experience')}>Experience</a></li>
          <li><a onClick={() => handleScroll('featured')}>Featured</a></li>
          <li><a onClick={() => handleScroll('education')}>Education</a></li>
          <li><a onClick={() => handleScroll('contact')}>Contact</a></li>
        </ul>
        <button className={styles.themeToggle} onClick={toggleTheme} aria-label="Toggle dark mode">
          {isDark ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  );
};
