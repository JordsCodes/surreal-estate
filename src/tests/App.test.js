import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import App from "../components/App";

test("renders heading", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const heading = screen.getByText(/Surreal Estate/i);
  expect(heading).toBeInTheDocument();
});
