import Image from "next/image";
import {
  BadgeCheck,
  FileCheck2,
  ClipboardList,
  Truck,
  ShieldCheck,
  Building2,
  Users2,
  Globe2,
} from "lucide-react";

// Reuse the About hero (exists at: src/app/about/hero.jpg)
import hero from "../about/quality.jpg";

export const metadata = {
  title: "Quality Assurance",
  description:
    "Zero-compromise approach to certified sourcing, documentation, and safety across the export lifecycle.",
};

export default function QualityAssurancePage() {
  return (
    <section className="space-y-12">
      {/* Hero */}
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Quality Assurance
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
            Quality at the heart of every shipment
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            As a merchant exporter of pharmaceuticals, surgical products and
            disposable medical supplies, we follow a{" "}
            <span className="font-semibold">zero-compromise</span> approach so
            every consignment meets the highest international quality and safety
            standards. {/* PDF source */} 
          </p>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/15 to-transparent" />
          <Image
            src={hero}
            alt="Quality-focused export operations"
            fill
            className="object-cover"
            placeholder="blur"
            priority
            sizes="(min-width:1024px) 50vw, 100vw"
          />
        </div>
      </div>

      {/* Certified Manufacturing Partners */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Building2 className="text-brand" />
          <h2 className="text-2xl font-semibold">Certified Manufacturing Partners</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          We source exclusively from audited, internationally accredited manufacturers aligned with
          globally recognized certifications. {/* PDF source */} 
        </p>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {["EU-GMP", "WHO-GMP", "ISO 13485", "CE Marking"].map((c) => (
            <div key={c} className="card flex items-center gap-2">
              <BadgeCheck className="text-brand" />
              <span className="font-medium">{c}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Product Compliance & Documentation */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <FileCheck2 className="text-brand" />
          <h2 className="text-2xl font-semibold">Product Compliance & Documentation</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          Each batch ships with complete paperwork for traceability and market compliance. {/* PDF source */} 
        </p>
        <ul className="grid gap-3 md:grid-cols-2">
          <LI title="Certificate of Analysis (COA)" />
          <LI title="Batch Manufacturing Record" />
          <LI title="Regulatory Documentation (per importing country)" />
          <LI title="Custom Labelling Support for international markets" />
        </ul>
      </section>

      {/* Our Commitment to Safety */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <ShieldCheck className="text-brand" />
          <h2 className="text-2xl font-semibold">Our Commitment to Safety</h2>
        </div>
        <ul className="grid gap-3 md:grid-cols-2">
          <LI title="Rigorous supplier audits before onboarding" icon={<ClipboardList className="text-brand" />} />
          <LI title="Random quality checks on consignments" icon={<BadgeCheck className="text-brand" />} />
          <LI title="Continuous monitoring of handling, storage & logistics" icon={<Truck className="text-brand" />} />
          <LI title="Partnership only with manufacturers meeting pharmacovigilance norms" icon={<ShieldCheck className="text-brand" />} />
        </ul>
      </section>

      {/* Trusted by Global Buyers */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Globe2 className="text-brand" />
          <h2 className="text-2xl font-semibold">Trusted by Global Buyers</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          Hospitals, pharmacies, government procurement agencies and international distributors rely
          on us for consistent quality and reliable delivery worldwide. {/* PDF source */} 
        </p>
        <div className="card flex flex-wrap gap-3 text-sm">
          <Chip>Hospitals</Chip>
          <Chip>Pharmacies</Chip>
          <Chip>Government Agencies</Chip>
          <Chip>International Distributors</Chip>
        </div>
      </section>

      {/* CTA */}
      <div className="card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="font-semibold">Work with a compliance-first exporter</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Talk to us about your market’s regulatory and labelling requirements.
          </p>
        </div>
        <a href="/dealership" className="rounded-lg bg-brand text-white px-5 py-2.5">
          Become a Partner
        </a>
      </div>
    </section>
  );
}

/* ---------- Helpers ---------- */

function LI({ title, icon }: { title: string; icon?: React.ReactNode }) {
  return (
    <li className="card flex items-start gap-3">
      {icon ?? <FileCheck2 className="mt-0.5 text-brand" />}
      <div className="font-medium">{title}</div>
    </li>
  );
}

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 dark:border-gray-700">
      <Users2 size={14} className="text-brand" />
      {children}
    </span>
  );
}
