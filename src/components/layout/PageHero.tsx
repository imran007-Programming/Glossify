import { Link } from "react-router-dom";
import { BsChevronRight, BsPercent, BsGift } from "react-icons/bs";

interface Crumb {
  label: string;
  to?: string;
}

interface PageHeroProps {
  crumbs: Crumb[];
  title: string;
  subtitle?: string;
}

export default function PageHero({ crumbs, title, subtitle }: PageHeroProps) {
  return (
    <div
      className="relative overflow-hidden py-12 md:py-16"
      style={{
        background:
          "linear-gradient(135deg, #06b6d4 0%, #3b82f6 40%, #6d28d9 100%)",
      }}
    >
      {/* Glow blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-16 -left-16 w-64 h-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-16 -right-16 w-72 h-72 rounded-full bg-violet-400/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-32 rounded-full bg-blue-300/10 blur-2xl" />
      </div>

      {/* Left badge */}
      <div className="absolute left-6 md:left-12 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-1 opacity-80">
        <div className="w-14 h-14 rounded-full bg-white/15 border border-white/25 backdrop-blur-sm flex items-center justify-center shadow-lg">
          <BsPercent size={24} className="text-white" />
        </div>
        <span className="font-inter text-[10px] text-white/70 font-semibold tracking-wide">
          DEALS
        </span>
      </div>

      {/* Right badge */}
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 hidden sm:flex flex-col items-center gap-1 opacity-80">
        <div className="w-14 h-14 rounded-full bg-amber-400/90 border border-amber-300/50 flex items-center justify-center shadow-lg">
          <BsGift size={22} className="text-white" />
        </div>
        <span className="font-inter text-[10px] text-white/70 font-semibold tracking-wide">
          GIFTS
        </span>
      </div>

      {/* Content */}
      <div className="section-wrap relative text-center">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-1.5 mb-4">
          {crumbs.map((crumb, i) => (
            <span key={i} className="flex items-center gap-1.5">
              {i > 0 && <BsChevronRight size={10} className="text-white/50" />}
              {crumb.to ? (
                <Link
                  to={crumb.to}
                  className="font-inter text-xs text-white/70 hover:text-white transition-colors"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span className="font-inter text-xs font-semibold text-white">
                  {crumb.label}
                </span>
              )}
            </span>
          ))}
        </nav>

        {/* Title */}
        <h1 className="font-abigeta text-3xl md:text-5xl text-white leading-tight drop-shadow-sm">
          {title}
        </h1>

        {subtitle && (
          <p className="font-inter text-white/70 text-sm mt-2">{subtitle}</p>
        )}
      </div>
    </div>
  );
}
