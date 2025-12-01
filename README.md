# ZHENG QI — Personal Website

Professional portfolio website showcasing AI research, design projects, and academic achievements.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Portfolio Gallery**: Interactive image lightbox with keyboard navigation
- **Awards Carousel**: Auto-playing slideshow of achievements
- **Dark Mode Support**: Automatic theme switching based on system preferences
- **Interactive Elements**: Clickable project cards, image zoom, smooth scrolling

## Structure

```
├── index.html              # Main homepage
├── portfolio.html          # Detailed portfolio page
├── css/
│   ├── styles.css         # Main styles
│   └── portfolio.css      # Portfolio page styles
├── js/
│   ├── main.js           # Core functionality
│   └── portfolio.js      # Portfolio interactions
└── images/
    ├── cv/               # CV preview
    ├── logos/            # Company logos
    ├── portfolio_PAGES/  # Portfolio images
    ├── portraits/        # Profile photos
    └── reward/           # Award photos
```

## Run Locally

Using Python:
```bash
python -m http.server 5500
```

Then open `http://localhost:5500/`

## Deploy

### Vercel (Recommended)
```bash
vercel
```

### Netlify
1. Connect your Git repository
2. Build command: (leave empty)
3. Publish directory: `/`

## Technologies

- Pure HTML5, CSS3, JavaScript (no frameworks)
- Google Fonts: Crimson Text, Spectral
- Responsive grid layouts
- CSS animations and transitions

## License

Content © 2025 ZHENG QI. All rights reserved.

