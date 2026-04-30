import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מדריך למציאת טיסות זולות לברלין - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'טיסה לברלין אינה חייבת להכות את הכיס שלך. במאמר זה, אנו מגלים את הטריקים והטיפים למציאת טיסות זולות לברלין. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, תיירות בברלין, חיפוש טיסות, חסכון בטיסות',
  openGraph: {
    title: 'מדריך למציאת טיסות זולות לברלין - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'טיסה לברלין אינה חייבת להכות את הכיס שלך. במאמר זה, אנו מגלים את הטריקים והטיפים למציאת טיסות זולות לברלין. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-04-30',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות זולות","תיירות בברלין","חיפוש טיסות","חסכון בטיסות"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 800,
        height: 600,
        alt: 'מדריך למציאת טיסות זולות לברלין - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מדריך למציאת טיסות זולות לברלין - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'טיסה לברלין אינה חייבת להכות את הכיס שלך. במאמר זה, אנו מגלים את הטריקים והטיפים למציאת טיסות זולות לברלין. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
  },
  alternates: {
    canonical: '/blog/guide-flights-cheap-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'מדריך למציאת טיסות זולות לברלין',
    excerpt: 'טיסה לברלין אינה חייבת להכות את הכיס שלך. במאמר זה, אנו מגלים את הטריקים והטיפים למציאת טיסות זולות לברלין.',
    publishedAt: '2026-04-30',
    readTime: 12,
    category: 'תיירות',
    tags: ["טיסות זולות","תיירות בברלין","חיפוש טיסות","חסכון בטיסות"],
    image: 'https://images.unsplash.com/photo-1618064541372-289bdb6f5b7b?q=80&w=2533&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">ברלין היא עיר מרהיבה בעלת היסטוריה עשירה, תרבות מרתקת וחיי לילה מסעירים. אך מחיר הטיסות יכול להיות מנהיג במיוחד למי שמחפש לטוס בצורה חסכונית. במאמר זה, אנו מציגים מספר טיפים וכלים שיכולים לעזור לכם למצוא טיסות זולות לברלין.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרי השוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם הכלי החשוב ביותר למציאת טיסות זולות. אתרים כמו Skyscanner, Google Flights, ו-Kayak מציעים חיפוש גמיש עם אפשרויות שונות. Skyscanner מציג טיסות לכל היעדים על פי התקציב שלכם, בעוד ש-Google Flights מאפשר לכם לראות מחירים על פני חודש שלם.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמנת טיסות בתקופות מסוימות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">הזמן המדויק בו אתם מזמינים את הטיסה שלכם יכול להשפיע על מחיר הטיסה. לדוגמה, במחקר של Expedia נמצא כי ההזמנה של טיסות ביום שני יכולה לחסוך עד 20% ממחיר הטיסה. בנוסף, ההזמנה של טיסות כחודשיים מראש יכולה להביא לחיסכון משמעותי.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">חיפוש טיסות בכל החברות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">ישנן חברות תעופה רבות שמטיסות לברלין, וכל אחת מהן מציעה מחירים שונים. השוואת מחירים בכל החברות, כולל החברות הזולות כמו EasyJet ו-Ryanair, יכולה לעזור לכם למצוא את ההצעה הכי טובה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">תזמון הטיסה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">הימים והשעות בהם אתם טסים יכולים להשפיע על מחיר הטיסה. לדוגמה, טיסות באמצע השבוע, במיוחד בשעות הלילה, מכילות לעיתים קרובות מחירים זולים יותר מאשר טיסות בסוף השבוע.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">המרת מטבעות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לעיתים, הזמנת טיסה במטבע של היעד (במקרה שלנו, האירו) יכולה להוביל לחיסכון. אתרים רבים כמו Skyscanner מאפשרים לכם לשנות את המטבע בו אתם משלמים, ובכך לחסוך על עמלות ההמרה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">המספר הרב של אפשרויות חיפוש והזמנת טיסות לברלין מאפשר לכם למצוא טיסה זולה שתתאים לכם. המפתח הוא להיות גמישים, לחפש בכמה אתרים שונים, ולהשתמש בכלים הנכונים. עם מעט מאמץ, אתם תוכלו למצוא טיסה זולה לברלין ולחסוך משמעותית בתקציב הנסיעה שלכם.</p>

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
