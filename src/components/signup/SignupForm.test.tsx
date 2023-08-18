// Imports
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

// To Test
import SignupForm from "./SignupForm";

// Tests
describe("Renders SignupForm correctly", async () => {
  it("Should render SignupForm correctly", async () => {
    // Setup
    render(
      <Router>
        <SignupForm />
      </Router>
    );
    const h1 = await screen.queryByText("Sign Up");

    // Expectations
    expect(h1).not.toBeNull();
  });
});
