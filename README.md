# ScaleStash Landing Page

A modern, responsive landing page for ScaleStash - the modern way to manage social media. Built with React and styled with Tailwind CSS, featuring a sleek dark theme with glass-morphism effects.

## ✨ Features

- **Modern Design**: Clean, minimalist dark theme with glass-morphism effects
- **Responsive**: Optimized for all device sizes
- **Performance**: Built with React 19 and optimized for production
- **Analytics Dashboard Preview**: Interactive cards showing social media metrics
- **Contact Form**: Integrated contact form with email functionality
- **Docker Ready**: Containerized for easy deployment

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/solol3veling/scalestash-landing.git
cd scalestash-landing

# Install dependencies
npm install

# Start development server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## 🐳 Docker Deployment

### Build and run locally

```bash
# Build Docker image
docker build -t scalestash-landing .

# Run container
docker run -d -p 3000:3000 --name scalestash-landing scalestash-landing
```

### Production Deployment

The project includes automated deployment via GitHub Actions:

1. Push to `dev` branch triggers the pipeline
2. Builds Docker image and pushes to DockerHub (`elitekaycy/scalestash-landing:latest`)
3. Deploys to production server via SSH
4. Automatically cleans up unused containers and images

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header
│   ├── Hero.js            # Main hero section with analytics preview
│   ├── Features.js        # Feature cards
│   ├── Pricing.js         # Pricing plans
│   ├── Testimonials.js    # Customer testimonials
│   ├── FAQ.js             # Frequently asked questions
│   ├── Footer.js          # Footer with links
│   ├── About.js           # About page with founder info
│   └── LandingPage.js     # Main page component
├── App.js                 # App router and routes
└── index.js              # Application entry point
```

## 🛠️ Built With

- **React 19** - Frontend framework
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Docker** - Containerization
- **GitHub Actions** - CI/CD pipeline

## 📱 Pages

- **Home** - Main landing page with hero, features, pricing, testimonials, and FAQ
- **About** - Company information, founder details, and contact form

## 🎨 Design System

- **Colors**: Dark theme with zinc/black palette
- **Typography**: System fonts with optimized letter spacing
- **Effects**: Glass-morphism with backdrop blur and transparency
- **Responsive**: Mobile-first design approach

## 📧 Contact

- **Founder**: Dickson Anyaele
- **Email**: support@scalestash.com
- **LinkedIn**: [Dickson Anyaele](https://www.linkedin.com/in/dickson-anyaele-3375611b3/)

## 📄 License

This project is private and proprietary to ScaleStash.

---

Built with ❤️ by [elitekaycy](https://github.com/elitekaycy)