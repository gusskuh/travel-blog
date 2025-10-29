#!/bin/bash

# Deploy script for Hebrew Travel Blog
echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Install script dependencies
echo "📦 Installing script dependencies..."
cd scripts
npm ci
cd ..

# Build the project
echo "🔨 Building the project..."
npm run build

# Test blog generation
echo "🤖 Testing blog generation..."
npm run generate:test

echo "✅ Deployment preparation complete!"
echo ""
echo "Next steps:"
echo "1. Push to GitHub: git add . && git commit -m 'Deploy ready' && git push"
echo "2. Deploy to Vercel: https://vercel.com/new"
echo "3. Set up environment variables in Vercel dashboard"
echo "4. Enable GitHub Actions for automated blog generation"