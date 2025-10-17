import Image from "next/image";
import Faqs from "./Faqs";
import ReviewForm from "./ReviewForm";

const Articles = () => {
  return (
    <article
      className="prose prose-headings:text-gray-900 prose-p:text-gray-700 prose-li:text-gray-700 prose-img:rounded-2xl prose-strong:text-gray-900 prose-a:text-primary hover:prose-a:text-primary-dark max-w-none leading-relaxed tracking-wide"
      itemScope
      itemType="https://schema.org/BlogPosting"
    >
      {/* ===== Blog Title ===== */}
      <h1
        itemProp="headline"
        className="mb-6 text-4xl leading-tight font-bold text-gray-900 sm:text-5xl"
      >
        The Ultimate 7-Day Guide to Exploring Paris in 2025
      </h1>

      {/* ===== Meta Info ===== */}
      <p className="mb-10 text-sm text-gray-500">
        By{" "}
        <span itemProp="author" className="font-medium text-gray-800">
          Armaan Ahmad
        </span>{" "}
        •{" "}
        <time itemProp="datePublished">
          {new Date().toLocaleDateString("en-IN", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </time>
      </p>

      {/* ===== Intro Paragraph ===== */}
      <div className="space-y-5 text-[17px] leading-[1.9] text-gray-700">
        <p itemProp="description">
          Paris, often celebrated as the <strong>"City of Light"</strong>, is
          more than just a destination — it’s an experience that blends art,
          romance, history, and elegance in perfect harmony. From the
          cobblestone streets of Montmartre to the architectural grandeur of the
          Louvre, Paris stands as a timeless symbol of sophistication and
          culture. Whether you're a first-time visitor or a returning traveler,
          this comprehensive 7-day itinerary for 2025 will help you uncover the
          true essence of Paris in the most immersive way possible.
        </p>

        <p>
          This guide covers everything — where to go, what to eat, how to move
          around the city, and insider tips that even locals swear by. Each day
          has been carefully curated to balance exploration, relaxation, and
          authentic Parisian indulgence.
        </p>
      </div>

      {/* ===== Section 1 ===== */}
      <section className="mt-14 space-y-6">
        <h2 className="text-3xl font-semibold text-gray-900">
          Day 1: Arrival and Evening by the Seine
        </h2>

        <p>
          Upon arrival at <strong>Charles de Gaulle Airport</strong>, take a
          taxi or the RER B train to reach central Paris. If you’re staying near
          the <strong>Champs-Élysées</strong> or the{" "}
          <strong>7th arrondissement</strong>, you’ll be perfectly positioned
          for sightseeing. Once settled, step out for a serene walk along the{" "}
          <strong>Seine River</strong> and enjoy your first views of the
          illuminated <strong>Eiffel Tower</strong> shimmering across the night
          sky.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            Check in at a boutique hotel like <em>Hotel Raphael</em> or{" "}
            <em>Le Meurice</em>.
          </li>
          <li>Take an evening river cruise with dinner and live music.</li>
          <li>Enjoy dessert at a local patisserie near Trocadéro.</li>
        </ul>

        <figure className="my-8">
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/assets/img/home1/destination-img1.jpg"
              alt="Eiffel Tower at sunset reflecting on the Seine River in Paris"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
          <figcaption className="mt-3 text-center text-sm text-gray-500">
            The Eiffel Tower shimmering at twilight — an unmissable Parisian
            moment.
          </figcaption>
        </figure>
      </section>

      {/* ===== Section 2 ===== */}
      <section className="mt-16 space-y-6">
        <h2 className="text-3xl font-semibold text-gray-900">
          Day 2: The Iconic Landmarks of Paris
        </h2>

        <p>
          Start your morning early at the <strong>Louvre Museum</strong>. Home
          to the legendary <em>Mona Lisa</em> and thousands of masterpieces,
          it’s a visual feast for art lovers. After the museum, stroll through
          the <strong>Tuileries Garden</strong> before heading to{" "}
          <strong>Notre-Dame Cathedral</strong>. Post-lunch, climb the{" "}
          <strong>Arc de Triomphe</strong> for a panoramic view of the city.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Visit the Louvre (book tickets online to skip queues).</li>
          <li>Lunch at Angelina Paris — famous for its hot chocolate.</li>
          <li>Sunset view from Arc de Triomphe’s terrace.</li>
        </ul>

        <blockquote className="border-primary border-l-4 bg-gray-50 px-6 py-4 text-lg text-gray-700 italic shadow-sm">
          “Paris is not just a city you visit. It’s a story you become part of —
          one street, one café, one glance at a time.”
        </blockquote>
      </section>

      {/* ===== Section 3 ===== */}
      <section className="mt-16 space-y-6">
        <h2 className="text-3xl font-semibold text-gray-900">
          Day 3: Art, Culture, and Montmartre
        </h2>

        <p>
          Paris is synonymous with art, and nowhere is this more visible than at
          the <strong>Musée d’Orsay</strong> and <strong>Montmartre</strong>.
          The Orsay, housed in a former railway station, boasts an unparalleled
          collection of Impressionist art by Monet, Degas, and Van Gogh. In the
          afternoon, head up to Montmartre to explore{" "}
          <strong>Sacré-Cœur Basilica</strong> and the artistic square,{" "}
          <em>Place du Tertre</em>.
        </p>

        <figure className="my-8">
          <div className="relative aspect-[16/7] w-full overflow-hidden rounded-2xl shadow-lg">
            <Image
              src="/assets/img/home1/destination-img2.jpg"
              alt="Louvre Museum interior view showcasing classical architecture"
              fill
              sizes="(max-width: 768px) 100vw, 700px"
              className="object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
          <figcaption className="mt-3 text-center text-sm text-gray-500">
            Inside the Louvre — where art and history live in eternal harmony.
          </figcaption>
        </figure>

        <p>
          End the day at one of Montmartre’s historic bistros. Don’t miss the
          chance to watch local artists painting live as the sun sets behind the
          Parisian skyline.
        </p>
      </section>

      {/* ===== Section 4 ===== */}
      <section className="mt-16 space-y-6">
        <h2 className="text-3xl font-semibold text-gray-900">
          Day 4–5: Day Trips and Hidden Gems
        </h2>

        <p>
          Dedicate these days to exploring beyond central Paris. Visit{" "}
          <strong>Versailles Palace</strong> to witness royal grandeur — the
          Hall of Mirrors, royal gardens, and fountains are pure opulence.
          Alternatively, take a wine tour in the{" "}
          <strong>Champagne region</strong> for a taste of France’s finest
          vineyards.
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>Half-day trip to Versailles via RER C train.</li>
          <li>Lunch at Café de Flore, a favorite of Hemingway and Picasso.</li>
          <li>Evening stroll through Saint-Germain-des-Prés.</li>
        </ul>

        <p>
          On your return, explore less-crowded attractions like the{" "}
          <strong>Luxembourg Gardens</strong> or{" "}
          <strong>Canal Saint-Martin</strong> — both perfect for unwinding after
          days of sightseeing.
        </p>
      </section>

      {/* ===== Table Section ===== */}
      <section className="mt-16">
        <h2 className="mb-6 text-3xl font-semibold text-gray-900">
          Suggested Itinerary Overview
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
          <table className="w-full border-collapse text-[15px] text-gray-700">
            <thead className="bg-gray-100">
              <tr>
                <th className="border-b px-4 py-3 text-left font-semibold">
                  Day
                </th>
                <th className="border-b px-4 py-3 text-left font-semibold">
                  Activity
                </th>
                <th className="border-b px-4 py-3 text-left font-semibold">
                  Location
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1", "Arrival, Evening at the Seine", "7th Arrondissement"],
                ["2", "Louvre, Arc de Triomphe", "Central Paris"],
                ["3", "Montmartre, Musée d’Orsay, Art Walk", "Montmartre"],
                ["4–5", "Versailles, Champagne Tour", "Outskirts"],
              ].map(([day, activity, location], i) => (
                <tr key={i} className="even:bg-gray-50">
                  <td className="border-b px-4 py-3">{day}</td>
                  <td className="border-b px-4 py-3">{activity}</td>
                  <td className="border-b px-4 py-3">{location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ===== Final Section ===== */}
      <section className="mt-16 space-y-6">
        <h2 className="text-3xl font-semibold text-gray-900">
          Day 6–7: Shopping, Markets, and Farewell
        </h2>
        <p>
          Paris is a fashion capital, and no trip is complete without a shopping
          spree. Begin at <strong>Galeries Lafayette</strong> and move to{" "}
          <strong>Le Marais</strong> for boutique stores. Don’t forget the flea
          markets at <strong>Saint-Ouen</strong> — a paradise for vintage
          lovers.
        </p>
        <p>
          Before you leave, take a short walk across{" "}
          <strong>Pont Alexandre III</strong> — often considered the most
          beautiful bridge in the city — for one last perfect view of the Eiffel
          Tower.
        </p>
        <p>
          Every traveler who visits Paris leaves with a unique story. From
          morning croissants to midnight walks along the Seine, Paris offers
          timeless moments that linger long after you’ve returned home.
        </p>

        <p className="text-gray-600">
          Plan your 2025 Paris trip with care, stay open to spontaneity, and let
          the city reveal itself one beautiful corner at a time. For expert
          assistance in flight bookings, curated tours, or hotel reservations,
          contact <a href="mailto:info@domain.com">info@domain.com</a> or call{" "}
          <strong>+1 (000) 000-0000</strong>.
        </p>
      </section>
      <Faqs />
      <ReviewForm />
    </article>
  );
};

export default Articles;
