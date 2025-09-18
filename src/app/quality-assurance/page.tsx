export const metadata = { title: "Quality Assurance" };

export default function QualityAssurancePage() {
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>Quality Assurance</h1>
      <p>
        Outline your QA process, accepted certifications (WHO-GMP, EU-GMP, ISO 13485, CE),
        and documentation flow (COA, COC, MSDS, etc).
      </p>

      <h2>Supplier Vetting</h2>
      <ul>
        <li>Certification checks and audits</li>
        <li>Batch traceability & documentation</li>
        <li>Temperature control where required</li>
      </ul>
    </article>
  );
}
