import Image, { type StaticImageData } from "next/image";
import {
  BadgeCheck,
  Boxes,
  FileCheck2,
  Globe2,
  ShieldCheck,
  Truck,
  Users2,
} from "lucide-react";

// ✅ Local hero image lives alongside this file: src/app/about/hero.jpg
import hero from "./hero.jpg";

export const metadata = {
  title: "About",
  description:
    "Nirantara Trading — merchant exporter bridging India’s pharmaceutical manufacturing strengths with global healthcare markets.",
};

type Leader = {
  name: string;
  role: string;
  img?: StaticImageData; // optional; falls back to initials if not provided
};

const leaders: Leader[] = [
  { name: "Sanjeev Kumar", role: "Director" },
  { name: "Shivam Singh", role: "Director" },
];

export default function AboutPage() {
  return (
    <section className="space-y-12">
      {/* Hero */}
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
            About Our Company
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
            Trusted partner in global healthcare trade
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            We’re a merchant exporter specializing in pharmaceuticals, surgical
            products, and medical disposables—connecting certified Indian
            manufacturers with licensed importers, distributors, hospitals and
            procurement agencies worldwide.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm dark:border-gray-700">
              <Globe2 size={16} /> CIS • Gulf • Asia • Africa
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm dark:border-gray-700">
              Established 2023 — Patna, India
            </span>
          </div>
        </div>

        {/* Hero image (uses blur placeholder automatically because it's imported) */}
        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/15 to-transparent" />
          <Image
            src={hero}
            alt="Nirantara Trading"
            fill
            className="object-cover"
            priority
            placeholder="blur"
            sizes="(min-width:1024px) 50vw, 100vw"
          />
        </div>
      </div>

      {/* What we do */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Feature
          icon={<Boxes className="text-brand" />}
          title="Portfolio"
          desc="Formulations, APIs, surgical products & medical disposables."
        />
        <Feature
          icon={<FileCheck2 className="text-brand" />}
          title="Documentation"
          desc="Regulatory paperwork & compliant labeling handled carefully."
        />
        <Feature
          icon={<Truck className="text-brand" />}
          title="Logistics"
          desc="Bulk order management & international shipping support."
        />
        <Feature
          icon={<ShieldCheck className="text-brand" />}
          title="Certified sourcing"
          desc="EU-GMP, WHO-GMP, ISO 13485 & CE where applicable."
        />
      </div>

      {/* Narrative */}
      <article className="prose dark:prose-invert max-w-none">
        <h2>Who we are</h2>
        <p>
          Our team has deep roots in the healthcare industry. Since our
          establishment in 2023 in Patna, Bihar, India, we’ve focused on
          bridging India’s manufacturing strengths with international healthcare
          demand. We carefully source from audited, certified manufacturers to
          align each shipment with global quality benchmarks and regulatory
          standards.
        </p>

        <h2>Our role as a merchant exporter</h2>
        <p>
          Beyond supply, our export service integrates procurement, documentation,
          labeling and logistics—giving licensed partners a smooth, transparent,
          and dependable trade experience from quote to delivery.
        </p>

        <h2>Quality & Compliance</h2>
        <p>
          We prioritize quality at every step. Our partners hold recognized
          approvals (EU-GMP, WHO-GMP, ISO 13485, CE). This framework protects
          patient safety and supports reliable approvals in regulated markets.
        </p>
      </article>

      {/* Certifications */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {["EU-GMP", "WHO-GMP", "ISO 13485", "CE"].map((c) => (
          <div key={c} className="card flex items-center gap-2">
            <BadgeCheck className="text-brand" />
            <span className="font-medium">{c}</span>
          </div>
        ))}
      </div>

      {/* Leadership */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Leadership</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Guided by a forward-looking vision rooted in integrity, accountability,
          and customer-first service.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          {leaders.map((l) => (
            <LeaderCard key={l.name} {...l} />
          ))}
        </div>
      </section>

      {/* Note */}
      <div className="card flex items-start gap-3">
        <Users2 className="mt-0.5 text-brand" />
        <div>
          <h3 className="font-semibold">Who we work with</h3>
          <p className="text-sm text-gray-700 dark:text-gray-300">
            We partner strictly with licensed buyers, importers and distributors.
            We do not supply products directly to individual consumers.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- Helpers ---------- */

function Feature({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <div className="card">
      {icon}
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{desc}</p>
    </div>
  );
}

function LeaderCard({ name, role, img }: Leader) {
  return (
    <div className="card flex items-center gap-4">
      <div className="relative h-16 w-16 overflow-hidden rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-100 dark:bg-white/10 flex items-center justify-center">
        {img ? (
          <Image
            src={img}
            alt={name}
            fill
            className="object-cover"
            sizes="64px"
            loading="lazy"
          />
        ) : (
          <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">
            {initials(name)}
          </span>
        )}
      </div>
      <div>
        <div className="font-medium">{name}</div>
        <div className="text-sm text-gray-600 dark:text-gray-400">{role}</div>
      </div>
    </div>
  );
}

function initials(fullName: string) {
  return fullName
    .split(/\s+/)
    .map((n) => n[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}
