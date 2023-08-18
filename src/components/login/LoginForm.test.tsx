// Imports
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// To Test
import LoginForm from "./LoginForm";

// Tests
describe("Renders LoginForm correctly", async () => {
  it("Should render LoginForm correctly", async () => {
    // Setup
    render(
      <Router>
        <LoginForm />
      </Router>
    );
    const h1 = await screen.queryByText("Login");

    // Expectations
    expect(h1).not.toBeNull();
  });
});
