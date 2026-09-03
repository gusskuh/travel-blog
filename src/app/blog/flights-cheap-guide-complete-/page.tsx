import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, User } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'טיסות זולות לקפריסין: המדריך המלא לחסכון וביטולים - קפריסין טיסות לקפריסין חופשה בקפריסין מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
  description: 'המדריך מפרט את השלבים למציאת טיסות זולות לקפריסין, כולל איך לבטל ולקבל החזרים במידה והדבר נדרש. המידע מבוסס על דוגמאות מ... קפריסין, טיסות לקפריסין, חופשה בקפריסין, מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
  keywords: 'טיסות זולות, חיסכון על טיסות, טיפים לטיסות, אתרי השוואת מחירים, קפריסין, טיסות לקפריסין, חופשה בקפריסין, מדריך מקיף, טיפים מקצועיים, כלים מומלצים, טיסות, חסכון, ביטולים, החזרים',
  openGraph: {
    title: 'טיסות זולות לקפריסין: המדריך המלא לחסכון וביטולים - קפריסין טיסות לקפריסין חופשה בקפריסין מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'המדריך מפרט את השלבים למציאת טיסות זולות לקפריסין, כולל איך לבטל ולקבל החזרים במידה והדבר נדרש. המידע מבוסס על דוגמאות מ... קפריסין, טיסות לקפריסין, חופשה בקפריסין, מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    type: 'article',
    publishedTime: '2026-09-03',
    authors: ['צוות טיסות זולות'],
    tags: ["טיסות","קפריסין","חסכון","ביטולים","החזרים"],
    images: [
      {
        url: 'https://images.unsplash.com/photo-1617871109543-6ee1791d7f17?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        width: 800,
        height: 600,
        alt: 'טיסות זולות לקפריסין: המדריך המלא לחסכון וביטולים - קפריסין טיסות לקפריסין חופשה בקפריסין',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'טיסות זולות לקפריסין: המדריך המלא לחסכון וביטולים - קפריסין טיסות לקפריסין חופשה בקפריסין מדריך מקיף טיפים מקצועיים כלים מומלצים 2025',
    description: 'המדריך מפרט את השלבים למציאת טיסות זולות לקפריסין, כולל איך לבטל ולקבל החזרים במידה והדבר נדרש. המידע מבוסס על דוגמאות מ... קפריסין, טיסות לקפריסין, חופשה בקפריסין, מדריך מקיף, טיפים מקצועיים, כלים מומלצים. מדריך מקצועי עם טיפים וכלים מומלצים.',
    images: ['https://images.unsplash.com/photo-1617871109543-6ee1791d7f17?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
  },
  alternates: {
    canonical: '/blog/flights-cheap-guide-complete-',
  },
};

export default function BlogPostPage() {
  const post = {
    title: 'טיסות זולות לקפריסין: המדריך המלא לחסכון וביטולים',
    excerpt: 'המדריך מפרט את השלבים למציאת טיסות זולות לקפריסין, כולל איך לבטל ולקבל החזרים במידה והדבר נדרש. המידע מבוסס על דוגמאות ממשיות ועצות מקצועיות.',
    publishedAt: '2026-09-03',
    readTime: 12,
    category: 'נסיעות',
    tags: ["טיסות","קפריסין","חסכון","ביטולים","החזרים"],
    image: 'https://images.unsplash.com/photo-1617871109543-6ee1791d7f17?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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
              <p className="text-lg text-gray-600 mb-8 leading-relaxed hebrew-text">טיסה לקפריסין יכולה להיות יקרה, אך עם הכלים והמדע הנכון, ניתן למצוא טיסות לאי המדהים הזה במחירים סבירים. במדריך זה, נדבך את הדרך למציאת טיסות זולות, ובנוסף, נספק דרכים לביטול ולהחזרים במידה והם נדרשים.</p>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">איך למצוא טיסות זולות לקפריסין</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">עשו שימוש באתרי השוואת מחירים כמו Skyscanner, Google Flights ו-Kayak. הם מאפשרים לכם לראות מחירים על פני חודש שלם ולמצוא תאריכים זולים. בנוסף, אם אתם גמישים, האפשרות 'Everywhere' של Skyscanner והאפשרות 'Hacker Fares' של Kayak יכולות לחסוך לכם כסף.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">ביטול טיסה לקפריסין</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם אתם צריכים לבטל את הטיסה שלכם, חשוב לקרוא את התנאים וההגבלות של חברת התעופה. בדרך כלל, יש מספר ימים שבהם ניתן לבטל טיסה ללא עלות, אך זה משתנה מחברה לחברה. בדקו את הפרטים באתר של חברת התעופה או פנו לשירות הלקוחות.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">החזרים על טיסה לקפריסין</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">אם ביטלתם טיסה או שהיא בוטלה, יש לכם זכות לקבל החזר. החזרים משתנים בהתאם לחברת התעופה, אך בדרך כלל יכולים לכלול החזר מלא או פיצוי. פנו לשירות הלקוחות של חברת התעופה לפרטים.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">טיפים נוספים לחיפוש טיסות זולות</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">חפשו טיסות במצב incognito של הדפדפן שלכם, זה מונע מאתרים להעלות מחירים בהתאם להיסטוריית החיפוש שלכם. נסו להיות גמישים עם התאריכים שלכם, טיסות באמצע השבוע יכולות להיות זולות יותר מאשר בסוף השבוע.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">בחירת חברת התעופה הנכונה</h2>
<div className="mb-8">
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">לא כל חברות התעופה שוות. כמה מהן מציעות מחירים זולים יותר אך יש להן חוות דעת פחותות. בדקו את חוות הדעת של חברת התעופה שאתם מתכננים לטוס איתה לפני שאתם מזמינים טיסה.</p>
</div>

<h2 className="text-2xl font-bold text-gray-900 mb-6 mt-12 hebrew-text">סיכום</h2>
<p className="text-lg text-gray-600 leading-relaxed hebrew-text">המחירים של טיסות לקפריסין יכולים להשתנות במהירות, אז כדאי לחפש חפש שוקל ומזמין בהקדם. זכרו, אם אתם צריכים לבטל את הטיסה שלכם, יש לכם זכויות. תמיד קראו את התנאים וההגבלות של חברת התעופה לפני שאתם מזמינים טיסה.</p>

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
