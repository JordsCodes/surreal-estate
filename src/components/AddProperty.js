import React, { useState } from "react";
import axios from "axios";
import "../styles/add-property.css";
import Alert from "./Alert";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bedrooms: "",
      bathrooms: "",
      price: "",
      email: "",
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);

  const handleAddProperty = async (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/PropertyListing",
        {
          title: fields.title,
          city: fields.city,
          type: fields.type,
          bedrooms: fields.bedrooms,
          bathrooms: fields.bathrooms,
          price: fields.price,
          email: fields.email,
        }
      );
      console.log(response.data);
      setAlert({ message: "Property Added. :)", isSuccess: true });
    } catch (err) {
      setAlert({ message: "Server Error. Try again later!", isSuccess: false });
    }
  };

  const handleFieldChange = (event) => {
    const change = { ...fields, [event.target.name]: event.target.value };
    setFields(change);
  };

  return (
    <div className="add-property">
      <Alert message={alert.message} success={alert.isSuccess} />
      Property Description
      <form className="add-property-form" onSubmit={handleAddProperty}>
        <input
          id="title"
          name="title"
          value={fields.title}
          onChange={handleFieldChange}
        />
        <label className="input-field" htmlFor="city">
          City
          <select
            id="city"
            name="city"
            aria-label="city"
            value={fields.city}
            onChange={handleFieldChange}
          >
            <option value="Manchester">Manchester</option>
            <option value="Leeds">Leeds</option>
            <option value="Sheffield">Sheffield</option>
            <option value="Liverpool">Liverpool</option>
          </select>
        </label>
        <label className="input-field" htmlFor="type">
          Type
          <select
            id="type"
            name="type"
            aria-label="type"
            value={fields.type}
            onChange={handleFieldChange}
          >
            <option value="Flat">Flat</option>
            <option value="Detached">Detached</option>
            <option value="Semi-Detached">Semi-Detached</option>
            <option value="Terraced">Terraced</option>
            <option value="End of Terrace">End of Terrace</option>
            <option value="Cottage">Cottage</option>
            <option value="Bungalow">Bungalow</option>
          </select>
        </label>
        <label className="input-field" htmlFor="bedrooms">
          Bedrooms
          <input
            id="bedrooms"
            name="bedrooms"
            value={fields.bedrooms}
            onChange={handleFieldChange}
          />
        </label>
        <label className="input-field" htmlFor="bathrooms">
          Bathrooms
          <input
            id="bathrooms"
            name="bathrooms"
            value={fields.bathrooms}
            onChange={handleFieldChange}
          />
        </label>
        <label className="input-field" htmlFor="price">
          Price
          <input
            id="price"
            name="price"
            value={fields.price}
            onChange={handleFieldChange}
          />
        </label>
        <label className="input-field" htmlFor="email">
          Email
          <input
            id="email"
            name="email"
            value={fields.email}
            onChange={handleFieldChange}
          />
        </label>
        <button type="submit"> Add </button>
      </form>
    </div>
  );
};

export default AddProperty;
