import {
  ShieldCheck,
  FileText,
  Cookie,
  Share2,
  UserCheck,
  RefreshCcw,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export const metadata = {
  title: "Privacy Policy",
  description:
    "How Nirantara Trading collects, uses, and protects personal information from website visitors, clients, and partners.",
};

const COMPANY = {
  name: "Nirantara Trading Private Limited",
  location: "Patna, Bihar, India",
  email: "nirantaratrading@gmail.com",
  phone: "+91 99317 23762",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="space-y-10">
      {/* Header */}
      <header className="space-y-3">
        <div className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm dark:border-gray-700">
          <ShieldCheck className="text-brand" size={16} />
          Privacy & Data Protection
        </div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl">
          We value your privacy and are committed to protecting the personal information
          you share with us. This page explains what we collect, how we use it, and your
          rights regarding your data.
        </p>
      </header>

      {/* Body */}
      <article className="prose dark:prose-invert max-w-none">
        <h2>1. Information We Collect</h2>
        <p>
          When you visit our website or submit an enquiry, we may collect:
        </p>
        <ul>
          <li>Name, Company Name, City</li>
          <li>Contact details: Email, Phone, WhatsApp</li>
          <li>Business details: Country of Operation, Import License / Registration Number</li>
          <li>Product interests, order requirements, or other information you choose to share</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>The information is used only for legitimate business purposes, including:</p>
        <ul>
          <li>Responding to enquiries and partnership requests</li>
          <li>Processing export-related documentation and regulatory compliance</li>
          <li>Improving our website, products, and services</li>
          <li>Sending important updates related to our business (only with your consent)</li>
        </ul>
        <p><strong>We do not sell, rent, or share</strong> your personal data with unauthorized third parties.</p>

        <h2>3. Data Security</h2>
        <p>
          We apply appropriate technical and organizational measures to protect your
          information against unauthorized access, alteration, disclosure, or destruction.
          While we strive to use industry-standard practices, no electronic transmission
          or storage method is 100% secure.
        </p>

        <h2>4. Data Sharing &amp; Disclosure</h2>
        <ul>
          <li>
            Your information may be shared with trusted partners (e.g., logistics providers,
            regulatory bodies) strictly to fulfill export requirements.
          </li>
          <li>
            We may disclose information if required by law, legal proceedings, or government authorities.
          </li>
        </ul>

        <h2>5. Cookies &amp; Website Usage</h2>
        <p>
          Our website may use cookies to improve user experience and analyze traffic. Cookies
          do not collect personal information unless you voluntarily provide it. You can
          disable cookies in your browser settings at any time.
        </p>

        <h2>6. Third-Party Links</h2>
        <p>
          Our site may contain links to external websites. We are not responsible for the
          privacy practices or content of third-party sites; please review their policies separately.
        </p>

        <h2>7. Your Rights</h2>
        <p>Subject to applicable law, you may:</p>
        <ul>
          <li>Request access to the information we hold about you</li>
          <li>Request correction or updates to your data</li>
          <li>Request deletion of your data where applicable</li>
          <li>Withdraw consent for communication at any time</li>
        </ul>
        <p>To exercise these rights, contact us using the details below.</p>

        <h2>8. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. The latest version will always
          be available on this page.
        </p>

        <h2>9. Contact Us</h2>
        <p className="not-prose">
          <div className="card inline-flex flex-col gap-2 text-sm">
            <div className="font-medium">{COMPANY.name}</div>
            <div className="inline-flex items-center gap-2">
              <MapPin size={16} className="text-brand" /> {COMPANY.location}
            </div>
            <div className="inline-flex items-center gap-2">
              <Mail size={16} className="text-brand" />
              <a className="link" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </div>
            <div className="inline-flex items-center gap-2">
              <Phone size={16} className="text-brand" />
              <a className="link" href={`tel:${COMPANY.phone}`}>{COMPANY.phone}</a>
            </div>
          </div>
        </p>
      </article>

      {/* Small legend with icon hints (optional, keeps visual consistency) */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4 text-sm">
        <Legend icon={<FileText size={16} />} label="Legitimate business purpose" />
        <Legend icon={<Cookie size={16} />} label="Optional cookies" />
        <Legend icon={<Share2 size={16} />} label="No unauthorized sharing" />
        <Legend icon={<UserCheck size={16} />} label="User rights respected" />
      </div>

      <p className="text-xs text-gray-500 dark:text-gray-400">
        Last updated: {new Date().toLocaleDateString()}
      </p>
    </section>
  );
}

/* ——— tiny helper ——— */
function Legend({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 dark:border-gray-700">
      {icon}
      {label}
    </span>
  );
}
