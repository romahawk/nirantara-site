import Image from "next/image";
import Link from "next/link";
import {
  Globe2,
  BadgeCheck,
  SlidersHorizontal,
  Scale,
  MapPin,
  Users2,
  Headphones,
} from "lucide-react";

// Reuse the About hero (exists at: src/app/about/hero.jpg)
import hero from "../about/why.jpg";

export const metadata = {
  title: "Why Choose Us",
  description:
    "Seven reasons global buyers choose Nirantara Trading as their healthcare export partner.",
};

type Item = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

const items: Item[] = [
  {
    icon: <Globe2 className="text-brand" />,
    title: "Global Export Expertise",
    desc:
      "Deep experience with international pharma trade, regulations, logistics and documentation for CIS, Gulf, Asia and Africa.",
  },
  {
    icon: <BadgeCheck className="text-brand" />,
    title: "Certified Product Portfolio",
    desc:
      "Formulations, APIs, surgical products and disposables sourced from EU-GMP, WHO-GMP, ISO 13485 and CE-aligned manufacturers.",
  },
  {
    icon: <SlidersHorizontal className="text-brand" />,
    title: "Customized Export Solutions",
    desc:
      "Bulk supply, regulatory paperwork, custom labelling and international shipping tailored to each partner’s requirements.",
  },
  {
    icon: <Scale className="text-brand" />,
    title: "Integrity & Transparency",
    desc:
      "Honest pricing, clear documentation and accountable processes for long-term, trust-based relationships.",
  },
  {
    icon: <MapPin className="text-brand" />,
    title: "Strategic Location Advantage",
    desc:
      "Headquartered in Patna, Bihar—benefiting from India’s robust pharma ecosystem and efficient logistics networks.",
  },
  {
    icon: <Users2 className="text-brand" />,
    title: "Leadership You Can Trust",
    desc:
      "Led by Sanjeev Kumar and Shivam Singh with a commitment to ethical trade and dependable execution.",
  },
  {
    icon: <Headphones className="text-brand" />,
    title: "Customer-First Commitment",
    desc:
      "Responsive communication, tailored solutions and reliable deliveries—more than products, a growth partnership.",
  },
];

export default function WhyChooseUsPage() {
  return (
    <section className="space-y-12">
      {/* Hero */}
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] items-center">
        <div>
          <p className="text-sm uppercase tracking-wider text-gray-500 dark:text-gray-400">
            Why Choose Us
          </p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight">
            The partner global buyers rely on
          </h1>
          <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
            Selecting the right exporter is critical. We combine proven global expertise with certified
            sourcing and a transparent, customer-first approach.
          </p>
          <div className="mt-6 flex gap-3">
            <Link href="/dealership" className="btn-primary">Become a partner</Link>
            <Link href="/quality-assurance" className="btn-outline">Our quality approach</Link>
          </div>
        </div>

        <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
          <div className="absolute inset-0 bg-gradient-to-br from-brand/15 to-transparent" />
          <Image
            src={hero}
            alt="Nirantara Trading — global healthcare exports"
            fill
            className="object-cover"
            placeholder="blur"
            priority
            sizes="(min-width:1024px) 50vw, 100vw"
          />
        </div>
      </div>

      {/* Seven reasons */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon, title, desc }) => (
          <div key={title} className="card">
            {icon}
            <h3 className="mt-3 font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{desc}</p>
          </div>
        ))}
      </div>

      {/* Summary strip */}
      <div className="card flex flex-wrap gap-3 text-sm">
        <span className="inline-flex items-center gap-2"><BadgeCheck size={16}/> Certified products</span>
        <span className="inline-flex items-center gap-2"><Globe2 size={16}/> Reliable exports</span>
        <span className="inline-flex items-center gap-2"><Scale size={16}/> Transparent practices</span>
        <span className="inline-flex items-center gap-2"><SlidersHorizontal size={16}/> Tailored solutions</span>
        <span className="inline-flex items-center gap-2"><Users2 size={16}/> Long-term partnerships</span>
      </div>
    </section>
  );
}
