"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonial = [
  {
    quote: "People haven’t always been there for me but music always has.",
    name: "Taylor Swift",
    title: "Singer-Songwriter",
  },
  {
    quote:
      "Music was my refuge. I could crawl into the space between the notes and curl my back to loneliness.",
    name: "Maya Angelou ",
    title: "Poet",
  },
  {
    quote:
      "Music is a language that doesn’t speak in particular words. It speaks in emotions, and if it’s in the bones, it’s in the bones.",
    name: "Keith Richards",
    title: "Musician",
  },
  {
    quote:
      "Music is a language that doesn’t speak in particular words. It speaks in emotions, and if it’s in the bones, it’s in the bones.",
    name: "Keith Richards ",
    title: "Musician",
  },
  {
    quote:
      "If music be the food of love, play on, Give me excess of it; that surfeiting, The appetite may sicken, and so die.",
    name: "William Shakespeare",
    title: "Playwright",
  },

  {
    quote:
      "If I were not a physicist, I would probably be a musician. I often think in music. I live my daydreams in music. I see my life in terms of music.",
    name: "Albert Einstein ",
    title: "Physict",
  },
  {
    quote:
      "Music, once admitted to the soul, becomes a sort of spirit, and never dies.",
    name: "Edward Bulwer-Lytton ",
    title: "Writer",
  },
];

function MusicSchoolTestimonialCards() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8 z-10">
        Hear Our Hormony : Voice Of Sucess
      </h2>
      <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={musicSchoolTestimonial}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default MusicSchoolTestimonialCards;
