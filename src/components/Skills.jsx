import styles from './Skills.module.css';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Vue.js', 'Tailwind CSS', 'Bootstrap', 'Responsive Design', 'Vite JS']
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Golang', 'PHP', 'Laravel & Lumen', 'PostgreSQL', 'MySQL']
    },
    {
      title: 'Tools & Others',
      skills: ['Git', 'Docker', 'Firebase', 'Figma']
    }
  ];

  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.stars}></div>
      <div className={styles.container}>
        <h2 className={styles.title}>Skills & Expertise</h2>
        <div className={styles.grid}>
          {skillCategories.map((category, idx) => (
            <div key={idx} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <div className={styles.tags}>
                {category.skills.map((skill, i) => (
                  <span key={i} className={styles.tag}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
