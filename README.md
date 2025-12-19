# 🚀 Nitesh Dagiya - Portfolio Website

A modern, interactive 3D portfolio website showcasing my skills, experience, and projects as a Full Stack Developer. Built with cutting-edge web technologies and featuring stunning 3D animations.

![Portfolio Preview](https://img.shields.io/badge/Live-Portfolio-blue?style=for-the-badge&logo=netlify)

## 🌐 Live Demo

**[View Live Website](https://nitesh-dagiya.netlify.app/)**

## ✨ Features

- **Interactive 3D Elements** - Engaging 3D laptop model and Earth visualization using Three.js
- **Animated Star Field** - Dynamic background with rotating particle effects
- **Smooth Animations** - Fluid transitions and scroll-based animations using Framer Motion
- **Responsive Design** - Fully optimized for desktop, tablet, and mobile devices
- **Project Showcase** - Interactive cards displaying my key projects with live demos and source code
- **Work Philosophy** - Detailed section highlighting my development approach and principles
- **Experience Timeline** - Visual timeline of my professional journey
- **Contact Form** - Functional contact form integrated with EmailJS
- **Modern UI/UX** - Clean, professional design with purple gradient accents

## 🛠️ Built With

### Core Technologies
- **React.js** - Frontend framework
- **Three.js** - 3D graphics and animations
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three-fiber
- **Framer Motion** - Animation library for React
- **Tailwind CSS** - Utility-first CSS framework

### Additional Libraries
- **EmailJS** - Contact form functionality
- **React Parallax Tilt** - Tilt effect for cards
- **React Vertical Timeline** - Timeline component for experience section
- **Maath** - Math utilities for 3D calculations

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── assets/          # Images, icons, and static files
│   ├── components/      # React components
│   │   ├── canvas/      # 3D canvas components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx
│   │   ├── HowIWork.jsx
│   │   ├── Navbar.jsx
│   │   ├── Tech.jsx
│   │   └── Works.jsx
│   ├── constants/       # Data and configuration
│   ├── hoc/            # Higher-order components
│   ├── utils/          # Utility functions
│   ├── styles.js       # Global styles
│   ├── App.jsx
│   └── main.jsx
├── public/
├── package.json
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create a `.env` file in the root directory and add your EmailJS credentials
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## 📦 Build for Production

```bash
npm run build
# or
yarn build
```

The build files will be generated in the `dist` directory.

## 🎨 Key Sections

### Hero Section
- Interactive 3D laptop model
- Animated star field background
- Professional introduction with call-to-action

### About
- Personal overview
- Three key development roles with animated icons

### Experience
- Vertical timeline of professional experience
- Detailed role descriptions and achievements

### Tech Stack
- Animated technology icons
- Comprehensive list of skills and tools

### How I Work
- Development philosophy and principles
- Focus on clean code, scalability, and user experience

### Projects
- Showcase of key projects with tilt effects
- Links to live demos and source code
- Technology tags for each project

### Contact
- Functional contact form
- Interactive 3D Earth visualization

## 🎯 Customization

To customize this portfolio for your own use:

1. Update personal information in `src/constants/index.js`
2. Replace project images in `src/assets`
3. Modify color scheme in `tailwind.config.js` and `src/styles.js`
4. Update EmailJS credentials for contact form
5. Add your own 3D models or modify existing ones in `src/components/canvas`

## 📱 Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/yourusername/portfolio/issues).

## 📄 License

This project is [MIT](LICENSE) licensed.

## 👤 Author

**Nitesh Dagiya**

- Portfolio: [nitesh-dagiya.netlify.app](https://nitesh-dagiya.netlify.app/)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
- Email: nitinkhatri9898@gmail.com

## 🙏 Acknowledgments

- 3D models and assets from [Sketchfab](https://sketchfab.com/)
- Icons from [Flaticon](https://www.flaticon.com/)
- Inspiration from various portfolio designs in the developer community

## 📊 Performance

- Lighthouse Score: 90+
- First Contentful Paint: < 2s
- Time to Interactive: < 3s
- Optimized 3D assets for fast loading

---

⭐ Star this repo if you find it helpful!

**Made with ❤️ and lots of ☕**
