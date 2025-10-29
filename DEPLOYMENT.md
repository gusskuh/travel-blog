# 🚀 Deployment Guide

This guide will help you deploy your Hebrew travel blog and set up automated blog post generation.

## 📋 Prerequisites

1. **GitHub Account** - for repository hosting and GitHub Actions
2. **Vercel Account** - for hosting the blog
3. **OpenAI API Key** - for AI content generation

## 🎯 Step 1: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit with blog generation"
   git push origin main
   ```

2. **Connect to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/login with your GitHub account
   - Click "New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings

3. **Deploy:**
   - Click "Deploy"
   - Your blog will be live at `https://your-project-name.vercel.app`

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

## 🔑 Step 2: Set Up Environment Variables

### In Vercel Dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add:
   - `OPENAI_API_KEY` = your OpenAI API key

### In GitHub (for automated generation):
1. Go to your repository settings
2. Navigate to "Secrets and variables" → "Actions"
3. Add:
   - `OPENAI_API_KEY` = your OpenAI API key

## 🤖 Step 3: Enable Automated Blog Generation

The GitHub Actions workflow is already configured to run **twice a week** (Tuesday and Friday at 11 AM Israel time).

### To enable it:
1. Make sure your code is pushed to GitHub
2. The workflow will automatically start running on the schedule
3. You can also trigger it manually in the "Actions" tab

### To modify the schedule:
Edit `.github/workflows/generate-blog-posts.yml`:
```yaml
schedule:
  # Run every Tuesday and Friday at 9 AM UTC (11 AM Israel time)
  - cron: '0 9 * * 2,5'
  # Change to your preferred schedule
```

## 📝 Step 4: Test the Setup

### Test blog generation locally:
```bash
npm run generate:test
```

### Test blog generation in production:
1. Go to GitHub Actions tab
2. Click "Generate Blog Posts" workflow
3. Click "Run workflow" button

## 🔧 Step 5: Customize Blog Generation

### Modify topics and images:
Edit `scripts/generate-blog-post.js`:
- `CONFIG.TOPICS` - add/remove topics
- `CONFIG.IMAGE_MAPPING` - add/remove image mappings

### Change generation frequency:
Edit `.github/workflows/generate-blog-posts.yml` cron schedule

## 📊 Monitoring

### Check deployment status:
- Vercel dashboard shows deployment logs
- GitHub Actions shows generation logs

### View generated posts:
- Check the `/blog` page on your live site
- Check the `src/app/blog/` directory in your repository

## 🚨 Troubleshooting

### Common issues:

1. **Images not loading:**
   - Check if Unsplash URLs are accessible
   - Verify `next.config.ts` remotePatterns

2. **Blog generation fails:**
   - Check GitHub Actions logs
   - Verify OpenAI API key is set correctly

3. **Deployment fails:**
   - Check Vercel build logs
   - Ensure all dependencies are in `package.json`

## 🎉 You're Done!

Your blog is now:
- ✅ Deployed and live
- ✅ Automatically generating new posts twice a week
- ✅ Using AI to create high-quality Hebrew content
- ✅ Optimized for search engines

## 📈 Next Steps

1. **Customize the design** - modify colors, fonts, layout
2. **Add analytics** - Google Analytics, Vercel Analytics
3. **SEO optimization** - meta tags, sitemap
4. **Social sharing** - Open Graph tags
5. **Email newsletter** - collect subscribers

---

**Need help?** Check the logs in Vercel dashboard or GitHub Actions for detailed error messages.
