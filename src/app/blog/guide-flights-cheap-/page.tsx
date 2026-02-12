import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מדריך למציאת טיסות זולות לראש השנה - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'מחפשים טיסות זולות לראש השנה? במדריך זה נלמד אתכם כיצד למצוא את המציאות המשתלמת ביותר באמצעות כלים וטריקים של מקצוענים. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, ראש השנה, חפש טיסות, חופשה',
  openGraph: {
    title: 'מדריך למציאת טיסות זולות לראש השנה - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מחפשים טיסות זולות לראש השנה? במדריך זה נלמד אתכם כיצד למצוא את המציאות המשתלמת ביותר באמצעות כלים וטריקים של מקצוענים. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-02-12',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות זולות","ראש השנה","חפש טיסות","חופשה"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1596120236172-231999844ade',
        width: 800,
        height: 600,
        alt: 'מדריך למציאת טיסות זולות לראש השנה - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מדריך למציאת טיסות זולות לראש השנה - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מחפשים טיסות זולות לראש השנה? במדריך זה נלמד אתכם כיצד למצוא את המציאות המשתלמת ביותר באמצעות כלים וטריקים של מקצוענים. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1596120236172-231999844ade'],
  },
  alternates: {
    canonical: '/blog/guide-flights-cheap-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'מדריך למציאת טיסות זולות לראש השנה',
    excerpt: 'מחפשים טיסות זולות לראש השנה? במדריך זה נלמד אתכם כיצד למצוא את המציאות המשתלמת ביותר באמצעות כלים וטריקים של מקצוענים.',
    publishedAt: '2026-02-12',
    readTime: 12,
    category: 'מדריכים מקצועיים',
    tags: ["טיסות זולות","ראש השנה","חפש טיסות","חופשה"],
    image: 'https://images.unsplash.com/photo-1596120236172-231999844ade',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">ראש השנה הוא זמן נפלא לטיסה או חופשה, אך מציאת טיסות במחירים סבירים יכולה להיות מאתגרת. לכן, נדרשת תכנון מראש וחיפוש מסורת. במדריך זה, אנו מציעים עצות מקצועיות וכלים שיסייעו לכם למצוא טיסות זולות לראש השנה.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">שימוש באתרים להשוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם הכלי החשוב ביותר למציאת טיסות זולות. Google Flights מציע חיפוש גמיש עם אפשרות לראות מחירים על פני חודש שלם, מה שמאפשר לכם למצוא את התאריכים הזולים ביותר. Skyscanner מצוין לחיפוש גמיש עם אפשרות 'Everywhere' שמציגה יעדים זולים לפי תקציב. Kayak מציע חיפוש מתקדם עם אפשרות 'Hacker Fares' שמציגה טיסות עם חברות שונות לכל כיוון.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">השארת גמישות בתאריכים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לעיתים קרובות, מחירי הטיסות משתנים בהתאם לתאריך. אם אתם משאירים את עצמכם גמישים בנוגע לתאריכים, אתם יכולים למצוא מחירים זולים יותר. אתרים כמו Skyscanner או Google Flights מאפשרים לכם לראות את מחיר הטיסות לאורך חודש שלם, ולכן אתם יכולים לבחור את התאריך הזול ביותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">חיפוש בחברות תעופה זולות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חברות תעופה זולות יכולות להיות אופציה טובה למציאת טיסות במחירים נמוכים. אתרים כמו Ryanair, EasyJet או Wizz Air מציעים טיסות במחירים מאוד זולים. עם זאת, חשוב לזכור שהמחירים הזולים יכולים להכיל עלויות נוספות כמו תיקים, מקום ישיבה או אוכל במטוס.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הרשמה להתראות מחיר</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">הרבה אתרים מציעים אופציה להרשמה להתראות מחיר. כאשר מחיר הטיסה שאתם מעוניינים בה משתנה, האתר ישלח לכם הודעה. זה יכול להיות שיטה מצוינת למציאת טיסות זולות בלי לבזבז זמן על חיפושים יומיים. Google Flights וSkyscanner הם שני האתרים שמציעים שירות זה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">בחירת יעד לפי המחיר</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם אתם גמישים בנושא היעד, יש אפשרות לבחור את היעד לפי המחיר. אתרים כמו Skyscanner מאפשרים לכם לחפש 'לכל מקום', והם יציגו את היעדים הזולים ביותר. זו דרך נהדרת למצוא טיסות זולות ואף לגלות יעדים חדשים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">ראש השנה הוא זמן לחגוג ולנוח, ואין דרך טובה יותר לעשות זאת מאשר בחופשה. באמצעות הטיפים המקצועיים והכלים שסיפקנו, אנו מאמינים שתוכלו למצוא טיסות זולות לראש השנה. תכננו מראש, השאירו את עצמכם גמישים, ותהנו מהחופשה שלכם!</p>

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
