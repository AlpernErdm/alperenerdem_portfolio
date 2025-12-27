# Personal Portfolio Website - Alperen Erdem

Modern and interactive personal portfolio website built with Next.js 14, React 18, and TypeScript.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS, Shadcn/ui
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## Project Structure

```
portfolio-website/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── sections/          # Page sections
│   ├── ui/                # Shadcn/ui components
│   ├── layout/            # Layout components
│   └── shared/            # Shared components
├── lib/                   # Utility functions
│   ├── data/              # Data files
│   ├── utils.ts           # Utility functions
│   └── animations.ts      # Animation variants
├── hooks/                 # Custom React hooks
├── types/                 # TypeScript type definitions
└── public/                # Static assets
    ├── cv/                # CV PDF
    └── images/            # Images
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run analyze` - Analyze bundle size

## Features

- ✅ Modern and responsive design
- ✅ Dark/Light mode support
- ✅ Smooth scroll animations
- ✅ Project gallery with modal details
- ✅ Experience timeline
- ✅ Skills visualization
- ✅ Contact form
- ✅ CV download
- ✅ SEO optimized

## Deployment

This project is optimized for deployment on Vercel. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/portfolio)

For detailed instructions including:
- Environment variable configuration
- Custom domain setup
- Analytics integration
- Troubleshooting

Please refer to the [Deployment Guide](./DEPLOYMENT.md).

## License

MIT
