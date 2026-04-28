import React from "react";
import ThemeToggle from "./components/ThemeToggle";
import Hero from "./sections/Hero";
import { cards } from "./constants";
import Card from "./components/Card";
import { GiMechanicalArm } from "react-icons/gi";

export default function Home() {
  return (
    <main className="page-container">
      <Hero />
      <h1 className="title-text mt-10 flex gap-2">
        {" "}
        <GiMechanicalArm /> Feature Gadgets
      </h1>
      <div className="center-elements w-full flex-col gap-5 md:flex-row">
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </main>
  );
}
