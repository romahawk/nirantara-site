import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Boxes, Globe2 } from "lucide-react";

// Reuse the About hero image
import hero from "./about/hero.jpg";

export default function HomePage() {
  return (
    <div className="space-y-12">
      {/* ========== FULL-BLEED HERO (background spans the viewport) ========== */}
      <section className="relative left-1/2 right-1/2 -mx-[50vw] w-screen isolate">
        <div className="relative h-[52vh] min-h-[360px] max-h-[720px] overflow-hidden">
          {/* Background image (expanded 1px to avoid hairlines) */}
          <div className="absolute -inset-px">
            <Image
              src={hero}
              alt="Nirantara Trading — healthcare exports"
              fill
              priority
              placeholder="blur"
              sizes="100vw"
              className="object-cover"
            />
          </div>

          {/* Darken + tint overlays (also expanded 1px) */}
          <div className="absolute -inset-px bg-black/60 md:bg-black/55" />
          <div className="absolute -inset-px bg-[radial-gradient(60%_60%_at_50%_40%,rgba(20,85,254,0.20),transparent)]" />

          {/* Centered hero content */}
          <div className="container relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight drop-shadow-sm">
              Quality healthcare products. Global reach.
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-7 text-white/90">
              Pharmaceuticals • Surgical products • Medical disposables
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Link href="/dealership" className="btn-primary">Become a Partner</Link>
              <Link href="/about" className="rounded-lg border border-white/30 px-5 py-2.5 text-white/90 hover:bg-white/10">Learn more</Link>
            </div>
          </div>
        </div>
      </section>


      {/* ========== Feature cards on a frosted “glass” panel ========== */}
      <section className="container -mt-10">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card glass">
            <ShieldCheck className="text-brand" />
            <h3 className="mt-3 mb-1 font-semibold">Compliance first</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Aligned with recognized certifications.
            </p>
          </div>

          <div className="card glass">
            <Boxes className="text-brand" />
            <h3 className="mt-3 mb-1 font-semibold">Broad portfolio</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Formulations, APIs, surgical items, disposables.
            </p>
          </div>

          <div className="card glass">
            <Globe2 className="text-brand" />
            <h3 className="mt-3 mb-1 font-semibold">Logistics expertise</h3>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Bulk orders & international shipping.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
