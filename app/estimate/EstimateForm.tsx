"use client";

import { useState } from "react";

type FormState = {
  full_name: string;
  phone: string;
  email: string;
  address: string;
  fence_type: string;
  linear_feet: string;
  description: string;
  how_heard: string;
};

const EMPTY: FormState = {
  full_name: "",
  phone: "",
  email: "",
  address: "",
  fence_type: "",
  linear_feet: "",
  description: "",
  how_heard: "",
};

export default function EstimateForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function set(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch (err) {
      console.error("Estimate submit error:", err);
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="py-16 text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold/15">
          <svg className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="font-oswald text-3xl font-bold text-dark">Request Received!</h2>
        <p className="mt-5 leading-relaxed text-secondary">
          Thanks! We&apos;ll call you within 24 hours to discuss your project and
          schedule a time to come out for your free estimate.
        </p>
        <p className="mt-4 text-sm text-secondary">
          Questions in the meantime?{" "}
          <a href="tel:+18068912016" className="font-semibold text-gold hover:underline">
            Call us at (806) 891-2016
          </a>
        </p>
      </div>
    );
  }

  return (
    <>
      {status === "error" && (
        <div className="mb-8 rounded-xl border border-red-200 bg-red-50 px-6 py-4 text-sm text-red-700">
          Something went wrong — please{" "}
          <a href="tel:+18068912016" className="font-semibold underline">
            call us directly at (806) 891-2016
          </a>{" "}
          and we&apos;ll get you taken care of.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-dark">
              Full Name <span className="text-gold">*</span>
            </label>
            <input
              type="text"
              required
              value={form.full_name}
              onChange={(e) => set("full_name", e.target.value)}
              placeholder="Jane Smith"
              className="w-full rounded-lg border border-[#E5E5E5] px-4 py-3 text-sm text-dark placeholder:text-secondary/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-dark">
              Phone Number <span className="text-gold">*</span>
            </label>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              placeholder="(806) 555-0000"
              className="w-full rounded-lg border border-[#E5E5E5] px-4 py-3 text-sm text-dark placeholder:text-secondary/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            />
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-dark">
            Email Address <span className="text-gold">*</span>
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="jane@example.com"
            className="w-full rounded-lg border border-[#E5E5E5] px-4 py-3 text-sm text-dark placeholder:text-secondary/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-dark">
            Property Address <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            required
            value={form.address}
            onChange={(e) => set("address", e.target.value)}
            placeholder="1234 Main St, Amarillo, TX 79101"
            className="w-full rounded-lg border border-[#E5E5E5] px-4 py-3 text-sm text-dark placeholder:text-secondary/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          />
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-dark">
              Fence Type <span className="text-gold">*</span>
            </label>
            <select
              required
              value={form.fence_type}
              onChange={(e) => set("fence_type", e.target.value)}
              className="w-full rounded-lg border border-[#E5E5E5] px-4 py-3 text-sm text-dark focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            >
              <option value="" disabled>Select type…</option>
              <option value="Wood">Wood Fence</option>
              <option value="Chain Link">Chain Link Fence</option>
              <option value="Vinyl">Vinyl Fence</option>
              <option value="Gate">Gate Installation</option>
              <option value="Repair">Fence Repair</option>
              <option value="Not Sure">Not Sure</option>
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-sm font-semibold text-dark">
              Approximate Linear Feet <span className="text-gold">*</span>
            </label>
            <select
              required
              value={form.linear_feet}
              onChange={(e) => set("linear_feet", e.target.value)}
              className="w-full rounded-lg border border-[#E5E5E5] px-4 py-3 text-sm text-dark focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
            >
              <option value="" disabled>Select length…</option>
              <option value="Under 100ft">Under 100 ft</option>
              <option value="100-200ft">100–200 ft</option>
              <option value="200-500ft">200–500 ft</option>
              <option value="500ft+">500 ft+</option>
              <option value="Not Sure">Not Sure</option>
            </select>
          </div>
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-dark">
            Project Description{" "}
            <span className="font-normal text-secondary">(optional)</span>
          </label>
          <textarea
            rows={4}
            value={form.description}
            onChange={(e) => set("description", e.target.value)}
            placeholder="Tell us anything that would help — existing fence, special access, timeline, etc."
            className="w-full rounded-lg border border-[#E5E5E5] px-4 py-3 text-sm text-dark placeholder:text-secondary/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-dark">
            How Did You Hear About Us?{" "}
            <span className="font-normal text-secondary">(optional)</span>
          </label>
          <select
            value={form.how_heard}
            onChange={(e) => set("how_heard", e.target.value)}
            className="w-full rounded-lg border border-[#E5E5E5] px-4 py-3 text-sm text-dark focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
          >
            <option value="">Select one…</option>
            <option value="Google">Google</option>
            <option value="Facebook">Facebook</option>
            <option value="Referral">Referral</option>
            <option value="Drove By">Drove By</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-lg bg-gold py-4 font-semibold text-dark transition-colors hover:bg-gold-hover disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Send My Estimate Request"}
        </button>

        <p className="text-center text-xs text-secondary">
          Or call us directly:{" "}
          <a href="tel:+18068912016" className="font-semibold text-dark">
            (806) 891-2016
          </a>
        </p>
      </form>
    </>
  );
}
