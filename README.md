# Software & Web Development Portfolio

A modern, responsive portfolio website showcasing software and web development skills, projects, and experience.

## Features

- 🚀 Modern tech stack (Next.js, TypeScript, Tailwind CSS)
- 🎨 Beautiful, responsive design
- 🌙 Dark/light mode toggle
- 📱 Fully responsive for all devices
- 🔍 SEO optimized
- ⚡ Fast loading times
- ✅ Accessibility features
- 🛠️ Skills showcase with visual representations
- 💼 Project gallery with filtering
- 📧 Contact form with validation

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel (recommended)
- **Icons**: Heroicons
- **Animations**: Tailwind CSS transitions

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run export` - Export static HTML (for static hosting)
- `npm run lint` - Run linter

## Configuration

### Environment Variables

Create a `.env.local` file in the root directory and add your environment variables:

```env
# API keys, database URLs, etc.
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

### Portfolio Data

Customize the portfolio content by updating the data in `data/portfolioData.ts`:

```typescript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other fields
};

export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project Description",
    // ... other fields
  }
  // ... more projects
];
```

## Deployment

### Vercel (Recommended)

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Go to [Vercel](https://vercel.com) and sign up
3. Import your project from the dashboard
4. Configure your project settings:
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Root Directory: `/`
5. Deploy!

### Static Export

To export as static HTML files:

```bash
npm run build
npm run export
```

The exported files will be in the `out/` directory and can be deployed to any static hosting service.

## Customization

### Colors

Update the color scheme by modifying the CSS variables in `styles/globals.css`:

```css
:root {
  --primary-color: #2563eb; /* Blue */
  --secondary-color: #1e40af; /* Darker blue */
  --accent-color: #f59e0b; /* Amber */
}
```

### Fonts

The site uses the Inter font family. You can change fonts by:

1. Adding your preferred font to `styles/globals.css`
2. Updating the font-family in the `@layer base` section

### Adding New Pages

Create new pages by adding files to the `pages/` directory:

- `pages/about.tsx` → `/about`
- `pages/projects.tsx` → `/projects`
- `pages/blog/[slug].tsx` → `/blog/:slug`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

If you have any questions or need help customizing the portfolio, feel free to reach out through the contact form on the website or create an issue in this repository.