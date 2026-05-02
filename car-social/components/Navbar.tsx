import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      gap: 20,
      padding: 15,
      borderBottom: "1px solid #ccc"
    }}>
      <Link href="/">🏠 Home</Link>
      <Link href="/feed">🚗 Feed</Link>
      <Link href="/garage">🏠 Garage</Link>
      <Link href="/map">🗺️ Mapa</Link>
    </nav>
  );
}
