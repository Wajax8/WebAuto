type Car = {
  id: string;
  brand: string;
  model: string;
  generation?: string;
  userId: string;
};

export default function CarCard({ car }: { car: Car }) {
  return (
    <div className="card">
      <h3>🚗 {car.brand} {car.model}</h3>

      <p>Generación: {car.generation || "N/A"}</p>

      <p style={{ color: "#ff6600" }}>
        Usuario: {car.userId}
      </p>
    </div>
  );
}
