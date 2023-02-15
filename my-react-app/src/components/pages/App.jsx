import React, { Fragment } from "react";
import HeroSection from "../templates/Index Page/HeroSection";
import Navigation from "../UI/organisms/Navigation/Navigation";
import AboutUsSection from "../templates/Index Page/AboutUsSection";
import OurService from "../templates/Index Page/OurService";
import FormSection from "../templates/Index Page/FormSection";

export default function App() {
  return (
    <Fragment>
      <Navigation />
      <HeroSection />
      <AboutUsSection />
      <OurService />
      <FormSection />
    </Fragment>
  );
}
