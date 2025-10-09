"use client";
export default function Pagination({ totalPages, currentPage, onPageChange }) {
  const handlePrev = () => currentPage > 1 && onPageChange(currentPage - 1);
  const handleNext = () =>
    currentPage < totalPages && onPageChange(currentPage + 1);

  return (
    <div className="mx-auto my-8 flex max-w-xl items-center justify-between px-4">
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`rounded-full border px-4 py-2 text-sm font-medium ${
          currentPage === 1
            ? "cursor-not-allowed border-gray-200 text-gray-400"
            : "hover:bg-primary-gradient border-gray-300 text-gray-700 hover:text-white"
        }`}
      >
        &lt; Prev
      </button>

      <div className="flex gap-2">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`h-8 w-8 rounded-full text-sm font-semibold transition ${
              currentPage === page
                ? "bg-primary-gradient text-white"
                : "hover:bg-primary-gradient border border-gray-300 text-gray-700 hover:text-white"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`rounded-full border px-4 py-2 text-sm font-medium ${
          currentPage === totalPages
            ? "cursor-not-allowed border-gray-200 text-gray-400"
            : "hover:bg-primary-gradient border-gray-300 text-gray-700 hover:text-white"
        }`}
      >
        Next &gt;
      </button>
    </div>
  );
}
