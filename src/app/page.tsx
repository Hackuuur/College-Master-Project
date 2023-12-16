import { Wrapper } from "@/components/Wrapper";
import React from "react";

const page = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Wrapper>
      <div>
        <img src="Home.jpg" alt="" />
      </div>
    </Wrapper>
  );
};

export default page;
