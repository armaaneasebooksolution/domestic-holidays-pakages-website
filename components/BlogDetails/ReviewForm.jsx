"use client";

import { useState } from "react";
import { Star, Send } from "lucide-react";
import { motion } from "framer-motion";

export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    review: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.review || !rating) {
      alert("Please complete all fields including rating.");
      return;
    }

    console.log("Review Submitted:", { ...formData, rating });
    setSubmitted(true);

    // You can later integrate API submission here
    // await axios.post('/api/reviews', { ...formData, rating });

    setFormData({ name: "", email: "", review: "" });
    setRating(0);

    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section
      className="mt-16 rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
      id="review-form"
    >
      <h2 className="mb-4 text-center text-2xl font-semibold text-gray-900">
        Share Your Travel Experience
      </h2>
      <p className="mb-8 text-center text-gray-600">
        We’d love to hear your feedback! Your review helps other travelers make
        better choices.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-2xl space-y-6 text-gray-800"
      >
        {/* ===== Rating Selection ===== */}
        <div className="flex flex-col items-center">
          <p className="mb-3 text-sm font-medium text-gray-700">
            Rate your experience:
          </p>
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => {
              const starValue = i + 1;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setRating(starValue)}
                  onMouseEnter={() => setHover(starValue)}
                  onMouseLeave={() => setHover(0)}
                  className="focus:outline-none"
                >
                  <Star
                    className={`h-8 w-8 transition-colors ${
                      starValue <= (hover || rating)
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {/* ===== Name ===== */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="focus:border-primary w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none"
          />
        </div>

        {/* ===== Email ===== */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            className="focus:border-primary w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none"
          />
        </div>

        {/* ===== Review Text ===== */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Your Review
          </label>
          <textarea
            name="review"
            rows="5"
            value={formData.review}
            onChange={handleChange}
            placeholder="Tell us about your trip experience..."
            className="focus:border-primary w-full resize-none rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm focus:outline-none"
          />
        </div>

        {/* ===== Submit Button ===== */}
        <div className="text-center">
          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
            type="submit"
            className="bg-primary hover:bg-primary-dark inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium text-white shadow-md transition focus:outline-none"
          >
            <Send className="h-4 w-4" />
            Submit Review
          </motion.button>
        </div>

        {/* ===== Success Message ===== */}
        {submitted && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 text-center text-sm font-medium text-green-600"
          >
            🎉 Thank you for sharing your review! We’ll feature it soon.
          </motion.p>
        )}
      </form>
    </section>
  );
}
