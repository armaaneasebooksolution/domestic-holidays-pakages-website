"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { nanoid } from "nanoid";
import { motion, AnimatePresence } from "framer-motion";

export default function GetQuoteForm({ packageName = "Custom Package" }) {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [step, setStep] = useState(0);
  const steps = ["Trip", "Travelers", "Options", "Preferences", "Review"];

  // form state
  const [form, setForm] = useState({
    from: "",
    to: packageName || "",
    departureType: "Fixed",
    departureDate: "", // optional specific date
    days: 3,
    email: "",
    mobile: "",
    hotelCategory: "3",
    flightIncluded: "Yes",
    budget: "",
    adults: 2,
    children: 0,
    infants: 0,
    bookingTime: "This week",
    sightseeing: "Yes",
    packageType: "Customizable Package",
    callTime: "Anytime",
    tourType: "Family",
    additional: "",
  });

  const [errors, setErrors] = useState({});
  const firstInputRef = useRef(null);

  useEffect(() => {
    setToken("TTQ-" + nanoid(6).toUpperCase());
  }, []);

  useEffect(() => {
    // focus first input each step
    if (firstInputRef.current) firstInputRef.current.focus();
  }, [step]);

  // derived progress percentage
  const progress = useMemo(
    () => Math.round(((step + 1) / steps.length) * 100),
    [step, steps.length],
  );

  const update = (name, value) => setForm((s) => ({ ...s, [name]: value }));

  const incr = (name, inc = 1, min = 0) =>
    setForm((s) => ({
      ...s,
      [name]: Math.max(min, (Number(s[name]) || 0) + inc),
    }));

  // basic per-step validation
  const validateStep = () => {
    const err = {};
    if (step === 0) {
      if (!form.from.trim()) err.from = "Please enter your departure city.";
      if (!form.to.trim()) err.to = "Please enter destination.";
    }
    if (step === 1) {
      if (!form.email.trim()) err.email = "Please enter email.";
      if (!form.mobile.trim()) err.mobile = "Please enter phone number.";
      if ((Number(form.adults) || 0) + (Number(form.children) || 0) < 1)
        err.travelers = "At least one traveler required.";
    }
    if (step === 2) {
      if (!form.budget.trim())
        err.budget = "Provide estimated budget per person.";
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const next = () => {
    if (!validateStep()) return;
    setStep((s) => Math.min(steps.length - 1, s + 1));
  };

  const prev = () => setStep((s) => Math.max(0, s - 1));

  const submit = (e) => {
    e?.preventDefault?.();
    // final validation
    const finalErrors = {};
    if (!form.from.trim()) finalErrors.from = "From is required.";
    if (!form.to.trim()) finalErrors.to = "To is required.";
    if (!form.email.trim()) finalErrors.email = "Email is required.";
    if (!form.mobile.trim()) finalErrors.mobile = "Mobile is required.";
    if (!form.budget.trim()) finalErrors.budget = "Budget is required.";
    setErrors(finalErrors);

    if (Object.keys(finalErrors).length > 0) {
      // jump to first error step
      if (finalErrors.from || finalErrors.to) setStep(0);
      else if (finalErrors.email || finalErrors.mobile) setStep(1);
      else if (finalErrors.budget) setStep(2);
      return;
    }

    const payload = {
      ...form,
      token,
      createdAt: new Date().toISOString(),
    };

    // Save locally (or replace with API call later)
    try {
      localStorage.setItem("quoteDetails", JSON.stringify(payload));
    } catch (err) {
      // ignore localStorage errors
      console.error("Failed to save quote details", err);
    }

    // navigate to confirmation page
    router.push("/get-quote/requested-trip");
  };

  // animation variants for panel transitions
  const panelVariants = {
    enter: { opacity: 0, x: 40 },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -40 },
  };

  return (
    <div className="mx-auto max-w-4xl">
      {/* card */}
      <div className="rounded-2xl border border-gray-200 bg-white shadow-lg">
        {/* header */}
        <div className="px-6 py-6 sm:flex sm:items-center sm:justify-between">
          <div>
            <div className="text-sm text-gray-600">
              Booking Reference:{" "}
              <span className="font-semibold text-gray-900">{token}</span>
            </div>
            <div className="mt-1 text-lg font-semibold text-gray-900">
              Get a Quote —{" "}
              <span className="text-primary">{form.to || packageName}</span>
            </div>
          </div>

          {/* progress */}
          <div className="mt-4 sm:mt-0 sm:w-72">
            <div className="text-xs text-gray-500">Progress</div>
            <div className="mt-2 w-full rounded-full bg-gray-100">
              <div
                className="from-primary h-2 rounded-full bg-gradient-to-r to-indigo-600 transition-all"
                style={{ width: `${progress}%` }}
                aria-hidden
              />
            </div>
            <div className="mt-1 text-right text-xs text-gray-500">
              {progress}% complete
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 px-6 py-4">
          {/* Timeline Steps (horizontal on wide screens) */}
          <nav
            aria-label="Form steps"
            className="mb-6 hidden gap-4 px-2 sm:flex sm:justify-between"
          >
            {steps.map((label, i) => {
              const active = i === step;
              const done = i < step;
              return (
                <button
                  key={label}
                  type="button"
                  onClick={() => setStep(i)}
                  className={`group flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 text-sm transition ${
                    active
                      ? "bg-primary/10 text-primary"
                      : done
                        ? "bg-green-50 text-green-700"
                        : "text-gray-600 hover:bg-gray-50"
                  }`}
                  aria-current={active ? "step" : undefined}
                >
                  <span
                    className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold ${
                      active
                        ? "bg-primary text-white"
                        : done
                          ? "bg-green-600 text-white"
                          : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span className="whitespace-nowrap">{label}</span>
                </button>
              );
            })}
          </nav>

          {/* mobile step indicator */}
          <div className="mb-4 sm:hidden">
            <div className="flex items-center justify-between">
              <div className="text-sm font-medium text-gray-700">
                Step {step + 1} of {steps.length}
              </div>
              <div className="text-sm text-gray-500">{steps[step]}</div>
            </div>
          </div>

          {/* animated panels */}
          <form onSubmit={submit}>
            <div className="min-h-[260px]">
              <AnimatePresence mode="wait" initial={false}>
                {step === 0 && (
                  <motion.section
                    key="step-0"
                    initial="enter"
                    animate="center"
                    exit="exit"
                    variants={panelVariants}
                    transition={{ duration: 0.28 }}
                    className="space-y-4"
                  >
                    {/* Step 1: Trip */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          From <span className="text-red-500">*</span>
                        </label>
                        <input
                          ref={firstInputRef}
                          name="from"
                          value={form.from}
                          onChange={(e) => update("from", e.target.value)}
                          className={`w-full rounded-lg border p-3 focus:outline-none ${
                            errors.from ? "border-red-400" : "border-gray-300"
                          }`}
                          placeholder="Departure city (e.g. Delhi)"
                        />
                        {errors.from && (
                          <div className="mt-1 text-xs text-red-600">
                            {errors.from}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          To <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="to"
                          value={form.to}
                          onChange={(e) => update("to", e.target.value)}
                          className={`w-full rounded-lg border p-3 focus:outline-none ${
                            errors.to ? "border-red-400" : "border-gray-300"
                          }`}
                          placeholder="Destination"
                        />
                        {errors.to && (
                          <div className="mt-1 text-xs text-red-600">
                            {errors.to}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Departure Type
                        </label>
                        <select
                          name="departureType"
                          value={form.departureType}
                          onChange={(e) =>
                            update("departureType", e.target.value)
                          }
                          className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none"
                        >
                          <option>Fixed</option>
                          <option>Flexible</option>
                          <option>Anytime</option>
                        </select>
                      </div>

                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Preferred Date (optional)
                        </label>
                        <input
                          type="date"
                          name="departureDate"
                          value={form.departureDate}
                          onChange={(e) =>
                            update("departureDate", e.target.value)
                          }
                          className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Number of Days
                        </label>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => incr("days", -1, 1)}
                            className="h-9 w-9 rounded-full bg-gray-100 text-lg font-bold"
                            aria-label="Decrease days"
                          >
                            −
                          </button>
                          <div className="min-w-[56px] text-center text-lg font-semibold">
                            {form.days}
                          </div>
                          <button
                            type="button"
                            onClick={() => incr("days", 1)}
                            className="h-9 w-9 rounded-full bg-gray-100 text-lg font-bold"
                            aria-label="Increase days"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.section>
                )}

                {step === 1 && (
                  <motion.section
                    key="step-1"
                    initial="enter"
                    animate="center"
                    exit="exit"
                    variants={panelVariants}
                    transition={{ duration: 0.28 }}
                    className="space-y-4"
                  >
                    {/* Step 2: Travelers */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          ref={firstInputRef}
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={(e) => update("email", e.target.value)}
                          className={`w-full rounded-lg border p-3 focus:outline-none ${
                            errors.email ? "border-red-400" : "border-gray-300"
                          }`}
                          placeholder="you@example.com"
                        />
                        {errors.email && (
                          <div className="mt-1 text-xs text-red-600">
                            {errors.email}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Mobile (WhatsApp){" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          name="mobile"
                          value={form.mobile}
                          onChange={(e) => update("mobile", e.target.value)}
                          className={`w-full rounded-lg border p-3 focus:outline-none ${
                            errors.mobile ? "border-red-400" : "border-gray-300"
                          }`}
                          placeholder="+91 9XXXXXXXXX"
                        />
                        {errors.mobile && (
                          <div className="mt-1 text-xs text-red-600">
                            {errors.mobile}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Adults (12+ yrs)
                        </label>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => incr("adults", -1, 1)}
                            className="h-9 w-9 rounded-full bg-gray-100"
                          >
                            −
                          </button>
                          <div className="min-w-[56px] text-center">
                            {form.adults}
                          </div>
                          <button
                            type="button"
                            onClick={() => incr("adults", 1)}
                            className="h-9 w-9 rounded-full bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Children (2–12)
                        </label>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => incr("children", -1, 0)}
                            className="h-9 w-9 rounded-full bg-gray-100"
                          >
                            −
                          </button>
                          <div className="min-w-[56px] text-center">
                            {form.children}
                          </div>
                          <button
                            type="button"
                            onClick={() => incr("children", 1)}
                            className="h-9 w-9 rounded-full bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Infants (0–2)
                        </label>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => incr("infants", -1, 0)}
                            className="h-9 w-9 rounded-full bg-gray-100"
                          >
                            −
                          </button>
                          <div className="min-w-[56px] text-center">
                            {form.infants}
                          </div>
                          <button
                            type="button"
                            onClick={() => incr("infants", 1)}
                            className="h-9 w-9 rounded-full bg-gray-100"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    {errors.travelers && (
                      <div className="text-sm text-red-600">
                        {errors.travelers}
                      </div>
                    )}
                  </motion.section>
                )}

                {step === 2 && (
                  <motion.section
                    key="step-2"
                    initial="enter"
                    animate="center"
                    exit="exit"
                    variants={panelVariants}
                    transition={{ duration: 0.28 }}
                    className="space-y-4"
                  >
                    {/* Step 3: Options */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Preferred Hotel Category
                        </label>
                        <select
                          value={form.hotelCategory}
                          onChange={(e) =>
                            update("hotelCategory", e.target.value)
                          }
                          className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none"
                        >
                          <option value="5">5 Star</option>
                          <option value="4">4 Star</option>
                          <option value="3">3 Star</option>
                          <option value="2">2 Star</option>
                        </select>
                      </div>

                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Flight Included
                        </label>
                        <select
                          value={form.flightIncluded}
                          onChange={(e) =>
                            update("flightIncluded", e.target.value)
                          }
                          className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none"
                        >
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Budget (Per Person){" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          ref={firstInputRef}
                          value={form.budget}
                          onChange={(e) => update("budget", e.target.value)}
                          className={`w-full rounded-lg border p-3 focus:outline-none ${
                            errors.budget ? "border-red-400" : "border-gray-300"
                          }`}
                          placeholder="e.g. ₹25,000 (With/Without airfare)"
                        />
                        {errors.budget && (
                          <div className="mt-1 text-xs text-red-600">
                            {errors.budget}
                          </div>
                        )}
                      </div>
                    </div>
                  </motion.section>
                )}

                {step === 3 && (
                  <motion.section
                    key="step-3"
                    initial="enter"
                    animate="center"
                    exit="exit"
                    variants={panelVariants}
                    transition={{ duration: 0.28 }}
                    className="space-y-4"
                  >
                    {/* Step 4: Preferences */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          I will book
                        </label>
                        <select
                          value={form.bookingTime}
                          onChange={(e) =>
                            update("bookingTime", e.target.value)
                          }
                          className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none"
                        >
                          <option>In next 2-3 days</option>
                          <option>This week</option>
                          <option>This month</option>
                          <option>Later sometime</option>
                          <option>Just checking price</option>
                        </select>
                      </div>

                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Cabs for local sightseeing
                        </label>
                        <select
                          value={form.sightseeing}
                          onChange={(e) =>
                            update("sightseeing", e.target.value)
                          }
                          className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none"
                        >
                          <option>Yes</option>
                          <option>No</option>
                        </select>
                      </div>

                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Package Type
                        </label>
                        <select
                          value={form.packageType}
                          onChange={(e) =>
                            update("packageType", e.target.value)
                          }
                          className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none"
                        >
                          <option>Customizable Package</option>
                          <option>Bestselling Standard Package</option>
                        </select>
                      </div>

                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Preferred Time to Call
                        </label>
                        <select
                          value={form.callTime}
                          onChange={(e) => update("callTime", e.target.value)}
                          className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none"
                        >
                          <option>Anytime</option>
                          <option>10 AM - 12 PM</option>
                          <option>12 PM - 2 PM</option>
                          <option>2 PM - 4 PM</option>
                          <option>4 PM - 6 PM</option>
                          <option>After 6 PM</option>
                        </select>
                      </div>

                      <div>
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Tour Type
                        </label>
                        <select
                          value={form.tourType}
                          onChange={(e) => update("tourType", e.target.value)}
                          className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none"
                        >
                          <option>Honeymoon</option>
                          <option>Family</option>
                          <option>Adventure</option>
                          <option>Offbeat</option>
                          <option>Wildlife</option>
                          <option>Religious</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label className="mb-1 block text-sm font-medium text-gray-700">
                          Additional Requirements
                        </label>
                        <textarea
                          value={form.additional}
                          onChange={(e) => update("additional", e.target.value)}
                          rows={4}
                          className="w-full rounded-lg border border-gray-300 p-3 focus:outline-none"
                          placeholder="Any special requests (meals, accessibility, celebrations...)"
                        ></textarea>
                      </div>
                    </div>
                  </motion.section>
                )}

                {step === 4 && (
                  <motion.section
                    key="step-4"
                    initial="enter"
                    animate="center"
                    exit="exit"
                    variants={panelVariants}
                    transition={{ duration: 0.28 }}
                    className="space-y-4"
                  >
                    {/* Review */}
                    <div className="rounded-lg border border-gray-100 bg-gray-50 p-4">
                      <h3 className="mb-2 text-lg font-semibold text-gray-900">
                        Review your quote request
                      </h3>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <div>
                          <div className="text-xs text-gray-500">Reference</div>
                          <div className="font-medium">{token}</div>
                        </div>

                        <div>
                          <div className="text-xs text-gray-500">Package</div>
                          <div className="font-medium">{form.to}</div>
                        </div>

                        <div>
                          <div className="text-xs text-gray-500">From</div>
                          <div className="font-medium">{form.from}</div>
                        </div>

                        <div>
                          <div className="text-xs text-gray-500">
                            Departure Type / Date
                          </div>
                          <div className="font-medium">
                            {form.departureType}{" "}
                            {form.departureDate
                              ? `• ${form.departureDate}`
                              : ""}
                          </div>
                        </div>

                        <div>
                          <div className="text-xs text-gray-500">Days</div>
                          <div className="font-medium">{form.days}</div>
                        </div>

                        <div>
                          <div className="text-xs text-gray-500">Travelers</div>
                          <div className="font-medium">
                            {form.adults} adults • {form.children} children •{" "}
                            {form.infants} infants
                          </div>
                        </div>

                        <div>
                          <div className="text-xs text-gray-500">
                            Budget (per person)
                          </div>
                          <div className="font-medium">{form.budget}</div>
                        </div>

                        <div>
                          <div className="text-xs text-gray-500">
                            Flight Included
                          </div>
                          <div className="font-medium">
                            {form.flightIncluded}
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <div className="text-xs text-gray-500">
                            Preferences
                          </div>
                          <div className="font-medium">
                            {form.packageType} • {form.tourType} • Call:{" "}
                            {form.callTime}
                          </div>
                        </div>

                        <div className="sm:col-span-2">
                          <div className="text-xs text-gray-500">
                            Additional requirements
                          </div>
                          <div className="text-sm text-gray-700">
                            {form.additional || "—"}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="text-sm text-gray-500">
                      By submitting this request you agree to be contacted by
                      our travel advisors. We respect your privacy.
                    </div>
                  </motion.section>
                )}
              </AnimatePresence>
            </div>

            {/* navigation buttons */}
            <div className="mt-6 flex items-center justify-between gap-4">
              <div>
                {step > 0 ? (
                  <button
                    type="button"
                    onClick={prev}
                    className="rounded-full border border-gray-200 bg-white px-6 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
                  >
                    ← Back
                  </button>
                ) : (
                  <div />
                )}
              </div>

              <div className="flex items-center gap-3">
                {step < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={next}
                    className="bg-primary hover:bg-primary-dark rounded-full px-6 py-2 text-sm font-semibold text-white shadow"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={submit}
                    className="rounded-full bg-green-600 px-6 py-2 text-sm font-semibold text-white shadow hover:bg-green-700"
                  >
                    Submit Request
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
