import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ביטול טיסות - איך לקבל החזר כספי - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'המדריך המלא לקבלת החזר כספי על טיסות שבוטלו, מתוך שמירה על זכויות הנוסעים והגנה על האינטרסים שלכם. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, ביטול טיסות, החזר כספי, זכויות נוסעים, חוק וחובה',
  openGraph: {
    title: 'ביטול טיסות - איך לקבל החזר כספי - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'המדריך המלא לקבלת החזר כספי על טיסות שבוטלו, מתוך שמירה על זכויות הנוסעים והגנה על האינטרסים שלכם. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-06-08',
    authors: ['צוות טיסות זולות'],
    tags: ["ביטול טיסות","החזר כספי","זכויות נוסעים","חוק וחובה"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
        width: 800,
        height: 600,
        alt: 'ביטול טיסות - איך לקבל החזר כספי - מדריך מקיף טיפים מקצועיים כלים מומלצים',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ביטול טיסות - איך לקבל החזר כספי - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'המדריך המלא לקבלת החזר כספי על טיסות שבוטלו, מתוך שמירה על זכויות הנוסעים והגנה על האינטרסים שלכם. מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1556742049-0cfed4f6a45d'],
  },
  alternates: {
    canonical: '/blog/-flights-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'ביטול טיסות - איך לקבל החזר כספי',
    excerpt: 'המדריך המלא לקבלת החזר כספי על טיסות שבוטלו, מתוך שמירה על זכויות הנוסעים והגנה על האינטרסים שלכם.',
    publishedAt: '2026-06-08',
    readTime: 12,
    category: 'ביטוח נסיעות',
    tags: ["ביטול טיסות","החזר כספי","זכויות נוסעים","חוק וחובה"],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">אחת הסיטואציות המרגיזות ביותר למטיילים היא ביטול טיסה. זה יכול להיות מאכזב, מרגיז ולעיתים גם יקר. אך במקרים אלו, חשוב לדעת שיש לכם זכויות. זכויות אלו כוללות את האפשרות לקבל החזר כספי על הטיסה שהתבטלה. במאמר זה, נלמד אתכם איך להבטיח שזכויותיכם מוגנות ואיך לקבל החזר כספי במקרה של ביטול טיסה.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מהו החוק?</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">החוק האירופי EC261 מגינה על זכויות הנוסעים במקרה של ביטול טיסות. החוק נותן לנוסעים הזכות לקבל החזר כספי על הטיסה שהתבטלה, או אפשרות להפניה לטיסה אחרת. מדובר בזכות שמגיעה לכל נוסע שטס עם חברת תעופה אירופאית, או שטס לאירופה עם חברת תעופה שאינה אירופאית.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">איך לקבל החזר כספי?</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">כדי לקבל החזר כספי על טיסה שהתבטלה, יש לפנות לחברת התעופה בה רכשתם את הכרטיס. מומלץ להכין את כל המסמכים הרלוונטיים, כולל פרטי ההזמנה וכל מסמך שיכול להוכיח את הטיסה והביטול. אם חברת התעופה מסרבת להחזיר לכם את הכסף, ניתן לפנות לגורמים רשמיים כמו רשות התחבורה האווירית.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרים שיכולים לעזור</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">ישנם אתרים שיכולים לעזור לכם בתהליך קבלת ההחזר. אתרים כמו AirHelp, Refund.me וClaimCompass מתמחים בקבלת החזרים עבור טיסות שהתבטלו. הם יכולים לעזור לכם לנהל את התהליך ולהבטיח שזכויותיכם מוגנות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">מהם התנאים?</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לא כל ביטול של טיסה זכאי להחזר. החוק EC261 קובע שהנוסע זכאי להחזר כספי רק אם הביטול התרחש במהלך שבועיים לפני הטיסה, או אם חברת התעופה לא הציעה לו אפשרות להפניה לטיסה אחרת בזמן הסביר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">איך למנוע ביטולים?</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">כדי למנוע ביטולים, מומלץ לבחור בחברות תעופה אמינות ומוכרות. ניתן לבדוק את דירוג החברה באתרים כמו Skytrax. כמו כן, יש לקרוא את תנאי השימוש של חברת התעופה לפני רכישת הכרטיס, כדי לוודא שאתם מבינים את הסיכונים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">ביטול טיסה הוא מצב לא נעים, אך כאשר זה קורה, חשוב לדעת שיש לכם זכויות. תוך שמירה על מסמכים רלוונטיים, ושיתוף פעולה עם אתרים מתאימים, תוכלו לקבל החזר כספי על הטיסה שהתבטלה. אז הבאתם לידיעה את המידע הנדרש, כעת הגיע הזמן להפעיל את הזכויות שלכם.</p>

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
