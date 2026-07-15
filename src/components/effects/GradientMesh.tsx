/**
 * Fixed, full-viewport animated backdrop: dot grid, drifting gradient
 * blobs, and a soft aurora sweep. Pure CSS animations — zero JS per frame.
 */
export function GradientMesh() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base grid, faded at the edges */}
      <div
        className="bg-grid absolute inset-0"
        style={{
          maskImage: 'radial-gradient(ellipse 80% 60% at 50% 35%, black 30%, transparent 75%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 80% 60% at 50% 35%, black 30%, transparent 75%)',
        }}
      />

      {/* Floating blobs */}
      <div className="animate-blob absolute -top-40 left-[8%] h-[34rem] w-[34rem] rounded-full bg-accent/[0.12] blur-[120px]" />
      <div
        className="animate-blob absolute top-[35%] -right-40 h-[30rem] w-[30rem] rounded-full bg-brand-violet/[0.10] blur-[130px]"
        style={{ animationDelay: '-7s' }}
      />
      <div
        className="animate-blob absolute bottom-[-10%] left-[30%] h-[28rem] w-[28rem] rounded-full bg-brand-cyan/[0.08] blur-[130px]"
        style={{ animationDelay: '-13s' }}
      />

      {/* Aurora sweep behind the hero */}
      <div className="animate-aurora absolute -top-[30%] left-1/2 h-[60rem] w-[90rem] -translate-x-1/2 bg-[conic-gradient(from_180deg_at_50%_50%,transparent_0deg,rgb(59_130_246/0.08)_90deg,rgb(124_58_237/0.06)_180deg,rgb(6_182_212/0.07)_270deg,transparent_360deg)] blur-3xl" />

      {/* Vignette to keep edges premium-dark */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgb(8_9_15/0.9)_100%)]" />
    </div>
  );
}
