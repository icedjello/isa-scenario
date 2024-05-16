import { type InferSelectModel } from "drizzle-orm";
import Link from "next/link";
import { API_URL } from "~/app/consts";
import Card from "~/components/Card";
import { type products } from "~/server/db/schema";

export default async function Page() {
  const productsRes = await fetch(`${API_URL}/products`, {
    cache: "no-store",
  });
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
              <h2 className="mb-1 text-xl text-companyPink group-has-[hover]:text-companyBlue ">
                {name}
              </h2>
              <p className="mb-2 font-bold">Interest/Yr: {ipa}%</p>
              <p className="mb-2 line-clamp-4">{description}</p>
              <small className="align-end decoration-companyBlue hover:underline">
                Click to see more
              </small>
            </Link>
          </Card>
        ))}
      </Card>
    </main>
  );
}
