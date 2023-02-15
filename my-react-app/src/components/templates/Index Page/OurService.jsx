import React from "react";
import Containers from "../../UI/atoms/Containers";
import CardOurService from "../../UI/organisms/OurService/CardOurService";
import ImageService1 from "../../../assets/Images/ImageService-1.png";
import ImageService2 from "../../../assets/Images/ImageService-2.png";
import ImageService3 from "../../../assets/Images/ImageService-3.png";

export default function OurService() {
  return (
    <Containers className="md:py-12 py-4">
      <div className="md:text-start text-center">
        <h1 className="md:text-6xl text-5xl text-blue-500 leading-snug font-bold my-4">Our Service</h1>
        <h5 className="text-xl my-4">Some of the services incude the following :</h5>
      </div>
      <CardOurService
        title="1-Gurdianship Of Children Without Families"
        body="Lorem ipsum dolor sit amet consectetur. Id ullamcorper iaculis laoreet egestas velit phasellus euismod aliquam. Ullamcorper sit amet neque tellus libero sem dui tristique. Ac quam penatibus velit at ipsum aliquet tortor."
        image={ImageService1}
        classText={"order-last md:order-first md:grid md:place-content-center"}
        classImage={"order-first"}
      />
      <CardOurService
        title="
        2-Helping The Elderly"
        body="Lorem ipsum dolor sit amet consectetur. Id ullamcorper iaculis laoreet egestas velit phasellus euismod aliquam. Ullamcorper sit amet neque tellus libero sem dui tristique. Ac quam penatibus velit at ipsum aliquet tortor."
        image={ImageService2}
        classText={'md:grid md:place-content-center'}
        classImage={"order-first"}
      />
      <CardOurService
        title="3-Gurdianship Of Children Without Families"
        body="Lorem ipsum dolor sit amet consectetur. Id ullamcorper iaculis laoreet egestas velit phasellus euismod aliquam. Ullamcorper sit amet neque tellus libero sem dui tristique. Ac quam penatibus velit at ipsum aliquet tortor."
        image={ImageService3}
        classText={"order-last md:order-first md:grid md:place-content-center"}
      />
    </Containers>
  );
}
