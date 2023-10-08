import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "../styles/saved-properties.css";

import PropertyCard from "./PropertyCard";

const SavedProperties = () => {
  const [properties, setProperties] = useState([]);
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      // Get all favourites from database.
      axios
        .get("http://localhost:4000/api/v1/Favourite")
        .then((response) => {
          // Map over favourites to return property data for each and set properties with data.
          response.data.forEach((property) =>
            axios
              .get(
                `http://localhost:4000/api/v1/PropertyListing/${property.propertyListing}`
              )
              .then((item) => setProperties((a) => [...a, item.data]))
          );
        })
        .catch((error) => console.log(error));
    }
  }, []);

  console.log(properties);

  return (
    <div className="saved-properties">
      <h1>Saved Properties</h1>
      <div className="property-cards">
        {properties.map((property) => (
          <PropertyCard
            title={property.title}
            city={property.city}
            type={property.type}
            bedrooms={property.bedrooms}
            bathrooms={property.bathrooms}
            price={property.price}
            email={property.email}
            key={properties.indexOf(property)}
          />
        ))}
      </div>
    </div>
  );
};

export default SavedProperties;
