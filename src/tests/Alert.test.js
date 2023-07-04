import React from "react";
import { render } from "@testing-library/react";
import Alert from "../components/Alert";

describe("Alert", () => {
  it("displays error message", () => {
    const component = render(<Alert message="Error!" />);
    const alert = component.getByText("Error!");

    expect(alert.textContent).toBe("Error!");
    expect(alert).toMatchSnapshot();
  });
  it("displays success message", () => {
    const component = render(<Alert message="Success!!!" success />);
    const alert = component.getByText("Success!!!");

    expect(alert.textContent).toBe("Success!!!");
    expect(alert).toMatchSnapshot();
  });
  it("doesn't render if message is null", () => {
    const { asFragment } = render(<Alert message="" />);
    const alert = asFragment();

    expect(alert).toMatchSnapshot();
  });
});
