import { ShieldCheck, Boxes, Globe2 } from "lucide-react";
import Link from "next/link";

export default function HomePage() {
  return (
    <section className="space-y-12">
      <div className="text-center py-14">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Quality healthcare products. Global reach.
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Pharmaceuticals • Surgical products • Medical disposables
        </p>
        <div className="mt-6 flex items-center justify-center gap-3">
          <Link href="/dealership" className="rounded-lg bg-brand text-white px-5 py-2.5">Become a Partner</Link>
          <Link href="/about" className="rounded-lg border px-5 py-2.5 dark:border-gray-700">Learn more</Link>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="card">
          <ShieldCheck className="text-brand" />
          <h3 className="font-semibold mt-3 mb-1">Compliance first</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Aligned with recognized certifications.</p>
        </div>
        <div className="card">
          <Boxes className="text-brand" />
          <h3 className="font-semibold mt-3 mb-1">Broad portfolio</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Formulations, APIs, surgical items, disposables.</p>
        </div>
        <div className="card">
          <Globe2 className="text-brand" />
          <h3 className="font-semibold mt-3 mb-1">Logistics expertise</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">Bulk orders & international shipping.</p>
        </div>
      </div>
    </section>
  );
}
