import {
  FileText,
  ShieldCheck,
  ClipboardList,
  Scale,
  Truck,
  BadgeCheck,
  Building2,
  Landmark,
} from "lucide-react";

export const metadata = {
  title: "Terms & Conditions",
  description:
    "The terms governing business with Nirantara Trading Private Limited, including compliance, orders, payments, shipping, and liability.",
};

export default function TermsPage() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <header className="space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm dark:border-gray-700">
          <FileText className="text-brand" size={16} />
          Legal Terms
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Terms &amp; Conditions</h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl">
          These Terms &amp; Conditions outline the rules and responsibilities for engaging in business
          with Nirantara Trading Private Limited. By entering into any agreement, contract, or
          transaction with us, you agree to the terms below.
        </p>
      </header>

      {/* Body */}
      <article className="prose dark:prose-invert max-w-none">
        <h2 className="flex items-center gap-2">
          <Building2 className="text-brand" /> 1. Business Nature
        </h2>
        <ul>
          <li>Nirantara Trading Private Limited is a merchant exporter of pharmaceuticals, surgical products, and disposable healthcare supplies.</li>
          <li>We deal strictly with licensed buyers, importers, distributors, hospitals, and procurement agencies.</li>
          <li>We do not supply products directly to individual consumers.</li>
        </ul>

        <h2 className="flex items-center gap-2">
          <ShieldCheck className="text-brand" /> 2. Regulatory Compliance
        </h2>
        <ul>
          <li>Products are sourced from audited and internationally certified manufacturers (EU-GMP, WHO-GMP, ISO 13485, CE).</li>
          <li>Buyers must provide valid import licenses, registrations, or permits as required by their local laws.</li>
          <li>Nirantara Trading may decline or cancel any order that does not meet regulatory requirements.</li>
        </ul>

        <h2 className="flex items-center gap-2">
          <ClipboardList className="text-brand" /> 3. Orders &amp; Pricing
        </h2>
        <ul>
          <li>All orders must be placed in writing through official communication channels.</li>
          <li>Prices are quoted as per agreed Incoterms (FOB, CIF, CFR, etc.) and may vary by quantity, packaging, and destination.</li>
          <li>Once confirmed, orders cannot be cancelled or altered without our written approval.</li>
        </ul>

        <h2 className="flex items-center gap-2">
          <Scale className="text-brand" /> 4. Payment Terms
        </h2>
        <ul>
          <li>Payments are accepted as agreed: Letter of Credit (L/C), Bank Transfer (TT), or other approved methods.</li>
          <li>Bank charges, transaction fees, and currency conversion costs are borne by the buyer.</li>
          <li>Goods are dispatched after receipt of payment or as per mutually agreed credit terms.</li>
        </ul>

        <h2 className="flex items-center gap-2">
          <Truck className="text-brand" /> 5. Shipping &amp; Delivery
        </h2>
        <ul>
          <li>Delivery timelines depend on product availability, regulatory clearance, and logistics arrangements.</li>
          <li>Risk and ownership transfer to the buyer according to the agreed Incoterms.</li>
          <li>Nirantara Trading is not responsible for delays caused by customs, strikes, natural disasters, or events beyond our control.</li>
        </ul>

        <h2 className="flex items-center gap-2">
          <BadgeCheck className="text-brand" /> 6. Product Quality &amp; Liability
        </h2>
        <ul>
          <li>All products are supplied to meet international quality and safety standards.</li>
          <li>COA (Certificate of Analysis), batch details, and regulatory documentation are provided upon request.</li>
          <li>Nirantara Trading is not liable for misuse of products, non-compliance with local regulations, or resale beyond authorized distribution.</li>
        </ul>

        <h2 className="flex items-center gap-2">
          <ClipboardList className="text-brand" /> 7. Confidentiality
        </h2>
        <p>
          Any documents, pricing, or trade information shared with buyers must be treated as confidential and may not be disclosed to third parties without our written consent.
        </p>

        <h2 className="flex items-center gap-2">
          <Landmark className="text-brand" /> 8. Governing Law &amp; Jurisdiction
        </h2>
        <ul>
          <li>All contracts and transactions are governed by the laws of India.</li>
          <li>In case of disputes, jurisdiction lies with the courts of Patna, Bihar, India.</li>
        </ul>

        <h2 className="flex items-center gap-2">
          <FileText className="text-brand" /> 9. Amendments
        </h2>
        <p>
          We reserve the right to modify or update these Terms &amp; Conditions at any time. The latest version will be published on this page; buyers are encouraged to review it periodically.
        </p>
      </article>

      <p className="text-xs text-gray-500 dark:text-gray-400">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </section>
  );
}
