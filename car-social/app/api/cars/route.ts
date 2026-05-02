import { prisma } from "@/lib/prisma";

// OBTENER TODOS LOS AUTOS (FEED)
export async function GET() {
  const cars = await prisma.car.findMany({
    include: {
      user: true,
    },
  });

  return Response.json(cars);
}

// CREAR AUTO
export async function POST(req: Request) {
  const body = await req.json();

  const car = await prisma.car.create({
    data: {
      brand: body.brand,
      model: body.model,
      generation: body.generation,
      userId: body.userId || "demo-user",
    },
  });

  return Response.json(car);
}
