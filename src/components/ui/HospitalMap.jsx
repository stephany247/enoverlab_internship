import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix default icon paths
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

export default function HospitalMap({ hospital }) {
  return (
    <div className="w-full h-64 rounded-2xl overflow-hidden">
      <MapContainer
        center={[hospital.lat, hospital.lng]}
        zoom={15}
        scrollWheelZoom={false}
        zoomControl={false}
        className="w-full h-full"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          //   attribution="&copy; OpenStreetMap contributors"
        />
        <Marker position={[hospital.lat, hospital.lng]}>
          <Popup>{hospital.name}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
