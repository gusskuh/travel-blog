import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ביטול טיסות - איך לקבל החזר כספי - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'המדריך המקיף שלנו לקבלת החזר כספי על טיסות שבוטלו. למדו את הזכויות שלכם, השלבים למינימיזציה של הפסדים ואיך להבטיח שאתם מ... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, טיסות, החזר כספי, ביטול טיסות, זכויות נוסעים',
  openGraph: {
    title: 'ביטול טיסות - איך לקבל החזר כספי - מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'המדריך המקיף שלנו לקבלת החזר כספי על טיסות שבוטלו. למדו את הזכויות שלכם, השלבים למינימיזציה של הפסדים ואיך להבטיח שאתם מ... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-05-04',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות","החזר כספי","ביטול טיסות","זכויות נוסעים"],
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
    description: 'המדריך המקיף שלנו לקבלת החזר כספי על טיסות שבוטלו. למדו את הזכויות שלכם, השלבים למינימיזציה של הפסדים ואיך להבטיח שאתם מ... מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1556742049-0cfed4f6a45d'],
  },
  alternates: {
    canonical: '/blog/-flights-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'ביטול טיסות - איך לקבל החזר כספי',
    excerpt: 'המדריך המקיף שלנו לקבלת החזר כספי על טיסות שבוטלו. למדו את הזכויות שלכם, השלבים למינימיזציה של הפסדים ואיך להבטיח שאתם מקבלים את מה שאתם זכאים לו.',
    publishedAt: '2026-05-04',
    readTime: 12,
    category: 'טיסות',
    tags: ["טיסות","החזר כספי","ביטול טיסות","זכויות נוסעים"],
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">ביטול טיסות הוא מציקות מרשימה שחווים רבים מאיתנו. לפעמים, זה קורה בלא התראה מוקדמת, הופך את התוכניות שלכם לקיים, ומשאיר אתכם עם זיקוקים להחזר כספי. כאן, אנו מספקים מדריך מקיף על איך לנהל את התהליך ולוודא שאתם מקבלים את מה שאתם זכאים לו.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">התרשמות מהזכויות שלכם</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לפי החוק האירופאי EC 261/2004, אתם זכאים להחזר כספי מלא על טיסה שבוטלה, או לטיסה חלופית ליעד שלכם. אם ההמראה מאוחר ביותר משעתיים, אתם גם זכאים לתמיכה כמו אוכל, שתייה ותקשורת. אם הטיסה מאוחרת ביותר משלוש שעות, אתם יכולים להגיש תביעה לפיצוי.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">קיום קשר עם חברת התעופה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם טיסתכם בוטלה, הצעד הראשון שלכם צריך להיות ליצור קשר עם חברת התעופה. נסו לקבל ממהם אישור כתוב של הביטול. עדיף לעשות זאת באמצעות דואר אלקטרוני או בחתימה על מסמך, כך שיהיה לכם ראיות למידע הזה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">פנייה לחברת האשראי</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם קניתם את הכרטיס באמצעות חברת אשראי, נסו לפנות אליהם ולבקש החזר כספי. רוב החברות מציעות הגנה על רכישות, שמכלולת בה ביטול טיסות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">הגשת תביעה לפיצוי</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם נתקלתם בדחייה, ניתן להגיש תביעה לפיצוי. ישנם שירותים מקוונים כמו AirHelp וClaimCompass שיכולים לעזור לכם בתהליך זה. שימו לב שהם מחזיקים בחלק מהסכום שנפצה אם התביעה מצליחה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">ניהול מאמצים אישיים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם אתם מעדיפים לנהל את התהליך באופן אישי, תוכלו להגיש תביעה ישירות לחברת התעופה. יש להגיש את כל המידע הרלוונטי, כולל אישור הטיסה, פרטי הביטול והוצאות נוספות שהוצאתם בשל הביטול.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">ביטול טיסות יכול להיות מציק, אך זו לא אומרת שאתם צריכים להפסיד את הכסף ששילמתם. עם ידע מספק, קצת סבלנות והתמדה, אתם יכולים להבטיח שאתם מקבלים את ההחזר הכספי שאתם זכאים לו. אז לא להיכנע למציקות - תנו לעצמכם את הזמן להתמודד עם התהליך ולוודא שאתם מקבלים את מה שאתם זכאים לו.</p>

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
