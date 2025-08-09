// import React from "react";
// import { render, screen, fireEvent } from "@testing-library/react";
// import HomePage from "./HomePage";

// // Mock react-leaflet so it doesn't try to actually render a map
// jest.mock("react-leaflet", () => {
//   return {
//     MapContainer: ({ children }) => <div data-testid="map">{children}</div>,
//     TileLayer: () => <div data-testid="tile-layer"></div>,
//     Marker: ({ children, position }) => (
//       <div data-testid={`marker-${position.join(",")}`}>{children}</div>
//     ),
//     Popup: ({ children }) => <div data-testid="popup">{children}</div>,
//     useMap: () => ({ setView: jest.fn() })
//   };
// });

// describe("HomePage Component", () => {
//   test("renders city list", () => {
//     render(<HomePage />);
//     expect(screen.getByText(/Select a City/i)).toBeInTheDocument();
//     expect(screen.getByText("Visakhapatnam")).toBeInTheDocument();
//     expect(screen.getByText("Delhi")).toBeInTheDocument();
//   });

//   test("expands and collapses city towers list", () => {
//     render(<HomePage />);
//     const cityButton = screen.getByText("Visakhapatnam ▼");
//     fireEvent.click(cityButton);
//     expect(screen.getByText("Tower 1")).toBeInTheDocument();
//     fireEvent.click(cityButton);
//     expect(screen.queryByText("Tower 1")).not.toBeInTheDocument();
//   });

//   test("clicking tower sets position", () => {
//     render(<HomePage />);
//     fireEvent.click(screen.getByText("Visakhapatnam ▼"));
//     const towerButton = screen.getByText("Tower 1");
//     fireEvent.click(towerButton);
//     expect(screen.getByTestId("map")).toBeInTheDocument();
//   });
// });



import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import HomePage from "./HomePage";

// Mock react-leaflet (keep your existing mock)
jest.mock("react-leaflet", () => ({
  MapContainer: ({ children }) => <div data-testid="map">{children}</div>,
  TileLayer: () => <div data-testid="tile-layer"></div>,
  Marker: ({ children, position }) => (
    <div data-testid={`marker-${position.join(",")}`}>
      {children}
    </div>
  ),
  Popup: ({ children }) => <div data-testid="popup">{children}</div>,
  useMap: () => ({ setView: jest.fn() })
}));

describe("HomePage Component", () => {
  test("renders city list", () => {
    render(<HomePage />);
    expect(screen.getByText("Select a City")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Visakhapatnam" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Delhi" })).toBeInTheDocument();
  });

  test("expands and collapses city towers list", async () => {
    render(<HomePage />);
    
    // Click to expand Visakhapatnam
    const cityButton = screen.getByRole("button", { name: "Visakhapatnam" });
    fireEvent.click(cityButton);
    
    // Wait for and find the EXACT "Tower 1" button (not containing other numbers)
    const towerButton = await screen.findByRole("button", { 
      name: /^Tower 1$/i 
    });
    expect(towerButton).toBeInTheDocument();
    
    // Click to collapse
    fireEvent.click(cityButton);
    
    // Verify tower button disappears
    await waitFor(() => {
      expect(screen.queryByRole("button", { name: /^Tower 1$/i })).toBeNull();
    });
  });

  test("should render map after clicking tower", async () => {
    render(<HomePage />);
    
    // Expand Visakhapatnam
    const cityButton = screen.getByRole("button", { name: "Visakhapatnam" });
    fireEvent.click(cityButton);
    
    // Wait for and click the EXACT "Tower 1" button
    const towerButton = await screen.findByRole("button", { 
      name: /^Tower 1$/i 
    });
    fireEvent.click(towerButton);
    
    // Verify map renders
    expect(screen.getByTestId("map")).toBeInTheDocument();
    
    // Verify specific marker exists
    await waitFor(() => {
      expect(screen.getByTestId("marker-17.6868,83.2185")).toBeInTheDocument();
    });
    
    // Verify popup content if needed
    const popups = screen.getAllByTestId("popup");
    expect(popups.some(popup => popup.textContent.includes("Cell Tower 1 in Visakhapatnam"))).toBeTruthy();
  });
});