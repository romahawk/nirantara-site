"use client";

import React from "react";

export default function EnquiryFormClient({ mailTo }: { mailTo: string }) {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);

    const name = (fd.get("name") as string) || "";
    const email = (fd.get("email") as string) || "";
    const company = (fd.get("company") as string) || "";
    const country = (fd.get("country") as string) || "";
    const license = (fd.get("license") as string) || "";
    const phone = (fd.get("phone") as string) || "";
    const whatsapp = (fd.get("whatsapp") as string) || "";
    const interests = (fd.get("interests") as string) || "";
    const message = (fd.get("message") as string) || "";

    const subject = encodeURIComponent(`Partnership enquiry — ${company || name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company}`,
        `Country: ${country}`,
        `Import License / Authorization: ${license}`,
        `Phone: ${phone}`,
        `WhatsApp: ${whatsapp}`,
        `Product Interests: ${interests}`,
        "",
        "Message:",
        message,
      ].join("\n")
    );

    window.location.href = `mailto:${mailTo}?subject=${subject}&body=${body}`;
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-3 max-w-2xl">
      <div className="grid sm:grid-cols-2 gap-3">
        <input name="name" placeholder="Full name *" required className="w-full p-2 border rounded dark:border-gray-700" />
        <input name="email" type="email" placeholder="Email *" required className="w-full p-2 border rounded dark:border-gray-700" />
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        <input name="company" placeholder="Company *" required className="w-full p-2 border rounded dark:border-gray-700" />
        <input name="country" placeholder="Country *" required className="w-full p-2 border rounded dark:border-gray-700" />
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        <input name="license" placeholder="Import license / Authorization" className="w-full p-2 border rounded dark:border-gray-700" />
        <input name="phone" placeholder="Phone" className="w-full p-2 border rounded dark:border-gray-700" />
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        <input name="whatsapp" placeholder="WhatsApp" className="w-full p-2 border rounded dark:border-gray-700" />
        <input name="interests" placeholder="Product interests" className="w-full p-2 border rounded dark:border-gray-700" />
      </div>
      <textarea name="message" placeholder="Message" className="w-full p-2 border rounded dark:border-gray-700 h-36" />
      <button className="rounded-lg bg-brand text-white px-5 py-2.5 w-fit">Submit Enquiry</button>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        This opens your email client with a pre-filled message. No data is stored on this site.
      </p>
    </form>
  );
}
