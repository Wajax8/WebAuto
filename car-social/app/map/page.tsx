"use client";

import { useEffect, useRef } from "react";
import "leaflet/dist/leaflet.css";

export default function MapPage() {
  const mapRef = useRef<any>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    import("leaflet").then((L) => {
      if (mapRef.current) return;

      const map = L.map("map").setView([-33.4489, -70.6693], 12);

      // 🌑 Mapa oscuro
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution: "&copy; OpenStreetMap & CARTO",
        }
      ).addTo(map);

      // 🟠 Icono naranja
      const orangeIcon = L.icon({
        iconUrl:
          "https://maps.gstatic.com/mapfiles/ms2/micons/orange-dot.png",
        iconSize: [32, 32],
        iconAnchor: [16, 32],
      });

      // 📍 Marker
      L.marker([-33.4489, -70.6693], { icon: orangeIcon })
        .addTo(map)
        .bindPopup("Autos en Santiago 🚗");

      mapRef.current = map;
    });

    // cleanup (evita bugs al navegar)
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
    <div
      style={{
        padding: 20,
        background: "#0a0a0a",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ color: "#ff6600" }}>🗺️ Mapa</h1>

      <div
        id="map"
        style={{
          height: 500,
          borderRadius: 12,
          overflow: "hidden",
        }}
      />
    </div>
  );
}
