"use client";

import { useState } from "react";
import { getSupabaseClient } from "@/lib/supabase/client";

type FormState = {
  full_name: string;
  phone: string;
  email: string;
  address: string;
  fence_type: string;
  preferred_date: string;
  preferred_time: string;
  backup_date: string;
  notes: string;
};

const EMPTY: FormState = {
  full_name: "",
  phone: "",
  email: "",
  address: "",
  fence_type: "",
  preferred_date: "",
  preferred_time: "",
  backup_date: "",
  notes: "",
};

export default function BookingForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  function set(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const supabase = getSupabaseClient();
      const { error } = await supabase.from("fence_bookings").insert([
        {
          full_name: form.full_name,
          phone: form.phone,
          email: form.email,
          address: form.address,
          fence_type: form.fence_type,
          preferred_date: form.preferred_date,
          preferred_time: form.preferred_time,
          backup_date: form.backup_date || null,
          notes: form.notes || null,
        },
      ]);
      if (error) throw error;
      setStatus("success");
    } catch (err) {
      console.error("Booking submit error:", err);
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
        <h2 className="font-oswald text-3xl font-bold text-dark">You&apos;re on the books!</h2>
        <p className="mt-5 leading-relaxed text-secondary">
          Thanks! We&apos;ll confirm your booking within 24 hours.
        </p>
        <p className="mt-3 text-sm text-secondary">
          Need to reach us sooner?{" "}
          <a href="tel:+18066785500" className="font-semibold text-gold hover:underline">
            (806) 678-5500
          </a>
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full rounded-lg border border-[#E5E5E5] px-4 py-3 text-sm text-dark placeholder:text-secondary/50 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold";

  const labelClass = "mb-1.5 block text-sm font-semibold text-dark";

  return (
    <>
      {status === "error" && (
        <div className="mb-8 rounded-xl border border-red-200 bg-red-50 px-6 py-4 text-sm text-red-700">
          Something went wrong —{" "}
          <a href="tel:+18066785500" className="font-semibold underline">
            call us at (806) 678-5500
          </a>{" "}
          and we&apos;ll get you scheduled.
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name + Phone */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className={labelClass}>
              Full Name <span className="text-gold">*</span>
            </label>
            <input
              type="text"
              required
              value={form.full_name}
              onChange={(e) => set("full_name", e.target.value)}
              placeholder="Jane Smith"
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>
              Phone Number <span className="text-gold">*</span>
            </label>
            <input
              type="tel"
              required
              value={form.phone}
              onChange={(e) => set("phone", e.target.value)}
              placeholder="(806) 555-0000"
              className={inputClass}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className={labelClass}>
            Email Address <span className="text-gold">*</span>
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => set("email", e.target.value)}
            placeholder="jane@example.com"
            className={inputClass}
          />
        </div>

        {/* Address */}
        <div>
          <label className={labelClass}>
            Property Address <span className="text-gold">*</span>
          </label>
          <input
            type="text"
            required
            value={form.address}
            onChange={(e) => set("address", e.target.value)}
            placeholder="1234 Main St, Amarillo, TX 79101"
            className={inputClass}
          />
        </div>

        {/* Fence type */}
        <div>
          <label className={labelClass}>
            Fence Type <span className="text-gold">*</span>
          </label>
          <select
            required
            value={form.fence_type}
            onChange={(e) => set("fence_type", e.target.value)}
            className={inputClass}
          >
            <option value="" disabled>Select type…</option>
            <option value="Wood">Wood</option>
            <option value="Chain Link">Chain Link</option>
            <option value="Vinyl">Vinyl</option>
            <option value="Gate Installation">Gate Installation</option>
            <option value="Fence Repair">Fence Repair</option>
            <option value="Not Sure Yet">Not Sure Yet</option>
          </select>
        </div>

        {/* Preferred date + time */}
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className={labelClass}>
              Preferred Date <span className="text-gold">*</span>
            </label>
            <input
              type="date"
              required
              value={form.preferred_date}
              onChange={(e) => set("preferred_date", e.target.value)}
              min={new Date().toISOString().split("T")[0]}
              className={inputClass}
            />
          </div>
          <div>
            <label className={labelClass}>
              Preferred Time <span className="text-gold">*</span>
            </label>
            <select
              required
              value={form.preferred_time}
              onChange={(e) => set("preferred_time", e.target.value)}
              className={inputClass}
            >
              <option value="" disabled>Select time…</option>
              <option value="Morning 8am–12pm">Morning (8am–12pm)</option>
              <option value="Afternoon 12pm–4pm">Afternoon (12pm–4pm)</option>
              <option value="Either works">Either works</option>
            </select>
          </div>
        </div>

        {/* Backup date */}
        <div>
          <label className={labelClass}>
            Backup Date{" "}
            <span className="font-normal text-secondary">(optional)</span>
          </label>
          <input
            type="date"
            value={form.backup_date}
            onChange={(e) => set("backup_date", e.target.value)}
            min={new Date().toISOString().split("T")[0]}
            className={inputClass}
          />
        </div>

        {/* Notes */}
        <div>
          <label className={labelClass}>
            Additional Notes{" "}
            <span className="font-normal text-secondary">(optional)</span>
          </label>
          <textarea
            rows={4}
            value={form.notes}
            onChange={(e) => set("notes", e.target.value)}
            placeholder="Anything we should know — gate access, dogs, specific areas to look at, etc."
            className={inputClass}
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full rounded-lg bg-gold py-4 font-semibold text-dark transition-colors hover:bg-gold-hover disabled:opacity-60"
        >
          {status === "loading" ? "Sending…" : "Request My Estimate"}
        </button>

        <p className="text-center text-xs text-secondary">
          Or call us directly:{" "}
          <a href="tel:+18066785500" className="font-semibold text-dark">
            (806) 678-5500
          </a>
        </p>
      </form>
    </>
  );
}
