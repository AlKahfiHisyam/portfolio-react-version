import { useState } from 'react';
import styles from './Contact.module.css';

export const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      setError('Semua field harus diisi');
      return;
    }

    setLoading(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xwvblllz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        })
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      } else {
        setError('Gagal mengirim pesan. Silakan coba lagi.');
      }
    } catch (err) {
      setError('Gagal mengirim pesan. Silakan coba lagi.');
      console.error('Formspree error:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.stars}></div>
      <div className={styles.container}>
        <h2 className={styles.title}>Let's Work Together</h2>
        <p className={styles.subtitle}>Have a project in mind? I'd love to hear from you.</p>
        
        <div className={styles.content}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className={`${styles.btn} ${styles.primary}`} disabled={loading}>
              {loading ? 'Mengirim...' : 'Send Message'}
            </button>
            {submitted && <p className={styles.success}>Pesan berhasil dikirim! 🎉</p>}
            {error && <p className={styles.error}>{error}</p>}
          </form>

          <div className={styles.info}>
            <div className={styles.infoCard}>
              <div className={styles.icon}>📧</div>
              <h4>Email</h4>
              <a href="mailto:career.alkahfi@gmail.com">career.alkahfi@gmail.com</a>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.icon}>🔗</div>
              <h4>Social</h4>
              <div className={styles.socialLinks}>
                <a href="https://linkedin.com/in/careeralkahfi" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/AlKahfiHisyam" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://wa.me/6285854789879" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
