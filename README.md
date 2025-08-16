# Portfolio

A modern, bilingual (Persian/English) portfolio website built with Next.js 14, featuring a blog system and portfolio showcase.

## Features

- **Bilingual Support**: Persian (RTL) and English content
- **Blog System**: Markdown-based blog posts with frontmatter
- **Portfolio Showcase**: Project portfolio with detailed descriptions
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Static Site Generation**: Optimized performance with Next.js SSG
- **Custom Fonts**: Persian fonts (Yekan, Iran Sans) support
- **Image Optimization**: Next.js Image component with remote patterns

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Headless UI, Heroicons
- **Content**: Markdown with Gray Matter
- **Markdown Processing**: Remark with GFM and HTML plugins
- **Notifications**: React Hot Toast

## Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── cover.png          # Hero section image
│   ├── yekan.ttf          # Persian font
│   └── iranSans.ttf       # Persian font
├── src/
│   ├── _components/       # Reusable components
│   │   ├── blogs/         # Blog-related components
│   │   ├── portfolios/    # Portfolio-related components
│   │   └── *.tsx          # Shared components
│   ├── app/               # Next.js App Router
│   │   ├── (articles)/    # Article routes group
│   │   ├── content/       # Dynamic content routes
│   │   ├── summary/       # Summary page with parallel routes
│   │   └── *.tsx          # Root pages and layouts
│   ├── content/           # Content files
│   │   ├── blogs/         # Blog markdown files
│   │   ├── portfolios/    # Portfolio markdown files
│   │   └── *.json         # Content metadata
│   └── utils/             # Utility functions
└── config files          # Next.js, Tailwind, TypeScript configs
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd portfolio
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

## Content Management

### Adding Blog Posts

1. Create a new `.md` file in `src/content/blogs/`
2. Add frontmatter with required fields:

```yaml
---
title: 'Post Title'
description: 'Post description'
author: 'Author Name'
authorImage: 'https://example.com/author.jpg'
coverImage: 'https://example.com/cover.jpg'
date: '2024-01-01'
dir: 'rtl'
---
```

### Adding Portfolio Items

1. Create a new `.md` file in `src/content/portfolios/`
2. Add frontmatter with required fields:

```yaml
---
title: 'Project Title'
description: 'Project description'
employee: 'Employee Name'
employmentTime: 12
employeeImage: 'https://example.com/employee.jpg'
coverImage: 'https://example.com/cover.jpg'
date: '2024-01-01'
highlights: ['Feature 1', 'Feature 2', 'Feature 3']
---
```

## Key Features

### Markdown Processing

- Supports GitHub Flavored Markdown (GFM)
- Automatic HTML conversion
- Frontmatter parsing with Gray Matter

### Image Optimization

- Remote image patterns configured for:
  - Unsplash
  - Gravatar
  - Custom domains (7learn.com, sirv.com)

### Routing

- Dynamic routes for blog posts: `/blogs/[slug]`
- Dynamic routes for portfolios: `/portfolios/[slug]`
- Parallel routes for summary page sections

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Configuration

### Next.js Config

- Image optimization with remote patterns
- Custom font loading

### Tailwind Config

- Typography plugin for markdown content
- RTL support for Persian content
