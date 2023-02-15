import React from "react";
import Containers from "../../UI/atoms/Containers";
import HeroImages from "../../../assets/Images/hero-image.png";
import Buttons from "../../UI/atoms/Button/Buttons";
import FlexItemsCenter from "../FlexItemsCenter";

export default function HeroSection() {
  return (
    <Containers className="grid md:grid-cols-2 pt-16 md:gap-0 gap-2">
      <FlexItemsCenter className="order-last md:order-first">
        <div className="md:text-start text-center">
          <h1 className="md:text-6xl text-5xl leading-snug font-bold my-4">
            We <span className="text-blue-500">Help</span> Everyone Here For A <span className="text-blue-500">Better Life</span>
          </h1>
          <h5 className="text-xl my-4">If you are someone who like to help other, get started</h5>
          <FlexItemsCenter className="gap-4 my-4 md:justify-start justify-center">
            <Buttons className="bg-blue-500 text-white" text="Get Started" />
            <h5 className="text-xl">Watch our Story</h5>
          </FlexItemsCenter>
        </div>
      </FlexItemsCenter>
      <FlexItemsCenter className="justify-center order-first md:order-last">
        <img src={HeroImages} alt="" />
      </FlexItemsCenter>
    </Containers>
  );
}
