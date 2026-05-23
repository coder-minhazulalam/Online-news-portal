import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-800 to-slate-950 px-4">
      <div className="text-center max-w-lg">
        {/* 404 Number */}
        <h1 className="text-8xl md:text-9xl font-extrabold text-white drop-shadow-lg">
          404
        </h1>

        {/* Title */}
        <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-100">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-400 text-lg">
          The page you are looking for does not exist or has been moved.
        </p>

        {/* Button */}
        <Link href="/">
          <button className="mt-8 px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 transition-all duration-300 text-white font-semibold shadow-lg hover:scale-105">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
}