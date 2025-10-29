import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'מצאו טיסות זולות לאוסטרליה - המדריך המלא 2025',
  description: 'מחפשים טיסות זולות לאוסטרליה? במאמר זה, נדריך אתכם צעד אחר צעד כיצד למצוא את הדילים הכי שווים בשוק.',
  keywords: 'טיסות זולות לאוסטרליה, טיסות לאוסטרליה, חופשה באוסטרליה, השוואת מחירים, Google Flights, Skyscanner, Kayak, טיסות מישראל',
  openGraph: {
    title: 'מצאו טיסות זולות לאוסטרליה - המדריך המלא 2025',
    description: 'מחפשים טיסות זולות לאוסטרליה? במאמר זה, נדריך אתכם צעד אחר צעד כיצד למצוא את הדילים הכי שווים בשוק.',
    type: 'article',
    publishedTime: '2025-10-28',
    authors: ['צוות טיסות זולות'],
    tags: ['טיסות זולות', 'אוסטרליה', 'השוואת מחירים', 'Google Flights', 'Skyscanner', 'Kayak'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1596120236172-231999844ade',
        width: 800,
        height: 600,
        alt: 'טיסות זולות לאוסטרליה',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'מצאו טיסות זולות לאוסטרליה - המדריך המלא 2025',
    description: 'מחפשים טיסות זולות לאוסטרליה? במאמר זה, נדריך אתכם צעד אחר צעד כיצד למצוא את הדילים הכי שווים בשוק.',
    images: ['https://images.unsplash.com/photo-1596120236172-231999844ade'],
  },
  alternates: {
    canonical: '/blog/flights-cheap-guide-complete',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'טיסות זולות לקפריסין: המדריך המלא',
    excerpt: 'מחפשים טיסות זולות לקפריסין? במאמר זה, נדריך אתכם צעד אחר צעד כיצד למצוא את הדילים הכי שווים בשוק.',
    publishedAt: '2025-10-28',
    readTime: 12,
    category: 'טיולים',
    tags: ["טיסות זולות","קפריסין","השוואת מחירים","Google Flights","Skyscanner","Kayak"],
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">קפריסין היא אחת מהיעדים המועדפים על ישראלים, ולא בלשון ריקה: מזג אוויר מעולה, חופים מדהימים ומסעדות איכותיות. אך אחת ההתרסה מן המחירים הגבוהים של הטיסות. במאמר זה, נלמד איך למצוא טיסות זולות לקפריסין ולחסוך בעלויות הנסיעה.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרי השוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם הכלי החשוב ביותר למציאת טיסות זולות. Google Flights מציע חיפוש גמיש עם אפשרות לראות מחירים על פני חודש שלם, מה שמאפשר לכם למצוא את התאריכים הזולים ביותר. Skyscanner מצוין לחיפוש גמיש עם אפשרות 'Everywhere' שמציגה יעדים זולים לפי תקציב. Kayak מציע חיפוש מתקדם עם אפשרות 'Hacker Fares' שמציגה טיסות עם חברות שונות לכל כיוון.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמנה מוקדמת</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לעיתים קרובות, הזמנת טיסה במרחק של שלושה עד שישה חודשים ממועד הנסיעה, תאפשר לכם למצוא מחירים משתלמים יותר. באופן כללי, ככל שאתם מתקדמים בהזמנה, המחירים מטפסים. אם תאריך הנסיעה שלכם גמיש, נסו לשחק עם התאריכים ולראות איך הם משפיעים על המחיר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">חיפוש טיסות עם עצירה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לעיתים, טיסות בהן יש עצירה אחת או יותר, יכולות להיות זולות יותר מאשר טיסה ישירה. כמובן שזה יכול להוסיף זמן למשך הנסיעה, אך אם אתם לא ממהרים, זו אופציה שווה חשיבה. אתרים כמו Skyscanner ו-Kayak מאפשרים לחפש טיסות עם עצירות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הימנעות מהזמנה בתקופות עומס</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">בתקופות חגים או חופשות מומלץ להימנע מהזמנת טיסות, שכן המחירים בתקופות אלו עלולים להיות משמעותית גבוהים יותר. אם אתם מתכננים לטוס בתקופת חופשה, מנסים להזמין את הטיסה שלכם כמה חודשים מראש כדי למצוא מחירים זולים יותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">השוואת חברות תעופה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לא כל החברות גובות את אותו המחיר עבור טיסה לאותו היעד. לכן, מנסים להשוות בין מספר חברות תעופה לפני שאתם מבצעים הזמנה. ייתכן ותגלו שחברת תעופה מסוימת מציעה טיסה לקפריסין במחיר משתלם יותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">מציאת טיסות זולות לקפריסין היא משימה שדורשת מעט מחקר, אך בהחלט אפשרית. עם הכלים והטיפים שניתנו במאמר זה, אתם יכולים למצוא דילים מעולים ולחסוך עלויות נסיעה. כך, תוכלו להנות מהחופשה המגיעה לכם בלי לחשוש מהשפעות על הארנק.</p>

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
