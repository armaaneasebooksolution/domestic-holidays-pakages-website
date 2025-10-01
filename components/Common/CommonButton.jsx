import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PrimaryLightButton({ href = "#", text = "View More" }) {
  return (
    <Link
      href={href}
      className="group text-primary relative inline-flex items-center justify-center overflow-hidden rounded-lg border border-[#e8e8e8] px-6 py-3 font-semibold transition-all duration-300 ease-in-out"
    >
      {/* First Span (Default Text) */}
      <span className="flex items-center gap-2 transition-all duration-300 ease-in-out group-hover:-translate-y-full group-hover:text-white group-hover:opacity-0">
        {text}
        <ArrowUpRight className="h-4 w-4 transition-colors duration-300" />
      </span>

      {/* Second Span (On Hover Text) */}
      <span className="absolute flex translate-y-full items-center gap-2 opacity-0 transition-all duration-300 ease-in-out group-hover:translate-y-0 group-hover:text-white group-hover:opacity-100">
        {text}
        <ArrowUpRight className="h-4 w-4 transition-colors duration-300" />
      </span>

      {/* Background Overlay on Hover */}
      <span className="bg-primary-gradient absolute inset-0 -z-10 translate-y-full rounded-lg transition-transform duration-500 ease-in-out group-hover:translate-y-0"></span>
    </Link>
  );
}
