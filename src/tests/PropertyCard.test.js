import React from "react";
import { render } from "@testing-library/react";
import PropertyCard from "../components/PropertyCard";

describe("Property Card", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<PropertyCard />);
    const propertyCard = asFragment();

    expect(propertyCard).toMatchSnapshot();
  });

  it("renders correct value for title", () => {
    const component = render(<PropertyCard title="4 Bedroom Townhouse" />);
    const title = component.getByText("4 Bedroom Townhouse");

    expect(title.textContent).toBe("4 Bedroom Townhouse");
  });

  it("renders correct value for city", () => {
    const component = render(<PropertyCard city="Newcastle upon Tyne" />);
    const city = component.getByText("Newcastle upon Tyne");

    expect(city.textContent).toContain("Newcastle upon Tyne");
  });

  it("renders correct value for price", () => {
    const component = render(<PropertyCard price="300000" />);
    const price = component.getByText("300000");

    expect(price.textContent).toContain("300000");
  });

  it("renders correct value for type", () => {
    const component = render(<PropertyCard type="terrace" />);
    const type = component.getByText("terrace");

    expect(type.textContent).toContain("terrace");
  });

  it("renders correct value for bedrooms", () => {
    const component = render(<PropertyCard bedrooms="4" />);
    const bedrooms = component.getByText("4");

    expect(bedrooms.textContent).toContain("4");
  });

  it("renders correct value for bathrooms", () => {
    const component = render(<PropertyCard bathrooms="2" />);
    const bathrooms = component.getByText("2");

    expect(bathrooms.textContent).toContain("2");
  });

  it("renders correct value for email", () => {
    const component = render(<PropertyCard email="jordan@toon.co.uk" />);
    const email = component.getByText("jordan@toon.co.uk");

    expect(email.textContent).toContain("jordan@toon.co.uk");
  });
});
