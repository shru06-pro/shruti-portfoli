// Placeholder for future three.js / react-three-fiber 3D avatar rendering.
// When /public/me.glb is available, this module renders the GLB with studio lighting.
// Currently exports a minimal fallback since three.js is not installed.
export default function Hero3DCanvas() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="rounded-3xl bg-accent-tint/40 p-8 text-center">
        <p className="font-mono text-xs text-muted">3D avatar placeholder</p>
      </div>
    </div>
  );
}
