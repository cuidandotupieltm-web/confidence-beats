import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Problem } from "@/components/landing/Problem";
import { Method } from "@/components/landing/Method";
import { Transformation } from "@/components/landing/Transformation";
import { VideoTestimonials } from "@/components/landing/VideoTestimonials";
import { WrittenTestimonials } from "@/components/landing/WrittenTestimonials";
import { TeacherStory } from "@/components/landing/TeacherStory";
import { Modules } from "@/components/landing/Modules";
import { Offer } from "@/components/landing/Offer";
import { Guarantee } from "@/components/landing/Guarantee";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Batería Desde Cero con Confianza | Aprende en 2 semanas" },
      {
        name: "description",
        content:
          "Aprende a tocar batería desde cero y gana confianza en solo 2 semanas con El Sistema Práctica Inteligente de Daniel Estrada. Acceso por $37.",
      },
      { property: "og:title", content: "Batería Desde Cero con Confianza" },
      {
        property: "og:description",
        content: "Aprende batería desde cero en 2 semanas. Sistema práctico para principiantes.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Hero />
      <Problem />
      <Method />
      <Transformation />
      <VideoTestimonials />
      <WrittenTestimonials />
      <TeacherStory />
      <Modules />
      <Offer />
      <Guarantee />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
