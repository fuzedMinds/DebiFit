# DebiFit - Fitness Trainer Website

A modern, responsive website for fitness trainer Debi Johnson, built with React.js, Vue.js, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive Layout**: Mobile-first approach that works on all devices
- **Content Management**: All content stored in a single JSON file for easy updates
- **Multiple Pages**: Home, Training Programs, and Contact pages
- **Interactive Elements**: Hover effects, smooth transitions, and modern UI components
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 🎨 Color Scheme

The website uses a carefully chosen color palette:
- **Primary**: Blue tones (#0ea5e9) - representing trust and professionalism
- **Secondary**: Purple tones (#d946ef) - adding energy and motivation
- **Accent**: Yellow tones (#eab308) - highlighting important elements
- **Neutral**: Gray tones for text and backgrounds

## 🛠️ Tech Stack

- **Frontend Framework**: React.js 18
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS with custom components
- **Build Tool**: Vite
- **Icons**: Font Awesome
- **Fonts**: Inter (body) and Poppins (headings)

## 📁 Project Structure

```
DebiFit/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Training.jsx
│   │   └── Contact.jsx
│   ├── data/
│   │   └── content.json
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd DebiFit
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Content Management

All website content is stored in `src/data/content.json`. This file contains:

- **Site Information**: Name, tagline, and description
- **Navigation**: Menu items and structure
- **Home Page**: Hero section, features, about trainer, testimonials, stats
- **Training Page**: Programs, services, and pricing
- **Contact Page**: Form fields, contact information, social media
- **Footer**: Links and copyright information

To update content, simply edit the JSON file and the changes will automatically reflect on the website.

## 🎯 Key Components

### Navigation
- Fixed navigation bar with smooth scroll effects
- Responsive mobile menu
- Active page highlighting
- Call-to-action button

### Home Page
- Hero section with compelling headline
- Feature highlights with icons
- About the trainer section
- Client testimonials
- Statistics showcase
- Call-to-action sections

### Training Page
- Three-tier training programs
- Additional services
- Program comparison
- Benefits explanation

### Contact Page
- Contact form with validation
- Contact information display
- Social media links
- FAQ section
- Interactive map placeholder

## 🎨 Customization

### Colors
Modify colors in `tailwind.config.js`:
```javascript
colors: {
  primary: { /* Blue tones */ },
  secondary: { /* Purple tones */ },
  accent: { /* Yellow tones */ }
}
```

### Styling
Custom styles are defined in `src/index.css` using Tailwind's `@layer` directive:
- Base styles for typography and scroll behavior
- Component styles for buttons, cards, and layouts
- Utility classes for gradients and special effects

### Components
Each component is modular and can be easily customized:
- Update props and content
- Modify styling classes
- Add new features and functionality

## 📱 Responsive Design

The website is built with a mobile-first approach:
- **Mobile**: Single column layout with stacked elements
- **Tablet**: Two-column grid layouts
- **Desktop**: Multi-column layouts with optimal spacing

## 🚀 Performance Features

- **Lazy Loading**: Components load as needed
- **Optimized Images**: Placeholder images with proper sizing
- **Minimal Dependencies**: Only essential packages included
- **Fast Build**: Vite for rapid development and building

## 🔧 Development

### Adding New Pages
1. Create a new component in `src/pages/`
2. Add route in `src/App.jsx`
3. Update navigation in `content.json`
4. Add page content to the JSON file

### Adding New Components
1. Create component in `src/components/`
2. Import and use in appropriate pages
3. Add any new content to `content.json`

### Styling Changes
1. Use Tailwind classes for most styling
2. Add custom styles in `src/index.css`
3. Use the `@layer` directive for organization

## 📄 License

This project is licensed under the MIT License.

## 👥 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please contact:
- Email: debi@debifit.com
- Phone: (555) 123-4567

---

**Built with ❤️ for DebiFit - Transform Your Life Through Fitness** 