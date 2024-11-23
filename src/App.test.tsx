import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./components/App"; // Update path if necessary

test("renders app component", () => {
  render(<App />);
  expect(screen.getByText(/hello/i)).toBeInTheDocument(); // Adjust as needed
});
