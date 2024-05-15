import { notFound } from "next/navigation";
import { z } from "zod";
import { type products } from "~/server/db/schema";
import { type InferSelectModel } from "drizzle-orm";
import Card from "~/components/Card";

type Props = {
  params: { id: number };
};

const paramsSchema = z.object({
  id: z.number(),
});

export default async function Page({ params }: Props) {
  const paramParseResult = paramsSchema.safeParse({ id: Number(params.id) });

  if (!paramParseResult.success) {
    notFound();
  }

  const productsRes = await fetch(
    `http://localhost:3000/api/products?id=${params.id}`,
    { cache: "no-store" },
  );

  if (productsRes.status >= 400) {
    notFound();
  }

  const productRes = await fetch(
    `http://localhost:3000/api/products?id=${params.id}`,
    {
      cache: "no-store",
    },
  );

  const product = (await productRes.json()) as InferSelectModel<
    typeof products
  >;

  return (
    <main>
      <Card additionalStyles="flex flex-col items-center justify-center max-w-[400px]">
        <h1 className="text-companyPink mb-2 text-3xl">{product.name}</h1>
        <h2 className="text-companyPurple mb-2 text-2xl">
          Interest/Yr: {product.ipa}
        </h2>
        <p className="mb-2">{product.description}</p>
      </Card>
    </main>
  );
}
