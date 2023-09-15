import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import SideBar from "./SideBar";
import "../styles/properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({
    message: "",
    isSuccess: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then((response) => setProperties(response.data))
      .catch(() =>
        setAlert({
          message: "Server Error. Try again later!",
          isSuccess: false,
        })
      );
  }, []);
  const { search } = useLocation();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/PropertyListing${search}`)
      .then(({ data }) => setProperties(data))
      .catch((err) => console.error(err));
  }, [search]);

  return (
    <div className="properties-page">
      <Alert message={alert.message} success={alert.isSuccess} />
      <SideBar />
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

export default Properties;
