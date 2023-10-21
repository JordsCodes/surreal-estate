import React, { useState } from "react";
import "../styles/property-card.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCity,
  faEnvelope,
  faHouse,
  faPoundSign,
  faToilet,
} from "@fortawesome/free-solid-svg-icons";

const PropertyCard = ({
  title,
  city,
  type,
  bedrooms,
  bathrooms,
  price,
  email,
  userId,
  saved,
  properties,
  setProperties,
}) => {
  const handleSaveProperty = async () => {
    const favourite = await axios
      .get("http://localhost:4000/api/v1/propertylisting")
      .then((response) => {
        const item = response.data.find((property) => property.title === title);
        return item;
      });
    axios.post("http://localhost:4000/api/v1/favourite", {
      propertyListing: favourite._id,
      fbUserId: userId,
    });
  };

  const handleDeleteProperty = async () => {
    const propertyListing = await axios
      .get("http://localhost:4000/api/v1/propertylisting")
      .then((response) => {
        const item = response.data.find((property) => property.title === title);
        return item;
      });
    const favourite = await axios
      .get("http://localhost:4000/api/v1/favourite")
      .then((response) => {
        const item = response.data.find(
          (target) => target.propertyListing === propertyListing._id
        );
        return item;
      });
    axios.delete(`http://localhost:4000/api/v1/favourite/${favourite._id}`);

    console.log(properties);
    setProperties(properties.filter((a) => a.title !== propertyListing.title));
  };

  return (
    <div className="property-card">
      <p className="property-card_title">{title}</p>
      <p>
        <FontAwesomeIcon icon={faCity} /> &nbsp;
        {city}
      </p>
      <p>
        <FontAwesomeIcon icon={faPoundSign} /> &nbsp;{price}
      </p>
      <p>
        <FontAwesomeIcon icon={faHouse} />
        &nbsp;{type}
      </p>
      <p>
        {bedrooms}&nbsp; <FontAwesomeIcon icon={faBed} /> &nbsp;&nbsp;
        {bathrooms}&nbsp; <FontAwesomeIcon icon={faToilet} />
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} /> &nbsp;
        {email}
      </p>
      {userId && (
        <button
          to="/"
          type="submit"
          className="property-card_save"
          onClick={() => {
            handleSaveProperty(title, userId);
          }}
        >
          Save Property
        </button>
      )}
      {saved && (
        <button
          type="submit"
          className="property-card_save"
          onClick={() => {
            handleDeleteProperty(title);
          }}
        >
          Remove Property
        </button>
      )}
    </div>
  );
};

export default PropertyCard;
