"use client";
import React from "react";
import { Meteors } from "@/components/ui/meteors";
import { BackgroundBeams } from "@/components/ui/background-beams";

function page() {
  return (
    <div className="flex flex-auto justify-center mt-32 ">
      <h2 className="rounded text-6xl font-bold">Contact</h2>
      <p>
        We are here to help any question about our courses, programs, or events.
        Reach out and let us know how we can assist you in your musical journey
      </p>
      <BackgroundBeams />
    </div>
  );
}

export default page;
