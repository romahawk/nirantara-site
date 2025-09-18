import Image from "next/image";
import Link from "next/link";
import {
  Handshake,
  BadgeCheck,
  FileCheck2,
  Truck,
  Boxes,
  ShieldCheck,
  Building2,
  ClipboardList,
  Mail,
  Phone,
  MessageSquare,
  Globe2,
} from "lucide-react";
import EnquiryFormClient from "./EnquiryFormClient";   // ✅ client component

// Reuse the About hero (exists at: src/app/about/hero.jpg)
import hero from "../about/hero.jpg";

export const metadata = {
  title: "Dealership / Partnership",
  description:
    "Partner with a compliance-first merchant exporter of pharmaceuticals, surgical products and medical disposables.",
};

// Contact constants (update to real values)
const COMPANY_EMAIL = "info@yourdomain.com";
const COMPANY_PHONE = "+1 555 0100";
const WHATSAPP_LINK = "https://wa.me/15550100";

export default function DealershipPage() {
  return (
    <section className="space-y-12">
      {/* Hero */}
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Partnerships
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
            Dealership / Partnership Enquiry
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            We build long-term partnerships with licensed importers, distributors,
            hospitals and procurement agencies worldwide—grounded in integrity,
            quality and reliability.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Chip icon={<Handshake size={16} />}>Licensed organizations only</Chip>
            <Chip icon={<Globe2 size={16} />}>CIS • Gulf • Asia • Africa</Chip>
          </div>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/15 to-transparent" />
          <Image
            src={hero}
            alt="Nirantara Trading — partnership"
            fill
            className="object-cover"
            placeholder="blur"
            priority
            sizes="(min-width:1024px) 50vw, 100vw"
          />
        </div>
      </div>

      {/* Benefits */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Why partner with us</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card
            icon={<Boxes className="text-brand" />}
            title="Wide portfolio"
            desc="Formulations, APIs, surgical & disposable medical products."
          />
          <Card
            icon={<BadgeCheck className="text-brand" />}
            title="Certified sourcing"
            desc="EU-GMP, WHO-GMP, ISO 13485 & CE aligned manufacturers."
          />
          <Card
            icon={<FileCheck2 className="text-brand" />}
            title="End-to-end support"
            desc="Regulatory documentation, custom labeling & paperwork."
          />
          <Card
            icon={<Truck className="text-brand" />}
            title="Export logistics"
            desc="Bulk supply and reliable international shipping."
          />
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          A professional team committed to timely deliveries and transparent business practices.
        </p>
      </section>

      {/* Partnership requirements */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <ClipboardList className="text-brand" />
          <h2 className="text-2xl font-semibold">Partnership requirements</h2>
        </div>
        <ul className="grid gap-3 md:grid-cols-2">
          <LI icon={<Building2 className="text-brand" />}>Licensed pharmaceutical importers & distributors</LI>
          <LI icon={<ShieldCheck className="text-brand" />}>Government or institutional procurement agencies</LI>
          <LI icon={<BadgeCheck className="text-brand" />}>Hospitals, healthcare providers & pharmacy chains with valid authorization</LI>
        </ul>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          We do not supply products directly to individual consumers.
        </p>
      </section>

      {/* Enquiry form (Client Component) */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <Handshake className="text-brand" />
          <h2 className="text-2xl font-semibold">Dealership / Partnership Enquiry Form</h2>
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          Share a few details and we’ll get back to you shortly.
        </p>

        {/* ✅ Only pass serializable props (strings). No event handlers from the server. */}
        <EnquiryFormClient mailTo={COMPANY_EMAIL} />

        <div className="grid gap-3 sm:grid-cols-3 text-sm">
          <a className="link inline-flex items-center gap-2" href={`mailto:${COMPANY_EMAIL}`}><Mail size={16}/> {COMPANY_EMAIL}</a>
          <a className="link inline-flex items-center gap-2" href={`tel:${COMPANY_PHONE}`}><Phone size={16}/> {COMPANY_PHONE}</a>
          <a className="link inline-flex items-center gap-2" href={WHATSAPP_LINK} target="_blank"><MessageSquare size={16}/> WhatsApp</a>
        </div>
      </section>

      {/* CTA */}
      <div className="card flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="space-y-1">
          <h3 className="font-semibold">Ready to collaborate?</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Let’s align on your market’s regulatory and labeling requirements.
          </p>
        </div>
        <Link href="/quality-assurance" className="rounded-lg bg-brand text-white px-5 py-2.5">
          See our quality approach
        </Link>
      </div>
    </section>
  );
}

/* ---------- Small helpers ---------- */
function LI({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <li className="card flex items-start gap-3">
      {icon ?? <BadgeCheck className="mt-0.5 text-brand" />}
      <div className="font-medium">{children}</div>
    </li>
  );
}

function Card({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="card">
      {icon}
      <h3 className="mt-3 font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{desc}</p>
    </div>
  );
}

function Chip({ children, icon }: { children: React.ReactNode; icon?: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm dark:border-gray-700">
      {icon}
      {children}
    </span>
  );
}
