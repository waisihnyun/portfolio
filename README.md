# Professional Portfolio Website

A modern, responsive portfolio website built with Next.js, React, Tailwind CSS, and Shadcn UI. This single-page application showcases professional skills, projects, and experience with a clean, code-inspired monospace design.

## ✨ Features

- 🎨 **Modern Dark Theme**: Clean, developer-focused design with code-inspired aesthetics
- 📱 **Fully Responsive**: Optimized for all devices and screen sizes
- ⚡ **Fast Performance**: Built with Next.js 14 for optimal loading speeds
- 🎭 **Smooth Animations**: Framer Motion animations for engaging user experience
- 🧩 **Modular Architecture**: Clean, maintainable component structure
- 🎯 **SEO Optimized**: Meta tags and structure for search engines
- 📄 **Strategic Resume Download**: Optimized placement for better UX
- 🔗 **Social Integration**: GitHub and LinkedIn links
- 📧 **Contact Form**: EmailJS integration for direct communication
- 🎯 **Smooth Navigation**: Scroll-to-section navigation with active states
- 👨‍💻 **Code-Style Design**: Monospace fonts and syntax highlighting colors
- 📊 **Experience Timeline**: Professional work history display
- 🏆 **Certifications**: AWS and other professional certifications
- 🛠️ **Skills Showcase**: Categorized technical skills with modern presentation

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Components**: Shadcn UI
- **Animations**: Framer Motion
- **Icons**: Lucide Icons
- **Fonts**: JetBrains Mono + Fira Code (Monospace)
- **Email**: EmailJS
- **Deployment**: Vercel Ready

## 🎨 Design Philosophy

The portfolio features a **code-inspired monospace design** with:
- Clean monospace typography (JetBrains Mono + Fira Code)
- Syntax highlighting color scheme
- Terminal-style navigation and interactions
- JavaScript/TypeScript code syntax in section headers
- Professional developer aesthetic

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/waisihnyun/portfolio.git
cd portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Set up environment variables:**
Create a `.env.local` file in the root directory:
```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

4. **Run the development server:**
```bash
npm run dev
```

5. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with fonts
│   ├── page.tsx        # Main page component
│   └── globals.css     # Global styles
├── components/         # Reusable components
│   ├── ui/            # Shadcn UI components
│   ├── Header.tsx     # Navigation header
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ExperienceSection.tsx
│   ├── CertificationsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── SkillsSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── data/
│   └── portfolio.ts    # All portfolio data
├── hooks/             # Custom React hooks
│   ├── useActiveSection.ts
│   └── useContactForm.ts
├── types/
│   └── index.ts       # TypeScript type definitions
└── utils/
    ├── navigation.ts   # Navigation utilities
    └── resume.ts      # Resume download utilities
```

## 🎨 Customization

### Personal Information
Edit `src/data/portfolio.ts` to update:

```typescript
export const PERSONAL_INFO = {
  name: 'Your Name',
  email: 'your.email@gmail.com',
  title: 'Your Title',
  description: 'Your description',
  aboutText: [
    'Your about text paragraphs...'
  ]
}
```

### Projects
Add your projects to the `PROJECTS` array:

```typescript
export const PROJECTS: Project[] = [
  {
    title: 'Project Name',
    description: 'Project description',
    tech: ['Technology 1', 'Technology 2'],
    highlights: ['Key feature 1', 'Key feature 2'],
    github: 'https://github.com/username/repo',
    demo: 'https://demo-url.com'
  }
]
```

### Experience
Update your work experience:

```typescript
export const EXPERIENCE: Experience[] = [
  {
    company: 'Company Name',
    position: 'Your Position',
    duration: '2023 - Present',
    location: 'Location',
    description: 'Role description',
    achievements: ['Achievement 1', 'Achievement 2'],
    tech: ['Technology 1', 'Technology 2']
  }
]
```

### Skills
Modify the skills categories:

```typescript
export const SKILL_CATEGORIES_DATA = [
  {
    category: 'Programming Languages',
    iconType: 'code',
    skills: ['JavaScript', 'TypeScript', 'Python']
  }
]
```

### Certifications
Add your certifications:

```typescript
export const CERTIFICATIONS: Certification[] = [
  {
    name: 'Certification Name',
    issuer: 'Issuing Organization',
    date: '2024',
    credentialId: 'ID',
    link: 'https://credential-link.com'
  }
]
```

### Resume Download
1. Replace `public/files/resume.pdf` with your resume
2. Update the download filename in components if needed
3. The resume is accessible from both header and hero section

### Styling & Theme
- **Global styles**: `src/app/globals.css`
- **Tailwind config**: `tailwind.config.ts`
- **Font configuration**: `src/app/layout.tsx`

### Colors & Typography
The portfolio uses a monospace, code-inspired color scheme:
- **Primary**: Blue (#3B82F6)
- **Secondary**: Green (#10B981)
- **Accent**: Yellow (#F59E0B)
- **Text**: Gray shades
- **Background**: Dark gray (#111827, #1F2937)

## 📧 Contact Form Setup

1. **Create EmailJS Account**: Sign up at [EmailJS](https://www.emailjs.com/)
2. **Create Email Service**: Set up your email service (Gmail, Outlook, etc.)
3. **Create Email Template**: Design your email template
4. **Get Credentials**: Copy your Service ID, Template ID, and Public Key
5. **Update Environment Variables**: Add them to `.env.local`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Import your repository to [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms
- **Netlify**: Connect GitHub repo and deploy
- **GitHub Pages**: Use `npm run build` and deploy `out/` folder
- **Custom Server**: Use `npm run build` and `npm start`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎯 SEO Optimization

- Meta tags configured in `layout.tsx`
- Semantic HTML structure
- Alt texts for images
- Structured data ready
- Fast loading performance

## 🔧 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
npm run type-check # Run TypeScript checks
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- [Shadcn UI](https://ui.shadcn.com/) - Component library
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [EmailJS](https://www.emailjs.com/) - Email service
- [JetBrains Mono](https://www.jetbrains.com/lp/mono/) - Monospace font
- [Fira Code](https://github.com/tonsky/FiraCode) - Monospace font

---

**Made with ❤️ by Wai Si Hnyun** 