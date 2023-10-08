import React from "react";
import "../styles/property-card.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faCity,
  faEnvelope,
  faHouse,
  faPoundSign,
  faToilet,
} from "@fortawesome/free-solid-svg-icons";

const handleSaveProperty = async (title, userId) => {
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

const PropertyCard = ({
  title,
  city,
  type,
  bedrooms,
  bathrooms,
  price,
  email,
  userId,
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
      {userId && (
        <Link
          to="/"
          type="submit"
          className="property-card_save"
          onClick={() => {
            handleSaveProperty(title, userId);
          }}
        >
          Save Property
        </Link>
      )}
    </div>
  );
};

export default PropertyCard;
