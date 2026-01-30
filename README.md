# Portfolio React

Portfolio website bertema space dengan glass morphism design, dark mode, dan GitHub API integration.

## 🌟 Features

- ✨ **Space Theme** - Design luar angkasa yang indah dengan bintang dan floating particles
- 🌙 **Dark Mode** - Toggle antara light dan dark theme dengan localStorage
- 🎨 **Glass Morphism** - Modern glass effect cards dengan backdrop blur
- 🚀 **React Components** - Modular, reusable React components
- 📱 **Responsive Design** - Mobile-friendly design
- 🐙 **GitHub Integration** - Fetch dan tampilkan GitHub repositories otomatis
- ⭐ **Featured Projects** - Section terpisah untuk highlight special projects
- 📧 **Contact Form** - Form validation dan feedback notifications

## 📁 Folder Structure

```
react-version/
├── src/
│   ├── components/           # React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── FeaturedProjects.jsx
│   │   ├── GitHubProjects.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── index.js
│   │   └── *.module.css
│   ├── context/
│   │   └── ThemeContext.jsx  # Dark mode state management
│   ├── hooks/
│   │   └── useGitHub.js      # GitHub API hooks
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ dan npm/yarn

### Installation

```bash
cd react-version
npm install
```

### Development

```bash
npm run dev
```

Website akan buka otomatis di `http://localhost:3000`

### Build untuk Production

```bash
npm run build
```

Ini create folder `dist/` dengan production build yang optimized.

## ⚙️ Configuration

### 1. Setup GitHub Username

Edit di `src/App.jsx`:

```jsx
<GitHubProjects username="your-github-username" />
```

Ganti `your-github-username` dengan username GitHub Anda.

### 2. Update Contact Info

Edit `src/components/Contact.jsx`:
- Ganti email di `mailto:alkahfi@example.com`
- Tambah social media links yang sesuai

### 3. Customize Featured Projects

Edit array `featuredProjects` di `src/components/FeaturedProjects.jsx` untuk menambah/mengubah featured projects.

## 🌐 Deploy ke Netlify

### Option 1: Dengan Netlify CLI

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Option 2: GitHub Integration (Recommended)

1. Push project ke GitHub
2. Go to [Netlify](https://netlify.com)
3. Click "New site from Git"
4. Select GitHub repository Anda
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

Netlify otomatis deploy setiap kali push ke main branch!

### Option 3: Drag & Drop

1. Run `npm run build`
2. Go to [Netlify Drop](https://app.netlify.com/drop)
3. Drag and drop folder `dist/`

## 🔌 GitHub API Integration

App menggunakan GitHub REST API (tidak perlu authentication untuk public repos):

```javascript
// Get repositories
GET https://api.github.com/users/{username}/repos

// Fetch user data
GET https://api.github.com/users/{username}
```

**Rate Limit**: 60 requests per hour (per IP)

## 🎨 Customization

### Ubah Warna
Edit di `src/App.css` dalam `:root`:
```css
--primary: #00d4ff;      /* Cyan */
--secondary: #ff006e;    /* Magenta */
--accent: #8338ec;       /* Purple */
```

### Ubah Skills
Edit `skillCategories` array di `src/components/Skills.jsx`

### Ubah About Section
Edit `aboutCards` array di `src/components/About.jsx`

## 📦 Technologies Used

- **React 19** - UI library
- **Vite** - Build tool & dev server
- **CSS Modules** - Scoped styling
- **GitHub REST API** - Repository data
- **Context API** - State management (theme)

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

## 📝 Notes

- Featured Projects dan GitHub Projects adalah 2 section terpisah
- Featured Projects bisa di-customize di FeaturedProjects.jsx
- GitHub Projects otomatis fetch dari API (real-time)
- Dark mode preference disimpan di localStorage

## 🎯 Next Steps

1. Ganti GitHub username Anda
2. Update email dan social links di Contact section
3. Edit featured projects sesuai kebutuhan
4. Deploy ke Netlify
5. Share portfolio Anda!

## 📄 License

MIT

---

**Happy Coding!** 🚀
