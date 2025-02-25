# Ubiru Industries Ltd. Website

A modern, responsive React-based website for Ubiru Industries, a company providing comprehensive solutions across event planning, communications, software development, and hardware procurement.

## Overview

This website serves as a digital showcase for Ubiru Industries Ltd., presenting the company's services, mission, values, and history in a professional and engaging manner. The site is built with React and Material-UI to ensure a responsive, visually appealing experience across all devices.

## Features

- **Responsive Design**: Fully responsive layout that adapts to desktop, tablet, and mobile devices
- **Modern UI**: Material Design-based interface with a clean, professional look
- **Service Showcase**: Comprehensive display of services categorized by business area
- **Dynamic Content**: Modular content components that are easy to update
- **Single Page Application**: Fast navigation with React Router
- **Optimized Performance**: Image optimization and efficient code structure

## Tech Stack

- **React**: JavaScript library for building user interfaces
- **React Router**: Navigation for single page applications
- **Material-UI**: React component library implementing Google's Material Design
- **Swiper**: Touch-enabled slider component
- **ESLint/Prettier**: Code quality and formatting tools

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm (v6.0.0 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/kabiruH/ubiru-industries.git
   cd ubiru-industries
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

Start the development server:
```bash
npm start
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Components

### Layout Components

- **Navbar**: Main navigation component with responsive menu
- **Footer**: Site footer with links and contact information

### Section Components

- **HeroCarousel**: Dynamic banner carousel displaying key messages
- **ServiceCard**: Card component for individual services
- **AboutHero**: Hero section for the About page
- **MissionVision**: Company mission and vision statements
- **CompanyTimeline**: Timeline of company history and milestones
- **CoreValues**: Display of company values
- **ServicesHero**: Hero section for the Services page
- **ServicesOverview**: Overview cards for service categories
- **ServiceCategory**: Detailed information about each service category
- **CTASection**: Call-to-action section with contact button

## Customization

### Theme

The Material-UI theme can be customized in `src/theme/index.js`. This file contains the color scheme, typography settings, and component style overrides.

### Content

Content can be updated by modifying the data arrays in each page component:

- **Home.jsx**: Service cards information
- **About.jsx**: Timeline events, core values
- **Services.jsx**: Service categories, detailed service information

### Images

Replace the image files in the `public` directory with your own images while keeping the same filenames, or update the image paths in the components.

## Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder that can be deployed to any static hosting service.

### Deployment Options

- **Netlify**: Connect your GitHub repository for continuous deployment
- **Vercel**: Similar to Netlify with automatic deployments
- **AWS S3**: Host as a static website
- **GitHub Pages**: Free hosting for static sites

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

© 2025 Ubiru Industries Ltd. All rights reserved.