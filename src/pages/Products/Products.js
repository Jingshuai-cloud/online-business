import React from "react";
import { homeObjThree, homeObjFour } from "./Data";
import { InfoSection } from "../../components";

const Products = () => {
  return (
    <>
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Products;
