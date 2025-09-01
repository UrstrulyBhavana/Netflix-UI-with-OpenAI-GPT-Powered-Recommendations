export default function Shimmer({ count = 10 }) {
  return (
    <div
      className="flex gap-4 sm:gap-6 px-4 pr-8 overflow-x-hidden"
      role="status"
      aria-label="Loading titles"
    >
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="shrink-0 min-w-[120px] sm:min-w-[160px] md:min-w-[200px]">
          <div className="aspect-[2/3] rounded-lg bg-neutral-700/60 relative overflow-hidden">
            <div className="absolute inset-0 -translate-x-full
                            bg-gradient-to-r from-transparent via-white/15 to-transparent
                            motion-safe:animate-[shimmer_1.6s_linear_infinite] will-change-transform">
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
