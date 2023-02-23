import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

const icon = L.icon({
  iconUrl:
    "https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-PNG-HD.png",
  iconSize: [32, 32], // size of the icon
  iconAnchor: [16, 16] // point of the icon which will correspond to marker's location
});

const LeafletMap = (position) => {
  return (
    <div>
        <MapContainer style={{ height: "300px" }} center={position.position} zoom={12} scrollWheelZoom={true}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
        <Marker position={position.position} icon={icon}>
            <Popup>
                {position.position}
            </Popup>
        </Marker>
        </MapContainer>
    </div>
  );
};

export default LeafletMap;
