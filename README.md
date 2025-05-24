# Modern Portfolio Website

A sleek, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features a modern design with smooth animations, dark/light theme support, and an interactive user interface.

## 🌟 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Theme Switching**: Smooth transition between dark and light themes
- **Interactive UI**: 
  - Magnetic buttons
  - Smooth scroll navigation
  - Animated section transitions
  - Floating tech icons
  - Particle effects
- **Modern Components**:
  - Project cards with hover effects
  - Skills showcase
  - Experience timeline
  - Contact form
  - Animated navigation

## 🛠️ Technologies Used

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **UI Components**: Custom components with shadcn/ui
- **Build Tool**: Vite

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/portfolio.git
```

2. Install dependencies:
```bash
cd portfolio
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 🎨 Customization

### Personal Information
Edit the `portfolioData` object in `src/pages/homepage.tsx` to update:
- Personal details
- Skills
- Experience
- Projects
- Contact information

### Styling
- Theme colors can be modified in the Tailwind configuration
- Animation timings can be adjusted in the Framer Motion components
- Component styles can be customized in their respective files

## 📱 Responsive Design

The website is fully responsive with breakpoints for:
- Mobile devices
- Tablets
- Desktop screens
- Large displays

## 🎯 Features in Detail

### Navigation
- Smooth scroll to sections
- Mobile-friendly menu
- Theme toggle with transition effect
- Progress indicator

### Projects Section
- Interactive project cards
- GitHub links
- Technology badges
- Hover animations

### Skills Section
- Categorized skills display
- Animated icons
- Interactive cards

### Experience Timeline
- Animated timeline
- Company details
- Technology tags
- Duration badges

### Contact Section
- Contact form
- Social media links
- Location and email display

## 🔧 Development

### Project Structure
```
src/
├── components/
│   ├── ui/
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   └── theme-transition.tsx
├── pages/
│   └── homepage.tsx
├── context/
│   └── ThemeContext.tsx
└── styles/
    └── globals.css
```

### Key Components
- `ThemeTransition`: Handles theme switching animations
- `FloatingTechIcons`: Creates floating tech icons background
- `MagneticButton`: Interactive button with magnetic effect
- `ScrollProgress`: Shows scroll progress indicator

## 📸 Screenshots

### Light Theme
![Light Theme Hero Section](docs/light-hero.png)
*Hero section in light theme with animated elements*

![Light Theme Projects](docs/light-projects.png)
*Projects section showcasing interactive cards*

![Light Theme Skills](docs/light-skills.png)
*Skills section with animated icons*

### Dark Theme
![Dark Theme Hero Section](docs/dark-hero.png)
*Hero section in dark theme with floating tech icons*

![Dark Theme Projects](docs/dark-projects.png)
*Projects section with glass effect cards*

![Dark Theme Skills](docs/dark-skills.png)
*Skills section with glowing effects*

### Mobile View
![Mobile Navigation](docs/mobile-nav.png)
*Responsive mobile navigation menu*

![Mobile Projects](docs/mobile-projects.png)
*Projects section on mobile devices*

## 🔄 Updates

- Added smooth theme transition
- Implemented floating tech icons
- Enhanced mobile responsiveness
- Added project cards with GitHub integration

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 👤 Author

Md Sohail
- GitHub: [@Sohail-lab](https://github.com/Sohail-lab)
- LinkedIn: [Md Sohail](https://www.linkedin.com/in/md-sohail-6ab5aa157)

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Lucide Icons](https://lucide.dev/) for icons
- [shadcn/ui](https://ui.shadcn.com/) for UI components
