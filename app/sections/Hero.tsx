"use client";
import { Canvas } from "@react-three/fiber";
import type { JSX } from "react";

import React from "react";
import { Phone } from "../components/models/Phone";
import { Peper } from "../components/models/Peper";

import { Environment, Float, OrbitControls } from "@react-three/drei";
import ModelElement from "../components/ModelElement";
import ButtonLab from "../components/ButtonLab";

const Hero = (): JSX.Element => {
  return (
    <div className="font-body center-elements flex w-full flex-col gap-5">
      <div className="border-card font-body center-elements relative h-48 w-full flex-col gap-3 bg-zinc-800 sm:h-50 sm:w-sm md:h-56 md:w-md lg:h-72 lg:w-lg">
        <p className="center-elements flex gap-2 text-xs text-gray-400 uppercase">
          <span className="bg-secondary inline-block size-3 rounded-full shadow-[0_0_3px_var(--color-secondary)]"></span>{" "}
          current divergence
        </p>
        <h1 className="font-main text-main center-elements text-5xl font-extrabold sm:text-6xl lg:text-7xl">
          1.048596%
        </h1>
        <ModelElement position="top-0 right-0" scale={0.23} model={Phone} />
        <ModelElement
          position="-bottom-3 -left-3"
          scale={8}
          model={Peper}
          modelPosition={[0, -0.2, 0]}
        />
      </div>
      <div className="dark:text-white-50 font-secondary space-y-3 text-center text-sm text-black">
        <p className="paragraph uppercase">
          We are observing the microwave, hopefully we&apos;ll do a time machine
          with this
        </p>
        <p className="paragraph p-1 leading-6">
          Lad you want to join our laboratory? Dream on! I already have all the
          members you can click the button and be deceived.
        </p>
        <ButtonLab />
      </div>
    </div>
  );
};

export default Hero;
