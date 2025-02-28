# The Circle of Life - Artisanal Donut Shop Website

A React-based showcase website featuring my wife's graphic design work in the context of an artisanal donut shop. This project demonstrates how her branding and design elements can be integrated into a modern, responsive website.

## 🎨 Design Features
- Custom logo and branding by my wife
- Japanese-inspired minimalist aesthetic
- Responsive layout with mobile-first design
- Smooth scrolling navigation
- Interactive menu display
- Newsletter signup integration
- Location and hours information

## 🎨 Design Elements
- Typography: Great Vibes for headers, Playfair Display for menus
- Color Scheme: Mauve-based palette with white accents
- Custom Assets: Logo, product photography, and decorative elements

## 🛠 Technical Stack
- React 18
- React Router 6
- Tailwind CSS
- Vite

## 🚀 Quick Start

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/the-circle-of-life.git
   cd the-circle-of-life
   ```  

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173` to view the website.

## 📦 Project Structure

The project is organized into the following key directories:

    src/
    ├── assets/         # Images and static assets
    ├── components/     # React components
    │   ├── common/     # Shared components (ImagePreloader, ScrollToTop, SectionTitle)
    │   ├── layout/     # Layout components (Header, Footer)
    │   ├── menu/       # Menu-related components (DonutCard)
    │   ├── pages/      # Page components (HoursLocationPage)
    │   └── sections/   # Section components (Hero, About, Menu)
    ├── data/          # Static data (donuts.js)
    ├── firebase/      # Firebase configuration
    ├── App.jsx        # Main application component
    ├── main.jsx       # Application entry point
    └── index.css      # Global styles and Tailwind imports
    
## 📱 Key Features
- Optimized image loading with preloader
- Smooth scroll behavior
- Mobile-responsive design
- Component-based architecture
- Interactive navigation
- Cross-browser compatibility

## 🎨 Design Credits
All branding elements, including the logo, typography choices, and overall aesthetic were designed by [Wife's Name]. This project serves as a portfolio piece demonstrating the integration of professional graphic design with modern web development.

## 📄 License
MIT License - feel free to use this code as inspiration for your own projects.

## 🤝 Contributing
While this is primarily a portfolio piece, suggestions and feedback are welcome. Please open an issue to discuss potential changes.

## 🔍 Features in Detail
- Image Preloading: Prevents flickering and ensures smooth loading of all assets
- Smooth Navigation: Combined page routing and scroll behavior
- Responsive Menu: Adapts between mobile and desktop layouts
- Interactive Elements: Hover effects, transitions, and animations
- Newsletter Integration: Ready for backend implementation

## 🚀 Deployment
This project is configured for Firebase Hosting. To deploy:

1. Install Firebase CLI:
   ```bash
   npm install -g firebase-tools
   ```

2. Login and deploy:
   ```bash
   firebase login
   firebase deploy
   ```
    