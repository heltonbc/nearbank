import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders nearBank header", () => {
    render(<App />);
    const linkElement = screen.getByText(/nearBank/i);
    expect(linkElement).toBeInTheDocument();
});
