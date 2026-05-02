import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h1>🚗 Car Social</h1>

      <p>Red social de autos</p>

      <Link href="/feed">Ir al Feed</Link>
    </div>
  );
}
