# 🇮🇱 Hebrew Travel Blog

A modern, AI-powered Hebrew travel blog that automatically generates high-quality content about cheap flights, travel tips, and destination guides.

## ✨ Features

- 🤖 **AI-Generated Content** - Automatically creates comprehensive blog posts
- 🎨 **Modern Design** - Beautiful, responsive UI with Hebrew RTL support
- 📱 **Mobile-First** - Optimized for all devices
- 🚀 **Auto-Deployment** - Deploys automatically via Vercel
- ⏰ **Scheduled Posts** - Generates new content twice a week
- 🖼️ **Smart Images** - Automatically selects relevant Unsplash images

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- OpenAI API key
- GitHub account
- Vercel account

### Local Development

1. **Clone and install:**
   ```bash
   git clone <your-repo-url>
   cd hebrew-travel-blog
   npm install
   ```

2. **Set up environment:**
   ```bash
   cp scripts/env.example .env
   # Add your OpenAI API key to .env
   ```

3. **Run locally:**
   ```bash
   npm run dev
   ```

4. **Generate test post:**
   ```bash
   npm run generate:test
   ```

### Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Quick deploy:**
1. Push to GitHub
2. Connect to Vercel
3. Set environment variables
4. Done! 🎉

## 📝 Content Generation

The blog automatically generates content about:
- ✈️ Cheap flights to various destinations
- 🏝️ Travel guides for specific countries/cities
- 💡 Travel tips and hacks
- 🛡️ Travel insurance guides
- 💰 Money-saving strategies

### Manual Generation

```bash
# Generate a specific topic
npm run generate "יעדים מומלצים" "טיסות זולות לקפריסין"

# Generate with test mode
npm run generate:test
```

## 🛠️ Customization

### Topics
Edit `scripts/generate-blog-post.js` → `CONFIG.TOPICS`

### Images
Edit `scripts/generate-blog-post.js` → `CONFIG.IMAGE_MAPPING`

### Schedule
Edit `.github/workflows/generate-blog-posts.yml` → `cron` schedule

## 📁 Project Structure

```
├── src/app/                 # Next.js app directory
│   ├── blog/               # Blog post pages
│   ├── page.tsx            # Homepage
│   └── layout.tsx          # Root layout
├── scripts/                # AI generation scripts
│   ├── generate-blog-post.js
│   └── deploy.sh
├── .github/workflows/      # GitHub Actions
└── public/                 # Static assets
```

## 🤖 AI Configuration

The blog uses OpenAI's GPT-4 to generate:
- Comprehensive, 300+ word articles
- Relevant Hebrew content
- SEO-optimized titles and descriptions
- Appropriate tags and categories

## 📊 Analytics & SEO

- Built-in Next.js optimization
- Responsive images
- Fast loading times
- SEO-friendly URLs
- Hebrew language support

## 🔧 Tech Stack

- **Framework:** Next.js 16
- **Styling:** Tailwind CSS
- **AI:** OpenAI GPT-4
- **Deployment:** Vercel
- **Automation:** GitHub Actions
- **Images:** Unsplash API

## 📞 Support

For issues or questions:
1. Check the [DEPLOYMENT.md](./DEPLOYMENT.md) guide
2. Review GitHub Actions logs
3. Check Vercel deployment logs

---

**Made with ❤️ for Hebrew travelers**# Build trigger Wed Oct 29 13:20:36 +07 2025
# Build trigger Wed Oct 29 13:22:10 +07 2025
# Redeploy trigger Wed Oct 29 13:28:24 +07 2025
