import React from "react";
import ShowHeader from "../app/components/header/ShowHeader";
import Carousel from "../app/components/home/Carousel";
import Description from "../app/components/home/Description";
import GridHover from "../app/components/home/GridHover";
import HeaderFooterWraper from "../app/components/layout/InitWraper";

const index = () => {
  return (
    <HeaderFooterWraper>
      <ShowHeader />
      <Description />
      <GridHover />
      <Carousel />
    </HeaderFooterWraper>
  );
};

export default index;
