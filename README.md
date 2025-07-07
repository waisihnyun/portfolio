# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js, React, Tailwind CSS, and Shadcn UI. This single-page application showcases your skills, projects, and professional experience with a clean and elegant design.

## Features

- 🎨 Modern and clean dark theme design
- 📱 Fully responsive layout for all devices
- ⚡ Fast and optimized performance
- 🎭 Smooth animations and transitions
- 🧩 Modular and maintainable code structure
- 🎯 SEO optimized

## Tech Stack

- Next.js 14
- React 18
- Tailwind CSS
- Shadcn UI
- Framer Motion
- Lucide Icons

## Getting Started

1. Clone the repository:
```bash
git clone <your-repo-url>
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Edit the following files to customize the content:

- `src/app/page.tsx`: Update the main content, including your name, bio, projects, and skills
- `src/app/layout.tsx`: Modify the metadata (title, description)

### Styling

- Global styles: `src/app/globals.css`
- Tailwind configuration: `tailwind.config.ts`

### Projects

Update the projects array in `src/app/page.tsx` with your own projects:

```typescript
{
  title: 'Your Project',
  description: 'Project description',
  tech: ['Technology 1', 'Technology 2'],
}
```

### Skills

Modify the skills section in `src/app/page.tsx` to match your expertise:

```typescript
{
  category: 'Category Name',
  icon: <Icon />,
  skills: ['Skill 1', 'Skill 2'],
}
```

## Deployment

This project can be easily deployed to Vercel:

1. Push your code to GitHub
2. Import your repository to Vercel
3. Deploy

## License

MIT License - feel free to use this template for your own portfolio! 