#!/usr/bin/env node

/**
 * AI Blog Post Generator
 * Automated script to generate and deploy new blog posts
 */

const fs = require('fs');
const path = require('path');
const { OpenAI } = require('openai');

// Load environment variables
require('dotenv').config({ path: path.resolve(__dirname, '.env') });

// Configuration
const CONFIG = {
  // AI API Configuration
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  MODEL: 'gpt-4',
  
  // Blog Configuration
  BLOG_THEME: 'טיסות זולות ונסיעות',
  TARGET_AUDIENCE: 'ישראלים המחפשים טיסות זולות',
  LANGUAGE: 'hebrew',
  
  // File Paths
  TEMPLATES_DIR: './templates',
  BLOG_DIR: '../src/app/blog',
  HOMEPAGE_PATH: '../src/app/page.tsx',
  BLOG_LISTING_PATH: '../src/app/blog/page.tsx',
  
  // Content Types
  POST_TYPES: [
    'טיפים לחיסכון',
    'יעדים מומלצים', 
    'מדריכים מקצועיים',
    'חדשות תעופה',
    'חבילות נסיעה',
    'ביטוח נסיעות',
    'ביטול והחזרים',
    'טיפים לנוסעים'
  ],
  
  // Specific Topics for More Variety
  TOPICS: [
    // Regional Destinations
    'טיסות זולות לאסיה',
    'טיסות זולות לאירופה', 
    'טיסות זולות לאמריקה',
    'טיסות זולות לאפריקה',
    'טיסות זולות לאוסטרליה',
    
    // Specific Countries/Cities
    'טיסות זולות לברלין',
    'טיסות זולות לקפריסין',
    'טיסות זולות ליוון',
    'טיסות זולות לספרד',
    'טיסות זולות לאיטליה',
    'טיסות זולות לצרפת',
    'טיסות זולות לאנגליה',
    'טיסות זולות לטורקיה',
    'טיסות זולות לתאילנד',
    'טיסות זולות ליפן',
    'טיסות זולות להודו',
    'טיסות זולות לדובאי',
    
    // Travel Services
    'ביטוח נסיעות לחו"ל - כל מה שצריך לדעת',
    'ביטול טיסות - איך לקבל החזר כספי',
    'השכרת רכב בחו"ל - המדריך המלא',
    'הזמנת מלונות זולים בחו"ל',
    'חבילות נסיעה מושלמות',
    
    // Travel Tips
    'איך לארוז נכון לנסיעה',
    'טיפים לנוסעים עם ילדים',
    'מסמכים נדרשים לנסיעה לחו"ל',
    'איך להתכונן לנסיעה ארוכה',
    'טיפים לנוסעים עם בעלי חיים',
    
    // Seasonal Topics
    'טיסות זולות לחופשת הקיץ',
    'טיסות זולות לחופשת הפסח',
    'טיסות זולות לחופשת הסוכות',
    'טיסות זולות לחופשת החורף',
    'טיסות זולות לראש השנה'
  ],
  
  // Image mapping for different topics and destinations
  IMAGE_MAPPING: {
    // Regional destinations
    'אסיה': 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf',
    'אירופה': 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b',
    'אמריקה': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828',
    'אפריקה': 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5',
    'אוסטרליה': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    
    // Specific cities/countries
    'ברלין': 'https://images.unsplash.com/photo-1587330979470-3595ac045cd0',
    'קפריסין': 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    'יוון': 'https://images.unsplash.com/photo-1570077188660-9787d3f8c4b8',
    'ספרד': 'https://images.unsplash.com/photo-1539037116277-4db20889f2d4',
    'איטליה': 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b',
    'צרפת': 'https://images.unsplash.com/photo-1502602898536-47ad22581b52',
    'אנגליה': 'https://images.unsplash.com/photo-1513635269975-59663e0eb1f7',
    'טורקיה': 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200',
    'תאילנד': 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a',
    'יפן': 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e',
    'הודו': 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da',
    'דובאי': 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
    
    // Travel services
    'ביטוח': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
    'ביטול': 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
    'השכרת רכב': 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000',
    'מלונות': 'https://images.unsplash.com/photo-1566073771259-6a8506099945',
    'חבילות': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828',
    
    // Travel tips
    'אריזה': 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62',
    'ילדים': 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9',
    'מסמכים': 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c',
    'הכנה': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828',
    'בעלי חיים': 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1',
    
    // Seasonal
    'קיץ': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    'פסח': 'https://images.unsplash.com/photo-1596120236172-231999844ade',
    'סוכות': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4',
    'חורף': 'https://images.unsplash.com/photo-1551524164-6cf77ac2c480',
    'ראש השנה': 'https://images.unsplash.com/photo-1596120236172-231999844ade',
    
    // Default images for general topics
    'טיסות': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
    'טיפים': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828',
    'מדריך': 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    'חיסכון': 'https://images.unsplash.com/photo-1554224155-6726b3ff858f',
    'נסיעות': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828',
    
    // Additional fallback images for better variety
    'default1': 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
    'default2': 'https://images.unsplash.com/photo-1488646953014-85cb44e25828',
    'default3': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05'
  }
};

class BlogPostGenerator {
  constructor() {
    this.openai = new OpenAI({
      apiKey: CONFIG.OPENAI_API_KEY,
    });
  }

  /**
   * Generate blog post content using AI
   */
  async generateContent() {
    const postType = this.getRandomPostType();
    const topic = await this.generateTopic(postType);
    const content = await this.generateFullContent(topic, postType);
    
    // Select appropriate image based on topic and title
    const imageUrl = this.selectImage(topic, content.title);
    
    return {
      ...content,
      slug: this.generateSlug(content.title),
      publishedAt: new Date().toISOString().split('T')[0],
      postType,
      topic,
      image: imageUrl
    };
  }

  /**
   * Get random post type
   */
  getRandomPostType() {
    return CONFIG.POST_TYPES[Math.floor(Math.random() * CONFIG.POST_TYPES.length)];
  }

  /**
   * Select appropriate image based on topic
   */
  selectImage(topic, title) {
    const searchText = `${topic} ${title}`.toLowerCase();
    const matches = [];
    
    // Check for specific destinations first
    for (const [key, imageUrl] of Object.entries(CONFIG.IMAGE_MAPPING)) {
      if (searchText.includes(key.toLowerCase())) {
        matches.push(imageUrl);
      }
    }
    
    // If we found matches, return a random one for variety
    if (matches.length > 0) {
      return matches[Math.floor(Math.random() * matches.length)];
    }
    
    // If no specific match found, return a random default image
    const defaultImages = [
      CONFIG.IMAGE_MAPPING['טיסות'],
      CONFIG.IMAGE_MAPPING['נסיעות'],
      CONFIG.IMAGE_MAPPING['default1'],
      CONFIG.IMAGE_MAPPING['default2'],
      CONFIG.IMAGE_MAPPING['default3']
    ];
    
    return defaultImages[Math.floor(Math.random() * defaultImages.length)];
  }

  /**
   * Generate topic using AI
   */
  async generateTopic(postType) {
    // Filter topics that match the post type or are general
    const relevantTopics = CONFIG.TOPICS.filter(topic => {
      // If it's a specific destination or service topic, it can work with any post type
      if (topic.includes('טיסות זולות ל') || 
          topic.includes('ביטוח') || 
          topic.includes('ביטול') || 
          topic.includes('השכרת') || 
          topic.includes('הזמנת') ||
          topic.includes('איך') ||
          topic.includes('טיפים') ||
          topic.includes('מסמכים') ||
          topic.includes('חופשת')) {
        return true;
      }
      
      // For other topics, check if they match the post type
      if (postType === 'יעדים מומלצים' && topic.includes('יעדים')) return true;
      if (postType === 'טיפים לחיסכון' && topic.includes('טיפים')) return true;
      if (postType === 'חדשות תעופה' && topic.includes('חדשות')) return true;
      if (postType === 'מדריכים מקצועיים' && topic.includes('מדריך')) return true;
      if (postType === 'חבילות נסיעה' && topic.includes('חבילות')) return true;
      if (postType === 'ביטוח נסיעות' && topic.includes('ביטוח')) return true;
      if (postType === 'ביטול והחזרים' && topic.includes('ביטול')) return true;
      if (postType === 'טיפים לנוסעים' && topic.includes('טיפים')) return true;
      
      return false;
    });
    
    // If no specific topics match, use all topics
    const topicsToUse = relevantTopics.length > 0 ? relevantTopics : CONFIG.TOPICS;
    
    // Return a random topic
    return topicsToUse[Math.floor(Math.random() * topicsToUse.length)];
  }

  /**
   * Generate full blog post content
   */
  async generateFullContent(topic, postType) {
    const prompt = `Write a comprehensive Hebrew blog post about: "${topic}"

Post Type: ${postType}
Target Audience: ${CONFIG.TARGET_AUDIENCE}

CRITICAL: Each section must be DETAILED with 6-8 sentences including:
- Specific examples with names of websites, tools, or companies
- Concrete numbers, dates, or scenarios
- Step-by-step instructions
- Real-world scenarios
- Professional insights

EXAMPLE of good section content:
"אתרי השוואת מחירים הם הכלי החשוב ביותר למציאת טיסות זולות. Google Flights מציע חיפוש גמיש עם אפשרות לראות מחירים על פני חודש שלם, מה שמאפשר לכם למצוא את התאריכים הזולים ביותר. Skyscanner מצוין לחיפוש גמיש עם אפשרות 'Everywhere' שמציגה יעדים זולים לפי תקציב. Kayak מציע חיפוש מתקדם עם אפשרות 'Hacker Fares' שמציגה טיסות עם חברות שונות לכל כיוון. הכלי 'Price Forecast' של Kayak מנבא אם המחיר יעלה או יירד. חשוב לבדוק מספר אתרים כי כל אחד מציע מחירים שונים. השתמשו במצב incognito כדי למנוע אתרים מלהעלות מחירים בהתבסס על היסטוריית החיפוש שלכם."

Return ONLY valid JSON:
{
  "title": "Professional Hebrew title",
  "excerpt": "3-4 sentence description of value",
  "category": "Category name", 
  "tags": ["tag1", "tag2", "tag3", "tag4"],
  "readTime": 12,
  "content": {
    "introduction": "4-5 sentences explaining importance and scope",
    "sections": [
      {
        "title": "Section title",
        "content": "6-8 sentences with specific examples, tools, methods, and actionable advice"
      },
      {
        "title": "Section title",
        "content": "6-8 sentences with specific examples, tools, methods, and actionable advice"
      },
      {
        "title": "Section title",
        "content": "6-8 sentences with specific examples, tools, methods, and actionable advice"
      },
      {
        "title": "Section title",
        "content": "6-8 sentences with specific examples, tools, methods, and actionable advice"
      },
      {
        "title": "Section title",
        "content": "6-8 sentences with specific examples, tools, methods, and actionable advice"
      },
      {
        "title": "Section title",
        "content": "6-8 sentences with specific examples, tools, methods, and actionable advice"
      }
    ],
    "conclusion": "4-5 sentences summarizing key points and encouraging action"
  }
}`;

    const response = await this.openai.chat.completions.create({
      model: CONFIG.MODEL,
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 6000,
      temperature: 0.7
    });

    try {
      let content = response.choices[0].message.content;
      
      // Clean up the content to make it valid JSON
      content = content.trim();
      
      // Remove any markdown code blocks if present
      if (content.startsWith('```json')) {
        content = content.replace(/^```json\s*/, '').replace(/\s*```$/, '');
      } else if (content.startsWith('```')) {
        content = content.replace(/^```\s*/, '').replace(/\s*```$/, '');
      }
      
      // Try to extract JSON from the content if it's wrapped in other text
      const jsonMatch = content.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        content = jsonMatch[0];
      }
      
              // If the JSON seems incomplete, try to fix it
              if (!content.endsWith('}')) {
                // Try to find the last complete section and close the JSON
                const lastCompleteSection = content.lastIndexOf('}');
                if (lastCompleteSection > 0) {
                  content = content.substring(0, lastCompleteSection + 1);
                } else {
                  // If no complete sections found, add a basic closing
                  content = content.replace(/,\s*$/, '') + '}';
                }
              }
              
              // Try to fix common JSON issues
              content = content.replace(/,(\s*[}\]])/g, '$1'); // Remove trailing commas
              content = content.replace(/([^,}])\s*}/g, '$1}'); // Add missing commas before closing braces
      
      return JSON.parse(content);
    } catch (error) {
      console.error('Error parsing AI response:', error);
      console.error('Raw response:', response.choices[0].message.content);
      throw new Error('Failed to parse AI response');
    }
  }

  /**
   * Generate URL slug from title
   */
  generateSlug(title) {
    // Convert Hebrew title to English slug
    const slugMap = {
      'טיסות': 'flights',
      'זולות': 'cheap',
      'מדריך': 'guide',
      'טיפים': 'tips',
      'חיסכון': 'savings',
      'נסיעות': 'travel',
      'אירופה': 'europe',
      'אסיה': 'asia',
      'אמריקה': 'america',
      'ישראל': 'israel',
      'ישראלים': 'israelis',
      'מלא': 'complete',
      'מומלצים': 'recommended',
      'יעדים': 'destinations',
      'מקצועיים': 'professional',
      'חדשות': 'news',
      'חבילות': 'packages',
      '2024': '2024',
      '2025': '2025'
    };
    
    let slug = title.toLowerCase();
    
    // Replace Hebrew words with English equivalents
    Object.entries(slugMap).forEach(([hebrew, english]) => {
      slug = slug.replace(new RegExp(hebrew, 'g'), english);
    });
    
    // Clean up the slug
    return slug
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  /**
   * Create blog post file
   */
  async createBlogPostFile(postData) {
    const template = this.getBlogPostTemplate();
    const content = this.fillTemplate(template, postData);
    
    const filePath = path.join(CONFIG.BLOG_DIR, postData.slug, 'page.tsx');
    const dirPath = path.dirname(filePath);
    
    // Create directory if it doesn't exist
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    fs.writeFileSync(filePath, content);
    console.log(`✅ Created blog post: ${filePath}`);
    
    return filePath;
  }

  /**
   * Get blog post template
   */
  getBlogPostTemplate() {
    return `import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '{{META_TITLE}}',
  description: '{{META_DESCRIPTION}}',
  keywords: '{{META_KEYWORDS}}',
  openGraph: {
    title: '{{META_TITLE}}',
    description: '{{META_DESCRIPTION}}',
    type: 'article',
    publishedTime: '{{PUBLISHED_AT}}',
    authors: ['צוות טיסות זולות'],
    tags: {{META_TAGS}},
    images: [
      {
        url: '{{IMAGE}}',
        width: 800,
        height: 600,
        alt: '{{META_IMAGE_ALT}}',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '{{META_TITLE}}',
    description: '{{META_DESCRIPTION}}',
    images: ['{{IMAGE}}'],
  },
  alternates: {
    canonical: '/blog/{{SLUG}}',
  },
};

export default function BlogPostPage() {
  const post = {
    title: '{{TITLE}}',
    excerpt: '{{EXCERPT}}',
    publishedAt: '{{PUBLISHED_AT}}',
    readTime: {{READ_TIME}},
    category: '{{CATEGORY}}',
    tags: {{TAGS}},
    image: '{{IMAGE}}',
    authorName: 'צוות טיסות זולות',
    authorAvatar: '/author-avatar.svg',
    authorBio: 'מומחים בתחום הטיסות והנסיעות עם ניסיון של שנים במציאת טיסות זולות.',
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage="blog" />

      {/* Article */}
      <article className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto p-6">
            {/* Back to blog */}
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 space-x-reverse text-primary-600 hover:text-primary-700 font-medium mb-8 transition-colors duration-200"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="hebrew-text">חזור למאמרים</span>
            </Link>

            {/* Article header */}
            <header className="mb-12">
              <div className="mb-4">
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium hebrew-text">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 hebrew-text">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 hebrew-text">
                {post.excerpt}
              </p>

              {/* Article meta */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <User className="h-4 w-4" />
                  <span className="hebrew-text">{post.authorName}</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.publishedAt).toLocaleDateString('he-IL')}</span>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Clock className="h-4 w-4" />
                  <span className="hebrew-text">{post.readTime} דקות קריאה</span>
                </div>
              </div>

              {/* Featured image */}
              <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden mb-8">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hebrew-text"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </header>

            {/* Article content */}
            <div className="prose prose-lg max-w-none hebrew-text">
              {{CONTENT}}
            </div>

            {/* Author bio */}
            <div className="mt-16 p-8 lg:p-10 bg-gray-100 rounded-2xl">
              <div className="flex items-start space-x-4 space-x-reverse">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src={post.authorAvatar}
                    alt={post.authorName}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 hebrew-text">
                    {post.authorName}
                  </h3>
                  <p className="text-gray-600 hebrew-text">
                    {post.authorBio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
}
`;
  }

  /**
   * Generate SEO-optimized meta title
   */
  generateMetaTitle(title, topic) {
    // Extract key terms from title and topic
    const keyTerms = this.extractKeyTerms(title, topic);
    return `${title} - ${keyTerms.join(' ')} 2025`;
  }

  /**
   * Generate SEO-optimized meta description
   */
  generateMetaDescription(excerpt, topic) {
    const keyTerms = this.extractKeyTerms(excerpt, topic);
    const baseDescription = excerpt.length > 120 ? excerpt.substring(0, 120) + '...' : excerpt;
    return `${baseDescription} ${keyTerms.join(', ')}. מדריך מקצועי עם טיפים וכלים מומלצים.`;
  }

  /**
   * Generate SEO keywords
   */
  generateMetaKeywords(title, topic, tags) {
    const keyTerms = this.extractKeyTerms(title, topic);
    const baseKeywords = ['טיסות זולות', 'חיסכון על טיסות', 'טיפים לטיסות', 'אתרי השוואת מחירים'];
    const allKeywords = [...baseKeywords, ...keyTerms, ...tags];
    return [...new Set(allKeywords)].join(', ');
  }

  /**
   * Extract key terms for SEO
   */
  extractKeyTerms(text, topic) {
    const terms = [];
    
    // Add topic-specific terms
    if (topic.includes('קפריסין')) terms.push('קפריסין', 'טיסות לקפריסין', 'חופשה בקפריסין');
    if (topic.includes('אירופה')) terms.push('אירופה', 'טיסות לאירופה', 'חופשה באירופה');
    if (topic.includes('אסיה')) terms.push('אסיה', 'טיסות לאסיה', 'חופשה באסיה');
    if (topic.includes('אוסטרליה')) terms.push('אוסטרליה', 'טיסות לאוסטרליה', 'חופשה באוסטרליה');
    if (topic.includes('חורף')) terms.push('חופשת חורף', 'טיסות לחורף');
    if (topic.includes('ישראל')) terms.push('מישראל', 'טיסות מישראל', 'נסיעות מישראל');
    
    // Add general terms
    terms.push('מדריך מקיף', 'טיפים מקצועיים', 'כלים מומלצים');
    
    return terms;
  }

  /**
   * Generate meta image alt text
   */
  generateMetaImageAlt(title, topic) {
    const keyTerms = this.extractKeyTerms(title, topic);
    return `${title} - ${keyTerms.slice(0, 3).join(' ')}`;
  }

  /**
   * Fill template with data
   */
  fillTemplate(template, postData) {
    let content = template;
    
    // Generate meta data
    const metaTitle = this.generateMetaTitle(postData.title, postData.topic);
    const metaDescription = this.generateMetaDescription(postData.excerpt, postData.topic);
    const metaKeywords = this.generateMetaKeywords(postData.title, postData.topic, postData.tags);
    const metaImageAlt = this.generateMetaImageAlt(postData.title, postData.topic);
    
    // Replace basic fields
    content = content.replace(/{{TITLE}}/g, postData.title);
    content = content.replace(/{{EXCERPT}}/g, postData.excerpt);
    content = content.replace(/{{PUBLISHED_AT}}/g, postData.publishedAt);
    content = content.replace(/{{READ_TIME}}/g, postData.readTime);
    content = content.replace(/{{CATEGORY}}/g, postData.category);
    content = content.replace(/{{TAGS}}/g, JSON.stringify(postData.tags));
    content = content.replace(/{{IMAGE}}/g, postData.image);
    
    // Replace meta fields
    content = content.replace(/{{SLUG}}/g, postData.slug);
    content = content.replace(/{{META_TITLE}}/g, metaTitle);
    content = content.replace(/{{META_DESCRIPTION}}/g, metaDescription);
    content = content.replace(/{{META_KEYWORDS}}/g, metaKeywords);
    content = content.replace(/{{META_TAGS}}/g, JSON.stringify(postData.tags));
    content = content.replace(/{{META_IMAGE_ALT}}/g, metaImageAlt);
    
    // Generate content HTML
    const contentHTML = this.generateContentHTML(postData.content);
    content = content.replace(/{{CONTENT}}/g, contentHTML);
    
    return content;
  }

  /**
   * Generate HTML content from structured data
   */
  generateContentHTML(content) {
    let html = '';
    
    // Introduction
    if (content.introduction) {
      html += `<p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">${content.introduction}</p>\n\n`;
    }
    
    // Sections
    if (content.sections) {
      content.sections.forEach((section) => {
        html += `<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">${section.title}</h2>\n`;
        
        if (section.content) {
          html += `<div className="mb-8">\n`;
          html += `<p className="text-lg text-gray-600 leading-relaxed hebrew-text">${section.content}</p>\n`;
          html += `</div>\n\n`;
        }
        
        if (section.subsections) {
          section.subsections.forEach((subsection) => {
            html += `<div className="mb-8">\n`;
            html += `<h3 className="text-xl font-bold text-gray-900 mb-4 hebrew-text">${subsection.title}</h3>\n`;
            html += `<p className="text-lg text-gray-600 leading-relaxed hebrew-text">${subsection.content}</p>\n`;
            html += `</div>\n\n`;
          });
        }
      });
    }
    
    // Conclusion
    if (content.conclusion) {
      html += `<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>\n`;
      html += `<p className="text-lg text-gray-600 leading-relaxed hebrew-text">${content.conclusion}</p>\n`;
    }
    
    return html;
  }

  /**
   * Update homepage with new post
   */
  async updateHomepage(postData) {
    try {
      const fs = require('fs');
      const path = require('path');
      
      const homepagePath = path.resolve(__dirname, CONFIG.HOMEPAGE_PATH);
      let homepageContent = fs.readFileSync(homepagePath, 'utf8');
      
      // Create new post object for mockPosts
      const newPost = {
        id: `'${Date.now()}'`, // Use timestamp as unique ID
        title: `'${postData.title}'`,
        excerpt: `'${postData.excerpt}'`,
        publishedAt: `'${postData.publishedAt}'`,
        readTime: postData.readTime,
        category: `'${postData.category}'`,
        tags: JSON.stringify(postData.tags),
        image: `'${postData.image}'`,
        url: `'/blog/${postData.slug}'`
      };
      
      // Create the new post object string
      const newPostString = `  {
    id: ${newPost.id},
    title: ${newPost.title},
    excerpt: ${newPost.excerpt},
    publishedAt: ${newPost.publishedAt},
    readTime: ${newPost.readTime},
    category: ${newPost.category},
    tags: ${newPost.tags},
    image: ${newPost.image},
    url: ${newPost.url}
  },`;
      
      // Insert the new post at the beginning of mockPosts array
      homepageContent = homepageContent.replace(
        /const mockPosts = \[/,
        `const mockPosts = [\n${newPostString}`
      );
      
      fs.writeFileSync(homepagePath, homepageContent);
      console.log('✅ Homepage updated with new post');
      
    } catch (error) {
      console.log('⚠️ Could not update homepage:', error.message);
    }
  }

  /**
   * Update blog listing page
   */
  async updateBlogListing(postData) {
    try {
      const fs = require('fs');
      const path = require('path');
      
      const blogListingPath = path.resolve(__dirname, CONFIG.BLOG_LISTING_PATH);
      let blogListingContent = fs.readFileSync(blogListingPath, 'utf8');
      
      // Create new post object for mockPosts
      const newPost = {
        id: `'${Date.now()}'`, // Use timestamp as unique ID
        title: `'${postData.title}'`,
        excerpt: `'${postData.excerpt}'`,
        publishedAt: `'${postData.publishedAt}'`,
        readTime: postData.readTime,
        category: `'${postData.category}'`,
        tags: JSON.stringify(postData.tags),
        image: `'${postData.image}'`,
        url: `'/blog/${postData.slug}'`
      };
      
      // Create the new post object string
      const newPostString = `  {
    id: ${newPost.id},
    title: ${newPost.title},
    excerpt: ${newPost.excerpt},
    publishedAt: ${newPost.publishedAt},
    readTime: ${newPost.readTime},
    category: ${newPost.category},
    tags: ${newPost.tags},
    image: ${newPost.image},
    url: ${newPost.url}
  },`;
      
      // Insert the new post at the beginning of mockPosts array
      blogListingContent = blogListingContent.replace(
        /const mockPosts = \[/,
        `const mockPosts = [\n${newPostString}`
      );
      
      fs.writeFileSync(blogListingPath, blogListingContent);
      console.log('✅ Blog listing updated with new post');
      
    } catch (error) {
      console.log('⚠️ Could not update blog listing:', error.message);
    }
  }

  /**
   * Main execution function
   */
  async run() {
    try {
      console.log('🚀 Starting AI blog post generation...');
      
      // Check API key
      if (!CONFIG.OPENAI_API_KEY) {
        throw new Error('OPENAI_API_KEY environment variable is required');
      }
      
      // Generate content
      console.log('🤖 Generating content with AI...');
      const postData = await this.generateContent();
      
      // Create blog post file
      console.log('📝 Creating blog post file...');
      await this.createBlogPostFile(postData);
      
      // Update other pages (optional)
      await this.updateHomepage(postData);
      await this.updateBlogListing(postData);
      
      console.log('✅ Blog post generated successfully!');
      console.log(`📄 Title: ${postData.title}`);
      console.log(`🔗 Slug: ${postData.slug}`);
      console.log(`📁 File: ${CONFIG.BLOG_DIR}/${postData.slug}/page.tsx`);
      
      return postData;
      
    } catch (error) {
      console.error('❌ Error generating blog post:', error);
      throw error;
    }
  }
}

// Run the generator
if (require.main === module) {
  const args = process.argv.slice(2);
  const isTestMode = args.includes('--test');
  const showHelp = args.includes('--help') || args.includes('-h');
  const postType = args[0] || null;
  const topic = args[1] || null;
  
  if (showHelp) {
    console.log(`
🚀 Hebrew Travel Blog Generator

Usage:
  node generate-blog-post.js [postType] [topic] [--test]

Examples:
  # Generate random post
  node generate-blog-post.js

  # Generate specific post type and topic
  node generate-blog-post.js "טיפים לחיסכון" "טיסות זולות לברלין"

  # Test mode (no files created)
  node generate-blog-post.js --test
  node generate-blog-post.js "ביטוח נסיעות" "ביטוח נסיעות לחו\"ל" --test

Available Post Types:
${CONFIG.POST_TYPES.map(type => `  - ${type}`).join('\n')}

Sample Topics:
${CONFIG.TOPICS.slice(0, 10).map(topic => `  - ${topic}`).join('\n')}
  ... and ${CONFIG.TOPICS.length - 10} more topics

Flags:
  --test    Run in test mode (no files created)
  --help    Show this help message
    `);
    process.exit(0);
  }
  
  const generator = new BlogPostGenerator();
  
  // Override generateContent if specific postType and topic are provided
  if (postType && topic) {
    generator.generateContent = async function() {
      const content = await this.generateFullContent(topic, postType);
      
      // Select appropriate image based on topic and title
      const imageUrl = this.selectImage(topic, content.title);
      
      return {
        ...content,
        slug: this.generateSlug(content.title),
        publishedAt: new Date().toISOString().split('T')[0],
        postType,
        topic,
        image: imageUrl
      };
    };
  }
  
  if (isTestMode) {
    console.log('🧪 Running in test mode - no files will be created');
    generator.generateContent()
      .then((postData) => {
        console.log('📄 Generated content:');
        console.log(`Title: ${postData.title}`);
        console.log(`Excerpt: ${postData.excerpt}`);
        console.log(`Category: ${postData.category}`);
        console.log(`Tags: ${postData.tags.join(', ')}`);
        console.log(`Slug: ${postData.slug}`);
        console.log(`Image: ${postData.image}`);
        console.log('\n📝 Content preview:');
        console.log(postData.content.introduction);
        console.log('\n✅ Test completed successfully!');
        process.exit(0);
      })
      .catch((error) => {
        console.error('❌ Test failed:', error);
        process.exit(1);
      });
  } else {
    generator.run()
      .then(() => process.exit(0))
      .catch((error) => {
        console.error('Fatal error:', error);
        process.exit(1);
      });
  }
}

module.exports = BlogPostGenerator;
