"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const itineraryData = [
  {
    day: "Day 1",
    title: "Barcelona – Zaragoza – Madrid",
    description: `
We’ll meet at 4 p.m. at our hotel in Luzern (Lucerne) for a “Welcome to Switzerland” meeting. 
Then we’ll take a meandering evening walk through Switzerland’s most charming lakeside town, 
and get acquainted with one another over dinner together. Sleep in Luzern (2 nights). 
No bus. Walking: light.
    `,
  },
  {
    day: "Day 2",
    title: "Zürich–Biel/Bienne–Neuchâtel–Geneva",
    description: `
Enjoy an orientation walk of Zurich’s OLD TOWN, Switzerland’s center of banking and commerce. 
Then, leave Zurich and start your Swiss adventure. You’ll quickly discover that Switzerland 
isn’t just home to the Alps, but also to some of the most beautiful lakes. First, stop at the 
foot of the Jura Mountains in the picturesque town of Biel, known as Bienne by French-speaking 
Swiss, famous for watch-making, and explore the historical center. Next, enjoy a scenic drive 
to lakeside Neuchâtel, dominated by the medieval cathedral and castle. Time to stroll along the 
lake promenade before continuing to stunning Geneva, the second-largest city in Switzerland, 
with its fantastic lakeside location and breathtaking panoramas of the Alps.
    `,
  },
  {
    day: "Day 3",
    title: "Enchanting Engelberg",
    description: `
Our morning drive takes us from Swiss lakes to Swiss Army. At the once-secret Swiss army bunker 
at Fortress Fürigen, we’ll see part of the massive defense system designed to keep Switzerland 
strong and neutral. Afterward, a short drive into the countryside brings us to the charming 
Alpine village of Engelberg, our picturesque home for the next two days. We’ll settle into our 
lodge then head out for an orientation walk. Our stroll through the village will end at the 
Engelberg Abbey, a Benedictine monastery with its own cheese-making operation. You’ll have free 
time to wander back before dinner together. Sleep in Engelberg (2 nights). Bus: 1 hr. Walking: light.
    `,
  },
  {
    day: "Day 4",
    title: "Interlaken Area. Excursion to The Jungfrau Massif",
    description: `
An unforgettable trip to the high Alpine wonderland of ice and snow is the true highlight of a visit to Switzerland. 
At an amazing 11,332 feet, the JUNGFRAUJOCH is Europe’s highest railway station. Jungfrau’s 13,642-foot summit 
was first ascended in 1811 and in 1912 the rack railway was opened. There are lots of things to do here: 
enjoy the ALPINE SENSATION, THE PANORAMA 360° EXPERIENCE, and the ICE PALACE. Also receive your JUNGFRAU PASSPORT 
as a souvenir to take home with you. The round trip to the “Top of Europe” by MOUNTAIN TRAIN will take most of the day.
    `,
  },
  {
    day: "Day 5",
    title: "Lake Geneva and Château de Chillon",
    description: `
It’s market day in Lausanne! Enjoy browsing and packing a picnic lunch for our 11 a.m. boat cruise on Lake Geneva. 
A few miles down-shore we’ll dock at Château de Chillon, where we’ll have a guided tour of this delightfully medieval 
castle on the water. On our way back we’ll take time to peek into the vineyards surrounding Lutry before returning 
to Lausanne. Boat: 2 hrs. Bus: 1 hr. Walking: moderate.
    `,
  },
];

export default function ItineraryStepperModern() {
  const ref = useRef(null);

  return (
    <section className="container mx-auto rounded-[20px] bg-white px-4 py-10">
      {/* Header */}
      <div className="mb-10 flex items-center gap-3">
        <Calendar className="text-primary h-6 w-6" />
        <h2 className="text-xl leading-8 font-semibold tracking-normal md:text-2xl">
          Itinerary
        </h2>
      </div>

      {/* Steps (Without Stepper or Icons) */}
      <div ref={ref} className="relative">
        <div className="space-y-12">
          {itineraryData.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative flex flex-col gap-5 sm:flex-row sm:items-start"
            >
              {/* Step Content */}
              <div className="flex-1 pt-1">
                <div className="bg-gray-100 p-2">
                  <p className="text-primary mb-1 text-xs font-semibold tracking-wide uppercase">
                    {item.day}
                  </p>
                  <h3 className="text-sm leading-snug font-semibold">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm leading-relaxed">
                  {item.description.trim()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <hr className="my-6 border-gray-200" />
    </section>
  );
}
