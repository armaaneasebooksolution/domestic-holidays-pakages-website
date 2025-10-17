import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the best time to visit Paris?",
    answer:
      "The ideal time to visit Paris is from March to May (spring) and September to November (autumn), when the weather is mild, crowds are smaller, and outdoor attractions are most enjoyable.",
  },
  {
    question: "How many days are enough to explore Paris?",
    answer:
      "A 5–7 day trip allows you to explore major landmarks like the Eiffel Tower, Louvre, and Notre-Dame, plus day trips to Versailles or Montmartre at a relaxed pace.",
  },
  {
    question: "Is Paris expensive for travelers?",
    answer:
      "Paris can be moderately expensive, but budget-friendly options exist. Consider public transport, local bakeries, and city passes for museum and metro savings.",
  },
  {
    question: "Do I need a visa to travel to France?",
    answer:
      "If you’re traveling from outside the EU, you may need a Schengen visa. Check the French consulate website or use the France-Visas portal for official requirements.",
  },
  {
    question: "What are some hidden gems in Paris?",
    answer:
      "Don’t miss Canal Saint-Martin, Rue Cremieux, and Shakespeare & Company Bookstore. These spots offer a local vibe away from typical tourist areas.",
  },
];

const FAQItem = ({ faq, index, openIndex, setOpenIndex }) => {
  const isOpen = openIndex === index;

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        onClick={() => setOpenIndex(isOpen ? null : index)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-[17px] font-medium text-gray-900">
          {faq.question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown className="h-5 w-5 text-gray-500" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="mt-3 text-gray-700">{faq.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <>
      {/* ===== FAQ SECTION ===== */}
      <section
        className="mt-20 rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm"
        itemScope
        itemType="https://schema.org/FAQPage"
      >
        <h2 className="mb-6 text-center text-3xl font-semibold text-gray-900">
          Frequently Asked Questions About Visiting Paris
        </h2>

        <div className="divide-y divide-gray-200">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              openIndex={openIndex}
              setOpenIndex={setOpenIndex}
            />
          ))}
        </div>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <div className="border-primary/20 bg-primary/5 mt-14 rounded-2xl border p-6 text-center">
        <h3 className="mb-3 text-2xl font-semibold text-gray-900">
          Need Help Planning Your Trip?
        </h3>
        <p className="mb-5 text-gray-700">
          Speak to our travel experts and design your custom Paris itinerary.
        </p>
        <a
          href="tel:+1 (000) 000-0000"
          className="bg-primary hover:bg-primary-dark inline-block rounded-full px-6 py-3 font-medium text-white transition"
        >
          Call Now — +1 (000) 000-0000
        </a>
      </div>
    </>
  );
};

export default Faqs;
