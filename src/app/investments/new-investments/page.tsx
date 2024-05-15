import { type InferSelectModel } from "drizzle-orm";
import Link from "next/link";
import Card from "~/components/Card";
import { type products } from "~/server/db/schema";

export default async function Page() {
  const productsRes = await fetch("http://localhost:3000/api/products");
  const productsData = (await productsRes.json()) as InferSelectModel<
    typeof products
  >[];

  return (
    <main>
      <h1>Chose your new ISA</h1>
      <Card outer additionalStyles="grid grid-cols-4">
        {productsData.map(({ id, name, ipa, description }) => (
          <Card key={`new-investment-${id}`} additionalStyles="group">
            <Link
              className="flex flex-col items-center"
              href={`/investments/new-investments/${id}`}
            >
              <h2 className="text-companyPink group-has-[hover]:text-companyBlue mb-1 text-xl ">
                {name}
              </h2>
              <p className="mb-2 font-bold">Interest/Yr: {ipa}%</p>
              <p className="mb-2 line-clamp-4">{description}</p>
              <small className="decoration-companyBlue align-end hover:underline">
                Click to see more
              </small>
            </Link>
          </Card>
        ))}
      </Card>
    </main>
  );
}
