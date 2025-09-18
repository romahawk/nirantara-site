export const metadata = { title: "Dealership / Partnership" };
const EMAIL = "info@yourdomain.com"; const PHONE = "+1 555 0100"; const WA = "https://wa.me/15550100";
export default function Page() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Dealership / Partnership</h1>
      <p>We work with licensed importers, distributors, hospitals, and procurement agencies.</p>
      <div className="card">
        <h2 className="font-medium mb-2">Contact</h2>
        <ul className="text-sm space-y-1">
          <li>Email: <a className="link" href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
          <li>Phone: <a className="link" href={`tel:${PHONE}`}>{PHONE}</a></li>
          <li>WhatsApp: <a className="link" href={WA} target="_blank">Open chat</a></li>
        </ul>
      </div>
    </section>
  );
}
