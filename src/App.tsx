import { MapContainer, TileLayer } from "react-leaflet";
import "./App.css";

function App() {
  return <MapContainer center={[51.40, -55.79]} zoom={12} id="map">
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
  </MapContainer>;
}

export default App;
