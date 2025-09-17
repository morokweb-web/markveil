"use client";
import { useState } from "react";
type Mode = "enquiry" | "appointment";

const COUNTRY_CODES = [
  { code: "+27",  label: "South Africa" }, // default
  { code: "+54",  label: "Argentina" },
  { code: "+61",  label: "Australia" },
  { code: "+55",  label: "Brazil" },
  { code: "+1",   label: "Canada" },
  { code: "+86",  label: "China" },
  { code: "+33",  label: "France" },
  { code: "+49",  label: "Germany" },
  { code: "+91",  label: "India" },
  { code: "+62",  label: "Indonesia" },
  { code: "+39",  label: "Italy" },
  { code: "+81",  label: "Japan" },
  { code: "+52",  label: "Mexico" },
  { code: "+7",   label: "Russia" },
  { code: "+966", label: "Saudi Arabia" },
  { code: "+82",  label: "South Korea" },
  { code: "+90",  label: "Turkey" },
  { code: "+44",  label: "United Kingdom" },
  { code: "+1",   label: "United States" },
  { code: "+263", label: "Zimbabwe" },
  { code: "+264", label: "Namibia" },
  { code: "+234", label: "Nigeria" },
  { code: "+64",  label: "New Zealand" },
  { code: "+230", label: "Mauritius" },
  { code: "+266", label: "Lesotho" },
];

export default function ContactForm() {
  const [mode, setMode] = useState<Mode>("enquiry");
  const [state, setState] = useState<"idle" | "loading" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("loading");
    const data = Object.fromEntries(new FormData(e.currentTarget).entries()) as any;
    data.type = mode;
    try {
      const res = await fetch("/.netlify/functions/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      window.location.href = "/thank-you";
    } catch {
      setState("error");
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <>
      <div className="mb-6 inline-flex rounded-full border border-neutral-300 dark:border-neutral-700 overflow-hidden">
        <button
          type="button"
          className={`px-4 py-2 ${mode === "enquiry" ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" : ""}`}
          onClick={() => setMode("enquiry")}
        >
          General Enquiry
        </button>
        <button
          type="button"
          className={`px-4 py-2 ${mode === "appointment" ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900" : ""}`}
          onClick={() => setMode("appointment")}
        >
          Request an appointment
        </button>
      </div>

      <form onSubmit={onSubmit} className="space-y-4">
        <input name="company" placeholder="Company name" required className="w-full p-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent" />
        <div className="grid md:grid-cols-2 gap-4">
          <input name="name" placeholder="Your name" required className="w-full p-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent" />
          <input type="email" name="email" placeholder="Email" required className="w-full p-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent" />
        </div>

        {mode === "enquiry" && (
          <textarea name="message" rows={6} placeholder="How can we assist you?" className="w-full p-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent"></textarea>
        )}

        {mode === "appointment" && (
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input name="location" placeholder="Preferred location" className="w-full p-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent" />
              <div className="flex gap-2">
                <select name="phone_code" defaultValue="+27" className="p-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent">
                  {COUNTRY_CODES.map((c) => (
                    <option key={c.code + c.label} value={c.code}>
                      {c.code} · {c.label}
                    </option>
                  ))}
                </select>
                <input name="phone" placeholder="Phone number" className="w-full p-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent" />
              </div>
            </div>
            <textarea name="message" rows={6} placeholder="Briefly describe your project and preferred times" className="w-full p-3 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-transparent"></textarea>
          </div>
        )}

        <div className="flex items-center gap-3">
          <button disabled={state === "loading"} className="px-6 py-3 rounded-full bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
            {state === "loading" ? "Sending…" : mode === "appointment" ? "Request appointment" : "Send"}
          </button>
        </div>
      </form>
    </>
  );
}
