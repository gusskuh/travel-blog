import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'טיסות זולות לראש השנה: כל מה שאתם צריכים לדעת - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'מציאת טיסות זולות לראש השנה יכולה להפוך למשימה מאתגרת. במאמר זה, אנו מציגים מסלול מפורט איך למצוא את הדילים הכי שווים וא... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, ראש השנה, ביטולים, החזרים, חגים',
  openGraph: {
    title: 'טיסות זולות לראש השנה: כל מה שאתם צריכים לדעת - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מציאת טיסות זולות לראש השנה יכולה להפוך למשימה מאתגרת. במאמר זה, אנו מציגים מסלול מפורט איך למצוא את הדילים הכי שווים וא... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2025-12-29',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות זולות","ראש השנה","ביטולים","החזרים","חגים"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1596120236172-231999844ade',
        width: 800,
        height: 600,
        alt: 'טיסות זולות לראש השנה: כל מה שאתם צריכים לדעת - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'טיסות זולות לראש השנה: כל מה שאתם צריכים לדעת - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מציאת טיסות זולות לראש השנה יכולה להפוך למשימה מאתגרת. במאמר זה, אנו מציגים מסלול מפורט איך למצוא את הדילים הכי שווים וא... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1596120236172-231999844ade'],
  },
  alternates: {
    canonical: '/blog/flights-cheap-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'טיסות זולות לראש השנה: כל מה שאתם צריכים לדעת',
    excerpt: 'מציאת טיסות זולות לראש השנה יכולה להפוך למשימה מאתגרת. במאמר זה, אנו מציגים מסלול מפורט איך למצוא את הדילים הכי שווים ואיך להתמודד עם ביטולים והחזרים.',
    publishedAt: '2025-12-29',
    readTime: 12,
    category: 'תיירות',
    tags: ["טיסות זולות","ראש השנה","ביטולים","החזרים","חגים"],
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">ראש השנה הוא זמן מעולה לטוס לחו''ל, אך מציאת טיסות זולות יכולה להימנע מתקציב החופשה שלכם. נלמד כיצד למצוא דילים משתלמים, איך להבין את מדיניות הביטולים וההחזרים ואיך להשתמש בכלים שונים לחיפוש הטיסה המושלמת לכם.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">איך למצוא טיסות זולות?</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים כמו Google Flights, Skyscanner ו-Kayak הם הכלים החשובים ביותר למציאת טיסות זולות. אלו מציעים חיפוש גמיש עם אפשרות לראות מחירים על פני חודש שלם, מה שמאפשר למצוא את התאריכים הזולים ביותר. חשוב לבדוק מספר אתרים כי כל אחד מהם מציע מבחר שונה של טיסות ומחירים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מדיניות ביטולים והחזרים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לפני שאתם מבצעים הזמנה, חשוב לבדוק את מדיניות הביטולים וההחזרים של החברה האווירית. מדיניות זו כוללת מידע על סכומי הקנסות והתנאים להחזר כספי. חשוב לקרוא את תנאי השימוש של האתר שבו ביצעתם את ההזמנה, מכיוון שגם הם יכולים להיות שונים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">כלים נוספים למציאת טיסות זולות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חשוב להיות גמישים עם התאריכים שלכם, מכיוון שזה יכול לעזור למצוא טיסות במחירים נמוכים יותר. ניתן להשתמש בכלים כמו 'Price Forecast' של Kayak, שמנבא אם המחיר עשוי לעלות או לרדת. בנוסף, ניתן להרשם להתראות מחירים מאתרים כמו Skyscanner כדי לקבל עדכונים כאשר מחירי הטיסות משתנים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">התמודדות עם ביטולים והחזרים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם אתם נאלצים לבטל טיסה, יש ליצור קשר עם החברה האווירית או האתר שבו ביצעתם את ההזמנה בהקדם האפשרי. דעו שאתם יכולים להגיש בקשה להחזר כספי או לשינוי הטיסה ללא עלות, בהתאם לתנאים של החברה האווירית ולמדיניות הביטולים שלה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">בעזרת המידע שניתן למעלה, אתם יכולים למצוא טיסות זולות לראש השנה ולהבין איך להתמודד עם ביטולים והחזרים. אז לא להתייאש, להמשיך לחפש טיסות, לקרוא את הקטנות ולשמור על הגמישות שלכם. בהצלחה בחיפוש הטיסה הבאה שלכם!</p>

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
