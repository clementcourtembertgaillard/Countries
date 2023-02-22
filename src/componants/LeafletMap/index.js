import {
  MapContainer,
  TileLayer,
  Marker,
  Popup
} from 'react-leaflet'

import "leaflet/dist/leaflet.css"; // Import Leaflet CSS

const LeafletMap = () => {
  const position = [51.505, -0.09]
  return (
    <div>
        <MapContainer style={{ height: "600px" }} center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
            <Popup>
                {position}
            </Popup>
        </Marker>
        </MapContainer>
    </div>
  );
};

export default LeafletMap;
