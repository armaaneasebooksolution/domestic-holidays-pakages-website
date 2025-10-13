import DestinationDetailsClient from "@/components/Destinations/DestinationDetailsClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL || ""}/data/destinations.json`,
  );
  const destinations = await res.json();

  return destinations.map((d) => ({
    slug: d.slug,
  }));
}

export default async function DestinationDetailPage({ params }) {
  const { slug } = params;

  // Fetch from static JSON in public
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL || ""}/data/destinations.json`,
  );
  const destinations = await res.json();

  const destination = destinations.find((d) => d.slug === slug);
  if (!destination) notFound();

  // Pass the destination data to client component
  return <DestinationDetailsClient destination={destination} />;
}
