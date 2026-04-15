import Hero from "@/components/home/Hero";
import WhoWeAre from "@/components/home/WhoWeAre";
import KeyFacts from "@/components/home/KeyFacts";
import WhatWeDo from "@/components/home/WhatWeDo";
import Career from "@/components/home/Career"

export default function Home() {
  return (
    <div>
      <Hero />
      <WhoWeAre/>
      <KeyFacts/>
      <WhatWeDo/>
      <Career/>
    </div>
  );
}