# Twain AS - Premium Bilutleie

Marketing website for Twain AS, a premium car rental company in Oslo offering Tesla and commercial vehicles through Getaround.

**Live site:** [twain.no](https://twain.no)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Content:** Velite + MDX for blog
- **3D Graphics:** React Three Fiber + Drei
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 20+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:3000](http://localhost:3000)

### Build

```bash
npm run build
```

This runs Velite (content processing) followed by Next.js build.

## Project Structure

```
twain-as-site/
├── app/                    # Next.js App Router pages
│   ├── blog/               # Blog index and dynamic post pages
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── layout.tsx          # Root layout with SEO metadata
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Global styles
│   ├── sitemap.ts          # Dynamic sitemap generation
│   ├── robots.ts           # Robots.txt configuration
│   └── manifest.ts         # PWA manifest
├── components/
│   ├── 3d/                 # React Three Fiber components
│   │   ├── scene-3d.tsx    # Canvas wrapper
│   │   ├── vehicle-model.tsx
│   │   └── vehicle-viewer.tsx
│   ├── ui/                 # UI primitives
│   │   ├── button.tsx
│   │   ├── container.tsx
│   │   └── section.tsx
│   ├── blog-card.tsx
│   ├── fleet-grid.tsx
│   ├── footer.tsx
│   ├── hero.tsx
│   ├── how-it-works.tsx
│   ├── mdx-components.tsx
│   ├── mdx-content.tsx
│   ├── navigation.tsx
│   └── vehicle-card.tsx
├── content/
│   └── blog/               # MDX blog posts
│       ├── elektrisk-bilutleie-oslo.mdx
│       ├── getaround-guide.mdx
│       └── lei-varebil-flytting.mdx
├── data/
│   └── vehicles.ts         # Vehicle data with Getaround URLs
├── lib/
│   ├── structured-data.ts  # JSON-LD schemas for SEO
│   └── utils.ts            # Utility functions (cn)
├── types/
│   └── vehicle.ts          # TypeScript interfaces
├── public/
│   └── images/             # Static images
├── velite.config.ts        # Velite MDX configuration
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
```

## Features

### Fleet Display
- 4 vehicles: Tesla Model 3, Tesla Model Y, Opel Vivaro, Ford Fiesta
- Interactive 3D vehicle viewers (stylized placeholder models)
- Direct booking links to Getaround

### SEO
- Norwegian-language metadata
- JSON-LD structured data (Organization, LocalBusiness, Vehicle)
- Dynamic sitemap and robots.txt
- Open Graph and Twitter Card support

### Blog
- MDX-powered content
- Velite for content processing (Next.js 16 compatible)
- Reading time calculation
- Typography styling

## Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_SITE_URL=https://twain.no
```

## Vehicle Data

Vehicles are defined in `data/vehicles.ts`. Each vehicle includes:
- Specs (seats, range, power, etc.)
- Features list
- Getaround booking URL
- Pricing information

## Adding Blog Posts

1. Create a new `.mdx` file in `content/blog/`
2. Add frontmatter:

```mdx
---
title: "Your Post Title"
slug: your-post-slug
date: "2024-01-15"
excerpt: "Short description for previews"
published: true
---

Your content here...
```

3. Run `npm run dev` - Velite processes content automatically

## Deployment

The site deploys automatically to Vercel on push to main branch.

### Manual Deployment

```bash
vercel
```

## License

Private - Twain AS
