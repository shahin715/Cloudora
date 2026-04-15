import Hero from "@/components/home/Hero";
import WhoWeAre from "@/components/home/WhoWeAre";
import KeyFacts from "@/components/home/KeyFacts";
import WhatWeDo from "@/components/home/WhatWeDo";
import Career from "@/components/home/Career"
import Testimonials from "@/components/home/Testimonials";
import EmployeeMotivation from "@/components/home/EmployeeMotivation";

export default function Home() {
  return (
    <div>
      <Hero />
      <WhoWeAre/>
      <KeyFacts/>
      <WhatWeDo/>
      <Career/>
      <Testimonials/>
      <EmployeeMotivation/>
    </div>
  );
}