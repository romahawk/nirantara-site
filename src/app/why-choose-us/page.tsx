export const metadata = { title: "Why Choose Us" };
export default function Page() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-semibold">Why Choose Us</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="card"><h3 className="font-semibold">Quality & Compliance</h3><p className="text-sm text-gray-600 dark:text-gray-400">…</p></div>
        <div className="card"><h3 className="font-semibold">Documentation</h3><p className="text-sm text-gray-600 dark:text-gray-400">…</p></div>
        <div className="card"><h3 className="font-semibold">Logistics</h3><p className="text-sm text-gray-600 dark:text-gray-400">…</p></div>
      </div>
    </section>
  );
}
