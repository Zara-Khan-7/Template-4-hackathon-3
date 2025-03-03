// src/pages/404.tsx
import Link from "next/link";
const Custom404 = () => (
  <div className="container mx-auto py-16 px-4 bg-black text-white text-center">
    <h1 className="text-5xl font-bold mb-8">404 - Page Not Found</h1>

    <p>The page you&apos;re looking for doesn&apos;&apos; &apos;&apos;&apos; exist or has been moved. &apos;</p>

   <p>The page you&apos;re looking for doesn&apos;&apos; &apos;&apos;&apos; exist or has been moved. &apos;</p>

    <Link href="/" className="bg-blue-500 py-2 px-6 mt-8 rounded-md hover:bg-blue-700">
      Go Home
    </Link>
  </div>
);

export default Custom404;