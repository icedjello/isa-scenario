import { db } from "~/server/db";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const productId = searchParams.get("id");

  if (productId) {
    const product = await db.query.products.findFirst({
      where: (product, { eq }) => eq(product.id, Number(productId)),
    });

    if (product) {
      return Response.json(product);
    } else {
      return Response.json(null, {
        status: 404,
      });
    }
  } else {
    const products = await db.query.products.findMany();
    return Response.json(products);
  }
}
