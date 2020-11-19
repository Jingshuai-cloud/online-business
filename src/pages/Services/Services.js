import React from "react";
import { homeObjTwo, homeObjThree, homeObjFour } from "./Data";
import { InfoSection } from "../../components";

const Services = () => {
  return (
    <>
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Services;
