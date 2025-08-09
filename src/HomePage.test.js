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


jest.mock("react-leaflet", () => {
  const React = require("react");
  return {
    MapContainer: ({ children }) => <div data-testid="map">{children}</div>,
    TileLayer: () => <div data-testid="tile-layer"></div>,
    Marker: React.forwardRef(({ children, position }, ref) => (
      <div ref={ref} data-testid={`marker-${position.join(",")}`}>
        {children}
      </div>
    )),
    Popup: ({ children }) => <div data-testid="popup">{children}</div>,
    useMap: () => ({ setView: jest.fn() })
  };
});

describe("HomePage Component", () => {
  test("renders city list", () => {
    render(<HomePage />);
    expect(screen.getByText(/Select a City/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Visakhapatnam/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Delhi/i })).toBeInTheDocument();
  });

  test("expands and collapses city towers list", async () => {
    render(<HomePage />);
    
   
    const cityButton = screen.getByRole("button", { name: /Visakhapatnam/i });
    fireEvent.click(cityButton);
    
    
    await waitFor(() => {
      expect(screen.getByRole("button", { name: /Tower 1/i })).toBeInTheDocument();
    });
    
    
    fireEvent.click(cityButton);
    
   
    await waitFor(() => {
      expect(screen.queryByRole("button", { name: /Tower 1/i })).not.toBeInTheDocument();
    });
  });

  test("should render map after clicking tower", async () => {
    render(<HomePage />);
    
    
    const cityButton = screen.getByRole("button", { name: /Visakhapatnam/i });
    fireEvent.click(cityButton);
    
    
    const towerButton = await screen.findByRole("button", { 
      name: /^Tower 1$/i 
    }, { timeout: 3000 });
    fireEvent.click(towerButton);
    
    
    expect(screen.getByTestId("map")).toBeInTheDocument();
    
    
    await waitFor(() => {
      expect(screen.getByTestId("marker-17.6868,83.2185")).toBeInTheDocument();
    });
  });
});