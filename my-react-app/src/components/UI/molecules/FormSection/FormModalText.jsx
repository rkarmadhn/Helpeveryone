import React from "react";
import Buttons from "../../atoms/Button/Buttons";

export default function FormModalText() {
  return (
    <div className="md:grid md:place-content-center md:p-4 text-center md:text-start py-4">
      <h1 className="md:text-4xl text-2xl text-white leading-snug font-bold my-4">Do You Want To Have Special Help?</h1>
      <Buttons text="Get Started" className="bg-white text-blue-500  w-max" />
    </div>
  );
}
