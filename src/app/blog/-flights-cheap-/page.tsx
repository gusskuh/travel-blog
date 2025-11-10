import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'גילוי הטיסות הזולות ביותר לקפריסין - קפריסין טיסות לקפריסין חופשה בקפריסין מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'מחפשים טיסות זולות לקפריסין? פוסט זה מספק את כל הטיפים והכלים שאתם צריכים כדי למצוא דילים שווים ליעד המועדף שלכם. קפריסין, טיסות לקפריסין, חופשה בקפריסין, מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, קפריסין, טיסות לקפריסין, חופשה בקפריסין, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, מסלולים, הזמנות באינטרנט',
  openGraph: {
    title: 'גילוי הטיסות הזולות ביותר לקפריסין - קפריסין טיסות לקפריסין חופשה בקפריסין מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מחפשים טיסות זולות לקפריסין? פוסט זה מספק את כל הטיפים והכלים שאתם צריכים כדי למצוא דילים שווים ליעד המועדף שלכם. קפריסין, טיסות לקפריסין, חופשה בקפריסין, מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2025-11-10',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות זולות","קפריסין","מסלולים","הזמנות באינטרנט"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05',
        width: 800,
        height: 600,
        alt: 'גילוי הטיסות הזולות ביותר לקפריסין - קפריסין טיסות לקפריסין חופשה בקפריסין',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'גילוי הטיסות הזולות ביותר לקפריסין - קפריסין טיסות לקפריסין חופשה בקפריסין מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'מחפשים טיסות זולות לקפריסין? פוסט זה מספק את כל הטיפים והכלים שאתם צריכים כדי למצוא דילים שווים ליעד המועדף שלכם. קפריסין, טיסות לקפריסין, חופשה בקפריסין, מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1436491865332-7a61a109cc05'],
  },
  alternates: {
    canonical: '/blog/-flights-cheap-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'גילוי הטיסות הזולות ביותר לקפריסין',
    excerpt: 'מחפשים טיסות זולות לקפריסין? פוסט זה מספק את כל הטיפים והכלים שאתם צריכים כדי למצוא דילים שווים ליעד המועדף שלכם.',
    publishedAt: '2025-11-10',
    readTime: 12,
    category: 'חופשות',
    tags: ["טיסות זולות","קפריסין","מסלולים","הזמנות באינטרנט"],
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">קפריסין היא אחת מהיעדים המועדפים על ישראלים. אם אתם מחפשים טיסות זולות לקפריסין, המאמר הזה מכיל את כל המידע שאתם צריכים. נדבך אתכם בכל השלבים, מהחיפוש הראשוני ועד להזמנה.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">אתרים להשוואת מחירים</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אתרי השוואת מחירים הם הכלי החשוב ביותר למציאת טיסות זולות. Google Flights, Skyscanner ו-Kayak הם אתרים מעולים שמציעים חיפוש גמיש ומספקים מחירים שונים. אתר Kayak מציע את הכלי 'Price Forecast' שמנבא אם המחיר יעלה או ירד. בדקו מספר אתרים כדי לוודא שאתם מקבלים את הדיל הטוב ביותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">השוואת חברות תעופה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לא כל חברות התעופה מציעות את אותן המחירים על טיסות לקפריסין. לדוגמה, חברת Wizz Air מציעה טיסות זולות ללארנקה, בעוד Ryanair מציעה טיסות זולות לפאפוס. חשוב להשוות בין החברות השונות כדי למצוא את הדיל הטוב ביותר.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">זמנים טובים להזמין</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">התכנון מראש הוא קריטי במציאת טיסות זולות. בדרך כלל, המחירים הזולים ביותר מתקבלים כאשר מזמינים 60-90 יום לפני הטיסה. חודשים כמו פברואר ונובמבר הם חודשים יחסית זולים לטיסות לקפריסין.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">השוואת שדות התעופה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">קפריסין מציעה שני שדות תעופה בינלאומיים: שדה התעופה בלארנקה ושדה התעופה בפאפוס. יש חברות תעופה שטסות לשני השדות, אך יש גם חברות שטסות רק לאחד מהם. חשוב להשוות את המחירים של שני השדות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">שימוש במצב incognito</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">כאשר אתם מחפשים טיסות באינטרנט, חשוב להשתמש במצב incognito בדפדפן שלכם. הסיבה לכך היא שאתרים רבים עוקבים אחר היסטוריית החיפוש שלכם ומעלים את המחירים בהתאם.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">מציאת טיסות זולות לקפריסין היא תהליך שדורש מחקר ותכנון. אם תעקבו אחר הטיפים שצוינו במאמר, תוכלו למצוא טיסה במחיר זול. תזכרו, התכנון המוקדם, ההשוואה של המחירים והשימוש במצב incognito יכולים לעזור לכם לחסוך כסף רב.</p>

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
