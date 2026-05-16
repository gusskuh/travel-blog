import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 space-x-reverse mb-4">
              <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">ט</span>
              </div>
              <h3 className="text-xl font-bold hebrew-text">טיסות זולות</h3>
            </div>
            <p className="text-gray-300 hebrew-text">
              המדריך המקיף למציאת טיסות זולות לחופשות חלומות. 
              טיפים מקצועיים, כלים מומלצים וחיסכון של מאות שקלים.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 hebrew-text">קישורים מהירים</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors hebrew-text">
                  כל המאמרים
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors hebrew-text">
                  אודות
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors hebrew-text">
                  צור קשר
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors hebrew-text">
                  מדיניות פרטיות
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-300 hover:text-white transition-colors hebrew-text">
                  תנאי שימוש
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 hebrew-text">קטגוריות פופולריות</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog/-flights-cheap-europe-guide-complete" className="text-gray-300 hover:text-white transition-colors hebrew-text">
                  טיסות זולות לאירופה
                </Link>
              </li>
              <li>
                <Link href="/blog/-flights-cheap-asia-guide-complete" className="text-gray-300 hover:text-white transition-colors hebrew-text">
                  טיסות זולות לאסיה
                </Link>
              </li>
              <li>
                <Link href="/blog/-flights-cheap-tips-savings" className="text-gray-300 hover:text-white transition-colors hebrew-text">
                  טיפים לחיסכון
                </Link>
              </li>
              <li>
                <Link href="/blog/-flights-cheap-tips-recommended" className="text-gray-300 hover:text-white transition-colors hebrew-text">
                  מדריכי יעדים
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 hebrew-text">
            © 2024 טיסות זולות. כל הזכויות שמורות.
          </p>
        </div>
      </div>
    </footer>
  );
}
