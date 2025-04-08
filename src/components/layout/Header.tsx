import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              Nexia AI
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/auth/login" className="text-gray-700 hover:text-gray-900">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
} 