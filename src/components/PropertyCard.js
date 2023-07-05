import React from "react";
import "../styles/property-card.css";
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
}) => {
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
    </div>
  );
};

export default PropertyCard;
