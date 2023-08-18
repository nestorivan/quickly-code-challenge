// Imports
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

// To Test
import ProfileAvatar from "./ProfileAvatar";
import { User } from "../../models/user";

// Tests
describe("Renders ProfileAvatar correctly", async () => {
  it("Should render ProfileAvatar correctly", async () => {
    // Setup
    const user: User = {
      full_name: "John Doe",
      email: "test@test.com",
      avatar_url: "https://bit.ly/broken-link",
      verified: true,
    } as User

    render(
        <ProfileAvatar user={user}/>
    );
    const name = await screen.queryByText("John Doe");

    // Expectations
    expect(name).not.toBeNull();
  });
});
