// import React, { useState, useEffect,useRef} from 'react';
// import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Sample tower data
// const towersData = [
//     // Towers for Visakhapatnam
//     { id: 1, position: [17.6868, 83.2185], city: 'Visakhapatnam' },
//     { id: 2, position: [17.6889, 83.2182], city: 'Visakhapatnam' },
//     { id: 3, position: [17.6890, 83.2200], city: 'Visakhapatnam' },
//     { id: 4, position: [17.6850, 83.2150], city: 'Visakhapatnam' },
//     { id: 5, position: [17.6900, 83.2250], city: 'Visakhapatnam' },
//     { id: 6, position: [17.6750, 83.2100], city: 'Visakhapatnam' },
//     { id: 7, position: [17.6800, 83.2000], city: 'Visakhapatnam' },
//     { id: 8, position: [17.6950, 83.2300], city: 'Visakhapatnam' },
//     { id: 9, position: [17.6700, 83.1900], city: 'Visakhapatnam' },
//     { id: 10, position: [17.7000, 83.2400], city: 'Visakhapatnam' },
//     { id: 11, position: [17.6805, 83.2255], city: 'Visakhapatnam' },
//     { id: 12, position: [17.6915, 83.2210], city: 'Visakhapatnam' },

//     // Towers for Guntur
//     { id: 13, position: [16.3066, 80.4500], city: 'Guntur' },
//     { id: 14, position: [16.3080, 80.4550], city: 'Guntur' },
//     { id: 15, position: [16.3100, 80.4480], city: 'Guntur' },
//     { id: 16, position: [16.3050, 80.4400], city: 'Guntur' },
//     { id: 17, position: [16.3070, 80.4520], city: 'Guntur' },
//     { id: 18, position: [16.3000, 80.4600], city: 'Guntur' },
//     { id: 19, position: [16.3020, 80.4550], city: 'Guntur' },
//     { id: 20, position: [16.3090, 80.4400], city: 'Guntur' },
//     { id: 21, position: [16.3010, 80.4440], city: 'Guntur' },
//     { id: 22, position: [16.3085, 80.4560], city: 'Guntur' },
//     { id: 23, position: [16.3105, 80.4505], city: 'Guntur' },
//     { id: 24, position: [16.3055, 80.4485], city: 'Guntur' },

//     // Towers for Vijayawada
//     { id: 25, position: [16.5055, 80.6500], city: 'Vijayawada' },
//     { id: 26, position: [16.5060, 80.6520], city: 'Vijayawada' },
//     { id: 27, position: [16.5070, 80.6480], city: 'Vijayawada' },
//     { id: 28, position: [16.5080, 80.6510], city: 'Vijayawada' },
//     { id: 29, position: [16.5090, 80.6550], city: 'Vijayawada' },
//     { id: 30, position: [16.5100, 80.6530], city: 'Vijayawada' },
//     { id: 31, position: [16.5110, 80.6540], city: 'Vijayawada' },
//     { id: 32, position: [16.5120, 80.6500], city: 'Vijayawada' },
//     { id: 33, position: [16.5140, 80.6520], city: 'Vijayawada' },
//     { id: 34, position: [16.5150, 80.6510], city: 'Vijayawada' },
//     { id: 35, position: [16.5065, 80.6505], city: 'Vijayawada' },
//     { id: 36, position: [16.5085, 80.6555], city: 'Vijayawada' },

//     // Towers for Delhi
//     { id: 37, position: [28.6139, 77.2090], city: 'Delhi' },
//     { id: 38, position: [28.6145, 77.2095], city: 'Delhi' },
//     { id: 39, position: [28.6125, 77.2085], city: 'Delhi' },
//     { id: 40, position: [28.6150, 77.2100], city: 'Delhi' },
//     { id: 41, position: [28.6100, 77.2110], city: 'Delhi' },
//     { id: 42, position: [28.6130, 77.2070], city: 'Delhi' },
//     { id: 43, position: [28.6140, 77.2120], city: 'Delhi' },
//     { id: 44, position: [28.6090, 77.2105], city: 'Delhi' },
//     { id: 45, position: [28.6120, 77.2095], city: 'Delhi' },
//     { id: 46, position: [28.6160, 77.2130], city: 'Delhi' },
//     { id: 47, position: [28.6170, 77.2150], city: 'Delhi' },
//     { id: 48, position: [28.6180, 77.2170], city: 'Delhi' },

//     // Towers for Mumbai
//     { id: 49, position: [19.0760, 72.8777], city: 'Mumbai' },
//     { id: 50, position: [19.0780, 72.8790], city: 'Mumbai' },
//     { id: 51, position: [19.0750, 72.8780], city: 'Mumbai' },
//     { id: 52, position: [19.0770, 72.8800], city: 'Mumbai' },
//     { id: 53, position: [19.0740, 72.8760], city: 'Mumbai' },
//     { id: 54, position: [19.0790, 72.8820], city: 'Mumbai' },
//     { id: 55, position: [19.0720, 72.8740], city: 'Mumbai' },
//     { id: 56, position: [19.0730, 72.8750], city: 'Mumbai' },
//     { id: 57, position: [19.0800, 72.8830], city: 'Mumbai' },
//     { id: 58, position: [19.0810, 72.8840], city: 'Mumbai' },
//     { id: 59, position: [19.0700, 72.8700], city: 'Mumbai' },
//     { id: 60, position: [19.0680, 72.8680], city: 'Mumbai' },

//     // Towers for Kolkata
//     { id: 61, position: [22.5726, 88.3639], city: 'Kolkata' },
//     { id: 62, position: [22.5740, 88.3650], city: 'Kolkata' },
//     { id: 63, position: [22.5700, 88.3600], city: 'Kolkata' },
//     { id: 64, position: [22.5730, 88.3620], city: 'Kolkata' },
//     { id: 65, position: [22.5715, 88.3640], city: 'Kolkata' },
//     { id: 66, position: [22.5750, 88.3660], city: 'Kolkata' },
//     { id: 67, position: [22.5690, 88.3580], city: 'Kolkata' },
//     { id: 68, position: [22.5680, 88.3670], city: 'Kolkata' },
//     { id: 69, position: [22.5705, 88.3655], city: 'Kolkata' },
//     { id: 70, position: [22.5745, 88.3680], city: 'Kolkata' },
//     { id: 71, position: [22.5780, 88.3710], city: 'Kolkata' },
//     { id: 72, position: [22.5800, 88.3720], city: 'Kolkata' },

//     // Towers for Chennai
//     { id: 73, position: [13.0827, 80.2707], city: 'Chennai' },
//     { id: 74, position: [13.0840, 80.2720], city: 'Chennai' },
//     { id: 75, position: [13.0810, 80.2680], city: 'Chennai' },
//     { id: 76, position: [13.0830, 80.2710], city: 'Chennai' },
//     { id: 77, position: [13.0805, 80.2690], city: 'Chennai' },
//     { id: 78, position: [13.0850, 80.2730], city: 'Chennai' },
//     { id: 79, position: [13.0860, 80.2740], city: 'Chennai' },
//     { id: 80, position: [13.0780, 80.2660], city: 'Chennai' },
//     { id: 81, position: [13.0870, 80.2750], city: 'Chennai' },
//     { id: 82, position: [13.0790, 80.2670], city: 'Chennai' },
//     { id: 83, position: [13.0880, 80.2760], city: 'Chennai' },
//     { id: 84, position: [13.0890, 80.2780], city: 'Chennai' },

//     // Towers for New York
//     { id: 85, position: [40.7128, -74.0060], city: 'New York' },
//     { id: 86, position: [40.7130, -74.0050], city: 'New York' },
//     { id: 87, position: [40.7115, -74.0070], city: 'New York' },
//     { id: 88, position: [40.7150, -74.0080], city: 'New York' },
//     { id: 89, position: [40.7100, -74.0040], city: 'New York' },
//     { id: 90, position: [40.7180, -74.0020], city: 'New York' },
//     { id: 91, position: [40.7190, -74.0010], city: 'New York' },
//     { id: 92, position: [40.7120, -74.0030], city: 'New York' },
//     { id: 93, position: [40.7140, -74.0055], city: 'New York' },
//     { id: 94, position: [40.7070, -74.0090], city: 'New York' },

//     // Towers for London
//     { id: 95, position: [51.5074, -0.1278], city: 'London' },
//     { id: 96, position: [51.5080, -0.1260], city: 'London' },
//     { id: 97, position: [51.5060, -0.1300], city: 'London' },
//     { id: 98, position: [51.5090, -0.1250], city: 'London' },
//     { id: 99, position: [51.5050, -0.1220], city: 'London' },
//     { id: 100, position: [51.5040, -0.1310], city: 'London' },
//     { id: 101, position: [51.5030, -0.1280], city: 'London' },
//     { id: 102, position: [51.5020, -0.1230], city: 'London' },
//     { id: 103, position: [51.5110, -0.1270], city: 'London' },
//     { id: 104, position: [51.5100, -0.1290], city: 'London' },
// ];

// // Custom hook to set map view
// const ChangeView = ({ center, zoom }) => {
//     const map = useMap();
//     useEffect(() => {
//         map.setView(center, zoom);
//     }, [map, center, zoom]);

//     return null;
// };

// const HomePage = () => {
//     const [position, setPosition] = useState([20.5937, 78.9629]); // Default position
//     const [openCity, setOpenCity] = useState(null); // To track which city is open
//     const [zoomLevel, setZoomLevel] = useState(10); // Default zoom level
//     const [selectedTowerId, setSelectedTowerId] = useState(null); // To track the selected tower
//     const markerRefs = useRef({selectedTowerId});

//     const handleCityClick = (city) => {
//         setOpenCity(openCity === city ? null : city); // Toggle city open/close
//     };

//     const handleTowerClick = (tower) => {
//         setPosition(tower.position); // Set position to tower
//         setZoomLevel(15); // Zoom in on the tower
//         setSelectedTowerId(tower.id); // Set the selected tower
//     };

//     // Get unique city names from towersData
//     const cities = [...new Set(towersData.map(tower => tower.city))];

//    const createDefaultIcon = () => {
//     return L.icon({
//         iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png',
//         iconSize: [25, 41],
//         iconAnchor: [12, 41],
//         popupAnchor: [1, -34],
//         shadowUrl: 'https://unpkg.com/leaflet/dist/images/marker-shadow.png',
//         shadowSize: [41, 41],
//     });
// };

// useEffect(() => {
//     if (selectedTowerId && markerRefs.current[selectedTowerId]) {
//         markerRefs.current[selectedTowerId].openPopup(); // Open the popup for the selected tower
//     }
// }, [selectedTowerId]);

//     return (
//         <div style={{ display: 'flex' }}>
//             <div style={{ width: '300px', height: '100vh', overflowY: 'scroll', position: 'absolute', left: 0, top: 0, backgroundColor: 'white', padding: '10px', boxShadow: '2px 0 5px rgba(0,0,0,0.5)' }}>
//                 <h2>Select a City</h2>
//                 {cities.map((city) => (
//                     <div key={city}>
//                         <button
//                             onClick={() => handleCityClick(city)}
//                             style={{ display: 'block', margin: '5px', width: '100%' }}
//                         >
//                             {city} {openCity === city ? '▲' : '▼'}
//                         </button>
//                         {openCity === city && (
//                             <div style={{ paddingLeft: '10px' }}>
//                                 {towersData.filter(tower => tower.city === city).map((tower) => (
//                                     <button
//                                         key={tower.id}
//                                         onClick={() => handleTowerClick(tower)}
//                                         style={{ display: 'block', margin: '2px', width: '100%' }}
//                                         icon={createDefaultIcon()}
//                                     >
//                                         Tower {tower.id}
//                                     </button>
//                                 ))}
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//             <MapContainer center={position} zoom={zoomLevel} style={{ height: '100vh', width: '100%', marginLeft: '300px' }}>
//                 <TileLayer
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                 />
//                 <ChangeView center={position} zoom={zoomLevel} />
//                 {towersData.map((tower) => (
//                     <Marker
//                         key={tower.id}
//                         position={tower.position}
//                         icon={createDefaultIcon(selectedTowerId === tower.id)} // Use the appropriate icon
                        
//                         ref={ref => { markerRefs.current[tower.id] = ref; }}
//                     >
//                         <Popup>Cell Tower {tower.id} in {tower.city}</Popup>
//                     </Marker>
//                 ))}
//             </MapContainer>
//         </div>
//     );
// };

// export default HomePage;



import React, { useState, useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const towersData = [
    // Towers for Visakhapatnam
    { id: 1, position: [17.6868, 83.2185], city: 'Visakhapatnam' },
    { id: 2, position: [17.6889, 83.2182], city: 'Visakhapatnam' },
    { id: 3, position: [17.6890, 83.2200], city: 'Visakhapatnam' },
    { id: 4, position: [17.6850, 83.2150], city: 'Visakhapatnam' },
    { id: 5, position: [17.6900, 83.2250], city: 'Visakhapatnam' },
    { id: 6, position: [17.6750, 83.2100], city: 'Visakhapatnam' },
    { id: 7, position: [17.6800, 83.2000], city: 'Visakhapatnam' },
    { id: 8, position: [17.6950, 83.2300], city: 'Visakhapatnam' },
    { id: 9, position: [17.6700, 83.1900], city: 'Visakhapatnam' },
    { id: 10, position: [17.7000, 83.2400], city: 'Visakhapatnam' },
    { id: 11, position: [17.6805, 83.2255], city: 'Visakhapatnam' },
    { id: 12, position: [17.6915, 83.2210], city: 'Visakhapatnam' },

    // Towers for Guntur
    { id: 13, position: [16.3066, 80.4500], city: 'Guntur' },
    { id: 14, position: [16.3080, 80.4550], city: 'Guntur' },
    { id: 15, position: [16.3100, 80.4480], city: 'Guntur' },
    { id: 16, position: [16.3050, 80.4400], city: 'Guntur' },
    { id: 17, position: [16.3070, 80.4520], city: 'Guntur' },
    { id: 18, position: [16.3000, 80.4600], city: 'Guntur' },
    { id: 19, position: [16.3020, 80.4550], city: 'Guntur' },
    { id: 20, position: [16.3090, 80.4400], city: 'Guntur' },
    { id: 21, position: [16.3010, 80.4440], city: 'Guntur' },
    { id: 22, position: [16.3085, 80.4560], city: 'Guntur' },
    { id: 23, position: [16.3105, 80.4505], city: 'Guntur' },
    { id: 24, position: [16.3055, 80.4485], city: 'Guntur' },

    // Towers for Vijayawada
    { id: 25, position: [16.5055, 80.6500], city: 'Vijayawada' },
    { id: 26, position: [16.5060, 80.6520], city: 'Vijayawada' },
    { id: 27, position: [16.5070, 80.6480], city: 'Vijayawada' },
    { id: 28, position: [16.5080, 80.6510], city: 'Vijayawada' },
    { id: 29, position: [16.5090, 80.6550], city: 'Vijayawada' },
    { id: 30, position: [16.5100, 80.6530], city: 'Vijayawada' },
    { id: 31, position: [16.5110, 80.6540], city: 'Vijayawada' },
    { id: 32, position: [16.5120, 80.6500], city: 'Vijayawada' },
    { id: 33, position: [16.5140, 80.6520], city: 'Vijayawada' },
    { id: 34, position: [16.5150, 80.6510], city: 'Vijayawada' },
    { id: 35, position: [16.5065, 80.6505], city: 'Vijayawada' },
    { id: 36, position: [16.5085, 80.6555], city: 'Vijayawada' },

    // Towers for Delhi
    { id: 37, position: [28.6139, 77.2090], city: 'Delhi' },
    { id: 38, position: [28.6145, 77.2095], city: 'Delhi' },
    { id: 39, position: [28.6125, 77.2085], city: 'Delhi' },
    { id: 40, position: [28.6150, 77.2100], city: 'Delhi' },
    { id: 41, position: [28.6100, 77.2110], city: 'Delhi' },
    { id: 42, position: [28.6130, 77.2070], city: 'Delhi' },
    { id: 43, position: [28.6140, 77.2120], city: 'Delhi' },
    { id: 44, position: [28.6090, 77.2105], city: 'Delhi' },
    { id: 45, position: [28.6120, 77.2095], city: 'Delhi' },
    { id: 46, position: [28.6160, 77.2130], city: 'Delhi' },
    { id: 47, position: [28.6170, 77.2150], city: 'Delhi' },
    { id: 48, position: [28.6180, 77.2170], city: 'Delhi' },

    // Towers for Mumbai
    { id: 49, position: [19.0760, 72.8777], city: 'Mumbai' },
    { id: 50, position: [19.0780, 72.8790], city: 'Mumbai' },
    { id: 51, position: [19.0750, 72.8780], city: 'Mumbai' },
    { id: 52, position: [19.0770, 72.8800], city: 'Mumbai' },
    { id: 53, position: [19.0740, 72.8760], city: 'Mumbai' },
    { id: 54, position: [19.0790, 72.8820], city: 'Mumbai' },
    { id: 55, position: [19.0720, 72.8740], city: 'Mumbai' },
    { id: 56, position: [19.0730, 72.8750], city: 'Mumbai' },
    { id: 57, position: [19.0800, 72.8830], city: 'Mumbai' },
    { id: 58, position: [19.0810, 72.8840], city: 'Mumbai' },
    { id: 59, position: [19.0700, 72.8700], city: 'Mumbai' },
    { id: 60, position: [19.0680, 72.8680], city: 'Mumbai' },

    // Towers for Kolkata
    { id: 61, position: [22.5726, 88.3639], city: 'Kolkata' },
    { id: 62, position: [22.5740, 88.3650], city: 'Kolkata' },
    { id: 63, position: [22.5700, 88.3600], city: 'Kolkata' },
    { id: 64, position: [22.5730, 88.3620], city: 'Kolkata' },
    { id: 65, position: [22.5715, 88.3640], city: 'Kolkata' },
    { id: 66, position: [22.5750, 88.3660], city: 'Kolkata' },
    { id: 67, position: [22.5690, 88.3580], city: 'Kolkata' },
    { id: 68, position: [22.5680, 88.3670], city: 'Kolkata' },
    { id: 69, position: [22.5705, 88.3655], city: 'Kolkata' },
    { id: 70, position: [22.5745, 88.3680], city: 'Kolkata' },
    { id: 71, position: [22.5780, 88.3710], city: 'Kolkata' },
    { id: 72, position: [22.5800, 88.3720], city: 'Kolkata' },

    // Towers for Chennai
    { id: 73, position: [13.0827, 80.2707], city: 'Chennai' },
    { id: 74, position: [13.0840, 80.2720], city: 'Chennai' },
    { id: 75, position: [13.0810, 80.2680], city: 'Chennai' },
    { id: 76, position: [13.0830, 80.2710], city: 'Chennai' },
    { id: 77, position: [13.0805, 80.2690], city: 'Chennai' },
    { id: 78, position: [13.0850, 80.2730], city: 'Chennai' },
    { id: 79, position: [13.0860, 80.2740], city: 'Chennai' },
    { id: 80, position: [13.0780, 80.2660], city: 'Chennai' },
    { id: 81, position: [13.0870, 80.2750], city: 'Chennai' },
    { id: 82, position: [13.0790, 80.2670], city: 'Chennai' },
    { id: 83, position: [13.0880, 80.2760], city: 'Chennai' },
    { id: 84, position: [13.0890, 80.2780], city: 'Chennai' },

    // Towers for New York
    { id: 85, position: [40.7128, -74.0060], city: 'New York' },
    { id: 86, position: [40.7130, -74.0050], city: 'New York' },
    { id: 87, position: [40.7115, -74.0070], city: 'New York' },
    { id: 88, position: [40.7150, -74.0080], city: 'New York' },
    { id: 89, position: [40.7100, -74.0040], city: 'New York' },
    { id: 90, position: [40.7180, -74.0020], city: 'New York' },
    { id: 91, position: [40.7190, -74.0010], city: 'New York' },
    { id: 92, position: [40.7120, -74.0030], city: 'New York' },
    { id: 93, position: [40.7140, -74.0055], city: 'New York' },
    { id: 94, position: [40.7070, -74.0090], city: 'New York' },

    // Towers for London
    { id: 95, position: [51.5074, -0.1278], city: 'London' },
    { id: 96, position: [51.5080, -0.1260], city: 'London' },
    { id: 97, position: [51.5060, -0.1300], city: 'London' },
    { id: 98, position: [51.5090, -0.1250], city: 'London' },
    { id: 99, position: [51.5050, -0.1220], city: 'London' },
    { id: 100, position: [51.5040, -0.1310], city: 'London' },
    { id: 101, position: [51.5030, -0.1280], city: 'London' },
    { id: 102, position: [51.5020, -0.1230], city: 'London' },
    { id: 103, position: [51.5110, -0.1270], city: 'London' },
    { id: 104, position: [51.5100, -0.1290], city: 'London' },
];

// Custom hook to set map view
const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [map, center, zoom]);
  return null;
};

const HomePage = () => {
  const [position, setPosition] = useState([20.5937, 78.9629]);
  const [openCity, setOpenCity] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(10);
  const [selectedTowerId, setSelectedTowerId] = useState(null);
  const markerRefs = useRef({});

  const handleCityClick = (city) => {
    setOpenCity(openCity === city ? null : city);
  };

  const handleTowerClick = (tower) => {
    setPosition(tower.position);
    setZoomLevel(15);
    setSelectedTowerId(tower.id);
  };

  const cities = [...new Set(towersData.map(tower => tower.city))];

  const createDefaultIcon = () => {
    return L.icon({
      iconUrl: 'https://unpkg.com/leaflet/dist/images/marker-icon.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl: 'https://unpkg.com/leaflet/dist/images/marker-shadow.png',
      shadowSize: [41, 41],
    });
  };

  useEffect(() => {
    if (selectedTowerId && markerRefs.current[selectedTowerId]) {
      markerRefs.current[selectedTowerId].openPopup();
    }
  }, [selectedTowerId]);

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ 
        width: '300px', 
        height: '100vh', 
        overflowY: 'scroll', 
        position: 'absolute', 
        left: 0, 
        top: 0, 
        backgroundColor: 'white', 
        padding: '10px', 
        boxShadow: '2px 0 5px rgba(0,0,0,0.5)' 
      }}>
        <h2>Select a City</h2>
        {cities.map((city) => (
          <div key={city}>
            <button
              onClick={() => handleCityClick(city)}
              style={{ display: 'block', margin: '5px', width: '100%' }}
              data-testid={`city-${city}-button`}
            >
              {city} {openCity === city ? '▲' : '▼'}
            </button>
            {openCity === city && (
              <div style={{ paddingLeft: '10px' }}>
                {towersData
                  .filter(tower => tower.city === city)
                  .map((tower) => (
                    <button
                      key={tower.id}
                      onClick={() => handleTowerClick(tower)}
                      style={{ display: 'block', margin: '2px', width: '100%' }}
                      data-testid={`tower-${tower.id}-button`}
                    >
                      Tower {tower.id}
                    </button>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
      <MapContainer 
        center={position} 
        zoom={zoomLevel} 
        style={{ height: '100vh', width: '100%', marginLeft: '300px' }}
        data-testid="map"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <ChangeView center={position} zoom={zoomLevel} />
        {towersData.map((tower) => (
          <Marker
            key={tower.id}
            position={tower.position}
            icon={createDefaultIcon()}
            ref={ref => { markerRefs.current[tower.id] = ref; }}
            data-testid={`marker-${tower.position[0]},${tower.position[1]}`}
          >
            <Popup data-testid={`popup-${tower.id}`}>
              Cell Tower {tower.id} in {tower.city}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default HomePage;
