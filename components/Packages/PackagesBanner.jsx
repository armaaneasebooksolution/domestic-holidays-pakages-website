"use client";

import SearchForm from "../Home/SearchForm";

const PackagesBanner = () => {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      {/* SVG Background Shape */}
      <svg
        className="absolute top-1/2 left-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-40"
        viewBox="0 0 500 500"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#6366F1", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#3B82F6", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
        <path
          d="M437,341Q405,432,308,457.5Q211,483,130.5,417Q50,351,78,250Q106,149,178,83.5Q250,18,328.5,87.5Q407,157,437,249Q467,341,437,341Z"
          fill="url(#grad)"
        />
      </svg>

      {/* Banner Content */}
      <div className="relative container mx-auto px-4 text-center">
        <SearchForm />
      </div>
    </section>
  );
};

export default PackagesBanner;
