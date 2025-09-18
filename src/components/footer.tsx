import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 dark:border-gray-800">
      <div className="container py-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h3 className="font-semibold mb-3">Nirantara Trading</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Export of pharmaceuticals, surgical products & medical disposables.
          </p>
        </div>
        <div>
          <h4 className="font-medium mb-2">Company</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/about" className="link">About</Link></li>
            <li><Link href="/mission-vision" className="link">Mission & Vision</Link></li>
            <li><Link href="/why-choose-us" className="link">Why Choose Us</Link></li>
            <li><Link href="/quality-assurance" className="link">Quality</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Legal</h4>
          <ul className="space-y-1 text-sm">
            <li><Link href="/privacy" className="link">Privacy Policy</Link></li>
            <li><Link href="/terms" className="link">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium mb-2">Contact</h4>
          <ul className="space-y-1 text-sm">
            <li>Email: <a className="link" href="mailto:info@yourdomain.com">info@yourdomain.com</a></li>
            <li>Phone: <a className="link" href="tel:+15550100">+1 555 0100</a></li>
            <li>WhatsApp: <a className="link" href="https://wa.me/15550100" target="_blank">Chat</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-100 dark:border-gray-800">
        <div className="container py-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Nirantara Trading. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
