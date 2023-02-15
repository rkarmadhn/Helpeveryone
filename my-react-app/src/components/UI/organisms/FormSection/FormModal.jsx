import React from "react";
import imageFloatingBig from "../../../../assets/Images/floatingImage.png";
import FormModalText from "../../molecules/FormSection/FormModalText";

export default function FormModal() {
  return (
    <div className="grid md:grid-cols-2 md:gap-4 bg-blue-500 md:border-8 md:border-white">
      <div className="image-floating md:grid md:place-content-center hidden md:p-4">
        <img src={imageFloatingBig} alt="" className="" />
      </div>
      <FormModalText />
    </div>
  );
}
