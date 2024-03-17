import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";

const renderApp = () => {
  render(<App />);
};

describe("It should test the App Component", () => {
  it("should render the app component", () => {
    renderApp();
  });
});
