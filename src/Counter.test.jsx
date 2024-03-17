import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Counter from "./Counter";
import * as apiUtilityFunc from "./utils/apiUtils.js";
import "@testing-library/jest-dom/extend-expect";

const renderApp = () => {
  jest.spyOn(apiUtilityFunc, "getData").mockImplementation((url) => {
    return new Promise((resolve, reject) => {
      const resolvedValue = {
        data: [
          {
            userId: 1,
            id: 1,
            title: "delectus aut autem",
            completed: false,
          },
          {
            userId: 1,
            id: 2,
            title: "quis ut nam facilis et officia qui",
            completed: false,
          },
        ],
      };

      resolve(resolvedValue);
    });
  });

  render(<Counter />);
};

describe("It should test the App Component", () => {
  it("should render the app component", () => {
    renderApp();
  });

  it("should check where the text is Counter", () => {
    renderApp();
    const counterText = screen.getByTestId("counter-text");
    expect(counterText).toHaveTextContent("Counter App");
  });

  it("should increase the Counter by 1", () => {
    renderApp();
    const counter = screen.getByTestId("counter");
    expect(counter).toHaveTextContent(0);

    const increamentBtn = screen.getByTestId("increament-btn");
    fireEvent.click(increamentBtn);

    expect(counter).toHaveTextContent(1);
  });

  it("should decrease the Counter by 1", () => {
    renderApp();
    const counter = screen.getByTestId("counter");
    expect(counter).toHaveTextContent(0);

    const decreamentBtn = screen.getByTestId("decreament-btn");
    fireEvent.click(decreamentBtn);

    expect(counter).toHaveTextContent(-1);
  });
});
