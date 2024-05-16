import Link from "next/link";
import type { investments, products } from "~/server/db/schema";
import { type InferSelectModel } from "drizzle-orm";
import Card from "~/components/Card";
import { twMerge } from "tailwind-merge";
import { API_URL } from "../consts";

export default async function Page() {
  const investmentsRes = await fetch(`${API_URL}/investments`, {
    cache: "no-store",
  });
  const investmentsData = (await investmentsRes.json()) as InferSelectModel<
    typeof investments
  >[];

  const hasInvestments = investmentsData.length > 0;

  const getProduct = async (product_id: number) => {
    const productRes = await fetch(`${API_URL}/products?id=${product_id}`, {
      cache: "no-store",
    });
    return (await productRes.json()) as InferSelectModel<typeof products>;
  };

  const investedProducts = hasInvestments
    ? await Promise.all(
        investmentsData.map(async ({ product_id, ...rest }) => ({
          ...rest,
          product: await getProduct(product_id),
        })),
      )
    : [];

  return (
    <main>
      <h1>Your Investments</h1>
      {hasInvestments ? (
        <Card outer additionalStyles="grid grid-cols-4">
          {investedProducts.map(({ id, value, currency, status, product }) => (
            <Card key={`investment-${id}`}>
              <Link
                href={`/products/${product.id}`}
                className="flex flex-col items-center"
              >
                <h2 className="mb-1 text-xl text-companyPink">
                  {product.name}
                </h2>
                <p className="mb-2 font-bold">
                  Amount: {currency === "GBP" && "£"}
                  {value}
                </p>
                <p
                  className={twMerge(
                    status === "Pending" ? "text-amber-400" : "bg-green-400",
                    "mb-2",
                  )}
                >
                  {status}
                </p>
                <p className="mb-2">Interest/Yr: {product.ipa}</p>
                <p className="mb-2 line-clamp-2">{product.description}</p>
                <small className="decoration-companyBlue hover:underline">
                  Click to see more
                </small>
              </Link>
            </Card>
          ))}
        </Card>
      ) : (
        <Card outer additionalStyles="flex items-center justify-center">
          <Card additionalStyles="items-center justify-center flex flex-col">
            <p>You don&apos;t have any investments</p>
            <Link
              href="/investments/new-investments"
              className="text-lg text-companyPink decoration-companyBlue hover:underline"
            >
              Click to add investment
            </Link>
          </Card>
        </Card>
      )}
    </main>
  );
}
