import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import App from "./App";

// Page test
describe("Renders main page correctly", async () => {
  it("Should render the page correctly", async () => {
    // Setup
    render(<App />);
    const title = await screen.queryByText("#todo");

    // Expectations
    expect(title).toBeInTheDocument();
  });
});

// Basic test examples
describe("Basic test examples", async () => {
  it("Should return 2", async () => {
    const a = 1;
    const b = 1;

    expect(a + b).toBe(2);
  });

  it("Should return 4", async () => {
    const a = 2;
    const b = 2;

    expect(a + b).toBe(4);
  });

  it('Should return "Hello World!"', async () => {
    const hello = "Hello";
    const world = "World!";

    expect(`${hello} ${world}`).toBe("Hello World!");
  });
});
