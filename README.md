# Frehab

A free, anonymous, and community-powered online addiction recovery platform.

## Project Overview

Frehab is an online addiction recovery platform designed to provide a safe, supportive environment for individuals seeking recovery. The platform features:

- **Core Program**: Structured recovery content and resources
- **Community Forum**: Peer support and connection
- **Wiki**: Knowledge base and educational resources
- **Private Journal**: Personal reflection and progress tracking

## Technology Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database & Auth**: Supabase
- **UI Components**: Custom components with class-variance-authority

## Color Palette - "Calm Harmony"

- **Background**: `slate-50` (#f8fafc)
- **Text/Primary**: `slate-700` (#334155)
- **Primary Accent**: `teal-500` (#14b8a6) and `teal-600` (#0d9488)
- **Secondary Accent**: `amber-500` (#f59e0b) and `amber-600` (#d97706)
- **Neutral**: `slate` for cards, borders, etc.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Frehab
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your Supabase credentials:
```
NEXT_PUBLIC_SUPABASE_URL=YOUR_SUPABASE_URL_HERE
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY_HERE
```

4. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
/
├── app/
│   ├── (auth)/          # Authentication pages
│   │   ├── login/
│   │   └── signup/
│   ├── (app)/           # Authenticated app pages
│   │   ├── dashboard/
│   │   ├── program/
│   │   ├── journal/
│   │   ├── wiki/
│   │   └── community/
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/
│   ├── layout/          # Layout components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── ui/              # Reusable UI components
│       └── Button.tsx
├── lib/
│   ├── supabaseClient.ts # Supabase configuration
│   └── utils.ts         # Utility functions
└── public/              # Static assets
```

## Key Features

### Responsive Design
- Mobile-first approach with responsive navigation
- Clean, accessible UI with focus states
- Consistent spacing and typography

### Component Architecture
- Reusable Button component with variants (primary, secondary, ghost)
- Responsive Navbar with mobile menu
- Consistent layout structure

### TypeScript Integration
- Full TypeScript support throughout the application
- Proper type definitions for all components
- Strict type checking enabled

### Tailwind CSS Configuration
- Custom color palette matching the "Calm Harmony" theme
- Responsive design utilities
- Component-based styling approach

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Code Style

- ESLint configuration with Next.js recommended rules
- Prettier formatting (recommended)
- TypeScript strict mode enabled

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License.

## Support

Frehab is a support tool and not a substitute for professional medical advice. If you're experiencing a medical emergency, please contact emergency services immediately.

---

© 2025 Frehab. A Minnesota-based non-profit project. 