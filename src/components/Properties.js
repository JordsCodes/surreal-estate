import React from "react";
import PropertyCard from "./PropertyCard";

const Properties = () => {
  return (
    <div>
      Properties Page
      <PropertyCard
        title="4 Bedroom Townhouse"
        city="Newcastle"
        type="Terrace"
        bedrooms="4"
        bathrooms="2"
        price="300000"
        email="jordan@toon.co.uk"
      />
    </div>
  );
};

export default Properties;
