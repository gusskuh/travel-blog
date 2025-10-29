import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'יעדים מומלצים לטיסות זולות מישראל - מדריך 2025',
  description: 'גלו את היעדים הטובים ביותר לטיסות זולות מישראל. מדריך מקיף עם יעדים פופולריים, טיפים לחיסכון ומידע מקצועי על מחירי טיסות.',
  keywords: 'יעדים מומלצים, טיסות זולות מישראל, יעדים פופולריים, טיפים לחיסכון, מחירי טיסות, נסיעות זולות, יעדי חופשה',
  openGraph: {
    title: 'יעדים מומלצים לטיסות זולות מישראל - מדריך 2025',
    description: 'גלו את היעדים הטובים ביותר לטיסות זולות מישראל. מדריך מקיף עם יעדים פופולריים וטיפים לחיסכון.',
    type: 'article',
    publishedTime: '2025-10-28',
    authors: ['צוות טיסות זולות'],
    tags: ['יעדים מומלצים', 'טיסות זולות', 'מישראל', 'יעדים פופולריים', 'מדריך', '2025'],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
        width: 800,
        height: 600,
        alt: 'יעדים מומלצים לטיסות זולות מישראל',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'יעדים מומלצים לטיסות זולות מישראל - מדריך 2025',
    description: 'גלו את היעדים הטובים ביותר לטיסות זולות מישראל. מדריך מקיף עם יעדים פופולריים.',
    images: ['https://images.unsplash.com/photo-1436491865332-7a61a109cc05'],
  },
  alternates: {
    canonical: '/blog/guide-2025-flights-cheap-israel-destinations-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'מדריך מעודכן ל-2025: כיצד למצוא את הטיסות הזולות ביותר מישראל ליעדים פופולריים בעולם',
    excerpt: 'המדריך הזה מציג מספר טיפים מעשיים שיסייעו לכם למצוא את הטיסות הזולות ביותר מישראל ליעדים פופולריים בעולם, עם דגש על שיטות חיפוש חכמות והכנה מוקדמת.',
    publishedAt: '2025-10-26',
    readTime: 8,
    category: 'חדשות תעופה',
    tags: ["טיסות","חיפוש טיסות","טיפים","חסכון","תעופה"],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">מחפשים דרך לחסוך כסף בטיסות שלכם? יש לנו כמה טיפים שיכולים לעזור. במדריך זה, אנו נדרוך בדרכים שונות שבהן אתם יכולים למצוא את הטיסות הזולות ביותר מישראל ליעדים פופולריים בעולם.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">השוואת מחירים באמצעות מנות חיפוש</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי חיפוש כמו Skyscanner, Google Flights וכדומה מאפשרים לכם להשוות את מחירי הטיסות של מספר חברות תעופה במקביל. באמצעות הזנת יעד ותאריכים, תוכלו לראות אילו חברות מציעות את המחירים הזולים ביותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הזמנה מוקדמת</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">הזמנת טיסה בהתאמה מוקדמת יכולה להביא לחיסכון משמעותי במחיר. בדרך כלל, מחירי הטיסות הם הנמוכים ביותר בעת הזמנה של 3-6 חודשים מראש לפני מועד הטיסה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">ניצול מבצעים ומכירות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חברות התעופה לעיתים קורות מציעות מכירות ומבצעים מיוחדים. ניתן להירשם לרשימות תפוצה של החברות כדי להיות עדכניים ולנצל את ההזדמנויות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">גמישות בבחירת תאריכים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם אתם גמישים בבחירת התאריכים, תוכלו למצוא מחירים זולים יותר. לעתים קרובות, טיסות באמצע השבוע או בשעות לא נוחות יהיו זולות יותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">טיסות עם עצירה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לעתים קרובות, טיסה עם עצירה או שתיים תהיה זולה יותר מטיסה ישירה. זו דרך טובה לחסוך כסף, אם אתם מוכנים להקריב קצת זמן נוסף בדרך.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">בעזרת הטיפים האלה, אנו מקווים שתוכלו למצוא את הטיסות הזולות ביותר ליעדים שאתם מעוניינים להגיע אליהם. זכרו, המפתח הוא להיות גמישים, להכין את עצמכם מראש ולקחת זמן לחקור את כל האפשרויות.</p>

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
