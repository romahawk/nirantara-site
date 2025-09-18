import Image from "next/image";
import {
  Globe2,
  ShieldCheck,
  FileCheck2,
  Handshake,
  HeartHandshake,
  Lightbulb,
  Target,
  Boxes,
} from "lucide-react";

// ✅ Place hero.jpg next to this file: src/app/mission-vision/hero.jpg
//    (If you want to reuse the About hero instead, change to: import hero from "../about/hero.jpg")
import hero from "../about/mission.jpg";

export const metadata = {
  title: "Mission & Vision",
  description:
    "Our purpose, guiding principles, and the future we’re building as a trusted healthcare exporter.",
};

export default function MissionVisionPage() {
  return (
    <section className="space-y-12">
      {/* Hero */}
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Who We Are
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
            Mission & Vision
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            We exist to connect world-class Indian manufacturing with global
            healthcare needs—safely, compliantly, and reliably—so that essential
            medicines, surgical products, and medical disposables reach the
            people who need them most.
          </p>
        </div>

        {/* Hero image (uses the imported file + blur placeholder) */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/20 to-transparent" />
          <Image
            src={hero}
            alt="Healthcare logistics and quality-focused export operations"
            fill
            className="object-cover"
            priority
            placeholder="blur"
            sizes="(min-width:1024px) 50vw, 100vw"
          />
        </div>
      </div>

      {/* Mission */}
      <section className="grid gap-8 lg:grid-cols-2">
        <div className="card">
          <div className="flex items-center gap-2">
            <Target className="text-brand" />
            <h2 className="text-xl font-semibold">Our Mission</h2>
          </div>
          <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
            Be a trusted global partner in healthcare exports by delivering safe,
            reliable, and certified pharmaceutical and medical products—bridging
            India’s manufacturing strength with international healthcare needs.
          </p>

          <ul className="mt-5 grid gap-3">
            <LI
              icon={<ShieldCheck className="text-brand" />}
              title="Ensure Quality & Compliance"
              text="Source from manufacturers aligned with EU-GMP, WHO-GMP, ISO 13485, and CE (where applicable)."
            />
            <LI
              icon={<Globe2 className="text-brand" />}
              title="Improve Accessibility"
              text="Make essential medicines and supplies available in underserved markets."
            />
            <LI
              icon={<FileCheck2 className="text-brand" />}
              title="Support Our Partners"
              text="Transparent export services, precise regulatory documentation, and seamless logistics."
            />
            <LI
              icon={<HeartHandshake className="text-brand" />}
              title="Promote Ethical Trade"
              text="Operate with integrity and responsibility so patient safety stays first."
            />
          </ul>
        </div>

        {/* Vision */}
        <div className="card">
          <div className="flex items-center gap-2">
            <Globe2 className="text-brand" />
            <h2 className="text-xl font-semibold">Our Vision</h2>
          </div>
          <p className="mt-3 text-sm text-gray-700 dark:text-gray-300">
            Be recognized as a leading Indian exporter—setting new standards in
            quality, compliance, and customer trust across international markets.
          </p>

          <ul className="mt-5 grid gap-3">
            <LI
              icon={<Boxes className="text-brand" />}
              title="Expand Global Reach"
              text="Ensure availability of trusted healthcare solutions across regions."
            />
            <LI
              icon={<ShieldCheck className="text-brand" />}
              title="Showcase India’s Strength"
              text="Elevate India’s reputation as a dependable hub for pharmaceutical exports."
            />
            <LI
              icon={<Globe2 className="text-brand" />}
              title="Make Healthcare Borderless"
              text="Help essential products flow across geographies without delay."
            />
            <LI
              icon={<Lightbulb className="text-brand" />}
              title="Innovate Responsively"
              text="Adapt to evolving needs, regulations, and medical technologies."
            />
            <LI
              icon={<Handshake className="text-brand" />}
              title="Build Impactful Partnerships"
              text="Deliver transparent, long-term value to importers, distributors, and agencies."
            />
          </ul>
        </div>
      </section>

      {/* Principles / Values */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Our Values</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ValueCard title="Integrity" desc="We do the right thing—especially when it’s hard." />
          <ValueCard title="Customer Focus" desc="Clear communication, dependable timelines, and consistent delivery." />
          <ValueCard title="Excellence" desc="Relentless attention to quality, documentation, and compliance." />
        </div>
      </section>
    </section>
  );
}

/* ——— Helpers ——— */

function LI({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <li className="flex gap-3">
      <span className="mt-1">{icon}</span>
      <div>
        <div className="font-medium">{title}</div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{text}</p>
      </div>
    </li>
  );
}

function ValueCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="card">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{desc}</p>
    </div>
  );
}
