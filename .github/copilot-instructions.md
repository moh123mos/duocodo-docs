# DuoCodo Documentation Project - AI Agent Instructions

## Project Overview
This is a VitePress-powered documentation site for "DuoCodo" - a Duolingo-inspired programming education platform graduation project. The site serves as comprehensive project documentation with bilingual support (English/Arabic) and automated PDF generation.

## Architecture & Core Components

### VitePress Configuration
- **Main config**: `docs/.vitepress/config.mjs` - Complex bilingual setup with Mermaid integration
- **Theme**: Custom Vue theme extending DefaultTheme with image viewer plugin
- **Structure**: Follows VitePress conventions with `docs/` as content root
- **Plugins**: 
  - `vitepress-plugin-mermaid` for diagrams
  - `vitepress-plugin-image-viewer` for image galleries
  - Custom styling in `docs/.vitepress/theme/style.css`

### Content Organization Pattern
```
docs/
├── index.md (Hero page with features)
├── team.md (VPTeamPage component)
├── guide/ (English documentation chapters)
├── ar/ (Arabic mirror structure)
└── public/ (Static assets, generated PDFs)
```

### Bilingual Implementation
- **Root locale**: English (`/`)  
- **Arabic locale**: RTL layout (`/ar/`) with translated navigation
- **Sidebar structure**: Mirrored chapter organization but incomplete Arabic translation
- **Theme overrides**: Arabic-specific labels in `config.mjs` locales section

## Development Workflows

### Content Development
- **Chapter structure**: Each chapter has dedicated folder (`ch1/`, `ch2/`, etc.) with `index.md`
- **Special pages**: `one-for-all.md` consolidates all chapters with custom CSS styling
- **Asset linking**: Use `/assets/` prefix for images, stored in `docs/public/assets/`

### PDF Generation Workflow
```bash
# Primary method (automated)
.\convert.cmd

# Manual method
npx md-to-pdf ./docs/guide/one-for-all.md
move .\docs\guide\one-for-all.pdf .\docs\public\duocode.pdf
```
**Critical**: PDF generation targets `one-for-all.md` specifically, not individual chapters

### Development Server
```bash
npm run dev    # Starts on localhost:3000 with --host flag
npm run build  # Generates static site to docs/.vitepress/dist/
```

### Cloudflare Pages Deployment
- **Config**: `wrangler.jsonc` points to `./dist` directory
- **Build command**: `npm run build` (outputs to docs/.vitepress/dist)

## Content Patterns & Conventions

### Markdown Extensions
- **Table of Contents**: Use `[[toc]]` for auto-generated TOCs
- **Mermaid diagrams**: Fenced with ```mermaid
- **Custom components**: Vue components available in markdown (VPTeamPage, etc.)

### Chapter Styling Convention
The `one-for-all.md` file uses custom CSS classes:
- `.chapter` - Chapter headers with blue styling
- `.section` - Section dividers with left border
- `.highlight-box` - Callout boxes with blue accent

### Asset Management
- **Images**: Store in `docs/public/assets/CH0X/` following chapter organization
- **Diagrams**: `.drawio` files in assets folders, export as PNG/SVG for web
- **PDFs**: Generated files go to `docs/public/` for download links

## Key Integration Points

### Navigation Structure
- **English sidebar**: Defined in `themeConfig.sidebar['/guide/']`
- **Arabic sidebar**: Partially implemented in `themeConfig.locales.ar.themeConfig.sidebar`
- **Nav links**: Include PDF download link pointing to `/duocode.pdf`

### Team Page Implementation
- Uses VitePress theme components (`VPTeamPage`, `VPTeamMembers`)
- **Data source**: Hardcoded in `<script setup>` section with avatar URLs
- **Roles**: Distinguishes between team members and project managers

## Project-Specific Patterns

### Documentation Content Focus
- **Academic project**: Graduation project documentation following formal structure
- **Chapter progression**: Introduction → Background → Requirements → Analysis → Design
- **Bilingual requirement**: English primary, Arabic secondary (incomplete)

### Styling Approach
- **CSS custom properties**: Defined in `:root` for consistent theming
- **Component-scoped**: Styles in `one-for-all.md` are scoped to `.one-for-all` class
- **Responsive**: VitePress default responsive behavior maintained

### External Dependencies
- **Runtime**: Node.js for VitePress build process
- **Conversion tools**: md-to-pdf for documentation export
- **Deployment**: Cloudflare Pages (configured in wrangler.jsonc)

## Common Tasks

### Adding New Chapter
1. Create `docs/guide/chX/index.md`
2. Update sidebar in `config.mjs` (both locales)
3. Add content to `one-for-all.md` if needed for PDF
4. Create corresponding Arabic version in `docs/ar/guide/chX/`

### Updating Team Information
- Edit the `members` or `managers` arrays in `docs/team.md`
- Follow existing object structure (avatar, name, title, links)

### Asset Integration
- Place files in `docs/public/assets/CHxx/`
- Reference as `/assets/CHxx/filename.ext` in markdown
- Ensure accessibility with alt text for images

## Performance Considerations
- **Build time**: Mermaid plugin adds overhead, optimize diagram complexity
- **Image optimization**: Use appropriate formats (WebP where supported)
- **PDF size**: `one-for-all.md` approach creates large PDFs, consider chunking for very long content