import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'איך למצוא טיסות זולות לקפריסין - מדריך מקיף 2025',
  description: 'גלו איך למצוא טיסות זולות לקפריסין עם הטיפים והכלים הטובים ביותר. מדריך מקצועי לחיסכון על טיסות לקפריסין כולל אתרים מומלצים וטריקים מתקדמים.',
  keywords: 'טיסות זולות לקפריסין, טיסות לקפריסין, חופשה בקפריסין, טיפים לטיסות, חיסכון על טיסות, אתרי השוואת מחירים, טיסות מישראל',
  openGraph: {
    title: 'איך למצוא טיסות זולות לקפריסין - מדריך מקיף 2025',
    description: 'גלו איך למצוא טיסות זולות לקפריסין עם הטיפים והכלים הטובים ביותר. מדריך מקצועי לחיסכון על טיסות לקפריסין.',
    type: 'article',
    publishedTime: '2025-10-28',
    authors: ['צוות טיסות זולות'],
    tags: ['טיסות זולות', 'קפריסין', 'חופשה', 'טיפים'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
        width: 800,
        height: 600,
        alt: 'טיסות זולות לקפריסין',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'איך למצוא טיסות זולות לקפריסין - מדריך מקיף 2025',
    description: 'גלו איך למצוא טיסות זולות לקפריסין עם הטיפים והכלים הטובים ביותר.',
    images: ['https://images.unsplash.com/photo-1469474968028-56623f02e42e'],
  },
  alternates: {
    canonical: '/blog/-flights-cheap-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'איך למצוא טיסות זולות לקפריסין',
    excerpt: 'קפריסין היא יעד מועדף לישראלים. גלו במאמר זה איך למצוא טיסות זולות לקפריסין באמצעות אתרים מגוונים, כלים חדשניים וטיפים מקצועיים.',
    publishedAt: '2025-10-28',
    readTime: 12,
    category: 'יעדים מומלצים',
    tags: ["טיסות","קפריסין","חגים","חופשה","חיפוש טיסות"],
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">קפריסין היא יעד מועדף לישראלים, המציעה שילוב של חוף ים מדהים, מנות מקומיות מעולות ואתרים ארכיאולוגיים מרהיבים. כדי להפוך את הנסיעה למשתלמת יותר, נדרשת מעט מחקר והכנה. במאמר זה, אנו נאפשר לכם למצוא את הטיסה הזולה ביותר לקפריסין, תוך שימוש באתרים שונים, כלים יעילים וטיפים מקצועיים.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">חיפוש טיסות באינטרנט</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים כמו Skyscanner, Google Flights ו-Kayak הם מקום מצוין להתחיל. הם מאפשרים חיפוש גמיש שמראה את המחירים לפי חודש שלם, מה שמאפשר למצוא את התאריכים הזולים ביותר. בנוסף, ניתן להשתמש באפשרות 'Hacker Fares' של Kayak, שמציגה טיסות עם חברות שונות לכל כיוון. זכרו לבדוק מספר אתרים, שכן כל אחד מציע מחירים שונים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">תכנון מראש</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">באופן כללי, הזמנת טיסה מראש של כ-2-3 חודשים לפני המועד המבוקש, מאפשרת למצוא מחירים זולים יותר. במקרה של קפריסין, המחירים נמוכים במיוחד בחודשי החורף, כאשר פחות תיירים מבקרים באי. אם אתם מחפשים טיסה זולה, כדאי לבחון את תאריכי הנסיעה שלכם.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמנת טיסה לפי ימי השבוע</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חקרים מראים שהמחירים של טיסות משתנים לפי ימי השבוע. במקרה של טיסות לקפריסין, המחירים הכי זולים מצויים ברוב המקרים בימי שני ושלישי. ימי שישי ושבת הם הימים הכי יקרים לטוס. לכן, כדאי לעקוב אחרי המחירים של הטיסות ולבחון את האפשרויות בהתאם.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">שימוש במצב incognito</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרים רבים משתמשים ב-cookies למעקב אחר היסטוריית החיפוש שלכם, ומעלים את המחירים בהתאם. כדי למנוע זאת, ניתן להשתמש במצב incognito או private browsing בדפדפן שלכם. זה ימנע מהאתרים לעקוב אחרי החיפושים שלכם, ויאפשר לכם למצוא את המחיר הזול ביותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הרשמה לרשימת תפוצה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חברות התעופה רבות מציעות הכי הרבה הנחות למנויי רשימת התפוצה שלהן. כאשר אתם מנויים לרשימה, אתם מקבלים בדואר האלקטרוני שלכם מבצעים והכרזות על מכירות של טיסות. לכן, כדאי להירשם לרשימת התפוצה של חברות התעופה השונות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">המחירים של טיסות לקפריסין יכולים להיות משתנים, אך עם תכנון מראש, חיפוש גמיש ושימוש בכלים הנכונים, אפשר למצוא טיסה זולה. זכרו לבדוק מספר אתרים שונים, להימנע מהוספת cookies באמצעות מצב ה-incognito, ולהרשם לרשימת התפוצה של חברות התעופה. בהצלחה במציאת הטיסה הזולה ביותר לקפריסין!</p>

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

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 space-x-reverse mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">✈</span>
              </div>
              <span className="text-xl font-bold hebrew-text">טיסות זולות</span>
            </div>
            <p className="text-gray-400 hebrew-text">
              המדריך המלא לטיסות זולות ונסיעות חכמות
            </p>
          </div>
        </div>
      </footer>
      <Footer />
    </div>
  );
}
